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
})({"epB2":[function(require,module,exports) {
var divfirst = document.querySelector("#first");
var style = document.querySelector("#style");
var orignalText = "\n/*\n\u5148\u653E\u4E2A\u6B4C\u8BCD\n\u5207\u6362 \u51E0\u79CD\u8EAB\u4EFD \u81EA\u7531\u53D1\u6325\n\u4E0D\u7528 \u4E3E\u624B\u7B7E\u5230 \u591A\u65B9\u4FBF\n\u85CF\u5728 \u5F71\u5B50\u91CC\u9762 \u90A3\u4E9B\u5723\u8D24\n\u8BF4\u4E0D\u5BF9 \u5C31\u4E0D\u5BF9\n\u51FA\u5F81 \u4E0D\u8BF7\u81EA\u6765 \u7528\u4ED6\u7684\u8BBA\u70B9\n\u751A\u81F3 \u8FD8\u4E0D\u6E05\u695A \u4F60\u662F\u8C01\n\u53CC\u773C \u76EF\u7740\u77AC\u95F4 \u98CE\u5F80\u54EA\u8FB9\u5439\n\u60A8\u54EA\u4F4D \u6211\u54EA\u4F4D\n*/\n    div {\n    }\n\n    #taiji {\n        width:200px;\n        height:200px;\n        right: 20px;\n        top: 20px;\n        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n        border-radius: 50%;\n        border: none;\n        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n        }\n    #taiji::before {\n        content: \"\";\n        position: absolute;\n        width: 100px;\n        height: 100px;\n        top: 0;\n        left: 50%;\n        transform: translateX(-50%);\n        border-radius: 50%;\n        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);\n       }\n\n       #taiji::after {\n        content: \"\";\n        position: absolute;\n        width: 100px;\n        height: 100px;\n        bottom: 0;\n        left: 50%;\n        transform: translateX(-50%);\n        border-radius: 50%;\n        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);\n       }\n\n\n";
var i = 0;
var outputText = '';

function update() {
  setTimeout(function () {
    if (i < orignalText.length) {
      if (orignalText[i] === "\n") {
        outputText += "<br>";
      } else {
        outputText += orignalText[i];
      }

      style.innerHTML += orignalText[i];
      divfirst.innerHTML = outputText;
      window.scrollTo(0, 99999);
      divfirst.scrollTo(0, 99999);
      i += 1;
      update();
    }
  }, 0);
}

update();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.58852098.js.map