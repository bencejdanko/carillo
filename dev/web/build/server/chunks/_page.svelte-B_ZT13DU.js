import { c as create_ssr_component, v as validate_component, f as compute_rest_props, a as subscribe, h as spread, j as escape_object, d as add_attribute } from './ssr-DTSylQif.js';
import { C as Card, a as Card_header, b as Card_title, B as Button, c as cn, d as createBitAttrs, f as createSeparator, r as removeUndefined, g as getOptionUpdater } from './card-title-C6YlrkIb.js';
import 'clsx';
import { I as Input } from './input-4kH3G8Rw.js';
import './ctx-CTdGdjWA.js';
import PocketBase from 'pocketbase';
import './index-wq-T43VL.js';
import 'tailwind-variants';
import 'tailwind-merge';

function getSeparatorData() {
  const NAME = "separator";
  const PARTS = ["root"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getSeparatorData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const separator = { ...createSeparator(removeUndefined(props)), getAttrs };
  return {
    ...separator,
    updateOption: getOptionUpdater(separator.options)
  };
}
const Separator$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["orientation", "decorative", "asChild", "el"]);
  let $root, $$unsubscribe_root;
  let { orientation = "horizontal" } = $$props;
  let { decorative = true } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { root }, updateOption, getAttrs } = setCtx({ orientation, decorative });
  $$unsubscribe_root = subscribe(root, (value2) => $root = value2);
  const attrs = getAttrs("root");
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.decorative === void 0 && $$bindings.decorative && decorative !== void 0)
    $$bindings.decorative(decorative);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    updateOption("orientation", orientation);
  }
  {
    updateOption("decorative", decorative);
  }
  builder = $root;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>`}`;
});
const Separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "orientation", "decorative"]);
  let { class: className = void 0 } = $$props;
  let { orientation = "horizontal" } = $$props;
  let { decorative = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.decorative === void 0 && $$bindings.decorative && decorative !== void 0)
    $$bindings.decorative(decorative);
  return `${validate_component(Separator$1, "SeparatorPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )
      },
      { orientation },
      { decorative },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const API_URL = "https://preview-api.car-rillo.com";
new PocketBase(API_URL);
let value = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const frameworks = [
    {
      value: "https://preview.car-rillo.com",
      label: "Preview"
    }
  ];
  frameworks.find((f) => f.value === value) ?? {
    label: "Select a find a dealership",
    value: ""
  };
  return `${validate_component(Card, "Card.Root").$$render($$result, { class: "p-5 m-10 items-center" }, {}, {
    default: () => {
      return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
            default: () => {
              return `Sign In`;
            }
          })}`;
        }
      })} ${validate_component(Input, "Input").$$render($$result, { type: "email", placeholder: "Email" }, {}, {})} ${validate_component(Input, "Input").$$render(
        $$result,
        {
          class: "mt-3",
          type: "password",
          placeholder: "Password"
        },
        {},
        {}
      )} ${validate_component(Separator, "Separator").$$render($$result, { class: "mt-3" }, {}, {})} ${validate_component(Button, "Button").$$render($$result, { class: "w-full mt-5" }, {}, {
        default: () => {
          return `Login`;
        }
      })}`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B_ZT13DU.js.map
