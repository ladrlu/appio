"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/StoryCard.tsx":
/*!**********************************!*\
  !*** ./components/StoryCard.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StoryCard\": function() { return /* binding */ StoryCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var anolis_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! anolis-ui */ \"./node_modules/anolis-ui/dist/index.es.js\");\n/* harmony import */ var _xstyled_emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xstyled/emotion */ \"./node_modules/@xstyled/emotion/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar StoryCard = function(param) {\n    var _v = param.v, v = _v === void 0 ? \"outlined\" : _v, _linkText = param.linkText, linkText = _linkText === void 0 ? \"story detail\" : _linkText, perex = param.perex, styledTitle = param.styledTitle, tag = param.tag, url = param.url;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), active = ref[0], setActive = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: url,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(anolis_ui__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            v: v,\n            linkText: linkText,\n            tag: tag,\n            onMouseEnter: function() {\n                return setActive(true);\n            },\n            onMouseLeave: function() {\n                return setActive(false);\n            },\n            borderColor: active ? \"white\" : \"text\",\n            cursor: \"pointer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xstyled_emotion__WEBPACK_IMPORTED_MODULE_4__.x.h3, {\n                    fontSize: \"basic\",\n                    color: active ? \"white\" : \"primary\",\n                    fontWeight: 400,\n                    textDecoration: active ? \"underline\" : \"none\",\n                    mb: \"1.88rem\",\n                    transition: true,\n                    children: styledTitle\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\StoryCard.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xstyled_emotion__WEBPACK_IMPORTED_MODULE_4__.x.div, {\n                    transition: true,\n                    color: active ? \"white\" : \"text\",\n                    children: perex\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\StoryCard.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(anolis_ui__WEBPACK_IMPORTED_MODULE_1__.TextLink, {\n                    v: \"underlined\",\n                    children: linkText\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\StoryCard.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\StoryCard.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\StoryCard.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(StoryCard, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = StoryCard;\nvar _c;\n$RefreshReg$(_c, \"StoryCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0b3J5Q2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXNEO0FBQ2pCO0FBQ1I7QUFFVzs7QUFTakMsSUFBTU0sU0FBUyxHQUFHLGdCQU9IO21CQU5wQkMsQ0FBQyxFQUFEQSxDQUFDLG1CQUFHLFVBQVUseUJBQ2RDLFFBQVEsRUFBUkEsUUFBUSwwQkFBRyxjQUFjLGNBQ3pCQyxLQUFLLFNBQUxBLEtBQUssRUFDTEMsV0FBVyxTQUFYQSxXQUFXLEVBQ1hDLEdBQUcsU0FBSEEsR0FBRyxFQUNIQyxHQUFHLFNBQUhBLEdBQUc7O0lBRUgsSUFBNEJQLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFyQjdDLE1BcUJlLEdBQWVBLEdBQWUsR0FBOUIsRUFyQmYsU0FxQjBCLEdBQUlBLEdBQWUsR0FBbkI7SUFDeEIscUJBQ0UsOERBQUNGLGtEQUFJO1FBQUNZLElBQUksRUFBRUgsR0FBRztrQkFDYiw0RUFBQ1osMkNBQUk7WUFDSE8sQ0FBQyxFQUFFQSxDQUFDO1lBQ0pDLFFBQVEsRUFBRUEsUUFBUTtZQUNsQkcsR0FBRyxFQUFFQSxHQUFHO1lBQ1JLLFlBQVksRUFBRTt1QkFBTUYsU0FBUyxDQUFDLElBQUksQ0FBQzthQUFBO1lBQ25DRyxZQUFZLEVBQUU7dUJBQU1ILFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFBQTtZQUNwQ0ksV0FBVyxFQUFFTCxNQUFNLEdBQUcsT0FBTyxHQUFHLE1BQU07WUFDdENNLE1BQU0sRUFBQyxTQUFTOzs4QkFFaEIsOERBQUNqQixrREFBSTtvQkFDSG1CLFFBQVEsRUFBQyxPQUFPO29CQUNoQkMsS0FBSyxFQUFFVCxNQUFNLEdBQUcsT0FBTyxHQUFHLFNBQVM7b0JBQ25DVSxVQUFVLEVBQUUsR0FBRztvQkFDZkMsY0FBYyxFQUFFWCxNQUFNLEdBQUcsV0FBVyxHQUFHLE1BQU07b0JBQzdDWSxFQUFFLEVBQUMsU0FBUztvQkFDWkMsVUFBVTs4QkFFVGhCLFdBQVc7Ozs7O3lCQUNQOzhCQUNQLDhEQUFDUixtREFBSztvQkFBQ3dCLFVBQVU7b0JBQUNKLEtBQUssRUFBRVQsTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNOzhCQUMvQ0osS0FBSzs7Ozs7eUJBQ0E7OEJBQ1IsOERBQUNSLCtDQUFRO29CQUFDTSxDQUFDLEVBQUMsWUFBWTs4QkFBRUMsUUFBUTs7Ozs7eUJBQVk7Ozs7OztpQkFDekM7Ozs7O2FBQ0YsQ0FDUDtDQUNILENBQUM7R0FyQ1dGLFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N0b3J5Q2FyZC50c3g/YTBiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBDYXJkUHJvcHMsIFRleHRMaW5rIH0gZnJvbSBcImFub2xpcy11aVwiO1xyXG5pbXBvcnQgeyB4IH0gZnJvbSBcIkB4c3R5bGVkL2Vtb3Rpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tIFwidXJsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFN0b3J5Q2FyZFByb3BzIGV4dGVuZHMgQ2FyZFByb3BzIHtcclxuICBzdHlsZWRUaXRsZTogc3RyaW5nO1xyXG4gIHBlcmV4OiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmcgfCBVcmxPYmplY3Q7XHJcbiAgbGlua1RleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0b3J5Q2FyZCA9ICh7XHJcbiAgdiA9IFwib3V0bGluZWRcIixcclxuICBsaW5rVGV4dCA9IFwic3RvcnkgZGV0YWlsXCIsXHJcbiAgcGVyZXgsXHJcbiAgc3R5bGVkVGl0bGUsXHJcbiAgdGFnLFxyXG4gIHVybCxcclxufTogU3RvcnlDYXJkUHJvcHMpID0+IHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXt1cmx9PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIHY9e3Z9XHJcbiAgICAgICAgbGlua1RleHQ9e2xpbmtUZXh0fVxyXG4gICAgICAgIHRhZz17dGFnfVxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0QWN0aXZlKHRydWUpfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlKGZhbHNlKX1cclxuICAgICAgICBib3JkZXJDb2xvcj17YWN0aXZlID8gXCJ3aGl0ZVwiIDogXCJ0ZXh0XCJ9XHJcbiAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8eC5oM1xyXG4gICAgICAgICAgZm9udFNpemU9XCJiYXNpY1wiXHJcbiAgICAgICAgICBjb2xvcj17YWN0aXZlID8gXCJ3aGl0ZVwiIDogXCJwcmltYXJ5XCJ9XHJcbiAgICAgICAgICBmb250V2VpZ2h0PXs0MDB9XHJcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbj17YWN0aXZlID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwifVxyXG4gICAgICAgICAgbWI9XCIxLjg4cmVtXCJcclxuICAgICAgICAgIHRyYW5zaXRpb25cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c3R5bGVkVGl0bGV9XHJcbiAgICAgICAgPC94LmgzPlxyXG4gICAgICAgIDx4LmRpdiB0cmFuc2l0aW9uIGNvbG9yPXthY3RpdmUgPyBcIndoaXRlXCIgOiBcInRleHRcIn0+XHJcbiAgICAgICAgICB7cGVyZXh9XHJcbiAgICAgICAgPC94LmRpdj5cclxuICAgICAgICA8VGV4dExpbmsgdj1cInVuZGVybGluZWRcIj57bGlua1RleHR9PC9UZXh0TGluaz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJDYXJkIiwiVGV4dExpbmsiLCJ4IiwiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJTdG9yeUNhcmQiLCJ2IiwibGlua1RleHQiLCJwZXJleCIsInN0eWxlZFRpdGxlIiwidGFnIiwidXJsIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaHJlZiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImJvcmRlckNvbG9yIiwiY3Vyc29yIiwiaDMiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsInRleHREZWNvcmF0aW9uIiwibWIiLCJ0cmFuc2l0aW9uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/StoryCard.tsx\n");

/***/ })

});