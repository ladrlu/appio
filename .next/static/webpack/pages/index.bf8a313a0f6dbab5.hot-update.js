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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StoryCard\": function() { return /* binding */ StoryCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var anolis_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! anolis-ui */ \"./node_modules/anolis-ui/dist/index.es.js\");\n/* harmony import */ var _xstyled_emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xstyled/emotion */ \"./node_modules/@xstyled/emotion/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar StoryCard = function(param) {\n    var _v = param.v, v = _v === void 0 ? \"outlined\" : _v, _footer = param.footer, footer = _footer === void 0 ? \"story detail\" : _footer, perex = param.perex, customTitle = param.customTitle, tag = param.tag, url = param.url;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), active = ref[0], setActive = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: url,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(anolis_ui__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            v: v,\n            footer: footer,\n            tag: tag,\n            onMouseEnter: function() {\n                return setActive(true);\n            },\n            onMouseLeave: function() {\n                return setActive(false);\n            },\n            borderColor: active ? \"white\" : \"text\",\n            cursor: \"pointer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xstyled_emotion__WEBPACK_IMPORTED_MODULE_4__.x.h3, {\n                    fontSize: \"basic\",\n                    color: active ? \"white\" : \"primary\",\n                    fontWeight: 400,\n                    textDecoration: active ? \"underline\" : \"none\",\n                    mb: \"1.88rem\",\n                    transition: true,\n                    children: customTitle\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\StoryCard.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xstyled_emotion__WEBPACK_IMPORTED_MODULE_4__.x.div, {\n                    transition: true,\n                    color: active ? \"white\" : \"text\",\n                    children: perex\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\StoryCard.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\StoryCard.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\StoryCard.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(StoryCard, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = StoryCard;\nvar _c;\n$RefreshReg$(_c, \"StoryCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0b3J5Q2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ1A7QUFDUjtBQUdXOztBQVFqQyxJQUFNSyxTQUFTLEdBQUcsZ0JBT0g7bUJBTnBCQyxDQUFDLEVBQURBLENBQUMsbUJBQUcsVUFBVSx1QkFDZEMsTUFBTSxFQUFOQSxNQUFNLHdCQUFHLGNBQWMsWUFDdkJDLEtBQUssU0FBTEEsS0FBSyxFQUNMQyxXQUFXLFNBQVhBLFdBQVcsRUFDWEMsR0FBRyxTQUFIQSxHQUFHLEVBQ0hDLEdBQUcsU0FBSEEsR0FBRzs7SUFFSCxJQUE0QlAsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQXJCN0MsTUFxQmUsR0FBZUEsR0FBZSxHQUE5QixFQXJCZixTQXFCMEIsR0FBSUEsR0FBZSxHQUFuQjtJQUN4QixxQkFDRSw4REFBQ0Ysa0RBQUk7UUFBQ1ksSUFBSSxFQUFFSCxHQUFHO2tCQUNiLDRFQUFDWCwyQ0FBSTtZQUNITSxDQUFDLEVBQUVBLENBQUM7WUFDSkMsTUFBTSxFQUFFQSxNQUFNO1lBQ2RHLEdBQUcsRUFBRUEsR0FBRztZQUNSSyxZQUFZLEVBQUU7dUJBQU1GLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFBQTtZQUNuQ0csWUFBWSxFQUFFO3VCQUFNSCxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQUE7WUFDcENJLFdBQVcsRUFBRUwsTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNO1lBQ3RDTSxNQUFNLEVBQUMsU0FBUzs7OEJBRWhCLDhEQUFDakIsa0RBQUk7b0JBQ0htQixRQUFRLEVBQUMsT0FBTztvQkFDaEJDLEtBQUssRUFBRVQsTUFBTSxHQUFHLE9BQU8sR0FBRyxTQUFTO29CQUNuQ1UsVUFBVSxFQUFFLEdBQUc7b0JBQ2ZDLGNBQWMsRUFBRVgsTUFBTSxHQUFHLFdBQVcsR0FBRyxNQUFNO29CQUM3Q1ksRUFBRSxFQUFDLFNBQVM7b0JBQ1pDLFVBQVU7OEJBRVRoQixXQUFXOzs7Ozt5QkFDUDs4QkFDUCw4REFBQ1IsbURBQUs7b0JBQUN3QixVQUFVO29CQUFDSixLQUFLLEVBQUVULE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTs4QkFDL0NKLEtBQUs7Ozs7O3lCQUNBOzs7Ozs7aUJBQ0g7Ozs7O2FBQ0YsQ0FDUDtDQUNILENBQUM7R0FwQ1dILFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N0b3J5Q2FyZC50c3g/YTBiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBDYXJkUHJvcHMgfSBmcm9tIFwiYW5vbGlzLXVpXCI7XHJcbmltcG9ydCB7IHggfSBmcm9tIFwiQHhzdHlsZWQvZW1vdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IExpbmtQcm9wcyB9IGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSBcInVybFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBTdG9yeUNhcmRQcm9wcyBleHRlbmRzIENhcmRQcm9wcyB7XHJcbiAgY3VzdG9tVGl0bGU6IHN0cmluZztcclxuICBwZXJleDogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nIHwgVXJsT2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3RvcnlDYXJkID0gKHtcclxuICB2ID0gXCJvdXRsaW5lZFwiLFxyXG4gIGZvb3RlciA9IFwic3RvcnkgZGV0YWlsXCIsXHJcbiAgcGVyZXgsXHJcbiAgY3VzdG9tVGl0bGUsXHJcbiAgdGFnLFxyXG4gIHVybCxcclxufTogU3RvcnlDYXJkUHJvcHMpID0+IHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXt1cmx9PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIHY9e3Z9XHJcbiAgICAgICAgZm9vdGVyPXtmb290ZXJ9XHJcbiAgICAgICAgdGFnPXt0YWd9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmUodHJ1ZSl9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRBY3RpdmUoZmFsc2UpfVxyXG4gICAgICAgIGJvcmRlckNvbG9yPXthY3RpdmUgPyBcIndoaXRlXCIgOiBcInRleHRcIn1cclxuICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx4LmgzXHJcbiAgICAgICAgICBmb250U2l6ZT1cImJhc2ljXCJcclxuICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyBcIndoaXRlXCIgOiBcInByaW1hcnlcIn1cclxuICAgICAgICAgIGZvbnRXZWlnaHQ9ezQwMH1cclxuICAgICAgICAgIHRleHREZWNvcmF0aW9uPXthY3RpdmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCJ9XHJcbiAgICAgICAgICBtYj1cIjEuODhyZW1cIlxyXG4gICAgICAgICAgdHJhbnNpdGlvblxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjdXN0b21UaXRsZX1cclxuICAgICAgICA8L3guaDM+XHJcbiAgICAgICAgPHguZGl2IHRyYW5zaXRpb24gY29sb3I9e2FjdGl2ZSA/IFwid2hpdGVcIiA6IFwidGV4dFwifT5cclxuICAgICAgICAgIHtwZXJleH1cclxuICAgICAgICA8L3guZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJ4IiwiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJTdG9yeUNhcmQiLCJ2IiwiZm9vdGVyIiwicGVyZXgiLCJjdXN0b21UaXRsZSIsInRhZyIsInVybCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImhyZWYiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJib3JkZXJDb2xvciIsImN1cnNvciIsImgzIiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1iIiwidHJhbnNpdGlvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StoryCard.tsx\n");

/***/ })

});