// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"utilities/iconSvg.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Icons = function () {
  var nameIcon = function nameIcon() {
    return "\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"18\"\n      height=\"18\"\n      fill=\"#8e99af\"\n      class=\"bi bi-person-bounding-box\"\n      viewBox=\"0 0 16 16\"\n    >\n      <path\n      d=\"M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z\"\n      />\n      <path\n        d=\"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z\"\n      />\n    </svg>\n  ";
  };

  var mailIcon = function mailIcon() {
    return "\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"18\"\n      height=\"18\"\n      fill=\"#8e99af\"\n      class=\"bi bi-envelope-fill\"\n      viewBox=\"0 0 16 16\"\n      >\n      <path\n      d=\"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z\"\n      />\n      </svg>\n  ";
  };

  var passwordIcon = function passwordIcon() {
    return "\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"18\"\n      height=\"18\"\n      fill=\"#8e99af\"\n      class=\"bi bi-eye-fill\"\n      viewBox=\"0 0 16 16\"\n      >\n      <path d=\"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z\" />\n      <path\n      d=\"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z\"\n      />\n      </svg>\n  ";
  };

  var validInput = function validInput() {
    return "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"#43aa8b\" class=\"bi bi-check-circle\" viewBox=\"0 0 16 16\">\n      <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n      <path d=\"M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z\"/>\n    </svg>\n  ";
  };

  var invalidInput = function invalidInput() {
    return "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"#e63946\" class=\"bi bi-x-circle\" viewBox=\"0 0 16 16\">\n      <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n      <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\n    </svg>\n  ";
  };

  return {
    nameIcon: nameIcon,
    mailIcon: mailIcon,
    passwordIcon: passwordIcon,
    validInput: validInput,
    invalidInput: invalidInput
  };
}();

var _default = Icons;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _iconSvg = _interopRequireDefault(require("./utilities/iconSvg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormValidation = function () {
  var form = document.querySelector('form');
  var inputs = Array.from(document.querySelectorAll('input'));
  var firstName = document.getElementById('firstName');
  var firstNameError = document.querySelector('#firstName + span.error');
  var lastName = document.getElementById('lastName');
  var lastNameError = document.querySelector('#lastName + span.error');
  var mail = document.getElementById('email');
  var mailError = document.querySelector('#email + span.error');
  var password = document.getElementById('password');
  var passwordError = document.querySelector('#password + span.error');
  var inputsForm = [firstName, lastName, mail, password];
  var formSpanError = [firstNameError, lastNameError, mailError, passwordError];

  var wrapperEffectOnInputFocus = function wrapperEffectOnInputFocus() {
    inputs.forEach(function (input) {
      var wrapper = input.parentNode.parentNode;
      input.addEventListener('focusin', function () {
        wrapper.classList.add('focus');
      });
      input.addEventListener('focusout', function () {
        wrapper.classList.remove('focus');
      });
    });
  };

  var showError = function showError(element, display) {
    var errorDisplay = display;
    var labelContent = element.previousElementSibling.textContent;

    if (element.validity.valueMissing) {
      errorDisplay.textContent = "".concat(labelContent, " is required");
    } else if (element.validity.tooShort) {
      errorDisplay.textContent = "Must be longer than ".concat(element.minLength);
    } else if (element.validity.typeMismatch) {
      errorDisplay.textContent = 'Enter a valid email adress';
    }
  };

  var checkInputValidity = function checkInputValidity() {
    var validInput = _iconSvg.default.validInput,
        invalidInput = _iconSvg.default.invalidInput;
    inputsForm.forEach(function (input) {
      input.addEventListener('input', function () {
        if (input.validity.valid) {
          input.nextElementSibling.textContent = '';
          input.nextElementSibling.className = 'error';
          input.parentNode.parentNode.children[1].innerHTML = "".concat(validInput());
        } else {
          input.parentNode.parentNode.children[1].innerHTML = "".concat(invalidInput());
          showError(input, input.nextElementSibling);
        }
      });
    });
  };

  var resetSpansError = function resetSpansError() {
    formSpanError.forEach(function (span) {
      var displayError = span;
      displayError.textContent = '';
      displayError.className = 'error';
    });
  };

  var resetIconInput = function resetIconInput() {
    var nameIcon = _iconSvg.default.nameIcon,
        mailIcon = _iconSvg.default.mailIcon,
        passwordIcon = _iconSvg.default.passwordIcon;
    firstName.parentNode.parentNode.children[1].innerHTML = "".concat(nameIcon());
    lastName.parentNode.parentNode.children[1].innerHTML = "".concat(nameIcon());
    mail.parentNode.parentNode.children[1].innerHTML = "".concat(mailIcon());
    password.parentNode.parentNode.children[1].innerHTML = "".concat(passwordIcon());
  };

  var formListener = function formListener() {
    checkInputValidity();
    form.addEventListener('submit', function (e) {
      inputsForm.forEach(function (input) {
        if (!input.validity.valid) {
          showError(input, input.nextElementSibling);
          e.preventDefault();
        } else {
          alert('You are a new member ! Congrats :)');
          form.reset();
        }
      });
      resetSpansError();
      resetIconInput();
    });
  };

  return {
    wrapperEffectOnInputFocus: wrapperEffectOnInputFocus,
    formListener: formListener
  };
}();

window.onload = function () {
  FormValidation.wrapperEffectOnInputFocus();
  FormValidation.formListener();
};
},{"./utilities/iconSvg":"utilities/iconSvg.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55368" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/form-live-inline-validation.e31bb0bc.js.map