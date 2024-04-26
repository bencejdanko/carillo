import { c as create_ssr_component, v as validate_component } from './ssr-DTSylQif.js';
import { M as MNav, J as Jobs, a as MRepairs, A as Appointments, b as Analytics } from './Analytics-EUxUvst_.js';
import { C as Card } from './card-title-C6YlrkIb.js';
import 'clsx';
import './index2-DmYOMU5P.js';
import './index-wq-T43VL.js';
import './card-content-DK8Gu6PG.js';
import './progress-CPcosjI1.js';
import 'tailwind-variants';
import 'tailwind-merge';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(MNav, "MNav").$$render($$result, {}, {}, {})} <div class="grid grid-cols-2 m-2 gap-2">${validate_component(Jobs, "Jobs").$$render($$result, {}, {}, {})} ${validate_component(Card, "Card.Root").$$render($$result, { class: "p-2" }, {}, {
    default: () => {
      return `${validate_component(MRepairs, "MRepairs").$$render($$result, {}, {}, {})} ${validate_component(Appointments, "Appointments").$$render($$result, {}, {}, {})} ${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})}`;
    }
  })}</div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D27gh-Ly.js.map
