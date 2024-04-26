import { c as create_ssr_component, f as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object } from './ssr-DTSylQif.js';
import { c as cn } from './card-title-C6YlrkIb.js';

const Card_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("p-6 pt-0", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});

export { Card_content as C };
//# sourceMappingURL=card-content-DK8Gu6PG.js.map
