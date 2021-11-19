/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsdUdBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2l0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcz82NmVjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.AppInitialProps;\n    }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.NextWebVitalsMetric;\n    }\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ _asyncToGenerator(function*({ Component , ctx  }) {\n        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n        return {\n            pageProps\n        };\n    });\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nclass App extends _react.default.Component {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return(/*#__PURE__*/ _react.default.createElement(Component, Object.assign({\n        }, pageProps)));\n    }\n}\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nexports[\"default\"] = App; //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQVk7QUFDWkEsOENBQTZDLENBQUM7SUFDMUNHLEtBQUssRUFBRSxJQUFJO0FBQ2YsQ0FBQyxFQUFDO0FBQ0ZILG1EQUFrRCxDQUFDO0lBQy9DSSxVQUFVLEVBQUUsSUFBSTtJQUNoQkMsR0FBRyxFQUFFLFFBQVEsR0FBRyxDQUFDO1FBQ2IsTUFBTSxDQUFDQyxNQUFNLENBQUNDLGVBQWU7SUFDakMsQ0FBQztBQUNMLENBQUMsRUFBQztBQUNGUCx1REFBc0QsQ0FBQztJQUNuREksVUFBVSxFQUFFLElBQUk7SUFDaEJDLEdBQUcsRUFBRSxRQUFRLEdBQUcsQ0FBQztRQUNiLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDRSxtQkFBbUI7SUFDckMsQ0FBQztBQUNMLENBQUMsRUFBQztBQUNGTixrQkFBZSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQ1EsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTztBQUNuRCxHQUFHLENBQUNOLE1BQU0sR0FBR00sbUJBQU8sQ0FBQyxnREFBcUI7U0FDakNDLGtCQUFrQixDQUFDQyxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUN4RSxHQUFHLENBQUMsQ0FBQztRQUNELEdBQUcsQ0FBQ0MsSUFBSSxHQUFHUCxHQUFHLENBQUNLLEdBQUcsRUFBRUMsR0FBRztRQUN2QixHQUFHLENBQUNqQixLQUFLLEdBQUdrQixJQUFJLENBQUNsQixLQUFLO0lBQzFCLENBQUMsQ0FBQyxLQUFLLEVBQUVtQixLQUFLLEVBQUUsQ0FBQztRQUNiTixNQUFNLENBQUNNLEtBQUs7UUFDWixNQUFNO0lBQ1YsQ0FBQztJQUNELEVBQUUsRUFBRUQsSUFBSSxDQUFDRSxJQUFJLEVBQUUsQ0FBQztRQUNaUixPQUFPLENBQUNaLEtBQUs7SUFDakIsQ0FBQyxNQUFNLENBQUM7UUFDSnFCLE9BQU8sQ0FBQ1QsT0FBTyxDQUFDWixLQUFLLEVBQUVzQixJQUFJLENBQUNSLEtBQUssRUFBRUMsTUFBTTtJQUM3QyxDQUFDO0FBQ0wsQ0FBQztTQUNRUSxpQkFBaUIsQ0FBQ0MsRUFBRSxFQUFFLENBQUM7SUFDNUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDO1FBQ2YsR0FBRyxDQUFDQyxJQUFJLEdBQUcsSUFBSSxFQUFFQyxJQUFJLEdBQUdDLFNBQVM7UUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQ04sT0FBTyxDQUFDLFFBQVEsQ0FBQ1QsT0FBTyxFQUFFQyxNQUFNLEVBQUUsQ0FBQztZQUMxQyxHQUFHLENBQUNGLEdBQUcsR0FBR2EsRUFBRSxDQUFDSSxLQUFLLENBQUNILElBQUksRUFBRUMsSUFBSTtxQkFDcEJaLEtBQUssQ0FBQ2QsS0FBSyxFQUFFLENBQUM7Z0JBQ25CVSxrQkFBa0IsQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsQ0FBTSxPQUFFZixLQUFLO1lBQ3pFLENBQUM7cUJBQ1FlLE1BQU0sQ0FBQ2MsR0FBRyxFQUFFLENBQUM7Z0JBQ2xCbkIsa0JBQWtCLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLENBQU8sUUFBRWMsR0FBRztZQUN4RSxDQUFDO1lBQ0RmLEtBQUssQ0FBQ2dCLFNBQVM7UUFDbkIsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDO1NBQ1F0QixzQkFBc0IsQ0FBQ3VCLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVUsR0FBR0QsR0FBRyxHQUFHLENBQUM7UUFDbEN6QixPQUFPLEVBQUV5QixHQUFHO0lBQ2hCLENBQUM7QUFDTCxDQUFDO1NBQ1FFLG1CQUFtQixHQUFHLENBQUM7SUFDNUJBLG1CQUFtQixHQUFHLEVBR3ZCOzs7Q0FBQSxHQUFDVixpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDVyxTQUFTLEdBQUdDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMvQyxLQUFLLENBQUNDLFNBQVMsVUFBVSxDQUFDLEVBQUVqQyxNQUFNLEVBQUVrQyxtQkFBbUIsQ0FBQ0gsU0FBUyxFQUFFQyxHQUFHO1FBQ3RFLE1BQU0sQ0FBQyxDQUFDO1lBQ0pDLFNBQVM7UUFDYixDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQ0gsbUJBQW1CLENBQUNMLEtBQUssQ0FBQyxJQUFJLEVBQUVELFNBQVM7QUFDcEQsQ0FBQztTQUNRVyxrQkFBa0IsQ0FBQ0MsQ0FBQyxFQUFFLENBQUM7SUFDNUIsTUFBTSxDQUFDTixtQkFBbUIsQ0FBQ0wsS0FBSyxDQUFDLElBQUksRUFBRUQsU0FBUztBQUNwRCxDQUFDO01BQ0thLEdBQUcsU0FBU2pDLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDNEIsU0FBUztJQUN0Q08sTUFBTSxHQUFHLENBQUM7UUFDTixLQUFLLENBQUMsQ0FBQyxDQUFDUCxTQUFTLEdBQUdFLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDTSxLQUFLO1FBQzdDLE1BQU0sQ0FBQyxFQUFhLFlBQUNuQyxNQUFNLENBQUNELE9BQU8sQ0FBQ3FDLGFBQWEsQ0FBQ1QsU0FBUyxFQUFFckMsTUFBTSxDQUFDK0MsTUFBTSxDQUFDLENBQUM7UUFDNUUsQ0FBQyxFQUFFUixTQUFTO0lBQ2hCLENBQUM7O0FBRUxJLEdBQUcsQ0FBQ0ssbUJBQW1CLEdBQUdQLGtCQUFrQjtBQUM1Q0UsR0FBRyxDQUFDTSxlQUFlLEdBQUdSLGtCQUFrQjtBQUN4Q3ZDLGtCQUFlLEdBQUd5QyxHQUFHLENBRXJCLENBQWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2l0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcz85NjFkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQXBwSW5pdGlhbFByb3BzXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuQXBwSW5pdGlhbFByb3BzO1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTmV4dFdlYlZpdGFsc01ldHJpY1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7XG4gICAgfVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3V0aWxzXCIpO1xuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9hcHBHZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgX2FwcEdldEluaXRpYWxQcm9wcyA9IC8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi8gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qKHsgQ29tcG9uZW50ICwgY3R4ICB9KSB7XG4gICAgICAgIGNvbnN0IHBhZ2VQcm9wcyA9IHlpZWxkICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZVByb3BzXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfKSB7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCAsIHBhZ2VQcm9wcyAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgfSwgcGFnZVByb3BzKSkpO1xuICAgIH1cbn1cbkFwcC5vcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX3V0aWxzIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwib2JqIiwiX19lc01vZHVsZSIsIl9hcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiXyIsIkFwcCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImFzc2lnbiIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_theme_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/theme/index */ \"./src/theme/index.js\");\n/* harmony import */ var _src_theme_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/theme/styles.css */ \"./src/theme/styles.css\");\n/* harmony import */ var _src_theme_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_theme_styles_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {\n        theme: _src_theme_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        __source: {\n            fileName: \"/Users/peterluc/Dev/thomas/repositories /hack-the-ridge-site/htr-website/pages/_app.js\",\n            lineNumber: 11,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"/Users/peterluc/Dev/thomas/repositories /hack-the-ridge-site/htr-website/pages/_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            },\n            __self: undefined\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFSztBQUNjO0FBRVg7QUFDTjtBQUVoQyxLQUFLLENBQUNHLEtBQUssSUFBSSxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQzNDLE1BQU0sc0VBQ0hKLDREQUFjO1FBQUNDLEtBQUssRUFBRUEsd0RBQUs7Ozs7Ozs7dUZBQ3pCRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7OztBQUc5QixDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3JjL3RoZW1lL2luZGV4J1xuaW1wb3J0ICcuLi9zcmMvdGhlbWUvc3R5bGVzLmNzcydcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHJldHVybihcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQXBwUHJvcHMiLCJDaGFrcmFQcm92aWRlciIsInRoZW1lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"@chakra-ui/theme-tools\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar ref, ref1;\nconst inputSelectStyle = {\n    variants: {\n        filled: {\n            field: {\n                _focus: {\n                    borderColor: 'brand.500'\n                }\n            }\n        }\n    }\n};\nconst brandRing = {\n    _focus: {\n        ring: 2,\n        ringColor: 'brand.500'\n    }\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    fonts: {\n        heading: `Montserrat, ${(ref = _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.fonts) === null || ref === void 0 ? void 0 : ref.heading}`,\n        body: `Inter, ${(ref1 = _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.fonts) === null || ref1 === void 0 ? void 0 : ref1.body}`\n    },\n    colors: {\n        brand: {\n            50: '#f5fee5',\n            100: '#e1fbb2',\n            200: '#cdf781',\n            300: '#b8ee56',\n            400: '#a2e032',\n            500: '#8ac919',\n            600: '#71ab09',\n            700: '#578602',\n            800: '#3c5e00',\n            900: '#203300'\n        }\n    },\n    components: {\n        Input: {\n            ...inputSelectStyle\n        },\n        Select: {\n            ...inputSelectStyle\n        },\n        Checkbox: {\n            baseStyle: {\n                control: {\n                    ...brandRing\n                }\n            }\n        },\n        Button: {\n            variants: {\n                primary: (props)=>({\n                        ...brandRing,\n                        backgroundColor: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('brand.500', 'brand.200')(props),\n                        color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('white', 'gray.800')(props),\n                        _hover: {\n                            backgroundColor: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('brand.600', 'brand.300')(props)\n                        },\n                        _active: {\n                            backgroundColor: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('brand.700', 'brand.400')(props)\n                        }\n                    })\n            }\n        }\n    }\n}, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.withDefaultColorScheme)({\n    colorScheme: 'brand',\n    components: [\n        'Checkbox'\n    ]\n}), (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.withDefaultVariant)({\n    variant: 'filled',\n    components: [\n        'Input',\n        'Select'\n    ]\n}));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsQ0FBUTtJQUNqQmQsVUFBVSxFQUFFLENBQUM7UUFBQyxDQUFPO1FBQUUsQ0FBUTtJQUFDLENBQUM7QUFDckMsQ0FBQztBQUVMLGlFQUFlbkIsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGUvLi9zcmMvdGhlbWUvaW5kZXguanM/ODljMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcbiAgICBleHRlbmRUaGVtZSwgXG4gICAgdGhlbWUgYXMgYmFzZSwgXG4gICAgd2l0aERlZmF1bHRDb2xvclNjaGVtZSxcbiAgICB3aXRoRGVmYXVsdFZhcmlhbnQgXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcblxuaW1wb3J0IHsgbW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCJcblxuY29uc3QgaW5wdXRTZWxlY3RTdHlsZSA9IHtcbiAgICB2YXJpYW50czoge1xuICAgICAgICBmaWxsZWQ6IHtcbiAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgX2ZvY3VzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnYnJhbmQuNTAwJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgYnJhbmRSaW5nID0ge1xuICAgIF9mb2N1czoge1xuICAgICAgICByaW5nOiAyLFxuICAgICAgICByaW5nQ29sb3I6ICdicmFuZC41MDAnXG4gICAgfVxufVxuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgICBmb250czoge1xuICAgICAgICBoZWFkaW5nOiBgTW9udHNlcnJhdCwgJHtiYXNlLmZvbnRzPy5oZWFkaW5nfWAsXG4gICAgICAgIGJvZHk6IGBJbnRlciwgJHtiYXNlLmZvbnRzPy5ib2R5fWBcbiAgICB9LFxuICAgIGNvbG9yczoge1xuICAgICAgICBicmFuZDoge1xuICAgICAgICAgICAgNTA6ICcjZjVmZWU1JyxcbiAgICAgICAgICAgIDEwMDogJyNlMWZiYjInLFxuICAgICAgICAgICAgMjAwOiAnI2NkZjc4MScsXG4gICAgICAgICAgICAzMDA6ICcjYjhlZTU2JyxcbiAgICAgICAgICAgIDQwMDogJyNhMmUwMzInLFxuICAgICAgICAgICAgNTAwOiAnIzhhYzkxOScsXG4gICAgICAgICAgICA2MDA6ICcjNzFhYjA5JyxcbiAgICAgICAgICAgIDcwMDogJyM1Nzg2MDInLFxuICAgICAgICAgICAgODAwOiAnIzNjNWUwMCcsXG4gICAgICAgICAgICA5MDA6ICcjMjAzMzAwJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBJbnB1dDogeyAuLi5pbnB1dFNlbGVjdFN0eWxlIH0sXG4gICAgICAgIFNlbGVjdDogeyAuLi5pbnB1dFNlbGVjdFN0eWxlIH0sXG4gICAgICAgIENoZWNrYm94OiB7XG4gICAgICAgICAgICBiYXNlU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb250cm9sOiB7IC4uLmJyYW5kUmluZyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIEJ1dHRvbjoge1xuICAgICAgICAgICAgdmFyaWFudHM6IHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5OiAocHJvcHMpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLmJyYW5kUmluZyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtb2RlKCdicmFuZC41MDAnLCAnYnJhbmQuMjAwJykocHJvcHMpLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbW9kZSgnd2hpdGUnLCAnZ3JheS44MDAnKShwcm9wcyksXG4gICAgICAgICAgICAgICAgICAgIF9ob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtb2RlKCdicmFuZC42MDAnLCAnYnJhbmQuMzAwJykocHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgX2FjdGl2ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtb2RlKCdicmFuZC43MDAnLCAnYnJhbmQuNDAwJykocHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfX0sXG4gICAgd2l0aERlZmF1bHRDb2xvclNjaGVtZSh7XG4gICAgICAgIGNvbG9yU2NoZW1lOiAnYnJhbmQnLFxuICAgICAgICBjb21wb25lbnRzOiBbICdDaGVja2JveCcgXVxuICAgIH0pLFxuICAgIHdpdGhEZWZhdWx0VmFyaWFudCh7XG4gICAgICAgIHZhcmlhbnQ6ICdmaWxsZWQnLFxuICAgICAgICBjb21wb25lbnRzOiBbICdJbnB1dCcsICdTZWxlY3QnIF1cbiAgICB9KSlcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJ0aGVtZSIsImJhc2UiLCJ3aXRoRGVmYXVsdENvbG9yU2NoZW1lIiwid2l0aERlZmF1bHRWYXJpYW50IiwibW9kZSIsImlucHV0U2VsZWN0U3R5bGUiLCJ2YXJpYW50cyIsImZpbGxlZCIsImZpZWxkIiwiX2ZvY3VzIiwiYm9yZGVyQ29sb3IiLCJicmFuZFJpbmciLCJyaW5nIiwicmluZ0NvbG9yIiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsImNvbG9ycyIsImJyYW5kIiwiY29tcG9uZW50cyIsIklucHV0IiwiU2VsZWN0IiwiQ2hlY2tib3giLCJiYXNlU3R5bGUiLCJjb250cm9sIiwiQnV0dG9uIiwicHJpbWFyeSIsInByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJfaG92ZXIiLCJfYWN0aXZlIiwiY29sb3JTY2hlbWUiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme/index.js\n");

/***/ }),

/***/ "./src/theme/styles.css":
/*!******************************!*\
  !*** ./src/theme/styles.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();