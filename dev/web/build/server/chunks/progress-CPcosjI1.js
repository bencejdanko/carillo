import { c as create_ssr_component, f as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object, v as validate_component, d as add_attribute, a as subscribe } from './ssr-DTSylQif.js';
import { c as cn, d as createBitAttrs, r as removeUndefined, g as getOptionUpdater, t as toWritableStores, o as omit, m as makeElement, q as createElHelpers } from './card-title-C6YlrkIb.js';
import { o as overridable } from './index2-DmYOMU5P.js';
import { w as writable } from './index-wq-T43VL.js';

const defaults = {
  defaultValue: 0,
  max: 100
};
const { name } = createElHelpers("progress");
const createProgress = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "value"));
  const { max } = options;
  const valueWritable = withDefaults.value ?? writable(withDefaults.defaultValue);
  const value = overridable(valueWritable, withDefaults?.onValueChange);
  const root = makeElement(name(), {
    stores: [value, max],
    returned: ([$value, $max]) => {
      return {
        value: $value,
        max: $max,
        role: "meter",
        "aria-valuemin": 0,
        "aria-valuemax": $max,
        "aria-valuenow": $value,
        "data-value": $value,
        "data-state": $value === null ? "indeterminate" : $value === $max ? "complete" : "loading",
        "data-max": $max
      };
    }
  });
  return {
    elements: {
      root
    },
    states: {
      value
    },
    options
  };
};
function getProgressData() {
  const NAME = "progress";
  const PARTS = ["root"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getProgressData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const progress = { ...createProgress(removeUndefined(props)), getAttrs };
  return {
    ...progress,
    updateOption: getOptionUpdater(progress.options)
  };
}
const Progress$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["max", "value", "onValueChange", "asChild", "el"]);
  let $root, $$unsubscribe_root;
  let { max = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { onValueChange = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { root }, states: { value: localValue }, updateOption, getAttrs } = setCtx({
    max,
    defaultValue: value,
    onValueChange: ({ next }) => {
      onValueChange?.(next);
      value = next;
      return next;
    }
  });
  $$unsubscribe_root = subscribe(root, (value2) => $root = value2);
  const attrs = getAttrs("root");
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.onValueChange === void 0 && $$bindings.onValueChange && onValueChange !== void 0)
    $$bindings.onValueChange(onValueChange);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  value !== void 0 && localValue.set(value);
  {
    updateOption("max", max);
  }
  builder = $root;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Card_description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<p${spread(
    [
      {
        class: escape_attribute_value(cn("text-sm text-muted-foreground", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</p>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div class="relative w-full overflow-auto"><table${spread(
    [
      {
        class: escape_attribute_value(cn("w-full caption-bottom text-sm", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</table></div>`;
});
const Table_body = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<tbody${spread(
    [
      {
        class: escape_attribute_value(cn("[&_tr:last-child]:border-0", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const Table_cell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<td${spread(
    [
      {
        class: escape_attribute_value(cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</td>`;
});
const Table_row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<tr${spread(
    [
      {
        class: escape_attribute_value(cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</tr>`;
});
const Progress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "max", "value"]);
  let { class: className = void 0 } = $$props;
  let { max = 100 } = $$props;
  let { value = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `${validate_component(Progress$1, "ProgressPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `<div class="h-full w-full flex-1 bg-primary transition-all"${add_attribute("style", `transform: translateX(-${100 - 100 * (value ?? 0) / (max ?? 1)}%)`, 0)}></div>`;
      }
    }
  )}`;
});

export { Card_description as C, Progress as P, Table as T, Table_body as a, Table_row as b, Table_cell as c };
//# sourceMappingURL=progress-CPcosjI1.js.map
