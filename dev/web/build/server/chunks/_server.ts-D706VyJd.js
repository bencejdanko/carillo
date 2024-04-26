import { GoogleGenerativeAI } from '@google/generative-ai';
import 'zod';

var secureJsonParse = {exports: {}};

var hasRequiredSecureJsonParse;

function requireSecureJsonParse () {
	if (hasRequiredSecureJsonParse) return secureJsonParse.exports;
	hasRequiredSecureJsonParse = 1;

	const hasBuffer = typeof Buffer !== 'undefined';
	const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
	const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;

	function _parse (text, reviver, options) {
	  // Normalize arguments
	  if (options == null) {
	    if (reviver !== null && typeof reviver === 'object') {
	      options = reviver;
	      reviver = undefined;
	    }
	  }

	  if (hasBuffer && Buffer.isBuffer(text)) {
	    text = text.toString();
	  }

	  // BOM checker
	  if (text && text.charCodeAt(0) === 0xFEFF) {
	    text = text.slice(1);
	  }

	  // Parse normally, allowing exceptions
	  const obj = JSON.parse(text, reviver);

	  // Ignore null and non-objects
	  if (obj === null || typeof obj !== 'object') {
	    return obj
	  }

	  const protoAction = (options && options.protoAction) || 'error';
	  const constructorAction = (options && options.constructorAction) || 'error';

	  // options: 'error' (default) / 'remove' / 'ignore'
	  if (protoAction === 'ignore' && constructorAction === 'ignore') {
	    return obj
	  }

	  if (protoAction !== 'ignore' && constructorAction !== 'ignore') {
	    if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {
	      return obj
	    }
	  } else if (protoAction !== 'ignore' && constructorAction === 'ignore') {
	    if (suspectProtoRx.test(text) === false) {
	      return obj
	    }
	  } else {
	    if (suspectConstructorRx.test(text) === false) {
	      return obj
	    }
	  }

	  // Scan result for proto keys
	  return filter(obj, { protoAction, constructorAction, safe: options && options.safe })
	}

	function filter (obj, { protoAction = 'error', constructorAction = 'error', safe } = {}) {
	  let next = [obj];

	  while (next.length) {
	    const nodes = next;
	    next = [];

	    for (const node of nodes) {
	      if (protoAction !== 'ignore' && Object.prototype.hasOwnProperty.call(node, '__proto__')) { // Avoid calling node.hasOwnProperty directly
	        if (safe === true) {
	          return null
	        } else if (protoAction === 'error') {
	          throw new SyntaxError('Object contains forbidden prototype property')
	        }

	        delete node.__proto__; // eslint-disable-line no-proto
	      }

	      if (constructorAction !== 'ignore' &&
	          Object.prototype.hasOwnProperty.call(node, 'constructor') &&
	          Object.prototype.hasOwnProperty.call(node.constructor, 'prototype')) { // Avoid calling node.hasOwnProperty directly
	        if (safe === true) {
	          return null
	        } else if (constructorAction === 'error') {
	          throw new SyntaxError('Object contains forbidden prototype property')
	        }

	        delete node.constructor;
	      }

	      for (const key in node) {
	        const value = node[key];
	        if (value && typeof value === 'object') {
	          next.push(value);
	        }
	      }
	    }
	  }
	  return obj
	}

	function parse (text, reviver, options) {
	  const stackTraceLimit = Error.stackTraceLimit;
	  Error.stackTraceLimit = 0;
	  try {
	    return _parse(text, reviver, options)
	  } finally {
	    Error.stackTraceLimit = stackTraceLimit;
	  }
	}

	function safeParse (text, reviver) {
	  const stackTraceLimit = Error.stackTraceLimit;
	  Error.stackTraceLimit = 0;
	  try {
	    return _parse(text, reviver, { safe: true })
	  } catch (_e) {
	    return null
	  } finally {
	    Error.stackTraceLimit = stackTraceLimit;
	  }
	}

	secureJsonParse.exports = parse;
	secureJsonParse.exports.default = parse;
	secureJsonParse.exports.parse = parse;
	secureJsonParse.exports.safeParse = safeParse;
	secureJsonParse.exports.scan = filter;
	return secureJsonParse.exports;
}

requireSecureJsonParse();

var textStreamPart = {
  code: "0",
  name: "text",
  parse: (value) => {
    if (typeof value !== "string") {
      throw new Error('"text" parts expect a string value.');
    }
    return { type: "text", value };
  }
};
var functionCallStreamPart = {
  code: "1",
  name: "function_call",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("function_call" in value) || typeof value.function_call !== "object" || value.function_call == null || !("name" in value.function_call) || !("arguments" in value.function_call) || typeof value.function_call.name !== "string" || typeof value.function_call.arguments !== "string") {
      throw new Error(
        '"function_call" parts expect an object with a "function_call" property.'
      );
    }
    return {
      type: "function_call",
      value
    };
  }
};
var dataStreamPart = {
  code: "2",
  name: "data",
  parse: (value) => {
    if (!Array.isArray(value)) {
      throw new Error('"data" parts expect an array value.');
    }
    return { type: "data", value };
  }
};
var errorStreamPart = {
  code: "3",
  name: "error",
  parse: (value) => {
    if (typeof value !== "string") {
      throw new Error('"error" parts expect a string value.');
    }
    return { type: "error", value };
  }
};
var assistantMessageStreamPart = {
  code: "4",
  name: "assistant_message",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("id" in value) || !("role" in value) || !("content" in value) || typeof value.id !== "string" || typeof value.role !== "string" || value.role !== "assistant" || !Array.isArray(value.content) || !value.content.every(
      (item) => item != null && typeof item === "object" && "type" in item && item.type === "text" && "text" in item && item.text != null && typeof item.text === "object" && "value" in item.text && typeof item.text.value === "string"
    )) {
      throw new Error(
        '"assistant_message" parts expect an object with an "id", "role", and "content" property.'
      );
    }
    return {
      type: "assistant_message",
      value
    };
  }
};
var assistantControlDataStreamPart = {
  code: "5",
  name: "assistant_control_data",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("threadId" in value) || !("messageId" in value) || typeof value.threadId !== "string" || typeof value.messageId !== "string") {
      throw new Error(
        '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.'
      );
    }
    return {
      type: "assistant_control_data",
      value: {
        threadId: value.threadId,
        messageId: value.messageId
      }
    };
  }
};
var dataMessageStreamPart = {
  code: "6",
  name: "data_message",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("role" in value) || !("data" in value) || typeof value.role !== "string" || value.role !== "data") {
      throw new Error(
        '"data_message" parts expect an object with a "role" and "data" property.'
      );
    }
    return {
      type: "data_message",
      value
    };
  }
};
var toolCallStreamPart = {
  code: "7",
  name: "tool_calls",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("tool_calls" in value) || typeof value.tool_calls !== "object" || value.tool_calls == null || !Array.isArray(value.tool_calls) || value.tool_calls.some((tc) => {
      tc == null || typeof tc !== "object" || !("id" in tc) || typeof tc.id !== "string" || !("type" in tc) || typeof tc.type !== "string" || !("function" in tc) || tc.function == null || typeof tc.function !== "object" || !("arguments" in tc.function) || typeof tc.function.name !== "string" || typeof tc.function.arguments !== "string";
    })) {
      throw new Error(
        '"tool_calls" parts expect an object with a ToolCallPayload.'
      );
    }
    return {
      type: "tool_calls",
      value
    };
  }
};
var messageAnnotationsStreamPart = {
  code: "8",
  name: "message_annotations",
  parse: (value) => {
    if (!Array.isArray(value)) {
      throw new Error('"message_annotations" parts expect an array value.');
    }
    return { type: "message_annotations", value };
  }
};
var streamParts = [
  textStreamPart,
  functionCallStreamPart,
  dataStreamPart,
  errorStreamPart,
  assistantMessageStreamPart,
  assistantControlDataStreamPart,
  dataMessageStreamPart,
  toolCallStreamPart,
  messageAnnotationsStreamPart
];
({
  [textStreamPart.code]: textStreamPart,
  [functionCallStreamPart.code]: functionCallStreamPart,
  [dataStreamPart.code]: dataStreamPart,
  [errorStreamPart.code]: errorStreamPart,
  [assistantMessageStreamPart.code]: assistantMessageStreamPart,
  [assistantControlDataStreamPart.code]: assistantControlDataStreamPart,
  [dataMessageStreamPart.code]: dataMessageStreamPart,
  [toolCallStreamPart.code]: toolCallStreamPart,
  [messageAnnotationsStreamPart.code]: messageAnnotationsStreamPart
});
({
  [textStreamPart.name]: textStreamPart.code,
  [functionCallStreamPart.name]: functionCallStreamPart.code,
  [dataStreamPart.name]: dataStreamPart.code,
  [errorStreamPart.name]: errorStreamPart.code,
  [assistantMessageStreamPart.name]: assistantMessageStreamPart.code,
  [assistantControlDataStreamPart.name]: assistantControlDataStreamPart.code,
  [dataMessageStreamPart.name]: dataMessageStreamPart.code,
  [toolCallStreamPart.name]: toolCallStreamPart.code,
  [messageAnnotationsStreamPart.name]: messageAnnotationsStreamPart.code
});
streamParts.map((part) => part.code);
function formatStreamPart(type, value) {
  const streamPart = streamParts.find((part) => part.name === type);
  if (!streamPart) {
    throw new Error(`Invalid stream part type: ${type}`);
  }
  return `${streamPart.code}:${JSON.stringify(value)}
`;
}
function createCallbacksTransformer(cb) {
  const textEncoder = new TextEncoder();
  let aggregatedResponse = "";
  const callbacks = cb || {};
  return new TransformStream({
    async start() {
      if (callbacks.onStart)
        await callbacks.onStart();
    },
    async transform(message, controller) {
      const content = typeof message === "string" ? message : message.content;
      controller.enqueue(textEncoder.encode(content));
      aggregatedResponse += content;
      if (callbacks.onToken)
        await callbacks.onToken(content);
      if (callbacks.onText && typeof message === "string") {
        await callbacks.onText(message);
      }
    },
    async flush() {
      const isOpenAICallbacks = isOfTypeOpenAIStreamCallbacks(callbacks);
      if (callbacks.onCompletion) {
        await callbacks.onCompletion(aggregatedResponse);
      }
      if (callbacks.onFinal && !isOpenAICallbacks) {
        await callbacks.onFinal(aggregatedResponse);
      }
    }
  });
}
function isOfTypeOpenAIStreamCallbacks(callbacks) {
  return "experimental_onFunctionCall" in callbacks;
}
function readableFromAsyncIterable(iterable) {
  let it = iterable[Symbol.asyncIterator]();
  return new ReadableStream({
    async pull(controller) {
      const { done, value } = await it.next();
      if (done)
        controller.close();
      else
        controller.enqueue(value);
    },
    async cancel(reason) {
      var _a;
      await ((_a = it.return) == null ? void 0 : _a.call(it, reason));
    }
  });
}
function createStreamDataTransformer() {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  return new TransformStream({
    transform: async (chunk, controller) => {
      const message = decoder.decode(chunk);
      controller.enqueue(encoder.encode(formatStreamPart("text", message)));
    }
  });
}
new TextDecoder("utf-8");
async function* streamable3(response) {
  var _a, _b, _c;
  for await (const chunk of response.stream) {
    const parts = (_c = (_b = (_a = chunk.candidates) == null ? void 0 : _a[0]) == null ? void 0 : _b.content) == null ? void 0 : _c.parts;
    if (parts === void 0) {
      continue;
    }
    const firstPart = parts[0];
    if (typeof firstPart.text === "string") {
      yield firstPart.text;
    }
  }
}
function GoogleGenerativeAIStream(response, cb) {
  return readableFromAsyncIterable(streamable3(response)).pipeThrough(createCallbacksTransformer(cb)).pipeThrough(createStreamDataTransformer());
}
var StreamingTextResponse = class extends Response {
  constructor(res, init, data) {
    let processedStream = res;
    if (data) {
      processedStream = res.pipeThrough(data.stream);
    }
    super(processedStream, {
      ...init,
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        ...init == null ? void 0 : init.headers
      }
    });
  }
};
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "AIzaSyBwUi28-4mveZ_LIbtP-drSqwtaMS1U2y4");
const config = {
  runtime: "edge"
};
const buildGoogleGenAIPrompt = (messages) => ({
  contents: messages.filter((message) => message.role === "user" || message.role === "assistant").map((message) => ({
    role: message.role === "user" ? "user" : "model",
    parts: [{ text: message.content }]
  }))
});
async function POST({ request }) {
  const { messages } = await request.json();
  const geminiStream = await genAI.getGenerativeModel({ model: "gemini-pro" }).generateContentStream(buildGoogleGenAIPrompt(messages));
  const stream = GoogleGenerativeAIStream(geminiStream);
  return new StreamingTextResponse(stream);
}

export { POST, config };
//# sourceMappingURL=_server.ts-D706VyJd.js.map
