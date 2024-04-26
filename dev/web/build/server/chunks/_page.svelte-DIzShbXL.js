import { c as create_ssr_component, v as validate_component, b as each, e as escape, d as add_attribute, f as compute_rest_props, g as getContext, h as spread, i as escape_attribute_value, j as escape_object, o as onDestroy, a as subscribe, s as setContext, k as hasContext, n as noop } from './ssr-DTSylQif.js';
import { I as IndexNav, a as Icon$1 } from './IndexNav-B7CovBbS.js';
import { B as Button, C as Card, a as Card_header, b as Card_title, c as cn, d as createBitAttrs, r as removeUndefined, g as getOptionUpdater, t as toWritableStores, o as omit, e as effect, m as makeElement, s as styleToString, i as isBrowser } from './card-title-C6YlrkIb.js';
import 'clsx';
import { C as Card_content } from './card-content-DK8Gu6PG.js';
import { o as overridable } from './index2-DmYOMU5P.js';
import { w as writable } from './index-wq-T43VL.js';
import Autoplay from 'embla-carousel-autoplay';
import 'tailwind-variants';
import 'tailwind-merge';

const defaults = {
  src: "",
  delayMs: 0,
  onLoadingStatusChange: void 0
};
const createAvatar = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "loadingStatus", "onLoadingStatusChange"));
  const { src, delayMs } = options;
  const loadingStatusWritable = withDefaults.loadingStatus ?? writable("loading");
  const loadingStatus = overridable(loadingStatusWritable, withDefaults?.onLoadingStatusChange);
  effect([src, delayMs], ([$src, $delayMs]) => {
    if (isBrowser) {
      const image2 = new Image();
      image2.src = $src;
      image2.onload = () => {
        if (delayMs !== void 0) {
          const timerId = window.setTimeout(() => {
            loadingStatus.set("loaded");
          }, $delayMs);
          return () => window.clearTimeout(timerId);
        } else {
          loadingStatus.set("loaded");
        }
      };
      image2.onerror = () => {
        loadingStatus.set("error");
      };
    }
  });
  const image = makeElement("avatar-image", {
    stores: [src, loadingStatus],
    returned: ([$src, $loadingStatus]) => {
      const imageStyles = styleToString({
        display: $loadingStatus === "loaded" ? "block" : "none"
      });
      return {
        src: $src,
        style: imageStyles
      };
    }
  });
  const fallback = makeElement("avatar-fallback", {
    stores: [loadingStatus],
    returned: ([$loadingStatus]) => {
      return {
        style: $loadingStatus === "loaded" ? styleToString({
          display: "none"
        }) : void 0,
        hidden: $loadingStatus === "loaded" ? true : void 0
      };
    }
  });
  return {
    elements: {
      image,
      fallback
    },
    states: {
      loadingStatus
    },
    options
  };
};
function getAvatarData() {
  const NAME = "avatar";
  const PARTS = ["root", "image", "fallback"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getAvatarData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const avatar = { ...createAvatar(removeUndefined(props)), getAttrs };
  setContext(NAME, avatar);
  return {
    ...avatar,
    updateOption: getOptionUpdater(avatar.options)
  };
}
function getImage(src = "") {
  const { NAME } = getAvatarData();
  const avatar = getContext(NAME);
  if (!src) {
    avatar.options.src.set("");
  } else {
    avatar.options.src.set(src);
  }
  return avatar;
}
function getCtx() {
  const { NAME } = getAvatarData();
  return getContext(NAME);
}
const Avatar$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["delayMs", "loadingStatus", "onLoadingStatusChange", "asChild", "el"]);
  let { delayMs = void 0 } = $$props;
  let { loadingStatus = void 0 } = $$props;
  let { onLoadingStatusChange = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { states: { loadingStatus: localLoadingStatus }, updateOption, getAttrs } = setCtx({
    src: "",
    delayMs,
    onLoadingStatusChange: ({ next }) => {
      loadingStatus = next;
      onLoadingStatusChange?.(next);
      return next;
    }
  });
  const attrs = getAttrs("root");
  if ($$props.delayMs === void 0 && $$bindings.delayMs && delayMs !== void 0)
    $$bindings.delayMs(delayMs);
  if ($$props.loadingStatus === void 0 && $$bindings.loadingStatus && loadingStatus !== void 0)
    $$bindings.loadingStatus(loadingStatus);
  if ($$props.onLoadingStatusChange === void 0 && $$bindings.onLoadingStatusChange && onLoadingStatusChange !== void 0)
    $$bindings.onLoadingStatusChange(onLoadingStatusChange);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  loadingStatus !== void 0 && localLoadingStatus.set(loadingStatus);
  {
    updateOption("delayMs", delayMs);
  }
  return `${asChild ? `${slots.default ? slots.default({ attrs }) : ``}` : `<div${spread([escape_object($$restProps), escape_object(attrs)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ attrs }) : ``}</div>`}`;
});
const Avatar_image$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let image;
  let builder;
  let $$restProps = compute_rest_props($$props, ["src", "alt", "asChild", "el"]);
  let $image, $$unsubscribe_image = noop, $$subscribe_image = () => ($$unsubscribe_image(), $$unsubscribe_image = subscribe(image, ($$value) => $image = $$value), image);
  let { src = void 0 } = $$props;
  let { alt = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const attrs = { "data-bits-avatar-image": "" };
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  $$subscribe_image(image = getImage(src).elements.image);
  builder = $image;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_image();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<img${spread(
    [
      escape_object(builder),
      { alt: escape_attribute_value(alt) },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", el, 0)}>`}`;
});
const Avatar_fallback$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $fallback, $$unsubscribe_fallback;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { fallback }, getAttrs } = getCtx();
  $$unsubscribe_fallback = subscribe(fallback, (value) => $fallback = value);
  const attrs = getAttrs("fallback");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $fallback;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_fallback();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<span${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</span>`}`;
});
const Video = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "ariaLabel", "withEvents"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { ariaLabel = "video," } = $$props;
  let { withEvents = false } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  return `${withEvents ? `<svg${spread(
    [
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 15 15" },
      { fill: escape_attribute_value(color) },
      { xmlns: "http://www.w3.org/2000/svg" }
    ],
    {}
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M4.76447 3.12199C5.63151 3.04859 6.56082 3 7.5 3C8.43918 3 9.36849 3.04859 10.2355 3.12199C11.2796 3.21037 11.9553 3.27008 12.472 3.39203C12.9425 3.50304 13.2048 3.64976 13.4306 3.88086C13.4553 3.90618 13.4902 3.94414 13.5133 3.97092C13.7126 4.20149 13.8435 4.4887 13.918 5.03283C13.9978 5.6156 14 6.37644 14 7.52493C14 8.66026 13.9978 9.41019 13.9181 9.98538C13.8439 10.5206 13.7137 10.8061 13.5125 11.0387C13.4896 11.0651 13.4541 11.1038 13.4296 11.1287C13.2009 11.3625 12.9406 11.5076 12.4818 11.6164C11.9752 11.7365 11.3143 11.7942 10.2878 11.8797C9.41948 11.9521 8.47566 12 7.5 12C6.52434 12 5.58052 11.9521 4.7122 11.8797C3.68572 11.7942 3.02477 11.7365 2.51816 11.6164C2.05936 11.5076 1.7991 11.3625 1.57037 11.1287C1.54593 11.1038 1.51035 11.0651 1.48748 11.0387C1.28628 10.8061 1.15612 10.5206 1.08193 9.98538C1.00221 9.41019 1 8.66026 1 7.52493C1 6.37644 1.00216 5.6156 1.082 5.03283C1.15654 4.4887 1.28744 4.20149 1.48666 3.97092C1.5098 3.94414 1.54468 3.90618 1.56942 3.88086C1.7952 3.64976 2.05752 3.50304 2.52796 3.39203C3.04473 3.27008 3.7204 3.21037 4.76447 3.12199ZM0 7.52493C0 5.28296 0 4.16198 0.729985 3.31713C0.766457 3.27491 0.815139 3.22194 0.854123 3.18204C1.63439 2.38339 2.64963 2.29744 4.68012 2.12555C5.56923 2.05028 6.52724 2 7.5 2C8.47276 2 9.43077 2.05028 10.3199 2.12555C12.3504 2.29744 13.3656 2.38339 14.1459 3.18204C14.1849 3.22194 14.2335 3.27491 14.27 3.31713C15 4.16198 15 5.28296 15 7.52493C15 9.74012 15 10.8477 14.2688 11.6929C14.2326 11.7348 14.1832 11.7885 14.1444 11.8281C13.3629 12.6269 12.3655 12.71 10.3709 12.8763C9.47971 12.9505 8.50782 13 7.5 13C6.49218 13 5.52028 12.9505 4.62915 12.8763C2.63446 12.71 1.63712 12.6269 0.855558 11.8281C0.816844 11.7885 0.767442 11.7348 0.731221 11.6929C0 10.8477 0 9.74012 0 7.52493ZM5.25 5.38264C5.25 5.20225 5.43522 5.08124 5.60041 5.15369L10.428 7.27105C10.6274 7.35853 10.6274 7.64147 10.428 7.72895L5.60041 9.84631C5.43522 9.91876 5.25 9.79775 5.25 9.61736V5.38264Z" fill="currentColor"></path></svg>` : `<svg${spread(
    [
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 15 15" },
      { fill: escape_attribute_value(color) },
      { xmlns: "http://www.w3.org/2000/svg" }
    ],
    {}
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M4.76447 3.12199C5.63151 3.04859 6.56082 3 7.5 3C8.43918 3 9.36849 3.04859 10.2355 3.12199C11.2796 3.21037 11.9553 3.27008 12.472 3.39203C12.9425 3.50304 13.2048 3.64976 13.4306 3.88086C13.4553 3.90618 13.4902 3.94414 13.5133 3.97092C13.7126 4.20149 13.8435 4.4887 13.918 5.03283C13.9978 5.6156 14 6.37644 14 7.52493C14 8.66026 13.9978 9.41019 13.9181 9.98538C13.8439 10.5206 13.7137 10.8061 13.5125 11.0387C13.4896 11.0651 13.4541 11.1038 13.4296 11.1287C13.2009 11.3625 12.9406 11.5076 12.4818 11.6164C11.9752 11.7365 11.3143 11.7942 10.2878 11.8797C9.41948 11.9521 8.47566 12 7.5 12C6.52434 12 5.58052 11.9521 4.7122 11.8797C3.68572 11.7942 3.02477 11.7365 2.51816 11.6164C2.05936 11.5076 1.7991 11.3625 1.57037 11.1287C1.54593 11.1038 1.51035 11.0651 1.48748 11.0387C1.28628 10.8061 1.15612 10.5206 1.08193 9.98538C1.00221 9.41019 1 8.66026 1 7.52493C1 6.37644 1.00216 5.6156 1.082 5.03283C1.15654 4.4887 1.28744 4.20149 1.48666 3.97092C1.5098 3.94414 1.54468 3.90618 1.56942 3.88086C1.7952 3.64976 2.05752 3.50304 2.52796 3.39203C3.04473 3.27008 3.7204 3.21037 4.76447 3.12199ZM0 7.52493C0 5.28296 0 4.16198 0.729985 3.31713C0.766457 3.27491 0.815139 3.22194 0.854123 3.18204C1.63439 2.38339 2.64963 2.29744 4.68012 2.12555C5.56923 2.05028 6.52724 2 7.5 2C8.47276 2 9.43077 2.05028 10.3199 2.12555C12.3504 2.29744 13.3656 2.38339 14.1459 3.18204C14.1849 3.22194 14.2335 3.27491 14.27 3.31713C15 4.16198 15 5.28296 15 7.52493C15 9.74012 15 10.8477 14.2688 11.6929C14.2326 11.7348 14.1832 11.7885 14.1444 11.8281C13.3629 12.6269 12.3655 12.71 10.3709 12.8763C9.47971 12.9505 8.50782 13 7.5 13C6.49218 13 5.52028 12.9505 4.62915 12.8763C2.63446 12.71 1.63712 12.6269 0.855558 11.8281C0.816844 11.7885 0.767442 11.7348 0.731221 11.6929C0 10.8477 0 9.74012 0 7.52493ZM5.25 5.38264C5.25 5.20225 5.43522 5.08124 5.60041 5.15369L10.428 7.27105C10.6274 7.35853 10.6274 7.64147 10.428 7.72895L5.60041 9.84631C5.43522 9.91876 5.25 9.79775 5.25 9.61736V5.38264Z" fill="currentColor"></path></svg>`} `;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "delayMs"]);
  let { class: className = void 0 } = $$props;
  let { delayMs = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.delayMs === void 0 && $$bindings.delayMs && delayMs !== void 0)
    $$bindings.delayMs(delayMs);
  return `${validate_component(Avatar$1, "AvatarPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      { delayMs },
      {
        class: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Avatar_image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "src", "alt"]);
  let { class: className = void 0 } = $$props;
  let { src = void 0 } = $$props;
  let { alt = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `${validate_component(Avatar_image$1, "AvatarPrimitive.Image").$$render(
    $$result,
    Object.assign(
      {},
      { src },
      { alt },
      {
        class: cn("aspect-square h-full w-full", className)
      },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Avatar_fallback = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(Avatar_fallback$1, "AvatarPrimitive.Fallback").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const EMBLA_CAROUSEL_CONTEXT = Symbol("EMBLA_CAROUSEL_CONTEXT");
function setEmblaContex(config) {
  setContext(EMBLA_CAROUSEL_CONTEXT, config);
  return config;
}
function getEmblaContext(name = "This component") {
  if (!hasContext(EMBLA_CAROUSEL_CONTEXT)) {
    throw new Error(`${name} must be used within a <Carousel.Root> component`);
  }
  return getContext(EMBLA_CAROUSEL_CONTEXT);
}
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["opts", "plugins", "api", "orientation", "class"]);
  let { opts = {} } = $$props;
  let { plugins = [] } = $$props;
  let { api = void 0 } = $$props;
  let { orientation = "horizontal" } = $$props;
  let { class: className = void 0 } = $$props;
  const apiStore = writable(void 0);
  const orientationStore = writable(orientation);
  const canScrollPrev = writable(false);
  const canScrollNext = writable(false);
  const optionsStore = writable(opts);
  const pluginStore = writable(plugins);
  function scrollPrev() {
    api?.scrollPrev();
  }
  function scrollNext() {
    api?.scrollNext();
  }
  function onSelect(api2) {
    if (!api2)
      return;
    canScrollPrev.set(api2.canScrollPrev());
    canScrollNext.set(api2.canScrollNext());
  }
  function handleKeyDown(e) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
  }
  setEmblaContex({
    api: apiStore,
    scrollPrev,
    scrollNext,
    orientation: orientationStore,
    canScrollNext,
    canScrollPrev,
    handleKeyDown,
    options: optionsStore,
    plugins: pluginStore,
    onInit
  });
  function onInit(event) {
    api = event.detail;
    apiStore.set(api);
  }
  onDestroy(() => {
    api?.off("select", onSelect);
  });
  if ($$props.opts === void 0 && $$bindings.opts && opts !== void 0)
    $$bindings.opts(opts);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0)
    $$bindings.plugins(plugins);
  if ($$props.api === void 0 && $$bindings.api && api !== void 0)
    $$bindings.api(api);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  {
    orientationStore.set(orientation);
  }
  {
    pluginStore.set(plugins);
  }
  {
    optionsStore.set(opts);
  }
  {
    if (api) {
      onSelect(api);
      api.on("select", onSelect);
      api.on("reInit", onSelect);
    }
  }
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("relative", className))
      },
      { role: "region" },
      { "aria-roledescription": "carousel" },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Carousel_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let $$unsubscribe_options;
  let $orientation, $$unsubscribe_orientation;
  let $$unsubscribe_plugins;
  let { class: className = void 0 } = $$props;
  const { orientation, options, plugins, onInit } = getEmblaContext("<Carousel.Content/>");
  $$unsubscribe_orientation = subscribe(orientation, (value) => $orientation = value);
  $$unsubscribe_options = subscribe(options, (value) => value);
  $$unsubscribe_plugins = subscribe(plugins, (value) => value);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$unsubscribe_options();
  $$unsubscribe_orientation();
  $$unsubscribe_plugins();
  return `<div class="overflow-hidden"><div${spread(
    [
      {
        class: escape_attribute_value(cn(
          "flex",
          $orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ))
      },
      { "data-embla-container": "" },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Carousel_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let $orientation, $$unsubscribe_orientation;
  let { class: className = void 0 } = $$props;
  const { orientation } = getEmblaContext("<Carousel.Item/>");
  $$unsubscribe_orientation = subscribe(orientation, (value) => $orientation = value);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$unsubscribe_orientation();
  return `<div${spread(
    [
      { role: "group" },
      { "aria-roledescription": "slide" },
      {
        class: escape_attribute_value(cn("min-w-0 shrink-0 grow-0 basis-full", $orientation === "horizontal" ? "pl-4" : "pt-4", className))
      },
      { "data-embla-slide": "" },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Arrow_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m12 19-7-7 7-7" }], ["path", { "d": "M19 12H5" }]];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "arrow-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ArrowLeft = Arrow_left;
const Carousel_previous = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "variant", "size"]);
  let $orientation, $$unsubscribe_orientation;
  let $canScrollPrev, $$unsubscribe_canScrollPrev;
  let { class: className = void 0 } = $$props;
  let { variant = "outline" } = $$props;
  let { size = "icon" } = $$props;
  const { orientation, canScrollPrev, scrollPrev, handleKeyDown } = getEmblaContext("<Carousel.Previous/>");
  $$unsubscribe_orientation = subscribe(orientation, (value) => $orientation = value);
  $$unsubscribe_canScrollPrev = subscribe(canScrollPrev, (value) => $canScrollPrev = value);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$unsubscribe_orientation();
  $$unsubscribe_canScrollPrev();
  return `${validate_component(Button, "Button").$$render(
    $$result,
    Object.assign(
      {},
      { variant },
      { size },
      {
        class: cn(
          "absolute h-8 w-8 touch-manipulation rounded-full",
          $orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )
      },
      { disabled: !$canScrollPrev },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${validate_component(ArrowLeft, "ArrowLeft").$$render($$result, { class: "h-4 w-4" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-1tx67gn">Previous slide</span>`;
      }
    }
  )}`;
});
const Arrow_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "m12 5 7 7-7 7" }]];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "arrow-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ArrowRight = Arrow_right;
const Carousel_next = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "variant", "size"]);
  let $orientation, $$unsubscribe_orientation;
  let $canScrollNext, $$unsubscribe_canScrollNext;
  let { class: className = void 0 } = $$props;
  let { variant = "outline" } = $$props;
  let { size = "icon" } = $$props;
  const { orientation, canScrollNext, scrollNext, handleKeyDown } = getEmblaContext("<Carousel.Next/>");
  $$unsubscribe_orientation = subscribe(orientation, (value) => $orientation = value);
  $$unsubscribe_canScrollNext = subscribe(canScrollNext, (value) => $canScrollNext = value);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$unsubscribe_orientation();
  $$unsubscribe_canScrollNext();
  return `${validate_component(Button, "Button").$$render(
    $$result,
    Object.assign(
      {},
      { variant },
      { size },
      {
        class: cn(
          "absolute h-8 w-8 touch-manipulation rounded-full",
          $orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )
      },
      { disabled: !$canScrollNext },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${validate_component(ArrowRight, "ArrowRight").$$render($$result, { class: "h-4 w-4" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-vmesmf">Next slide</span>`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div class="absolute top-0 left-0 md:w-[50%] w-[100%] h-[70%] bg-gradient-to-b from-green-500 to-[#069e78] rounded-br-[50px]"></div> <div class="triangle bg-gray-200"></div> <div class="z-10 relative">${validate_component(IndexNav, "IndexNav").$$render($$result, {}, {}, {})} <div class="grid frid-cols-1 md:grid-cols-2" data-svelte-h="svelte-3uy666"><div><div class="gradient-background"><h2 class="text-5xl p-10">Driving Efficiency<br>
                        Powering Performance<br>
                        Your Dealership&#39;s Ultimate Service Solution</h2></div> <h2 class="text hidden lg:flex lg:text-xl font-medium text-white p-5 ">One simple login for your entire service pipeline. Car-Rillo
                    is poised to revolutionize the way automotive dealerships
                    manage their service operations. A comprehensive, end-to-end
                    platform that streamlines the entire vehicle servicing
                    process.</h2></div> <div class="p-5 hidden md:block"><div class="shadow overflow-hidden pb-5"><div class="m-5 bg-white"><img style="height: 80%;" src="s1.png" alt="s1"></div></div></div> <div class="p-5 hidden lg:block absolute top-0 right-0 z-[-1] transform translate-x-2 translate-y-[350px]"><div class="shadow overflow-hidden pb-5"><div class="m-5 bg-white"><img style="height: 80%;" src="s2.png" alt="s2"></div></div></div></div> <div class="p-5 flex">${validate_component(Button, "Button").$$render($$result, { class: "bg-[#deb887] m-2" }, {}, {
    default: () => {
      return `Request a Demo`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { class: "bg-[#deb887] m-2 " }, {}, {
    default: () => {
      return `Watch our video ${validate_component(Video, "Video").$$render($$result, { class: "m-2" }, {}, {})}`;
    }
  })}</div> ${validate_component(Card, "Card.Root").$$render(
    $$result,
    {
      class: "p-20 m-2 bg-white bg-opacity-0 border-none"
    },
    {},
    {
      default: () => {
        return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
              default: () => {
                return `Meet the Team!`;
              }
            })}`;
          }
        })} ${validate_component(Carousel, "Carousel.Root").$$render(
          $$result,
          {
            class: "w-full max-w",
            plugins: [Autoplay({ delay: 4e3 })]
          },
          {},
          {
            default: () => {
              return `${validate_component(Carousel_content, "Carousel.Content").$$render($$result, { class: "-ml-1" }, {}, {
                default: () => {
                  return `${each(
                    [
                      {
                        name: "Shawheen Wingrove",
                        email: "shawheen@wingrove.org",
                        linkedin: "https://www.linkedin.com/in/shawheenw/",
                        isrc: "sw.JPG"
                      },
                      {
                        isrc: "cc.JPG",
                        name: "Clayton Carrillo",
                        linkedin: "www.linkedin.com/in/clayton-carrillo-822bb1264"
                      },
                      {
                        isrc: "tt.JPG",
                        name: "Trung Tran",
                        email: "trungtran63470@gmail.com",
                        linkedin: "https://www.linkedin.com/in/trung-tran1234/"
                      },
                      {
                        isrc: "dd.JPG",
                        name: "影尘 白(David)",
                        email: "crysisbai2001@gmail.com",
                        linkedin: "https://www.linkedin.com/in/yingchen-bai/"
                      },
                      {
                        isrc: "rr.JPG",
                        name: "Robert Schacherbauer",
                        email: "robert.schacherbauer@sjsu.edu"
                      },
                      {
                        isrc: "ss.JPG",
                        name: "Sohan Bairaboina",
                        email: "Sohanb152@gmail.com"
                      },
                      {
                        isrc: "bb.JPG",
                        name: "Bence Danko",
                        email: "bence.danko@sjsu.edu",
                        linkedin: "https://www.linkedin.com/in/bence-jordan-danko/"
                      }
                    ],
                    ({ name, email, linkedin, isrc }) => {
                      return `${validate_component(Carousel_item, "Carousel.Item").$$render($$result, { class: "pl-1 md:basis-1/3 lg:basis-1/3" }, {}, {
                        default: () => {
                          return `<div class="p-1">${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Card_content, "Card.Content").$$render(
                                $$result,
                                {
                                  class: "grid grid-cols-1 aspect-square items-center justify-center p-6"
                                },
                                {},
                                {
                                  default: () => {
                                    return `${validate_component(Card, "Card.Root").$$render($$result, { class: "p-2 m-3" }, {}, {
                                      default: () => {
                                        return `<div class="self-center">${escape(name)}</div> `;
                                      }
                                    })} ${isrc ? `<div>${validate_component(Avatar, "Avatar.Root").$$render($$result, { class: "w-13 h-13" }, {}, {
                                      default: () => {
                                        return `${validate_component(Avatar_image, "Avatar.Image").$$render($$result, { src: isrc }, {}, {})} ${validate_component(Avatar_fallback, "Avatar.Fallback").$$render($$result, {}, {}, {
                                          default: () => {
                                            return `CN`;
                                          }
                                        })} `;
                                      }
                                    })} </div>` : ``} ${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `${validate_component(Card_content, "Card.Content").$$render($$result, { class: "p-2 overflow-hidden" }, {}, {
                                          default: () => {
                                            return `${email ? `<p>${escape(email)}</p>` : ``} ${linkedin ? `<a${add_attribute("href", linkedin, 0)} target="_blank">${escape(linkedin)}</a>` : ``} `;
                                          }
                                        })} `;
                                      }
                                    })} `;
                                  }
                                }
                              )} `;
                            }
                          })}</div> `;
                        }
                      })}`;
                    }
                  )}`;
                }
              })} ${validate_component(Carousel_previous, "Carousel.Previous").$$render($$result, {}, {}, {})} ${validate_component(Carousel_next, "Carousel.Next").$$render($$result, {}, {}, {})}`;
            }
          }
        )}`;
      }
    }
  )}</div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DIzShbXL.js.map
