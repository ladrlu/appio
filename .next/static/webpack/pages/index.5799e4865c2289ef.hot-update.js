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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StoryCard\": function() { return /* binding */ StoryCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var anolis_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! anolis-ui */ \"./node_modules/anolis-ui/dist/index.es.js\");\n/* harmony import */ var _xstyled_emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xstyled/emotion */ \"./node_modules/@xstyled/emotion/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar StoryCard = function(param) {\n    var _v = param.v, v = _v === void 0 ? \"outlined\" : _v, _linkText = param.linkText, linkText = _linkText === void 0 ? \"story detail\" : _linkText, footer = param.footer, perex = param.perex, styledTitle = param.styledTitle, tag = param.tag, url = param.url;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), active = ref[0], setActive = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: url,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(anolis_ui__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            v: v,\n            footer: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(anolis_ui__WEBPACK_IMPORTED_MODULE_1__.TextLink, {\n                v: \"underlined\",\n                children: linkText\n            }, void 0, false, void 0, void 0),\n            tag: tag,\n            onMouseEnter: function() {\n                return setActive(true);\n            },\n            onMouseLeave: function() {\n                return setActive(false);\n            },\n            borderColor: active ? \"white\" : \"text\",\n            cursor: \"pointer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xstyled_emotion__WEBPACK_IMPORTED_MODULE_4__.x.h3, {\n                    fontSize: \"basic\",\n                    color: active ? \"white\" : \"primary\",\n                    fontWeight: 400,\n                    textDecoration: active ? \"underline\" : \"none\",\n                    mb: \"1.88rem\",\n                    transition: true,\n                    children: styledTitle\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\StoryCard.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xstyled_emotion__WEBPACK_IMPORTED_MODULE_4__.x.div, {\n                    transition: true,\n                    color: active ? \"white\" : \"text\",\n                    children: perex\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\StoryCard.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\StoryCard.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\StoryCard.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(StoryCard, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = StoryCard;\nvar _c;\n$RefreshReg$(_c, \"StoryCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0b3J5Q2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXNEO0FBQ2pCO0FBQ1I7QUFFVzs7QUFTakMsSUFBTU0sU0FBUyxHQUFHLGdCQVFIO21CQVBwQkMsQ0FBQyxFQUFEQSxDQUFDLG1CQUFHLFVBQVUseUJBQ2RDLFFBQVEsRUFBUkEsUUFBUSwwQkFBRyxjQUFjLGNBQ3pCQyxNQUFNLFNBQU5BLE1BQU0sRUFDTkMsS0FBSyxTQUFMQSxLQUFLLEVBQ0xDLFdBQVcsU0FBWEEsV0FBVyxFQUNYQyxHQUFHLFNBQUhBLEdBQUcsRUFDSEMsR0FBRyxTQUFIQSxHQUFHOztJQUVILElBQTRCUixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBdEI3QyxNQXNCZSxHQUFlQSxHQUFlLEdBQTlCLEVBdEJmLFNBc0IwQixHQUFJQSxHQUFlLEdBQW5CO0lBQ3hCLHFCQUNFLDhEQUFDRixrREFBSTtRQUFDYSxJQUFJLEVBQUVILEdBQUc7a0JBQ2IsNEVBQUNiLDJDQUFJO1lBQ0hPLENBQUMsRUFBRUEsQ0FBQztZQUNKRSxNQUFNLGdCQUFFLDhEQUFDUiwrQ0FBUTtnQkFBQ00sQ0FBQyxFQUFDLFlBQVk7MEJBQUVDLFFBQVE7NkNBQVk7WUFDdERJLEdBQUcsRUFBRUEsR0FBRztZQUNSSyxZQUFZLEVBQUU7dUJBQU1GLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFBQTtZQUNuQ0csWUFBWSxFQUFFO3VCQUFNSCxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQUE7WUFDcENJLFdBQVcsRUFBRUwsTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNO1lBQ3RDTSxNQUFNLEVBQUMsU0FBUzs7OEJBRWhCLDhEQUFDbEIsa0RBQUk7b0JBQ0hvQixRQUFRLEVBQUMsT0FBTztvQkFDaEJDLEtBQUssRUFBRVQsTUFBTSxHQUFHLE9BQU8sR0FBRyxTQUFTO29CQUNuQ1UsVUFBVSxFQUFFLEdBQUc7b0JBQ2ZDLGNBQWMsRUFBRVgsTUFBTSxHQUFHLFdBQVcsR0FBRyxNQUFNO29CQUM3Q1ksRUFBRSxFQUFDLFNBQVM7b0JBQ1pDLFVBQVU7OEJBRVRoQixXQUFXOzs7Ozt5QkFDUDs4QkFDUCw4REFBQ1QsbURBQUs7b0JBQUN5QixVQUFVO29CQUFDSixLQUFLLEVBQUVULE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTs4QkFDL0NKLEtBQUs7Ozs7O3lCQUNBOzs7Ozs7aUJBQ0g7Ozs7O2FBQ0YsQ0FDUDtDQUNILENBQUM7R0FyQ1dKLFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N0b3J5Q2FyZC50c3g/YTBiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBDYXJkUHJvcHMsIFRleHRMaW5rIH0gZnJvbSBcImFub2xpcy11aVwiO1xyXG5pbXBvcnQgeyB4IH0gZnJvbSBcIkB4c3R5bGVkL2Vtb3Rpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tIFwidXJsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFN0b3J5Q2FyZFByb3BzIGV4dGVuZHMgQ2FyZFByb3BzIHtcclxuICBzdHlsZWRUaXRsZTogc3RyaW5nO1xyXG4gIHBlcmV4OiBzdHJpbmc7XHJcbiAgbGlua1RleHQ6IHN0cmluZztcclxuICB1cmw6IHN0cmluZyB8IFVybE9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0b3J5Q2FyZCA9ICh7XHJcbiAgdiA9IFwib3V0bGluZWRcIixcclxuICBsaW5rVGV4dCA9IFwic3RvcnkgZGV0YWlsXCIsXHJcbiAgZm9vdGVyLFxyXG4gIHBlcmV4LFxyXG4gIHN0eWxlZFRpdGxlLFxyXG4gIHRhZyxcclxuICB1cmwsXHJcbn06IFN0b3J5Q2FyZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17dXJsfT5cclxuICAgICAgPENhcmRcclxuICAgICAgICB2PXt2fVxyXG4gICAgICAgIGZvb3Rlcj17PFRleHRMaW5rIHY9XCJ1bmRlcmxpbmVkXCI+e2xpbmtUZXh0fTwvVGV4dExpbms+fVxyXG4gICAgICAgIHRhZz17dGFnfVxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0QWN0aXZlKHRydWUpfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlKGZhbHNlKX1cclxuICAgICAgICBib3JkZXJDb2xvcj17YWN0aXZlID8gXCJ3aGl0ZVwiIDogXCJ0ZXh0XCJ9XHJcbiAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8eC5oM1xyXG4gICAgICAgICAgZm9udFNpemU9XCJiYXNpY1wiXHJcbiAgICAgICAgICBjb2xvcj17YWN0aXZlID8gXCJ3aGl0ZVwiIDogXCJwcmltYXJ5XCJ9XHJcbiAgICAgICAgICBmb250V2VpZ2h0PXs0MDB9XHJcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbj17YWN0aXZlID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwifVxyXG4gICAgICAgICAgbWI9XCIxLjg4cmVtXCJcclxuICAgICAgICAgIHRyYW5zaXRpb25cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c3R5bGVkVGl0bGV9XHJcbiAgICAgICAgPC94LmgzPlxyXG4gICAgICAgIDx4LmRpdiB0cmFuc2l0aW9uIGNvbG9yPXthY3RpdmUgPyBcIndoaXRlXCIgOiBcInRleHRcIn0+XHJcbiAgICAgICAgICB7cGVyZXh9XHJcbiAgICAgICAgPC94LmRpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJDYXJkIiwiVGV4dExpbmsiLCJ4IiwiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJTdG9yeUNhcmQiLCJ2IiwibGlua1RleHQiLCJmb290ZXIiLCJwZXJleCIsInN0eWxlZFRpdGxlIiwidGFnIiwidXJsIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaHJlZiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImJvcmRlckNvbG9yIiwiY3Vyc29yIiwiaDMiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsInRleHREZWNvcmF0aW9uIiwibWIiLCJ0cmFuc2l0aW9uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/StoryCard.tsx\n");

/***/ })

});