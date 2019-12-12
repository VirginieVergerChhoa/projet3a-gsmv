/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports, $, Popper) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */


  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.4.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype; // Public

    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$1 = 'button';
  var VERSION$1 = '4.4.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLES: '[data-toggle="buttons"]',
    DATA_TOGGLE: '[data-toggle="button"]',
    DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1),
    LOAD_DATA_API: "load" + EVENT_KEY$1 + DATA_API_KEY$1
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype; // Public

    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          } else if (input.type === 'checkbox') {
            if (this._element.tagName === 'LABEL' && input.checked === this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            }
          } else {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            triggerChangeEvent = false;
          }

          if (triggerChangeEvent) {
            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName$1.ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(Selector$1.INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(Event$1.LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(Selector$1.INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(ClassName$1.ACTIVE);
      } else {
        button.classList.remove(ClassName$1.ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(ClassName$1.ACTIVE);
      } else {
        _button.classList.remove(ClassName$1.ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$2 = 'carousel';
  var VERSION$2 = '4.4.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype; // Public

    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default, {}, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2({}, Default, {}, $(this).data());

        if (_typeof(config) === 'object') {
          _config = _objectSpread2({}, _config, {}, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread2({}, $(target).data(), {}, $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$3 = 'collapse';
  var VERSION$3 = '4.4.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype; // Public

    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$1, {}, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2({}, Default$1, {}, $this.data(), {}, _typeof(config) === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.4.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, this.constructor.Default, {}, $(this._element).data(), {}, config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2({}, popperConfig, {}, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$5 = 'modal';
  var VERSION$5 = '4.4.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDE_PREVENTED: "hidePrevented" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show',
    STATIC: 'modal-static'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$3, {}, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(Event$5.HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(ClassName$5.STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(ClassName$5.STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(ClassName$5.FADE);
      var modalBody = this._dialog ? this._dialog.querySelector(Selector$5.MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2({}, Default$3, {}, $(this).data(), {}, _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2({}, $(target).data(), {}, $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.4.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype; // Public

    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Selector$6.ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2({}, defaultBsConfig, {}, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2({}, this.constructor.Default, {}, dataAttributes, {}, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = _typeof(config) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$7 = 'popover';
  var VERSION$7 = '4.4.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype; // Overrides

    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.4.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype; // Public

    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$6, {}, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$9 = 'tab';
  var VERSION$9 = '4.4.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$a = 'toast';
  var VERSION$a = '4.4.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(Event$a.SHOW);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      Util.reflow(this._element);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      var hideEvent = $.Event(Event$a.HIDE);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$7, {}, $(this._element).data(), {}, _typeof(config) === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(ClassName$a.HIDE);

        $(_this3._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }

  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */


function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["default"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {});

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/guillaumeandre/Documents/projet3a-gsmv/src/js/main.js */"./src/js/main.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2xzL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9wb3BvdmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdGFiLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRQYXJlbnROb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0UmVmZXJlbmNlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzSUUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRPZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc09mZnNldENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFJvb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9maW5kQ29tbW9uT2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaW5jbHVkZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldEJvcmRlcnNTaXplLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0V2luZG93U2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNGaXhlZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRCb3VuZGFyaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRSZWZlcmVuY2VPZmZzZXRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T3V0ZXJTaXplcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0UG9wcGVyT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9maW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9ydW5Nb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tZXRob2RzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzTW9kaWZpZXJFbmFibGVkLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy9kZXN0cm95LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0V2luZG93LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0dXBFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21ldGhvZHMvZW5hYmxlRXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9yZW1vdmVFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21ldGhvZHMvZGlzYWJsZUV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNOdW1lcmljLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0U3R5bGVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9hcHBseVN0eWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Um91bmRlZE9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvY29tcHV0ZVN0eWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNNb2RpZmllclJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2Fycm93LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tZXRob2RzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9jbG9ja3dpc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvZmxpcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9rZWVwVG9nZXRoZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvb2Zmc2V0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9zaGlmdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9oaWRlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2lubmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiVFJBTlNJVElPTl9FTkQiLCJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJiaW5kVHlwZSIsImRlbGVnYXRlVHlwZSIsImhhbmRsZSIsIiQiLCJldmVudCIsImNhbGxlZCIsIlV0aWwiLCJzZXRUaW1lb3V0IiwiZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJkb2N1bWVudCIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJzZWxlY3RvciIsImVsZW1lbnQiLCJocmVmQXR0ciIsImdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJwYXJzZUZsb2F0IiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJyZWZsb3ciLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsInN1cHBvcnRzVHJhbnNpdGlvbkVuZCIsIkJvb2xlYW4iLCJpc0VsZW1lbnQiLCJvYmoiLCJ0eXBlQ2hlY2tDb25maWciLCJPYmplY3QiLCJleHBlY3RlZFR5cGVzIiwiY29uZmlnVHlwZXMiLCJ2YWx1ZSIsImNvbmZpZyIsInZhbHVlVHlwZSIsInRvVHlwZSIsImNvbXBvbmVudE5hbWUiLCJmaW5kU2hhZG93Um9vdCIsInJvb3QiLCJqUXVlcnlEZXRlY3Rpb24iLCJ2ZXJzaW9uIiwibWluTWFqb3IiLCJsdE1ham9yIiwibWluTWlub3IiLCJtaW5QYXRjaCIsIm1heE1ham9yIiwic2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQiLCJOQU1FIiwiVkVSU0lPTiIsIkRBVEFfS0VZIiwiRVZFTlRfS0VZIiwiREFUQV9BUElfS0VZIiwiSlFVRVJZX05PX0NPTkZMSUNUIiwiU2VsZWN0b3IiLCJESVNNSVNTIiwiRXZlbnQiLCJDTE9TRSIsIkNMT1NFRCIsIkNMSUNLX0RBVEFfQVBJIiwiQ2xhc3NOYW1lIiwiQUxFUlQiLCJGQURFIiwiU0hPVyIsIkFsZXJ0IiwiY2xvc2UiLCJyb290RWxlbWVudCIsImN1c3RvbUV2ZW50IiwiZGlzcG9zZSIsIl9nZXRSb290RWxlbWVudCIsInBhcmVudCIsIl90cmlnZ2VyQ2xvc2VFdmVudCIsImNsb3NlRXZlbnQiLCJfcmVtb3ZlRWxlbWVudCIsIl9kZXN0cm95RWxlbWVudCIsIl9qUXVlcnlJbnRlcmZhY2UiLCIkZWxlbWVudCIsImRhdGEiLCJfaGFuZGxlRGlzbWlzcyIsImFsZXJ0SW5zdGFuY2UiLCJBQ1RJVkUiLCJCVVRUT04iLCJGT0NVUyIsIkRBVEFfVE9HR0xFX0NBUlJPVCIsIkRBVEFfVE9HR0xFUyIsIkRBVEFfVE9HR0xFIiwiREFUQV9UT0dHTEVTX0JVVFRPTlMiLCJJTlBVVCIsIkZPQ1VTX0JMVVJfREFUQV9BUEkiLCJMT0FEX0RBVEFfQVBJIiwiQnV0dG9uIiwidG9nZ2xlIiwidHJpZ2dlckNoYW5nZUV2ZW50IiwiYWRkQXJpYVByZXNzZWQiLCJpbnB1dCIsImFjdGl2ZUVsZW1lbnQiLCJidXR0b24iLCJpbnB1dEJ0biIsImJ1dHRvbnMiLCJpIiwibGVuIiwiQVJST1dfTEVGVF9LRVlDT0RFIiwiQVJST1dfUklHSFRfS0VZQ09ERSIsIlRPVUNIRVZFTlRfQ09NUEFUX1dBSVQiLCJTV0lQRV9USFJFU0hPTEQiLCJEZWZhdWx0IiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInNsaWRlIiwicGF1c2UiLCJ3cmFwIiwidG91Y2giLCJEZWZhdWx0VHlwZSIsIkRpcmVjdGlvbiIsIk5FWFQiLCJQUkVWIiwiTEVGVCIsIlJJR0hUIiwiU0xJREUiLCJTTElEIiwiS0VZRE9XTiIsIk1PVVNFRU5URVIiLCJNT1VTRUxFQVZFIiwiVE9VQ0hTVEFSVCIsIlRPVUNITU9WRSIsIlRPVUNIRU5EIiwiUE9JTlRFUkRPV04iLCJQT0lOVEVSVVAiLCJEUkFHX1NUQVJUIiwiQ0FST1VTRUwiLCJJVEVNIiwiUE9JTlRFUl9FVkVOVCIsIkFDVElWRV9JVEVNIiwiSVRFTV9JTUciLCJORVhUX1BSRVYiLCJJTkRJQ0FUT1JTIiwiREFUQV9TTElERSIsIkRBVEFfUklERSIsIlBvaW50ZXJUeXBlIiwiVE9VQ0giLCJQRU4iLCJDYXJvdXNlbCIsIm5hdmlnYXRvciIsIndpbmRvdyIsIm5leHQiLCJuZXh0V2hlblZpc2libGUiLCJwcmV2IiwiY2xlYXJJbnRlcnZhbCIsImN5Y2xlIiwic2V0SW50ZXJ2YWwiLCJ0byIsImFjdGl2ZUluZGV4IiwiaW5kZXgiLCJkaXJlY3Rpb24iLCJfZ2V0Q29uZmlnIiwiX2hhbmRsZVN3aXBlIiwiYWJzRGVsdGF4IiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMiLCJzdGFydCIsIm1vdmUiLCJlbmQiLCJjbGVhclRpbWVvdXQiLCJlIiwiX2tleWRvd24iLCJfZ2V0SXRlbUluZGV4IiwiX2dldEl0ZW1CeURpcmVjdGlvbiIsImlzTmV4dERpcmVjdGlvbiIsImlzUHJldkRpcmVjdGlvbiIsImxhc3RJdGVtSW5kZXgiLCJpc0dvaW5nVG9XcmFwIiwiZGVsdGEiLCJpdGVtSW5kZXgiLCJfdHJpZ2dlclNsaWRlRXZlbnQiLCJ0YXJnZXRJbmRleCIsImZyb21JbmRleCIsInNsaWRlRXZlbnQiLCJyZWxhdGVkVGFyZ2V0IiwiZnJvbSIsIl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50IiwiaW5kaWNhdG9ycyIsIm5leHRJbmRpY2F0b3IiLCJfc2xpZGUiLCJhY3RpdmVFbGVtZW50SW5kZXgiLCJuZXh0RWxlbWVudCIsIm5leHRFbGVtZW50SW5kZXgiLCJpc0N5Y2xpbmciLCJkaXJlY3Rpb25hbENsYXNzTmFtZSIsIm9yZGVyQ2xhc3NOYW1lIiwiZXZlbnREaXJlY3Rpb25OYW1lIiwic2xpZEV2ZW50IiwibmV4dEVsZW1lbnRJbnRlcnZhbCIsInBhcnNlSW50IiwiX2NvbmZpZyIsImFjdGlvbiIsIl9kYXRhQXBpQ2xpY2tIYW5kbGVyIiwidGFyZ2V0Iiwic2xpZGVJbmRleCIsImNhcm91c2VscyIsIiRjYXJvdXNlbCIsIlNIT1dOIiwiSElERSIsIkhJRERFTiIsIkNPTExBUFNFIiwiQ09MTEFQU0lORyIsIkNPTExBUFNFRCIsIkRpbWVuc2lvbiIsIldJRFRIIiwiSEVJR0hUIiwiQUNUSVZFUyIsIkNvbGxhcHNlIiwidG9nZ2xlTGlzdCIsImVsZW0iLCJmaWx0ZXJFbGVtZW50IiwiZm91bmRFbGVtIiwic2hvdyIsImFjdGl2ZXMiLCJhY3RpdmVzRGF0YSIsInN0YXJ0RXZlbnQiLCJkaW1lbnNpb24iLCJjb21wbGV0ZSIsImNhcGl0YWxpemVkRGltZW5zaW9uIiwic2Nyb2xsU2l6ZSIsImhpZGUiLCJ0cmlnZ2VyQXJyYXlMZW5ndGgiLCJ0cmlnZ2VyIiwiJGVsZW0iLCJzZXRUcmFuc2l0aW9uaW5nIiwiX2dldERpbWVuc2lvbiIsImhhc1dpZHRoIiwiX2dldFBhcmVudCIsImNoaWxkcmVuIiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsImlzT3BlbiIsInRyaWdnZXJBcnJheSIsIl9nZXRUYXJnZXRGcm9tRWxlbWVudCIsIiR0aGlzIiwiJHRyaWdnZXIiLCJzZWxlY3RvcnMiLCIkdGFyZ2V0IiwiRVNDQVBFX0tFWUNPREUiLCJTUEFDRV9LRVlDT0RFIiwiVEFCX0tFWUNPREUiLCJBUlJPV19VUF9LRVlDT0RFIiwiQVJST1dfRE9XTl9LRVlDT0RFIiwiUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIiwiUkVHRVhQX0tFWURPV04iLCJDTElDSyIsIktFWURPV05fREFUQV9BUEkiLCJLRVlVUF9EQVRBX0FQSSIsIkRJU0FCTEVEIiwiRFJPUFVQIiwiRFJPUFJJR0hUIiwiRFJPUExFRlQiLCJNRU5VUklHSFQiLCJNRU5VTEVGVCIsIlBPU0lUSU9OX1NUQVRJQyIsIkZPUk1fQ0hJTEQiLCJNRU5VIiwiTkFWQkFSX05BViIsIlZJU0lCTEVfSVRFTVMiLCJBdHRhY2htZW50TWFwIiwiVE9QIiwiVE9QRU5EIiwiQk9UVE9NIiwiQk9UVE9NRU5EIiwiUklHSFRFTkQiLCJMRUZURU5EIiwib2Zmc2V0IiwiZmxpcCIsImJvdW5kYXJ5IiwicmVmZXJlbmNlIiwiZGlzcGxheSIsInBvcHBlckNvbmZpZyIsIkRyb3Bkb3duIiwiaXNBY3RpdmUiLCJ1c2VQb3BwZXIiLCJfZWxlbWVudCIsInNob3dFdmVudCIsInJlZmVyZW5jZUVsZW1lbnQiLCJoaWRlRXZlbnQiLCJ1cGRhdGUiLCJfZ2V0TWVudUVsZW1lbnQiLCJfZ2V0UGxhY2VtZW50IiwiJHBhcmVudERyb3Bkb3duIiwicGxhY2VtZW50IiwiX2RldGVjdE5hdmJhciIsIl9nZXRPZmZzZXQiLCJfZ2V0UG9wcGVyQ29uZmlnIiwibW9kaWZpZXJzIiwiZW5hYmxlZCIsInByZXZlbnRPdmVyZmxvdyIsImJvdW5kYXJpZXNFbGVtZW50IiwiX2NsZWFyTWVudXMiLCJ0b2dnbGVzIiwiY29udGV4dCIsImRyb3Bkb3duTWVudSIsIl9nZXRQYXJlbnRGcm9tRWxlbWVudCIsIl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJpdGVtcyIsImJhY2tkcm9wIiwiZm9jdXMiLCJISURFX1BSRVZFTlRFRCIsIkZPQ1VTSU4iLCJSRVNJWkUiLCJDTElDS19ESVNNSVNTIiwiS0VZRE9XTl9ESVNNSVNTIiwiTU9VU0VVUF9ESVNNSVNTIiwiTU9VU0VET1dOX0RJU01JU1MiLCJTQ1JPTExBQkxFIiwiU0NST0xMQkFSX01FQVNVUkVSIiwiQkFDS0RST1AiLCJPUEVOIiwiU1RBVElDIiwiRElBTE9HIiwiTU9EQUxfQk9EWSIsIkRBVEFfRElTTUlTUyIsIkZJWEVEX0NPTlRFTlQiLCJTVElDS1lfQ09OVEVOVCIsIk1vZGFsIiwidHJhbnNpdGlvbiIsImhhbmRsZVVwZGF0ZSIsIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwiaGlkZUV2ZW50UHJldmVudGVkIiwibW9kYWxUcmFuc2l0aW9uRHVyYXRpb24iLCJfc2hvd0VsZW1lbnQiLCJtb2RhbEJvZHkiLCJOb2RlIiwic2hvd25FdmVudCIsInRyYW5zaXRpb25Db21wbGV0ZSIsIl9lbmZvcmNlRm9jdXMiLCJfc2V0RXNjYXBlRXZlbnQiLCJfc2V0UmVzaXplRXZlbnQiLCJfaGlkZU1vZGFsIiwiX3JlbW92ZUJhY2tkcm9wIiwiX3Nob3dCYWNrZHJvcCIsImFuaW1hdGUiLCJjYWxsYmFjayIsImJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uIiwiY2FsbGJhY2tSZW1vdmUiLCJfYWRqdXN0RGlhbG9nIiwiaXNNb2RhbE92ZXJmbG93aW5nIiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJfY2hlY2tTY3JvbGxiYXIiLCJyZWN0IiwiX3NldFNjcm9sbGJhciIsImZpeGVkQ29udGVudCIsInN0aWNreUNvbnRlbnQiLCJhY3R1YWxQYWRkaW5nIiwiY2FsY3VsYXRlZFBhZGRpbmciLCJhY3R1YWxNYXJnaW4iLCJjYWxjdWxhdGVkTWFyZ2luIiwiX3Jlc2V0U2Nyb2xsYmFyIiwicGFkZGluZyIsImVsZW1lbnRzIiwibWFyZ2luIiwiX2dldFNjcm9sbGJhcldpZHRoIiwic2Nyb2xsRGl2Iiwic2Nyb2xsYmFyV2lkdGgiLCJ1cmlBdHRycyIsIkFSSUFfQVRUUklCVVRFX1BBVFRFUk4iLCJEZWZhdWx0V2hpdGVsaXN0IiwiYSIsImFyZWEiLCJiIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwIiwicHJlIiwicyIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwiYXR0ck5hbWUiLCJhdHRyIiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJyZWdFeHAiLCJhdHRyUmVnZXgiLCJsIiwidW5zYWZlSHRtbCIsInNhbml0aXplRm4iLCJkb21QYXJzZXIiLCJjcmVhdGVkRG9jdW1lbnQiLCJ3aGl0ZWxpc3RLZXlzIiwiZWwiLCJlbE5hbWUiLCJhdHRyaWJ1dGVMaXN0Iiwid2hpdGVsaXN0ZWRBdHRyaWJ1dGVzIiwid2hpdGVMaXN0IiwiYWxsb3dlZEF0dHJpYnV0ZSIsIkNMQVNTX1BSRUZJWCIsIkJTQ0xTX1BSRUZJWF9SRUdFWCIsIkRJU0FMTE9XRURfQVRUUklCVVRFUyIsImFuaW1hdGlvbiIsInRlbXBsYXRlIiwidGl0bGUiLCJkZWxheSIsImh0bWwiLCJjb250YWluZXIiLCJmYWxsYmFja1BsYWNlbWVudCIsInNhbml0aXplIiwiQVVUTyIsIkhvdmVyU3RhdGUiLCJPVVQiLCJJTlNFUlRFRCIsIkZPQ1VTT1VUIiwiVE9PTFRJUCIsIlRPT0xUSVBfSU5ORVIiLCJBUlJPVyIsIlRyaWdnZXIiLCJIT1ZFUiIsIk1BTlVBTCIsIlRvb2x0aXAiLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsImRhdGFLZXkiLCJzaGFkb3dSb290IiwiaXNJblRoZURvbSIsInRpcCIsInRpcElkIiwiYXR0YWNobWVudCIsInByZXZIb3ZlclN0YXRlIiwiaXNXaXRoQ29udGVudCIsImFkZEF0dGFjaG1lbnRDbGFzcyIsImdldFRpcEVsZW1lbnQiLCJzZXRDb250ZW50Iiwic2V0RWxlbWVudENvbnRlbnQiLCJjb250ZW50Iiwic2FuaXRpemVIdG1sIiwiZ2V0VGl0bGUiLCJkZWZhdWx0QnNDb25maWciLCJiZWhhdmlvciIsImFycm93Iiwib25DcmVhdGUiLCJvblVwZGF0ZSIsIl9nZXRDb250YWluZXIiLCJfZ2V0QXR0YWNobWVudCIsIl9zZXRMaXN0ZW5lcnMiLCJ0cmlnZ2VycyIsImV2ZW50SW4iLCJldmVudE91dCIsIl9maXhUaXRsZSIsInRpdGxlVHlwZSIsIl9lbnRlciIsIl9sZWF2ZSIsIl9pc1dpdGhBY3RpdmVUcmlnZ2VyIiwiZGF0YUF0dHJpYnV0ZXMiLCJfZ2V0RGVsZWdhdGVDb25maWciLCJfY2xlYW5UaXBDbGFzcyIsIiR0aXAiLCJ0YWJDbGFzcyIsIl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UiLCJwb3BwZXJJbnN0YW5jZSIsInBvcHBlckRhdGEiLCJfZml4VHJhbnNpdGlvbiIsImluaXRDb25maWdBbmltYXRpb24iLCJUSVRMRSIsIkNPTlRFTlQiLCJQb3BvdmVyIiwiX2dldENvbnRlbnQiLCJtZXRob2QiLCJBQ1RJVkFURSIsIlNDUk9MTCIsIkRST1BET1dOX0lURU0iLCJEUk9QRE9XTl9NRU5VIiwiREFUQV9TUFkiLCJOQVZfTElTVF9HUk9VUCIsIk5BVl9MSU5LUyIsIk5BVl9JVEVNUyIsIkxJU1RfSVRFTVMiLCJEUk9QRE9XTiIsIkRST1BET1dOX0lURU1TIiwiRFJPUERPV05fVE9HR0xFIiwiT2Zmc2V0TWV0aG9kIiwiT0ZGU0VUIiwiUE9TSVRJT04iLCJTY3JvbGxTcHkiLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJ0YXJnZXRzIiwidGFyZ2V0U2VsZWN0b3IiLCJ0YXJnZXRCQ1IiLCJpdGVtIiwiaWQiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJfcHJvY2VzcyIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIm1heFNjcm9sbCIsIm9mZnNldExlbmd0aCIsImlzQWN0aXZlVGFyZ2V0IiwiX2FjdGl2YXRlIiwicXVlcmllcyIsIiRsaW5rIiwiX2NsZWFyIiwibm9kZSIsInNjcm9sbFNweXMiLCJzY3JvbGxTcHlzTGVuZ3RoIiwiJHNweSIsIkFDVElWRV9VTCIsIkRST1BET1dOX0FDVElWRV9DSElMRCIsIlRhYiIsImxpc3RFbGVtZW50IiwiaXRlbVNlbGVjdG9yIiwicHJldmlvdXMiLCJoaWRkZW5FdmVudCIsImFjdGl2ZUVsZW1lbnRzIiwiYWN0aXZlIiwiaXNUcmFuc2l0aW9uaW5nIiwiX3RyYW5zaXRpb25Db21wbGV0ZSIsImRyb3Bkb3duQ2hpbGQiLCJkcm9wZG93bkVsZW1lbnQiLCJkcm9wZG93blRvZ2dsZUxpc3QiLCJTSE9XSU5HIiwiYXV0b2hpZGUiLCJUb2FzdCIsIl9jbG9zZSIsInRpbWVvdXREdXJhdGlvbiIsImxvbmdlclRpbWVvdXRCcm93c2VycyIsImlzQnJvd3NlciIsInNjaGVkdWxlZCIsInN1cHBvcnRzTWljcm9UYXNrcyIsImdldFR5cGUiLCJmdW5jdGlvblRvQ2hlY2siLCJjc3MiLCJwcm9wZXJ0eSIsImdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiZ2V0U2Nyb2xsUGFyZW50IiwiZ2V0UGFyZW50Tm9kZSIsImlzSUUxMSIsImlzSUUxMCIsIm5vT2Zmc2V0UGFyZW50IiwiaXNJRSIsIm9mZnNldFBhcmVudCIsIm5vZGVOYW1lIiwiZ2V0T2Zmc2V0UGFyZW50IiwiZ2V0Um9vdCIsImVsZW1lbnQxIiwiZWxlbWVudDIiLCJvcmRlciIsInJhbmdlIiwiY29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJpc09mZnNldENvbnRhaW5lciIsImVsZW1lbnQxcm9vdCIsImZpbmRDb21tb25PZmZzZXRQYXJlbnQiLCJzaWRlIiwidXBwZXJTaWRlIiwic2Nyb2xsaW5nRWxlbWVudCIsInN1YnRyYWN0IiwiZ2V0U2Nyb2xsIiwic2Nyb2xsTGVmdCIsIm1vZGlmaWVyIiwic2lkZUEiLCJheGlzIiwic2lkZUIiLCJzdHlsZXMiLCJib2R5IiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRTaXplIiwib2Zmc2V0cyIsImhlaWdodCIsInJlc3VsdCIsInRvcCIsInNpemVzIiwiZ2V0V2luZG93U2l6ZXMiLCJ3aWR0aCIsImhvcml6U2Nyb2xsYmFyIiwidmVydFNjcm9sbGJhciIsImdldEJvcmRlcnNTaXplIiwiZ2V0Q2xpZW50UmVjdCIsImZpeGVkUG9zaXRpb24iLCJydW5Jc0lFIiwiaXNIVE1MIiwiY2hpbGRyZW5SZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsInNjcm9sbFBhcmVudCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImluY2x1ZGVTY3JvbGwiLCJleGNsdWRlU2Nyb2xsIiwicmVsYXRpdmVPZmZzZXQiLCJnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUiLCJwYXJlbnROb2RlIiwiaXNGaXhlZCIsImJvdW5kYXJpZXMiLCJsZWZ0IiwiZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUiLCJib3VuZGFyaWVzTm9kZSIsInBvcHBlciIsImlzUGFkZGluZ051bWJlciIsImdldEJvdW5kYXJpZXMiLCJyZWN0cyIsInJlZlJlY3QiLCJib3R0b20iLCJzb3J0ZWRBcmVhcyIsImdldEFyZWEiLCJmaWx0ZXJlZEFyZWFzIiwiY29tcHV0ZWRQbGFjZW1lbnQiLCJ2YXJpYXRpb24iLCJjb21tb25PZmZzZXRQYXJlbnQiLCJ4IiwieSIsImhhc2giLCJyaWdodCIsInBvcHBlclJlY3QiLCJnZXRPdXRlclNpemVzIiwicG9wcGVyT2Zmc2V0cyIsImlzSG9yaXoiLCJtYWluU2lkZSIsInNlY29uZGFyeVNpZGUiLCJtZWFzdXJlbWVudCIsInNlY29uZGFyeU1lYXN1cmVtZW50IiwicmVmZXJlbmNlT2Zmc2V0cyIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwiQXJyYXkiLCJhcnIiLCJjdXIiLCJtYXRjaCIsIm1vZGlmaWVyc1RvUnVuIiwiZW5kcyIsImZpbmRJbmRleCIsImZuIiwiaXNGdW5jdGlvbiIsImdldFJlZmVyZW5jZU9mZnNldHMiLCJjb21wdXRlQXV0b1BsYWNlbWVudCIsImdldFBvcHBlck9mZnNldHMiLCJydW5Nb2RpZmllcnMiLCJuYW1lIiwicHJlZml4ZXMiLCJ1cHBlclByb3AiLCJ0b0NoZWNrIiwiaXNNb2RpZmllckVuYWJsZWQiLCJnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUiLCJvd25lckRvY3VtZW50IiwiaXNCb2R5IiwicGFzc2l2ZSIsInN0YXRlIiwic2Nyb2xsRWxlbWVudCIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsIm4iLCJpc05hTiIsImlzRmluaXRlIiwidW5pdCIsImlzTnVtZXJpYyIsImF0dHJpYnV0ZXMiLCJvcHRpb25zIiwicG9zaXRpb24iLCJyb3VuZCIsImZsb29yIiwibm9Sb3VuZCIsInJlZmVyZW5jZVdpZHRoIiwicG9wcGVyV2lkdGgiLCJpc1ZlcnRpY2FsIiwiaXNWYXJpYXRpb24iLCJzYW1lV2lkdGhQYXJpdHkiLCJib3RoT2RkV2lkdGgiLCJob3Jpem9udGFsVG9JbnRlZ2VyIiwidmVydGljYWxUb0ludGVnZXIiLCJpc0ZpcmVmb3giLCJsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24iLCJncHVBY2NlbGVyYXRpb24iLCJvZmZzZXRQYXJlbnRSZWN0IiwiZ2V0Um91bmRlZE9mZnNldHMiLCJwcmVmaXhlZFByb3BlcnR5IiwiaW52ZXJ0VG9wIiwiaW52ZXJ0TGVmdCIsInJlcXVlc3RpbmciLCJpc1JlcXVpcmVkIiwicmVxdWVzdGVkIiwiaXNNb2RpZmllclJlcXVpcmVkIiwiYXJyb3dFbGVtZW50Iiwic2lkZUNhcGl0YWxpemVkIiwiYWx0U2lkZSIsIm9wU2lkZSIsImFycm93RWxlbWVudFNpemUiLCJjZW50ZXIiLCJwb3BwZXJNYXJnaW5TaWRlIiwicG9wcGVyQm9yZGVyU2lkZSIsInNpZGVWYWx1ZSIsInZhbGlkUGxhY2VtZW50cyIsInBsYWNlbWVudHMiLCJjb3VudGVyIiwiQkVIQVZJT1JTIiwicGxhY2VtZW50T3Bwb3NpdGUiLCJmbGlwT3JkZXIiLCJjbG9ja3dpc2UiLCJyZWZPZmZzZXRzIiwib3ZlcmxhcHNSZWYiLCJvdmVyZmxvd3NMZWZ0Iiwib3ZlcmZsb3dzUmlnaHQiLCJvdmVyZmxvd3NUb3AiLCJvdmVyZmxvd3NCb3R0b20iLCJvdmVyZmxvd3NCb3VuZGFyaWVzIiwiZmxpcHBlZFZhcmlhdGlvbkJ5UmVmIiwiZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudCIsImZsaXBwZWRWYXJpYXRpb24iLCJnZXRPcHBvc2l0ZVZhcmlhdGlvbiIsInNwbGl0Iiwic3RyIiwic2l6ZSIsInVzZUhlaWdodCIsImZyYWdtZW50cyIsImZyYWciLCJkaXZpZGVyIiwic3BsaXRSZWdleCIsIm9wcyIsIm1lcmdlV2l0aFByZXZpb3VzIiwidG9WYWx1ZSIsIm9wIiwiaW5kZXgyIiwiYmFzZVBsYWNlbWVudCIsInBhcnNlT2Zmc2V0IiwidHJhbnNmb3JtUHJvcCIsInBvcHBlclN0eWxlcyIsInRyYW5zZm9ybSIsImNoZWNrIiwic2hpZnR2YXJpYXRpb24iLCJzaGlmdE9mZnNldHMiLCJib3VuZCIsInN1YnRyYWN0TGVuZ3RoIiwic2hpZnQiLCJrZWVwVG9nZXRoZXIiLCJpbm5lciIsInVuZGVmaW5lZCIsIlBvcHBlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlYm91bmNlIiwibW9kaWZpZXJPcHRpb25zIiwiZXZlbnRzRW5hYmxlZCIsImRlc3Ryb3kiLCJlbmFibGVFdmVudExpc3RlbmVycyIsImRpc2FibGVFdmVudExpc3RlbmVycyIsIlV0aWxzIiwiUG9wcGVyVXRpbHMiLCJEZWZhdWx0cyIsImciLCJGdW5jdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTFGVVAsRUFQckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcUJBLE9Bb0haUSxLQXBIWVIsR0FvSEosQ0FBQyx5Q0FBRCxRQUFrRFMsV0FwSDlDVDtBQUFBQSxPQXNIWjVDLFVBdEhZNEMsR0FzSEM1QyxVQXRIRDRDO0FBQUFBLE9Bd0haVSxRQXhIWVYsR0F3SERVLFFBeEhDVjs7Ozs7Ozs7Ozs7Ozs7O0FDWnJCLElBQUlXLENBQUosQyxDQUVBOztBQUNBQSxDQUFDLEdBQUksWUFBVztBQUNmLFNBQU8sSUFBUDtBQUNBLENBRkcsRUFBSjs7QUFJQSxJQUFJO0FBQ0g7QUFDQUEsR0FBQyxHQUFHQSxDQUFDLElBQUksSUFBSUMsUUFBSixDQUFhLGFBQWIsR0FBVDtBQUNBLENBSEQsQ0FHRSxPQUFPL2xCLENBQVAsRUFBVTtBQUNYO0FBQ0EsTUFBSSxRQUFPcEIsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUF0QixFQUFnQ2tuQixDQUFDLEdBQUdsbkIsTUFBSjtBQUNoQyxDLENBRUQ7QUFDQTtBQUNBOzs7QUFFQW9uQixNQUFNLENBQUNDLE9BQVAsR0FBaUJILENBQWpCLEM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOXZCLDZDQUFDLENBQUNTLFFBQUQsQ0FBRCxDQUFZeXZCLEtBQVosQ0FBa0IsWUFBWSxDQUk3QixDQUpELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsd0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogdXRpbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHJpdmF0ZSBUcmFuc2l0aW9uRW5kIEhlbHBlcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnXG5jb25zdCBNQVhfVUlEID0gMTAwMDAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5cbi8vIFNob3V0b3V0IEFuZ3VzQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbmZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCkge1xuICByZXR1cm4ge1xuICAgIGJpbmRUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICBkZWxlZ2F0ZVR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgIGhhbmRsZShldmVudCkge1xuICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyh0aGlzKSkge1xuICAgICAgICByZXR1cm4gZXZlbnQuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmaW5lZFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uRW5kRW11bGF0b3IoZHVyYXRpb24pIHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG5cbiAgJCh0aGlzKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgIGNhbGxlZCA9IHRydWVcbiAgfSlcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzKVxuICAgIH1cbiAgfSwgZHVyYXRpb24pXG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKSB7XG4gICQuZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kRW11bGF0b3JcbiAgJC5ldmVudC5zcGVjaWFsW1V0aWwuVFJBTlNJVElPTl9FTkRdID0gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1YmxpYyBVdGlsIEFwaVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBVdGlsID0ge1xuXG4gIFRSQU5TSVRJT05fRU5EOiAnYnNUcmFuc2l0aW9uRW5kJyxcblxuICBnZXRVSUQocHJlZml4KSB7XG4gICAgZG8ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgIHByZWZpeCArPSB+fihNYXRoLnJhbmRvbSgpICogTUFYX1VJRCkgLy8gXCJ+flwiIGFjdHMgbGlrZSBhIGZhc3RlciBNYXRoLmZsb29yKCkgaGVyZVxuICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG4gICAgcmV0dXJuIHByZWZpeFxuICB9LFxuXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXG5cbiAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICAgIGNvbnN0IGhyZWZBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgc2VsZWN0b3IgPSBocmVmQXR0ciAmJiBocmVmQXR0ciAhPT0gJyMnID8gaHJlZkF0dHIudHJpbSgpIDogJydcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfSxcblxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gICAgbGV0IHRyYW5zaXRpb25EdXJhdGlvbiA9ICQoZWxlbWVudCkuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJylcbiAgICBsZXQgdHJhbnNpdGlvbkRlbGF5ID0gJChlbGVtZW50KS5jc3MoJ3RyYW5zaXRpb24tZGVsYXknKVxuXG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IHBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KVxuXG4gICAgLy8gUmV0dXJuIDAgaWYgZWxlbWVudCBvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGlzIG5vdCBmb3VuZFxuICAgIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXVxuICAgIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdXG5cbiAgICByZXR1cm4gKHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIHBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUlxuICB9LFxuXG4gIHJlZmxvdyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gIH0sXG5cbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQoZWxlbWVudCkge1xuICAgICQoZWxlbWVudCkudHJpZ2dlcihUUkFOU0lUSU9OX0VORClcbiAgfSxcblxuICAvLyBUT0RPOiBSZW1vdmUgaW4gdjVcbiAgc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkge1xuICAgIHJldHVybiBCb29sZWFuKFRSQU5TSVRJT05fRU5EKVxuICB9LFxuXG4gIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlXG4gIH0sXG5cbiAgdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGNvbmZpZ1R5cGVzKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZ1R5cGVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XVxuICAgICAgICBjb25zdCB2YWx1ZSAgICAgICAgID0gY29uZmlnW3Byb3BlcnR5XVxuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgICAgID0gdmFsdWUgJiYgVXRpbC5pc0VsZW1lbnQodmFsdWUpXG4gICAgICAgICAgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpXG5cbiAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGAke2NvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKX06IGAgK1xuICAgICAgICAgICAgYE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGAgK1xuICAgICAgICAgICAgYGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZmluZFNoYWRvd1Jvb3QoZWxlbWVudCkge1xuICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKClcbiAgICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cblxuICAgIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gICAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIFV0aWwuZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKVxuICB9LFxuXG4gIGpRdWVyeURldGVjdGlvbigpIHtcbiAgICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5LiBqUXVlcnkgbXVzdCBiZSBpbmNsdWRlZCBiZWZvcmUgQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0LicpXG4gICAgfVxuXG4gICAgY29uc3QgdmVyc2lvbiA9ICQuZm4uanF1ZXJ5LnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKVxuICAgIGNvbnN0IG1pbk1ham9yID0gMVxuICAgIGNvbnN0IGx0TWFqb3IgPSAyXG4gICAgY29uc3QgbWluTWlub3IgPSA5XG4gICAgY29uc3QgbWluUGF0Y2ggPSAxXG4gICAgY29uc3QgbWF4TWFqb3IgPSA0XG5cbiAgICBpZiAodmVyc2lvblswXSA8IGx0TWFqb3IgJiYgdmVyc2lvblsxXSA8IG1pbk1pbm9yIHx8IHZlcnNpb25bMF0gPT09IG1pbk1ham9yICYmIHZlcnNpb25bMV0gPT09IG1pbk1pbm9yICYmIHZlcnNpb25bMl0gPCBtaW5QYXRjaCB8fCB2ZXJzaW9uWzBdID49IG1heE1ham9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBhdCBsZWFzdCBqUXVlcnkgdjEuOS4xIGJ1dCBsZXNzIHRoYW4gdjQuMC4wJylcbiAgICB9XG4gIH1cbn1cblxuVXRpbC5qUXVlcnlEZXRlY3Rpb24oKVxuc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IGFsZXJ0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnYWxlcnQnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5hbGVydCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgRElTTUlTUyA6ICdbZGF0YS1kaXNtaXNzPVwiYWxlcnRcIl0nXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBDTE9TRSAgICAgICAgICA6IGBjbG9zZSR7RVZFTlRfS0VZfWAsXG4gIENMT1NFRCAgICAgICAgIDogYGNsb3NlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLX0RBVEFfQVBJIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIEFMRVJUIDogJ2FsZXJ0JyxcbiAgRkFERSAgOiAnZmFkZScsXG4gIFNIT1cgIDogJ3Nob3cnXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBBbGVydCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgY2xvc2UoZWxlbWVudCkge1xuICAgIGxldCByb290RWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgcm9vdEVsZW1lbnQgPSB0aGlzLl9nZXRSb290RWxlbWVudChlbGVtZW50KVxuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gdGhpcy5fdHJpZ2dlckNsb3NlRXZlbnQocm9vdEVsZW1lbnQpXG5cbiAgICBpZiAoY3VzdG9tRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3JlbW92ZUVsZW1lbnQocm9vdEVsZW1lbnQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRSb290RWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICBsZXQgcGFyZW50ICAgICA9IGZhbHNlXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHBhcmVudCA9ICQoZWxlbWVudCkuY2xvc2VzdChgLiR7Q2xhc3NOYW1lLkFMRVJUfWApWzBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudFxuICB9XG5cbiAgX3RyaWdnZXJDbG9zZUV2ZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBjbG9zZUV2ZW50ID0gJC5FdmVudChFdmVudC5DTE9TRSlcblxuICAgICQoZWxlbWVudCkudHJpZ2dlcihjbG9zZUV2ZW50KVxuICAgIHJldHVybiBjbG9zZUV2ZW50XG4gIH1cblxuICBfcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIGlmICghJChlbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICAkKGVsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIChldmVudCkgPT4gdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudCwgZXZlbnQpKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxuXG4gIF9kZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KVxuICAgICAgLmRldGFjaCgpXG4gICAgICAudHJpZ2dlcihFdmVudC5DTE9TRUQpXG4gICAgICAucmVtb3ZlKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSAgICAgICA9ICRlbGVtZW50LmRhdGEoREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEFsZXJ0KHRoaXMpXG4gICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcgPT09ICdjbG9zZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBfaGFuZGxlRGlzbWlzcyhhbGVydEluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cblxuICAgICAgYWxlcnRJbnN0YW5jZS5jbG9zZSh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKFxuICBFdmVudC5DTElDS19EQVRBX0FQSSxcbiAgU2VsZWN0b3IuRElTTUlTUyxcbiAgQWxlcnQuX2hhbmRsZURpc21pc3MobmV3IEFsZXJ0KCkpXG4pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gICAgICAgICAgICAgPSBBbGVydC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQWxlcnRcbiQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogYnV0dG9uLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnYnV0dG9uJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuYnV0dG9uJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgQUNUSVZFIDogJ2FjdGl2ZScsXG4gIEJVVFRPTiA6ICdidG4nLFxuICBGT0NVUyAgOiAnZm9jdXMnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBEQVRBX1RPR0dMRV9DQVJST1QgICA6ICdbZGF0YS10b2dnbGVePVwiYnV0dG9uXCJdJyxcbiAgREFUQV9UT0dHTEVTICAgICAgICAgOiAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXScsXG4gIERBVEFfVE9HR0xFICAgICAgICAgIDogJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvblwiXScsXG4gIERBVEFfVE9HR0xFU19CVVRUT05TIDogJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0gLmJ0bicsXG4gIElOUFVUICAgICAgICAgICAgICAgIDogJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSknLFxuICBBQ1RJVkUgICAgICAgICAgICAgICA6ICcuYWN0aXZlJyxcbiAgQlVUVE9OICAgICAgICAgICAgICAgOiAnLmJ0bidcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIENMSUNLX0RBVEFfQVBJICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICBGT0NVU19CTFVSX0RBVEFfQVBJIDogYGZvY3VzJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBgYmx1ciR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWAsXG4gIExPQURfREFUQV9BUEkgICAgICAgOiBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGxldCB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSB0cnVlXG4gICAgbGV0IGFkZEFyaWFQcmVzc2VkID0gdHJ1ZVxuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KFxuICAgICAgU2VsZWN0b3IuREFUQV9UT0dHTEVTXG4gICAgKVswXVxuXG4gICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JTlBVVClcblxuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgaWYgKGlucHV0LmNoZWNrZWQgJiZcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5BQ1RJVkUpKSB7XG4gICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSBmYWxzZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gcm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5BQ1RJVkUpXG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIGlmICh0aGlzLl9lbGVtZW50LnRhZ05hbWUgPT09ICdMQUJFTCcgJiYgaW5wdXQuY2hlY2tlZCA9PT0gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkFDVElWRSkpIHtcbiAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2VFdmVudCA9IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGlmIGl0J3Mgbm90IGEgcmFkaW8gYnV0dG9uIG9yIGNoZWNrYm94IGRvbid0IGFkZCBhIHBvaW50bGVzcy9pbnZhbGlkIGNoZWNrZWQgcHJvcGVydHkgdG8gdGhlIGlucHV0XG4gICAgICAgICAgdHJpZ2dlckNoYW5nZUV2ZW50ID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgICBpbnB1dC5jaGVja2VkID0gIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAgICAgJChpbnB1dCkudHJpZ2dlcignY2hhbmdlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LmZvY3VzKClcbiAgICAgICAgYWRkQXJpYVByZXNzZWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKHRoaXMuX2VsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSkge1xuICAgICAgaWYgKGFkZEFyaWFQcmVzc2VkKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLFxuICAgICAgICAgICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQUNUSVZFKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEJ1dHRvbih0aGlzKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpXG4gIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEVfQ0FSUk9ULCAoZXZlbnQpID0+IHtcbiAgICBsZXQgYnV0dG9uID0gZXZlbnQudGFyZ2V0XG5cbiAgICBpZiAoISQoYnV0dG9uKS5oYXNDbGFzcyhDbGFzc05hbWUuQlVUVE9OKSkge1xuICAgICAgYnV0dG9uID0gJChidXR0b24pLmNsb3Nlc3QoU2VsZWN0b3IuQlVUVE9OKVswXVxuICAgIH1cblxuICAgIGlmICghYnV0dG9uIHx8IGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKSAvLyB3b3JrIGFyb3VuZCBGaXJlZm94IGJ1ZyAjMTU0MDk5NVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbnB1dEJ0biA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLklOUFVUKVxuXG4gICAgICBpZiAoaW5wdXRCdG4gJiYgKGlucHV0QnRuLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCBpbnB1dEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8gd29yayBhcm91bmQgRmlyZWZveCBidWcgIzE1NDA5OTVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChidXR0b24pLCAndG9nZ2xlJylcbiAgICB9XG4gIH0pXG4gIC5vbihFdmVudC5GT0NVU19CTFVSX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRV9DQVJST1QsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFNlbGVjdG9yLkJVVFRPTilbMF1cbiAgICAkKGJ1dHRvbikudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkZPQ1VTLCAvXmZvY3VzKGluKT8kLy50ZXN0KGV2ZW50LnR5cGUpKVxuICB9KVxuXG4kKHdpbmRvdykub24oRXZlbnQuTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICAvLyBlbnN1cmUgY29ycmVjdCBhY3RpdmUgY2xhc3MgaXMgc2V0IHRvIG1hdGNoIHRoZSBjb250cm9scycgYWN0dWFsIHZhbHVlcy9zdGF0ZXNcblxuICAvLyBmaW5kIGFsbCBjaGVja2JveGVzL3JlYWRpbyBidXR0b25zIGluc2lkZSBkYXRhLXRvZ2dsZSBncm91cHNcbiAgbGV0IGJ1dHRvbnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9UT0dHTEVTX0JVVFRPTlMpKVxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYnV0dG9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGJ1dHRvbnNbaV1cbiAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLklOUFVUKVxuICAgIGlmIChpbnB1dC5jaGVja2VkIHx8IGlucHV0Lmhhc0F0dHJpYnV0ZSgnY2hlY2tlZCcpKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuQUNUSVZFKVxuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuQUNUSVZFKVxuICAgIH1cbiAgfVxuXG4gIC8vIGZpbmQgYWxsIGJ1dHRvbiB0b2dnbGVzXG4gIGJ1dHRvbnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9UT0dHTEUpKVxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYnV0dG9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGJ1dHRvbnNbaV1cbiAgICBpZiAoYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJykgPT09ICd0cnVlJykge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICB9XG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBCdXR0b24uX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEJ1dHRvblxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBCdXR0b24uX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogY2Fyb3VzZWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICA9ICdjYXJvdXNlbCdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgICAgID0gJ2JzLmNhcm91c2VsJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgICAgPSAkLmZuW05BTUVdXG5jb25zdCBBUlJPV19MRUZUX0tFWUNPREUgICAgID0gMzcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgbGVmdCBhcnJvdyBrZXlcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWUNPREUgICAgPSAzOSAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciByaWdodCBhcnJvdyBrZXlcbmNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDAgLy8gVGltZSBmb3IgbW91c2UgY29tcGF0IGV2ZW50cyB0byBmaXJlIGFmdGVyIHRvdWNoXG5jb25zdCBTV0lQRV9USFJFU0hPTEQgICAgICAgID0gNDBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaW50ZXJ2YWwgOiA1MDAwLFxuICBrZXlib2FyZCA6IHRydWUsXG4gIHNsaWRlICAgIDogZmFsc2UsXG4gIHBhdXNlICAgIDogJ2hvdmVyJyxcbiAgd3JhcCAgICAgOiB0cnVlLFxuICB0b3VjaCAgICA6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGludGVydmFsIDogJyhudW1iZXJ8Ym9vbGVhbiknLFxuICBrZXlib2FyZCA6ICdib29sZWFuJyxcbiAgc2xpZGUgICAgOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIHBhdXNlICAgIDogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICB3cmFwICAgICA6ICdib29sZWFuJyxcbiAgdG91Y2ggICAgOiAnYm9vbGVhbidcbn1cblxuY29uc3QgRGlyZWN0aW9uID0ge1xuICBORVhUICAgICA6ICduZXh0JyxcbiAgUFJFViAgICAgOiAncHJldicsXG4gIExFRlQgICAgIDogJ2xlZnQnLFxuICBSSUdIVCAgICA6ICdyaWdodCdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIFNMSURFICAgICAgICAgIDogYHNsaWRlJHtFVkVOVF9LRVl9YCxcbiAgU0xJRCAgICAgICAgICAgOiBgc2xpZCR7RVZFTlRfS0VZfWAsXG4gIEtFWURPV04gICAgICAgIDogYGtleWRvd24ke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSICAgICA6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRSAgICAgOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWAsXG4gIFRPVUNIU1RBUlQgICAgIDogYHRvdWNoc3RhcnQke0VWRU5UX0tFWX1gLFxuICBUT1VDSE1PVkUgICAgICA6IGB0b3VjaG1vdmUke0VWRU5UX0tFWX1gLFxuICBUT1VDSEVORCAgICAgICA6IGB0b3VjaGVuZCR7RVZFTlRfS0VZfWAsXG4gIFBPSU5URVJET1dOICAgIDogYHBvaW50ZXJkb3duJHtFVkVOVF9LRVl9YCxcbiAgUE9JTlRFUlVQICAgICAgOiBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YCxcbiAgRFJBR19TVEFSVCAgICAgOiBgZHJhZ3N0YXJ0JHtFVkVOVF9LRVl9YCxcbiAgTE9BRF9EQVRBX0FQSSAgOiBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWAsXG4gIENMSUNLX0RBVEFfQVBJIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIENBUk9VU0VMICAgICAgOiAnY2Fyb3VzZWwnLFxuICBBQ1RJVkUgICAgICAgIDogJ2FjdGl2ZScsXG4gIFNMSURFICAgICAgICAgOiAnc2xpZGUnLFxuICBSSUdIVCAgICAgICAgIDogJ2Nhcm91c2VsLWl0ZW0tcmlnaHQnLFxuICBMRUZUICAgICAgICAgIDogJ2Nhcm91c2VsLWl0ZW0tbGVmdCcsXG4gIE5FWFQgICAgICAgICAgOiAnY2Fyb3VzZWwtaXRlbS1uZXh0JyxcbiAgUFJFViAgICAgICAgICA6ICdjYXJvdXNlbC1pdGVtLXByZXYnLFxuICBJVEVNICAgICAgICAgIDogJ2Nhcm91c2VsLWl0ZW0nLFxuICBQT0lOVEVSX0VWRU5UIDogJ3BvaW50ZXItZXZlbnQnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBBQ1RJVkUgICAgICA6ICcuYWN0aXZlJyxcbiAgQUNUSVZFX0lURU0gOiAnLmFjdGl2ZS5jYXJvdXNlbC1pdGVtJyxcbiAgSVRFTSAgICAgICAgOiAnLmNhcm91c2VsLWl0ZW0nLFxuICBJVEVNX0lNRyAgICA6ICcuY2Fyb3VzZWwtaXRlbSBpbWcnLFxuICBORVhUX1BSRVYgICA6ICcuY2Fyb3VzZWwtaXRlbS1uZXh0LCAuY2Fyb3VzZWwtaXRlbS1wcmV2JyxcbiAgSU5ESUNBVE9SUyAgOiAnLmNhcm91c2VsLWluZGljYXRvcnMnLFxuICBEQVRBX1NMSURFICA6ICdbZGF0YS1zbGlkZV0sIFtkYXRhLXNsaWRlLXRvXScsXG4gIERBVEFfUklERSAgIDogJ1tkYXRhLXJpZGU9XCJjYXJvdXNlbFwiXSdcbn1cblxuY29uc3QgUG9pbnRlclR5cGUgPSB7XG4gIFRPVUNIIDogJ3RvdWNoJyxcbiAgUEVOICAgOiAncGVuJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmNsYXNzIENhcm91c2VsIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5faXRlbXMgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pbnRlcnZhbCAgICAgID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5faXNQYXVzZWQgICAgICA9IGZhbHNlXG4gICAgdGhpcy5faXNTbGlkaW5nICAgICA9IGZhbHNlXG4gICAgdGhpcy50b3VjaFRpbWVvdXQgICA9IG51bGxcbiAgICB0aGlzLnRvdWNoU3RhcnRYICAgID0gMFxuICAgIHRoaXMudG91Y2hEZWx0YVggICAgPSAwXG5cbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSU5ESUNBVE9SUylcbiAgICB0aGlzLl90b3VjaFN1cHBvcnRlZCAgICA9ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG4gICAgdGhpcy5fcG9pbnRlckV2ZW50ICAgICAgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQgfHwgd2luZG93Lk1TUG9pbnRlckV2ZW50KVxuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBuZXh0KCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9zbGlkZShEaXJlY3Rpb24uTkVYVClcbiAgICB9XG4gIH1cblxuICBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJlxuICAgICAgKCQodGhpcy5fZWxlbWVudCkuaXMoJzp2aXNpYmxlJykgJiYgJCh0aGlzLl9lbGVtZW50KS5jc3MoJ3Zpc2liaWxpdHknKSAhPT0gJ2hpZGRlbicpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NsaWRlKERpcmVjdGlvbi5QUkVWKVxuICAgIH1cbiAgfVxuXG4gIHBhdXNlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5ORVhUX1BSRVYpKSB7XG4gICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgICB0aGlzLmN5Y2xlKHRydWUpXG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgfVxuXG4gIGN5Y2xlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuaW50ZXJ2YWwgJiYgIXRoaXMuX2lzUGF1c2VkKSB7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID8gdGhpcy5uZXh0V2hlblZpc2libGUgOiB0aGlzLm5leHQpLmJpbmQodGhpcyksXG4gICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHRvKGluZGV4KSB7XG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5BQ1RJVkVfSVRFTSlcblxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2FjdGl2ZUVsZW1lbnQpXG5cbiAgICBpZiAoaW5kZXggPiB0aGlzLl9pdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoRXZlbnQuU0xJRCwgKCkgPT4gdGhpcy50byhpbmRleCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gaW5kZXggPiBhY3RpdmVJbmRleFxuICAgICAgPyBEaXJlY3Rpb24uTkVYVFxuICAgICAgOiBEaXJlY3Rpb24uUFJFVlxuXG4gICAgdGhpcy5fc2xpZGUoZGlyZWN0aW9uLCB0aGlzLl9pdGVtc1tpbmRleF0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0tFWSlcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICB0aGlzLl9pdGVtcyAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pbnRlcnZhbCAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc1BhdXNlZCAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc1NsaWRpbmcgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ICAgICA9IG51bGxcbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfaGFuZGxlU3dpcGUoKSB7XG4gICAgY29uc3QgYWJzRGVsdGF4ID0gTWF0aC5hYnModGhpcy50b3VjaERlbHRhWClcblxuICAgIGlmIChhYnNEZWx0YXggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YXggLyB0aGlzLnRvdWNoRGVsdGFYXG5cbiAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuXG4gICAgLy8gc3dpcGUgbGVmdFxuICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XG4gICAgICB0aGlzLnByZXYoKVxuICAgIH1cblxuICAgIC8vIHN3aXBlIHJpZ2h0XG4gICAgaWYgKGRpcmVjdGlvbiA8IDApIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uKEV2ZW50LktFWURPV04sIChldmVudCkgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub24oRXZlbnQuTU9VU0VFTlRFUiwgKGV2ZW50KSA9PiB0aGlzLnBhdXNlKGV2ZW50KSlcbiAgICAgICAgLm9uKEV2ZW50Lk1PVVNFTEVBVkUsIChldmVudCkgPT4gdGhpcy5jeWNsZShldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCkge1xuICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpXG4gICAgfVxuICB9XG5cbiAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCF0aGlzLl90b3VjaFN1cHBvcnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQgJiYgUG9pbnRlclR5cGVbZXZlbnQub3JpZ2luYWxFdmVudC5wb2ludGVyVHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQub3JpZ2luYWxFdmVudC5jbGllbnRYXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl9wb2ludGVyRXZlbnQpIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgLy8gZW5zdXJlIHN3aXBpbmcgd2l0aCBvbmUgdG91Y2ggYW5kIG5vdCBwaW5jaGluZ1xuICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCAmJiBQb2ludGVyVHlwZVtldmVudC5vcmlnaW5hbEV2ZW50LnBvaW50ZXJUeXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC5vcmlnaW5hbEV2ZW50LmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hhbmRsZVN3aXBlKClcbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuICAgICAgICB0aGlzLnBhdXNlKClcbiAgICAgICAgaWYgKHRoaXMudG91Y2hUaW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dCgoZXZlbnQpID0+IHRoaXMuY3ljbGUoZXZlbnQpLCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLklURU1fSU1HKSkub24oRXZlbnQuRFJBR19TVEFSVCwgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSlcbiAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LlBPSU5URVJET1dOLCAoZXZlbnQpID0+IHN0YXJ0KGV2ZW50KSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuUE9JTlRFUlVQLCAoZXZlbnQpID0+IGVuZChldmVudCkpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuUE9JTlRFUl9FVkVOVClcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5UT1VDSFNUQVJULCAoZXZlbnQpID0+IHN0YXJ0KGV2ZW50KSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuVE9VQ0hNT1ZFLCAoZXZlbnQpID0+IG1vdmUoZXZlbnQpKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5UT1VDSEVORCwgKGV2ZW50KSA9PiBlbmQoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZQ09ERTpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLnByZXYoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlDT0RFOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMubmV4dCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIF9nZXRJdGVtSW5kZXgoZWxlbWVudCkge1xuICAgIHRoaXMuX2l0ZW1zID0gZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgID8gW10uc2xpY2UuY2FsbChlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5JVEVNKSlcbiAgICAgIDogW11cbiAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihlbGVtZW50KVxuICB9XG5cbiAgX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpIHtcbiAgICBjb25zdCBpc05leHREaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUXG4gICAgY29uc3QgaXNQcmV2RGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUFJFVlxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ICAgICA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IGxhc3RJdGVtSW5kZXggICA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDFcbiAgICBjb25zdCBpc0dvaW5nVG9XcmFwICAgPSBpc1ByZXZEaXJlY3Rpb24gJiYgYWN0aXZlSW5kZXggPT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05leHREaXJlY3Rpb24gJiYgYWN0aXZlSW5kZXggPT09IGxhc3RJdGVtSW5kZXhcblxuICAgIGlmIChpc0dvaW5nVG9XcmFwICYmICF0aGlzLl9jb25maWcud3JhcCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZUVsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBkZWx0YSAgICAgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5QUkVWID8gLTEgOiAxXG4gICAgY29uc3QgaXRlbUluZGV4ID0gKGFjdGl2ZUluZGV4ICsgZGVsdGEpICUgdGhpcy5faXRlbXMubGVuZ3RoXG5cbiAgICByZXR1cm4gaXRlbUluZGV4ID09PSAtMVxuICAgICAgPyB0aGlzLl9pdGVtc1t0aGlzLl9pdGVtcy5sZW5ndGggLSAxXSA6IHRoaXMuX2l0ZW1zW2l0ZW1JbmRleF1cbiAgfVxuXG4gIF90cmlnZ2VyU2xpZGVFdmVudChyZWxhdGVkVGFyZ2V0LCBldmVudERpcmVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChyZWxhdGVkVGFyZ2V0KVxuICAgIGNvbnN0IGZyb21JbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQUNUSVZFX0lURU0pKVxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNMSURFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0LFxuICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICB0bzogdGFyZ2V0SW5kZXhcbiAgICB9KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRlRXZlbnQpXG5cbiAgICByZXR1cm4gc2xpZGVFdmVudFxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgY29uc3QgaW5kaWNhdG9ycyA9IFtdLnNsaWNlLmNhbGwodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5BQ1RJVkUpKVxuICAgICAgJChpbmRpY2F0b3JzKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcblxuICAgICAgY29uc3QgbmV4dEluZGljYXRvciA9IHRoaXMuX2luZGljYXRvcnNFbGVtZW50LmNoaWxkcmVuW1xuICAgICAgICB0aGlzLl9nZXRJdGVtSW5kZXgoZWxlbWVudClcbiAgICAgIF1cblxuICAgICAgaWYgKG5leHRJbmRpY2F0b3IpIHtcbiAgICAgICAgJChuZXh0SW5kaWNhdG9yKS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9zbGlkZShkaXJlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkFDVElWRV9JVEVNKVxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IG5leHRFbGVtZW50ICAgPSBlbGVtZW50IHx8IGFjdGl2ZUVsZW1lbnQgJiZcbiAgICAgIHRoaXMuX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcbiAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKVxuXG4gICAgbGV0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lXG4gICAgbGV0IG9yZGVyQ2xhc3NOYW1lXG4gICAgbGV0IGV2ZW50RGlyZWN0aW9uTmFtZVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5FWFQpIHtcbiAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gQ2xhc3NOYW1lLkxFRlRcbiAgICAgIG9yZGVyQ2xhc3NOYW1lID0gQ2xhc3NOYW1lLk5FWFRcbiAgICAgIGV2ZW50RGlyZWN0aW9uTmFtZSA9IERpcmVjdGlvbi5MRUZUXG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gQ2xhc3NOYW1lLlJJR0hUXG4gICAgICBvcmRlckNsYXNzTmFtZSA9IENsYXNzTmFtZS5QUkVWXG4gICAgICBldmVudERpcmVjdGlvbk5hbWUgPSBEaXJlY3Rpb24uUklHSFRcbiAgICB9XG5cbiAgICBpZiAobmV4dEVsZW1lbnQgJiYgJChuZXh0RWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSkpIHtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gdGhpcy5fdHJpZ2dlclNsaWRlRXZlbnQobmV4dEVsZW1lbnQsIGV2ZW50RGlyZWN0aW9uTmFtZSlcbiAgICBpZiAoc2xpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50KVxuXG4gICAgY29uc3Qgc2xpZEV2ZW50ID0gJC5FdmVudChFdmVudC5TTElELCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgZnJvbTogYWN0aXZlRWxlbWVudEluZGV4LFxuICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICB9KVxuXG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNMSURFKSkge1xuICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3Mob3JkZXJDbGFzc05hbWUpXG5cbiAgICAgIFV0aWwucmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgICAkKGFjdGl2ZUVsZW1lbnQpLmFkZENsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgIGNvbnN0IG5leHRFbGVtZW50SW50ZXJ2YWwgPSBwYXJzZUludChuZXh0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW50ZXJ2YWwnKSwgMTApXG4gICAgICBpZiAobmV4dEVsZW1lbnRJbnRlcnZhbCkge1xuICAgICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gbmV4dEVsZW1lbnRJbnRlcnZhbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIH1cblxuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChhY3RpdmVFbGVtZW50KVxuXG4gICAgICAkKGFjdGl2ZUVsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgICAgICQobmV4dEVsZW1lbnQpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoYCR7ZGlyZWN0aW9uYWxDbGFzc05hbWV9ICR7b3JkZXJDbGFzc05hbWV9YClcbiAgICAgICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuXG4gICAgICAgICAgJChhY3RpdmVFbGVtZW50KS5yZW1vdmVDbGFzcyhgJHtDbGFzc05hbWUuQUNUSVZFfSAke29yZGVyQ2xhc3NOYW1lfSAke2RpcmVjdGlvbmFsQ2xhc3NOYW1lfWApXG5cbiAgICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZEV2ZW50KSwgMClcbiAgICAgICAgfSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgJChhY3RpdmVFbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkRXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGxldCBfY29uZmlnID0ge1xuICAgICAgICAuLi5EZWZhdWx0LFxuICAgICAgICAuLi4kKHRoaXMpLmRhdGEoKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgX2NvbmZpZyA9IHtcbiAgICAgICAgICAuLi5fY29uZmlnLFxuICAgICAgICAgIC4uLmNvbmZpZ1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnID8gY29uZmlnIDogX2NvbmZpZy5zbGlkZVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBDYXJvdXNlbCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgICBkYXRhLnRvKGNvbmZpZylcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2FjdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHthY3Rpb259XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbYWN0aW9uXSgpXG4gICAgICB9IGVsc2UgaWYgKF9jb25maWcuaW50ZXJ2YWwgJiYgX2NvbmZpZy5yaWRlKSB7XG4gICAgICAgIGRhdGEucGF1c2UoKVxuICAgICAgICBkYXRhLmN5Y2xlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9kYXRhQXBpQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcblxuICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9ICQoc2VsZWN0b3IpWzBdXG5cbiAgICBpZiAoIXRhcmdldCB8fCAhJCh0YXJnZXQpLmhhc0NsYXNzKENsYXNzTmFtZS5DQVJPVVNFTCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIC4uLiQodGFyZ2V0KS5kYXRhKCksXG4gICAgICAuLi4kKHRoaXMpLmRhdGEoKVxuICAgIH1cbiAgICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGUtdG8nKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIGNvbmZpZy5pbnRlcnZhbCA9IGZhbHNlXG4gICAgfVxuXG4gICAgQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGFyZ2V0KSwgY29uZmlnKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZKS50byhzbGlkZUluZGV4KVxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpXG4gIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9TTElERSwgQ2Fyb3VzZWwuX2RhdGFBcGlDbGlja0hhbmRsZXIpXG5cbiQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VscyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EQVRBX1JJREUpKVxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2Fyb3VzZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgJGNhcm91c2VsID0gJChjYXJvdXNlbHNbaV0pXG4gICAgQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRjYXJvdXNlbCwgJGNhcm91c2VsLmRhdGEoKSlcbiAgfVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDYXJvdXNlbFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnY29sbGFwc2UnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5jb2xsYXBzZSdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICB0b2dnbGUgOiB0cnVlLFxuICBwYXJlbnQgOiAnJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgdG9nZ2xlIDogJ2Jvb2xlYW4nLFxuICBwYXJlbnQgOiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIFNIT1cgICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIEhJREUgICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBTSE9XICAgICAgIDogJ3Nob3cnLFxuICBDT0xMQVBTRSAgIDogJ2NvbGxhcHNlJyxcbiAgQ09MTEFQU0lORyA6ICdjb2xsYXBzaW5nJyxcbiAgQ09MTEFQU0VEICA6ICdjb2xsYXBzZWQnXG59XG5cbmNvbnN0IERpbWVuc2lvbiA9IHtcbiAgV0lEVEggIDogJ3dpZHRoJyxcbiAgSEVJR0hUIDogJ2hlaWdodCdcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIEFDVElWRVMgICAgIDogJy5zaG93LCAuY29sbGFwc2luZycsXG4gIERBVEFfVE9HR0xFIDogJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQ29sbGFwc2Uge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSAgICA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIyR7ZWxlbWVudC5pZH1cIl0sYCArXG4gICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS10YXJnZXQ9XCIjJHtlbGVtZW50LmlkfVwiXWBcbiAgICApKVxuXG4gICAgY29uc3QgdG9nZ2xlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EQVRBX1RPR0dMRSkpXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZUxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW0gPSB0b2dnbGVMaXN0W2ldXG4gICAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG4gICAgICAgIC5maWx0ZXIoKGZvdW5kRWxlbSkgPT4gZm91bmRFbGVtID09PSBlbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3JcbiAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50ID8gdGhpcy5fZ2V0UGFyZW50KCkgOiBudWxsXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl9lbGVtZW50LCB0aGlzLl90cmlnZ2VyQXJyYXkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZXNcbiAgICBsZXQgYWN0aXZlc0RhdGFcblxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgIGFjdGl2ZXMgPSBbXS5zbGljZS5jYWxsKHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkFDVElWRVMpKVxuICAgICAgICAuZmlsdGVyKChlbGVtKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudCcpID09PSB0aGlzLl9jb25maWcucGFyZW50XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgfSlcblxuICAgICAgaWYgKGFjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFjdGl2ZXMgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIGFjdGl2ZXNEYXRhID0gJChhY3RpdmVzKS5ub3QodGhpcy5fc2VsZWN0b3IpLmRhdGEoREFUQV9LRVkpXG4gICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XKVxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlcykge1xuICAgICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoYWN0aXZlcykubm90KHRoaXMuX3NlbGVjdG9yKSwgJ2hpZGUnKVxuICAgICAgaWYgKCFhY3RpdmVzRGF0YSkge1xuICAgICAgICAkKGFjdGl2ZXMpLmRhdGEoREFUQV9LRVksIG51bGwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG5cbiAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgJCh0aGlzLl90cmlnZ2VyQXJyYXkpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LlNIT1dOKVxuICAgIH1cblxuICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICBjb25zdCBzY3JvbGxTaXplID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YFxuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fFxuICAgICAgISQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFKVxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBjb25zdCB0cmlnZ2VyQXJyYXlMZW5ndGggPSB0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoXG4gICAgaWYgKHRyaWdnZXJBcnJheUxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpZ2dlckFycmF5TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJBcnJheVtpXVxuICAgICAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0cmlnZ2VyKVxuXG4gICAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0ICRlbGVtID0gJChbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSlcbiAgICAgICAgICBpZiAoISRlbGVtLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICAgICAgJCh0cmlnZ2VyKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLnRyaWdnZXIoRXZlbnQuSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIH1cblxuICBzZXRUcmFuc2l0aW9uaW5nKGlzVHJhbnNpdGlvbmluZykge1xuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGlzVHJhbnNpdGlvbmluZ1xuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fcGFyZW50ICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgICAgPSBudWxsXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKSAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlc1xuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERpbWVuc2lvbigpIHtcbiAgICBjb25zdCBoYXNXaWR0aCA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoRGltZW5zaW9uLldJRFRIKVxuICAgIHJldHVybiBoYXNXaWR0aCA/IERpbWVuc2lvbi5XSURUSCA6IERpbWVuc2lvbi5IRUlHSFRcbiAgfVxuXG4gIF9nZXRQYXJlbnQoKSB7XG4gICAgbGV0IHBhcmVudFxuXG4gICAgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5wYXJlbnQpKSB7XG4gICAgICBwYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50XG5cbiAgICAgIC8vIEl0J3MgYSBqUXVlcnkgb2JqZWN0XG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5wYXJlbnQuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50WzBdXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY29uZmlnLnBhcmVudClcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RvciA9XG4gICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS1wYXJlbnQ9XCIke3RoaXMuX2NvbmZpZy5wYXJlbnR9XCJdYFxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcbiAgICAkKGNoaWxkcmVuKS5lYWNoKChpLCBlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoXG4gICAgICAgIENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudChlbGVtZW50KSxcbiAgICAgICAgW2VsZW1lbnRdXG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiBwYXJlbnRcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoZWxlbWVudCwgdHJpZ2dlckFycmF5KSB7XG4gICAgY29uc3QgaXNPcGVuID0gJChlbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIGlmICh0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAkKHRyaWdnZXJBcnJheSlcbiAgICAgICAgLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQsICFpc09wZW4pXG4gICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgcmV0dXJuIHNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBudWxsXG4gIH1cblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSAgICAgID0gJHRoaXMuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB7XG4gICAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAgIC4uLiR0aGlzLmRhdGEoKSxcbiAgICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhICYmIF9jb25maWcudG9nZ2xlICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IENvbGxhcHNlKHRoaXMsIF9jb25maWcpXG4gICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCAkdHJpZ2dlciA9ICQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3JzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcblxuICAkKHNlbGVjdG9ycykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgJHRhcmdldCA9ICQodGhpcylcbiAgICBjb25zdCBkYXRhICAgID0gJHRhcmdldC5kYXRhKERBVEFfS0VZKVxuICAgIGNvbnN0IGNvbmZpZyAgPSBkYXRhID8gJ3RvZ2dsZScgOiAkdHJpZ2dlci5kYXRhKClcbiAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJHRhcmdldCwgY29uZmlnKVxuICB9KVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDb2xsYXBzZVxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcydcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICAgID0gJ2Ryb3Bkb3duJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICAgID0gJ2JzLmRyb3Bkb3duJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgICAgPSAkLmZuW05BTUVdXG5jb25zdCBFU0NBUEVfS0VZQ09ERSAgICAgICAgICAgPSAyNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5jb25zdCBTUEFDRV9LRVlDT0RFICAgICAgICAgICAgPSAzMiAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBzcGFjZSBrZXlcbmNvbnN0IFRBQl9LRVlDT0RFICAgICAgICAgICAgICA9IDkgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdGFiIGtleVxuY29uc3QgQVJST1dfVVBfS0VZQ09ERSAgICAgICAgID0gMzggLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdXAgYXJyb3cga2V5XG5jb25zdCBBUlJPV19ET1dOX0tFWUNPREUgICAgICAgPSA0MCAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBkb3duIGFycm93IGtleVxuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIID0gMyAvLyBNb3VzZUV2ZW50LndoaWNoIHZhbHVlIGZvciB0aGUgcmlnaHQgYnV0dG9uIChhc3N1bWluZyBhIHJpZ2h0LWhhbmRlZCBtb3VzZSlcbmNvbnN0IFJFR0VYUF9LRVlET1dOICAgICAgICAgICA9IG5ldyBSZWdFeHAoYCR7QVJST1dfVVBfS0VZQ09ERX18JHtBUlJPV19ET1dOX0tFWUNPREV9fCR7RVNDQVBFX0tFWUNPREV9YClcblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIENMSUNLICAgICAgICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgS0VZRE9XTl9EQVRBX0FQSSA6IGBrZXlkb3duJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgS0VZVVBfREFUQV9BUEkgICA6IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBESVNBQkxFRCAgICAgICAgOiAnZGlzYWJsZWQnLFxuICBTSE9XICAgICAgICAgICAgOiAnc2hvdycsXG4gIERST1BVUCAgICAgICAgICA6ICdkcm9wdXAnLFxuICBEUk9QUklHSFQgICAgICAgOiAnZHJvcHJpZ2h0JyxcbiAgRFJPUExFRlQgICAgICAgIDogJ2Ryb3BsZWZ0JyxcbiAgTUVOVVJJR0hUICAgICAgIDogJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnLFxuICBNRU5VTEVGVCAgICAgICAgOiAnZHJvcGRvd24tbWVudS1sZWZ0JyxcbiAgUE9TSVRJT05fU1RBVElDIDogJ3Bvc2l0aW9uLXN0YXRpYydcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERBVEFfVE9HR0xFICAgOiAnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nLFxuICBGT1JNX0NISUxEICAgIDogJy5kcm9wZG93biBmb3JtJyxcbiAgTUVOVSAgICAgICAgICA6ICcuZHJvcGRvd24tbWVudScsXG4gIE5BVkJBUl9OQVYgICAgOiAnLm5hdmJhci1uYXYnLFxuICBWSVNJQkxFX0lURU1TIDogJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xufVxuXG5jb25zdCBBdHRhY2htZW50TWFwID0ge1xuICBUT1AgICAgICAgOiAndG9wLXN0YXJ0JyxcbiAgVE9QRU5EICAgIDogJ3RvcC1lbmQnLFxuICBCT1RUT00gICAgOiAnYm90dG9tLXN0YXJ0JyxcbiAgQk9UVE9NRU5EIDogJ2JvdHRvbS1lbmQnLFxuICBSSUdIVCAgICAgOiAncmlnaHQtc3RhcnQnLFxuICBSSUdIVEVORCAgOiAncmlnaHQtZW5kJyxcbiAgTEVGVCAgICAgIDogJ2xlZnQtc3RhcnQnLFxuICBMRUZURU5EICAgOiAnbGVmdC1lbmQnXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldCAgICAgICA6IDAsXG4gIGZsaXAgICAgICAgICA6IHRydWUsXG4gIGJvdW5kYXJ5ICAgICA6ICdzY3JvbGxQYXJlbnQnLFxuICByZWZlcmVuY2UgICAgOiAndG9nZ2xlJyxcbiAgZGlzcGxheSAgICAgIDogJ2R5bmFtaWMnLFxuICBwb3BwZXJDb25maWcgOiBudWxsXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQgICAgICAgOiAnKG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgZmxpcCAgICAgICAgIDogJ2Jvb2xlYW4nLFxuICBib3VuZGFyeSAgICAgOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIHJlZmVyZW5jZSAgICA6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgZGlzcGxheSAgICAgIDogJ3N0cmluZycsXG4gIHBvcHBlckNvbmZpZyA6ICcobnVsbHxvYmplY3QpJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgRHJvcGRvd24ge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9lbGVtZW50ICA9IGVsZW1lbnRcbiAgICB0aGlzLl9wb3BwZXIgICA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fbWVudSAgICAgPSB0aGlzLl9nZXRNZW51RWxlbWVudCgpXG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNBY3RpdmUgPSAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgRHJvcGRvd24uX2NsZWFyTWVudXMoKVxuXG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnNob3codHJ1ZSlcbiAgfVxuXG4gIHNob3codXNlUG9wcGVyID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkgfHwgJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVywgcmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQocGFyZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIERpc2FibGUgdG90YWxseSBQb3BwZXIuanMgZm9yIERyb3Bkb3duIGluIE5hdmJhclxuICAgIGlmICghdGhpcy5faW5OYXZiYXIgJiYgdXNlUG9wcGVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGZvciBQb3BwZXIgZGVwZW5kZW5jeVxuICAgICAgICogUG9wcGVyIC0gaHR0cHM6Ly9wb3BwZXIuanMub3JnXG4gICAgICAgKi9cbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlci5qcyAoaHR0cHM6Ly9wb3BwZXIuanMub3JnLyknKVxuICAgICAgfVxuXG4gICAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwYXJlbnRcbiAgICAgIH0gZWxzZSBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSkpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcblxuICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGpRdWVyeSBlbGVtZW50XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZS5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VbMF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBib3VuZGFyeSBpcyBub3QgYHNjcm9sbFBhcmVudGAsIHRoZW4gc2V0IHBvc2l0aW9uIHRvIGBzdGF0aWNgXG4gICAgICAvLyB0byBhbGxvdyB0aGUgbWVudSB0byBcImVzY2FwZVwiIHRoZSBzY3JvbGwgcGFyZW50J3MgYm91bmRhcmllc1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNDI1MVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5ib3VuZGFyeSAhPT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgICAgJChwYXJlbnQpLmFkZENsYXNzKENsYXNzTmFtZS5QT1NJVElPTl9TVEFUSUMpXG4gICAgICB9XG4gICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKHJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuX21lbnUsIHRoaXMuX2dldFBvcHBlckNvbmZpZygpKVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgICAkKHBhcmVudCkuY2xvc2VzdChTZWxlY3Rvci5OQVZCQVJfTkFWKS5sZW5ndGggPT09IDApIHtcbiAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgJChwYXJlbnQpXG4gICAgICAudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAudHJpZ2dlcigkLkV2ZW50KEV2ZW50LlNIT1dOLCByZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRElTQUJMRUQpIHx8ICEkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgJChwYXJlbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgJChwYXJlbnQpXG4gICAgICAudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAudHJpZ2dlcigkLkV2ZW50KEV2ZW50LkhJRERFTiwgcmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9tZW51ID0gbnVsbFxuICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5zY2hlZHVsZVVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LkNMSUNLLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uJCh0aGlzLl9lbGVtZW50KS5kYXRhKCksXG4gICAgICAuLi5jb25maWdcbiAgICB9XG5cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhcbiAgICAgIE5BTUUsXG4gICAgICBjb25maWcsXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlXG4gICAgKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldE1lbnVFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fbWVudSkge1xuICAgICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fbWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1FTlUpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9tZW51XG4gIH1cblxuICBfZ2V0UGxhY2VtZW50KCkge1xuICAgIGNvbnN0ICRwYXJlbnREcm9wZG93biA9ICQodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlKVxuICAgIGxldCBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLkJPVFRPTVxuXG4gICAgLy8gSGFuZGxlIGRyb3B1cFxuICAgIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BVUCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuVE9QXG4gICAgICBpZiAoJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuTUVOVVJJR0hUKSkge1xuICAgICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLlRPUEVORFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QUklHSFQpKSB7XG4gICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLlJJR0hUXG4gICAgfSBlbHNlIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BMRUZUKSkge1xuICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5MRUZUXG4gICAgfSBlbHNlIGlmICgkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5NRU5VUklHSFQpKSB7XG4gICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLkJPVFRPTUVORFxuICAgIH1cbiAgICByZXR1cm4gcGxhY2VtZW50XG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoJy5uYXZiYXInKS5sZW5ndGggPiAwXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IG9mZnNldCA9IHt9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9mZnNldC5mbiA9IChkYXRhKSA9PiB7XG4gICAgICAgIGRhdGEub2Zmc2V0cyA9IHtcbiAgICAgICAgICAuLi5kYXRhLm9mZnNldHMsXG4gICAgICAgICAgLi4udGhpcy5fY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMsIHRoaXMuX2VsZW1lbnQpIHx8IHt9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXQub2Zmc2V0ID0gdGhpcy5fY29uZmlnLm9mZnNldFxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgY29uc3QgcG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpLFxuICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgZW5hYmxlZDogdGhpcy5fY29uZmlnLmZsaXBcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBQb3BwZXIuanMgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgcG9wcGVyQ29uZmlnLm1vZGlmaWVycy5hcHBseVN0eWxlID0ge1xuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5wb3BwZXJDb25maWcsXG4gICAgICAuLi50aGlzLl9jb25maWcucG9wcGVyQ29uZmlnXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgRHJvcGRvd24odGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBfY2xlYXJNZW51cyhldmVudCkge1xuICAgIGlmIChldmVudCAmJiAoZXZlbnQud2hpY2ggPT09IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCB8fFxuICAgICAgZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC53aGljaCAhPT0gVEFCX0tFWUNPREUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkRBVEFfVE9HR0xFKSlcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodG9nZ2xlc1tpXSlcbiAgICAgIGNvbnN0IGNvbnRleHQgPSAkKHRvZ2dsZXNbaV0pLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0b2dnbGVzW2ldXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQuY2xpY2tFdmVudCA9IGV2ZW50XG4gICAgICB9XG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkcm9wZG93bk1lbnUgPSBjb250ZXh0Ll9tZW51XG4gICAgICBpZiAoISQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50ICYmIChldmVudC50eXBlID09PSAnY2xpY2snICYmXG4gICAgICAgICAgL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgfHwgZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC53aGljaCA9PT0gVEFCX0tFWUNPREUpICYmXG4gICAgICAgICAgJC5jb250YWlucyhwYXJlbnQsIGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgICAgJChwYXJlbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgICAgfVxuXG4gICAgICB0b2dnbGVzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG5cbiAgICAgIGlmIChjb250ZXh0Ll9wb3BwZXIpIHtcbiAgICAgICAgY29udGV4dC5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgfVxuXG4gICAgICAkKGRyb3Bkb3duTWVudSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAkKHBhcmVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgICAudHJpZ2dlcigkLkV2ZW50KEV2ZW50LkhJRERFTiwgcmVsYXRlZFRhcmdldCkpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIF9nZXRQYXJlbnRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgbGV0IHBhcmVudFxuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gIHN0YXRpYyBfZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgLy8gSWYgbm90IGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIEFuZCBub3QgYSBrZXkgaW4gUkVHRVhQX0tFWURPV04gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vIElmIGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIElmIHNwYWNlIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gIC0gSWYga2V5IGlzIG90aGVyIHRoYW4gZXNjYXBlXG4gICAgLy8gICAgLSBJZiBrZXkgaXMgbm90IHVwIG9yIGRvd24gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAgIC0gSWYgdHJpZ2dlciBpbnNpZGUgdGhlIG1lbnUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKVxuICAgICAgPyBldmVudC53aGljaCA9PT0gU1BBQ0VfS0VZQ09ERSB8fCBldmVudC53aGljaCAhPT0gRVNDQVBFX0tFWUNPREUgJiZcbiAgICAgIChldmVudC53aGljaCAhPT0gQVJST1dfRE9XTl9LRVlDT0RFICYmIGV2ZW50LndoaWNoICE9PSBBUlJPV19VUF9LRVlDT0RFIHx8XG4gICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFNlbGVjdG9yLk1FTlUpLmxlbmd0aCkgOiAhUkVHRVhQX0tFWURPV04udGVzdChldmVudC53aGljaCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgJCh0aGlzKS5oYXNDbGFzcyhDbGFzc05hbWUuRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgICA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzKVxuICAgIGNvbnN0IGlzQWN0aXZlID0gJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgaWYgKCFpc0FjdGl2ZSAmJiBldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNBY3RpdmUgfHwgaXNBY3RpdmUgJiYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSB8fCBldmVudC53aGljaCA9PT0gU1BBQ0VfS0VZQ09ERSkpIHtcbiAgICAgIGlmIChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuREFUQV9UT0dHTEUpXG4gICAgICAgICQodG9nZ2xlKS50cmlnZ2VyKCdmb2N1cycpXG4gICAgICB9XG5cbiAgICAgICQodGhpcykudHJpZ2dlcignY2xpY2snKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBbXS5zbGljZS5jYWxsKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlZJU0lCTEVfSVRFTVMpKVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gJChpdGVtKS5pcygnOnZpc2libGUnKSlcblxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxuXG4gICAgaWYgKGV2ZW50LndoaWNoID09PSBBUlJPV19VUF9LRVlDT0RFICYmIGluZGV4ID4gMCkgeyAvLyBVcFxuICAgICAgaW5kZXgtLVxuICAgIH1cblxuICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfRE9XTl9LRVlDT0RFICYmIGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSkgeyAvLyBEb3duXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaW5kZXggPSAwXG4gICAgfVxuXG4gICAgaXRlbXNbaW5kZXhdLmZvY3VzKClcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpXG4gIC5vbihFdmVudC5LRVlET1dOX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcilcbiAgLm9uKEV2ZW50LktFWURPV05fREFUQV9BUEksIFNlbGVjdG9yLk1FTlUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gIC5vbihgJHtFdmVudC5DTElDS19EQVRBX0FQSX0gJHtFdmVudC5LRVlVUF9EQVRBX0FQSX1gLCBEcm9wZG93bi5fY2xlYXJNZW51cylcbiAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKVxuICB9KVxuICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkZPUk1fQ0hJTEQsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IERyb3Bkb3duXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiBtb2RhbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgPSAnbW9kYWwnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnYnMubW9kYWwnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cbmNvbnN0IEVTQ0FQRV9LRVlDT0RFICAgICA9IDI3IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIEVzY2FwZSAoRXNjKSBrZXlcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3AgOiB0cnVlLFxuICBrZXlib2FyZCA6IHRydWUsXG4gIGZvY3VzICAgIDogdHJ1ZSxcbiAgc2hvdyAgICAgOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcCA6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAga2V5Ym9hcmQgOiAnYm9vbGVhbicsXG4gIGZvY3VzICAgIDogJ2Jvb2xlYW4nLFxuICBzaG93ICAgICA6ICdib29sZWFuJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERSAgICAgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJREVfUFJFVkVOVEVEICAgIDogYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOICAgICAgICAgICA6IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgUkVTSVpFICAgICAgICAgICAgOiBgcmVzaXplJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfRElTTUlTUyAgICAgOiBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gIEtFWURPV05fRElTTUlTUyAgIDogYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFVVBfRElTTUlTUyAgIDogYG1vdXNldXAuZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRE9XTl9ESVNNSVNTIDogYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgICAgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgU0NST0xMQUJMRSAgICAgICAgIDogJ21vZGFsLWRpYWxvZy1zY3JvbGxhYmxlJyxcbiAgU0NST0xMQkFSX01FQVNVUkVSIDogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcbiAgQkFDS0RST1AgICAgICAgICAgIDogJ21vZGFsLWJhY2tkcm9wJyxcbiAgT1BFTiAgICAgICAgICAgICAgIDogJ21vZGFsLW9wZW4nLFxuICBGQURFICAgICAgICAgICAgICAgOiAnZmFkZScsXG4gIFNIT1cgICAgICAgICAgICAgICA6ICdzaG93JyxcbiAgU1RBVElDICAgICAgICAgICAgIDogJ21vZGFsLXN0YXRpYydcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERJQUxPRyAgICAgICAgIDogJy5tb2RhbC1kaWFsb2cnLFxuICBNT0RBTF9CT0RZICAgICA6ICcubW9kYWwtYm9keScsXG4gIERBVEFfVE9HR0xFICAgIDogJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxcbiAgREFUQV9ESVNNSVNTICAgOiAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxcbiAgRklYRURfQ09OVEVOVCAgOiAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCcsXG4gIFNUSUNLWV9DT05URU5UIDogJy5zdGlja3ktdG9wJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICAgID0gZWxlbWVudFxuICAgIHRoaXMuX2RpYWxvZyAgICAgICAgICAgICAgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuRElBTE9HKVxuICAgIHRoaXMuX2JhY2tkcm9wICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNTaG93biAgICAgICAgICAgICA9IGZhbHNlXG4gICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgICA9IGZhbHNlXG4gICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nICAgICA9IGZhbHNlXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggICAgICA9IDBcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuXG4gICAgdGhpcy5fY2hlY2tTY3JvbGxiYXIoKVxuICAgIHRoaXMuX3NldFNjcm9sbGJhcigpXG5cbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgICQodGhpcy5fZWxlbWVudCkub24oXG4gICAgICBFdmVudC5DTElDS19ESVNNSVNTLFxuICAgICAgU2VsZWN0b3IuREFUQV9ESVNNSVNTLFxuICAgICAgKGV2ZW50KSA9PiB0aGlzLmhpZGUoZXZlbnQpXG4gICAgKVxuXG4gICAgJCh0aGlzLl9kaWFsb2cpLm9uKEV2ZW50Lk1PVVNFRE9XTl9ESVNNSVNTLCAoKSA9PiB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShFdmVudC5NT1VTRVVQX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHRoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgaGlkZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmICghdGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgICQoZG9jdW1lbnQpLm9mZihFdmVudC5GT0NVU0lOKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LkNMSUNLX0RJU01JU1MpXG4gICAgJCh0aGlzLl9kaWFsb2cpLm9mZihFdmVudC5NT1VTRURPV05fRElTTUlTUylcblxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiAgPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoZXZlbnQpID0+IHRoaXMuX2hpZGVNb2RhbChldmVudCkpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVNb2RhbCgpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBbd2luZG93LCB0aGlzLl9lbGVtZW50LCB0aGlzLl9kaWFsb2ddXG4gICAgICAuZm9yRWFjaCgoaHRtbEVsZW1lbnQpID0+ICQoaHRtbEVsZW1lbnQpLm9mZihFVkVOVF9LRVkpKVxuXG4gICAgLyoqXG4gICAgICogYGRvY3VtZW50YCBoYXMgMiBldmVudHMgYEV2ZW50LkZPQ1VTSU5gIGFuZCBgRXZlbnQuQ0xJQ0tfREFUQV9BUElgXG4gICAgICogRG8gbm90IG1vdmUgYGRvY3VtZW50YCBpbiBgaHRtbEVsZW1lbnRzYCBhcnJheVxuICAgICAqIEl0IHdpbGwgcmVtb3ZlIGBFdmVudC5DTElDS19EQVRBX0FQSWAgZXZlbnQgdGhhdCBzaG91bGQgcmVtYWluXG4gICAgICovXG4gICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkZPQ1VTSU4pXG5cbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZGlhbG9nICAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9iYWNrZHJvcCAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2lzU2hvd24gICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgICA9IG51bGxcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gbnVsbFxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyAgICAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggICAgICA9IG51bGxcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb25zdCBoaWRlRXZlbnRQcmV2ZW50ZWQgPSAkLkV2ZW50KEV2ZW50LkhJREVfUFJFVkVOVEVEKVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50UHJldmVudGVkKVxuICAgICAgaWYgKGhpZGVFdmVudFByZXZlbnRlZC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLlNUQVRJQylcblxuICAgICAgY29uc3QgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICgpID0+IHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5TVEFUSUMpXG4gICAgICB9KVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQobW9kYWxUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9XG4gIH1cblxuICBfc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkge1xuICAgIGNvbnN0IHRyYW5zaXRpb24gPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKVxuICAgIGNvbnN0IG1vZGFsQm9keSA9IHRoaXMuX2RpYWxvZyA/IHRoaXMuX2RpYWxvZy5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1PREFMX0JPRFkpIDogbnVsbFxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgLy8gRG9uJ3QgbW92ZSBtb2RhbCdzIERPTSBwb3NpdGlvblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcblxuICAgIGlmICgkKHRoaXMuX2RpYWxvZykuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNDUk9MTEFCTEUpICYmIG1vZGFsQm9keSkge1xuICAgICAgbW9kYWxCb2R5LnNjcm9sbFRvcCA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwXG4gICAgfVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgIHRoaXMuX2VuZm9yY2VGb2N1cygpXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd25FdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPV04sIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICB9KVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudClcbiAgICB9XG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uICA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZGlhbG9nKVxuXG4gICAgICAkKHRoaXMuX2RpYWxvZylcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCB0cmFuc2l0aW9uQ29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgX2VuZm9yY2VGb2N1cygpIHtcbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9mZihFdmVudC5GT0NVU0lOKSAvLyBHdWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICAgIC5vbihFdmVudC5GT0NVU0lOLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXMoZXZlbnQudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIF9zZXRFc2NhcGVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuS0VZRE9XTl9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LktFWURPV05fRElTTUlTUylcbiAgICB9XG4gIH1cblxuICBfc2V0UmVzaXplRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICQod2luZG93KS5vbihFdmVudC5SRVNJWkUsIChldmVudCkgPT4gdGhpcy5oYW5kbGVVcGRhdGUoZXZlbnQpKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKHdpbmRvdykub2ZmKEV2ZW50LlJFU0laRSlcbiAgICB9XG4gIH1cblxuICBfaGlkZU1vZGFsKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHtcbiAgICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICB0aGlzLl9yZXNldEFkanVzdG1lbnRzKClcbiAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsYmFyKClcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5ISURERU4pXG4gICAgfSlcbiAgfVxuXG4gIF9yZW1vdmVCYWNrZHJvcCgpIHtcbiAgICBpZiAodGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZSgpXG4gICAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGxcbiAgICB9XG4gIH1cblxuICBfc2hvd0JhY2tkcm9wKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYW5pbWF0ZSA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG4gICAgICA/IENsYXNzTmFtZS5GQURFIDogJydcblxuICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgdGhpcy5fYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NOYW1lID0gQ2xhc3NOYW1lLkJBQ0tEUk9QXG5cbiAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC5hZGQoYW5pbWF0ZSlcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSlcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5DTElDS19ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgIH0pXG5cbiAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgIFV0aWwucmVmbG93KHRoaXMuX2JhY2tkcm9wKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFhbmltYXRlKSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcClcblxuICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFjaylcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICBjb25zdCBjYWxsYmFja1JlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQmFja2Ryb3AoKVxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIGNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcClcblxuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKVxuICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2tSZW1vdmUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2tSZW1vdmUoKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gIC8vIHRvZG8gKGZhdCk6IHRoZXNlIHNob3VsZCBwcm9iYWJseSBiZSByZWZhY3RvcmVkIG91dCBvZiBtb2RhbC5qc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgX2FkanVzdERpYWxvZygpIHtcbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPVxuICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICBpZiAoIXRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3RoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgfVxuXG4gIF9jaGVja1Njcm9sbGJhcigpIHtcbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gcmVjdC5sZWZ0ICsgcmVjdC5yaWdodCA8IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSB0aGlzLl9nZXRTY3JvbGxiYXJXaWR0aCgpXG4gIH1cblxuICBfc2V0U2Nyb2xsYmFyKCkge1xuICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZykge1xuICAgICAgLy8gTm90ZTogRE9NTm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQgcmV0dXJucyB0aGUgYWN0dWFsIHZhbHVlIG9yICcnIGlmIG5vdCBzZXRcbiAgICAgIC8vICAgd2hpbGUgJChET01Ob2RlKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSByZXR1cm5zIHRoZSBjYWxjdWxhdGVkIHZhbHVlIG9yIDAgaWYgbm90IHNldFxuICAgICAgY29uc3QgZml4ZWRDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkZJWEVEX0NPTlRFTlQpKVxuICAgICAgY29uc3Qgc3RpY2t5Q29udGVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5TVElDS1lfQ09OVEVOVCkpXG5cbiAgICAgIC8vIEFkanVzdCBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICAgICQoZml4ZWRDb250ZW50KS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBhY3R1YWxQYWRkaW5nID0gZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHRcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZFBhZGRpbmcgPSAkKGVsZW1lbnQpLmNzcygncGFkZGluZy1yaWdodCcpXG4gICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAuZGF0YSgncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpXG4gICAgICAgICAgLmNzcygncGFkZGluZy1yaWdodCcsIGAke3BhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgKVxuICAgICAgfSlcblxuICAgICAgLy8gQWRqdXN0IHN0aWNreSBjb250ZW50IG1hcmdpblxuICAgICAgJChzdGlja3lDb250ZW50KS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBhY3R1YWxNYXJnaW4gPSBlbGVtZW50LnN0eWxlLm1hcmdpblJpZ2h0XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRNYXJnaW4gPSAkKGVsZW1lbnQpLmNzcygnbWFyZ2luLXJpZ2h0JylcbiAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgIC5kYXRhKCdtYXJnaW4tcmlnaHQnLCBhY3R1YWxNYXJnaW4pXG4gICAgICAgICAgLmNzcygnbWFyZ2luLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkTWFyZ2luKSAtIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YClcbiAgICAgIH0pXG5cbiAgICAgIC8vIEFkanVzdCBib2R5IHBhZGRpbmdcbiAgICAgIGNvbnN0IGFjdHVhbFBhZGRpbmcgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodFxuICAgICAgY29uc3QgY2FsY3VsYXRlZFBhZGRpbmcgPSAkKGRvY3VtZW50LmJvZHkpLmNzcygncGFkZGluZy1yaWdodCcpXG4gICAgICAkKGRvY3VtZW50LmJvZHkpXG4gICAgICAgIC5kYXRhKCdwYWRkaW5nLXJpZ2h0JywgYWN0dWFsUGFkZGluZylcbiAgICAgICAgLmNzcygncGFkZGluZy1yaWdodCcsIGAke3BhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgKVxuICAgIH1cblxuICAgICQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gIH1cblxuICBfcmVzZXRTY3JvbGxiYXIoKSB7XG4gICAgLy8gUmVzdG9yZSBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICBjb25zdCBmaXhlZENvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuRklYRURfQ09OVEVOVCkpXG4gICAgJChmaXhlZENvbnRlbnQpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBwYWRkaW5nID0gJChlbGVtZW50KS5kYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgICQoZWxlbWVudCkucmVtb3ZlRGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPyBwYWRkaW5nIDogJydcbiAgICB9KVxuXG4gICAgLy8gUmVzdG9yZSBzdGlja3kgY29udGVudFxuICAgIGNvbnN0IGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke1NlbGVjdG9yLlNUSUNLWV9DT05URU5UfWApKVxuICAgICQoZWxlbWVudHMpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBtYXJnaW4gPSAkKGVsZW1lbnQpLmRhdGEoJ21hcmdpbi1yaWdodCcpXG4gICAgICBpZiAodHlwZW9mIG1hcmdpbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgJChlbGVtZW50KS5jc3MoJ21hcmdpbi1yaWdodCcsIG1hcmdpbikucmVtb3ZlRGF0YSgnbWFyZ2luLXJpZ2h0JylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gUmVzdG9yZSBib2R5IHBhZGRpbmdcbiAgICBjb25zdCBwYWRkaW5nID0gJChkb2N1bWVudC5ib2R5KS5kYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZURhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZyA/IHBhZGRpbmcgOiAnJ1xuICB9XG5cbiAgX2dldFNjcm9sbGJhcldpZHRoKCkgeyAvLyB0aHggZC53YWxzaFxuICAgIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IENsYXNzTmFtZS5TQ1JPTExCQVJfTUVBU1VSRVJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdilcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aFxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KVxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB7XG4gICAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAgIC4uLiQodGhpcykuZGF0YSgpLFxuICAgICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBNb2RhbCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgICB9IGVsc2UgaWYgKF9jb25maWcuc2hvdykge1xuICAgICAgICBkYXRhLnNob3cocmVsYXRlZFRhcmdldClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgbGV0IHRhcmdldFxuICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuXG4gIGlmIChzZWxlY3Rvcikge1xuICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gIH1cblxuICBjb25zdCBjb25maWcgPSAkKHRhcmdldCkuZGF0YShEQVRBX0tFWSlcbiAgICA/ICd0b2dnbGUnIDoge1xuICAgICAgLi4uJCh0YXJnZXQpLmRhdGEoKSxcbiAgICAgIC4uLiQodGhpcykuZGF0YSgpXG4gICAgfVxuXG4gIGlmICh0aGlzLnRhZ05hbWUgPT09ICdBJyB8fCB0aGlzLnRhZ05hbWUgPT09ICdBUkVBJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNvbnN0ICR0YXJnZXQgPSAkKHRhcmdldCkub25lKEV2ZW50LlNIT1csIChzaG93RXZlbnQpID0+IHtcbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAvLyBPbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkdGFyZ2V0Lm9uZShFdmVudC5ISURERU4sICgpID0+IHtcbiAgICAgIGlmICgkKHRoaXMpLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgTW9kYWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGFyZ2V0KSwgY29uZmlnLCB0aGlzKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IE1vZGFsLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBNb2RhbFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IHRvb2xzL3Nhbml0aXplci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgdXJpQXR0cnMgPSBbXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2NpdGUnLFxuICAnaHJlZicsXG4gICdpdGVtdHlwZScsXG4gICdsb25nZGVzYycsXG4gICdwb3N0ZXInLFxuICAnc3JjJyxcbiAgJ3hsaW5rOmhyZWYnXG5dXG5cbmNvbnN0IEFSSUFfQVRUUklCVVRFX1BBVFRFUk4gPSAvXmFyaWEtW1xcdy1dKiQvaVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFdoaXRlbGlzdCA9IHtcbiAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgJyonOiBbJ2NsYXNzJywgJ2RpcicsICdpZCcsICdsYW5nJywgJ3JvbGUnLCBBUklBX0FUVFJJQlVURV9QQVRURVJOXSxcbiAgYTogWyd0YXJnZXQnLCAnaHJlZicsICd0aXRsZScsICdyZWwnXSxcbiAgYXJlYTogW10sXG4gIGI6IFtdLFxuICBicjogW10sXG4gIGNvbDogW10sXG4gIGNvZGU6IFtdLFxuICBkaXY6IFtdLFxuICBlbTogW10sXG4gIGhyOiBbXSxcbiAgaDE6IFtdLFxuICBoMjogW10sXG4gIGgzOiBbXSxcbiAgaDQ6IFtdLFxuICBoNTogW10sXG4gIGg2OiBbXSxcbiAgaTogW10sXG4gIGltZzogWydzcmMnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGUpOnxbXiY6Lz8jXSooPzpbLz8jXXwkKSkvZ2lcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGE6KD86aW1hZ2VcXC8oPzpibXB8Z2lmfGpwZWd8anBnfHBuZ3x0aWZmfHdlYnApfHZpZGVvXFwvKD86bXBlZ3xtcDR8b2dnfHdlYm0pfGF1ZGlvXFwvKD86bXAzfG9nYXxvZ2d8b3B1cykpO2Jhc2U2NCxbYS16MC05Ky9dKz0qJC9pXG5cbmZ1bmN0aW9uIGFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpIHtcbiAgY29uc3QgYXR0ck5hbWUgPSBhdHRyLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICBpZiAoYWxsb3dlZEF0dHJpYnV0ZUxpc3QuaW5kZXhPZihhdHRyTmFtZSkgIT09IC0xKSB7XG4gICAgaWYgKHVyaUF0dHJzLmluZGV4T2YoYXR0ck5hbWUpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oYXR0ci5ub2RlVmFsdWUubWF0Y2goU0FGRV9VUkxfUEFUVEVSTikgfHwgYXR0ci5ub2RlVmFsdWUubWF0Y2goREFUQV9VUkxfUEFUVEVSTikpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IHJlZ0V4cCA9IGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmZpbHRlcigoYXR0clJlZ2V4KSA9PiBhdHRyUmVnZXggaW5zdGFuY2VvZiBSZWdFeHApXG5cbiAgLy8gQ2hlY2sgaWYgYSByZWd1bGFyIGV4cHJlc3Npb24gdmFsaWRhdGVzIHRoZSBhdHRyaWJ1dGUuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gcmVnRXhwLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChhdHRyTmFtZS5tYXRjaChyZWdFeHBbaV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIHdoaXRlTGlzdCwgc2FuaXRpemVGbikge1xuICBpZiAodW5zYWZlSHRtbC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5zYWZlSHRtbFxuICB9XG5cbiAgaWYgKHNhbml0aXplRm4gJiYgdHlwZW9mIHNhbml0aXplRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGbih1bnNhZmVIdG1sKVxuICB9XG5cbiAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKVxuICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKVxuICBjb25zdCB3aGl0ZWxpc3RLZXlzID0gT2JqZWN0LmtleXMod2hpdGVMaXN0KVxuICBjb25zdCBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGVsID0gZWxlbWVudHNbaV1cbiAgICBjb25zdCBlbE5hbWUgPSBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAod2hpdGVsaXN0S2V5cy5pbmRleE9mKGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcblxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVMaXN0ID0gW10uc2xpY2UuY2FsbChlbC5hdHRyaWJ1dGVzKVxuICAgIGNvbnN0IHdoaXRlbGlzdGVkQXR0cmlidXRlcyA9IFtdLmNvbmNhdCh3aGl0ZUxpc3RbJyonXSB8fCBbXSwgd2hpdGVMaXN0W2VsTmFtZV0gfHwgW10pXG5cbiAgICBhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyLCB3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIERlZmF1bHRXaGl0ZWxpc3QsXG4gIHNhbml0aXplSHRtbFxufSBmcm9tICcuL3Rvb2xzL3Nhbml0aXplcidcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBQb3BwZXIgZnJvbSAncG9wcGVyLmpzJ1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgICAgPSAndG9vbHRpcCdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgICA9ICdicy50b29sdGlwJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgICA9ICQuZm5bTkFNRV1cbmNvbnN0IENMQVNTX1BSRUZJWCAgICAgICAgICA9ICdicy10b29sdGlwJ1xuY29uc3QgQlNDTFNfUFJFRklYX1JFR0VYICAgID0gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9XFxcXFMrYCwgJ2cnKVxuY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gWydzYW5pdGl6ZScsICd3aGl0ZUxpc3QnLCAnc2FuaXRpemVGbiddXG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb24gICAgICAgICA6ICdib29sZWFuJyxcbiAgdGVtcGxhdGUgICAgICAgICAgOiAnc3RyaW5nJyxcbiAgdGl0bGUgICAgICAgICAgICAgOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gIHRyaWdnZXIgICAgICAgICAgIDogJ3N0cmluZycsXG4gIGRlbGF5ICAgICAgICAgICAgIDogJyhudW1iZXJ8b2JqZWN0KScsXG4gIGh0bWwgICAgICAgICAgICAgIDogJ2Jvb2xlYW4nLFxuICBzZWxlY3RvciAgICAgICAgICA6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcGxhY2VtZW50ICAgICAgICAgOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBvZmZzZXQgICAgICAgICAgICA6ICcobnVtYmVyfHN0cmluZ3xmdW5jdGlvbiknLFxuICBjb250YWluZXIgICAgICAgICA6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICBmYWxsYmFja1BsYWNlbWVudCA6ICcoc3RyaW5nfGFycmF5KScsXG4gIGJvdW5kYXJ5ICAgICAgICAgIDogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBzYW5pdGl6ZSAgICAgICAgICA6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbiAgICAgICAgOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgd2hpdGVMaXN0ICAgICAgICAgOiAnb2JqZWN0JyxcbiAgcG9wcGVyQ29uZmlnICAgICAgOiAnKG51bGx8b2JqZWN0KSdcbn1cblxuY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgQVVUTyAgIDogJ2F1dG8nLFxuICBUT1AgICAgOiAndG9wJyxcbiAgUklHSFQgIDogJ3JpZ2h0JyxcbiAgQk9UVE9NIDogJ2JvdHRvbScsXG4gIExFRlQgICA6ICdsZWZ0J1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb24gICAgICAgICA6IHRydWUsXG4gIHRlbXBsYXRlICAgICAgICAgIDogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxuICB0cmlnZ2VyICAgICAgICAgICA6ICdob3ZlciBmb2N1cycsXG4gIHRpdGxlICAgICAgICAgICAgIDogJycsXG4gIGRlbGF5ICAgICAgICAgICAgIDogMCxcbiAgaHRtbCAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgc2VsZWN0b3IgICAgICAgICAgOiBmYWxzZSxcbiAgcGxhY2VtZW50ICAgICAgICAgOiAndG9wJyxcbiAgb2Zmc2V0ICAgICAgICAgICAgOiAwLFxuICBjb250YWluZXIgICAgICAgICA6IGZhbHNlLFxuICBmYWxsYmFja1BsYWNlbWVudCA6ICdmbGlwJyxcbiAgYm91bmRhcnkgICAgICAgICAgOiAnc2Nyb2xsUGFyZW50JyxcbiAgc2FuaXRpemUgICAgICAgICAgOiB0cnVlLFxuICBzYW5pdGl6ZUZuICAgICAgICA6IG51bGwsXG4gIHdoaXRlTGlzdCAgICAgICAgIDogRGVmYXVsdFdoaXRlbGlzdCxcbiAgcG9wcGVyQ29uZmlnICAgICAgOiBudWxsXG59XG5cbmNvbnN0IEhvdmVyU3RhdGUgPSB7XG4gIFNIT1cgOiAnc2hvdycsXG4gIE9VVCAgOiAnb3V0J1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERSAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSU5TRVJURUQgICA6IGBpbnNlcnRlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOICAgIDogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVCAgIDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUiA6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRSA6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIEZBREUgOiAnZmFkZScsXG4gIFNIT1cgOiAnc2hvdydcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIFRPT0xUSVAgICAgICAgOiAnLnRvb2x0aXAnLFxuICBUT09MVElQX0lOTkVSIDogJy50b29sdGlwLWlubmVyJyxcbiAgQVJST1cgICAgICAgICA6ICcuYXJyb3cnXG59XG5cbmNvbnN0IFRyaWdnZXIgPSB7XG4gIEhPVkVSICA6ICdob3ZlcicsXG4gIEZPQ1VTICA6ICdmb2N1cycsXG4gIENMSUNLICA6ICdjbGljaycsXG4gIE1BTlVBTCA6ICdtYW51YWwnXG59XG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvb2x0aXAge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy8pJylcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlXG4gICAgdGhpcy5faXNFbmFibGVkICAgICA9IHRydWVcbiAgICB0aGlzLl90aW1lb3V0ICAgICAgID0gMFxuICAgIHRoaXMuX2hvdmVyU3RhdGUgICAgPSAnJ1xuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fVxuICAgIHRoaXMuX3BvcHBlciAgICAgICAgPSBudWxsXG5cbiAgICAvLyBQcm90ZWN0ZWRcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5jb25maWcgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLnRpcCAgICAgPSBudWxsXG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIEVWRU5UX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgfVxuXG4gIHRvZ2dsZShldmVudCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgICBsZXQgY29udGV4dCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgICApXG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KVxuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2tcblxuICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5fbGVhdmUobnVsbCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fZW50ZXIobnVsbCwgdGhpcylcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuXG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSlcblxuICAgICQodGhpcy5lbGVtZW50KS5vZmYodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpXG4gICAgJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9mZignaGlkZS5icy5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy50aXApIHtcbiAgICAgICQodGhpcy50aXApLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5faXNFbmFibGVkICAgICA9IG51bGxcbiAgICB0aGlzLl90aW1lb3V0ICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2hvdmVyU3RhdGUgICAgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IG51bGxcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLmNvbmZpZyAgPSBudWxsXG4gICAgdGhpcy50aXAgICAgID0gbnVsbFxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKVxuICAgIGlmICh0aGlzLmlzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IFV0aWwuZmluZFNoYWRvd1Jvb3QodGhpcy5lbGVtZW50KVxuICAgICAgY29uc3QgaXNJblRoZURvbSA9ICQuY29udGFpbnMoXG4gICAgICAgIHNoYWRvd1Jvb3QgIT09IG51bGwgPyBzaGFkb3dSb290IDogdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICB0aGlzLmVsZW1lbnRcbiAgICAgIClcblxuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgdGlwICAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgICAgY29uc3QgdGlwSWQgPSBVdGlsLmdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpXG5cbiAgICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpXG5cbiAgICAgIHRoaXMuc2V0Q29udGVudCgpXG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5GQURFKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwbGFjZW1lbnQgID0gdHlwZW9mIHRoaXMuY29uZmlnLnBsYWNlbWVudCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHRoaXMuY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5lbGVtZW50KVxuICAgICAgICA6IHRoaXMuY29uZmlnLnBsYWNlbWVudFxuXG4gICAgICBjb25zdCBhdHRhY2htZW50ID0gdGhpcy5fZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpXG4gICAgICB0aGlzLmFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KVxuXG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9nZXRDb250YWluZXIoKVxuICAgICAgJCh0aXApLmRhdGEodGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcylcblxuICAgICAgaWYgKCEkLmNvbnRhaW5zKHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy50aXApKSB7XG4gICAgICAgICQodGlwKS5hcHBlbmRUbyhjb250YWluZXIpXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSU5TRVJURUQpXG5cbiAgICAgIHRoaXMuX3BvcHBlciA9IG5ldyBQb3BwZXIodGhpcy5lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSlcblxuICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9maXhUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2SG92ZXJTdGF0ZSA9IHRoaXMuX2hvdmVyU3RhdGVcbiAgICAgICAgdGhpcy5faG92ZXJTdGF0ZSAgICAgPSBudWxsXG5cbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTilcblxuICAgICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy50aXApXG5cbiAgICAgICAgJCh0aGlzLnRpcClcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGlkZShjYWxsYmFjaykge1xuICAgIGNvbnN0IHRpcCAgICAgICA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faG92ZXJTdGF0ZSAhPT0gSG92ZXJTdGF0ZS5TSE9XICYmIHRpcC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElEREVOKVxuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vZmYoJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuQ0xJQ0tdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuRk9DVVNdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuSE9WRVJdID0gZmFsc2VcblxuICAgIGlmICgkKHRoaXMudGlwKS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGlwKVxuXG4gICAgICAkKHRpcClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJ1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5zY2hlZHVsZVVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvdGVjdGVkXG5cbiAgaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldFRpdGxlKCkpXG4gIH1cblxuICBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmFkZENsYXNzKGAke0NMQVNTX1BSRUZJWH0tJHthdHRhY2htZW50fWApXG4gIH1cblxuICBnZXRUaXBFbGVtZW50KCkge1xuICAgIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF1cbiAgICByZXR1cm4gdGhpcy50aXBcbiAgfVxuXG4gIHNldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCQodGlwLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuVE9PTFRJUF9JTk5FUikpLCB0aGlzLmdldFRpdGxlKCkpXG4gICAgJCh0aXApLnJlbW92ZUNsYXNzKGAke0NsYXNzTmFtZS5GQURFfSAke0NsYXNzTmFtZS5TSE9XfWApXG4gIH1cblxuICBzZXRFbGVtZW50Q29udGVudCgkZWxlbWVudCwgY29udGVudCkge1xuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ29iamVjdCcgJiYgKGNvbnRlbnQubm9kZVR5cGUgfHwgY29udGVudC5qcXVlcnkpKSB7XG4gICAgICAvLyBDb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICAgIGlmICghJChjb250ZW50KS5wYXJlbnQoKS5pcygkZWxlbWVudCkpIHtcbiAgICAgICAgICAkZWxlbWVudC5lbXB0eSgpLmFwcGVuZChjb250ZW50KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZWxlbWVudC50ZXh0KCQoY29udGVudCkudGV4dCgpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuaHRtbCkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnNhbml0aXplKSB7XG4gICAgICAgIGNvbnRlbnQgPSBzYW5pdGl6ZUh0bWwoY29udGVudCwgdGhpcy5jb25maWcud2hpdGVMaXN0LCB0aGlzLmNvbmZpZy5zYW5pdGl6ZUZuKVxuICAgICAgfVxuXG4gICAgICAkZWxlbWVudC5odG1sKGNvbnRlbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgICRlbGVtZW50LnRleHQoY29udGVudClcbiAgICB9XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBsZXQgdGl0bGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJylcblxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHRpdGxlID0gdHlwZW9mIHRoaXMuY29uZmlnLnRpdGxlID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdGhpcy5jb25maWcudGl0bGUuY2FsbCh0aGlzLmVsZW1lbnQpXG4gICAgICAgIDogdGhpcy5jb25maWcudGl0bGVcbiAgICB9XG5cbiAgICByZXR1cm4gdGl0bGVcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKSxcbiAgICAgICAgZmxpcDoge1xuICAgICAgICAgIGJlaGF2aW9yOiB0aGlzLmNvbmZpZy5mYWxsYmFja1BsYWNlbWVudFxuICAgICAgICB9LFxuICAgICAgICBhcnJvdzoge1xuICAgICAgICAgIGVsZW1lbnQ6IFNlbGVjdG9yLkFSUk9XXG4gICAgICAgIH0sXG4gICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiB0aGlzLmNvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25DcmVhdGU6IChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLm9yaWdpbmFsUGxhY2VtZW50ICE9PSBkYXRhLnBsYWNlbWVudCkge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25VcGRhdGU6IChkYXRhKSA9PiB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzQ29uZmlnLFxuICAgICAgLi4udGhpcy5jb25maWcucG9wcGVyQ29uZmlnXG4gICAgfVxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB7fVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9mZnNldC5mbiA9IChkYXRhKSA9PiB7XG4gICAgICAgIGRhdGEub2Zmc2V0cyA9IHtcbiAgICAgICAgICAuLi5kYXRhLm9mZnNldHMsXG4gICAgICAgICAgLi4udGhpcy5jb25maWcub2Zmc2V0KGRhdGEub2Zmc2V0cywgdGhpcy5lbGVtZW50KSB8fCB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0Lm9mZnNldCA9IHRoaXMuY29uZmlnLm9mZnNldFxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRDb250YWluZXIoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5XG4gICAgfVxuXG4gICAgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuY29uZmlnLmNvbnRhaW5lcikpIHtcbiAgICAgIHJldHVybiAkKHRoaXMuY29uZmlnLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICByZXR1cm4gJChkb2N1bWVudCkuZmluZCh0aGlzLmNvbmZpZy5jb250YWluZXIpXG4gIH1cblxuICBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV1cbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLmNvbmZpZy50cmlnZ2VyLnNwbGl0KCcgJylcblxuICAgIHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS5vbihcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLFxuICAgICAgICAgIHRoaXMuY29uZmlnLnNlbGVjdG9yLFxuICAgICAgICAgIChldmVudCkgPT4gdGhpcy50b2dnbGUoZXZlbnQpXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPT0gVHJpZ2dlci5NQU5VQUwpIHtcbiAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRyaWdnZXIuSE9WRVJcbiAgICAgICAgICA/IHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VFTlRFUlxuICAgICAgICAgIDogdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUlxuICAgICAgICAgID8gdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFXG4gICAgICAgICAgOiB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUXG5cbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpXG4gICAgICAgICAgLm9uKFxuICAgICAgICAgICAgZXZlbnRJbixcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnNlbGVjdG9yLFxuICAgICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLl9lbnRlcihldmVudClcbiAgICAgICAgICApXG4gICAgICAgICAgLm9uKFxuICAgICAgICAgICAgZXZlbnRPdXQsXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zZWxlY3RvcixcbiAgICAgICAgICAgIChldmVudCkgPT4gdGhpcy5fbGVhdmUoZXZlbnQpXG4gICAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vbihcbiAgICAgICdoaWRlLmJzLm1vZGFsJyxcbiAgICAgIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXJcbiAgICApXG5cbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAuLi50aGlzLmNvbmZpZyxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maXhUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgX2ZpeFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlVHlwZSA9IHR5cGVvZiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJylcblxuICAgIGlmICh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8IHRpdGxlVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdkYXRhLW9yaWdpbmFsLXRpdGxlJyxcbiAgICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnJ1xuICAgICAgKVxuXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsICcnKVxuICAgIH1cbiAgfVxuXG4gIF9lbnRlcihldmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgKVxuICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUcmlnZ2VyLkZPQ1VTIDogVHJpZ2dlci5IT1ZFUlxuICAgICAgXSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoJChjb250ZXh0LmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpIHx8IGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuU0hPVykge1xuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuU0hPV1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XXG5cbiAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KSB7XG4gICAgICBjb250ZXh0LnNob3coKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuU0hPVykge1xuICAgICAgICBjb250ZXh0LnNob3coKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpXG4gIH1cblxuICBfbGVhdmUoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KVxuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgIClcbiAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KVxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltcbiAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRyaWdnZXIuRk9DVVMgOiBUcmlnZ2VyLkhPVkVSXG4gICAgICBdID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLk9VVFxuXG4gICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSkge1xuICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLk9VVCkge1xuICAgICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgaW4gdGhpcy5fYWN0aXZlVHJpZ2dlcikge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSAkKHRoaXMuZWxlbWVudCkuZGF0YSgpXG5cbiAgICBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcylcbiAgICAgIC5mb3JFYWNoKChkYXRhQXR0cikgPT4ge1xuICAgICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmluZGV4T2YoZGF0YUF0dHIpICE9PSAtMSkge1xuICAgICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cl1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLmRhdGFBdHRyaWJ1dGVzLFxuICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKFxuICAgICAgTkFNRSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGVcbiAgICApXG5cbiAgICBpZiAoY29uZmlnLnNhbml0aXplKSB7XG4gICAgICBjb25maWcudGVtcGxhdGUgPSBzYW5pdGl6ZUh0bWwoY29uZmlnLnRlbXBsYXRlLCBjb25maWcud2hpdGVMaXN0LCBjb25maWcuc2FuaXRpemVGbilcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge31cblxuICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLmNvbmZpZ1trZXldKSB7XG4gICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmNvbmZpZ1trZXldXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcbiAgICBjb25zdCB0YWJDbGFzcyA9ICR0aXAuYXR0cignY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCkge1xuICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSlcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKHBvcHBlckRhdGEpIHtcbiAgICBjb25zdCBwb3BwZXJJbnN0YW5jZSA9IHBvcHBlckRhdGEuaW5zdGFuY2VcbiAgICB0aGlzLnRpcCA9IHBvcHBlckluc3RhbmNlLnBvcHBlclxuICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKVxuICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKHRoaXMuX2dldEF0dGFjaG1lbnQocG9wcGVyRGF0YS5wbGFjZW1lbnQpKVxuICB9XG5cbiAgX2ZpeFRyYW5zaXRpb24oKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCBpbml0Q29uZmlnQW5pbWF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0aW9uXG5cbiAgICBpZiAodGlwLmdldEF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnKSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5GQURFKVxuICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5oaWRlKClcbiAgICB0aGlzLnNob3coKVxuICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGluaXRDb25maWdBbmltYXRpb25cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9vbHRpcFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiBwb3BvdmVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAncG9wb3ZlcidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLnBvcG92ZXInXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5jb25zdCBDTEFTU19QUkVGSVggICAgICAgID0gJ2JzLXBvcG92ZXInXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggID0gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9XFxcXFMrYCwgJ2cnKVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHQsXG4gIHBsYWNlbWVudCA6ICdyaWdodCcsXG4gIHRyaWdnZXIgICA6ICdjbGljaycsXG4gIGNvbnRlbnQgICA6ICcnLFxuICB0ZW1wbGF0ZSAgOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+PC9kaXY+J1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0VHlwZSxcbiAgY29udGVudCA6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIEZBREUgOiAnZmFkZScsXG4gIFNIT1cgOiAnc2hvdydcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIFRJVExFICAgOiAnLnBvcG92ZXItaGVhZGVyJyxcbiAgQ09OVEVOVCA6ICcucG9wb3Zlci1ib2R5J1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERSAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSU5TRVJURUQgICA6IGBpbnNlcnRlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOICAgIDogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVCAgIDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUiA6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRSA6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgUG9wb3ZlciBleHRlbmRzIFRvb2x0aXAge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gRVZFTlRfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gT3ZlcnJpZGVzXG5cbiAgaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpIHx8IHRoaXMuX2dldENvbnRlbnQoKVxuICB9XG5cbiAgYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5hZGRDbGFzcyhgJHtDTEFTU19QUkVGSVh9LSR7YXR0YWNobWVudH1gKVxuICB9XG5cbiAgZ2V0VGlwRWxlbWVudCgpIHtcbiAgICB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICQodGhpcy5jb25maWcudGVtcGxhdGUpWzBdXG4gICAgcmV0dXJuIHRoaXMudGlwXG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIGNvbnN0ICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKVxuXG4gICAgLy8gV2UgdXNlIGFwcGVuZCBmb3IgaHRtbCBvYmplY3RzIHRvIG1haW50YWluIGpzIGV2ZW50c1xuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNlbGVjdG9yLlRJVExFKSwgdGhpcy5nZXRUaXRsZSgpKVxuICAgIGxldCBjb250ZW50ID0gdGhpcy5fZ2V0Q29udGVudCgpXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb250ZW50ID0gY29udGVudC5jYWxsKHRoaXMuZWxlbWVudClcbiAgICB9XG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkdGlwLmZpbmQoU2VsZWN0b3IuQ09OVEVOVCksIGNvbnRlbnQpXG5cbiAgICAkdGlwLnJlbW92ZUNsYXNzKGAke0NsYXNzTmFtZS5GQURFfSAke0NsYXNzTmFtZS5TSE9XfWApXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpIHx8XG4gICAgICB0aGlzLmNvbmZpZy5jb250ZW50XG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcbiAgICBjb25zdCB0YWJDbGFzcyA9ICR0aXAuYXR0cignY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICR0aXAucmVtb3ZlQ2xhc3ModGFiQ2xhc3Muam9pbignJykpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgUG9wb3Zlcih0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBQb3BvdmVyLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBQb3BvdmVyXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IHNjcm9sbHNweS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgPSAnc2Nyb2xsc3B5J1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLnNjcm9sbHNweSdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQgOiAxMCxcbiAgbWV0aG9kIDogJ2F1dG8nLFxuICB0YXJnZXQgOiAnJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0IDogJ251bWJlcicsXG4gIG1ldGhvZCA6ICdzdHJpbmcnLFxuICB0YXJnZXQgOiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEFDVElWQVRFICAgICAgOiBgYWN0aXZhdGUke0VWRU5UX0tFWX1gLFxuICBTQ1JPTEwgICAgICAgIDogYHNjcm9sbCR7RVZFTlRfS0VZfWAsXG4gIExPQURfREFUQV9BUEkgOiBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBEUk9QRE9XTl9JVEVNIDogJ2Ryb3Bkb3duLWl0ZW0nLFxuICBEUk9QRE9XTl9NRU5VIDogJ2Ryb3Bkb3duLW1lbnUnLFxuICBBQ1RJVkUgICAgICAgIDogJ2FjdGl2ZSdcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERBVEFfU1BZICAgICAgICA6ICdbZGF0YS1zcHk9XCJzY3JvbGxcIl0nLFxuICBBQ1RJVkUgICAgICAgICAgOiAnLmFjdGl2ZScsXG4gIE5BVl9MSVNUX0dST1VQICA6ICcubmF2LCAubGlzdC1ncm91cCcsXG4gIE5BVl9MSU5LUyAgICAgICA6ICcubmF2LWxpbmsnLFxuICBOQVZfSVRFTVMgICAgICAgOiAnLm5hdi1pdGVtJyxcbiAgTElTVF9JVEVNUyAgICAgIDogJy5saXN0LWdyb3VwLWl0ZW0nLFxuICBEUk9QRE9XTiAgICAgICAgOiAnLmRyb3Bkb3duJyxcbiAgRFJPUERPV05fSVRFTVMgIDogJy5kcm9wZG93bi1pdGVtJyxcbiAgRFJPUERPV05fVE9HR0xFIDogJy5kcm9wZG93bi10b2dnbGUnXG59XG5cbmNvbnN0IE9mZnNldE1ldGhvZCA9IHtcbiAgT0ZGU0VUICAgOiAnb2Zmc2V0JyxcbiAgUE9TSVRJT04gOiAncG9zaXRpb24nXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBTY3JvbGxTcHkge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgID0gZWxlbWVudFxuICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQgPSBlbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJyA/IHdpbmRvdyA6IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9zZWxlY3RvciAgICAgID0gYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTZWxlY3Rvci5OQVZfTElOS1N9LGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NlbGVjdG9yLkxJU1RfSVRFTVN9LGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NlbGVjdG9yLkRST1BET1dOX0lURU1TfWBcbiAgICB0aGlzLl9vZmZzZXRzICAgICAgID0gW11cbiAgICB0aGlzLl90YXJnZXRzICAgICAgID0gW11cbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCAgPSAwXG5cbiAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLm9uKEV2ZW50LlNDUk9MTCwgKGV2ZW50KSA9PiB0aGlzLl9wcm9jZXNzKGV2ZW50KSlcblxuICAgIHRoaXMucmVmcmVzaCgpXG4gICAgdGhpcy5fcHJvY2VzcygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgYXV0b01ldGhvZCA9IHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHRoaXMuX3Njcm9sbEVsZW1lbnQud2luZG93XG4gICAgICA/IE9mZnNldE1ldGhvZC5PRkZTRVQgOiBPZmZzZXRNZXRob2QuUE9TSVRJT05cblxuICAgIGNvbnN0IG9mZnNldE1ldGhvZCA9IHRoaXMuX2NvbmZpZy5tZXRob2QgPT09ICdhdXRvJ1xuICAgICAgPyBhdXRvTWV0aG9kIDogdGhpcy5fY29uZmlnLm1ldGhvZFxuXG4gICAgY29uc3Qgb2Zmc2V0QmFzZSA9IG9mZnNldE1ldGhvZCA9PT0gT2Zmc2V0TWV0aG9kLlBPU0lUSU9OXG4gICAgICA/IHRoaXMuX2dldFNjcm9sbFRvcCgpIDogMFxuXG4gICAgdGhpcy5fb2Zmc2V0cyA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyA9IFtdXG5cbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuXG4gICAgY29uc3QgdGFyZ2V0cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZWxlY3RvcikpXG5cbiAgICB0YXJnZXRzXG4gICAgICAubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGxldCB0YXJnZXRcbiAgICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgICAgICBpZiAodGFyZ2V0U2VsZWN0b3IpIHtcbiAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIGNvbnN0IHRhcmdldEJDUiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIGlmICh0YXJnZXRCQ1Iud2lkdGggfHwgdGFyZ2V0QkNSLmhlaWdodCkge1xuICAgICAgICAgICAgLy8gVE9ETyAoZmF0KTogcmVtb3ZlIHNrZXRjaCByZWxpYW5jZSBvbiBqUXVlcnkgcG9zaXRpb24vb2Zmc2V0XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAkKHRhcmdldClbb2Zmc2V0TWV0aG9kXSgpLnRvcCArIG9mZnNldEJhc2UsXG4gICAgICAgICAgICAgIHRhcmdldFNlbGVjdG9yXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSlcbiAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHRoaXMuX29mZnNldHMucHVzaChpdGVtWzBdKVxuICAgICAgICB0aGlzLl90YXJnZXRzLnB1c2goaXRlbVsxXSlcbiAgICAgIH0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLm9mZihFVkVOVF9LRVkpXG5cbiAgICB0aGlzLl9lbGVtZW50ICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9zZWxlY3RvciAgICAgID0gbnVsbFxuICAgIHRoaXMuX29mZnNldHMgICAgICAgPSBudWxsXG4gICAgdGhpcy5fdGFyZ2V0cyAgICAgICA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCAgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50YXJnZXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgaWQgPSAkKGNvbmZpZy50YXJnZXQpLmF0dHIoJ2lkJylcbiAgICAgIGlmICghaWQpIHtcbiAgICAgICAgaWQgPSBVdGlsLmdldFVJRChOQU1FKVxuICAgICAgICAkKGNvbmZpZy50YXJnZXQpLmF0dHIoJ2lkJywgaWQpXG4gICAgICB9XG4gICAgICBjb25maWcudGFyZ2V0ID0gYCMke2lkfWBcbiAgICB9XG5cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldFNjcm9sbFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93XG4gICAgICA/IHRoaXMuX3Njcm9sbEVsZW1lbnQucGFnZVlPZmZzZXQgOiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbFRvcFxuICB9XG5cbiAgX2dldFNjcm9sbEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgTWF0aC5tYXgoXG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHRcbiAgICApXG4gIH1cblxuICBfZ2V0T2Zmc2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3dcbiAgICAgID8gd2luZG93LmlubmVySGVpZ2h0IDogdGhpcy5fc2Nyb2xsRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgfVxuXG4gIF9wcm9jZXNzKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCAgICA9IHRoaXMuX2dldFNjcm9sbFRvcCgpICsgdGhpcy5fY29uZmlnLm9mZnNldFxuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG4gICAgY29uc3QgbWF4U2Nyb2xsICAgID0gdGhpcy5fY29uZmlnLm9mZnNldCArXG4gICAgICBzY3JvbGxIZWlnaHQgLVxuICAgICAgdGhpcy5fZ2V0T2Zmc2V0SGVpZ2h0KClcblxuICAgIGlmICh0aGlzLl9zY3JvbGxIZWlnaHQgIT09IHNjcm9sbEhlaWdodCkge1xuICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsVG9wID49IG1heFNjcm9sbCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0c1t0aGlzLl90YXJnZXRzLmxlbmd0aCAtIDFdXG5cbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICYmIHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbMF0gJiYgdGhpcy5fb2Zmc2V0c1swXSA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICAgIHRoaXMuX2NsZWFyKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldExlbmd0aCA9IHRoaXMuX29mZnNldHMubGVuZ3RoXG4gICAgZm9yIChsZXQgaSA9IG9mZnNldExlbmd0aDsgaS0tOykge1xuICAgICAgY29uc3QgaXNBY3RpdmVUYXJnZXQgPSB0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRoaXMuX3RhcmdldHNbaV0gJiZcbiAgICAgICAgICBzY3JvbGxUb3AgPj0gdGhpcy5fb2Zmc2V0c1tpXSAmJlxuICAgICAgICAgICh0eXBlb2YgdGhpcy5fb2Zmc2V0c1tpICsgMV0gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAgIHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbaSArIDFdKVxuXG4gICAgICBpZiAoaXNBY3RpdmVUYXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fdGFyZ2V0c1tpXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfYWN0aXZhdGUodGFyZ2V0KSB7XG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICB0aGlzLl9jbGVhcigpXG5cbiAgICBjb25zdCBxdWVyaWVzID0gdGhpcy5fc2VsZWN0b3JcbiAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAubWFwKChzZWxlY3RvcikgPT4gYCR7c2VsZWN0b3J9W2RhdGEtdGFyZ2V0PVwiJHt0YXJnZXR9XCJdLCR7c2VsZWN0b3J9W2hyZWY9XCIke3RhcmdldH1cIl1gKVxuXG4gICAgY29uc3QgJGxpbmsgPSAkKFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyaWVzLmpvaW4oJywnKSkpKVxuXG4gICAgaWYgKCRsaW5rLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgJGxpbmsuY2xvc2VzdChTZWxlY3Rvci5EUk9QRE9XTikuZmluZChTZWxlY3Rvci5EUk9QRE9XTl9UT0dHTEUpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAkbGluay5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmsgYXMgYWN0aXZlXG4gICAgICAkbGluay5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICAkbGluay5wYXJlbnRzKFNlbGVjdG9yLk5BVl9MSVNUX0dST1VQKS5wcmV2KGAke1NlbGVjdG9yLk5BVl9MSU5LU30sICR7U2VsZWN0b3IuTElTVF9JVEVNU31gKS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVuIC5uYXYtbGluayBpcyBpbnNpZGUgLm5hdi1pdGVtXG4gICAgICAkbGluay5wYXJlbnRzKFNlbGVjdG9yLk5BVl9MSVNUX0dST1VQKS5wcmV2KFNlbGVjdG9yLk5BVl9JVEVNUykuY2hpbGRyZW4oU2VsZWN0b3IuTkFWX0xJTktTKS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgIH1cblxuICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkudHJpZ2dlcihFdmVudC5BQ1RJVkFURSwge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGFyZ2V0XG4gICAgfSlcbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3IpKVxuICAgICAgLmZpbHRlcigobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkFDVElWRSkpXG4gICAgICAuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5BQ1RJVkUpKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgU2Nyb2xsU3B5KHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKHdpbmRvdykub24oRXZlbnQuTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBzY3JvbGxTcHlzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkRBVEFfU1BZKSlcbiAgY29uc3Qgc2Nyb2xsU3B5c0xlbmd0aCA9IHNjcm9sbFNweXMubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IHNjcm9sbFNweXNMZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCAkc3B5ID0gJChzY3JvbGxTcHlzW2ldKVxuICAgIFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJHNweSwgJHNweS5kYXRhKCkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFNjcm9sbFNweVxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTcHlcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICd0YWInXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnYnMudGFiJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRFJPUERPV05fTUVOVSA6ICdkcm9wZG93bi1tZW51JyxcbiAgQUNUSVZFICAgICAgICA6ICdhY3RpdmUnLFxuICBESVNBQkxFRCAgICAgIDogJ2Rpc2FibGVkJyxcbiAgRkFERSAgICAgICAgICA6ICdmYWRlJyxcbiAgU0hPVyAgICAgICAgICA6ICdzaG93J1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgRFJPUERPV04gICAgICAgICAgICAgIDogJy5kcm9wZG93bicsXG4gIE5BVl9MSVNUX0dST1VQICAgICAgICA6ICcubmF2LCAubGlzdC1ncm91cCcsXG4gIEFDVElWRSAgICAgICAgICAgICAgICA6ICcuYWN0aXZlJyxcbiAgQUNUSVZFX1VMICAgICAgICAgICAgIDogJz4gbGkgPiAuYWN0aXZlJyxcbiAgREFUQV9UT0dHTEUgICAgICAgICAgIDogJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtdG9nZ2xlPVwibGlzdFwiXScsXG4gIERST1BET1dOX1RPR0dMRSAgICAgICA6ICcuZHJvcGRvd24tdG9nZ2xlJyxcbiAgRFJPUERPV05fQUNUSVZFX0NISUxEIDogJz4gLmRyb3Bkb3duLW1lbnUgLmFjdGl2ZSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRhYiB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlICYmXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuQUNUSVZFKSB8fFxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB0YXJnZXRcbiAgICBsZXQgcHJldmlvdXNcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9ICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdChTZWxlY3Rvci5OQVZfTElTVF9HUk9VUClbMF1cbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKGxpc3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBpdGVtU2VsZWN0b3IgPSBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ09MJyA/IFNlbGVjdG9yLkFDVElWRV9VTCA6IFNlbGVjdG9yLkFDVElWRVxuICAgICAgcHJldmlvdXMgPSAkLm1ha2VBcnJheSgkKGxpc3RFbGVtZW50KS5maW5kKGl0ZW1TZWxlY3RvcikpXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfSlcblxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICB9KVxuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAkKHByZXZpb3VzKS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fFxuICAgICAgICBoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmF0ZShcbiAgICAgIHRoaXMuX2VsZW1lbnQsXG4gICAgICBsaXN0RWxlbWVudFxuICAgIClcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGlkZGVuRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJRERFTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KVxuXG4gICAgICBjb25zdCBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgfSlcblxuICAgICAgJChwcmV2aW91cykudHJpZ2dlcihoaWRkZW5FdmVudClcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldCwgdGFyZ2V0LnBhcmVudE5vZGUsIGNvbXBsZXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWN0aXZhdGUoZWxlbWVudCwgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRzID0gY29udGFpbmVyICYmIChjb250YWluZXIubm9kZU5hbWUgPT09ICdVTCcgfHwgY29udGFpbmVyLm5vZGVOYW1lID09PSAnT0wnKVxuICAgICAgPyAkKGNvbnRhaW5lcikuZmluZChTZWxlY3Rvci5BQ1RJVkVfVUwpXG4gICAgICA6ICQoY29udGFpbmVyKS5jaGlsZHJlbihTZWxlY3Rvci5BQ1RJVkUpXG5cbiAgICBjb25zdCBhY3RpdmUgPSBhY3RpdmVFbGVtZW50c1swXVxuICAgIGNvbnN0IGlzVHJhbnNpdGlvbmluZyA9IGNhbGxiYWNrICYmIChhY3RpdmUgJiYgJChhY3RpdmUpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSlcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHRoaXMuX3RyYW5zaXRpb25Db21wbGV0ZShcbiAgICAgIGVsZW1lbnQsXG4gICAgICBhY3RpdmUsXG4gICAgICBjYWxsYmFja1xuICAgIClcblxuICAgIGlmIChhY3RpdmUgJiYgaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZSlcblxuICAgICAgJChhY3RpdmUpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaykge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICQoYWN0aXZlKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuXG4gICAgICBjb25zdCBkcm9wZG93bkNoaWxkID0gJChhY3RpdmUucGFyZW50Tm9kZSkuZmluZChcbiAgICAgICAgU2VsZWN0b3IuRFJPUERPV05fQUNUSVZFX0NISUxEXG4gICAgICApWzBdXG5cbiAgICAgIGlmIChkcm9wZG93bkNoaWxkKSB7XG4gICAgICAgICQoZHJvcGRvd25DaGlsZCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgICAgYWN0aXZlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBVdGlsLnJlZmxvdyhlbGVtZW50KVxuXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5TSE9XKVxuICAgIH1cblxuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgJChlbGVtZW50LnBhcmVudE5vZGUpLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QRE9XTl9NRU5VKSkge1xuICAgICAgY29uc3QgZHJvcGRvd25FbGVtZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KFNlbGVjdG9yLkRST1BET1dOKVswXVxuXG4gICAgICBpZiAoZHJvcGRvd25FbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duVG9nZ2xlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZHJvcGRvd25FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuRFJPUERPV05fVE9HR0xFKSlcblxuICAgICAgICAkKGRyb3Bkb3duVG9nZ2xlTGlzdCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSA9ICR0aGlzLmRhdGEoREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRhYih0aGlzKVxuICAgICAgICAkdGhpcy5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpXG4gIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBUYWIuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdzaG93JylcbiAgfSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFRhYi5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVGFiXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFRhYi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiB0b2FzdC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgPSAndG9hc3QnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnYnMudG9hc3QnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBFdmVudCA9IHtcbiAgQ0xJQ0tfRElTTUlTUyA6IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgSElERSAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIEZBREUgICAgOiAnZmFkZScsXG4gIEhJREUgICAgOiAnaGlkZScsXG4gIFNIT1cgICAgOiAnc2hvdycsXG4gIFNIT1dJTkcgOiAnc2hvd2luZydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbiA6ICdib29sZWFuJyxcbiAgYXV0b2hpZGUgIDogJ2Jvb2xlYW4nLFxuICBkZWxheSAgICAgOiAnbnVtYmVyJ1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb24gOiB0cnVlLFxuICBhdXRvaGlkZSAgOiB0cnVlLFxuICBkZWxheSAgICAgOiA1MDBcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERBVEFfRElTTUlTUyA6ICdbZGF0YS1kaXNtaXNzPVwidG9hc3RcIl0nXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUb2FzdCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgc2hvdygpIHtcbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1cpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLkZBREUpXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLlNIT1dJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5TSE9XTilcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuSElERSlcbiAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuU0hPV0lORylcbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2Nsb3NlKClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuU0hPVylcbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudC5DTElDS19ESVNNSVNTKVxuXG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnICA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi4kKHRoaXMuX2VsZW1lbnQpLmRhdGEoKSxcbiAgICAgIC4uLnR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9XG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoXG4gICAgICBOQU1FLFxuICAgICAgY29uZmlnLFxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZVxuICAgIClcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgJCh0aGlzLl9lbGVtZW50KS5vbihcbiAgICAgIEV2ZW50LkNMSUNLX0RJU01JU1MsXG4gICAgICBTZWxlY3Rvci5EQVRBX0RJU01JU1MsXG4gICAgICAoKSA9PiB0aGlzLmhpZGUoKVxuICAgIClcbiAgfVxuXG4gIF9jbG9zZSgpIHtcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuSElERSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5TSE9XKVxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSAgICAgICA9ICRlbGVtZW50LmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnICA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUb2FzdCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdICAgICAgICAgICAgID0gVG9hc3QuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvYXN0XG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBUb2FzdC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0XG4iLCJleHBvcnQgZGVmYXVsdCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnO1xuIiwiaW1wb3J0IGlzQnJvd3NlciBmcm9tICcuL2lzQnJvd3Nlcic7XG5cbmNvbnN0IHRpbWVvdXREdXJhdGlvbiA9IChmdW5jdGlvbigpe1xuICBjb25zdCBsb25nZXJUaW1lb3V0QnJvd3NlcnMgPSBbJ0VkZ2UnLCAnVHJpZGVudCcsICdGaXJlZm94J107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9uZ2VyVGltZW91dEJyb3dzZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGlzQnJvd3NlciAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YobG9uZ2VyVGltZW91dEJyb3dzZXJzW2ldKSA+PSAwKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDA7XG59KCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWljcm90YXNrRGVib3VuY2UoZm4pIHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxlZCA9IHRydWVcbiAgICB3aW5kb3cuUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBjYWxsZWQgPSBmYWxzZVxuICAgICAgZm4oKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tEZWJvdW5jZShmbikge1xuICBsZXQgc2NoZWR1bGVkID0gZmFsc2U7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKCFzY2hlZHVsZWQpIHtcbiAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIGZuKCk7XG4gICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3Qgc3VwcG9ydHNNaWNyb1Rhc2tzID0gaXNCcm93c2VyICYmIHdpbmRvdy5Qcm9taXNlXG5cblxuLyoqXG4qIENyZWF0ZSBhIGRlYm91bmNlZCB2ZXJzaW9uIG9mIGEgbWV0aG9kLCB0aGF0J3MgYXN5bmNocm9ub3VzbHkgZGVmZXJyZWRcbiogYnV0IGNhbGxlZCBpbiB0aGUgbWluaW11bSB0aW1lIHBvc3NpYmxlLlxuKlxuKiBAbWV0aG9kXG4qIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiogQGFyZ3VtZW50IHtGdW5jdGlvbn0gZm5cbiogQHJldHVybnMge0Z1bmN0aW9ufVxuKi9cbmV4cG9ydCBkZWZhdWx0IChzdXBwb3J0c01pY3JvVGFza3NcbiAgPyBtaWNyb3Rhc2tEZWJvdW5jZVxuICA6IHRhc2tEZWJvdW5jZSk7XG4iLCIvKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGZ1bmN0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FueX0gZnVuY3Rpb25Ub0NoZWNrIC0gdmFyaWFibGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG86IGlzIGEgZnVuY3Rpb24/XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuY3Rpb25Ub0NoZWNrKSB7XG4gIGNvbnN0IGdldFR5cGUgPSB7fTtcbiAgcmV0dXJuIChcbiAgICBmdW5jdGlvblRvQ2hlY2sgJiZcbiAgICBnZXRUeXBlLnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuICApO1xufVxuIiwiLyoqXG4gKiBHZXQgQ1NTIGNvbXB1dGVkIHByb3BlcnR5IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCBwcm9wZXJ0eSkge1xuICBpZiAoZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICBjb25zdCB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIGNvbnN0IGNzcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICByZXR1cm4gcHJvcGVydHkgPyBjc3NbcHJvcGVydHldIDogY3NzO1xufVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBwYXJlbnROb2RlIG9yIHRoZSBob3N0IG9mIHRoZSBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlIHx8IGVsZW1lbnQuaG9zdDtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSAnLi9nZXRQYXJlbnROb2RlJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGxpbmcgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBzY3JvbGwgcGFyZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIFJldHVybiBib2R5LCBgZ2V0U2Nyb2xsYCB3aWxsIHRha2UgY2FyZSB0byBnZXQgdGhlIGNvcnJlY3QgYHNjcm9sbFRvcGAgZnJvbSBpdFxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keVxuICB9XG5cbiAgc3dpdGNoIChlbGVtZW50Lm5vZGVOYW1lKSB7XG4gICAgY2FzZSAnSFRNTCc6XG4gICAgY2FzZSAnQk9EWSc6XG4gICAgICByZXR1cm4gZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHlcbiAgICBjYXNlICcjZG9jdW1lbnQnOlxuICAgICAgcmV0dXJuIGVsZW1lbnQuYm9keVxuICB9XG5cbiAgLy8gRmlyZWZveCB3YW50IHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIGNvbnN0IHsgb3ZlcmZsb3csIG92ZXJmbG93WCwgb3ZlcmZsb3dZIH0gPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCk7XG4gIGlmICgvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKSkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbn1cbiIsIi8qKlxuICogUmV0dXJucyB0aGUgcmVmZXJlbmNlIG5vZGUgb2YgdGhlIHJlZmVyZW5jZSBvYmplY3QsIG9yIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGl0c2VsZi5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IHJlZmVyZW5jZSAtIHRoZSByZWZlcmVuY2UgZWxlbWVudCAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcGFyZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSB7XG4gIHJldHVybiByZWZlcmVuY2UgJiYgcmVmZXJlbmNlLnJlZmVyZW5jZU5vZGUgPyByZWZlcmVuY2UucmVmZXJlbmNlTm9kZSA6IHJlZmVyZW5jZTtcbn1cbiIsImltcG9ydCBpc0Jyb3dzZXIgZnJvbSAnLi9pc0Jyb3dzZXInO1xuXG5jb25zdCBpc0lFMTEgPSBpc0Jyb3dzZXIgJiYgISEod2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSk7XG5jb25zdCBpc0lFMTAgPSBpc0Jyb3dzZXIgJiYgL01TSUUgMTAvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgYnJvd3NlciBpcyBJbnRlcm5ldCBFeHBsb3JlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtOdW1iZXJ9IHZlcnNpb24gdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSBpc0lFXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzSUUodmVyc2lvbikge1xuICBpZiAodmVyc2lvbiA9PT0gMTEpIHtcbiAgICByZXR1cm4gaXNJRTExO1xuICB9XG4gIGlmICh2ZXJzaW9uID09PSAxMCkge1xuICAgIHJldHVybiBpc0lFMTA7XG4gIH1cbiAgcmV0dXJuIGlzSUUxMSB8fCBpc0lFMTA7XG59XG4iLCJpbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCBpc0lFIGZyb20gJy4vaXNJRSc7XG4vKipcbiAqIFJldHVybnMgdGhlIG9mZnNldCBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IG9mZnNldCBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIGNvbnN0IG5vT2Zmc2V0UGFyZW50ID0gaXNJRSgxMCkgPyBkb2N1bWVudC5ib2R5IDogbnVsbDtcblxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICBsZXQgb2Zmc2V0UGFyZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgbnVsbDtcbiAgLy8gU2tpcCBoaWRkZW4gZWxlbWVudHMgd2hpY2ggZG9uJ3QgaGF2ZSBhbiBvZmZzZXRQYXJlbnRcbiAgd2hpbGUgKG9mZnNldFBhcmVudCA9PT0gbm9PZmZzZXRQYXJlbnQgJiYgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSAoZWxlbWVudCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRQYXJlbnQ7XG4gIH1cblxuICBjb25zdCBub2RlTmFtZSA9IG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQubm9kZU5hbWU7XG5cbiAgaWYgKCFub2RlTmFtZSB8fCBub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICAvLyAub2Zmc2V0UGFyZW50IHdpbGwgcmV0dXJuIHRoZSBjbG9zZXN0IFRILCBURCBvciBUQUJMRSBpbiBjYXNlXG4gIC8vIG5vIG9mZnNldFBhcmVudCBpcyBwcmVzZW50LCBJIGhhdGUgdGhpcyBqb2IuLi5cbiAgaWYgKFxuICAgIFsnVEgnLCAnVEQnLCAnVEFCTEUnXS5pbmRleE9mKG9mZnNldFBhcmVudC5ub2RlTmFtZSkgIT09IC0xICYmXG4gICAgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KG9mZnNldFBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnXG4gICkge1xuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQ7XG59XG4iLCJpbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gJy4vZ2V0T2Zmc2V0UGFyZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPZmZzZXRDb250YWluZXIoZWxlbWVudCkge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlbGVtZW50O1xuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIG5vZGVOYW1lID09PSAnSFRNTCcgfHwgZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpID09PSBlbGVtZW50XG4gICk7XG59XG4iLCIvKipcbiAqIEZpbmRzIHRoZSByb290IG5vZGUgKGRvY3VtZW50LCBzaGFkb3dET00gcm9vdCkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge0VsZW1lbnR9IHJvb3Qgbm9kZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSb290KG5vZGUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBnZXRSb290KG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cbiIsImltcG9ydCBpc09mZnNldENvbnRhaW5lciBmcm9tICcuL2lzT2Zmc2V0Q29udGFpbmVyJztcbmltcG9ydCBnZXRSb290IGZyb20gJy4vZ2V0Um9vdCc7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gJy4vZ2V0T2Zmc2V0UGFyZW50JztcblxuLyoqXG4gKiBGaW5kcyB0aGUgb2Zmc2V0IHBhcmVudCBjb21tb24gdG8gdGhlIHR3byBwcm92aWRlZCBub2Rlc1xuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50MVxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50MlxuICogQHJldHVybnMge0VsZW1lbnR9IGNvbW1vbiBvZmZzZXQgcGFyZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDEsIGVsZW1lbnQyKSB7XG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICBpZiAoIWVsZW1lbnQxIHx8ICFlbGVtZW50MS5ub2RlVHlwZSB8fCAhZWxlbWVudDIgfHwgIWVsZW1lbnQyLm5vZGVUeXBlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8vIEhlcmUgd2UgbWFrZSBzdXJlIHRvIGdpdmUgYXMgXCJzdGFydFwiIHRoZSBlbGVtZW50IHRoYXQgY29tZXMgZmlyc3QgaW4gdGhlIERPTVxuICBjb25zdCBvcmRlciA9XG4gICAgZWxlbWVudDEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudDIpICZcbiAgICBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORztcbiAgY29uc3Qgc3RhcnQgPSBvcmRlciA/IGVsZW1lbnQxIDogZWxlbWVudDI7XG4gIGNvbnN0IGVuZCA9IG9yZGVyID8gZWxlbWVudDIgOiBlbGVtZW50MTtcblxuICAvLyBHZXQgY29tbW9uIGFuY2VzdG9yIGNvbnRhaW5lclxuICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gIHJhbmdlLnNldFN0YXJ0KHN0YXJ0LCAwKTtcbiAgcmFuZ2Uuc2V0RW5kKGVuZCwgMCk7XG4gIGNvbnN0IHsgY29tbW9uQW5jZXN0b3JDb250YWluZXIgfSA9IHJhbmdlO1xuXG4gIC8vIEJvdGggbm9kZXMgYXJlIGluc2lkZSAjZG9jdW1lbnRcbiAgaWYgKFxuICAgIChlbGVtZW50MSAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgJiZcbiAgICAgIGVsZW1lbnQyICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lcikgfHxcbiAgICBzdGFydC5jb250YWlucyhlbmQpXG4gICkge1xuICAgIGlmIChpc09mZnNldENvbnRhaW5lcihjb21tb25BbmNlc3RvckNvbnRhaW5lcikpIHtcbiAgICAgIHJldHVybiBjb21tb25BbmNlc3RvckNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIG9uZSBvZiB0aGUgbm9kZXMgaXMgaW5zaWRlIHNoYWRvd0RPTSwgZmluZCB3aGljaCBvbmVcbiAgY29uc3QgZWxlbWVudDFyb290ID0gZ2V0Um9vdChlbGVtZW50MSk7XG4gIGlmIChlbGVtZW50MXJvb3QuaG9zdCkge1xuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxcm9vdC5ob3N0LCBlbGVtZW50Mik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDEsIGdldFJvb3QoZWxlbWVudDIpLmhvc3QpO1xuICB9XG59XG4iLCIvKipcbiAqIEdldHMgdGhlIHNjcm9sbCB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudCBpbiB0aGUgZ2l2ZW4gc2lkZSAodG9wIGFuZCBsZWZ0KVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge1N0cmluZ30gc2lkZSBgdG9wYCBvciBgbGVmdGBcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGFtb3VudCBvZiBzY3JvbGxlZCBwaXhlbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsKGVsZW1lbnQsIHNpZGUgPSAndG9wJykge1xuICBjb25zdCB1cHBlclNpZGUgPSBzaWRlID09PSAndG9wJyA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xuICBjb25zdCBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIGNvbnN0IGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IHNjcm9sbGluZ0VsZW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBodG1sO1xuICAgIHJldHVybiBzY3JvbGxpbmdFbGVtZW50W3VwcGVyU2lkZV07XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFt1cHBlclNpZGVdO1xufVxuIiwiaW1wb3J0IGdldFNjcm9sbCBmcm9tICcuL2dldFNjcm9sbCc7XG5cbi8qXG4gKiBTdW0gb3Igc3VidHJhY3QgdGhlIGVsZW1lbnQgc2Nyb2xsIHZhbHVlcyAobGVmdCBhbmQgdG9wKSBmcm9tIGEgZ2l2ZW4gcmVjdCBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0IC0gUmVjdCBvYmplY3QgeW91IHdhbnQgdG8gY2hhbmdlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgZnJvbSB0aGUgZnVuY3Rpb24gcmVhZHMgdGhlIHNjcm9sbCB2YWx1ZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3VidHJhY3QgLSBzZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBzdWJ0cmFjdCB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHJldHVybiB7T2JqZWN0fSByZWN0IC0gVGhlIG1vZGlmaWVyIHJlY3Qgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluY2x1ZGVTY3JvbGwocmVjdCwgZWxlbWVudCwgc3VidHJhY3QgPSBmYWxzZSkge1xuICBjb25zdCBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ3RvcCcpO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gIGNvbnN0IG1vZGlmaWVyID0gc3VidHJhY3QgPyAtMSA6IDE7XG4gIHJlY3QudG9wICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcbiAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJldHVybiByZWN0O1xufVxuIiwiLypcbiAqIEhlbHBlciB0byBkZXRlY3QgYm9yZGVycyBvZiBhIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXG4gKiBSZXN1bHQgb2YgYGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eWAgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBheGlzIC0gYHhgIG9yIGB5YFxuICogQHJldHVybiB7bnVtYmVyfSBib3JkZXJzIC0gVGhlIGJvcmRlcnMgc2l6ZSBvZiB0aGUgZ2l2ZW4gYXhpc1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlcywgYXhpcykge1xuICBjb25zdCBzaWRlQSA9IGF4aXMgPT09ICd4JyA/ICdMZWZ0JyA6ICdUb3AnO1xuICBjb25zdCBzaWRlQiA9IHNpZGVBID09PSAnTGVmdCcgPyAnUmlnaHQnIDogJ0JvdHRvbSc7XG5cbiAgcmV0dXJuIChcbiAgICBwYXJzZUZsb2F0KHN0eWxlc1tgYm9yZGVyJHtzaWRlQX1XaWR0aGBdLCAxMCkgK1xuICAgIHBhcnNlRmxvYXQoc3R5bGVzW2Bib3JkZXIke3NpZGVCfVdpZHRoYF0sIDEwKVxuICApO1xufVxuIiwiaW1wb3J0IGlzSUUgZnJvbSAnLi9pc0lFJztcblxuZnVuY3Rpb24gZ2V0U2l6ZShheGlzLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSB7XG4gIHJldHVybiBNYXRoLm1heChcbiAgICBib2R5W2BvZmZzZXQke2F4aXN9YF0sXG4gICAgYm9keVtgc2Nyb2xsJHtheGlzfWBdLFxuICAgIGh0bWxbYGNsaWVudCR7YXhpc31gXSxcbiAgICBodG1sW2BvZmZzZXQke2F4aXN9YF0sXG4gICAgaHRtbFtgc2Nyb2xsJHtheGlzfWBdLFxuICAgIGlzSUUoMTApXG4gICAgICA/IChwYXJzZUludChodG1sW2BvZmZzZXQke2F4aXN9YF0pICsgXG4gICAgICBwYXJzZUludChjb21wdXRlZFN0eWxlW2BtYXJnaW4ke2F4aXMgPT09ICdIZWlnaHQnID8gJ1RvcCcgOiAnTGVmdCd9YF0pICsgXG4gICAgICBwYXJzZUludChjb21wdXRlZFN0eWxlW2BtYXJnaW4ke2F4aXMgPT09ICdIZWlnaHQnID8gJ0JvdHRvbScgOiAnUmlnaHQnfWBdKSlcbiAgICA6IDAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1NpemVzKGRvY3VtZW50KSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gaXNJRSgxMCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShodG1sKTtcblxuICByZXR1cm4ge1xuICAgIGhlaWdodDogZ2V0U2l6ZSgnSGVpZ2h0JywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gICAgd2lkdGg6IGdldFNpemUoJ1dpZHRoJywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gIH07XG59XG4iLCIvKipcbiAqIEdpdmVuIGVsZW1lbnQgb2Zmc2V0cywgZ2VuZXJhdGUgYW4gb3V0cHV0IHNpbWlsYXIgdG8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gb2Zmc2V0c1xuICogQHJldHVybnMge09iamVjdH0gQ2xpZW50UmVjdCBsaWtlIG91dHB1dFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGllbnRSZWN0KG9mZnNldHMpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5vZmZzZXRzLFxuICAgIHJpZ2h0OiBvZmZzZXRzLmxlZnQgKyBvZmZzZXRzLndpZHRoLFxuICAgIGJvdHRvbTogb2Zmc2V0cy50b3AgKyBvZmZzZXRzLmhlaWdodCxcbiAgfTtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGdldEJvcmRlcnNTaXplIGZyb20gJy4vZ2V0Qm9yZGVyc1NpemUnO1xuaW1wb3J0IGdldFdpbmRvd1NpemVzIGZyb20gJy4vZ2V0V2luZG93U2l6ZXMnO1xuaW1wb3J0IGdldFNjcm9sbCBmcm9tICcuL2dldFNjcm9sbCc7XG5pbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuL2dldENsaWVudFJlY3QnO1xuaW1wb3J0IGlzSUUgZnJvbSAnLi9pc0lFJztcblxuLyoqXG4gKiBHZXQgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0fSBjbGllbnQgcmVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICBsZXQgcmVjdCA9IHt9O1xuXG4gIC8vIElFMTAgMTAgRklYOiBQbGVhc2UsIGRvbid0IGFzaywgdGhlIGVsZW1lbnQgaXNuJ3RcbiAgLy8gY29uc2lkZXJlZCBpbiBET00gaW4gc29tZSBjaXJjdW1zdGFuY2VzLi4uXG4gIC8vIFRoaXMgaXNuJ3QgcmVwcm9kdWNpYmxlIGluIElFMTAgY29tcGF0aWJpbGl0eSBtb2RlIG9mIElFMTFcbiAgdHJ5IHtcbiAgICBpZiAoaXNJRSgxMCkpIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgICAgIHJlY3QudG9wICs9IHNjcm9sbFRvcDtcbiAgICAgIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0O1xuICAgICAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wO1xuICAgICAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbiAgfVxuICBjYXRjaChlKXt9XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxuICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcCxcbiAgfTtcblxuICAvLyBzdWJ0cmFjdCBzY3JvbGxiYXIgc2l6ZSBmcm9tIHNpemVzXG4gIGNvbnN0IHNpemVzID0gZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnID8gZ2V0V2luZG93U2l6ZXMoZWxlbWVudC5vd25lckRvY3VtZW50KSA6IHt9O1xuICBjb25zdCB3aWR0aCA9XG4gICAgc2l6ZXMud2lkdGggfHwgZWxlbWVudC5jbGllbnRXaWR0aCB8fCByZXN1bHQud2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9XG4gICAgc2l6ZXMuaGVpZ2h0IHx8IGVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IHJlc3VsdC5oZWlnaHQ7XG5cbiAgbGV0IGhvcml6U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRXaWR0aCAtIHdpZHRoO1xuICBsZXQgdmVydFNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0O1xuXG4gIC8vIGlmIGFuIGh5cG90aGV0aWNhbCBzY3JvbGxiYXIgaXMgZGV0ZWN0ZWQsIHdlIG11c3QgYmUgc3VyZSBpdCdzIG5vdCBhIGBib3JkZXJgXG4gIC8vIHdlIG1ha2UgdGhpcyBjaGVjayBjb25kaXRpb25hbCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuICBpZiAoaG9yaXpTY3JvbGxiYXIgfHwgdmVydFNjcm9sbGJhcikge1xuICAgIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcbiAgICBob3JpelNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd4Jyk7XG4gICAgdmVydFNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd5Jyk7XG5cbiAgICByZXN1bHQud2lkdGggLT0gaG9yaXpTY3JvbGxiYXI7XG4gICAgcmVzdWx0LmhlaWdodCAtPSB2ZXJ0U2Nyb2xsYmFyO1xuICB9XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3QocmVzdWx0KTtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGluY2x1ZGVTY3JvbGwgZnJvbSAnLi9pbmNsdWRlU2Nyb2xsJztcbmltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tICcuL2dldEJvdW5kaW5nQ2xpZW50UmVjdCc7XG5pbXBvcnQgcnVuSXNJRSBmcm9tICcuL2lzSUUnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi9nZXRDbGllbnRSZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGNoaWxkcmVuLCBwYXJlbnQsIGZpeGVkUG9zaXRpb24gPSBmYWxzZSkge1xuICBjb25zdCBpc0lFMTAgPSBydW5Jc0lFKDEwKTtcbiAgY29uc3QgaXNIVE1MID0gcGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCc7XG4gIGNvbnN0IGNoaWxkcmVuUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChjaGlsZHJlbik7XG4gIGNvbnN0IHBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocGFyZW50KTtcbiAgY29uc3Qgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGNoaWxkcmVuKTtcblxuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkocGFyZW50KTtcbiAgY29uc3QgYm9yZGVyVG9wV2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJUb3BXaWR0aCwgMTApO1xuICBjb25zdCBib3JkZXJMZWZ0V2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgsIDEwKTtcblxuICAvLyBJbiBjYXNlcyB3aGVyZSB0aGUgcGFyZW50IGlzIGZpeGVkLCB3ZSBtdXN0IGlnbm9yZSBuZWdhdGl2ZSBzY3JvbGwgaW4gb2Zmc2V0IGNhbGNcbiAgaWYoZml4ZWRQb3NpdGlvbiAmJiBpc0hUTUwpIHtcbiAgICBwYXJlbnRSZWN0LnRvcCA9IE1hdGgubWF4KHBhcmVudFJlY3QudG9wLCAwKTtcbiAgICBwYXJlbnRSZWN0LmxlZnQgPSBNYXRoLm1heChwYXJlbnRSZWN0LmxlZnQsIDApO1xuICB9XG4gIGxldCBvZmZzZXRzID0gZ2V0Q2xpZW50UmVjdCh7XG4gICAgdG9wOiBjaGlsZHJlblJlY3QudG9wIC0gcGFyZW50UmVjdC50b3AgLSBib3JkZXJUb3BXaWR0aCxcbiAgICBsZWZ0OiBjaGlsZHJlblJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCAtIGJvcmRlckxlZnRXaWR0aCxcbiAgICB3aWR0aDogY2hpbGRyZW5SZWN0LndpZHRoLFxuICAgIGhlaWdodDogY2hpbGRyZW5SZWN0LmhlaWdodCxcbiAgfSk7XG4gIG9mZnNldHMubWFyZ2luVG9wID0gMDtcbiAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gMDtcblxuICAvLyBTdWJ0cmFjdCBtYXJnaW5zIG9mIGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGl0J3MgYmVpbmcgdXNlZCBhcyBwYXJlbnRcbiAgLy8gd2UgZG8gdGhpcyBvbmx5IG9uIEhUTUwgYmVjYXVzZSBpdCdzIHRoZSBvbmx5IGVsZW1lbnQgdGhhdCBiZWhhdmVzXG4gIC8vIGRpZmZlcmVudGx5IHdoZW4gbWFyZ2lucyBhcmUgYXBwbGllZCB0byBpdC4gVGhlIG1hcmdpbnMgYXJlIGluY2x1ZGVkIGluXG4gIC8vIHRoZSBib3ggb2YgdGhlIGRvY3VtZW50RWxlbWVudCwgaW4gdGhlIG90aGVyIGNhc2VzIG5vdC5cbiAgaWYgKCFpc0lFMTAgJiYgaXNIVE1MKSB7XG4gICAgY29uc3QgbWFyZ2luVG9wID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wLCAxMCk7XG4gICAgY29uc3QgbWFyZ2luTGVmdCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQsIDEwKTtcblxuICAgIG9mZnNldHMudG9wIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMuYm90dG9tIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMubGVmdCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuICAgIG9mZnNldHMucmlnaHQgLT0gYm9yZGVyTGVmdFdpZHRoIC0gbWFyZ2luTGVmdDtcblxuICAgIC8vIEF0dGFjaCBtYXJnaW5Ub3AgYW5kIG1hcmdpbkxlZnQgYmVjYXVzZSBpbiBzb21lIGNpcmN1bXN0YW5jZXMgd2UgbWF5IG5lZWQgdGhlbVxuICAgIG9mZnNldHMubWFyZ2luVG9wID0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnQ7XG4gIH1cblxuICBpZiAoXG4gICAgaXNJRTEwICYmICFmaXhlZFBvc2l0aW9uXG4gICAgICA/IHBhcmVudC5jb250YWlucyhzY3JvbGxQYXJlbnQpXG4gICAgICA6IHBhcmVudCA9PT0gc2Nyb2xsUGFyZW50ICYmIHNjcm9sbFBhcmVudC5ub2RlTmFtZSAhPT0gJ0JPRFknXG4gICkge1xuICAgIG9mZnNldHMgPSBpbmNsdWRlU2Nyb2xsKG9mZnNldHMsIHBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn1cbiIsImltcG9ydCBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgZnJvbSAnLi9nZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUnO1xuaW1wb3J0IGdldFNjcm9sbCBmcm9tICcuL2dldFNjcm9sbCc7XG5pbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuL2dldENsaWVudFJlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUoZWxlbWVudCwgZXhjbHVkZVNjcm9sbCA9IGZhbHNlKSB7XG4gIGNvbnN0IGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCByZWxhdGl2ZU9mZnNldCA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShlbGVtZW50LCBodG1sKTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heChodG1sLmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoaHRtbC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcblxuICBjb25zdCBzY3JvbGxUb3AgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sKSA6IDA7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sLCAnbGVmdCcpIDogMDtcblxuICBjb25zdCBvZmZzZXQgPSB7XG4gICAgdG9wOiBzY3JvbGxUb3AgLSByZWxhdGl2ZU9mZnNldC50b3AgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5Ub3AsXG4gICAgbGVmdDogc2Nyb2xsTGVmdCAtIHJlbGF0aXZlT2Zmc2V0LmxlZnQgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5MZWZ0LFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgfTtcblxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChvZmZzZXQpO1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGZpeGVkIG9yIGlzIGluc2lkZSBhIGZpeGVkIHBhcmVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGN1c3RvbUNvbnRhaW5lclxuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0byBcImlzRml4ZWQ/XCJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGaXhlZChlbGVtZW50KSB7XG4gIGNvbnN0IG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gIGlmICghcGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaXNGaXhlZChwYXJlbnROb2RlKTtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGlzSUUgZnJvbSAnLi9pc0lFJztcbi8qKlxuICogRmluZHMgdGhlIGZpcnN0IHBhcmVudCBvZiBhbiBlbGVtZW50IHRoYXQgaGFzIGEgdHJhbnNmb3JtZWQgcHJvcGVydHkgZGVmaW5lZFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gZmlyc3QgdHJhbnNmb3JtZWQgcGFyZW50IG9yIGRvY3VtZW50RWxlbWVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5wYXJlbnRFbGVtZW50IHx8IGlzSUUoKSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cbiAgbGV0IGVsID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB3aGlsZSAoZWwgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsLCAndHJhbnNmb3JtJykgPT09ICdub25lJykge1xuICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWwgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG59XG4iLCJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gJy4vZ2V0U2Nyb2xsUGFyZW50JztcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gJy4vZ2V0UGFyZW50Tm9kZSc7XG5pbXBvcnQgZ2V0UmVmZXJlbmNlTm9kZSBmcm9tICcuL2dldFJlZmVyZW5jZU5vZGUnO1xuaW1wb3J0IGZpbmRDb21tb25PZmZzZXRQYXJlbnQgZnJvbSAnLi9maW5kQ29tbW9uT2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgZnJvbSAnLi9nZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUnO1xuaW1wb3J0IGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSBmcm9tICcuL2dldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgZ2V0V2luZG93U2l6ZXMgZnJvbSAnLi9nZXRXaW5kb3dTaXplcyc7XG5pbXBvcnQgaXNGaXhlZCBmcm9tICcuL2lzRml4ZWQnO1xuaW1wb3J0IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQgZnJvbSAnLi9nZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50JztcblxuLyoqXG4gKiBDb21wdXRlZCB0aGUgYm91bmRhcmllcyBsaW1pdHMgYW5kIHJldHVybiB0aGVtXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZVxuICogQHBhcmFtIHtudW1iZXJ9IHBhZGRpbmdcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50IC0gRWxlbWVudCB1c2VkIHRvIGRlZmluZSB0aGUgYm91bmRhcmllc1xuICogQHBhcmFtIHtCb29sZWFufSBmaXhlZFBvc2l0aW9uIC0gSXMgaW4gZml4ZWQgcG9zaXRpb24gbW9kZVxuICogQHJldHVybnMge09iamVjdH0gQ29vcmRpbmF0ZXMgb2YgdGhlIGJvdW5kYXJpZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRhcmllcyhcbiAgcG9wcGVyLFxuICByZWZlcmVuY2UsXG4gIHBhZGRpbmcsXG4gIGJvdW5kYXJpZXNFbGVtZW50LFxuICBmaXhlZFBvc2l0aW9uID0gZmFsc2Vcbikge1xuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuXG4gIGxldCBib3VuZGFyaWVzID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgY29uc3Qgb2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQocG9wcGVyKSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCBnZXRSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZSkpO1xuXG4gIC8vIEhhbmRsZSB2aWV3cG9ydCBjYXNlXG4gIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3ZpZXdwb3J0JyApIHtcbiAgICBib3VuZGFyaWVzID0gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKG9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG4gIH1cblxuICBlbHNlIHtcbiAgICAvLyBIYW5kbGUgb3RoZXIgY2FzZXMgYmFzZWQgb24gRE9NIGVsZW1lbnQgdXNlZCBhcyBib3VuZGFyaWVzXG4gICAgbGV0IGJvdW5kYXJpZXNOb2RlO1xuICAgIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUocmVmZXJlbmNlKSk7XG4gICAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnd2luZG93Jykge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBwb3BwZXIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gYm91bmRhcmllc0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0cyA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShcbiAgICAgIGJvdW5kYXJpZXNOb2RlLFxuICAgICAgb2Zmc2V0UGFyZW50LFxuICAgICAgZml4ZWRQb3NpdGlvblxuICAgICk7XG5cbiAgICAvLyBJbiBjYXNlIG9mIEhUTUwsIHdlIG5lZWQgYSBkaWZmZXJlbnQgY29tcHV0YXRpb25cbiAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdIVE1MJyAmJiAhaXNGaXhlZChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGdldFdpbmRvd1NpemVzKHBvcHBlci5vd25lckRvY3VtZW50KTtcbiAgICAgIGJvdW5kYXJpZXMudG9wICs9IG9mZnNldHMudG9wIC0gb2Zmc2V0cy5tYXJnaW5Ub3A7XG4gICAgICBib3VuZGFyaWVzLmJvdHRvbSA9IGhlaWdodCArIG9mZnNldHMudG9wO1xuICAgICAgYm91bmRhcmllcy5sZWZ0ICs9IG9mZnNldHMubGVmdCAtIG9mZnNldHMubWFyZ2luTGVmdDtcbiAgICAgIGJvdW5kYXJpZXMucmlnaHQgPSB3aWR0aCArIG9mZnNldHMubGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIGFsbCB0aGUgb3RoZXIgRE9NIGVsZW1lbnRzLCB0aGlzIG9uZSBpcyBnb29kXG4gICAgICBib3VuZGFyaWVzID0gb2Zmc2V0cztcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgcGFkZGluZ3NcbiAgcGFkZGluZyA9IHBhZGRpbmcgfHwgMDtcbiAgY29uc3QgaXNQYWRkaW5nTnVtYmVyID0gdHlwZW9mIHBhZGRpbmcgPT09ICdudW1iZXInO1xuICBib3VuZGFyaWVzLmxlZnQgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcubGVmdCB8fCAwOyBcbiAgYm91bmRhcmllcy50b3AgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcudG9wIHx8IDA7IFxuICBib3VuZGFyaWVzLnJpZ2h0IC09IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLnJpZ2h0IHx8IDA7IFxuICBib3VuZGFyaWVzLmJvdHRvbSAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5ib3R0b20gfHwgMDsgXG5cbiAgcmV0dXJuIGJvdW5kYXJpZXM7XG59XG4iLCJpbXBvcnQgZ2V0Qm91bmRhcmllcyBmcm9tICcuLi91dGlscy9nZXRCb3VuZGFyaWVzJztcblxuZnVuY3Rpb24gZ2V0QXJlYSh7IHdpZHRoLCBoZWlnaHQgfSkge1xuICByZXR1cm4gd2lkdGggKiBoZWlnaHQ7XG59XG5cbi8qKlxuICogVXRpbGl0eSB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgYGF1dG9gIHBsYWNlbWVudCB0byB0aGUgcGxhY2VtZW50IHdpdGggbW9yZVxuICogYXZhaWxhYmxlIHNwYWNlLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoXG4gIHBsYWNlbWVudCxcbiAgcmVmUmVjdCxcbiAgcG9wcGVyLFxuICByZWZlcmVuY2UsXG4gIGJvdW5kYXJpZXNFbGVtZW50LFxuICBwYWRkaW5nID0gMFxuKSB7XG4gIGlmIChwbGFjZW1lbnQuaW5kZXhPZignYXV0bycpID09PSAtMSkge1xuICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gIH1cblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBwb3BwZXIsXG4gICAgcmVmZXJlbmNlLFxuICAgIHBhZGRpbmcsXG4gICAgYm91bmRhcmllc0VsZW1lbnRcbiAgKTtcblxuICBjb25zdCByZWN0cyA9IHtcbiAgICB0b3A6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWZSZWN0LnRvcCAtIGJvdW5kYXJpZXMudG9wLFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLnJpZ2h0IC0gcmVmUmVjdC5yaWdodCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHQsXG4gICAgfSxcbiAgICBib3R0b206IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmJvdHRvbSAtIHJlZlJlY3QuYm90dG9tLFxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgd2lkdGg6IHJlZlJlY3QubGVmdCAtIGJvdW5kYXJpZXMubGVmdCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHQsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBzb3J0ZWRBcmVhcyA9IE9iamVjdC5rZXlzKHJlY3RzKVxuICAgIC5tYXAoa2V5ID0+ICh7XG4gICAgICBrZXksXG4gICAgICAuLi5yZWN0c1trZXldLFxuICAgICAgYXJlYTogZ2V0QXJlYShyZWN0c1trZXldKSxcbiAgICB9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gYi5hcmVhIC0gYS5hcmVhKTtcblxuICBjb25zdCBmaWx0ZXJlZEFyZWFzID0gc29ydGVkQXJlYXMuZmlsdGVyKFxuICAgICh7IHdpZHRoLCBoZWlnaHQgfSkgPT5cbiAgICAgIHdpZHRoID49IHBvcHBlci5jbGllbnRXaWR0aCAmJiBoZWlnaHQgPj0gcG9wcGVyLmNsaWVudEhlaWdodFxuICApO1xuXG4gIGNvbnN0IGNvbXB1dGVkUGxhY2VtZW50ID0gZmlsdGVyZWRBcmVhcy5sZW5ndGggPiAwXG4gICAgPyBmaWx0ZXJlZEFyZWFzWzBdLmtleVxuICAgIDogc29ydGVkQXJlYXNbMF0ua2V5O1xuXG4gIGNvbnN0IHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gIHJldHVybiBjb21wdXRlZFBsYWNlbWVudCArICh2YXJpYXRpb24gPyBgLSR7dmFyaWF0aW9ufWAgOiAnJyk7XG59XG4iLCJpbXBvcnQgZmluZENvbW1vbk9mZnNldFBhcmVudCBmcm9tICcuL2ZpbmRDb21tb25PZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCBmcm9tICcuL2dldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldFJlZmVyZW5jZU5vZGUgZnJvbSAnLi9nZXRSZWZlcmVuY2VOb2RlJztcblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gcmVmZXJlbmNlIC0gdGhlIHJlZmVyZW5jZSBlbGVtZW50ICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEBwYXJhbSB7RWxlbWVudH0gZml4ZWRQb3NpdGlvbiAtIGlzIGluIGZpeGVkIHBvc2l0aW9uIG1vZGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlLCBmaXhlZFBvc2l0aW9uID0gbnVsbCkge1xuICBjb25zdCBjb21tb25PZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSk7XG4gIHJldHVybiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUocmVmZXJlbmNlLCBjb21tb25PZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xufVxuIiwiLyoqXG4gKiBHZXQgdGhlIG91dGVyIHNpemVzIG9mIHRoZSBnaXZlbiBlbGVtZW50IChvZmZzZXQgc2l6ZSArIG1hcmdpbnMpXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtPYmplY3R9IG9iamVjdCBjb250YWluaW5nIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPdXRlclNpemVzKGVsZW1lbnQpIHtcbiAgY29uc3Qgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgY29uc3QgeCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCB8fCAwKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkJvdHRvbSB8fCAwKTtcbiAgY29uc3QgeSA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5SaWdodCB8fCAwKTtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoICsgeSxcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgeCxcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8qKlxuICogR2V0IHRoZSBvcHBvc2l0ZSBwbGFjZW1lbnQgb2YgdGhlIGdpdmVuIG9uZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudFxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIGNvbnN0IGhhc2ggPSB7IGxlZnQ6ICdyaWdodCcsIHJpZ2h0OiAnbGVmdCcsIGJvdHRvbTogJ3RvcCcsIHRvcDogJ2JvdHRvbScgfTtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgbWF0Y2hlZCA9PiBoYXNoW21hdGNoZWRdKTtcbn1cbiIsImltcG9ydCBnZXRPdXRlclNpemVzIGZyb20gJy4vZ2V0T3V0ZXJTaXplcyc7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSAnLi9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XG5cbi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHBvc2l0aW9uIC0gQ1NTIHBvc2l0aW9uIHRoZSBQb3BwZXIgd2lsbCBnZXQgYXBwbGllZFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0cyAtIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcGFyYW0ge1N0cmluZ30gcGxhY2VtZW50IC0gb25lIG9mIHRoZSB2YWxpZCBwbGFjZW1lbnQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gcG9wcGVyT2Zmc2V0cyAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBvcHBlck9mZnNldHMocG9wcGVyLCByZWZlcmVuY2VPZmZzZXRzLCBwbGFjZW1lbnQpIHtcbiAgcGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgLy8gR2V0IHBvcHBlciBub2RlIHNpemVzXG4gIGNvbnN0IHBvcHBlclJlY3QgPSBnZXRPdXRlclNpemVzKHBvcHBlcik7XG5cbiAgLy8gQWRkIHBvc2l0aW9uLCB3aWR0aCBhbmQgaGVpZ2h0IHRvIG91ciBvZmZzZXRzIG9iamVjdFxuICBjb25zdCBwb3BwZXJPZmZzZXRzID0ge1xuICAgIHdpZHRoOiBwb3BwZXJSZWN0LndpZHRoLFxuICAgIGhlaWdodDogcG9wcGVyUmVjdC5oZWlnaHQsXG4gIH07XG5cbiAgLy8gZGVwZW5kaW5nIGJ5IHRoZSBwb3BwZXIgcGxhY2VtZW50IHdlIGhhdmUgdG8gY29tcHV0ZSBpdHMgb2Zmc2V0cyBzbGlnaHRseSBkaWZmZXJlbnRseVxuICBjb25zdCBpc0hvcml6ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgY29uc3QgbWFpblNpZGUgPSBpc0hvcml6ID8gJ3RvcCcgOiAnbGVmdCc7XG4gIGNvbnN0IHNlY29uZGFyeVNpZGUgPSBpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCc7XG4gIGNvbnN0IG1lYXN1cmVtZW50ID0gaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgY29uc3Qgc2Vjb25kYXJ5TWVhc3VyZW1lbnQgPSAhaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBwb3BwZXJPZmZzZXRzW21haW5TaWRlXSA9XG4gICAgcmVmZXJlbmNlT2Zmc2V0c1ttYWluU2lkZV0gK1xuICAgIHJlZmVyZW5jZU9mZnNldHNbbWVhc3VyZW1lbnRdIC8gMiAtXG4gICAgcG9wcGVyUmVjdFttZWFzdXJlbWVudF0gLyAyO1xuICBpZiAocGxhY2VtZW50ID09PSBzZWNvbmRhcnlTaWRlKSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9XG4gICAgICByZWZlcmVuY2VPZmZzZXRzW3NlY29uZGFyeVNpZGVdIC0gcG9wcGVyUmVjdFtzZWNvbmRhcnlNZWFzdXJlbWVudF07XG4gIH0gZWxzZSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9XG4gICAgICByZWZlcmVuY2VPZmZzZXRzW2dldE9wcG9zaXRlUGxhY2VtZW50KHNlY29uZGFyeVNpZGUpXTtcbiAgfVxuXG4gIHJldHVybiBwb3BwZXJPZmZzZXRzO1xufVxuIiwiLyoqXG4gKiBNaW1pY3MgdGhlIGBmaW5kYCBtZXRob2Qgb2YgQXJyYXlcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZChhcnIsIGNoZWNrKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kKSB7XG4gICAgcmV0dXJuIGFyci5maW5kKGNoZWNrKTtcbiAgfVxuXG4gIC8vIHVzZSBgZmlsdGVyYCB0byBvYnRhaW4gdGhlIHNhbWUgYmVoYXZpb3Igb2YgYGZpbmRgXG4gIHJldHVybiBhcnIuZmlsdGVyKGNoZWNrKVswXTtcbn1cbiIsImltcG9ydCBmaW5kIGZyb20gJy4vZmluZCc7XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hpbmcgb2JqZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FycmF5fSBhcnJcbiAqIEBhcmd1bWVudCBwcm9wXG4gKiBAYXJndW1lbnQgdmFsdWVcbiAqIEByZXR1cm5zIGluZGV4IG9yIC0xXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRJbmRleChhcnIsIHByb3AsIHZhbHVlKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZEluZGV4IGlmIHN1cHBvcnRlZFxuICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCkge1xuICAgIHJldHVybiBhcnIuZmluZEluZGV4KGN1ciA9PiBjdXJbcHJvcF0gPT09IHZhbHVlKTtcbiAgfVxuXG4gIC8vIHVzZSBgZmluZGAgKyBgaW5kZXhPZmAgaWYgYGZpbmRJbmRleGAgaXNuJ3Qgc3VwcG9ydGVkXG4gIGNvbnN0IG1hdGNoID0gZmluZChhcnIsIG9iaiA9PiBvYmpbcHJvcF0gPT09IHZhbHVlKTtcbiAgcmV0dXJuIGFyci5pbmRleE9mKG1hdGNoKTtcbn1cbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbic7XG5pbXBvcnQgZmluZEluZGV4IGZyb20gJy4vZmluZEluZGV4JztcbmltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4uL3V0aWxzL2dldENsaWVudFJlY3QnO1xuXG4vKipcbiAqIExvb3AgdHJvdWdoIHRoZSBsaXN0IG9mIG1vZGlmaWVycyBhbmQgcnVuIHRoZW0gaW4gb3JkZXIsXG4gKiBlYWNoIG9mIHRoZW0gd2lsbCB0aGVuIGVkaXQgdGhlIGRhdGEgb2JqZWN0LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRzIC0gT3B0aW9uYWwgbW9kaWZpZXIgbmFtZSB1c2VkIGFzIHN0b3BwZXJcbiAqIEByZXR1cm5zIHtkYXRhT2JqZWN0fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBydW5Nb2RpZmllcnMobW9kaWZpZXJzLCBkYXRhLCBlbmRzKSB7XG4gIGNvbnN0IG1vZGlmaWVyc1RvUnVuID0gZW5kcyA9PT0gdW5kZWZpbmVkXG4gICAgPyBtb2RpZmllcnNcbiAgICA6IG1vZGlmaWVycy5zbGljZSgwLCBmaW5kSW5kZXgobW9kaWZpZXJzLCAnbmFtZScsIGVuZHMpKTtcblxuICBtb2RpZmllcnNUb1J1bi5mb3JFYWNoKG1vZGlmaWVyID0+IHtcbiAgICBpZiAobW9kaWZpZXJbJ2Z1bmN0aW9uJ10pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgIGNvbnNvbGUud2FybignYG1vZGlmaWVyLmZ1bmN0aW9uYCBpcyBkZXByZWNhdGVkLCB1c2UgYG1vZGlmaWVyLmZuYCEnKTtcbiAgICB9XG4gICAgY29uc3QgZm4gPSBtb2RpZmllclsnZnVuY3Rpb24nXSB8fCBtb2RpZmllci5mbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICBpZiAobW9kaWZpZXIuZW5hYmxlZCAmJiBpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgLy8gQWRkIHByb3BlcnRpZXMgdG8gb2Zmc2V0cyB0byBtYWtlIHRoZW0gYSBjb21wbGV0ZSBjbGllbnRSZWN0IG9iamVjdFxuICAgICAgLy8gd2UgZG8gdGhpcyBiZWZvcmUgZWFjaCBtb2RpZmllciB0byBtYWtlIHN1cmUgdGhlIHByZXZpb3VzIG9uZSBkb2Vzbid0XG4gICAgICAvLyBtZXNzIHdpdGggdGhlc2UgdmFsdWVzXG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcbiAgICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UpO1xuXG4gICAgICBkYXRhID0gZm4oZGF0YSwgbW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgY29tcHV0ZUF1dG9QbGFjZW1lbnQgZnJvbSAnLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQnO1xuaW1wb3J0IGdldFJlZmVyZW5jZU9mZnNldHMgZnJvbSAnLi4vdXRpbHMvZ2V0UmVmZXJlbmNlT2Zmc2V0cyc7XG5pbXBvcnQgZ2V0UG9wcGVyT2Zmc2V0cyBmcm9tICcuLi91dGlscy9nZXRQb3BwZXJPZmZzZXRzJztcbmltcG9ydCBydW5Nb2RpZmllcnMgZnJvbSAnLi4vdXRpbHMvcnVuTW9kaWZpZXJzJztcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyLCBjb21wdXRpbmcgdGhlIG5ldyBvZmZzZXRzIGFuZCBhcHBseWluZ1xuICogdGhlIG5ldyBzdHlsZS48YnIgLz5cbiAqIFByZWZlciBgc2NoZWR1bGVVcGRhdGVgIG92ZXIgYHVwZGF0ZWAgYmVjYXVzZSBvZiBwZXJmb3JtYW5jZSByZWFzb25zLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gIC8vIGlmIHBvcHBlciBpcyBkZXN0cm95ZWQsIGRvbid0IHBlcmZvcm0gYW55IGZ1cnRoZXIgdXBkYXRlXG4gIGlmICh0aGlzLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGRhdGEgPSB7XG4gICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgc3R5bGVzOiB7fSxcbiAgICBhcnJvd1N0eWxlczoge30sXG4gICAgYXR0cmlidXRlczoge30sXG4gICAgZmxpcHBlZDogZmFsc2UsXG4gICAgb2Zmc2V0czoge30sXG4gIH07XG5cbiAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKFxuICAgIHRoaXMuc3RhdGUsXG4gICAgdGhpcy5wb3BwZXIsXG4gICAgdGhpcy5yZWZlcmVuY2UsXG4gICAgdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWRcbiAgKTtcblxuICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAvLyBhbmQgcmVmZXIgdG8gb3JpZ2luYWxQbGFjZW1lbnQgdG8ga25vdyB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgZGF0YS5wbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChcbiAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50LFxuICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsXG4gICAgdGhpcy5wb3BwZXIsXG4gICAgdGhpcy5yZWZlcmVuY2UsXG4gICAgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50LFxuICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nXG4gICk7XG5cbiAgLy8gc3RvcmUgdGhlIGNvbXB1dGVkIHBsYWNlbWVudCBpbnNpZGUgYG9yaWdpbmFsUGxhY2VtZW50YFxuICBkYXRhLm9yaWdpbmFsUGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG5cbiAgZGF0YS5wb3NpdGlvbkZpeGVkID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQ7XG5cbiAgLy8gY29tcHV0ZSB0aGUgcG9wcGVyIG9mZnNldHNcbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldFBvcHBlck9mZnNldHMoXG4gICAgdGhpcy5wb3BwZXIsXG4gICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSxcbiAgICBkYXRhLnBsYWNlbWVudFxuICApO1xuXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIucG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZFxuICAgID8gJ2ZpeGVkJ1xuICAgIDogJ2Fic29sdXRlJztcblxuICAvLyBydW4gdGhlIG1vZGlmaWVyc1xuICBkYXRhID0gcnVuTW9kaWZpZXJzKHRoaXMubW9kaWZpZXJzLCBkYXRhKTtcblxuICAvLyB0aGUgZmlyc3QgYHVwZGF0ZWAgd2lsbCBjYWxsIGBvbkNyZWF0ZWAgY2FsbGJhY2tcbiAgLy8gdGhlIG90aGVyIG9uZXMgd2lsbCBjYWxsIGBvblVwZGF0ZWAgY2FsbGJhY2tcbiAgaWYgKCF0aGlzLnN0YXRlLmlzQ3JlYXRlZCkge1xuICAgIHRoaXMuc3RhdGUuaXNDcmVhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLm9wdGlvbnMub25DcmVhdGUoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5vcHRpb25zLm9uVXBkYXRlKGRhdGEpO1xuICB9XG59XG4iLCIvKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGlzIGVuYWJsZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNb2RpZmllckVuYWJsZWQobW9kaWZpZXJzLCBtb2RpZmllck5hbWUpIHtcbiAgcmV0dXJuIG1vZGlmaWVycy5zb21lKFxuICAgICh7IG5hbWUsIGVuYWJsZWQgfSkgPT4gZW5hYmxlZCAmJiBuYW1lID09PSBtb2RpZmllck5hbWVcbiAgKTtcbn1cbiIsIi8qKlxuICogR2V0IHRoZSBwcmVmaXhlZCBzdXBwb3J0ZWQgcHJvcGVydHkgbmFtZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5IChjYW1lbENhc2UpXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBwcmVmaXhlZCBwcm9wZXJ0eSAoY2FtZWxDYXNlIG9yIFBhc2NhbENhc2UsIGRlcGVuZGluZyBvbiB0aGUgdmVuZG9yIHByZWZpeClcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKHByb3BlcnR5KSB7XG4gIGNvbnN0IHByZWZpeGVzID0gW2ZhbHNlLCAnbXMnLCAnV2Via2l0JywgJ01veicsICdPJ107XG4gIGNvbnN0IHVwcGVyUHJvcCA9IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc2xpY2UoMSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIGNvbnN0IHRvQ2hlY2sgPSBwcmVmaXggPyBgJHtwcmVmaXh9JHt1cHBlclByb3B9YCA6IHByb3BlcnR5O1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVt0b0NoZWNrXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0b0NoZWNrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCBpc01vZGlmaWVyRW5hYmxlZCBmcm9tICcuLi91dGlscy9pc01vZGlmaWVyRW5hYmxlZCc7XG5pbXBvcnQgZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lIGZyb20gJy4uL3V0aWxzL2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSc7XG5cbi8qKlxuICogRGVzdHJveXMgdGhlIHBvcHBlci5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgdGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgLy8gdG91Y2ggRE9NIG9ubHkgaWYgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGlzIGVuYWJsZWRcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKHRoaXMubW9kaWZpZXJzLCAnYXBwbHlTdHlsZScpKSB7XG4gICAgdGhpcy5wb3BwZXIucmVtb3ZlQXR0cmlidXRlKCd4LXBsYWNlbWVudCcpO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUudG9wID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUuYm90dG9tID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUud2lsbENoYW5nZSA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlW2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyldID0gJyc7XG4gIH1cblxuICB0aGlzLmRpc2FibGVFdmVudExpc3RlbmVycygpO1xuXG4gIC8vIHJlbW92ZSB0aGUgcG9wcGVyIGlmIHVzZXIgZXhwbGljaXRseSBhc2tlZCBmb3IgdGhlIGRlbGV0aW9uIG9uIGRlc3Ryb3lcbiAgLy8gZG8gbm90IHVzZSBgcmVtb3ZlYCBiZWNhdXNlIElFMTEgZG9lc24ndCBzdXBwb3J0IGl0XG4gIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZlT25EZXN0cm95KSB7XG4gICAgdGhpcy5wb3BwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBvcHBlcik7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCIvKipcbiAqIEdldCB0aGUgd2luZG93IGFzc29jaWF0ZWQgd2l0aCB0aGUgZWxlbWVudFxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7V2luZG93fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3coZWxlbWVudCkge1xuICBjb25zdCBvd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiB3aW5kb3c7XG59XG4iLCJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gJy4vZ2V0U2Nyb2xsUGFyZW50JztcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSAnLi9nZXRXaW5kb3cnO1xuXG5mdW5jdGlvbiBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsUGFyZW50LCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpIHtcbiAgY29uc3QgaXNCb2R5ID0gc2Nyb2xsUGFyZW50Lm5vZGVOYW1lID09PSAnQk9EWSc7XG4gIGNvbnN0IHRhcmdldCA9IGlzQm9keSA/IHNjcm9sbFBhcmVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogc2Nyb2xsUGFyZW50O1xuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICBpZiAoIWlzQm9keSkge1xuICAgIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhcbiAgICAgIGdldFNjcm9sbFBhcmVudCh0YXJnZXQucGFyZW50Tm9kZSksXG4gICAgICBldmVudCxcbiAgICAgIGNhbGxiYWNrLFxuICAgICAgc2Nyb2xsUGFyZW50c1xuICAgICk7XG4gIH1cbiAgc2Nyb2xsUGFyZW50cy5wdXNoKHRhcmdldCk7XG59XG5cbi8qKlxuICogU2V0dXAgbmVlZGVkIGV2ZW50IGxpc3RlbmVycyB1c2VkIHRvIHVwZGF0ZSB0aGUgcG9wcGVyIHBvc2l0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKFxuICByZWZlcmVuY2UsXG4gIG9wdGlvbnMsXG4gIHN0YXRlLFxuICB1cGRhdGVCb3VuZFxuKSB7XG4gIC8vIFJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgc3RhdGUudXBkYXRlQm91bmQgPSB1cGRhdGVCb3VuZDtcbiAgZ2V0V2luZG93KHJlZmVyZW5jZSkuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAvLyBTY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgY29uc3Qgc2Nyb2xsRWxlbWVudCA9IGdldFNjcm9sbFBhcmVudChyZWZlcmVuY2UpO1xuICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoXG4gICAgc2Nyb2xsRWxlbWVudCxcbiAgICAnc2Nyb2xsJyxcbiAgICBzdGF0ZS51cGRhdGVCb3VuZCxcbiAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzXG4gICk7XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBzY3JvbGxFbGVtZW50O1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gdHJ1ZTtcblxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgc2V0dXBFdmVudExpc3RlbmVycyBmcm9tICcuLi91dGlscy9zZXR1cEV2ZW50TGlzdGVuZXJzJztcblxuLyoqXG4gKiBJdCB3aWxsIGFkZCByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgc3RhcnQgcmVjYWxjdWxhdGluZ1xuICogcG9zaXRpb24gb2YgdGhlIHBvcHBlciBlbGVtZW50IHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycygpIHtcbiAgaWYgKCF0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICB0aGlzLnN0YXRlID0gc2V0dXBFdmVudExpc3RlbmVycyhcbiAgICAgIHRoaXMucmVmZXJlbmNlLFxuICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgdGhpcy5zdGF0ZSxcbiAgICAgIHRoaXMuc2NoZWR1bGVVcGRhdGVcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gJy4vZ2V0V2luZG93JztcblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKHJlZmVyZW5jZSwgc3RhdGUpIHtcbiAgLy8gUmVtb3ZlIHJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgZ2V0V2luZG93KHJlZmVyZW5jZSkucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQpO1xuXG4gIC8vIFJlbW92ZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgc3RhdGUuc2Nyb2xsUGFyZW50cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXRlLnVwZGF0ZUJvdW5kKTtcbiAgfSk7XG5cbiAgLy8gUmVzZXQgc3RhdGVcbiAgc3RhdGUudXBkYXRlQm91bmQgPSBudWxsO1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0gW107XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBudWxsO1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gZmFsc2U7XG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCByZW1vdmVFdmVudExpc3RlbmVycyBmcm9tICcuLi91dGlscy9yZW1vdmVFdmVudExpc3RlbmVycyc7XG5cbi8qKlxuICogSXQgd2lsbCByZW1vdmUgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHdvbid0IHJlY2FsY3VsYXRlIHBvcHBlciBwb3NpdGlvblxuICogd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuIEl0IGFsc28gd29uJ3QgdHJpZ2dlciBgb25VcGRhdGVgIGNhbGxiYWNrIGFueW1vcmUsXG4gKiB1bmxlc3MgeW91IGNhbGwgYHVwZGF0ZWAgbWV0aG9kIG1hbnVhbGx5LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICh0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgICB0aGlzLnN0YXRlID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMuc3RhdGUpO1xuICB9XG59XG4iLCIvKipcbiAqIFRlbGxzIGlmIGEgZ2l2ZW4gaW5wdXQgaXMgYSBudW1iZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Kn0gaW5wdXQgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gIHJldHVybiBuICE9PSAnJyAmJiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG59XG4iLCJpbXBvcnQgaXNOdW1lcmljIGZyb20gJy4vaXNOdW1lcmljJztcblxuLyoqXG4gKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIHN0eWxlIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICBsZXQgdW5pdCA9ICcnO1xuICAgIC8vIGFkZCB1bml0IGlmIHRoZSB2YWx1ZSBpcyBudW1lcmljIGFuZCBpcyBvbmUgb2YgdGhlIGZvbGxvd2luZ1xuICAgIGlmIChcbiAgICAgIFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLmluZGV4T2YocHJvcCkgIT09XG4gICAgICAgIC0xICYmXG4gICAgICBpc051bWVyaWMoc3R5bGVzW3Byb3BdKVxuICAgICkge1xuICAgICAgdW5pdCA9ICdweCc7XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF0gKyB1bml0O1xuICB9KTtcbn1cbiIsIi8qKlxuICogU2V0IHRoZSBhdHRyaWJ1dGVzIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIGF0dHJpYnV0ZXMgdG9cbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBzdHlsZXNcbiAqIE9iamVjdCB3aXRoIGEgbGlzdCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbcHJvcF07XG4gICAgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcCwgYXR0cmlidXRlc1twcm9wXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgc2V0U3R5bGVzIGZyb20gJy4uL3V0aWxzL3NldFN0eWxlcyc7XG5pbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tICcuLi91dGlscy9zZXRBdHRyaWJ1dGVzJztcbmltcG9ydCBnZXRSZWZlcmVuY2VPZmZzZXRzIGZyb20gJy4uL3V0aWxzL2dldFJlZmVyZW5jZU9mZnNldHMnO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gJy4uL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50JztcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLnN0eWxlcyAtIExpc3Qgb2Ygc3R5bGUgcHJvcGVydGllcyAtIHZhbHVlcyB0byBhcHBseSB0byBwb3BwZXIgZWxlbWVudFxuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEuYXR0cmlidXRlcyAtIExpc3Qgb2YgYXR0cmlidXRlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBzYW1lIGRhdGEgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5U3R5bGUoZGF0YSkge1xuICAvLyBhbnkgcHJvcGVydHkgcHJlc2VudCBpbiBgZGF0YS5zdHlsZXNgIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLFxuICAvLyBpbiB0aGlzIHdheSB3ZSBjYW4gbWFrZSB0aGUgM3JkIHBhcnR5IG1vZGlmaWVycyBhZGQgY3VzdG9tIHN0eWxlcyB0byBpdFxuICAvLyBCZSBhd2FyZSwgbW9kaWZpZXJzIGNvdWxkIG92ZXJyaWRlIHRoZSBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhlIHByZXZpb3VzXG4gIC8vIGxpbmVzIG9mIHRoaXMgbW9kaWZpZXIhXG4gIHNldFN0eWxlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5zdHlsZXMpO1xuXG4gIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLmF0dHJpYnV0ZXNgIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLFxuICAvLyB0aGV5IHdpbGwgYmUgc2V0IGFzIEhUTUwgYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICBzZXRBdHRyaWJ1dGVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmF0dHJpYnV0ZXMpO1xuXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBkZWZpbmVkIGFuZCBhcnJvd1N0eWxlcyBoYXMgc29tZSBwcm9wZXJ0aWVzXG4gIGlmIChkYXRhLmFycm93RWxlbWVudCAmJiBPYmplY3Qua2V5cyhkYXRhLmFycm93U3R5bGVzKS5sZW5ndGgpIHtcbiAgICBzZXRTdHlsZXMoZGF0YS5hcnJvd0VsZW1lbnQsIGRhdGEuYXJyb3dTdHlsZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogU2V0IHRoZSB4LXBsYWNlbWVudCBhdHRyaWJ1dGUgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZSBiZWNhdXNlIGl0IGNvdWxkIGJlIHVzZWRcbiAqIHRvIGFkZCBtYXJnaW5zIHRvIHRoZSBwb3BwZXIgbWFyZ2lucyBuZWVkcyB0byBiZSBjYWxjdWxhdGVkIHRvIGdldCB0aGVcbiAqIGNvcnJlY3QgcG9wcGVyIG9mZnNldHMuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLm1vZGlmaWVyc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcHBlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gVGhlIEhUTUwgZWxlbWVudCB1c2VkIGFzIHBvcHBlclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBQb3BwZXIuanMgb3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTdHlsZU9uTG9hZChcbiAgcmVmZXJlbmNlLFxuICBwb3BwZXIsXG4gIG9wdGlvbnMsXG4gIG1vZGlmaWVyT3B0aW9ucyxcbiAgc3RhdGVcbikge1xuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgY29uc3QgcmVmZXJlbmNlT2Zmc2V0cyA9IGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlLCBvcHRpb25zLnBvc2l0aW9uRml4ZWQpO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICBjb25zdCBwbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChcbiAgICBvcHRpb25zLnBsYWNlbWVudCxcbiAgICByZWZlcmVuY2VPZmZzZXRzLFxuICAgIHBvcHBlcixcbiAgICByZWZlcmVuY2UsXG4gICAgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCxcbiAgICBvcHRpb25zLm1vZGlmaWVycy5mbGlwLnBhZGRpbmdcbiAgKTtcblxuICBwb3BwZXIuc2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcsIHBsYWNlbWVudCk7XG5cbiAgLy8gQXBwbHkgYHBvc2l0aW9uYCB0byBwb3BwZXIgYmVmb3JlIGFueXRoaW5nIGVsc2UgYmVjYXVzZVxuICAvLyB3aXRob3V0IHRoZSBwb3NpdGlvbiBhcHBsaWVkIHdlIGNhbid0IGd1YXJhbnRlZSBjb3JyZWN0IGNvbXB1dGF0aW9uc1xuICBzZXRTdHlsZXMocG9wcGVyLCB7IHBvc2l0aW9uOiBvcHRpb25zLnBvc2l0aW9uRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyB9KTtcblxuICByZXR1cm4gb3B0aW9ucztcbn1cbiIsIi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IHNob3VsZFJvdW5kIC0gSWYgdGhlIG9mZnNldHMgc2hvdWxkIGJlIHJvdW5kZWQgYXQgYWxsXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcG9wcGVyJ3MgcG9zaXRpb24gb2Zmc2V0cyByb3VuZGVkXG4gKlxuICogVGhlIHRhbGUgb2YgcGl4ZWwtcGVyZmVjdCBwb3NpdGlvbmluZy4gSXQncyBzdGlsbCBub3QgMTAwJSBwZXJmZWN0LCBidXQgYXNcbiAqIGdvb2QgYXMgaXQgY2FuIGJlIHdpdGhpbiByZWFzb24uXG4gKiBEaXNjdXNzaW9uIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcG9wcGVyLmpzL3B1bGwvNzE1XG4gKlxuICogTG93IERQSSBzY3JlZW5zIGNhdXNlIGEgcG9wcGVyIHRvIGJlIGJsdXJyeSBpZiBub3QgdXNpbmcgZnVsbCBwaXhlbHMgKFNhZmFyaVxuICogYXMgd2VsbCBvbiBIaWdoIERQSSBzY3JlZW5zKS5cbiAqXG4gKiBGaXJlZm94IHByZWZlcnMgbm8gcm91bmRpbmcgZm9yIHBvc2l0aW9uaW5nIGFuZCBkb2VzIG5vdCBoYXZlIGJsdXJyaW5lc3Mgb25cbiAqIGhpZ2ggRFBJIHNjcmVlbnMuXG4gKlxuICogT25seSBob3Jpem9udGFsIHBsYWNlbWVudCBhbmQgbGVmdC9yaWdodCB2YWx1ZXMgbmVlZCB0byBiZSBjb25zaWRlcmVkLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSb3VuZGVkT2Zmc2V0cyhkYXRhLCBzaG91bGRSb3VuZCkge1xuICBjb25zdCB7IHBvcHBlciwgcmVmZXJlbmNlIH0gPSBkYXRhLm9mZnNldHM7XG4gIGNvbnN0IHsgcm91bmQsIGZsb29yIH0gPSBNYXRoO1xuICBjb25zdCBub1JvdW5kID0gdiA9PiB2O1xuICBcbiAgY29uc3QgcmVmZXJlbmNlV2lkdGggPSByb3VuZChyZWZlcmVuY2Uud2lkdGgpO1xuICBjb25zdCBwb3BwZXJXaWR0aCA9IHJvdW5kKHBvcHBlci53aWR0aCk7XG4gIFxuICBjb25zdCBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihkYXRhLnBsYWNlbWVudCkgIT09IC0xO1xuICBjb25zdCBpc1ZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LmluZGV4T2YoJy0nKSAhPT0gLTE7XG4gIGNvbnN0IHNhbWVXaWR0aFBhcml0eSA9IHJlZmVyZW5jZVdpZHRoICUgMiA9PT0gcG9wcGVyV2lkdGggJSAyO1xuICBjb25zdCBib3RoT2RkV2lkdGggPSByZWZlcmVuY2VXaWR0aCAlIDIgPT09IDEgJiYgcG9wcGVyV2lkdGggJSAyID09PSAxO1xuXG4gIGNvbnN0IGhvcml6b250YWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmRcbiAgICA/IG5vUm91bmRcbiAgICA6IGlzVmVydGljYWwgfHwgaXNWYXJpYXRpb24gfHwgc2FtZVdpZHRoUGFyaXR5XG4gICAgPyByb3VuZFxuICAgIDogZmxvb3I7XG4gIGNvbnN0IHZlcnRpY2FsVG9JbnRlZ2VyID0gIXNob3VsZFJvdW5kID8gbm9Sb3VuZCA6IHJvdW5kO1xuXG4gIHJldHVybiB7XG4gICAgbGVmdDogaG9yaXpvbnRhbFRvSW50ZWdlcihcbiAgICAgIGJvdGhPZGRXaWR0aCAmJiAhaXNWYXJpYXRpb24gJiYgc2hvdWxkUm91bmRcbiAgICAgICAgPyBwb3BwZXIubGVmdCAtIDFcbiAgICAgICAgOiBwb3BwZXIubGVmdFxuICAgICksXG4gICAgdG9wOiB2ZXJ0aWNhbFRvSW50ZWdlcihwb3BwZXIudG9wKSxcbiAgICBib3R0b206IHZlcnRpY2FsVG9JbnRlZ2VyKHBvcHBlci5ib3R0b20pLFxuICAgIHJpZ2h0OiBob3Jpem9udGFsVG9JbnRlZ2VyKHBvcHBlci5yaWdodCksXG4gIH07XG59XG4iLCJpbXBvcnQgZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lIGZyb20gJy4uL3V0aWxzL2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSc7XG5pbXBvcnQgZmluZCBmcm9tICcuLi91dGlscy9maW5kJztcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSAnLi4vdXRpbHMvZ2V0T2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0JztcbmltcG9ydCBnZXRSb3VuZGVkT2Zmc2V0cyBmcm9tICcuLi91dGlscy9nZXRSb3VuZGVkT2Zmc2V0cyc7XG5pbXBvcnQgaXNCcm93c2VyIGZyb20gJy4uL3V0aWxzL2lzQnJvd3Nlcic7XG5cbmNvbnN0IGlzRmlyZWZveCA9IGlzQnJvd3NlciAmJiAvRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVTdHlsZShkYXRhLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgeCwgeSB9ID0gb3B0aW9ucztcbiAgY29uc3QgeyBwb3BwZXIgfSA9IGRhdGEub2Zmc2V0cztcblxuICAvLyBSZW1vdmUgdGhpcyBsZWdhY3kgc3VwcG9ydCBpbiBQb3BwZXIuanMgdjJcbiAgY29uc3QgbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uID0gZmluZChcbiAgICBkYXRhLmluc3RhbmNlLm1vZGlmaWVycyxcbiAgICBtb2RpZmllciA9PiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZSdcbiAgKS5ncHVBY2NlbGVyYXRpb247XG4gIGlmIChsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdXQVJOSU5HOiBgZ3B1QWNjZWxlcmF0aW9uYCBvcHRpb24gbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXIgYW5kIHdpbGwgbm90IGJlIHN1cHBvcnRlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUG9wcGVyLmpzISdcbiAgICApO1xuICB9XG4gIGNvbnN0IGdwdUFjY2VsZXJhdGlvbiA9XG4gICAgbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uICE9PSB1bmRlZmluZWRcbiAgICAgID8gbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uXG4gICAgICA6IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uO1xuXG4gIGNvbnN0IG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gIGNvbnN0IG9mZnNldFBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcblxuICAvLyBTdHlsZXNcbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiBwb3BwZXIucG9zaXRpb24sXG4gIH07XG5cbiAgY29uc3Qgb2Zmc2V0cyA9IGdldFJvdW5kZWRPZmZzZXRzKFxuICAgIGRhdGEsXG4gICAgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPCAyIHx8ICFpc0ZpcmVmb3hcbiAgKTtcblxuICBjb25zdCBzaWRlQSA9IHggPT09ICdib3R0b20nID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgY29uc3Qgc2lkZUIgPSB5ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3JpZ2h0JztcblxuICAvLyBpZiBncHVBY2NlbGVyYXRpb24gaXMgc2V0IHRvIGB0cnVlYCBhbmQgdHJhbnNmb3JtIGlzIHN1cHBvcnRlZCxcbiAgLy8gIHdlIHVzZSBgdHJhbnNsYXRlM2RgIHRvIGFwcGx5IHRoZSBwb3NpdGlvbiB0byB0aGUgcG9wcGVyIHdlXG4gIC8vIGF1dG9tYXRpY2FsbHkgdXNlIHRoZSBzdXBwb3J0ZWQgcHJlZml4ZWQgdmVyc2lvbiBpZiBuZWVkZWRcbiAgY29uc3QgcHJlZml4ZWRQcm9wZXJ0eSA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG5cbiAgLy8gbm93LCBsZXQncyBtYWtlIGEgc3RlcCBiYWNrIGFuZCBsb29rIGF0IHRoaXMgY29kZSBjbG9zZWx5ICh3dGY/KVxuICAvLyBJZiB0aGUgY29udGVudCBvZiB0aGUgcG9wcGVyIGdyb3dzIG9uY2UgaXQncyBiZWVuIHBvc2l0aW9uZWQsIGl0XG4gIC8vIG1heSBoYXBwZW4gdGhhdCB0aGUgcG9wcGVyIGdldHMgbWlzcGxhY2VkIGJlY2F1c2Ugb2YgdGhlIG5ldyBjb250ZW50XG4gIC8vIG92ZXJmbG93aW5nIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUbyBhdm9pZCB0aGlzIHByb2JsZW0sIHdlIHByb3ZpZGUgdHdvIG9wdGlvbnMgKHggYW5kIHkpLCB3aGljaCBhbGxvd1xuICAvLyB0aGUgY29uc3VtZXIgdG8gZGVmaW5lIHRoZSBvZmZzZXQgb3JpZ2luLlxuICAvLyBJZiB3ZSBwb3NpdGlvbiBhIHBvcHBlciBvbiB0b3Agb2YgYSByZWZlcmVuY2UgZWxlbWVudCwgd2UgY2FuIHNldFxuICAvLyBgeGAgdG8gYHRvcGAgdG8gbWFrZSB0aGUgcG9wcGVyIGdyb3cgdG93YXJkcyBpdHMgdG9wIGluc3RlYWQgb2ZcbiAgLy8gaXRzIGJvdHRvbS5cbiAgbGV0IGxlZnQsIHRvcDtcbiAgaWYgKHNpZGVBID09PSAnYm90dG9tJykge1xuICAgIC8vIHdoZW4gb2Zmc2V0UGFyZW50IGlzIDxodG1sPiB0aGUgcG9zaXRpb25pbmcgaXMgcmVsYXRpdmUgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIChleGNsdWRpbmcgdGhlIHNjcm9sbGJhcilcbiAgICAvLyBhbmQgbm90IHRoZSBib3R0b20gb2YgdGhlIGh0bWwgZWxlbWVudFxuICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgdG9wID0gLW9mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgKyBvZmZzZXRzLmJvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9wID0gLW9mZnNldFBhcmVudFJlY3QuaGVpZ2h0ICsgb2Zmc2V0cy5ib3R0b207XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRvcCA9IG9mZnNldHMudG9wO1xuICB9XG4gIGlmIChzaWRlQiA9PT0gJ3JpZ2h0Jykge1xuICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgbGVmdCA9IC1vZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gLW9mZnNldFBhcmVudFJlY3Qud2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZWZ0ID0gb2Zmc2V0cy5sZWZ0O1xuICB9XG4gIGlmIChncHVBY2NlbGVyYXRpb24gJiYgcHJlZml4ZWRQcm9wZXJ0eSkge1xuICAgIHN0eWxlc1twcmVmaXhlZFByb3BlcnR5XSA9IGB0cmFuc2xhdGUzZCgke2xlZnR9cHgsICR7dG9wfXB4LCAwKWA7XG4gICAgc3R5bGVzW3NpZGVBXSA9IDA7XG4gICAgc3R5bGVzW3NpZGVCXSA9IDA7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSAndHJhbnNmb3JtJztcbiAgfSBlbHNlIHtcbiAgICAvLyBvdGh3ZXJpc2UsIHdlIHVzZSB0aGUgc3RhbmRhcmQgYHRvcGAsIGBsZWZ0YCwgYGJvdHRvbWAgYW5kIGByaWdodGAgcHJvcGVydGllc1xuICAgIGNvbnN0IGludmVydFRvcCA9IHNpZGVBID09PSAnYm90dG9tJyA/IC0xIDogMTtcbiAgICBjb25zdCBpbnZlcnRMZWZ0ID0gc2lkZUIgPT09ICdyaWdodCcgPyAtMSA6IDE7XG4gICAgc3R5bGVzW3NpZGVBXSA9IHRvcCAqIGludmVydFRvcDtcbiAgICBzdHlsZXNbc2lkZUJdID0gbGVmdCAqIGludmVydExlZnQ7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSBgJHtzaWRlQX0sICR7c2lkZUJ9YDtcbiAgfVxuXG4gIC8vIEF0dHJpYnV0ZXNcbiAgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgICAneC1wbGFjZW1lbnQnOiBkYXRhLnBsYWNlbWVudCxcbiAgfTtcblxuICAvLyBVcGRhdGUgYGRhdGFgIGF0dHJpYnV0ZXMsIHN0eWxlcyBhbmQgYXJyb3dTdHlsZXNcbiAgZGF0YS5hdHRyaWJ1dGVzID0geyAuLi5hdHRyaWJ1dGVzLCAuLi5kYXRhLmF0dHJpYnV0ZXMgfTtcbiAgZGF0YS5zdHlsZXMgPSB7IC4uLnN0eWxlcywgLi4uZGF0YS5zdHlsZXMgfTtcbiAgZGF0YS5hcnJvd1N0eWxlcyA9IHsgLi4uZGF0YS5vZmZzZXRzLmFycm93LCAuLi5kYXRhLmFycm93U3R5bGVzIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgZmluZCBmcm9tICcuL2ZpbmQnO1xuXG4vKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGRlcGVuZHMgZnJvbSBhbm90aGVyIG9uZS48YnIgLz5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgbmVlZGVkIG1vZGlmaWVyIGlzIGxpc3RlZCBhbmQgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVycyAtIGxpc3Qgb2YgbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGluZ05hbWUgLSBuYW1lIG9mIHJlcXVlc3RpbmcgbW9kaWZpZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0ZWROYW1lIC0gbmFtZSBvZiByZXF1ZXN0ZWQgbW9kaWZpZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc01vZGlmaWVyUmVxdWlyZWQoXG4gIG1vZGlmaWVycyxcbiAgcmVxdWVzdGluZ05hbWUsXG4gIHJlcXVlc3RlZE5hbWVcbikge1xuICBjb25zdCByZXF1ZXN0aW5nID0gZmluZChtb2RpZmllcnMsICh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcmVxdWVzdGluZ05hbWUpO1xuXG4gIGNvbnN0IGlzUmVxdWlyZWQgPVxuICAgICEhcmVxdWVzdGluZyAmJlxuICAgIG1vZGlmaWVycy5zb21lKG1vZGlmaWVyID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG1vZGlmaWVyLm5hbWUgPT09IHJlcXVlc3RlZE5hbWUgJiZcbiAgICAgICAgbW9kaWZpZXIuZW5hYmxlZCAmJlxuICAgICAgICBtb2RpZmllci5vcmRlciA8IHJlcXVlc3Rpbmcub3JkZXJcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgaWYgKCFpc1JlcXVpcmVkKSB7XG4gICAgY29uc3QgcmVxdWVzdGluZyA9IGBcXGAke3JlcXVlc3RpbmdOYW1lfVxcYGA7XG4gICAgY29uc3QgcmVxdWVzdGVkID0gYFxcYCR7cmVxdWVzdGVkTmFtZX1cXGBgO1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGAke3JlcXVlc3RlZH0gbW9kaWZpZXIgaXMgcmVxdWlyZWQgYnkgJHtyZXF1ZXN0aW5nfSBtb2RpZmllciBpbiBvcmRlciB0byB3b3JrLCBiZSBzdXJlIHRvIGluY2x1ZGUgaXQgYmVmb3JlICR7cmVxdWVzdGluZ30hYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGlzUmVxdWlyZWQ7XG59XG4iLCJpbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuLi91dGlscy9nZXRDbGllbnRSZWN0JztcbmltcG9ydCBnZXRPdXRlclNpemVzIGZyb20gJy4uL3V0aWxzL2dldE91dGVyU2l6ZXMnO1xuaW1wb3J0IGlzTW9kaWZpZXJSZXF1aXJlZCBmcm9tICcuLi91dGlscy9pc01vZGlmaWVyUmVxdWlyZWQnO1xuaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuLi91dGlscy9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyb3coZGF0YSwgb3B0aW9ucykge1xuICAvLyBhcnJvdyBkZXBlbmRzIG9uIGtlZXBUb2dldGhlciBpbiBvcmRlciB0byB3b3JrXG4gIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnYXJyb3cnLCAna2VlcFRvZ2V0aGVyJykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGxldCBhcnJvd0VsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGEgc3RyaW5nLCBzdXBwb3NlIGl0J3MgYSBDU1Mgc2VsZWN0b3JcbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIG5vdCBmb3VuZCwgZG9uJ3QgcnVuIHRoZSBtb2RpZmllclxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgdGhlIGFycm93RWxlbWVudCBpc24ndCBhIHF1ZXJ5IHNlbGVjdG9yIHdlIG11c3QgY2hlY2sgdGhhdCB0aGVcbiAgICAvLyBwcm92aWRlZCBET00gbm9kZSBpcyBjaGlsZCBvZiBpdHMgcG9wcGVyIG5vZGVcbiAgICBpZiAoIWRhdGEuaW5zdGFuY2UucG9wcGVyLmNvbnRhaW5zKGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1dBUk5JTkc6IGBhcnJvdy5lbGVtZW50YCBtdXN0IGJlIGNoaWxkIG9mIGl0cyBwb3BwZXIgZWxlbWVudCEnXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gZGF0YS5vZmZzZXRzO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcblxuICBjb25zdCBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICBjb25zdCBzaWRlQ2FwaXRhbGl6ZWQgPSBpc1ZlcnRpY2FsID8gJ1RvcCcgOiAnTGVmdCc7XG4gIGNvbnN0IHNpZGUgPSBzaWRlQ2FwaXRhbGl6ZWQudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgYWx0U2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3Qgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgY29uc3QgYXJyb3dFbGVtZW50U2l6ZSA9IGdldE91dGVyU2l6ZXMoYXJyb3dFbGVtZW50KVtsZW5dO1xuXG4gIC8vXG4gIC8vIGV4dGVuZHMga2VlcFRvZ2V0aGVyIGJlaGF2aW9yIG1ha2luZyBzdXJlIHRoZSBwb3BwZXIgYW5kIGl0c1xuICAvLyByZWZlcmVuY2UgaGF2ZSBlbm91Z2ggcGl4ZWxzIGluIGNvbmp1bmN0aW9uXG4gIC8vXG5cbiAgLy8gdG9wL2xlZnQgc2lkZVxuICBpZiAocmVmZXJlbmNlW29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplIDwgcG9wcGVyW3NpZGVdKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSAtPVxuICAgICAgcG9wcGVyW3NpZGVdIC0gKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSk7XG4gIH1cbiAgLy8gYm90dG9tL3JpZ2h0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgPiBwb3BwZXJbb3BTaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gKz1cbiAgICAgIHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgLSBwb3BwZXJbb3BTaWRlXTtcbiAgfVxuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcblxuICAvLyBjb21wdXRlIGNlbnRlciBvZiB0aGUgcG9wcGVyXG4gIGNvbnN0IGNlbnRlciA9IHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyO1xuXG4gIC8vIENvbXB1dGUgdGhlIHNpZGVWYWx1ZSB1c2luZyB0aGUgdXBkYXRlZCBwb3BwZXIgb2Zmc2V0c1xuICAvLyB0YWtlIHBvcHBlciBtYXJnaW4gaW4gYWNjb3VudCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgdGhpcyBpbmZvIGF2YWlsYWJsZVxuICBjb25zdCBjc3MgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICBjb25zdCBwb3BwZXJNYXJnaW5TaWRlID0gcGFyc2VGbG9hdChjc3NbYG1hcmdpbiR7c2lkZUNhcGl0YWxpemVkfWBdLCAxMCk7XG4gIGNvbnN0IHBvcHBlckJvcmRlclNpZGUgPSBwYXJzZUZsb2F0KGNzc1tgYm9yZGVyJHtzaWRlQ2FwaXRhbGl6ZWR9V2lkdGhgXSwgMTApO1xuICBsZXQgc2lkZVZhbHVlID1cbiAgICBjZW50ZXIgLSBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC0gcG9wcGVyTWFyZ2luU2lkZSAtIHBvcHBlckJvcmRlclNpZGU7XG5cbiAgLy8gcHJldmVudCBhcnJvd0VsZW1lbnQgZnJvbSBiZWluZyBwbGFjZWQgbm90IGNvbnRpZ3VvdXNseSB0byBpdHMgcG9wcGVyXG4gIHNpZGVWYWx1ZSA9IE1hdGgubWF4KE1hdGgubWluKHBvcHBlcltsZW5dIC0gYXJyb3dFbGVtZW50U2l6ZSwgc2lkZVZhbHVlKSwgMCk7XG5cbiAgZGF0YS5hcnJvd0VsZW1lbnQgPSBhcnJvd0VsZW1lbnQ7XG4gIGRhdGEub2Zmc2V0cy5hcnJvdyA9IHtcbiAgICBbc2lkZV06IE1hdGgucm91bmQoc2lkZVZhbHVlKSxcbiAgICBbYWx0U2lkZV06ICcnLCAvLyBtYWtlIHN1cmUgdG8gdW5zZXQgYW55IGV2ZW50dWFsIGFsdFNpZGUgdmFsdWUgZnJvbSB0aGUgRE9NIG5vZGVcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsIi8qKlxuICogR2V0IHRoZSBvcHBvc2l0ZSBwbGFjZW1lbnQgdmFyaWF0aW9uIG9mIHRoZSBnaXZlbiBvbmVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudCB2YXJpYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKSB7XG4gIGlmICh2YXJpYXRpb24gPT09ICdlbmQnKSB7XG4gICAgcmV0dXJuICdzdGFydCc7XG4gIH0gZWxzZSBpZiAodmFyaWF0aW9uID09PSAnc3RhcnQnKSB7XG4gICAgcmV0dXJuICdlbmQnO1xuICB9XG4gIHJldHVybiB2YXJpYXRpb247XG59XG4iLCIvKipcbiAqIExpc3Qgb2YgYWNjZXB0ZWQgcGxhY2VtZW50cyB0byB1c2UgYXMgdmFsdWVzIG9mIHRoZSBgcGxhY2VtZW50YCBvcHRpb24uPGJyIC8+XG4gKiBWYWxpZCBwbGFjZW1lbnRzIGFyZTpcbiAqIC0gYGF1dG9gXG4gKiAtIGB0b3BgXG4gKiAtIGByaWdodGBcbiAqIC0gYGJvdHRvbWBcbiAqIC0gYGxlZnRgXG4gKlxuICogRWFjaCBwbGFjZW1lbnQgY2FuIGhhdmUgYSB2YXJpYXRpb24gZnJvbSB0aGlzIGxpc3Q6XG4gKiAtIGAtc3RhcnRgXG4gKiAtIGAtZW5kYFxuICpcbiAqIFZhcmlhdGlvbnMgYXJlIGludGVycHJldGVkIGVhc2lseSBpZiB5b3UgdGhpbmsgb2YgdGhlbSBhcyB0aGUgbGVmdCB0byByaWdodFxuICogd3JpdHRlbiBsYW5ndWFnZXMuIEhvcml6b250YWxseSAoYHRvcGAgYW5kIGBib3R0b21gKSwgYHN0YXJ0YCBpcyBsZWZ0IGFuZCBgZW5kYFxuICogaXMgcmlnaHQuPGJyIC8+XG4gKiBWZXJ0aWNhbGx5IChgbGVmdGAgYW5kIGByaWdodGApLCBgc3RhcnRgIGlzIHRvcCBhbmQgYGVuZGAgaXMgYm90dG9tLlxuICpcbiAqIFNvbWUgdmFsaWQgZXhhbXBsZXMgYXJlOlxuICogLSBgdG9wLWVuZGAgKG9uIHRvcCBvZiByZWZlcmVuY2UsIHJpZ2h0IGFsaWduZWQpXG4gKiAtIGByaWdodC1zdGFydGAgKG9uIHJpZ2h0IG9mIHJlZmVyZW5jZSwgdG9wIGFsaWduZWQpXG4gKiAtIGBib3R0b21gIChvbiBib3R0b20sIGNlbnRlcmVkKVxuICogLSBgYXV0by1lbmRgIChvbiB0aGUgc2lkZSB3aXRoIG1vcmUgc3BhY2UgYXZhaWxhYmxlLCBhbGlnbm1lbnQgZGVwZW5kcyBieSBwbGFjZW1lbnQpXG4gKlxuICogQHN0YXRpY1xuICogQHR5cGUge0FycmF5fVxuICogQGVudW0ge1N0cmluZ31cbiAqIEByZWFkb25seVxuICogQG1ldGhvZCBwbGFjZW1lbnRzXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2F1dG8tc3RhcnQnLFxuICAnYXV0bycsXG4gICdhdXRvLWVuZCcsXG4gICd0b3Atc3RhcnQnLFxuICAndG9wJyxcbiAgJ3RvcC1lbmQnLFxuICAncmlnaHQtc3RhcnQnLFxuICAncmlnaHQnLFxuICAncmlnaHQtZW5kJyxcbiAgJ2JvdHRvbS1lbmQnLFxuICAnYm90dG9tJyxcbiAgJ2JvdHRvbS1zdGFydCcsXG4gICdsZWZ0LWVuZCcsXG4gICdsZWZ0JyxcbiAgJ2xlZnQtc3RhcnQnLFxuXTtcbiIsImltcG9ydCBwbGFjZW1lbnRzIGZyb20gJy4uL21ldGhvZHMvcGxhY2VtZW50cyc7XG5cbi8vIEdldCByaWQgb2YgYGF1dG9gIGBhdXRvLXN0YXJ0YCBhbmQgYGF1dG8tZW5kYFxuY29uc3QgdmFsaWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5zbGljZSgzKTtcblxuLyoqXG4gKiBHaXZlbiBhbiBpbml0aWFsIHBsYWNlbWVudCwgcmV0dXJucyBhbGwgdGhlIHN1YnNlcXVlbnQgcGxhY2VtZW50c1xuICogY2xvY2t3aXNlIChvciBjb3VudGVyLWNsb2Nrd2lzZSkuXG4gKlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCAtIEEgdmFsaWQgcGxhY2VtZW50IChpdCBhY2NlcHRzIHZhcmlhdGlvbnMpXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IGNvdW50ZXIgLSBTZXQgdG8gdHJ1ZSB0byB3YWxrIHRoZSBwbGFjZW1lbnRzIGNvdW50ZXJjbG9ja3dpc2VcbiAqIEByZXR1cm5zIHtBcnJheX0gcGxhY2VtZW50cyBpbmNsdWRpbmcgdGhlaXIgdmFyaWF0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9ja3dpc2UocGxhY2VtZW50LCBjb3VudGVyID0gZmFsc2UpIHtcbiAgY29uc3QgaW5kZXggPSB2YWxpZFBsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpO1xuICBjb25zdCBhcnIgPSB2YWxpZFBsYWNlbWVudHNcbiAgICAuc2xpY2UoaW5kZXggKyAxKVxuICAgIC5jb25jYXQodmFsaWRQbGFjZW1lbnRzLnNsaWNlKDAsIGluZGV4KSk7XG4gIHJldHVybiBjb3VudGVyID8gYXJyLnJldmVyc2UoKSA6IGFycjtcbn1cbiIsImltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tICcuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVWYXJpYXRpb24gZnJvbSAnLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb24nO1xuaW1wb3J0IGdldFBvcHBlck9mZnNldHMgZnJvbSAnLi4vdXRpbHMvZ2V0UG9wcGVyT2Zmc2V0cyc7XG5pbXBvcnQgcnVuTW9kaWZpZXJzIGZyb20gJy4uL3V0aWxzL3J1bk1vZGlmaWVycyc7XG5pbXBvcnQgZ2V0Qm91bmRhcmllcyBmcm9tICcuLi91dGlscy9nZXRCb3VuZGFyaWVzJztcbmltcG9ydCBpc01vZGlmaWVyRW5hYmxlZCBmcm9tICcuLi91dGlscy9pc01vZGlmaWVyRW5hYmxlZCc7XG5pbXBvcnQgY2xvY2t3aXNlIGZyb20gJy4uL3V0aWxzL2Nsb2Nrd2lzZSc7XG5cbmNvbnN0IEJFSEFWSU9SUyA9IHtcbiAgRkxJUDogJ2ZsaXAnLFxuICBDTE9DS1dJU0U6ICdjbG9ja3dpc2UnLFxuICBDT1VOVEVSQ0xPQ0tXSVNFOiAnY291bnRlcmNsb2Nrd2lzZScsXG59O1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmxpcChkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGlmIGBpbm5lcmAgbW9kaWZpZXIgaXMgZW5hYmxlZCwgd2UgY2FuJ3QgdXNlIHRoZSBgZmxpcGAgbW9kaWZpZXJcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaW5uZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEuZmxpcHBlZCAmJiBkYXRhLnBsYWNlbWVudCA9PT0gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCkge1xuICAgIC8vIHNlZW1zIGxpa2UgZmxpcCBpcyB0cnlpbmcgdG8gbG9vcCwgcHJvYmFibHkgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIG9uIGFueSBvZiB0aGUgZmxpcHBhYmxlIHNpZGVzXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBkYXRhLmluc3RhbmNlLnBvcHBlcixcbiAgICBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSxcbiAgICBvcHRpb25zLnBhZGRpbmcsXG4gICAgb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCxcbiAgICBkYXRhLnBvc2l0aW9uRml4ZWRcbiAgKTtcblxuICBsZXQgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgbGV0IHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgbGV0IHZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMV0gfHwgJyc7XG5cbiAgbGV0IGZsaXBPcmRlciA9IFtdO1xuXG4gIHN3aXRjaCAob3B0aW9ucy5iZWhhdmlvcikge1xuICAgIGNhc2UgQkVIQVZJT1JTLkZMSVA6XG4gICAgICBmbGlwT3JkZXIgPSBbcGxhY2VtZW50LCBwbGFjZW1lbnRPcHBvc2l0ZV07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJFSEFWSU9SUy5DTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNPVU5URVJDTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50LCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBmbGlwT3JkZXIgPSBvcHRpb25zLmJlaGF2aW9yO1xuICB9XG5cbiAgZmxpcE9yZGVyLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgaWYgKHBsYWNlbWVudCAhPT0gc3RlcCB8fCBmbGlwT3JkZXIubGVuZ3RoID09PSBpbmRleCArIDEpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gICAgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgY29uc3QgcG9wcGVyT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG4gICAgY29uc3QgcmVmT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgICAvLyB1c2luZyBmbG9vciBiZWNhdXNlIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyBtYXkgY29udGFpbiBkZWNpbWFscyB3ZSBhcmUgbm90IGdvaW5nIHRvIGNvbnNpZGVyIGhlcmVcbiAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgY29uc3Qgb3ZlcmxhcHNSZWYgPVxuICAgICAgKHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmXG4gICAgICAgIGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IocmVmT2Zmc2V0cy5sZWZ0KSkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgJiZcbiAgICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKHJlZk9mZnNldHMucmlnaHQpKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3RvcCcgJiZcbiAgICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IocmVmT2Zmc2V0cy50b3ApKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiZcbiAgICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IocmVmT2Zmc2V0cy5ib3R0b20pKTtcblxuICAgIGNvbnN0IG92ZXJmbG93c0xlZnQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IoYm91bmRhcmllcy5sZWZ0KTtcbiAgICBjb25zdCBvdmVyZmxvd3NSaWdodCA9IGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IoYm91bmRhcmllcy5yaWdodCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dzVG9wID0gZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IoYm91bmRhcmllcy50b3ApO1xuICAgIGNvbnN0IG92ZXJmbG93c0JvdHRvbSA9XG4gICAgICBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihib3VuZGFyaWVzLmJvdHRvbSk7XG5cbiAgICBjb25zdCBvdmVyZmxvd3NCb3VuZGFyaWVzID1cbiAgICAgIChwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NMZWZ0KSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBvdmVyZmxvd3NSaWdodCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICd0b3AnICYmIG92ZXJmbG93c1RvcCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIG92ZXJmbG93c0JvdHRvbSk7XG5cbiAgICAvLyBmbGlwIHRoZSB2YXJpYXRpb24gaWYgcmVxdWlyZWRcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIC8vIGZsaXBzIHZhcmlhdGlvbiBpZiByZWZlcmVuY2UgZWxlbWVudCBvdmVyZmxvd3MgYm91bmRhcmllc1xuICAgIGNvbnN0IGZsaXBwZWRWYXJpYXRpb25CeVJlZiA9XG4gICAgICAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnMgJiZcbiAgICAgICgoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgICAgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NSaWdodCkgfHxcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NUb3ApIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c0JvdHRvbSkpO1xuXG4gICAgLy8gZmxpcHMgdmFyaWF0aW9uIGlmIHBvcHBlciBjb250ZW50IG92ZXJmbG93cyBib3VuZGFyaWVzXG4gICAgY29uc3QgZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudCA9XG4gICAgICAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQgJiZcbiAgICAgICgoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XG4gICAgICAgIChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NCb3R0b20pIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1RvcCkpO1xuXG4gICAgY29uc3QgZmxpcHBlZFZhcmlhdGlvbiA9IGZsaXBwZWRWYXJpYXRpb25CeVJlZiB8fCBmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50O1xuXG4gICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMgfHwgZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgLy8gdGhpcyBib29sZWFuIHRvIGRldGVjdCBhbnkgZmxpcCBsb29wXG4gICAgICBkYXRhLmZsaXBwZWQgPSB0cnVlO1xuXG4gICAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcykge1xuICAgICAgICBwbGFjZW1lbnQgPSBmbGlwT3JkZXJbaW5kZXggKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgICAgdmFyaWF0aW9uID0gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xuXG4gICAgICAvLyB0aGlzIG9iamVjdCBjb250YWlucyBgcG9zaXRpb25gLCB3ZSB3YW50IHRvIHByZXNlcnZlIGl0IGFsb25nIHdpdGhcbiAgICAgIC8vIGFueSBhZGRpdGlvbmFsIHByb3BlcnR5IHdlIG1heSBhZGQgaW4gdGhlIGZ1dHVyZVxuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IHtcbiAgICAgICAgLi4uZGF0YS5vZmZzZXRzLnBvcHBlcixcbiAgICAgICAgLi4uZ2V0UG9wcGVyT2Zmc2V0cyhcbiAgICAgICAgICBkYXRhLmluc3RhbmNlLnBvcHBlcixcbiAgICAgICAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlLFxuICAgICAgICAgIGRhdGEucGxhY2VtZW50XG4gICAgICAgICksXG4gICAgICB9O1xuXG4gICAgICBkYXRhID0gcnVuTW9kaWZpZXJzKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBkYXRhLCAnZmxpcCcpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtlZXBUb2dldGhlcihkYXRhKSB7XG4gIGNvbnN0IHsgcG9wcGVyLCByZWZlcmVuY2UgfSA9IGRhdGEub2Zmc2V0cztcbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgY29uc3Qgc2lkZSA9IGlzVmVydGljYWwgPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gIGNvbnN0IG9wU2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gIGlmIChwb3BwZXJbc2lkZV0gPCBmbG9vcihyZWZlcmVuY2Vbb3BTaWRlXSkpIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW29wU2lkZV0gPVxuICAgICAgZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pIC0gcG9wcGVyW21lYXN1cmVtZW50XTtcbiAgfVxuICBpZiAocG9wcGVyW29wU2lkZV0gPiBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW3NpZGVdKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGlzTnVtZXJpYyBmcm9tICcuLi91dGlscy9pc051bWVyaWMnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvZ2V0Q2xpZW50UmVjdCc7XG5pbXBvcnQgZmluZCBmcm9tICcuLi91dGlscy9maW5kJztcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmluZyBjb250YWluaW5nIHZhbHVlICsgdW5pdCBpbnRvIGEgcHggdmFsdWUgbnVtYmVyXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiB7bW9kaWZpZXJzfm9mZnNldH1cbiAqIEBwcml2YXRlXG4gKiBAYXJndW1lbnQge1N0cmluZ30gc3RyIC0gVmFsdWUgKyB1bml0IHN0cmluZ1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IG1lYXN1cmVtZW50IC0gYGhlaWdodGAgb3IgYHdpZHRoYFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAcmV0dXJucyB7TnVtYmVyfFN0cmluZ31cbiAqIFZhbHVlIGluIHBpeGVscywgb3Igb3JpZ2luYWwgc3RyaW5nIGlmIG5vIHZhbHVlcyB3ZXJlIGV4dHJhY3RlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKSB7XG4gIC8vIHNlcGFyYXRlIHZhbHVlIGZyb20gdW5pdFxuICBjb25zdCBzcGxpdCA9IHN0ci5tYXRjaCgvKCg/OlxcLXxcXCspP1xcZCpcXC4/XFxkKikoLiopLyk7XG4gIGNvbnN0IHZhbHVlID0gK3NwbGl0WzFdO1xuICBjb25zdCB1bml0ID0gc3BsaXRbMl07XG5cbiAgLy8gSWYgaXQncyBub3QgYSBudW1iZXIgaXQncyBhbiBvcGVyYXRvciwgSSBndWVzc1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGlmICh1bml0LmluZGV4T2YoJyUnKSA9PT0gMCkge1xuICAgIGxldCBlbGVtZW50O1xuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgY2FzZSAnJXAnOlxuICAgICAgICBlbGVtZW50ID0gcG9wcGVyT2Zmc2V0cztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICclJzpcbiAgICAgIGNhc2UgJyVyJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnQgPSByZWZlcmVuY2VPZmZzZXRzO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3QgPSBnZXRDbGllbnRSZWN0KGVsZW1lbnQpO1xuICAgIHJldHVybiByZWN0W21lYXN1cmVtZW50XSAvIDEwMCAqIHZhbHVlO1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICd2aCcgfHwgdW5pdCA9PT0gJ3Z3Jykge1xuICAgIC8vIGlmIGlzIGEgdmggb3IgdncsIHdlIGNhbGN1bGF0ZSB0aGUgc2l6ZSBiYXNlZCBvbiB0aGUgdmlld3BvcnRcbiAgICBsZXQgc2l6ZTtcbiAgICBpZiAodW5pdCA9PT0gJ3ZoJykge1xuICAgICAgc2l6ZSA9IE1hdGgubWF4KFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2l6ZSA9IE1hdGgubWF4KFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8IDBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzaXplIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgaXMgYW4gZXhwbGljaXQgcGl4ZWwgdW5pdCwgd2UgZ2V0IHJpZCBvZiB0aGUgdW5pdCBhbmQga2VlcCB0aGUgdmFsdWVcbiAgICAvLyBpZiBpcyBhbiBpbXBsaWNpdCB1bml0LCBpdCdzIHB4LCBhbmQgd2UgcmV0dXJuIGp1c3QgdGhlIHZhbHVlXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogUGFyc2UgYW4gYG9mZnNldGAgc3RyaW5nIHRvIGV4dHJhcG9sYXRlIGB4YCBhbmQgYHlgIG51bWVyaWMgb2Zmc2V0cy5cbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBvZmZzZXRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzXG4gKiBAYXJndW1lbnQge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IGJhc2VQbGFjZW1lbnRcbiAqIEByZXR1cm5zIHtBcnJheX0gYSB0d28gY2VsbHMgYXJyYXkgd2l0aCB4IGFuZCB5IG9mZnNldHMgaW4gbnVtYmVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VPZmZzZXQoXG4gIG9mZnNldCxcbiAgcG9wcGVyT2Zmc2V0cyxcbiAgcmVmZXJlbmNlT2Zmc2V0cyxcbiAgYmFzZVBsYWNlbWVudFxuKSB7XG4gIGNvbnN0IG9mZnNldHMgPSBbMCwgMF07XG5cbiAgLy8gVXNlIGhlaWdodCBpZiBwbGFjZW1lbnQgaXMgbGVmdCBvciByaWdodCBhbmQgaW5kZXggaXMgMCBvdGhlcndpc2UgdXNlIHdpZHRoXG4gIC8vIGluIHRoaXMgd2F5IHRoZSBmaXJzdCBvZmZzZXQgd2lsbCB1c2UgYW4gYXhpcyBhbmQgdGhlIHNlY29uZCBvbmVcbiAgLy8gd2lsbCB1c2UgdGhlIG90aGVyIG9uZVxuICBjb25zdCB1c2VIZWlnaHQgPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAvLyBTcGxpdCB0aGUgb2Zmc2V0IHN0cmluZyB0byBvYnRhaW4gYSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHNcbiAgLy8gVGhlIHJlZ2V4IGFkZHJlc3NlcyB2YWx1ZXMgd2l0aCB0aGUgcGx1cyBvciBtaW51cyBzaWduIGluIGZyb250ICgrMTAsIC0yMCwgZXRjKVxuICBjb25zdCBmcmFnbWVudHMgPSBvZmZzZXQuc3BsaXQoLyhcXCt8XFwtKS8pLm1hcChmcmFnID0+IGZyYWcudHJpbSgpKTtcblxuICAvLyBEZXRlY3QgaWYgdGhlIG9mZnNldCBzdHJpbmcgY29udGFpbnMgYSBwYWlyIG9mIHZhbHVlcyBvciBhIHNpbmdsZSBvbmVcbiAgLy8gdGhleSBjb3VsZCBiZSBzZXBhcmF0ZWQgYnkgY29tbWEgb3Igc3BhY2VcbiAgY29uc3QgZGl2aWRlciA9IGZyYWdtZW50cy5pbmRleE9mKFxuICAgIGZpbmQoZnJhZ21lbnRzLCBmcmFnID0+IGZyYWcuc2VhcmNoKC8sfFxccy8pICE9PSAtMSlcbiAgKTtcblxuICBpZiAoZnJhZ21lbnRzW2RpdmlkZXJdICYmIGZyYWdtZW50c1tkaXZpZGVyXS5pbmRleE9mKCcsJykgPT09IC0xKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ09mZnNldHMgc2VwYXJhdGVkIGJ5IHdoaXRlIHNwYWNlKHMpIGFyZSBkZXByZWNhdGVkLCB1c2UgYSBjb21tYSAoLCkgaW5zdGVhZC4nXG4gICAgKTtcbiAgfVxuXG4gIC8vIElmIGRpdmlkZXIgaXMgZm91bmQsIHdlIGRpdmlkZSB0aGUgbGlzdCBvZiB2YWx1ZXMgYW5kIG9wZXJhbmRzIHRvIGRpdmlkZVxuICAvLyB0aGVtIGJ5IG9mc2V0IFggYW5kIFkuXG4gIGNvbnN0IHNwbGl0UmVnZXggPSAvXFxzKixcXHMqfFxccysvO1xuICBsZXQgb3BzID0gZGl2aWRlciAhPT0gLTFcbiAgICA/IFtcbiAgICAgICAgZnJhZ21lbnRzXG4gICAgICAgICAgLnNsaWNlKDAsIGRpdmlkZXIpXG4gICAgICAgICAgLmNvbmNhdChbZnJhZ21lbnRzW2RpdmlkZXJdLnNwbGl0KHNwbGl0UmVnZXgpWzBdXSksXG4gICAgICAgIFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMV1dLmNvbmNhdChcbiAgICAgICAgICBmcmFnbWVudHMuc2xpY2UoZGl2aWRlciArIDEpXG4gICAgICAgICksXG4gICAgICBdXG4gICAgOiBbZnJhZ21lbnRzXTtcblxuICAvLyBDb252ZXJ0IHRoZSB2YWx1ZXMgd2l0aCB1bml0cyB0byBhYnNvbHV0ZSBwaXhlbHMgdG8gYWxsb3cgb3VyIGNvbXB1dGF0aW9uc1xuICBvcHMgPSBvcHMubWFwKChvcCwgaW5kZXgpID0+IHtcbiAgICAvLyBNb3N0IG9mIHRoZSB1bml0cyByZWx5IG9uIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcG9wcGVyXG4gICAgY29uc3QgbWVhc3VyZW1lbnQgPSAoaW5kZXggPT09IDEgPyAhdXNlSGVpZ2h0IDogdXNlSGVpZ2h0KVxuICAgICAgPyAnaGVpZ2h0J1xuICAgICAgOiAnd2lkdGgnO1xuICAgIGxldCBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgIHJldHVybiAoXG4gICAgICBvcFxuICAgICAgICAvLyBUaGlzIGFnZ3JlZ2F0ZXMgYW55IGArYCBvciBgLWAgc2lnbiB0aGF0IGFyZW4ndCBjb25zaWRlcmVkIG9wZXJhdG9yc1xuICAgICAgICAvLyBlLmcuOiAxMCArICs1ID0+IFsxMCwgKywgKzVdXG4gICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgICAgICBpZiAoYVthLmxlbmd0aCAtIDFdID09PSAnJyAmJiBbJysnLCAnLSddLmluZGV4T2YoYikgIT09IC0xKSB7XG4gICAgICAgICAgICBhW2EubGVuZ3RoIC0gMV0gPSBiO1xuICAgICAgICAgICAgbWVyZ2VXaXRoUHJldmlvdXMgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXJnZVdpdGhQcmV2aW91cykge1xuICAgICAgICAgICAgYVthLmxlbmd0aCAtIDFdICs9IGI7XG4gICAgICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhLmNvbmNhdChiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKVxuICAgICAgICAvLyBIZXJlIHdlIGNvbnZlcnQgdGhlIHN0cmluZyB2YWx1ZXMgaW50byBudW1iZXIgdmFsdWVzIChpbiBweClcbiAgICAgICAgLm1hcChzdHIgPT4gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKSlcbiAgICApO1xuICB9KTtcblxuICAvLyBMb29wIHRyb3VnaCB0aGUgb2Zmc2V0cyBhcnJheXMgYW5kIGV4ZWN1dGUgdGhlIG9wZXJhdGlvbnNcbiAgb3BzLmZvckVhY2goKG9wLCBpbmRleCkgPT4ge1xuICAgIG9wLmZvckVhY2goKGZyYWcsIGluZGV4MikgPT4ge1xuICAgICAgaWYgKGlzTnVtZXJpYyhmcmFnKSkge1xuICAgICAgICBvZmZzZXRzW2luZGV4XSArPSBmcmFnICogKG9wW2luZGV4MiAtIDFdID09PSAnLScgPyAtMSA6IDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQGFyZ3VtZW50IHtOdW1iZXJ8U3RyaW5nfSBvcHRpb25zLm9mZnNldD0wXG4gKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2Zmc2V0KGRhdGEsIHsgb2Zmc2V0IH0pIHtcbiAgY29uc3QgeyBwbGFjZW1lbnQsIG9mZnNldHM6IHsgcG9wcGVyLCByZWZlcmVuY2UgfSB9ID0gZGF0YTtcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIGxldCBvZmZzZXRzO1xuICBpZiAoaXNOdW1lcmljKCtvZmZzZXQpKSB7XG4gICAgb2Zmc2V0cyA9IFsrb2Zmc2V0LCAwXTtcbiAgfSBlbHNlIHtcbiAgICBvZmZzZXRzID0gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYmFzZVBsYWNlbWVudCk7XG4gIH1cblxuICBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0IC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wIC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1sxXTtcbiAgfVxuXG4gIGRhdGEucG9wcGVyID0gcG9wcGVyO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSAnLi4vdXRpbHMvZ2V0T2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRCb3VuZGFyaWVzIGZyb20gJy4uL3V0aWxzL2dldEJvdW5kYXJpZXMnO1xuaW1wb3J0IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSBmcm9tICcuLi91dGlscy9nZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUnO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coZGF0YSwgb3B0aW9ucykge1xuICBsZXQgYm91bmRhcmllc0VsZW1lbnQgPVxuICAgIG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQgfHwgZ2V0T2Zmc2V0UGFyZW50KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcblxuICAvLyBJZiBvZmZzZXRQYXJlbnQgaXMgdGhlIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSByZWFsbHkgd2FudCB0b1xuICAvLyBnbyBvbmUgc3RlcCB1cCBhbmQgdXNlIHRoZSBuZXh0IG9mZnNldFBhcmVudCBhcyByZWZlcmVuY2UgdG9cbiAgLy8gYXZvaWQgdG8gbWFrZSB0aGlzIG1vZGlmaWVyIGNvbXBsZXRlbHkgdXNlbGVzcyBhbmQgbG9vayBsaWtlIGJyb2tlblxuICBpZiAoZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UgPT09IGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gICAgYm91bmRhcmllc0VsZW1lbnQgPSBnZXRPZmZzZXRQYXJlbnQoYm91bmRhcmllc0VsZW1lbnQpO1xuICB9XG5cbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gIC8vIHJlc2V0cyB0aGUgcG9wcGVyJ3MgcG9zaXRpb24gc28gdGhhdCB0aGUgZG9jdW1lbnQgc2l6ZSBjYW4gYmUgY2FsY3VsYXRlZCBleGNsdWRpbmdcbiAgLy8gdGhlIHNpemUgb2YgdGhlIHBvcHBlciBlbGVtZW50IGl0c2VsZlxuICBjb25zdCB0cmFuc2Zvcm1Qcm9wID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgY29uc3QgcG9wcGVyU3R5bGVzID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIuc3R5bGU7IC8vIGFzc2lnbm1lbnQgdG8gaGVscCBtaW5pZmljYXRpb25cbiAgY29uc3QgeyB0b3AsIGxlZnQsIFt0cmFuc2Zvcm1Qcm9wXTogdHJhbnNmb3JtIH0gPSBwb3BwZXJTdHlsZXM7XG4gIHBvcHBlclN0eWxlcy50b3AgPSAnJztcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSAnJztcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gJyc7XG5cbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoXG4gICAgZGF0YS5pbnN0YW5jZS5wb3BwZXIsXG4gICAgZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UsXG4gICAgb3B0aW9ucy5wYWRkaW5nLFxuICAgIGJvdW5kYXJpZXNFbGVtZW50LFxuICAgIGRhdGEucG9zaXRpb25GaXhlZFxuICApO1xuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXN0b3JlcyB0aGUgb3JpZ2luYWwgc3R5bGUgcHJvcGVydGllcyBhZnRlciB0aGUgb2Zmc2V0cyBoYXZlIGJlZW4gY29tcHV0ZWRcbiAgcG9wcGVyU3R5bGVzLnRvcCA9IHRvcDtcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSBsZWZ0O1xuICBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm07XG5cbiAgb3B0aW9ucy5ib3VuZGFyaWVzID0gYm91bmRhcmllcztcblxuICBjb25zdCBvcmRlciA9IG9wdGlvbnMucHJpb3JpdHk7XG4gIGxldCBwb3BwZXIgPSBkYXRhLm9mZnNldHMucG9wcGVyO1xuXG4gIGNvbnN0IGNoZWNrID0ge1xuICAgIHByaW1hcnkocGxhY2VtZW50KSB7XG4gICAgICBsZXQgdmFsdWUgPSBwb3BwZXJbcGxhY2VtZW50XTtcbiAgICAgIGlmIChcbiAgICAgICAgcG9wcGVyW3BsYWNlbWVudF0gPCBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiZcbiAgICAgICAgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5tYXgocG9wcGVyW3BsYWNlbWVudF0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4geyBbcGxhY2VtZW50XTogdmFsdWUgfTtcbiAgICB9LFxuICAgIHNlY29uZGFyeShwbGFjZW1lbnQpIHtcbiAgICAgIGNvbnN0IG1haW5TaWRlID0gcGxhY2VtZW50ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgICBsZXQgdmFsdWUgPSBwb3BwZXJbbWFpblNpZGVdO1xuICAgICAgaWYgKFxuICAgICAgICBwb3BwZXJbcGxhY2VtZW50XSA+IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJlxuICAgICAgICAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlXG4gICAgICApIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihcbiAgICAgICAgICBwb3BwZXJbbWFpblNpZGVdLFxuICAgICAgICAgIGJvdW5kYXJpZXNbcGxhY2VtZW50XSAtXG4gICAgICAgICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnID8gcG9wcGVyLndpZHRoIDogcG9wcGVyLmhlaWdodClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IFttYWluU2lkZV06IHZhbHVlIH07XG4gICAgfSxcbiAgfTtcblxuICBvcmRlci5mb3JFYWNoKHBsYWNlbWVudCA9PiB7XG4gICAgY29uc3Qgc2lkZSA9XG4gICAgICBbJ2xlZnQnLCAndG9wJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMSA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknO1xuICAgIHBvcHBlciA9IHsgLi4ucG9wcGVyLCAuLi5jaGVja1tzaWRlXShwbGFjZW1lbnQpIH07XG4gIH0pO1xuXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBwb3BwZXI7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIvKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlmdChkYXRhKSB7XG4gIGNvbnN0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIGNvbnN0IHNoaWZ0dmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgLy8gaWYgc2hpZnQgc2hpZnR2YXJpYXRpb24gaXMgc3BlY2lmaWVkLCBydW4gdGhlIG1vZGlmaWVyXG4gIGlmIChzaGlmdHZhcmlhdGlvbikge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlLCBwb3BwZXIgfSA9IGRhdGEub2Zmc2V0cztcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gWydib3R0b20nLCAndG9wJ10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG4gICAgY29uc3Qgc2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgICBjb25zdCBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgICBjb25zdCBzaGlmdE9mZnNldHMgPSB7XG4gICAgICBzdGFydDogeyBbc2lkZV06IHJlZmVyZW5jZVtzaWRlXSB9LFxuICAgICAgZW5kOiB7XG4gICAgICAgIFtzaWRlXTogcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW21lYXN1cmVtZW50XSAtIHBvcHBlclttZWFzdXJlbWVudF0sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBkYXRhLm9mZnNldHMucG9wcGVyID0geyAuLi5wb3BwZXIsIC4uLnNoaWZ0T2Zmc2V0c1tzaGlmdHZhcmlhdGlvbl0gfTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGlzTW9kaWZpZXJSZXF1aXJlZCBmcm9tICcuLi91dGlscy9pc01vZGlmaWVyUmVxdWlyZWQnO1xuaW1wb3J0IGZpbmQgZnJvbSAnLi4vdXRpbHMvZmluZCc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWRlKGRhdGEpIHtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdoaWRlJywgJ3ByZXZlbnRPdmVyZmxvdycpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCByZWZSZWN0ID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcbiAgY29uc3QgYm91bmQgPSBmaW5kKFxuICAgIGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLFxuICAgIG1vZGlmaWVyID0+IG1vZGlmaWVyLm5hbWUgPT09ICdwcmV2ZW50T3ZlcmZsb3cnXG4gICkuYm91bmRhcmllcztcblxuICBpZiAoXG4gICAgcmVmUmVjdC5ib3R0b20gPCBib3VuZC50b3AgfHxcbiAgICByZWZSZWN0LmxlZnQgPiBib3VuZC5yaWdodCB8fFxuICAgIHJlZlJlY3QudG9wID4gYm91bmQuYm90dG9tIHx8XG4gICAgcmVmUmVjdC5yaWdodCA8IGJvdW5kLmxlZnRcbiAgKSB7XG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgRE9NIGFjY2VzcyBpZiB2aXNpYmlsaXR5IGhhc24ndCBjaGFuZ2VkXG4gICAgaWYgKGRhdGEuaGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gdHJ1ZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhLmhpZGUgPSBmYWxzZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuLi91dGlscy9nZXRDbGllbnRSZWN0JztcbmltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tICcuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlubmVyKGRhdGEpIHtcbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIGNvbnN0IGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gZGF0YS5vZmZzZXRzO1xuICBjb25zdCBpc0hvcml6ID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgY29uc3Qgc3VidHJhY3RMZW5ndGggPSBbJ3RvcCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA9PT0gLTE7XG5cbiAgcG9wcGVyW2lzSG9yaXogPyAnbGVmdCcgOiAndG9wJ10gPVxuICAgIHJlZmVyZW5jZVtiYXNlUGxhY2VtZW50XSAtXG4gICAgKHN1YnRyYWN0TGVuZ3RoID8gcG9wcGVyW2lzSG9yaXogPyAnd2lkdGgnIDogJ2hlaWdodCddIDogMCk7XG5cbiAgZGF0YS5wbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChwb3BwZXIpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGFwcGx5U3R5bGUsIHsgYXBwbHlTdHlsZU9uTG9hZCB9IGZyb20gJy4vYXBwbHlTdHlsZSc7XG5pbXBvcnQgY29tcHV0ZVN0eWxlIGZyb20gJy4vY29tcHV0ZVN0eWxlJztcbmltcG9ydCBhcnJvdyBmcm9tICcuL2Fycm93JztcbmltcG9ydCBmbGlwIGZyb20gJy4vZmxpcCc7XG5pbXBvcnQga2VlcFRvZ2V0aGVyIGZyb20gJy4va2VlcFRvZ2V0aGVyJztcbmltcG9ydCBvZmZzZXQgZnJvbSAnLi9vZmZzZXQnO1xuaW1wb3J0IHByZXZlbnRPdmVyZmxvdyBmcm9tICcuL3ByZXZlbnRPdmVyZmxvdyc7XG5pbXBvcnQgc2hpZnQgZnJvbSAnLi9zaGlmdCc7XG5pbXBvcnQgaGlkZSBmcm9tICcuL2hpZGUnO1xuaW1wb3J0IGlubmVyIGZyb20gJy4vaW5uZXInO1xuXG4vKipcbiAqIE1vZGlmaWVyIGZ1bmN0aW9uLCBlYWNoIG1vZGlmaWVyIGNhbiBoYXZlIGEgZnVuY3Rpb24gb2YgdGhpcyB0eXBlIGFzc2lnbmVkXG4gKiB0byBpdHMgYGZuYCBwcm9wZXJ0eS48YnIgLz5cbiAqIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIGJlIGNhbGxlZCBvbiBlYWNoIHVwZGF0ZSwgdGhpcyBtZWFucyB0aGF0IHlvdSBtdXN0XG4gKiBtYWtlIHN1cmUgdGhleSBhcmUgcGVyZm9ybWFudCBlbm91Z2ggdG8gYXZvaWQgcGVyZm9ybWFuY2UgYm90dGxlbmVja3MuXG4gKlxuICogQGZ1bmN0aW9uIE1vZGlmaWVyRm5cbiAqIEBhcmd1bWVudCB7ZGF0YU9iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5cbi8qKlxuICogTW9kaWZpZXJzIGFyZSBwbHVnaW5zIHVzZWQgdG8gYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHlvdXIgcG9wcGVycy48YnIgLz5cbiAqIFBvcHBlci5qcyB1c2VzIGEgc2V0IG9mIDkgbW9kaWZpZXJzIHRvIHByb3ZpZGUgYWxsIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXRpZXNcbiAqIG5lZWRlZCBieSB0aGUgbGlicmFyeS5cbiAqXG4gKiBVc3VhbGx5IHlvdSBkb24ndCB3YW50IHRvIG92ZXJyaWRlIHRoZSBgb3JkZXJgLCBgZm5gIGFuZCBgb25Mb2FkYCBwcm9wcy5cbiAqIEFsbCB0aGUgb3RoZXIgcHJvcGVydGllcyBhcmUgY29uZmlndXJhdGlvbnMgdGhhdCBjb3VsZCBiZSB0d2Vha2VkLlxuICogQG5hbWVzcGFjZSBtb2RpZmllcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBzaGlmdCB0aGUgcG9wcGVyIG9uIHRoZSBzdGFydCBvciBlbmQgb2YgaXRzIHJlZmVyZW5jZVxuICAgKiBlbGVtZW50LjxiciAvPlxuICAgKiBJdCB3aWxsIHJlYWQgdGhlIHZhcmlhdGlvbiBvZiB0aGUgYHBsYWNlbWVudGAgcHJvcGVydHkuPGJyIC8+XG4gICAqIEl0IGNhbiBiZSBvbmUgZWl0aGVyIGAtZW5kYCBvciBgLXN0YXJ0YC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHNoaWZ0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTEwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogc2hpZnQsXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBgb2Zmc2V0YCBtb2RpZmllciBjYW4gc2hpZnQgeW91ciBwb3BwZXIgb24gYm90aCBpdHMgYXhpcy5cbiAgICpcbiAgICogSXQgYWNjZXB0cyB0aGUgZm9sbG93aW5nIHVuaXRzOlxuICAgKiAtIGBweGAgb3IgdW5pdC1sZXNzLCBpbnRlcnByZXRlZCBhcyBwaXhlbHNcbiAgICogLSBgJWAgb3IgYCVyYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgKiAtIGAlcGAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogLSBgdndgLCBDU1Mgdmlld3BvcnQgd2lkdGggdW5pdFxuICAgKiAtIGB2aGAsIENTUyB2aWV3cG9ydCBoZWlnaHQgdW5pdFxuICAgKlxuICAgKiBGb3IgbGVuZ3RoIGlzIGludGVuZGVkIHRoZSBtYWluIGF4aXMgcmVsYXRpdmUgdG8gdGhlIHBsYWNlbWVudCBvZiB0aGUgcG9wcGVyLjxiciAvPlxuICAgKiBUaGlzIG1lYW5zIHRoYXQgaWYgdGhlIHBsYWNlbWVudCBpcyBgdG9wYCBvciBgYm90dG9tYCwgdGhlIGxlbmd0aCB3aWxsIGJlIHRoZVxuICAgKiBgd2lkdGhgLiBJbiBjYXNlIG9mIGBsZWZ0YCBvciBgcmlnaHRgLCBpdCB3aWxsIGJlIHRoZSBgaGVpZ2h0YC5cbiAgICpcbiAgICogWW91IGNhbiBwcm92aWRlIGEgc2luZ2xlIHZhbHVlIChhcyBgTnVtYmVyYCBvciBgU3RyaW5nYCksIG9yIGEgcGFpciBvZiB2YWx1ZXNcbiAgICogYXMgYFN0cmluZ2AgZGl2aWRlZCBieSBhIGNvbW1hIG9yIG9uZSAob3IgbW9yZSkgd2hpdGUgc3BhY2VzLjxiciAvPlxuICAgKiBUaGUgbGF0dGVyIGlzIGEgZGVwcmVjYXRlZCBtZXRob2QgYmVjYXVzZSBpdCBsZWFkcyB0byBjb25mdXNpb24gYW5kIHdpbGwgYmVcbiAgICogcmVtb3ZlZCBpbiB2Mi48YnIgLz5cbiAgICogQWRkaXRpb25hbGx5LCBpdCBhY2NlcHRzIGFkZGl0aW9ucyBhbmQgc3VidHJhY3Rpb25zIGJldHdlZW4gZGlmZmVyZW50IHVuaXRzLlxuICAgKiBOb3RlIHRoYXQgbXVsdGlwbGljYXRpb25zIGFuZCBkaXZpc2lvbnMgYXJlbid0IHN1cHBvcnRlZC5cbiAgICpcbiAgICogVmFsaWQgZXhhbXBsZXMgYXJlOlxuICAgKiBgYGBcbiAgICogMTBcbiAgICogJzEwJSdcbiAgICogJzEwLCAxMCdcbiAgICogJzEwJSwgMTAnXG4gICAqICcxMCArIDEwJSdcbiAgICogJzEwIC0gNXZoICsgMyUnXG4gICAqICctMTBweCArIDV2aCwgNXB4IC0gNiUnXG4gICAqIGBgYFxuICAgKiA+ICoqTkIqKjogSWYgeW91IGRlc2lyZSB0byBhcHBseSBvZmZzZXRzIHRvIHlvdXIgcG9wcGVycyBpbiBhIHdheSB0aGF0IG1heSBtYWtlIHRoZW0gb3ZlcmxhcFxuICAgKiA+IHdpdGggdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnQsIHVuZm9ydHVuYXRlbHksIHlvdSB3aWxsIGhhdmUgdG8gZGlzYWJsZSB0aGUgYGZsaXBgIG1vZGlmaWVyLlxuICAgKiA+IFlvdSBjYW4gcmVhZCBtb3JlIG9uIHRoaXMgYXQgdGhpcyBbaXNzdWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcG9wcGVyLmpzL2lzc3Vlcy8zNzMpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgb2Zmc2V0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTIwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMjAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogb2Zmc2V0LFxuICAgIC8qKiBAcHJvcCB7TnVtYmVyfFN0cmluZ30gb2Zmc2V0PTBcbiAgICAgKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBvZmZzZXQ6IDAsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gcHJldmVudCB0aGUgcG9wcGVyIGZyb20gYmVpbmcgcG9zaXRpb25lZCBvdXRzaWRlIHRoZSBib3VuZGFyeS5cbiAgICpcbiAgICogQSBzY2VuYXJpbyBleGlzdHMgd2hlcmUgdGhlIHJlZmVyZW5jZSBpdHNlbGYgaXMgbm90IHdpdGhpbiB0aGUgYm91bmRhcmllcy48YnIgLz5cbiAgICogV2UgY2FuIHNheSBpdCBoYXMgXCJlc2NhcGVkIHRoZSBib3VuZGFyaWVzXCIg4oCUIG9yIGp1c3QgXCJlc2NhcGVkXCIuPGJyIC8+XG4gICAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGRlY2lkZSB3aGV0aGVyIHRoZSBwb3BwZXIgc2hvdWxkIGVpdGhlcjpcbiAgICpcbiAgICogLSBkZXRhY2ggZnJvbSB0aGUgcmVmZXJlbmNlIGFuZCByZW1haW4gXCJ0cmFwcGVkXCIgaW4gdGhlIGJvdW5kYXJpZXMsIG9yXG4gICAqIC0gaWYgaXQgc2hvdWxkIGlnbm9yZSB0aGUgYm91bmRhcnkgYW5kIFwiZXNjYXBlIHdpdGggaXRzIHJlZmVyZW5jZVwiXG4gICAqXG4gICAqIFdoZW4gYGVzY2FwZVdpdGhSZWZlcmVuY2VgIGlzIHNldCB0b2B0cnVlYCBhbmQgcmVmZXJlbmNlIGlzIGNvbXBsZXRlbHlcbiAgICogb3V0c2lkZSBpdHMgYm91bmRhcmllcywgdGhlIHBvcHBlciB3aWxsIG92ZXJmbG93IChvciBjb21wbGV0ZWx5IGxlYXZlKVxuICAgKiB0aGUgYm91bmRhcmllcyBpbiBvcmRlciB0byByZW1haW4gYXR0YWNoZWQgdG8gdGhlIGVkZ2Ugb2YgdGhlIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHByZXZlbnRPdmVyZmxvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0zMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDMwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7QXJyYXl9IFtwcmlvcml0eT1bJ2xlZnQnLCdyaWdodCcsJ3RvcCcsJ2JvdHRvbSddXVxuICAgICAqIFBvcHBlciB3aWxsIHRyeSB0byBwcmV2ZW50IG92ZXJmbG93IGZvbGxvd2luZyB0aGVzZSBwcmlvcml0aWVzIGJ5IGRlZmF1bHQsXG4gICAgICogdGhlbiwgaXQgY291bGQgb3ZlcmZsb3cgb24gdGhlIGxlZnQgYW5kIG9uIHRvcCBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHByaW9yaXR5OiBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIEFtb3VudCBvZiBwaXhlbCB1c2VkIHRvIGRlZmluZSBhIG1pbmltdW0gZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm91bmRhcmllc1xuICAgICAqIGFuZCB0aGUgcG9wcGVyLiBUaGlzIG1ha2VzIHN1cmUgdGhlIHBvcHBlciBhbHdheXMgaGFzIGEgbGl0dGxlIHBhZGRpbmdcbiAgICAgKiBiZXR3ZWVuIHRoZSBlZGdlcyBvZiBpdHMgY29udGFpbmVyXG4gICAgICovXG4gICAgcGFkZGluZzogNSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0nc2Nyb2xsUGFyZW50J1xuICAgICAqIEJvdW5kYXJpZXMgdXNlZCBieSB0aGUgbW9kaWZpZXIuIENhbiBiZSBgc2Nyb2xsUGFyZW50YCwgYHdpbmRvd2AsXG4gICAgICogYHZpZXdwb3J0YCBvciBhbnkgRE9NIGVsZW1lbnQuXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICdzY3JvbGxQYXJlbnQnLFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2Ugc3VyZSB0aGUgcmVmZXJlbmNlIGFuZCBpdHMgcG9wcGVyIHN0YXkgbmVhciBlYWNoIG90aGVyXG4gICAqIHdpdGhvdXQgbGVhdmluZyBhbnkgZ2FwIGJldHdlZW4gdGhlIHR3by4gRXNwZWNpYWxseSB1c2VmdWwgd2hlbiB0aGUgYXJyb3cgaXNcbiAgICogZW5hYmxlZCBhbmQgeW91IHdhbnQgdG8gZW5zdXJlIHRoYXQgaXQgcG9pbnRzIHRvIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogSXQgY2FyZXMgb25seSBhYm91dCB0aGUgZmlyc3QgYXhpcy4gWW91IGNhbiBzdGlsbCBoYXZlIHBvcHBlcnMgd2l0aCBtYXJnaW5cbiAgICogYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBrZWVwVG9nZXRoZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NDAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA0MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBrZWVwVG9nZXRoZXIsXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kaWZpZXIgaXMgdXNlZCB0byBtb3ZlIHRoZSBgYXJyb3dFbGVtZW50YCBvZiB0aGUgcG9wcGVyIHRvIG1ha2VcbiAgICogc3VyZSBpdCBpcyBwb3NpdGlvbmVkIGJldHdlZW4gdGhlIHJlZmVyZW5jZSBlbGVtZW50IGFuZCBpdHMgcG9wcGVyIGVsZW1lbnQuXG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgb3V0ZXIgc2l6ZSBvZiB0aGUgYGFycm93RWxlbWVudGAgbm9kZSB0byBkZXRlY3QgaG93IG1hbnlcbiAgICogcGl4ZWxzIG9mIGNvbmp1bmN0aW9uIGFyZSBuZWVkZWQuXG4gICAqXG4gICAqIEl0IGhhcyBubyBlZmZlY3QgaWYgbm8gYGFycm93RWxlbWVudGAgaXMgcHJvdmlkZWQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBhcnJvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj01MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDUwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGFycm93LFxuICAgIC8qKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBlbGVtZW50PSdbeC1hcnJvd10nIC0gU2VsZWN0b3Igb3Igbm9kZSB1c2VkIGFzIGFycm93ICovXG4gICAgZWxlbWVudDogJ1t4LWFycm93XScsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gZmxpcCB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50IHdoZW4gaXQgc3RhcnRzIHRvIG92ZXJsYXAgaXRzXG4gICAqIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqXG4gICAqICoqTk9URToqKiB0aGlzIG1vZGlmaWVyIHdpbGwgaW50ZXJydXB0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZSBhbmQgd2lsbFxuICAgKiByZXN0YXJ0IGl0IGlmIGl0IGRldGVjdHMgdGhlIG5lZWQgdG8gZmxpcCB0aGUgcGxhY2VtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgZmxpcDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj02MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDYwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGZsaXAsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xBcnJheX0gYmVoYXZpb3I9J2ZsaXAnXG4gICAgICogVGhlIGJlaGF2aW9yIHVzZWQgdG8gY2hhbmdlIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQuIEl0IGNhbiBiZSBvbmUgb2ZcbiAgICAgKiBgZmxpcGAsIGBjbG9ja3dpc2VgLCBgY291bnRlcmNsb2Nrd2lzZWAgb3IgYW4gYXJyYXkgd2l0aCBhIGxpc3Qgb2YgdmFsaWRcbiAgICAgKiBwbGFjZW1lbnRzICh3aXRoIG9wdGlvbmFsIHZhcmlhdGlvbnMpXG4gICAgICovXG4gICAgYmVoYXZpb3I6ICdmbGlwJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nPTVcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgZmxpcCBpZiBpdCBoaXRzIHRoZSBlZGdlcyBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHBhZGRpbmc6IDUsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3ZpZXdwb3J0J1xuICAgICAqIFRoZSBlbGVtZW50IHdoaWNoIHdpbGwgZGVmaW5lIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBwb3BwZXIgcG9zaXRpb24uXG4gICAgICogVGhlIHBvcHBlciB3aWxsIG5ldmVyIGJlIHBsYWNlZCBvdXRzaWRlIG9mIHRoZSBkZWZpbmVkIGJvdW5kYXJpZXNcbiAgICAgKiAoZXhjZXB0IGlmIGBrZWVwVG9nZXRoZXJgIGlzIGVuYWJsZWQpXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICd2aWV3cG9ydCcsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGZsaXBWYXJpYXRpb25zPWZhbHNlXG4gICAgICogVGhlIHBvcHBlciB3aWxsIHN3aXRjaCBwbGFjZW1lbnQgdmFyaWF0aW9uIGJldHdlZW4gYC1zdGFydGAgYW5kIGAtZW5kYCB3aGVuXG4gICAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50IG92ZXJsYXBzIGl0cyBib3VuZGFyaWVzLlxuICAgICAqXG4gICAgICogVGhlIG9yaWdpbmFsIHBsYWNlbWVudCBzaG91bGQgaGF2ZSBhIHNldCB2YXJpYXRpb24uXG4gICAgICovXG4gICAgZmxpcFZhcmlhdGlvbnM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBmbGlwVmFyaWF0aW9uc0J5Q29udGVudD1mYWxzZVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBzd2l0Y2ggcGxhY2VtZW50IHZhcmlhdGlvbiBiZXR3ZWVuIGAtc3RhcnRgIGFuZCBgLWVuZGAgd2hlblxuICAgICAqIHRoZSBwb3BwZXIgZWxlbWVudCBvdmVybGFwcyBpdHMgcmVmZXJlbmNlIGJvdW5kYXJpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgb3JpZ2luYWwgcGxhY2VtZW50IHNob3VsZCBoYXZlIGEgc2V0IHZhcmlhdGlvbi5cbiAgICAgKi9cbiAgICBmbGlwVmFyaWF0aW9uc0J5Q29udGVudDogZmFsc2UsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gbWFrZSB0aGUgcG9wcGVyIGZsb3cgdG93YXJkIHRoZSBpbm5lciBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEJ5IGRlZmF1bHQsIHdoZW4gdGhpcyBtb2RpZmllciBpcyBkaXNhYmxlZCwgdGhlIHBvcHBlciB3aWxsIGJlIHBsYWNlZCBvdXRzaWRlXG4gICAqIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGlubmVyOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTcwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNzAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD1mYWxzZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBpbm5lcixcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBoaWRlIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0c2lkZSBvZiB0aGVcbiAgICogcG9wcGVyIGJvdW5kYXJpZXMuIEl0IHdpbGwgc2V0IGEgYHgtb3V0LW9mLWJvdW5kYXJpZXNgIGF0dHJpYnV0ZSB3aGljaCBjYW5cbiAgICogYmUgdXNlZCB0byBoaWRlIHdpdGggYSBDU1Mgc2VsZWN0b3IgdGhlIHBvcHBlciB3aGVuIGl0cyByZWZlcmVuY2UgaXNcbiAgICogb3V0IG9mIGJvdW5kYXJpZXMuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGhpZGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBoaWRlLFxuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgc3R5bGUgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBlbGVtZW50IHRvIGdldHNcbiAgICogcHJvcGVybHkgcG9zaXRpb25lZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgbW9kaWZpZXIgd2lsbCBub3QgdG91Y2ggdGhlIERPTSwgaXQganVzdCBwcmVwYXJlcyB0aGUgc3R5bGVzXG4gICAqIHNvIHRoYXQgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGNhbiBhcHBseSBpdC4gVGhpcyBzZXBhcmF0aW9uIGlzIHVzZWZ1bFxuICAgKiBpbiBjYXNlIHlvdSBuZWVkIHRvIHJlcGxhY2UgYGFwcGx5U3R5bGVgIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIFRoaXMgbW9kaWZpZXIgaGFzIGA4NTBgIGFzIGBvcmRlcmAgdmFsdWUgdG8gbWFpbnRhaW4gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgKiB3aXRoIHByZXZpb3VzIHZlcnNpb25zIG9mIFBvcHBlci5qcy4gRXhwZWN0IHRoZSBtb2RpZmllcnMgb3JkZXJpbmcgbWV0aG9kXG4gICAqIHRvIGNoYW5nZSBpbiBmdXR1cmUgbWFqb3IgdmVyc2lvbnMgb2YgdGhlIGxpYnJhcnkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBjb21wdXRlU3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODUwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4NTAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBjb21wdXRlU3R5bGUsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNEIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtzdHJpbmd9IFt4PSdib3R0b20nXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWCBheGlzIChgYm90dG9tYCBvciBgdG9wYCkuIEFLQSBYIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYGJvdHRvbWBcbiAgICAgKi9cbiAgICB4OiAnYm90dG9tJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nbGVmdCddXG4gICAgICogV2hlcmUgdG8gYW5jaG9yIHRoZSBZIGF4aXMgKGBsZWZ0YCBvciBgcmlnaHRgKS4gQUtBIFkgb2Zmc2V0IG9yaWdpbi5cbiAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgcmlnaHRgXG4gICAgICovXG4gICAgeTogJ3JpZ2h0JyxcbiAgfSxcblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgY29tcHV0ZWQgc3R5bGVzIHRvIHRoZSBwb3BwZXIgZWxlbWVudC5cbiAgICpcbiAgICogQWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyBhcmUgbGltaXRlZCB0byB0aGlzIG1vZGlmaWVyLiBUaGlzIGlzIHVzZWZ1bCBpbiBjYXNlXG4gICAqIHlvdSB3YW50IHRvIGludGVncmF0ZSBQb3BwZXIuanMgaW5zaWRlIGEgZnJhbWV3b3JrIG9yIHZpZXcgbGlicmFyeSBhbmQgeW91XG4gICAqIHdhbnQgdG8gZGVsZWdhdGUgYWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyB0byBpdC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGlmIHlvdSBkaXNhYmxlIHRoaXMgbW9kaWZpZXIsIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogaGFzIGl0cyBwb3NpdGlvbiBzZXQgdG8gYGFic29sdXRlYCBiZWZvcmUgUG9wcGVyLmpzIGNhbiBkbyBpdHMgd29yayFcbiAgICpcbiAgICogSnVzdCBkaXNhYmxlIHRoaXMgbW9kaWZpZXIgYW5kIGRlZmluZSB5b3VyIG93biB0byBhY2hpZXZlIHRoZSBkZXNpcmVkIGVmZmVjdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFwcGx5U3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9OTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA5MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcHBseVN0eWxlLFxuICAgIC8qKiBAcHJvcCB7RnVuY3Rpb259ICovXG4gICAgb25Mb2FkOiBhcHBseVN0eWxlT25Mb2FkLFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4xMC4wLCB0aGUgcHJvcGVydHkgbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXJcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZ3B1QWNjZWxlcmF0aW9uPXRydWVcbiAgICAgKiBJZiB0cnVlLCBpdCB1c2VzIHRoZSBDU1MgM0QgdHJhbnNmb3JtYXRpb24gdG8gcG9zaXRpb24gdGhlIHBvcHBlci5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHVuZGVmaW5lZCxcbiAgfSxcbn07XG5cbi8qKlxuICogVGhlIGBkYXRhT2JqZWN0YCBpcyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGluZm9ybWF0aW9uIHVzZWQgYnkgUG9wcGVyLmpzLlxuICogVGhpcyBvYmplY3QgaXMgcGFzc2VkIHRvIG1vZGlmaWVycyBhbmQgdG8gdGhlIGBvbkNyZWF0ZWAgYW5kIGBvblVwZGF0ZWAgY2FsbGJhY2tzLlxuICogQG5hbWUgZGF0YU9iamVjdFxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuaW5zdGFuY2UgVGhlIFBvcHBlci5qcyBpbnN0YW5jZVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEucGxhY2VtZW50IFBsYWNlbWVudCBhcHBsaWVkIHRvIHBvcHBlclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgUGxhY2VtZW50IG9yaWdpbmFsbHkgZGVmaW5lZCBvbiBpbml0XG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuZmxpcHBlZCBUcnVlIGlmIHBvcHBlciBoYXMgYmVlbiBmbGlwcGVkIGJ5IGZsaXAgbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5oaWRlIFRydWUgaWYgdGhlIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dCBvZiBib3VuZGFyaWVzLCB1c2VmdWwgdG8ga25vdyB3aGVuIHRvIGhpZGUgdGhlIHBvcHBlclxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZGF0YS5hcnJvd0VsZW1lbnQgTm9kZSB1c2VkIGFzIGFycm93IGJ5IGFycm93IG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5zdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuIEl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5hcnJvd1N0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBhcnJvdy4gSXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmJvdW5kYXJpZXMgT2Zmc2V0cyBvZiB0aGUgcG9wcGVyIGJvdW5kYXJpZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMgVGhlIG1lYXN1cmVtZW50cyBvZiBwb3BwZXIsIHJlZmVyZW5jZSBhbmQgYXJyb3cgZWxlbWVudHNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucG9wcGVyIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLmFycm93XSBgdG9wYCBhbmQgYGxlZnRgIG9mZnNldHMsIG9ubHkgb25lIG9mIHRoZW0gd2lsbCBiZSBkaWZmZXJlbnQgZnJvbSAwXG4gKi9cbiIsImltcG9ydCBtb2RpZmllcnMgZnJvbSAnLi4vbW9kaWZpZXJzL2luZGV4JztcblxuLyoqXG4gKiBEZWZhdWx0IG9wdGlvbnMgcHJvdmlkZWQgdG8gUG9wcGVyLmpzIGNvbnN0cnVjdG9yLjxiciAvPlxuICogVGhlc2UgY2FuIGJlIG92ZXJyaWRkZW4gdXNpbmcgdGhlIGBvcHRpb25zYCBhcmd1bWVudCBvZiBQb3BwZXIuanMuPGJyIC8+XG4gKiBUbyBvdmVycmlkZSBhbiBvcHRpb24sIHNpbXBseSBwYXNzIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lXG4gKiBzdHJ1Y3R1cmUgb2YgdGhlIGBvcHRpb25zYCBvYmplY3QsIGFzIHRoZSAzcmQgYXJndW1lbnQuIEZvciBleGFtcGxlOlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZiwgcG9wLCB7XG4gKiAgIG1vZGlmaWVyczoge1xuICogICAgIHByZXZlbnRPdmVyZmxvdzogeyBlbmFibGVkOiBmYWxzZSB9XG4gKiAgIH1cbiAqIH0pXG4gKiBgYGBcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIFBvcHBlcidzIHBsYWNlbWVudC5cbiAgICogQHByb3Age1BvcHBlci5wbGFjZW1lbnRzfSBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICovXG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG5cbiAgLyoqXG4gICAqIFNldCB0aGlzIHRvIHRydWUgaWYgeW91IHdhbnQgcG9wcGVyIHRvIHBvc2l0aW9uIGl0IHNlbGYgaW4gJ2ZpeGVkJyBtb2RlXG4gICAqIEBwcm9wIHtCb29sZWFufSBwb3NpdGlvbkZpeGVkPWZhbHNlXG4gICAqL1xuICBwb3NpdGlvbkZpeGVkOiBmYWxzZSxcblxuICAvKipcbiAgICogV2hldGhlciBldmVudHMgKHJlc2l6ZSwgc2Nyb2xsKSBhcmUgaW5pdGlhbGx5IGVuYWJsZWQuXG4gICAqIEBwcm9wIHtCb29sZWFufSBldmVudHNFbmFibGVkPXRydWVcbiAgICovXG4gIGV2ZW50c0VuYWJsZWQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZSBwb3BwZXIgd2hlblxuICAgKiB5b3UgY2FsbCB0aGUgYGRlc3Ryb3lgIG1ldGhvZC5cbiAgICogQHByb3Age0Jvb2xlYW59IHJlbW92ZU9uRGVzdHJveT1mYWxzZVxuICAgKi9cbiAgcmVtb3ZlT25EZXN0cm95OiBmYWxzZSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyBjcmVhdGVkLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAqIEBwcm9wIHtvbkNyZWF0ZX1cbiAgICovXG4gIG9uQ3JlYXRlOiAoKSA9PiB7fSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyB1cGRhdGVkLiBUaGlzIGNhbGxiYWNrIGlzIG5vdCBjYWxsZWRcbiAgICogb24gdGhlIGluaXRpYWxpemF0aW9uL2NyZWF0aW9uIG9mIHRoZSBwb3BwZXIsIGJ1dCBvbmx5IG9uIHN1YnNlcXVlbnRcbiAgICogdXBkYXRlcy48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25VcGRhdGV9XG4gICAqL1xuICBvblVwZGF0ZTogKCkgPT4ge30sXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbW9kaWZpZXJzIHVzZWQgdG8gbW9kaWZ5IHRoZSBvZmZzZXRzIGJlZm9yZSB0aGV5IGFyZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuXG4gICAqIFRoZXkgcHJvdmlkZSBtb3N0IG9mIHRoZSBmdW5jdGlvbmFsaXRpZXMgb2YgUG9wcGVyLmpzLlxuICAgKiBAcHJvcCB7bW9kaWZpZXJzfVxuICAgKi9cbiAgbW9kaWZpZXJzLFxufTtcblxuLyoqXG4gKiBAY2FsbGJhY2sgb25DcmVhdGVcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIG9uVXBkYXRlXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuIiwiLy8gVXRpbHNcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vdXRpbHMvaXNGdW5jdGlvbic7XG5cbi8vIE1ldGhvZHNcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi9tZXRob2RzL3VwZGF0ZSc7XG5pbXBvcnQgZGVzdHJveSBmcm9tICcuL21ldGhvZHMvZGVzdHJveSc7XG5pbXBvcnQgZW5hYmxlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9tZXRob2RzL2VuYWJsZUV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9tZXRob2RzL2Rpc2FibGVFdmVudExpc3RlbmVycyc7XG5pbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9tZXRob2RzL2RlZmF1bHRzJztcbmltcG9ydCBwbGFjZW1lbnRzIGZyb20gJy4vbWV0aG9kcy9wbGFjZW1lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wcGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgUG9wcGVyLmpzIGluc3RhbmNlLlxuICAgKiBAY2xhc3MgUG9wcGVyXG4gICAqIEBwYXJhbSB7RWxlbWVudHxyZWZlcmVuY2VPYmplY3R9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCAvIFhNTCBlbGVtZW50IHVzZWQgYXMgdGhlIHBvcHBlclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFlvdXIgY3VzdG9tIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIG9uZXMgZGVmaW5lZCBpbiBbRGVmYXVsdHNdKCNkZWZhdWx0cylcbiAgICogQHJldHVybiB7T2JqZWN0fSBpbnN0YW5jZSAtIFRoZSBnZW5lcmF0ZWQgUG9wcGVyLmpzIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgLy8gbWFrZSB1cGRhdGUoKSBkZWJvdW5jZWQsIHNvIHRoYXQgaXQgb25seSBydW5zIGF0IG1vc3Qgb25jZS1wZXItdGlja1xuICAgIHRoaXMudXBkYXRlID0gZGVib3VuY2UodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyB3aXRoIHt9IHdlIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgb3B0aW9ucyBpbnNpZGUgaXRcbiAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLlBvcHBlci5EZWZhdWx0cywgLi4ub3B0aW9ucyB9O1xuXG4gICAgLy8gaW5pdCBzdGF0ZVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgICBpc0NyZWF0ZWQ6IGZhbHNlLFxuICAgICAgc2Nyb2xsUGFyZW50czogW10sXG4gICAgfTtcblxuICAgIC8vIGdldCByZWZlcmVuY2UgYW5kIHBvcHBlciBlbGVtZW50cyAoYWxsb3cgalF1ZXJ5IHdyYXBwZXJzKVxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlICYmIHJlZmVyZW5jZS5qcXVlcnkgPyByZWZlcmVuY2VbMF0gOiByZWZlcmVuY2U7XG4gICAgdGhpcy5wb3BwZXIgPSBwb3BwZXIgJiYgcG9wcGVyLmpxdWVyeSA/IHBvcHBlclswXSA6IHBvcHBlcjtcblxuICAgIC8vIERlZXAgbWVyZ2UgbW9kaWZpZXJzIG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzID0ge307XG4gICAgT2JqZWN0LmtleXMoe1xuICAgICAgLi4uUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVycyxcbiAgICAgIC4uLm9wdGlvbnMubW9kaWZpZXJzLFxuICAgIH0pLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdID0ge1xuICAgICAgICAvLyBJZiBpdCdzIGEgYnVpbHQtaW4gbW9kaWZpZXIsIHVzZSBpdCBhcyBiYXNlXG4gICAgICAgIC4uLihQb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzW25hbWVdIHx8IHt9KSxcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIGN1c3RvbSBvcHRpb25zLCBvdmVycmlkZSBhbmQgbWVyZ2Ugd2l0aCBkZWZhdWx0IG9uZXNcbiAgICAgICAgLi4uKG9wdGlvbnMubW9kaWZpZXJzID8gb3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gOiB7fSksXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgLy8gUmVmYWN0b3JpbmcgbW9kaWZpZXJzJyBsaXN0IChPYmplY3QgPT4gQXJyYXkpXG4gICAgdGhpcy5tb2RpZmllcnMgPSBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMubW9kaWZpZXJzKVxuICAgICAgLm1hcChuYW1lID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0sXG4gICAgICB9KSlcbiAgICAgIC8vIHNvcnQgdGhlIG1vZGlmaWVycyBieSBvcmRlclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcblxuICAgIC8vIG1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgd2hlbiBQb3BwZXIuanMgZ2V0IGluaXRlZFxuICAgIC8vIHN1Y2ggY29kZSBpcyBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBvZiBpdHMgbW9kaWZpZXJcbiAgICAvLyB0aGV5IGNvdWxkIGFkZCBuZXcgcHJvcGVydGllcyB0byB0aGVpciBvcHRpb25zIGNvbmZpZ3VyYXRpb25cbiAgICAvLyBCRSBBV0FSRTogZG9uJ3QgYWRkIG9wdGlvbnMgdG8gYG9wdGlvbnMubW9kaWZpZXJzLm5hbWVgIGJ1dCB0byBgbW9kaWZpZXJPcHRpb25zYCFcbiAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKG1vZGlmaWVyT3B0aW9ucyA9PiB7XG4gICAgICBpZiAobW9kaWZpZXJPcHRpb25zLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihtb2RpZmllck9wdGlvbnMub25Mb2FkKSkge1xuICAgICAgICBtb2RpZmllck9wdGlvbnMub25Mb2FkKFxuICAgICAgICAgIHRoaXMucmVmZXJlbmNlLFxuICAgICAgICAgIHRoaXMucG9wcGVyLFxuICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBtb2RpZmllck9wdGlvbnMsXG4gICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZmlyZSB0aGUgZmlyc3QgdXBkYXRlIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIgaW4gdGhlIHJpZ2h0IHBsYWNlXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIGNvbnN0IGV2ZW50c0VuYWJsZWQgPSB0aGlzLm9wdGlvbnMuZXZlbnRzRW5hYmxlZDtcbiAgICBpZiAoZXZlbnRzRW5hYmxlZCkge1xuICAgICAgLy8gc2V0dXAgZXZlbnQgbGlzdGVuZXJzLCB0aGV5IHdpbGwgdGFrZSBjYXJlIG9mIHVwZGF0ZSB0aGUgcG9zaXRpb24gaW4gc3BlY2lmaWMgc2l0dWF0aW9uc1xuICAgICAgdGhpcy5lbmFibGVFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGV2ZW50c0VuYWJsZWQ7XG4gIH1cblxuICAvLyBXZSBjYW4ndCB1c2UgY2xhc3MgcHJvcGVydGllcyBiZWNhdXNlIHRoZXkgZG9uJ3QgZ2V0IGxpc3RlZCBpbiB0aGVcbiAgLy8gY2xhc3MgcHJvdG90eXBlIGFuZCBicmVhayBzdHVmZiBsaWtlIFNpbm9uIHN0dWJzXG4gIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdXBkYXRlLmNhbGwodGhpcyk7XG4gIH1cbiAgZGVzdHJveSgpIHtcbiAgICByZXR1cm4gZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG4gIGVuYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHJldHVybiBlbmFibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICB9XG4gIGRpc2FibGVFdmVudExpc3RlbmVycygpIHtcbiAgICByZXR1cm4gZGlzYWJsZUV2ZW50TGlzdGVuZXJzLmNhbGwodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2NoZWR1bGVzIGFuIHVwZGF0ZS4gSXQgd2lsbCBydW4gb24gdGhlIG5leHQgVUkgdXBkYXRlIGF2YWlsYWJsZS5cbiAgICogQG1ldGhvZCBzY2hlZHVsZVVwZGF0ZVxuICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAqL1xuICBzY2hlZHVsZVVwZGF0ZSA9ICgpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgdXRpbGl0aWVzIHVzZWZ1bCB3aGVuIHdyaXRpbmcgY3VzdG9tIG1vZGlmaWVycy5cbiAgICogU3RhcnRpbmcgZnJvbSB2ZXJzaW9uIDEuNywgdGhpcyBtZXRob2QgaXMgYXZhaWxhYmxlIG9ubHkgaWYgeW91XG4gICAqIGluY2x1ZGUgYHBvcHBlci11dGlscy5qc2AgYmVmb3JlIGBwb3BwZXIuanNgLlxuICAgKlxuICAgKiAqKkRFUFJFQ0FUSU9OKio6IFRoaXMgd2F5IHRvIGFjY2VzcyBQb3BwZXJVdGlscyBpcyBkZXByZWNhdGVkXG4gICAqIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjIhIFVzZSB0aGUgUG9wcGVyVXRpbHMgbW9kdWxlIGRpcmVjdGx5IGluc3RlYWQuXG4gICAqIER1ZSB0byB0aGUgaGlnaCBpbnN0YWJpbGl0eSBvZiB0aGUgbWV0aG9kcyBjb250YWluZWQgaW4gVXRpbHMsIHdlIGNhbid0XG4gICAqIGd1YXJhbnRlZSB0aGVtIHRvIGZvbGxvdyBzZW12ZXIuIFVzZSB0aGVtIGF0IHlvdXIgb3duIHJpc2shXG4gICAqIEBzdGF0aWNcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjhcbiAgICogQG1lbWJlciBVdGlsc1xuICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAqL1xuICBzdGF0aWMgVXRpbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpLlBvcHBlclV0aWxzO1xuXG4gIHN0YXRpYyBwbGFjZW1lbnRzID0gcGxhY2VtZW50cztcblxuICBzdGF0aWMgRGVmYXVsdHMgPSBEZWZhdWx0cztcbn1cblxuLyoqXG4gKiBUaGUgYHJlZmVyZW5jZU9iamVjdGAgaXMgYW4gb2JqZWN0IHRoYXQgcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGNvbXBhdGlibGUgd2l0aCBQb3BwZXIuanNcbiAqIGFuZCBsZXRzIHlvdSB1c2UgaXQgYXMgcmVwbGFjZW1lbnQgb2YgYSByZWFsIERPTSBub2RlLjxiciAvPlxuICogWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgdG8gcG9zaXRpb24gYSBwb3BwZXIgcmVsYXRpdmVseSB0byBhIHNldCBvZiBjb29yZGluYXRlc1xuICogaW4gY2FzZSB5b3UgZG9uJ3QgaGF2ZSBhIERPTSBub2RlIHRvIHVzZSBhcyByZWZlcmVuY2UuXG4gKlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZmVyZW5jZU9iamVjdCwgcG9wcGVyTm9kZSk7XG4gKiBgYGBcbiAqXG4gKiBOQjogVGhpcyBmZWF0dXJlIGlzbid0IHN1cHBvcnRlZCBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMC5cbiAqIEBuYW1lIHJlZmVyZW5jZU9iamVjdFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZGF0YS5nZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc2V0IG9mIGNvb3JkaW5hdGVzIGNvbXBhdGlibGUgd2l0aCB0aGUgbmF0aXZlIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIG1ldGhvZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudFdpZHRoXG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEuY2xpZW50SGVpZ2h0XG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqL1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnYm9vdHN0cmFwJztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gIFxuXG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9