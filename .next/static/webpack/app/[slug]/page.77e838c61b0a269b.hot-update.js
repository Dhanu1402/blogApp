"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[slug]/page",{

/***/ "(app-pages-browser)/./src/components/comments/Comments.jsx":
/*!**********************************************!*\
  !*** ./src/components/comments/Comments.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Comments; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.module.css */ \"(app-pages-browser)/./src/components/comments/comments.module.css\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_comments_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction Comments() {\n    var _data;\n    const status = \"authenticated\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                children: \"Comments\"\n            }, void 0, false, {\n                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/components/comments/Comments.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            status === \"authenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().write),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        placeholder: \"write a comment...\",\n                        className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().input)\n                    }, void 0, false, {\n                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/components/comments/Comments.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/components/comments/Comments.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/components/comments/Comments.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/login\",\n                children: \"Login to write a comment\"\n            }, void 0, false, {\n                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/components/comments/Comments.jsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().comments),\n                children: isLoading ? \"loading\" : (_data = data) === null || _data === void 0 ? void 0 : _data.map((item)=>{\n                    var _item_user, _item;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().comment),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().user),\n                                children: [\n                                    ((_item = item) === null || _item === void 0 ? void 0 : (_item_user = _item.user) === null || _item_user === void 0 ? void 0 : _item_user.image) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: item.user.image,\n                                        alt: \"\",\n                                        width: 50,\n                                        height: 50,\n                                        className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().image)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/components/comments/Comments.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().userInfo),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().username),\n                                                children: item.user.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/components/comments/Comments.jsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().date),\n                                                children: item.createdAt\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/components/comments/Comments.jsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/components/comments/Comments.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/components/comments/Comments.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n                                children: item.desc\n                            }, void 0, false, {\n                                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/components/comments/Comments.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, item._id, true, {\n                        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/components/comments/Comments.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/components/comments/Comments.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dhanukesharwani/Desktop/blogApp/src/components/comments/Comments.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Comments;\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1lbnRzL0NvbW1lbnRzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNkI7QUFDYztBQUNaO0FBRWhCLFNBQVNHO1FBaUJaQztJQWhCVixNQUFNQyxTQUFTO0lBRWYscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdOLHVFQUFnQjs7MEJBQzlCLDhEQUFDUTtnQkFBR0YsV0FBV04sbUVBQVk7MEJBQUU7Ozs7OztZQUM1QkksV0FBVyxnQ0FDViw4REFBQ0M7Z0JBQUlDLFdBQVdOLG1FQUFZOztrQ0FDMUIsOERBQUNXO3dCQUFTQyxhQUFZO3dCQUFxQk4sV0FBV04sbUVBQVk7Ozs7OztrQ0FDbEUsOERBQUNjO3dCQUFPUixXQUFXTixvRUFBYTtrQ0FBRTs7Ozs7Ozs7Ozs7cUNBR3BDLDhEQUFDRCxrREFBSUE7Z0JBQUNnQixNQUFLOzBCQUFTOzs7Ozs7MEJBRXRCLDhEQUFDVjtnQkFBSUMsV0FBV04sc0VBQWU7MEJBQzVCaUIsWUFDRyxhQUNBZCxRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1lLEdBQUcsQ0FBQyxDQUFDQzt3QkFHSkEsWUFBQUE7eUNBRkwsOERBQUNkO3dCQUFJQyxXQUFXTixxRUFBYzs7MENBQzVCLDhEQUFDSztnQ0FBSUMsV0FBV04sa0VBQVc7O29DQUN4Qm1CLEVBQUFBLFFBQUFBLGtCQUFBQSw2QkFBQUEsYUFBQUEsTUFBTUUsSUFBSSxjQUFWRixpQ0FBQUEsV0FBWUcsS0FBSyxtQkFDaEIsOERBQUNyQixtREFBS0E7d0NBQ0pzQixLQUFLSixLQUFLRSxJQUFJLENBQUNDLEtBQUs7d0NBQ3BCRSxLQUFJO3dDQUNKQyxPQUFPO3dDQUNQQyxRQUFRO3dDQUNScEIsV0FBV04sbUVBQVk7Ozs7OztrREFHM0IsOERBQUNLO3dDQUFJQyxXQUFXTixzRUFBZTs7MERBQzdCLDhEQUFDNEI7Z0RBQUt0QixXQUFXTixzRUFBZTswREFBR21CLEtBQUtFLElBQUksQ0FBQ1MsSUFBSTs7Ozs7OzBEQUNqRCw4REFBQ0Y7Z0RBQUt0QixXQUFXTixrRUFBVzswREFBR21CLEtBQUthLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHakQsOERBQUNDO2dDQUFFM0IsV0FBV04sa0VBQVc7MENBQUdtQixLQUFLZSxJQUFJOzs7Ozs7O3VCQWhCRmYsS0FBS2dCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0IzRDtLQXhDd0JqQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tZW50cy9Db21tZW50cy5qc3g/MjM0OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29tbWVudHMubW9kdWxlLmNzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzKCkge1xuICBjb25zdCBzdGF0dXMgPSAnYXV0aGVudGljYXRlZCc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkNvbW1lbnRzPC9oMT5cbiAgICAgIHtzdGF0dXMgPT09ICdhdXRoZW50aWNhdGVkJyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cml0ZX0+XG4gICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwid3JpdGUgYSBjb21tZW50Li4uXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+TG9naW4gdG8gd3JpdGUgYSBjb21tZW50PC9MaW5rPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHN9PlxuICAgICAgICB7aXNMb2FkaW5nXG4gICAgICAgICAgPyAnbG9hZGluZydcbiAgICAgICAgICA6IGRhdGE/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnR9IGtleT17aXRlbS5faWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcn0+XG4gICAgICAgICAgICAgICAgICB7aXRlbT8udXNlcj8uaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0udXNlci5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckluZm99PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy51c2VybmFtZX0+e2l0ZW0udXNlci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+e2l0ZW0uY3JlYXRlZEF0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2N9PntpdGVtLmRlc2N9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsIkltYWdlIiwiQ29tbWVudHMiLCJkYXRhIiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJ0aXRsZSIsIndyaXRlIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsImlucHV0IiwiYnV0dG9uIiwiaHJlZiIsImNvbW1lbnRzIiwiaXNMb2FkaW5nIiwibWFwIiwiaXRlbSIsImNvbW1lbnQiLCJ1c2VyIiwiaW1hZ2UiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVzZXJJbmZvIiwic3BhbiIsInVzZXJuYW1lIiwibmFtZSIsImRhdGUiLCJjcmVhdGVkQXQiLCJwIiwiZGVzYyIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/comments/Comments.jsx\n"));

/***/ })

});