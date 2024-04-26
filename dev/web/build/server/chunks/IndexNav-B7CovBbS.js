import { c as create_ssr_component, v as validate_component, f as compute_rest_props, g as getContext, h as spread, i as escape_attribute_value, j as escape_object, a as subscribe, d as add_attribute, s as setContext, b as each } from './ssr-DTSylQif.js';
import { B as Button, c as cn, A as is_void, j as flyAndScale, d as createBitAttrs, r as removeUndefined, g as getOptionUpdater, w as withGet, t as toWritableStores, o as omit, m as makeElement, l as executeCallbacks, n as addMeltEventListener, v as isElement, D as isFocusVisible, E as isTouch, s as styleToString, p as portalAttr, e as effect, h as tick, z as isHTMLElement, i as isBrowser, k as safeOnMount, q as createElHelpers, y as noop } from './card-title-C6YlrkIb.js';
import { M as Menubar, a as Menu, b as Menubar_item, c as createDispatcher, o as overridable, g as generateIds, d as derivedVisible, u as usePopper, e as getPortalDestination, s as sleep } from './index2-DmYOMU5P.js';
import { d as derived, w as writable } from './index-wq-T43VL.js';
import 'clsx';

function getTabbableNodes(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }
  return nodes;
}
const { name } = createElHelpers("hover-card");
const defaults = {
  defaultOpen: false,
  openDelay: 1e3,
  closeDelay: 100,
  positioning: {
    placement: "bottom"
  },
  arrowSize: 8,
  closeOnOutsideClick: true,
  forceVisible: false,
  portal: void 0,
  closeOnEscape: true,
  onOutsideClick: void 0
};
const linkPreviewIdParts = ["trigger", "content"];
function createLinkPreview(props = {}) {
  const withDefaults = { ...defaults, ...props };
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults?.onOpenChange);
  const hasSelection = withGet.writable(false);
  const isPointerDownOnContent = withGet.writable(false);
  const containSelection = writable(false);
  const activeTrigger = writable(null);
  const options = toWritableStores(omit(withDefaults, "ids"));
  const { openDelay, closeDelay, positioning, arrowSize, closeOnOutsideClick, forceVisible, portal, closeOnEscape, onOutsideClick } = options;
  const ids = toWritableStores({ ...generateIds(linkPreviewIdParts), ...withDefaults.ids });
  let timeout = null;
  let originalBodyUserSelect;
  const handleOpen = withGet.derived(openDelay, ($openDelay) => {
    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
        timeout = null;
      }
      timeout = window.setTimeout(() => {
        open.set(true);
      }, $openDelay);
    };
  });
  const handleClose = withGet.derived([closeDelay, isPointerDownOnContent, hasSelection], ([$closeDelay, $isPointerDownOnContent, $hasSelection]) => {
    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
        timeout = null;
      }
      if (!$isPointerDownOnContent && !$hasSelection) {
        timeout = window.setTimeout(() => {
          open.set(false);
        }, $closeDelay);
      }
    };
  });
  const trigger = makeElement(name("trigger"), {
    stores: [open, ids.trigger, ids.content],
    returned: ([$open, $triggerId, $contentId]) => {
      return {
        role: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": $open,
        "data-state": $open ? "open" : "closed",
        "aria-controls": $contentId,
        id: $triggerId
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "pointerenter", (e) => {
        if (isTouch(e))
          return;
        handleOpen.get()();
      }), addMeltEventListener(node, "pointerleave", (e) => {
        if (isTouch(e))
          return;
        handleClose.get()();
      }), addMeltEventListener(node, "focus", (e) => {
        if (!isElement(e.currentTarget) || !isFocusVisible(e.currentTarget))
          return;
        handleOpen.get()();
      }), addMeltEventListener(node, "blur", () => handleClose.get()()));
      return {
        destroy: unsub
      };
    }
  });
  const isVisible = derivedVisible({ open, forceVisible, activeTrigger });
  const content = makeElement(name("content"), {
    stores: [isVisible, portal, ids.content],
    returned: ([$isVisible, $portal, $contentId]) => {
      return {
        hidden: $isVisible ? void 0 : true,
        tabindex: -1,
        style: styleToString({
          "pointer-events": $isVisible ? void 0 : "none",
          opacity: $isVisible ? 1 : 0,
          userSelect: "text",
          WebkitUserSelect: "text"
        }),
        id: $contentId,
        "data-state": $isVisible ? "open" : "closed",
        "data-portal": portalAttr($portal)
      };
    },
    action: (node) => {
      let unsub = noop;
      const unsubTimers = () => {
        if (timeout) {
          window.clearTimeout(timeout);
        }
      };
      let unsubPopper = noop;
      const unsubDerived = effect([isVisible, activeTrigger, positioning, closeOnOutsideClick, portal, closeOnEscape], ([$isVisible, $activeTrigger, $positioning, $closeOnOutsideClick, $portal, $closeOnEscape]) => {
        unsubPopper();
        if (!$isVisible || !$activeTrigger)
          return;
        tick().then(() => {
          unsubPopper();
          unsubPopper = usePopper(node, {
            anchorElement: $activeTrigger,
            open,
            options: {
              floating: $positioning,
              modal: {
                closeOnInteractOutside: $closeOnOutsideClick,
                onClose: () => {
                  open.set(false);
                  $activeTrigger.focus();
                },
                shouldCloseOnInteractOutside: (e) => {
                  onOutsideClick.get()?.(e);
                  if (e.defaultPrevented)
                    return false;
                  if (isHTMLElement($activeTrigger) && $activeTrigger.contains(e.target))
                    return false;
                  return true;
                },
                open: $isVisible
              },
              portal: getPortalDestination(node, $portal),
              focusTrap: null,
              escapeKeydown: $closeOnEscape ? void 0 : null
            }
          }).destroy;
        });
      });
      unsub = executeCallbacks(addMeltEventListener(node, "pointerdown", (e) => {
        const currentTarget = e.currentTarget;
        const target = e.target;
        if (!isHTMLElement(currentTarget) || !isHTMLElement(target))
          return;
        if (currentTarget.contains(target)) {
          containSelection.set(true);
        }
        hasSelection.set(false);
        isPointerDownOnContent.set(true);
      }), addMeltEventListener(node, "pointerenter", (e) => {
        if (isTouch(e))
          return;
        handleOpen.get()();
      }), addMeltEventListener(node, "pointerleave", (e) => {
        if (isTouch(e))
          return;
        handleClose.get()();
      }), addMeltEventListener(node, "focusout", (e) => {
        e.preventDefault();
      }));
      return {
        destroy() {
          unsub();
          unsubPopper();
          unsubTimers();
          unsubDerived();
        }
      };
    }
  });
  const arrow = makeElement(name("arrow"), {
    stores: arrowSize,
    returned: ($arrowSize) => ({
      "data-arrow": true,
      style: styleToString({
        position: "absolute",
        width: `var(--arrow-size, ${$arrowSize}px)`,
        height: `var(--arrow-size, ${$arrowSize}px)`
      })
    })
  });
  effect([containSelection], ([$containSelection]) => {
    if (!isBrowser || !$containSelection)
      return;
    const body = document.body;
    const contentElement = document.getElementById(ids.content.get());
    if (!contentElement)
      return;
    originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
    const originalContentUserSelect = contentElement.style.userSelect || contentElement.style.webkitUserSelect;
    body.style.userSelect = "none";
    body.style.webkitUserSelect = "none";
    contentElement.style.userSelect = "text";
    contentElement.style.webkitUserSelect = "text";
    return () => {
      body.style.userSelect = originalBodyUserSelect;
      body.style.webkitUserSelect = originalBodyUserSelect;
      contentElement.style.userSelect = originalContentUserSelect;
      contentElement.style.webkitUserSelect = originalContentUserSelect;
    };
  });
  safeOnMount(() => {
    const triggerEl = document.getElementById(ids.trigger.get());
    if (!triggerEl)
      return;
    activeTrigger.set(triggerEl);
  });
  effect([open], ([$open]) => {
    if (!isBrowser || !$open) {
      hasSelection.set(false);
      return;
    }
    const handlePointerUp = () => {
      containSelection.set(false);
      isPointerDownOnContent.set(false);
      sleep(1).then(() => {
        const isSelection = document.getSelection()?.toString() !== "";
        if (isSelection) {
          hasSelection.set(true);
        }
      });
    };
    document.addEventListener("pointerup", handlePointerUp);
    const contentElement = document.getElementById(ids.content.get());
    if (!contentElement)
      return;
    const tabbables = getTabbableNodes(contentElement);
    tabbables.forEach((tabbable) => tabbable.setAttribute("tabindex", "-1"));
    return () => {
      document.removeEventListener("pointerup", handlePointerUp);
      hasSelection.set(false);
      isPointerDownOnContent.set(false);
    };
  });
  return {
    ids,
    elements: {
      trigger,
      content,
      arrow
    },
    states: {
      open
    },
    options
  };
}
function getPositioningUpdater(store) {
  return (props = {}) => {
    return updatePositioning$1(store, props);
  };
}
function updatePositioning$1(store, props) {
  const defaultPositioningProps = {
    side: "bottom",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    sameWidth: false,
    avoidCollisions: true,
    collisionPadding: 8,
    fitViewport: false,
    strategy: "absolute",
    overlap: false
  };
  const withDefaults = { ...defaultPositioningProps, ...props };
  store.update((prev) => {
    return {
      ...prev,
      placement: joinPlacement(withDefaults.side, withDefaults.align),
      offset: {
        ...prev.offset,
        mainAxis: withDefaults.sideOffset,
        crossAxis: withDefaults.alignOffset
      },
      gutter: 0,
      sameWidth: withDefaults.sameWidth,
      flip: withDefaults.avoidCollisions,
      overflowPadding: withDefaults.collisionPadding,
      boundary: withDefaults.collisionBoundary,
      fitViewport: withDefaults.fitViewport,
      strategy: withDefaults.strategy,
      overlap: withDefaults.overlap
    };
  });
}
function joinPlacement(side, align) {
  if (align === "center")
    return side;
  return `${side}-${align}`;
}
function getLinkPreviewData() {
  const NAME = "link-preview";
  const PARTS = ["arrow", "content", "trigger"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getLinkPreviewData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const linkPreview = {
    ...createLinkPreview({
      ...removeUndefined(props),
      forceVisible: true
    }),
    getAttrs
  };
  setContext(NAME, linkPreview);
  return {
    ...linkPreview,
    updateOption: getOptionUpdater(linkPreview.options)
  };
}
function getCtx() {
  const { NAME } = getLinkPreviewData();
  return getContext(NAME);
}
function updatePositioning(props) {
  const defaultPlacement = {
    side: "bottom",
    align: "center"
  };
  const withDefaults = { ...defaultPlacement, ...props };
  const { options: { positioning } } = getCtx();
  const updater = getPositioningUpdater(positioning);
  updater(withDefaults);
}
const Link_preview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { openDelay = 700 } = $$props;
  let { closeDelay = 300 } = $$props;
  let { closeOnOutsideClick = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  let { onOutsideClick = void 0 } = $$props;
  const { states: { open: localOpen }, updateOption, ids } = setCtx({
    defaultOpen: open,
    openDelay,
    closeDelay,
    closeOnOutsideClick,
    closeOnEscape,
    portal,
    onOutsideClick,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    }
  });
  const idValues = derived([ids.content, ids.trigger], ([$contentId, $triggerId]) => ({ content: $contentId, trigger: $triggerId }));
  $$unsubscribe_idValues = subscribe(idValues, (value) => $idValues = value);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
    $$bindings.onOpenChange(onOpenChange);
  if ($$props.openDelay === void 0 && $$bindings.openDelay && openDelay !== void 0)
    $$bindings.openDelay(openDelay);
  if ($$props.closeDelay === void 0 && $$bindings.closeDelay && closeDelay !== void 0)
    $$bindings.closeDelay(closeDelay);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
    $$bindings.portal(portal);
  if ($$props.onOutsideClick === void 0 && $$bindings.onOutsideClick && onOutsideClick !== void 0)
    $$bindings.onOutsideClick(onOutsideClick);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("openDelay", openDelay);
  }
  {
    updateOption("closeDelay", closeDelay);
  }
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("onOutsideClick", onOutsideClick);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const Link_preview_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "id",
    "side",
    "align",
    "sideOffset",
    "alignOffset",
    "collisionPadding",
    "avoidCollisions",
    "collisionBoundary",
    "sameWidth",
    "fitViewport",
    "strategy",
    "overlap",
    "el"
  ]);
  let $open, $$unsubscribe_open;
  let $content, $$unsubscribe_content;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { side = "bottom" } = $$props;
  let { align = "center" } = $$props;
  let { sideOffset = 0 } = $$props;
  let { alignOffset = 0 } = $$props;
  let { collisionPadding = 8 } = $$props;
  let { avoidCollisions = true } = $$props;
  let { collisionBoundary = void 0 } = $$props;
  let { sameWidth = false } = $$props;
  let { fitViewport = false } = $$props;
  let { strategy = "absolute" } = $$props;
  let { overlap = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { content }, states: { open }, ids, getAttrs } = getCtx();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const attrs = getAttrs("content");
  createDispatcher();
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0)
    $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0)
    $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.side === void 0 && $$bindings.side && side !== void 0)
    $$bindings.side(side);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
    $$bindings.sideOffset(sideOffset);
  if ($$props.alignOffset === void 0 && $$bindings.alignOffset && alignOffset !== void 0)
    $$bindings.alignOffset(alignOffset);
  if ($$props.collisionPadding === void 0 && $$bindings.collisionPadding && collisionPadding !== void 0)
    $$bindings.collisionPadding(collisionPadding);
  if ($$props.avoidCollisions === void 0 && $$bindings.avoidCollisions && avoidCollisions !== void 0)
    $$bindings.avoidCollisions(avoidCollisions);
  if ($$props.collisionBoundary === void 0 && $$bindings.collisionBoundary && collisionBoundary !== void 0)
    $$bindings.collisionBoundary(collisionBoundary);
  if ($$props.sameWidth === void 0 && $$bindings.sameWidth && sameWidth !== void 0)
    $$bindings.sameWidth(sameWidth);
  if ($$props.fitViewport === void 0 && $$bindings.fitViewport && fitViewport !== void 0)
    $$bindings.fitViewport(fitViewport);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.overlap === void 0 && $$bindings.overlap && overlap !== void 0)
    $$bindings.overlap(overlap);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    if (id) {
      ids.content.set(id);
    }
  }
  builder = $content;
  {
    Object.assign(builder, attrs);
  }
  {
    if ($open) {
      updatePositioning({
        side,
        align,
        sideOffset,
        alignOffset,
        collisionPadding,
        avoidCollisions,
        collisionBoundary,
        sameWidth,
        fitViewport,
        strategy,
        overlap
      });
    }
  }
  $$unsubscribe_open();
  $$unsubscribe_content();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Link_preview_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "id", "el"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { trigger }, ids, getAttrs } = getCtx();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  const attrs = getAttrs("trigger");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    if (id) {
      ids.trigger.set(id);
    }
  }
  builder = $trigger;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_trigger();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `${((tag) => {
    return tag ? `<a${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({ builder }) : ``}`}</a>` : "";
  })("a")}`}`;
});
/**
 * @license lucide-svelte v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const defaultAttributes$1 = defaultAttributes;
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name: name2 } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name2 !== void 0)
    $$bindings.name(name2);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0)
    $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0)
    $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes$1),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(`lucide-icon lucide lucide-${name2} ${$$props.class ?? ""}`)
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Icon$1 = Icon;
const Hover_card_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig", "align", "sideOffset"]);
  let { class: className = void 0 } = $$props;
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { align = "center" } = $$props;
  let { sideOffset = 4 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
    $$bindings.sideOffset(sideOffset);
  return `${validate_component(Link_preview_content, "HoverCardPrimitive.Content").$$render(
    $$result,
    Object.assign(
      {},
      { transition },
      { transitionConfig },
      { align },
      { sideOffset },
      {
        class: cn("z-50 mt-3 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none", className)
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
const Root = Link_preview;
const Trigger = Link_preview_trigger;
const CaretRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "ariaLabel", "withEvents"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { ariaLabel = "caret right," } = $$props;
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
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z" fill="currentColor"></path></svg>` : `<svg${spread(
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
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z" fill="currentColor"></path></svg>`} `;
});
const IndexNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Menubar, "Menubar.Root").$$render($$result, { class: "p-10 w-[100%] justify-between" }, {}, {
    default: () => {
      return `${validate_component(Menu, "Menubar.Menu").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Menubar_item, "Menubar.Item").$$render(
            $$result,
            {
              class: "text-[22px] text-black font-bold italic hover:text-green-500 transition ease-in-out duration-300"
            },
            {},
            {
              default: () => {
                return `CAR-RILLO`;
              }
            }
          )} <div class="flex hidden md:flex">${validate_component(Menubar_item, "Menubar.Item").$$render($$result, { class: "text-lg hover:text-green-500" }, {}, {
            default: () => {
              return `${validate_component(Root, "HoverCard.Root").$$render($$result, { openDelay: 50, closeDelay: 50 }, {}, {
                default: () => {
                  return `${validate_component(Trigger, "HoverCard.Trigger").$$render($$result, {}, {}, {
                    default: () => {
                      return `Products`;
                    }
                  })} ${validate_component(Hover_card_content, "HoverCard.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `Coming soon!`;
                    }
                  })}`;
                }
              })}`;
            }
          })} ${validate_component(Menubar_item, "Menubar.Item").$$render($$result, { class: "text-lg hover:text-green-500" }, {}, {
            default: () => {
              return `${validate_component(Root, "HoverCard.Root").$$render($$result, { openDelay: 50, closeDelay: 50 }, {}, {
                default: () => {
                  return `${validate_component(Trigger, "HoverCard.Trigger").$$render($$result, {}, {}, {
                    default: () => {
                      return `Solutions`;
                    }
                  })} ${validate_component(Hover_card_content, "HoverCard.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `Coming soon!`;
                    }
                  })}`;
                }
              })}`;
            }
          })} ${validate_component(Menubar_item, "Menubar.Item").$$render($$result, { class: "text-lg hover:text-green-500" }, {}, {
            default: () => {
              return `${validate_component(Root, "HoverCard.Root").$$render($$result, { openDelay: 50, closeDelay: 50 }, {}, {
                default: () => {
                  return `${validate_component(Trigger, "HoverCard.Trigger").$$render($$result, {}, {}, {
                    default: () => {
                      return `Developers`;
                    }
                  })} ${validate_component(Hover_card_content, "HoverCard.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `Coming soon!`;
                    }
                  })}`;
                }
              })}`;
            }
          })} ${validate_component(Menubar_item, "Menubar.Item").$$render($$result, { class: "text-lg hover:text-green-500" }, {}, {
            default: () => {
              return `${validate_component(Root, "HoverCard.Root").$$render($$result, { openDelay: 50, closeDelay: 50 }, {}, {
                default: () => {
                  return `${validate_component(Trigger, "HoverCard.Trigger").$$render($$result, {}, {}, {
                    default: () => {
                      return `Resources`;
                    }
                  })} ${validate_component(Hover_card_content, "HoverCard.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `Coming soon!`;
                    }
                  })}`;
                }
              })}`;
            }
          })} ${validate_component(Menubar_item, "Menubar.Item").$$render($$result, { class: "text-lg hover:text-green-500" }, {}, {
            default: () => {
              return `${validate_component(Root, "HoverCard.Root").$$render($$result, { openDelay: 50, closeDelay: 50 }, {}, {
                default: () => {
                  return `${validate_component(Trigger, "HoverCard.Trigger").$$render($$result, {}, {}, {
                    default: () => {
                      return `Pricing`;
                    }
                  })} ${validate_component(Hover_card_content, "HoverCard.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `Coming soon!`;
                    }
                  })}`;
                }
              })}`;
            }
          })}</div> <div class="flex float-right">${validate_component(Menubar_item, "Menubar.Item").$$render($$result, { class: "text-lg group" }, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, { class: "p-2 bg-none pr-8" }, {}, {
                default: () => {
                  return `Contact Us
                        ${validate_component(CaretRight, "CaretRight").$$render($$result, { class: "m-2 w-[20px] absolute right-3" }, {}, {})} ${validate_component(CaretRight, "CaretRight").$$render(
                    $$result,
                    {
                      class: "m-2 w-[20px] transition-transform duration-500 ease-in-out transform group-hover:translate-x-2 absolute right-3"
                    },
                    {},
                    {}
                  )}`;
                }
              })}`;
            }
          })} ${validate_component(Menubar_item, "Menubar.Item").$$render(
            $$result,
            {
              class: "text-lg justify-self-right p-2 group"
            },
            {},
            {
              default: () => {
                return `${validate_component(Button, "Button").$$render($$result, { class: "p-2 flex pr-8" }, {}, {
                  default: () => {
                    return `Dealership Portal
                        ${validate_component(CaretRight, "CaretRight").$$render($$result, { class: "m-2 w-[20px] absolute right-3" }, {}, {})} ${validate_component(CaretRight, "CaretRight").$$render(
                      $$result,
                      {
                        class: "m-2 w-[20px] transition-transform duration-500 ease-in-out transform group-hover:translate-x-2 absolute right-3"
                      },
                      {},
                      {}
                    )}`;
                  }
                })}`;
              }
            }
          )}</div>`;
        }
      })}`;
    }
  })}</main>`;
});

export { IndexNav as I, Icon$1 as a, getPositioningUpdater as g };
//# sourceMappingURL=IndexNav-B7CovBbS.js.map
