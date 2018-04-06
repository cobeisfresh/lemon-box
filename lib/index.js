module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var src_services_storage_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/storage/Storage */ \"./src/services/storage/Storage.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Storage\", function() { return src_services_storage_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/services/storage/Storage.js":
/*!*****************************************!*\
  !*** ./src/services/storage/Storage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Storage {\n\n    constructor(storage) {\n        this.storage = localStorage;\n\n        this.clear = () => {\n            this.storage.clear();\n        };\n\n        if (storage !== localStorage || storage !== sessionStorage) {\n            throw Error('Invalid storage provided. Provide localStorage or sessionStorage.');\n        }\n\n        this.storage = storage;\n    }\n\n    get(key) {\n        try {\n            const item = this.storage.getItem(key);\n            if (item) {\n                return JSON.parse(item);\n            } else {\n                return null;\n            }\n        } catch (e) {\n            return null;\n        }\n    }\n\n    set(key, data) {\n        this.storage.setItem(key, JSON.stringify(data));\n    }\n\n    remove(key) {\n        this.storage.removeItem(key);\n    }\n\n    removeMultiple(keys) {\n        keys.forEach(key => this.storage.removeItem(key));\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Storage);\n\n//# sourceURL=webpack:///./src/services/storage/Storage.js?");

/***/ })

/******/ });