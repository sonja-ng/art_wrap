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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\nconsole.log(\"Webpack is working!\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var canvasEl = document.querySelector(\".game-canvas\");\n  new _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, canvasEl);\n}); // document.addEventListener(\"DOMContentLoaded\", ()=> {\n//     const canvas = document.getElementById('game-canvas');\n//     const ctx = canvas.getContext('2d');\n//     ctx.fillStyle = 'blue';\n//     ctx.fillRect( 0, 0, 1000, 1000)\n//     g1 = new Game();\n//     g1.yell();\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQU1DLElBQUksR0FBRyxJQUFJTixxREFBSixFQUFiO0FBQ0EsTUFBTU8sUUFBUSxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQSxNQUFJUCw2Q0FBSixDQUFTSyxJQUFULEVBQWVDLFFBQWY7QUFDRixDQUpGLEdBU0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FydF93cmFwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc29sZS5sb2coXCJXZWJwYWNrIGlzIHdvcmtpbmchXCIpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jYW52YXNcIik7XG4gICAgbmV3IFZpZXcoZ2FtZSwgY2FudmFzRWwpO1xuIH0pO1xuXG5cblxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+IHtcbi8vICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcblxuLy8gICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4vLyAgICAgY3R4LmZpbGxTdHlsZSA9ICdibHVlJztcbi8vICAgICBjdHguZmlsbFJlY3QoIDAsIDAsIDEwMDAsIDEwMDApXG5cbi8vICAgICBnMSA9IG5ldyBHYW1lKCk7XG4vLyAgICAgZzEueWVsbCgpO1xuLy8gfSk7XG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiR2FtZSIsIlZpZXciLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZSIsImNhbnZhc0VsIiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function Game() {\n  _classCallCheck(this, Game);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7OztJQUFNQSxPQUNKLGdCQUFjO0FBQUE7QUFFYjs7QUFHSCwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2FydF93cmFwLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWUgIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuXG5cbiAiXSwibmFtZXMiOlsiR2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar View = /*#__PURE__*/function () {\n  function View(game, el) {\n    _classCallCheck(this, View);\n\n    this.el = el;\n    this.game = game;\n    this.setupIntro();\n    this.bindEvents();\n    this.setupGame();\n  }\n\n  _createClass(View, [{\n    key: \"setupGame\",\n    value: function setupGame() {\n      var newDiv = document.createElement(\"div\");\n      newDiv.className = \"game-view\";\n      newDiv.innerText = \"this is the game\";\n      this.el.append(newDiv);\n    }\n  }, {\n    key: \"setupIntro\",\n    value: function setupIntro() {\n      var newDiv = document.createElement(\"div\");\n      newDiv.className = \"splash-intro\";\n      newDiv.innerText = \"Instruction\";\n      this.el.append(newDiv);\n    }\n  }, {\n    key: \"removeIntro\",\n    value: function removeIntro() {\n      var intro = document.querySelector(\".splash-intro\");\n      intro.classList.add(\"hidden\");\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      var _this = this;\n\n      var that = this;\n      var intro = document.querySelector(\".splash-intro\");\n      document.addEventListener(\"keydown\", function (e) {\n        var keyName = e.key;\n        var keyCode = e.code;\n\n        if (keyCode === 'Enter') {\n          _this.removeIntro();\n        }\n      });\n    }\n  }]);\n\n  return View;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQU1BO0FBQ0YsZ0JBQVlDLElBQVosRUFBa0JDLEVBQWxCLEVBQXNCO0FBQUE7O0FBQ2xCLFNBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtFLFVBQUw7QUFDQSxTQUFLQyxVQUFMO0FBQ0EsU0FBS0MsU0FBTDtBQUNIOzs7O1dBRUQscUJBQVk7QUFDUixVQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0FGLE1BQUFBLE1BQU0sQ0FBQ0csU0FBUCxHQUFtQixXQUFuQjtBQUNBSCxNQUFBQSxNQUFNLENBQUNJLFNBQVAsR0FBbUIsa0JBQW5CO0FBRUEsV0FBS1IsRUFBTCxDQUFRUyxNQUFSLENBQWVMLE1BQWY7QUFDSDs7O1dBRUQsc0JBQWE7QUFDVCxVQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0FGLE1BQUFBLE1BQU0sQ0FBQ0csU0FBUCxHQUFtQixjQUFuQjtBQUNBSCxNQUFBQSxNQUFNLENBQUNJLFNBQVAsR0FBbUIsYUFBbkI7QUFFQSxXQUFLUixFQUFMLENBQVFTLE1BQVIsQ0FBZUwsTUFBZjtBQUNIOzs7V0FFRCx1QkFBYztBQUNWLFVBQU1NLEtBQUssR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLGVBQXZCLENBQWQ7QUFDQUQsTUFBQUEsS0FBSyxDQUFDRSxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixRQUFwQjtBQUNIOzs7V0FFRCxzQkFBYTtBQUFBOztBQUNULFVBQU1DLElBQUksR0FBRyxJQUFiO0FBQ0EsVUFBTUosS0FBSyxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBZDtBQUNBTixNQUFBQSxRQUFRLENBQUNVLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUNDLENBQUQsRUFBTztBQUN4QyxZQUFNQyxPQUFPLEdBQUdELENBQUMsQ0FBQ0UsR0FBbEI7QUFDQSxZQUFNQyxPQUFPLEdBQUdILENBQUMsQ0FBQ0ksSUFBbEI7O0FBQ0EsWUFBSUQsT0FBTyxLQUFLLE9BQWhCLEVBQXlCO0FBQ3JCLGVBQUksQ0FBQ0UsV0FBTDtBQUNIO0FBQ0osT0FORDtBQU9IOzs7Ozs7QUFPSCwrREFBZXZCLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRfd3JhcC8uL3NyYy92aWV3LmpzP2YwNzgiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVmlldyAge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGVsKSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5zZXR1cEludHJvKClcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKClcbiAgICAgICAgdGhpcy5zZXR1cEdhbWUoKVxuICAgIH1cblxuICAgIHNldHVwR2FtZSgpIHtcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3RGl2LmNsYXNzTmFtZSA9IFwiZ2FtZS12aWV3XCI7XG4gICAgICAgIG5ld0Rpdi5pbm5lclRleHQgPSBcInRoaXMgaXMgdGhlIGdhbWVcIjtcblxuICAgICAgICB0aGlzLmVsLmFwcGVuZChuZXdEaXYpO1xuICAgIH1cblxuICAgIHNldHVwSW50cm8oKSB7XG4gICAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld0Rpdi5jbGFzc05hbWUgPSBcInNwbGFzaC1pbnRyb1wiO1xuICAgICAgICBuZXdEaXYuaW5uZXJUZXh0ID0gXCJJbnN0cnVjdGlvblwiO1xuXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kKG5ld0Rpdik7XG4gICAgfVxuXG4gICAgcmVtb3ZlSW50cm8oKSB7XG4gICAgICAgIGNvbnN0IGludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGxhc2gtaW50cm9cIik7XG4gICAgICAgIGludHJvLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGxhc2gtaW50cm9cIik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlOYW1lID0gZS5rZXk7XG4gICAgICAgICAgICBjb25zdCBrZXlDb2RlID0gZS5jb2RlO1xuICAgICAgICAgICAgaWYgKGtleUNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUludHJvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICBcblxuXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IFZpZXc7XG4gICJdLCJuYW1lcyI6WyJWaWV3IiwiZ2FtZSIsImVsIiwic2V0dXBJbnRybyIsImJpbmRFdmVudHMiLCJzZXR1cEdhbWUiLCJuZXdEaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lclRleHQiLCJhcHBlbmQiLCJpbnRybyIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0aGF0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlOYW1lIiwia2V5Iiwia2V5Q29kZSIsImNvZGUiLCJyZW1vdmVJbnRybyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/view.js\n");

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