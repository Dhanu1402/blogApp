"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/write/page",{

/***/ "(app-pages-browser)/./src/app/write/page.jsx":
/*!********************************!*\
  !*** ./src/app/write/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WritePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _writePage_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./writePage.module.css */ \"(app-pages-browser)/./src/app/write/writePage.module.css\");\n/* harmony import */ var _writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_writePage_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-quill/dist/quill.bubble.css */ \"(app-pages-browser)/./node_modules/react-quill/dist/quill.bubble.css\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill */ \"(app-pages-browser)/./node_modules/react-quill/lib/index.js\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction WritePage() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Title\",\n                className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().input)\n            }, void 0, false, {\n                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().select),\n                onChange: (e)=>setCatSlug(e.target.value),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"style\",\n                        children: \"style\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"fashion\",\n                        children: \"fashion\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"food\",\n                        children: \"food\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"culture\",\n                        children: \"culture\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"travel\",\n                        children: \"travel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"coding\",\n                        children: \"coding\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().editor),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                        onClick: ()=>setOpen(!open),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/plus.png\",\n                            alt: \"\",\n                            width: 16,\n                            height: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().add),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                id: \"image\",\n                                onChange: (e)=>setFile(e.target.files[0]),\n                                style: {\n                                    display: \"none\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().addButton),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"image\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/image.png\",\n                                        alt: \"\",\n                                        width: 16,\n                                        height: 16\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().addButton),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/external.png\",\n                                    alt: \"\",\n                                    width: 16,\n                                    height: 16\n                                }, void 0, false, {\n                                    fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().addButton),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/video.png\",\n                                    alt: \"\",\n                                    width: 16,\n                                    height: 16\n                                }, void 0, false, {\n                                    fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_quill__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().textArea),\n                        theme: \"bubble\",\n                        value: value,\n                        onChange: setValue,\n                        placeholder: \"Tell your story...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().publish),\n                children: \"Publish\"\n            }, void 0, false, {\n                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/app/write/page.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(WritePage, \"cc1N8eG9mT9l/mjnjR//3ZI92O4=\");\n_c = WritePage;\nvar _c;\n$RefreshReg$(_c, \"WritePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd3JpdGUvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNhO0FBQ1g7QUFDVTtBQUNOO0FBRXRCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFFakMsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBRW5DLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFXVCx3RUFBZ0I7OzBCQUM5Qiw4REFBQ1c7Z0JBQU1DLE1BQUs7Z0JBQU9DLGFBQVk7Z0JBQVFKLFdBQVdULG9FQUFZOzs7Ozs7MEJBQzlELDhEQUFDYztnQkFDQ0wsV0FBV1QscUVBQWE7Z0JBQ3hCZSxVQUFVLENBQUNDLElBQU1DLFdBQVdELEVBQUVFLE1BQU0sQ0FBQ1osS0FBSzs7a0NBRTFDLDhEQUFDYTt3QkFBT2IsT0FBTTtrQ0FBUTs7Ozs7O2tDQUN0Qiw4REFBQ2E7d0JBQU9iLE9BQU07a0NBQVU7Ozs7OztrQ0FDeEIsOERBQUNhO3dCQUFPYixPQUFNO2tDQUFPOzs7Ozs7a0NBQ3JCLDhEQUFDYTt3QkFBT2IsT0FBTTtrQ0FBVTs7Ozs7O2tDQUN4Qiw4REFBQ2E7d0JBQU9iLE9BQU07a0NBQVM7Ozs7OztrQ0FDdkIsOERBQUNhO3dCQUFPYixPQUFNO2tDQUFTOzs7Ozs7Ozs7Ozs7MEJBRXpCLDhEQUFDRTtnQkFBSUMsV0FBV1QscUVBQWE7O2tDQUMzQiw4REFBQ3FCO3dCQUFPWixXQUFXVCxxRUFBYTt3QkFBRXNCLFNBQVMsSUFBTWpCLFFBQVEsQ0FBQ0Q7a0NBQ3hELDRFQUFDTCxtREFBS0E7NEJBQUN3QixLQUFJOzRCQUFZQyxLQUFJOzRCQUFHQyxPQUFPOzRCQUFJQyxRQUFROzs7Ozs7Ozs7OztvQkFFbER0QixzQkFDQyw4REFBQ0k7d0JBQUlDLFdBQVdULGtFQUFVOzswQ0FDeEIsOERBQUNXO2dDQUNDQyxNQUFLO2dDQUNMZ0IsSUFBRztnQ0FDSGIsVUFBVSxDQUFDQyxJQUFNYSxRQUFRYixFQUFFRSxNQUFNLENBQUNZLEtBQUssQ0FBQyxFQUFFO2dDQUMxQ0MsT0FBTztvQ0FBRUMsU0FBUztnQ0FBTzs7Ozs7OzBDQUUzQiw4REFBQ1g7Z0NBQU9aLFdBQVdULHdFQUFnQjswQ0FDakMsNEVBQUNrQztvQ0FBTUMsU0FBUTs4Q0FDYiw0RUFBQ3BDLG1EQUFLQTt3Q0FBQ3dCLEtBQUk7d0NBQWFDLEtBQUk7d0NBQUdDLE9BQU87d0NBQUlDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR3RELDhEQUFDTDtnQ0FBT1osV0FBV1Qsd0VBQWdCOzBDQUNqQyw0RUFBQ0QsbURBQUtBO29DQUFDd0IsS0FBSTtvQ0FBZ0JDLEtBQUk7b0NBQUdDLE9BQU87b0NBQUlDLFFBQVE7Ozs7Ozs7Ozs7OzBDQUV2RCw4REFBQ0w7Z0NBQU9aLFdBQVdULHdFQUFnQjswQ0FDakMsNEVBQUNELG1EQUFLQTtvQ0FBQ3dCLEtBQUk7b0NBQWFDLEtBQUk7b0NBQUdDLE9BQU87b0NBQUlDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUl4RCw4REFBQ3hCLG9EQUFVQTt3QkFDVE8sV0FBV1QsdUVBQWU7d0JBQzFCcUMsT0FBTTt3QkFDTi9CLE9BQU9BO3dCQUNQUyxVQUFVUjt3QkFDVk0sYUFBWTs7Ozs7Ozs7Ozs7OzBCQUdoQiw4REFBQ1E7Z0JBQU9aLFdBQVdULHNFQUFjOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFHekM7R0F2RHdCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3dyaXRlL3BhZ2UuanN4PzdlODYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vd3JpdGVQYWdlLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuYnViYmxlLmNzcyc7XG5pbXBvcnQgUmVhY3RRdWlsbCBmcm9tICdyZWFjdC1xdWlsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdyaXRlUGFnZSgpIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSAvPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3R9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2F0U2x1ZyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJzdHlsZVwiPnN0eWxlPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYXNoaW9uXCI+ZmFzaGlvbjwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9vZFwiPmZvb2Q8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImN1bHR1cmVcIj5jdWx0dXJlPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0cmF2ZWxcIj50cmF2ZWw8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNvZGluZ1wiPmNvZGluZzwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRvcn0+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9wbHVzLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHtvcGVuICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBpZD1cImltYWdlXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaWxlKGUudGFyZ2V0LmZpbGVzWzBdKX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZS5wbmdcIiBhbHQ9XCJcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnV0dG9ufT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9leHRlcm5hbC5wbmdcIiBhbHQ9XCJcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnV0dG9ufT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92aWRlby5wbmdcIiBhbHQ9XCJcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPFJlYWN0UXVpbGxcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZXh0QXJlYX1cbiAgICAgICAgICB0aGVtZT1cImJ1YmJsZVwiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGwgeW91ciBzdG9yeS4uLlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMucHVibGlzaH0+UHVibGlzaDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJSZWFjdFF1aWxsIiwiV3JpdGVQYWdlIiwib3BlbiIsInNldE9wZW4iLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJvbkNoYW5nZSIsImUiLCJzZXRDYXRTbHVnIiwidGFyZ2V0Iiwib3B0aW9uIiwiZWRpdG9yIiwiYnV0dG9uIiwib25DbGljayIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkIiwiaWQiLCJzZXRGaWxlIiwiZmlsZXMiLCJzdHlsZSIsImRpc3BsYXkiLCJhZGRCdXR0b24iLCJsYWJlbCIsImh0bWxGb3IiLCJ0ZXh0QXJlYSIsInRoZW1lIiwicHVibGlzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/write/page.jsx\n"));

/***/ })

});