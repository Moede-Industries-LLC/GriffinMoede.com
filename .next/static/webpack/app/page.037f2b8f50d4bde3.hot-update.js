"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/lightswitch/LightSwitch.tsx":
/*!****************************************************!*\
  !*** ./src/components/lightswitch/LightSwitch.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Screw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Screw */ \"(app-pages-browser)/./src/components/lightswitch/Screw.tsx\");\n/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toggle */ \"(app-pages-browser)/./src/components/lightswitch/Toggle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst LightSwitch = ()=>{\n    _s();\n    // const { areLightsOn, changeLights } = useLights();\n    const [areLightsOn, changeLights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"light-switch\",\n        className: \"flex flex-col items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"plate\",\n            className: \"flex flex-col items-center justify-center\",\n            onClick: ()=>{\n                changeLights(!areLightsOn);\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Screw__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    position: \"top\"\n                }, void 0, false, {\n                    fileName: \"/Users/tomdjergian/Documents/MoedeSite/Moede-Industries-LLC/src/components/lightswitch/LightSwitch.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"switch-box\",\n                    className: \"flex flex-col items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"toggle-box\",\n                        children: areLightsOn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    isOn: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/tomdjergian/Documents/MoedeSite/Moede-Industries-LLC/src/components/lightswitch/LightSwitch.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"light-switch-label\",\n                                    children: \"ON\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tomdjergian/Documents/MoedeSite/Moede-Industries-LLC/src/components/lightswitch/LightSwitch.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"light-switch-label\",\n                                    children: \"OFF\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tomdjergian/Documents/MoedeSite/Moede-Industries-LLC/src/components/lightswitch/LightSwitch.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    isOn: false\n                                }, void 0, false, {\n                                    fileName: \"/Users/tomdjergian/Documents/MoedeSite/Moede-Industries-LLC/src/components/lightswitch/LightSwitch.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"/Users/tomdjergian/Documents/MoedeSite/Moede-Industries-LLC/src/components/lightswitch/LightSwitch.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/tomdjergian/Documents/MoedeSite/Moede-Industries-LLC/src/components/lightswitch/LightSwitch.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Screw__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    position: \"bottom\"\n                }, void 0, false, {\n                    fileName: \"/Users/tomdjergian/Documents/MoedeSite/Moede-Industries-LLC/src/components/lightswitch/LightSwitch.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"overlay\",\n                    className: \"bg-black \".concat(areLightsOn ? \"opacity-0\" : \"opacity-95\")\n                }, void 0, false, {\n                    fileName: \"/Users/tomdjergian/Documents/MoedeSite/Moede-Industries-LLC/src/components/lightswitch/LightSwitch.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tomdjergian/Documents/MoedeSite/Moede-Industries-LLC/src/components/lightswitch/LightSwitch.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tomdjergian/Documents/MoedeSite/Moede-Industries-LLC/src/components/lightswitch/LightSwitch.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LightSwitch, \"GqIRI+ATM+OfI6jM7qk4NbRIj4g=\");\n_c = LightSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LightSwitch);\nvar _c;\n$RefreshReg$(_c, \"LightSwitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xpZ2h0c3dpdGNoL0xpZ2h0U3dpdGNoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMrRDtBQUNuQztBQUNFO0FBRzlCLE1BQU1HLGNBQWtCOztJQUN0QixxREFBcUQ7SUFDckQsTUFBTSxDQUFDQyxhQUFhQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFVO0lBRXRELHFCQUNFLDhEQUFDTTtRQUNDQyxJQUFHO1FBQ0hDLFdBQVU7a0JBRVYsNEVBQUNGO1lBQ0NDLElBQUc7WUFDSEMsV0FBVTtZQUNWQyxTQUFTO2dCQUNQSixhQUFhLENBQUNEO1lBQ2hCOzs4QkFFQSw4REFBQ0gsOENBQUtBO29CQUFDUyxVQUFTOzs7Ozs7OEJBQ2hCLDhEQUFDSjtvQkFDQ0MsSUFBRztvQkFDSEMsV0FBVTs4QkFFViw0RUFBQ0Y7d0JBQUlDLElBQUc7a0NBQ0xILDRCQUNDOzs4Q0FDRSw4REFBQ0YsK0NBQU1BO29DQUFDUyxNQUFNOzs7Ozs7OENBQ2QsOERBQUNMO29DQUFJQyxJQUFHOzhDQUFxQjs7Ozs7Ozt5REFHL0I7OzhDQUNFLDhEQUFDRDtvQ0FBSUMsSUFBRzs4Q0FBcUI7Ozs7Ozs4Q0FDN0IsOERBQUNMLCtDQUFNQTtvQ0FBQ1MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUt0Qiw4REFBQ1YsOENBQUtBO29CQUFDUyxVQUFTOzs7Ozs7OEJBQ2hCLDhEQUFDSjtvQkFDQ0MsSUFBRztvQkFDSEMsV0FBVyxZQUFxRCxPQUF6Q0osY0FBYyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs3RDtHQTNDTUQ7S0FBQUE7QUE2Q04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlnaHRzd2l0Y2gvTGlnaHRTd2l0Y2gudHN4PzllZWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBGQywgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNjcmV3IGZyb20gXCIuL1NjcmV3XCI7XG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuL1RvZ2dsZVwiO1xuaW1wb3J0IHsgdXNlTGlnaHRzIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL0xpZ2h0c0NvbnRleHRcIjtcblxuY29uc3QgTGlnaHRTd2l0Y2g6IEZDID0gKCk6IFJlYWN0RWxlbWVudCA9PiB7XG4gIC8vIGNvbnN0IHsgYXJlTGlnaHRzT24sIGNoYW5nZUxpZ2h0cyB9ID0gdXNlTGlnaHRzKCk7XG4gIGNvbnN0IFthcmVMaWdodHNPbiwgY2hhbmdlTGlnaHRzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPVwibGlnaHQtc3dpdGNoXCJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPVwicGxhdGVcIlxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBjaGFuZ2VMaWdodHMoIWFyZUxpZ2h0c09uKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFNjcmV3IHBvc2l0aW9uPVwidG9wXCIgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPVwic3dpdGNoLWJveFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBpZD1cInRvZ2dsZS1ib3hcIj5cbiAgICAgICAgICAgIHthcmVMaWdodHNPbiA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VG9nZ2xlIGlzT249e3RydWV9PjwvVG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsaWdodC1zd2l0Y2gtbGFiZWxcIj5PTjwvZGl2PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxpZ2h0LXN3aXRjaC1sYWJlbFwiPk9GRjwvZGl2PlxuICAgICAgICAgICAgICAgIDxUb2dnbGUgaXNPbj17ZmFsc2V9PjwvVG9nZ2xlPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2NyZXcgcG9zaXRpb249XCJib3R0b21cIiAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJvdmVybGF5XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2BiZy1ibGFjayAke2FyZUxpZ2h0c09uID8gXCJvcGFjaXR5LTBcIiA6IFwib3BhY2l0eS05NVwifWB9XG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlnaHRTd2l0Y2g7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTY3JldyIsIlRvZ2dsZSIsIkxpZ2h0U3dpdGNoIiwiYXJlTGlnaHRzT24iLCJjaGFuZ2VMaWdodHMiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJwb3NpdGlvbiIsImlzT24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/lightswitch/LightSwitch.tsx\n"));

/***/ })

});