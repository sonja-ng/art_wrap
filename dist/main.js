/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\nconsole.log(\"Webpack is working!\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var body = document.querySelector(\"body\");\n  var example = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](body);\n}); // document.addEventListener(\"DOMContentLoaded\", ()=> {\n//     const canvas = document.getElementById('game-canvas');\n//     const ctx = canvas.getContext('2d');\n//     ctx.fillStyle = 'red';\n//     ctx.fillRect( 0, 0, 1000, 1000)\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsSUFBSVAscURBQUosQ0FBWUssSUFBWixDQUFoQjtBQUNGLENBSEYsR0FLQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRfd3JhcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuY29uc29sZS5sb2coXCJXZWJwYWNrIGlzIHdvcmtpbmchXCIpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICBjb25zdCBleGFtcGxlID0gbmV3IEV4YW1wbGUoYm9keSlcbiB9KTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PiB7XG4vLyAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzJyk7XG5cbi8vICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuLy8gICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbi8vICAgICBjdHguZmlsbFJlY3QoIDAsIDAsIDEwMDAsIDEwMDApXG4vLyB9KTsiXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImV4YW1wbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Example = /*#__PURE__*/function () {\n  function Example(ele) {\n    _classCallCheck(this, Example);\n\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>Its alive</h1>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n\n  _createClass(Example, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      this.ele.children[0].innerText = \"Ouch!\";\n    }\n  }]);\n\n  return Example;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUE7QUFDSixtQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNiLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtBLEdBQUwsQ0FBU0MsU0FBVCxHQUFxQixvQkFBckI7QUFDQSxTQUFLRCxHQUFMLENBQVNFLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQW5DO0FBQ0g7Ozs7V0FFRCx1QkFBYztBQUNWLFdBQUtKLEdBQUwsQ0FBU0ssUUFBVCxDQUFrQixDQUFsQixFQUFxQkMsU0FBckIsR0FBaUMsT0FBakM7QUFDSDs7Ozs7O0FBR0gsK0RBQWVQLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRfd3JhcC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFeGFtcGxlICB7XG4gIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgICAgdGhpcy5lbGUgPSBlbGVcbiAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgxPkl0cyBhbGl2ZTwvaDE+XCJcbiAgICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpXG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IFwiT3VjaCFcIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJlbGUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRfd3JhcC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;