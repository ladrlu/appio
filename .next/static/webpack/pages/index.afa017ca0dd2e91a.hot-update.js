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

/***/ "./components/Section.tsx":
/*!********************************!*\
  !*** ./components/Section.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Section\": function() { return /* binding */ Section; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var anolis_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! anolis-ui */ \"./node_modules/anolis-ui/dist/index.es.js\");\n/* harmony import */ var _xstyled_emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @xstyled/emotion */ \"./node_modules/@xstyled/emotion/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar Section = function(param) {\n    var title = param.title, perex = param.perex, children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xstyled_emotion__WEBPACK_IMPORTED_MODULE_3__.x.div, {\n        mt: {\n            _: \"md\",\n            xl: \"xxl\"\n        },\n        mb: {\n            _: \"md\",\n            xl: \"xxl\"\n        },\n        pb: {\n            last: \"xxl\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(anolis_ui__WEBPACK_IMPORTED_MODULE_1__.Txt, {\n                t: \"h2\",\n                maxWidth: \"45rem\",\n                margin: \"xl auto md auto\",\n                textAlign: \"center\",\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\Section.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(anolis_ui__WEBPACK_IMPORTED_MODULE_1__.Txt, {\n                t: \"lead\",\n                maxWidth: \"45rem\",\n                margin: \"0 auto xl auto\",\n                textAlign: \"center\",\n                children: perex\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\Section.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Appio\\\\fun-test-react-18\\\\fun-test\\\\components\\\\Section.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_c = Section;\nvar _c;\n$RefreshReg$(_c, \"Section\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBZ0M7QUFDSztBQUNYO0FBUW5CLElBQU1HLE9BQU8sR0FBRyxnQkFBOEM7UUFBM0NDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsUUFBUSxTQUFSQSxRQUFRO0lBQzlDLHFCQUNFLDhEQUFDTCxtREFBSztRQUNKTyxFQUFFLEVBQUU7WUFBRUMsQ0FBQyxFQUFFLElBQUk7WUFBRUMsRUFBRSxFQUFFLEtBQUs7U0FBRTtRQUMxQkMsRUFBRSxFQUFFO1lBQUVGLENBQUMsRUFBRSxJQUFJO1lBQUVDLEVBQUUsRUFBRSxLQUFLO1NBQUU7UUFDMUJFLEVBQUUsRUFBRTtZQUFFQyxJQUFJLEVBQUUsS0FBSztTQUFFOzswQkFFbkIsOERBQUNiLDBDQUFHO2dCQUFDYyxDQUFDLEVBQUMsSUFBSTtnQkFBQ0MsUUFBUSxFQUFDLE9BQU87Z0JBQUNDLE1BQU0sRUFBQyxpQkFBaUI7Z0JBQUNDLFNBQVMsRUFBQyxRQUFROzBCQUNyRWIsS0FBSzs7Ozs7cUJBQ0Y7MEJBQ04sOERBQUNKLDBDQUFHO2dCQUFDYyxDQUFDLEVBQUMsTUFBTTtnQkFBQ0MsUUFBUSxFQUFDLE9BQU87Z0JBQUNDLE1BQU0sRUFBQyxnQkFBZ0I7Z0JBQUNDLFNBQVMsRUFBQyxRQUFROzBCQUN0RVosS0FBSzs7Ozs7cUJBQ0Y7WUFDTEMsUUFBUTs7Ozs7O2FBQ0gsQ0FDUjtDQUNILENBQUM7QUFoQldILEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9uLnRzeD9mYWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR4dCB9IGZyb20gXCJhbm9saXMtdWlcIjtcclxuaW1wb3J0IHsgeCB9IGZyb20gXCJAeHN0eWxlZC9lbW90aW9uXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgU2VjdGlvblByb3BzID0ge1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIHBlcmV4Pzogc3RyaW5nO1xyXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlIHwgUmVhY3QuUmVhY3ROb2RlW107XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9ICh7IHRpdGxlLCBwZXJleCwgY2hpbGRyZW4gfTogU2VjdGlvblByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx4LmRpdlxyXG4gICAgICBtdD17eyBfOiBcIm1kXCIsIHhsOiBcInh4bFwiIH19XHJcbiAgICAgIG1iPXt7IF86IFwibWRcIiwgeGw6IFwieHhsXCIgfX1cclxuICAgICAgcGI9e3sgbGFzdDogXCJ4eGxcIiB9fVxyXG4gICAgPlxyXG4gICAgICA8VHh0IHQ9XCJoMlwiIG1heFdpZHRoPVwiNDVyZW1cIiBtYXJnaW49XCJ4bCBhdXRvIG1kIGF1dG9cIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgIDwvVHh0PlxyXG4gICAgICA8VHh0IHQ9XCJsZWFkXCIgbWF4V2lkdGg9XCI0NXJlbVwiIG1hcmdpbj1cIjAgYXV0byB4bCBhdXRvXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAge3BlcmV4fVxyXG4gICAgICA8L1R4dD5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC94LmRpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiVHh0IiwieCIsIlJlYWN0IiwiU2VjdGlvbiIsInRpdGxlIiwicGVyZXgiLCJjaGlsZHJlbiIsImRpdiIsIm10IiwiXyIsInhsIiwibWIiLCJwYiIsImxhc3QiLCJ0IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Section.tsx\n");

/***/ })

});