import { c as create_ssr_component, o as onDestroy, v as validate_component, f as compute_rest_props, b as each, e as escape, a as subscribe, d as add_attribute, h as spread, j as escape_object, i as escape_attribute_value, s as setContext, g as getContext, l as get_store_value } from './ssr-DTSylQif.js';
import { c as cn, C as Card, a as Card_header, b as Card_title, B as Button, d as createBitAttrs, r as removeUndefined, g as getOptionUpdater, G as customAlphabet, t as toWritableStores, o as omit, m as makeElement, H as disabledAttr, l as executeCallbacks, n as addMeltEventListener, i as isBrowser, q as createElHelpers, z as isHTMLElement, I as getDirectionalKeys, x as kbd, y as noop } from './card-title-C6YlrkIb.js';
import 'clsx';
import { tv } from 'tailwind-variants';
import { M as Menubar, a as Menu, b as Menubar_item, c as createDispatcher, o as overridable, n as next, p as prev, l as last, i as handleRovingFocus } from './index2-DmYOMU5P.js';
import { d as derived, w as writable } from './index-wq-T43VL.js';
import { T as Table, a as Table_body, b as Table_row, c as Table_cell, C as Card_description, P as Progress } from './progress-CPcosjI1.js';
import { C as Card_content } from './card-content-DK8Gu6PG.js';
import { I as Input } from './input-4kH3G8Rw.js';
import 'tailwind-merge';

function getElemDirection(elem) {
  const style = window.getComputedStyle(elem);
  const direction = style.getPropertyValue("direction");
  return direction;
}
const defaults$1 = {
  orientation: "horizontal",
  activateOnFocus: true,
  loop: true,
  autoSet: true
};
const { name: name$1, selector: selector$1 } = createElHelpers("tabs");
function createTabs(props) {
  const withDefaults = { ...defaults$1, ...props };
  const options = toWritableStores(omit(withDefaults, "defaultValue", "value", "onValueChange", "autoSet"));
  const { orientation, activateOnFocus, loop } = options;
  const valueWritable = withDefaults.value ?? writable(withDefaults.defaultValue);
  const value = overridable(valueWritable, withDefaults?.onValueChange);
  let ssrValue = withDefaults.defaultValue ?? value.get();
  const root = makeElement(name$1(), {
    stores: orientation,
    returned: ($orientation) => {
      return {
        "data-orientation": $orientation
      };
    }
  });
  const list = makeElement(name$1("list"), {
    stores: orientation,
    returned: ($orientation) => {
      return {
        role: "tablist",
        "aria-orientation": $orientation,
        "data-orientation": $orientation
      };
    }
  });
  const parseTriggerProps = (props2) => {
    if (typeof props2 === "string") {
      return { value: props2 };
    } else {
      return props2;
    }
  };
  const trigger = makeElement(name$1("trigger"), {
    stores: [value, orientation],
    returned: ([$value, $orientation]) => {
      return (props2) => {
        const { value: tabValue, disabled } = parseTriggerProps(props2);
        if (!$value && !ssrValue && withDefaults.autoSet) {
          ssrValue = tabValue;
          $value = tabValue;
          value.set(tabValue);
        }
        const sourceOfTruth = isBrowser ? $value : ssrValue;
        const isActive = sourceOfTruth === tabValue;
        return {
          type: "button",
          role: "tab",
          "data-state": isActive ? "active" : "inactive",
          tabindex: isActive ? 0 : -1,
          "data-value": tabValue,
          "data-orientation": $orientation,
          "data-disabled": disabledAttr(disabled),
          disabled: disabledAttr(disabled)
        };
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "focus", () => {
        const disabled = node.dataset.disabled === "true";
        const tabValue = node.dataset.value;
        if (activateOnFocus.get() && !disabled && tabValue !== void 0) {
          value.set(tabValue);
        }
      }), addMeltEventListener(node, "click", (e) => {
        node.focus();
        e.preventDefault();
        const disabled = node.dataset.disabled === "true";
        if (disabled)
          return;
        const tabValue = node.dataset.value;
        node.focus();
        if (tabValue !== void 0) {
          value.set(tabValue);
        }
      }), addMeltEventListener(node, "keydown", (e) => {
        const tabValue = node.dataset.value;
        if (!tabValue)
          return;
        const el = e.currentTarget;
        if (!isHTMLElement(el))
          return;
        const rootEl = el.closest(selector$1());
        if (!isHTMLElement(rootEl))
          return;
        const $loop = loop.get();
        const triggers = Array.from(rootEl.querySelectorAll('[role="tab"]')).filter((trigger2) => isHTMLElement(trigger2));
        const enabledTriggers = triggers.filter((el2) => !el2.hasAttribute("data-disabled"));
        const triggerIdx = enabledTriggers.findIndex((el2) => el2 === e.target);
        const dir = getElemDirection(rootEl);
        const { nextKey, prevKey } = getDirectionalKeys(dir, orientation.get());
        if (e.key === nextKey) {
          e.preventDefault();
          const nextEl = next(enabledTriggers, triggerIdx, $loop);
          nextEl.focus();
        } else if (e.key === prevKey) {
          e.preventDefault();
          const prevEl = prev(enabledTriggers, triggerIdx, $loop);
          prevEl.focus();
        } else if (e.key === kbd.ENTER || e.key === kbd.SPACE) {
          e.preventDefault();
          value.set(tabValue);
        } else if (e.key === kbd.HOME) {
          e.preventDefault();
          const firstTrigger = enabledTriggers[0];
          firstTrigger.focus();
        } else if (e.key === kbd.END) {
          e.preventDefault();
          const lastTrigger = last(enabledTriggers);
          lastTrigger.focus();
        }
      }));
      return {
        destroy: unsub
      };
    }
  });
  const content = makeElement(name$1("content"), {
    stores: value,
    returned: ($value) => {
      return (tabValue) => {
        return {
          role: "tabpanel",
          // TODO: improve
          "aria-labelledby": tabValue,
          hidden: isBrowser ? $value === tabValue ? void 0 : true : ssrValue === tabValue ? void 0 : true,
          tabindex: 0
        };
      };
    }
  });
  return {
    elements: {
      root,
      list,
      trigger,
      content
    },
    states: {
      value
    },
    options
  };
}
const defaults = {
  type: "single",
  orientation: "horizontal",
  loop: true,
  rovingFocus: true,
  disabled: false,
  defaultValue: ""
};
const { name, selector } = createElHelpers("toggle-group");
const createToggleGroup = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "value"));
  const { type, orientation, loop, rovingFocus, disabled } = options;
  const defaultValue = withDefaults.defaultValue ? withDefaults.defaultValue : withDefaults.type === "single" ? void 0 : [];
  const valueWritable = withDefaults.value ?? writable(defaultValue);
  const value = overridable(valueWritable, withDefaults?.onValueChange);
  const root = makeElement(name(), {
    stores: orientation,
    returned: ($orientation) => {
      return {
        role: "group",
        "data-orientation": $orientation
      };
    }
  });
  const item = makeElement(name("item"), {
    stores: [value, disabled, orientation, type],
    returned: ([$value, $disabled, $orientation, $type]) => {
      return (props2) => {
        const itemValue = typeof props2 === "string" ? props2 : props2.value;
        const argDisabled = typeof props2 === "string" ? false : !!props2.disabled;
        const disabled2 = $disabled || argDisabled;
        const pressed = Array.isArray($value) ? $value.includes(itemValue) : $value === itemValue;
        const isSingle = $type === "single";
        const isMultiple = $type === "multiple" || $type === void 0;
        return {
          disabled: disabledAttr(disabled2),
          pressed,
          "data-orientation": $orientation,
          "data-disabled": disabledAttr(disabled2),
          "data-state": pressed ? "on" : "off",
          "data-value": itemValue,
          "aria-pressed": isMultiple ? pressed : void 0,
          "aria-checked": isSingle ? pressed : void 0,
          type: "button",
          role: isSingle ? "radio" : void 0,
          tabindex: pressed ? 0 : -1
        };
      };
    },
    action: (node) => {
      let unsub = noop;
      const parentGroup = node.closest(selector());
      if (!isHTMLElement(parentGroup))
        return {};
      const items = Array.from(parentGroup.querySelectorAll(selector("item")));
      const $value = value.get();
      const anyPressed = Array.isArray($value) ? $value.length > 0 : $value ? true : false;
      if (!anyPressed && items[0] === node) {
        node.tabIndex = 0;
      }
      function getNodeProps() {
        const itemValue = node.dataset.value;
        const disabled2 = node.dataset.disabled === "true";
        return { value: itemValue, disabled: disabled2 };
      }
      function handleValueUpdate() {
        const { value: itemValue, disabled: disabled2 } = getNodeProps();
        if (itemValue === void 0 || disabled2)
          return;
        value.update(($value2) => {
          if (Array.isArray($value2)) {
            if ($value2.includes(itemValue)) {
              return $value2.filter((i) => i !== itemValue);
            }
            return [...$value2, itemValue];
          }
          return $value2 === itemValue ? void 0 : itemValue;
        });
      }
      unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        handleValueUpdate();
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key === kbd.SPACE || e.key === kbd.ENTER) {
          e.preventDefault();
          handleValueUpdate();
          return;
        }
        if (!rovingFocus.get())
          return;
        const el = e.currentTarget;
        if (!isHTMLElement(el))
          return;
        const root2 = el.closest(selector());
        if (!isHTMLElement(root2))
          return;
        const items2 = Array.from(root2.querySelectorAll(selector("item") + ":not([data-disabled])")).filter((item2) => isHTMLElement(item2));
        const currentIndex = items2.indexOf(el);
        const dir = getElemDirection(el);
        const $orientation = orientation.get();
        const nextKey = {
          horizontal: dir === "rtl" ? kbd.ARROW_LEFT : kbd.ARROW_RIGHT,
          vertical: kbd.ARROW_DOWN
        }[$orientation ?? "horizontal"];
        const prevKey = {
          horizontal: dir === "rtl" ? kbd.ARROW_RIGHT : kbd.ARROW_LEFT,
          vertical: kbd.ARROW_UP
        }[$orientation ?? "horizontal"];
        const $loop = loop.get();
        if (e.key === nextKey) {
          e.preventDefault();
          const nextIndex = currentIndex + 1;
          if (nextIndex >= items2.length && $loop) {
            handleRovingFocus(items2[0]);
          } else {
            handleRovingFocus(items2[nextIndex]);
          }
        } else if (e.key === prevKey) {
          e.preventDefault();
          const prevIndex = currentIndex - 1;
          if (prevIndex < 0 && $loop) {
            handleRovingFocus(items2[items2.length - 1]);
          } else {
            handleRovingFocus(items2[prevIndex]);
          }
        } else if (e.key === kbd.HOME) {
          e.preventDefault();
          handleRovingFocus(items2[0]);
        } else if (e.key === kbd.END) {
          e.preventDefault();
          handleRovingFocus(items2[items2.length - 1]);
        }
      }));
      return {
        destroy: unsub
      };
    }
  });
  const isPressed = derived(value, ($value) => {
    return (itemValue) => {
      return Array.isArray($value) ? $value.includes(itemValue) : $value === itemValue;
    };
  });
  return {
    elements: {
      root,
      item
    },
    states: {
      value
    },
    helpers: {
      isPressed
    },
    options
  };
};
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value, index) => value === arr2[index]);
}
function getTabsData() {
  const NAME = "tabs";
  const PARTS = ["root", "content", "list", "trigger"];
  return {
    NAME,
    PARTS
  };
}
function setCtx$1(props) {
  const { NAME, PARTS } = getTabsData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const tabs = { ...createTabs(removeUndefined(props)), getAttrs };
  setContext(NAME, tabs);
  return {
    ...tabs,
    updateOption: getOptionUpdater(tabs.options)
  };
}
function getCtx$1() {
  const { NAME } = getTabsData();
  return getContext(NAME);
}
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "orientation",
    "activateOnFocus",
    "loop",
    "autoSet",
    "value",
    "onValueChange",
    "asChild",
    "el"
  ]);
  let $root, $$unsubscribe_root;
  let $localValue, $$unsubscribe_localValue;
  let { orientation = void 0 } = $$props;
  let { activateOnFocus = void 0 } = $$props;
  let { loop = void 0 } = $$props;
  let { autoSet = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { onValueChange = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { root }, states: { value: localValue }, updateOption, getAttrs } = setCtx$1({
    orientation,
    activateOnFocus,
    loop,
    autoSet,
    defaultValue: value,
    onValueChange: ({ next: next2 }) => {
      if (value !== next2) {
        onValueChange?.(next2);
        value = next2;
      }
      return next2;
    }
  });
  $$unsubscribe_root = subscribe(root, (value2) => $root = value2);
  $$unsubscribe_localValue = subscribe(localValue, (value2) => $localValue = value2);
  const attrs = getAttrs("root");
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.activateOnFocus === void 0 && $$bindings.activateOnFocus && activateOnFocus !== void 0)
    $$bindings.activateOnFocus(activateOnFocus);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.autoSet === void 0 && $$bindings.autoSet && autoSet !== void 0)
    $$bindings.autoSet(autoSet);
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
    updateOption("orientation", orientation);
  }
  {
    updateOption("activateOnFocus", activateOnFocus);
  }
  {
    updateOption("loop", loop);
  }
  {
    updateOption("autoSet", autoSet);
  }
  builder = $root;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_root();
  $$unsubscribe_localValue();
  return `${asChild ? `${slots.default ? slots.default({ builder, value: $localValue }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder, value: $localValue }) : ``}</div>`}`;
});
const Tabs_content$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["value", "asChild", "el"]);
  let $content, $$unsubscribe_content;
  let { value } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { content }, getAttrs } = getCtx$1();
  $$unsubscribe_content = subscribe(content, (value2) => $content = value2);
  const attrs = getAttrs("content");
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $content(value);
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_content();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Tabs_list$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $list, $$unsubscribe_list;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { list }, getAttrs } = getCtx$1();
  $$unsubscribe_list = subscribe(list, (value) => $list = value);
  const attrs = getAttrs("list");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $list;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_list();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Tabs_trigger$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["value", "disabled", "asChild", "el"]);
  let $trigger, $$unsubscribe_trigger;
  let { value } = $$props;
  let { disabled = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { trigger }, getAttrs } = getCtx$1();
  $$unsubscribe_trigger = subscribe(trigger, (value2) => $trigger = value2);
  createDispatcher();
  const attrs = getAttrs("trigger");
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $trigger({ value, disabled });
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_trigger();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
function getToggleGroupData() {
  const NAME = "toggle-group";
  const PARTS = ["root", "item"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getToggleGroupData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const toggleGroup = { ...createToggleGroup(removeUndefined(props)), getAttrs };
  setContext(NAME, toggleGroup);
  return {
    ...toggleGroup,
    updateOption: getOptionUpdater(toggleGroup.options)
  };
}
function getCtx() {
  const { NAME } = getToggleGroupData();
  return getContext(NAME);
}
const Toggle_group$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["type", "disabled", "loop", "value", "orientation", "onValueChange", "asChild", "el"]);
  let $root, $$unsubscribe_root;
  let { type = "single" } = $$props;
  let { disabled = void 0 } = $$props;
  let { loop = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { orientation = void 0 } = $$props;
  let { onValueChange = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { root }, states: { value: localValue }, updateOption, getAttrs } = setCtx({
    disabled,
    type,
    defaultValue: value,
    loop,
    orientation,
    onValueChange: ({ next: next2 }) => {
      if (Array.isArray(next2)) {
        if (!Array.isArray(value) || !arraysAreEqual(value, next2)) {
          onValueChange?.(next2);
          value = next2;
          return next2;
        }
        return next2;
      }
      if (value !== next2) {
        onValueChange?.(next2);
        value = next2;
      }
      return next2;
    }
  });
  $$unsubscribe_root = subscribe(root, (value2) => $root = value2);
  const attrs = getAttrs("root");
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.onValueChange === void 0 && $$bindings.onValueChange && onValueChange !== void 0)
    $$bindings.onValueChange(onValueChange);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  value !== void 0 && localValue.set(Array.isArray(value) ? [...value] : value);
  {
    updateOption("disabled", disabled);
  }
  {
    updateOption("loop", loop);
  }
  {
    updateOption("type", type);
  }
  {
    updateOption("orientation", orientation);
  }
  builder = $root;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Toggle_group_item$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["value", "disabled", "asChild", "el"]);
  let $item, $$unsubscribe_item;
  let { value } = $$props;
  let { disabled = false } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { item }, getAttrs } = getCtx();
  $$unsubscribe_item = subscribe(item, (value2) => $item = value2);
  createDispatcher();
  const attrs = getAttrs("item");
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $item({ value, disabled });
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_item();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Table_head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<th${spread(
    [
      {
        class: escape_attribute_value(cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</th>`;
});
const Table_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return ` <thead${spread(
    [
      {
        class: escape_attribute_value(cn("[&_tr]:border-b", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</thead>`;
});
const Toggle_group = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "variant", "size", "value"]);
  let { class: className = void 0 } = $$props;
  let { variant = "default" } = $$props;
  let { size = "default" } = $$props;
  let { value = void 0 } = $$props;
  setToggleGroupCtx({ variant, size });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Toggle_group$1, "ToggleGroupPrimitive.Root").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: cn("flex items-center justify-center gap-1", className)
        },
        $$restProps,
        { value }
      ),
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ builder }) => {
          return `${slots.default ? slots.default({ builder }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const toggleVariants = tv({
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
    },
    size: {
      default: "h-10 px-3",
      sm: "h-9 px-2.5",
      lg: "h-11 px-5"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Toggle_group_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "variant", "size", "value"]);
  let { class: className = void 0 } = $$props;
  let { variant = "default" } = $$props;
  let { size = "default" } = $$props;
  let { value } = $$props;
  const ctx = getToggleGroupCtx();
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `${validate_component(Toggle_group_item$1, "ToggleGroupPrimitive.Item").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn(
          toggleVariants({
            variant: ctx.variant || variant,
            size: ctx.size || size
          }),
          className
        )
      },
      { value },
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
function setToggleGroupCtx(props) {
  setContext("toggleGroup", props);
}
function getToggleGroupCtx() {
  return getContext("toggleGroup");
}
const Tabs_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "value"]);
  let { class: className = void 0 } = $$props;
  let { value } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `${validate_component(Tabs_content$1, "TabsPrimitive.Content").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)
      },
      { value },
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
const Tabs_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(Tabs_list$1, "TabsPrimitive.List").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)
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
const Tabs_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "value"]);
  let { class: className = void 0 } = $$props;
  let { value } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `${validate_component(Tabs_trigger$1, "TabsPrimitive.Trigger").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className)
      },
      { value },
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
const Root = Tabs;
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Menubar, "Menubar.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Menu, "Menubar.Menu").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Menubar_item, "Menubar.Item").$$render($$result, {}, {}, {
            default: () => {
              return `testing`;
            }
          })} ${validate_component(Menubar_item, "Menubar.Item").$$render($$result, {}, {}, {
            default: () => {
              return `testing`;
            }
          })}`;
        }
      })}`;
    }
  })}</main>`;
});
let guest_name = "John Doe";
let ro_opened = "4-9-2022 9:45AM";
let license = "123456";
let vin = "123456";
let phone_number = "123456";
let service_advisor = "Shirley Smith";
let last_service_date = "4-9-2022 9:45AM";
let tag_number = "123456";
let customer_notes = "Customer hears strange noises when driving";
const Customer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Table, "Table.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
        default: () => {
          return `${each(
            [
              { label: "Guest Name:", value: guest_name },
              { label: "RO Opened:", value: ro_opened },
              { label: "License:", value: license },
              { label: "VIN Number:", value: vin },
              {
                label: "Phone Number:",
                value: phone_number
              },
              {
                label: "Service Advisor:",
                value: service_advisor
              },
              {
                label: "Last Service Date:",
                value: last_service_date
              },
              { label: "Tag Number:", value: tag_number }
            ],
            ({ label, value }) => {
              return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `${escape(label)}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(value)}`;
                    }
                  })} `;
                }
              })}`;
            }
          )}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "m-2" }, {}, {
    default: () => {
      return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
            default: () => {
              return `Customer Notes`;
            }
          })}`;
        }
      })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "m-4" }, {}, {
        default: () => {
          return `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(customer_notes)}`;
            }
          })}`;
        }
      })}`;
    }
  })}</main>`;
});
const Repair = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let services = [
    {
      service: "Oil Change",
      status: "Completed",
      value: "$78.00",
      time: "0.5 Hours",
      selected: void 0
    },
    {
      service: "Tire Rotation",
      status: "In Progress",
      value: "$50.00",
      time: "1 Hour",
      selected: void 0
    },
    {
      service: "Brake Inspection",
      status: "Not Started",
      value: "$0.00",
      time: "0.5 Hours",
      selected: void 0
    }
  ];
  let MPI = [
    {
      service: "Tire Pressures",
      selected: void 0
    },
    {
      service: "Left Front Tire / Tire Depth and or Condition",
      selected: void 0
    },
    {
      service: "Right Front Tire / Tire Depth and or Condition",
      selected: void 0
    },
    {
      service: "Left Rear Tire / Tire Depth and or Condition",
      selected: void 0
    },
    {
      service: "Right Rear Tire / Tire Depth and or Condition",
      selected: void 0
    },
    {
      service: "Tire Recommendations",
      selected: void 0
    },
    {
      service: "Inspect Tires Condition / TPMS",
      selected: void 0
    },
    {
      service: "Rims / wheels / lugnuts",
      selected: void 0
    },
    {
      service: "Alignment",
      selected: void 0
    }
  ];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<main><div class="grid grid-cols-3 gap-2 m-2">${validate_component(Card, "Card.Root").$$render($$result, { class: "col-span-2" }, {}, {
      default: () => {
        return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
              default: () => {
                return `RO Form`;
              }
            })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
              default: () => {
                return `RO Number:`;
              }
            })}`;
          }
        })} ${validate_component(Table, "Table.Root").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
              default: () => {
                return `${each(services, (service) => {
                  return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                        default: () => {
                          return `${escape(service.service)}`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(service.status)}`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(service.value)}`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(service.time)}`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Toggle_group, "ToggleGroup.Root").$$render(
                            $$result,
                            { type: "single", value: service.selected },
                            {
                              value: ($$value) => {
                                service.selected = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `${validate_component(Toggle_group_item, "ToggleGroup.Item").$$render(
                                  $$result,
                                  {
                                    value: "start",
                                    class: "data-[state=on]:bg-orange-500"
                                  },
                                  {},
                                  {
                                    default: () => {
                                      return `Start
                                    `;
                                    }
                                  }
                                )} ${validate_component(Toggle_group_item, "ToggleGroup.Item").$$render(
                                  $$result,
                                  {
                                    value: "pause",
                                    class: "data-[state=on]:bg-yellow-500"
                                  },
                                  {},
                                  {
                                    default: () => {
                                      return `Pause
                                    `;
                                    }
                                  }
                                )} ${validate_component(Toggle_group_item, "ToggleGroup.Item").$$render(
                                  $$result,
                                  {
                                    value: "complete",
                                    class: "data-[state=on]:bg-green-500"
                                  },
                                  {},
                                  {
                                    default: () => {
                                      return `Complete
                                    `;
                                    }
                                  }
                                )} `;
                              }
                            }
                          )} `;
                        }
                      })} `;
                    }
                  })}`;
                })}`;
              }
            })}`;
          }
        })} ${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
              default: () => {
                return `MPI Inspection`;
              }
            })}`;
          }
        })} ${validate_component(Table, "Table.Root").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Table_header, "Table.Header").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Table_head, "Table.Head").$$render($$result, { class: "w-[100px]" }, {}, {
                      default: () => {
                        return `Tires`;
                      }
                    })}`;
                  }
                })}`;
              }
            })} ${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
              default: () => {
                return `${each(MPI, (service) => {
                  return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                        default: () => {
                          return `${escape(service.service)}`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Toggle_group, "ToggleGroup.Root").$$render(
                            $$result,
                            { type: "single", value: service.selected },
                            {
                              value: ($$value) => {
                                service.selected = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `${validate_component(Toggle_group_item, "ToggleGroup.Item").$$render(
                                  $$result,
                                  {
                                    value: "pass",
                                    class: "data-[state=on]:bg-green-500"
                                  },
                                  {},
                                  {
                                    default: () => {
                                      return `Pass`;
                                    }
                                  }
                                )} ${validate_component(Toggle_group_item, "ToggleGroup.Item").$$render(
                                  $$result,
                                  {
                                    value: "caution",
                                    class: "data-[state=on]:bg-yellow-500"
                                  },
                                  {},
                                  {
                                    default: () => {
                                      return `Caution`;
                                    }
                                  }
                                )} ${validate_component(Toggle_group_item, "ToggleGroup.Item").$$render(
                                  $$result,
                                  {
                                    value: "fail",
                                    class: "data-[state=on]:bg-red-500"
                                  },
                                  {},
                                  {
                                    default: () => {
                                      return `Fail`;
                                    }
                                  }
                                )} ${validate_component(Toggle_group_item, "ToggleGroup.Item").$$render(
                                  $$result,
                                  {
                                    value: "na",
                                    class: "data-[state=on]:bg-gray-500"
                                  },
                                  {},
                                  {
                                    default: () => {
                                      return `N/A`;
                                    }
                                  }
                                )} `;
                              }
                            }
                          )} `;
                        }
                      })} `;
                    }
                  })}`;
                })}`;
              }
            })}`;
          }
        })} ${validate_component(Table, "Table.Root").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Table_header, "Table.Header").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Table_head, "Table.Head").$$render($$result, { class: "w-[100px]" }, {}, {
                      default: () => {
                        return `Brakes`;
                      }
                    })}`;
                  }
                })}`;
              }
            })} ${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
              default: () => {
                return `${each(
                  [
                    {
                      service: "Front Brake Pads",
                      status: "fail"
                    }
                  ],
                  ({ service, status }) => {
                    return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                          default: () => {
                            return `${escape(service)}`;
                          }
                        })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Toggle_group, "ToggleGroup.Root").$$render($$result, { type: "single" }, {}, {
                              default: () => {
                                return `${validate_component(Toggle_group_item, "ToggleGroup.Item").$$render($$result, { value: "pass" }, {}, {
                                  default: () => {
                                    return `Pass`;
                                  }
                                })} ${validate_component(Toggle_group_item, "ToggleGroup.Item").$$render($$result, { value: "caution" }, {}, {
                                  default: () => {
                                    return `Caution`;
                                  }
                                })} ${validate_component(Toggle_group_item, "ToggleGroup.Item").$$render($$result, { value: "fail" }, {}, {
                                  default: () => {
                                    return `Fail`;
                                  }
                                })} ${validate_component(Toggle_group_item, "ToggleGroup.Item").$$render($$result, { value: "na" }, {}, {
                                  default: () => {
                                    return `N/A`;
                                  }
                                })} `;
                              }
                            })} `;
                          }
                        })} `;
                      }
                    })}`;
                  }
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Card, "Card.Root").$$render($$result, { class: "m-4" }, {}, {
          default: () => {
            return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
                  default: () => {
                    return `Schedule Lineup`;
                  }
                })}`;
              }
            })} ${validate_component(Card_title, "Card.CardTitle").$$render($$result, { class: "m-2" }, {}, {
              default: () => {
                return `Time left: 1 hour`;
              }
            })} ${validate_component(Progress, "Progress").$$render(
              $$result,
              {
                class: "m-2 w-4/3 self-center",
                value: 33
              },
              {},
              {}
            )} ${validate_component(Card, "Card.Root").$$render($$result, { class: "m-4" }, {}, {
              default: () => {
                return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
                      default: () => {
                        return `RO #333`;
                      }
                    })}`;
                  }
                })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "m-4 border-none shadow-none" }, {}, {
                  default: () => {
                    return `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                      default: () => {
                        return `<p data-svelte-h="svelte-tuw4t0">Oil change</p> <p data-svelte-h="svelte-1f3xq0s">MPI</p>`;
                      }
                    })}`;
                  }
                })}`;
              }
            })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "m-4" }, {}, {
              default: () => {
                return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
                      default: () => {
                        return `RO #333`;
                      }
                    })}`;
                  }
                })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "m-4 border-none shadow-none" }, {}, {
                  default: () => {
                    return `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                      default: () => {
                        return `<p data-svelte-h="svelte-tuw4t0">Oil change</p> <p data-svelte-h="svelte-1f3xq0s">MPI</p>`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}</div></main>`;
  } while (!$$settled);
  return $$rendered;
});
const Parts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Card, "Card.Root").$$render($$result, { class: "m-2" }, {}, {
    default: () => {
      return `${validate_component(Table, "Table.Root").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
            default: () => {
              return `${each(
                [
                  { label: "Make:", value: "Toyota" },
                  { label: "Model:", value: "Camry" },
                  { label: "Year:", value: "2022" },
                  { label: "Color:", value: "Black" },
                  { label: "Mileage:", value: "1000" },
                  { label: "Engine:", value: "V6" },
                  {
                    label: "Transmission:",
                    value: "Automatic"
                  },
                  { label: "Drive Train:", value: "FWD" },
                  { label: "Fuel Type:", value: "Gasoline" }
                ],
                ({ label, value }) => {
                  return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                        default: () => {
                          return `${escape(label)}`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(value)}`;
                        }
                      })} `;
                    }
                  })}`;
                }
              )}`;
            }
          })}`;
        }
      })}`;
    }
  })} <div class="grid grid-cols-2 m-2 gap-2">${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
            default: () => {
              return `Used Parts`;
            }
          })}`;
        }
      })} ${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "search",
          placeholder: "filter by name...",
          class: "max-w-xs self-center m-2"
        },
        {},
        {}
      )} ${validate_component(Table, "Table.Root").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `Part Name`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `Part Number`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `Quantity`;
                    }
                  })}`;
                }
              })} ${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `Oil Filter`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `123456`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Input, "Input").$$render($$result, { type: "number", value: "1" }, {}, {})}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                        default: () => {
                          return `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
            default: () => {
              return `Available Parts`;
            }
          })}`;
        }
      })} ${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "search",
          placeholder: "filter by name...",
          class: "max-w-xs self-center m-2"
        },
        {},
        {}
      )} ${validate_component(Table, "Table.Root").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `Part Name`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `Part Number`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `Location`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `Quantity Available`;
                    }
                  })}`;
                }
              })} ${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `Oil Filter`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `123456`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `Aisle 876`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `123`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                        default: () => {
                          return `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div></main>`;
});
var P = Object.defineProperty;
var F = (r, e, t) => e in r ? P(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t;
var h = (r, e, t) => (F(r, typeof e != "symbol" ? e + "" : e, t), t);
var I = class {
  constructor() {
    h(this, "listeners", /* @__PURE__ */ new Map());
  }
  /**
   * Subscribes a given listener.
   */
  subscribe(e, t) {
    this.listeners.has(e) || this.listeners.set(e, []), !this.listeners.get(e).includes(t) && this.listeners.get(e).push(t);
  }
  /**
   * Unsubscribes the given listener.
   */
  unsubscribe(e, t) {
    this.listeners.has(e) && this.listeners.get(e).includes(t) && (this.listeners.get(e).splice(this.listeners.get(e).indexOf(t), 1), this.listeners.get(e).length === 0 && this.listeners.delete(e));
  }
  /**
   * Emits an event to all active listeners.
   */
  emit(e, t) {
    this.listeners.has(e) && this.listeners.get(e).forEach((s) => s(t));
  }
};
var L = {
  broadcast: false
};
var S = {
  broadcast: false
};
var O = class {
  /**
   * Creates the cache item given the data and expiration at.
   */
  constructor({ data: e, expiresAt: t = null }) {
    h(this, "data");
    h(this, "expiresAt");
    this.data = e, this.expiresAt = t;
  }
  /**
   * Determines if the current cache item is still being resolved.
   * This returns true if data is a promise, or false if type `D`.
   */
  isResolving() {
    return this.data instanceof Promise;
  }
  /**
   * Determines if the given cache item has expired.
   */
  hasExpired() {
    return this.expiresAt === null || this.expiresAt < /* @__PURE__ */ new Date();
  }
  /**
   * Set the expiration time of the given cache item relative to now.
   */
  expiresIn(e) {
    return this.expiresAt = /* @__PURE__ */ new Date(), this.expiresAt.setMilliseconds(this.expiresAt.getMilliseconds() + e), this;
  }
};
var q = class {
  constructor() {
    h(this, "elements", /* @__PURE__ */ new Map());
    h(this, "event", new I());
  }
  /**
   * Resolves the promise and replaces the Promise to the resolved data.
   * It also broadcasts the value change if needed or deletes the key if
   * the value resolves to undefined or null.
   */
  resolve(e, t) {
    Promise.resolve(t.data).then((s) => {
      if (s == null)
        return this.remove(e);
      t.data = s, this.broadcast(e, s);
    });
  }
  /**
   * Gets an element from the cache.
   *
   * It is assumed the item always exist when
   * you get it. Use the has method to check
   * for the existence of it.
   */
  get(e) {
    return this.elements.get(e);
  }
  /**
   * Sets an element to the cache.
   */
  set(e, t) {
    this.elements.set(e, t), this.resolve(e, t);
  }
  /**
   * Removes an key-value pair from the cache.
   */
  remove(e, t) {
    const { broadcast: s } = { ...L, ...t };
    s && this.broadcast(e, void 0), this.elements.delete(e);
  }
  /**
   * Removes all the key-value pairs from the cache.
   */
  clear(e) {
    const { broadcast: t } = { ...S, ...e };
    if (t)
      for (const s of this.elements.keys())
        this.broadcast(s, void 0);
    this.elements.clear();
  }
  /**
   * Determines if the given key exists
   * in the cache.
   */
  has(e) {
    return this.elements.has(e);
  }
  /**
   * Subscribes the callback to the given key.
   */
  subscribe(e, t) {
    this.event.subscribe(e, t);
  }
  /**
   * Unsubscribes to the given key events.
   */
  unsubscribe(e, t) {
    this.event.unsubscribe(e, t);
  }
  /**
   * Broadcasts a value change  on all subscribed instances.
   */
  broadcast(e, t) {
    this.event.emit(e, t);
  }
};
var x = {
  cache: new q(),
  errors: new I(),
  fetcher: async (r) => {
    const e = await fetch(r);
    if (!e.ok)
      throw Error("Not a 2XX response.");
    return e.json();
  },
  fallbackData: void 0,
  loadInitialCache: true,
  revalidateOnStart: true,
  dedupingInterval: 2e3,
  revalidateOnFocus: true,
  focusThrottleInterval: 5e3,
  revalidateOnReconnect: true,
  reconnectWhen: (r, { enabled: e }) => e && typeof window < "u" ? (window.addEventListener("online", r), () => window.removeEventListener("online", r)) : () => {
  },
  focusWhen: (r, { enabled: e, throttleInterval: t }) => {
    if (e && typeof window < "u") {
      let s = null;
      const i = () => {
        const a = Date.now();
        (s === null || a - s > t) && (s = a, r());
      };
      return window.addEventListener("focus", i), () => window.removeEventListener("focus", i);
    }
    return () => {
    };
  },
  revalidateFunction: void 0
};
var E = {
  ...x,
  force: false
};
var T = {
  revalidate: true,
  revalidateOptions: { ...E },
  revalidateFunction: void 0
};
var X = {
  broadcast: false
};
var H = class {
  /**
   * Creates a new instance of SWR.
   */
  constructor(e) {
    h(this, "options");
    this.options = { ...x, ...e };
  }
  /**
   * Gets the cache of the SWR.
   */
  get cache() {
    return this.options.cache;
  }
  /**
   * Gets the cache of the SWR.
   */
  get errors() {
    return this.options.errors;
  }
  /**
   * Requests the data using the provided fetcher.
   */
  async requestData(e, t) {
    return await Promise.resolve(t(e)).catch((s) => {
      throw this.errors.emit(e, s), s;
    });
  }
  /**
   * Resolves the given to a SWRKey or undefined.
   */
  resolveKey(e) {
    if (typeof e == "function")
      try {
        return e();
      } catch (e2) {
        return;
      }
    return e;
  }
  /**
   * Clear the specified keys from the cache. If no keys
   * are specified, it clears all the cache keys.
   */
  clear(e, t) {
    const s = { ...X, ...t };
    if (e == null)
      return this.cache.clear(s);
    if (!Array.isArray(e))
      return this.cache.remove(e, s);
    for (const i of e)
      this.cache.remove(i, s);
  }
  /**
   * Revalidates the key and mutates the cache if needed.
   */
  async revalidate(e, t) {
    if (!e)
      throw new Error("[Revalidate] Key issue: ${key}");
    const { fetcher: s, dedupingInterval: i } = this.options, { force: a, fetcher: o, dedupingInterval: n } = {
      ...E,
      fetcher: s,
      dedupingInterval: i,
      ...t
    };
    if (a || !this.cache.has(e) || this.cache.has(e) && this.cache.get(e).hasExpired()) {
      const c2 = this.requestData(e, o), l = c2.catch(() => {
      });
      return this.cache.set(e, new O({ data: l }).expiresIn(n)), await c2;
    }
    return this.getWait(e);
  }
  /**
   * Mutates the data of a given key with a new value.
   * This is used to replace the cache contents of the
   * given key manually.
   */
  async mutate(e, t, s) {
    var _a;
    if (!e)
      throw new Error("[Mutate] Key issue: ${key}");
    const {
      revalidate: i,
      revalidateOptions: a,
      revalidateFunction: o
    } = {
      ...T,
      ...s
    };
    let n;
    if (typeof t == "function") {
      let c2;
      if (this.cache.has(e)) {
        const l = this.cache.get(e);
        l.isResolving() || (c2 = l.data);
      }
      n = t(c2);
    } else
      n = t;
    return this.cache.set(e, new O({ data: n })), i ? await ((_a = o == null ? void 0 : o(e, a)) != null ? _a : this.revalidate(e, a)) : n;
  }
  /**
   * Gets the data of the given key. Keep in mind
   * this data will be stale and revalidate in the background
   * unless specified otherwise.
   */
  subscribeData(e, t) {
    if (e) {
      const s = (i) => t(i);
      return this.cache.subscribe(e, s), () => this.cache.unsubscribe(e, s);
    }
    return () => {
    };
  }
  /**
   * Subscribes to errors on the given key.
   */
  subscribeErrors(e, t) {
    if (e) {
      const s = (i) => t(i);
      return this.errors.subscribe(e, s), () => this.errors.unsubscribe(e, s);
    }
    return () => {
    };
  }
  /**
   * Gets the current cached data of the given key.
   * This does not trigger any revalidation nor mutation
   * of the data.
   * - If the data has never been validated
   * (there is no cache) it will return undefined.
   * - If the item is pending to resolve (there is a request
   * pending to resolve) it will return undefined.
   */
  get(e) {
    if (e && this.cache.has(e)) {
      const t = this.cache.get(e);
      if (!t.isResolving())
        return t.data;
    }
  }
  /**
   * Gets an element from the cache. The difference
   * with the get is that this method returns a promise
   * that will resolve the the value. If there's no item
   * in the cache, it will wait for it before resolving.
   */
  getWait(e) {
    return new Promise((t, s) => {
      const i = this.subscribeData(e, (n) => {
        if (i(), n !== void 0)
          return t(n);
      }), a = this.subscribeErrors(e, (n) => {
        if (a(), n !== void 0)
          return s(n);
      }), o = this.get(e);
      if (o !== void 0)
        return t(o);
    });
  }
  /**
   * Use a SWR value given the key and
   * subscribe to future changes.
   */
  subscribe(e, t, s, i) {
    const {
      fetcher: a,
      fallbackData: o,
      loadInitialCache: n,
      revalidateOnStart: c2,
      dedupingInterval: l,
      revalidateOnFocus: A2,
      focusThrottleInterval: C,
      revalidateOnReconnect: R,
      reconnectWhen: W2,
      focusWhen: D2,
      revalidateFunction: d
    } = {
      // Current instance options
      // (includes default options)
      ...this.options,
      // Current call options.
      ...i
    }, K2 = (m) => {
      var _a;
      return (_a = d == null ? void 0 : d(this.resolveKey(e), m)) != null ? _a : this.revalidate(this.resolveKey(e), m);
    }, f = () => K2({ fetcher: a, dedupingInterval: l }), u = n ? this.get(this.resolveKey(e)) : o != null ? o : void 0, g = c2 ? f() : Promise.resolve(void 0), M = u ? Promise.resolve(u) : g;
    u && (t == null || t(u));
    const v2 = t ? this.subscribeData(this.resolveKey(e), t) : void 0, b = s ? this.subscribeErrors(this.resolveKey(e), s) : void 0, p2 = D2(f, {
      throttleInterval: C,
      enabled: A2
    }), w2 = W2(f, {
      enabled: R
    });
    return { unsubscribe: () => {
      v2 == null || v2(), b == null || b(), p2 == null || p2(), w2 == null || w2();
    }, dataPromise: M, revalidatePromise: g };
  }
};
function p() {
}
function D(t) {
  return t();
}
function q2(t) {
  t.forEach(D);
}
function x2(t) {
  return typeof t == "function";
}
function K(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function z(t, ...e) {
  if (t == null) {
    for (const r of e)
      r(void 0);
    return p;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
var v = [];
function A(t, e) {
  return {
    subscribe: y(t, e).subscribe
  };
}
function y(t, e = p) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (K(t, u) && (t = u, n)) {
      const f = !v.length;
      for (const s of r)
        s[1](), v.push(s, t);
      if (f) {
        for (let s = 0; s < v.length; s += 2)
          v[s][0](v[s + 1]);
        v.length = 0;
      }
    }
  }
  function a(u) {
    i(u(t));
  }
  function d(u, f = p) {
    const s = [u, f];
    return r.add(s), r.size === 1 && (n = e(i, a) || p), u(t), () => {
      r.delete(s), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: d };
}
function S2(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return A(n, (d, u) => {
    let f = false;
    const s = [];
    let h2 = 0, o = p;
    const l = () => {
      if (h2)
        return;
      o();
      const b = e(r ? s[0] : s, d, u);
      a ? d(b) : o = x2(b) ? b : p;
    }, g = i.map(
      (b, m) => z(
        b,
        (R) => {
          s[m] = R, h2 &= ~(1 << m), f && l();
        },
        () => {
          h2 |= 1 << m;
        }
      )
    );
    return f = true, l(), function() {
      q2(g), o(), f = false;
    };
  });
}
var O2 = class extends H {
  /**
   * Svelte specific use of SWR.
   */
  useSWR(e, n) {
    const i = y(void 0, () => () => void 0), a = y(void 0, () => () => void 0);
    onDestroy(() => void 0);
    const d = (o, l) => this.mutate(this.resolveKey(e), o, {
      revalidateOptions: n,
      ...l
    }), u = (o) => this.revalidate(this.resolveKey(e), { ...n, ...o }), f = (o) => this.clear(this.resolveKey(e), o), s = S2([i, a], ([o, l]) => o === void 0 && l === void 0), h2 = S2([i, a], ([o, l]) => o !== void 0 && l === void 0);
    return { data: i, error: a, mutate: d, revalidate: u, clear: f, isLoading: s, isValid: h2 };
  }
};
var W = (t) => new O2(t);
var c = W();
var F2 = (t, e) => c.useSWR(t, e);
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
var streamPartsByCode = {
  [textStreamPart.code]: textStreamPart,
  [functionCallStreamPart.code]: functionCallStreamPart,
  [dataStreamPart.code]: dataStreamPart,
  [errorStreamPart.code]: errorStreamPart,
  [assistantMessageStreamPart.code]: assistantMessageStreamPart,
  [assistantControlDataStreamPart.code]: assistantControlDataStreamPart,
  [dataMessageStreamPart.code]: dataMessageStreamPart,
  [toolCallStreamPart.code]: toolCallStreamPart,
  [messageAnnotationsStreamPart.code]: messageAnnotationsStreamPart
};
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
var validCodes = streamParts.map((part) => part.code);
var parseStreamPart = (line) => {
  const firstSeparatorIndex = line.indexOf(":");
  if (firstSeparatorIndex === -1) {
    throw new Error("Failed to parse stream string. No separator found.");
  }
  const prefix = line.slice(0, firstSeparatorIndex);
  if (!validCodes.includes(prefix)) {
    throw new Error(`Failed to parse stream string. Invalid code ${prefix}.`);
  }
  const code = prefix;
  const textValue = line.slice(firstSeparatorIndex + 1);
  const jsonValue = JSON.parse(textValue);
  return streamPartsByCode[code].parse(jsonValue);
};
var NEWLINE = "\n".charCodeAt(0);
function concatChunks(chunks, totalLength) {
  const concatenatedChunks = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    concatenatedChunks.set(chunk, offset);
    offset += chunk.length;
  }
  chunks.length = 0;
  return concatenatedChunks;
}
async function* readDataStream(reader, {
  isAborted
} = {}) {
  const decoder = new TextDecoder();
  const chunks = [];
  let totalLength = 0;
  while (true) {
    const { value } = await reader.read();
    if (value) {
      chunks.push(value);
      totalLength += value.length;
      if (value[value.length - 1] !== NEWLINE) {
        continue;
      }
    }
    if (chunks.length === 0) {
      break;
    }
    const concatenatedChunks = concatChunks(chunks, totalLength);
    totalLength = 0;
    const streamParts2 = decoder.decode(concatenatedChunks, { stream: true }).split("\n").filter((line) => line !== "").map(parseStreamPart);
    for (const streamPart of streamParts2) {
      yield streamPart;
    }
    if (isAborted == null ? void 0 : isAborted()) {
      reader.cancel();
      break;
    }
  }
}
var generateId = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
);
function assignAnnotationsToMessage(message, annotations) {
  if (!message || !annotations || !annotations.length)
    return message;
  return { ...message, annotations: [...annotations] };
}
async function parseComplexResponse({
  reader,
  abortControllerRef,
  update,
  onFinish,
  generateId: generateId2 = generateId,
  getCurrentDate = () => /* @__PURE__ */ new Date()
}) {
  const createdAt = getCurrentDate();
  const prefixMap = {
    data: []
  };
  let message_annotations = void 0;
  for await (const { type, value } of readDataStream(reader, {
    isAborted: () => (abortControllerRef == null ? void 0 : abortControllerRef.current) === null
  })) {
    if (type === "text") {
      if (prefixMap["text"]) {
        prefixMap["text"] = {
          ...prefixMap["text"],
          content: (prefixMap["text"].content || "") + value
        };
      } else {
        prefixMap["text"] = {
          id: generateId2(),
          role: "assistant",
          content: value,
          createdAt
        };
      }
    }
    let functionCallMessage = null;
    if (type === "function_call") {
      prefixMap["function_call"] = {
        id: generateId2(),
        role: "assistant",
        content: "",
        function_call: value.function_call,
        name: value.function_call.name,
        createdAt
      };
      functionCallMessage = prefixMap["function_call"];
    }
    let toolCallMessage = null;
    if (type === "tool_calls") {
      prefixMap["tool_calls"] = {
        id: generateId2(),
        role: "assistant",
        content: "",
        tool_calls: value.tool_calls,
        createdAt
      };
      toolCallMessage = prefixMap["tool_calls"];
    }
    if (type === "data") {
      prefixMap["data"].push(...value);
    }
    let responseMessage = prefixMap["text"];
    if (type === "message_annotations") {
      if (!message_annotations) {
        message_annotations = [...value];
      } else {
        message_annotations.push(...value);
      }
      functionCallMessage = assignAnnotationsToMessage(
        prefixMap["function_call"],
        message_annotations
      );
      toolCallMessage = assignAnnotationsToMessage(
        prefixMap["tool_calls"],
        message_annotations
      );
      responseMessage = assignAnnotationsToMessage(
        prefixMap["text"],
        message_annotations
      );
    }
    if (message_annotations == null ? void 0 : message_annotations.length) {
      const messagePrefixKeys = [
        "text",
        "function_call",
        "tool_calls"
      ];
      messagePrefixKeys.forEach((key) => {
        if (prefixMap[key]) {
          prefixMap[key].annotations = [...message_annotations];
        }
      });
    }
    const merged = [functionCallMessage, toolCallMessage, responseMessage].filter(Boolean).map((message) => ({
      ...assignAnnotationsToMessage(message, message_annotations)
    }));
    update(merged, [...prefixMap["data"]]);
  }
  onFinish == null ? void 0 : onFinish(prefixMap);
  return {
    messages: [
      prefixMap.text,
      prefixMap.function_call,
      prefixMap.tool_calls
    ].filter(Boolean),
    data: prefixMap.data
  };
}
async function callChatApi({
  api,
  messages,
  body,
  credentials,
  headers,
  abortController,
  restoreMessagesOnFailure,
  onResponse,
  onUpdate,
  onFinish,
  generateId: generateId2
}) {
  var _a;
  const response = await fetch(api, {
    method: "POST",
    body: JSON.stringify({
      messages,
      ...body
    }),
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    signal: (_a = abortController == null ? void 0 : abortController()) == null ? void 0 : _a.signal,
    credentials
  }).catch((err) => {
    restoreMessagesOnFailure();
    throw err;
  });
  if (onResponse) {
    try {
      await onResponse(response);
    } catch (err) {
      throw err;
    }
  }
  if (!response.ok) {
    restoreMessagesOnFailure();
    throw new Error(
      await response.text() || "Failed to fetch the chat response."
    );
  }
  if (!response.body) {
    throw new Error("The response body is empty.");
  }
  const reader = response.body.getReader();
  return await parseComplexResponse({
    reader,
    abortControllerRef: abortController != null ? { current: abortController() } : void 0,
    update: onUpdate,
    onFinish(prefixMap) {
      if (onFinish && prefixMap.text != null) {
        onFinish(prefixMap.text);
      }
    },
    generateId: generateId2
  });
}
async function processChatStream({
  getStreamedResponse: getStreamedResponse2,
  experimental_onFunctionCall,
  experimental_onToolCall,
  updateChatRequest,
  getCurrentMessages
}) {
  while (true) {
    const messagesAndDataOrJustMessage = await getStreamedResponse2();
    if ("messages" in messagesAndDataOrJustMessage) {
      let hasFollowingResponse = false;
      for (const message of messagesAndDataOrJustMessage.messages) {
        if ((message.function_call === void 0 || typeof message.function_call === "string") && (message.tool_calls === void 0 || typeof message.tool_calls === "string")) {
          continue;
        }
        hasFollowingResponse = true;
        if (experimental_onFunctionCall) {
          const functionCall = message.function_call;
          if (typeof functionCall !== "object") {
            console.warn(
              "experimental_onFunctionCall should not be defined when using tools"
            );
            continue;
          }
          const functionCallResponse = await experimental_onFunctionCall(
            getCurrentMessages(),
            functionCall
          );
          if (functionCallResponse === void 0) {
            hasFollowingResponse = false;
            break;
          }
          updateChatRequest(functionCallResponse);
        }
        if (experimental_onToolCall) {
          const toolCalls = message.tool_calls;
          if (!Array.isArray(toolCalls) || toolCalls.some((toolCall) => typeof toolCall !== "object")) {
            console.warn(
              "experimental_onToolCall should not be defined when using tools"
            );
            continue;
          }
          const toolCallResponse = await experimental_onToolCall(getCurrentMessages(), toolCalls);
          if (toolCallResponse === void 0) {
            hasFollowingResponse = false;
            break;
          }
          updateChatRequest(toolCallResponse);
        }
      }
      if (!hasFollowingResponse) {
        break;
      }
    } else {
      let fixFunctionCallArguments2 = function(response) {
        for (const message of response.messages) {
          if (message.tool_calls !== void 0) {
            for (const toolCall of message.tool_calls) {
              if (typeof toolCall === "object") {
                if (toolCall.function.arguments && typeof toolCall.function.arguments !== "string") {
                  toolCall.function.arguments = JSON.stringify(
                    toolCall.function.arguments
                  );
                }
              }
            }
          }
          if (message.function_call !== void 0) {
            if (typeof message.function_call === "object") {
              if (message.function_call.arguments && typeof message.function_call.arguments !== "string") {
                message.function_call.arguments = JSON.stringify(
                  message.function_call.arguments
                );
              }
            }
          }
        }
      };
      const streamedResponseMessage = messagesAndDataOrJustMessage;
      if ((streamedResponseMessage.function_call === void 0 || typeof streamedResponseMessage.function_call === "string") && (streamedResponseMessage.tool_calls === void 0 || typeof streamedResponseMessage.tool_calls === "string")) {
        break;
      }
      if (experimental_onFunctionCall) {
        const functionCall = streamedResponseMessage.function_call;
        if (!(typeof functionCall === "object")) {
          console.warn(
            "experimental_onFunctionCall should not be defined when using tools"
          );
          continue;
        }
        const functionCallResponse = await experimental_onFunctionCall(getCurrentMessages(), functionCall);
        if (functionCallResponse === void 0)
          break;
        fixFunctionCallArguments2(functionCallResponse);
        updateChatRequest(functionCallResponse);
      }
      if (experimental_onToolCall) {
        const toolCalls = streamedResponseMessage.tool_calls;
        if (!(typeof toolCalls === "object")) {
          console.warn(
            "experimental_onToolCall should not be defined when using functions"
          );
          continue;
        }
        const toolCallResponse = await experimental_onToolCall(getCurrentMessages(), toolCalls);
        if (toolCallResponse === void 0)
          break;
        fixFunctionCallArguments2(toolCallResponse);
        updateChatRequest(toolCallResponse);
      }
    }
  }
}
var getStreamedResponse = async (api, chatRequest, mutate, mutateStreamData, existingData, extraMetadata, previousMessages, abortControllerRef, generateId2, onFinish, onResponse, sendExtraMessageFields) => {
  var _a, _b;
  mutate(chatRequest.messages);
  const constructedMessagesPayload = sendExtraMessageFields ? chatRequest.messages : chatRequest.messages.map(
    ({ role, content, name: name2, function_call, tool_calls, tool_call_id }) => ({
      role,
      content,
      tool_call_id,
      ...name2 !== void 0 && { name: name2 },
      ...function_call !== void 0 && {
        function_call
      },
      ...tool_calls !== void 0 && {
        tool_calls
      }
    })
  );
  return await callChatApi({
    api,
    messages: constructedMessagesPayload,
    body: {
      ...extraMetadata.body,
      ...(_a = chatRequest.options) == null ? void 0 : _a.body,
      ...chatRequest.functions !== void 0 && {
        functions: chatRequest.functions
      },
      ...chatRequest.function_call !== void 0 && {
        function_call: chatRequest.function_call
      },
      ...chatRequest.tools !== void 0 && {
        tools: chatRequest.tools
      },
      ...chatRequest.tool_choice !== void 0 && {
        tool_choice: chatRequest.tool_choice
      }
    },
    credentials: extraMetadata.credentials,
    headers: {
      ...extraMetadata.headers,
      ...(_b = chatRequest.options) == null ? void 0 : _b.headers
    },
    abortController: () => abortControllerRef,
    restoreMessagesOnFailure() {
      mutate(previousMessages);
    },
    onResponse,
    onUpdate(merged, data) {
      mutate([...chatRequest.messages, ...merged]);
      mutateStreamData([...existingData || [], ...data || []]);
    },
    onFinish,
    generateId: generateId2
  });
};
var uniqueId = 0;
var store = {};
function useChat({
  api = "/api/chat",
  id,
  initialMessages = [],
  initialInput = "",
  sendExtraMessageFields,
  experimental_onFunctionCall,
  experimental_onToolCall,
  onResponse,
  onFinish,
  onError,
  credentials,
  headers,
  body,
  generateId: generateId2 = generateId
} = {}) {
  const chatId = id || `chat-${uniqueId++}`;
  const key = `${api}|${chatId}`;
  const {
    data,
    mutate: originalMutate,
    isLoading: isSWRLoading
  } = F2(key, {
    fetcher: () => store[key] || initialMessages,
    fallbackData: initialMessages
  });
  const streamData = writable(void 0);
  const loading = writable(false);
  data.set(initialMessages);
  const mutate = (data2) => {
    store[key] = data2;
    return originalMutate(data2);
  };
  const messages = data;
  let abortController = null;
  const extraMetadata = {
    credentials,
    headers,
    body
  };
  const error = writable(void 0);
  async function triggerRequest(chatRequest) {
    try {
      error.set(void 0);
      loading.set(true);
      abortController = new AbortController();
      await processChatStream({
        getStreamedResponse: () => getStreamedResponse(
          api,
          chatRequest,
          mutate,
          (data2) => {
            streamData.set(data2);
          },
          get_store_value(streamData),
          extraMetadata,
          get_store_value(messages),
          abortController,
          generateId2,
          onFinish,
          onResponse,
          sendExtraMessageFields
        ),
        experimental_onFunctionCall,
        experimental_onToolCall,
        updateChatRequest: (chatRequestParam) => {
          chatRequest = chatRequestParam;
        },
        getCurrentMessages: () => get_store_value(messages)
      });
      abortController = null;
      return null;
    } catch (err) {
      if (err.name === "AbortError") {
        abortController = null;
        return null;
      }
      if (onError && err instanceof Error) {
        onError(err);
      }
      error.set(err);
    } finally {
      loading.set(false);
    }
  }
  const append = async (message, {
    options,
    functions,
    function_call,
    tools,
    tool_choice
  } = {}) => {
    if (!message.id) {
      message.id = generateId2();
    }
    const chatRequest = {
      messages: get_store_value(messages).concat(message),
      options,
      ...functions !== void 0 && { functions },
      ...function_call !== void 0 && { function_call },
      ...tools !== void 0 && { tools },
      ...tool_choice !== void 0 && { tool_choice }
    };
    return triggerRequest(chatRequest);
  };
  const reload = async ({
    options,
    functions,
    function_call,
    tools,
    tool_choice
  } = {}) => {
    const messagesSnapshot = get_store_value(messages);
    if (messagesSnapshot.length === 0)
      return null;
    const lastMessage = messagesSnapshot.at(-1);
    if ((lastMessage == null ? void 0 : lastMessage.role) === "assistant") {
      const chatRequest2 = {
        messages: messagesSnapshot.slice(0, -1),
        options,
        ...functions !== void 0 && { functions },
        ...function_call !== void 0 && { function_call },
        ...tools !== void 0 && { tools },
        ...tool_choice !== void 0 && { tool_choice }
      };
      return triggerRequest(chatRequest2);
    }
    const chatRequest = {
      messages: messagesSnapshot,
      options,
      ...functions !== void 0 && { functions },
      ...function_call !== void 0 && { function_call },
      ...tools !== void 0 && { tools },
      ...tool_choice !== void 0 && { tool_choice }
    };
    return triggerRequest(chatRequest);
  };
  const stop = () => {
    if (abortController) {
      abortController.abort();
      abortController = null;
    }
  };
  const setMessages = (messages2) => {
    mutate(messages2);
  };
  const input = writable(initialInput);
  const handleSubmit = (e, options = {}) => {
    e.preventDefault();
    const inputValue = get_store_value(input);
    if (!inputValue)
      return;
    append(
      {
        content: inputValue,
        role: "user",
        createdAt: /* @__PURE__ */ new Date()
      },
      options
    );
    input.set("");
  };
  const isLoading = derived(
    [isSWRLoading, loading],
    ([$isSWRLoading, $loading]) => {
      return $isSWRLoading || $loading;
    }
  );
  return {
    messages,
    error,
    append,
    reload,
    stop,
    setMessages,
    input,
    handleSubmit,
    isLoading,
    data: streamData
  };
}
const Assistant = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $messages, $$unsubscribe_messages;
  let $input, $$unsubscribe_input;
  const { input, handleSubmit, messages } = useChat();
  $$unsubscribe_input = subscribe(input, (value) => $input = value);
  $$unsubscribe_messages = subscribe(messages, (value) => $messages = value);
  $$unsubscribe_messages();
  $$unsubscribe_input();
  return `<main>${validate_component(Card, "Card.Root").$$render($$result, { class: "m-2" }, {}, {
    default: () => {
      return `${validate_component(Card, "Card.Root").$$render($$result, { class: "m-2 h-50" }, {}, {
        default: () => {
          return `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
            default: () => {
              return `<ul>${each($messages, (message) => {
                return `<li>${escape(message.role)}: ${escape(message.content)}</li>`;
              })}</ul>`;
            }
          })}`;
        }
      })} <form><input${add_attribute("value", $input, 0)}> ${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
        default: () => {
          return `Send`;
        }
      })}</form>`;
    }
  })}</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${validate_component(Root, "Tabs.Root").$$render($$result, { value: "repair", class: "w-screen" }, {}, {
    default: () => {
      return `${validate_component(Tabs_list, "Tabs.List").$$render($$result, { class: "m-2" }, {}, {
        default: () => {
          return `${validate_component(Tabs_trigger, "Tabs.Trigger").$$render($$result, { value: "repair" }, {}, {
            default: () => {
              return `Repair Order`;
            }
          })} ${validate_component(Tabs_trigger, "Tabs.Trigger").$$render($$result, { value: "customer" }, {}, {
            default: () => {
              return `Customer Info`;
            }
          })} ${validate_component(Tabs_trigger, "Tabs.Trigger").$$render($$result, { value: "parts" }, {}, {
            default: () => {
              return `Vehicle &amp; Parts Information`;
            }
          })} ${validate_component(Tabs_trigger, "Tabs.Trigger").$$render($$result, { value: "assistant" }, {}, {
            default: () => {
              return `Digital Assistant`;
            }
          })} ${validate_component(Tabs_trigger, "Tabs.Trigger").$$render($$result, { value: "resource" }, {}, {
            default: () => {
              return `Resources`;
            }
          })} ${validate_component(Tabs_trigger, "Tabs.Trigger").$$render($$result, { value: "alldata" }, {}, {
            default: () => {
              return `AllData`;
            }
          })} ${validate_component(Tabs_trigger, "Tabs.Trigger").$$render($$result, { value: "chat" }, {}, {
            default: () => {
              return `Chat`;
            }
          })}`;
        }
      })} ${validate_component(Tabs_content, "Tabs.Content").$$render($$result, { value: "parts" }, {}, {
        default: () => {
          return `${validate_component(Parts, "Parts").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Tabs_content, "Tabs.Content").$$render($$result, { value: "customer" }, {}, {
        default: () => {
          return `${validate_component(Customer, "Customer").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Tabs_content, "Tabs.Content").$$render($$result, { value: "assistant" }, {}, {
        default: () => {
          return `${validate_component(Assistant, "Assistant").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Tabs_content, "Tabs.Content").$$render($$result, { value: "repair" }, {}, {
        default: () => {
          return `${validate_component(Repair, "Repair").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Tabs_content, "Tabs.Content").$$render($$result, { value: "alldata" }, {}, {
        default: () => {
          return `
            hello`;
        }
      })} ${validate_component(Tabs_content, "Tabs.Content").$$render($$result, { value: "resource" }, {}, {
        default: () => {
          return `
            hello`;
        }
      })} ${validate_component(Tabs_content, "Tabs.Content").$$render($$result, { value: "chat" }, {}, {
        default: () => {
          return `testing`;
        }
      })}`;
    }
  })}</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C5uyebmw.js.map
