"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forecast/[City]",{

/***/ "./pages/forecast/[City].tsx":
/*!***********************************!*\
  !*** ./pages/forecast/[City].tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/forecast/City.module.css */ \"./pages/forecast/City.module.css\");\n/* harmony import */ var _pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_GetDate_GetDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/GetDate/GetDate */ \"./components/GetDate/GetDate.tsx\");\n/* harmony import */ var _components_MoreInfo_MoreInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/MoreInfo/MoreInfo */ \"./components/MoreInfo/MoreInfo.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst City = ()=>{\n    var _data_weather, _data_weather_, _data_weather1, _data_weather_1, _data_weather2, _data_weather_2;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const data = router.query.data ? JSON.parse(router.query.data) : null;\n    const backgrounds = {\n        Clear: \"#F0A995\",\n        Rain: \"#1A3557\",\n        Clouds: \"#251D57\",\n        Snow: \"#145370\",\n        Thunderstorm: \"#251D57\",\n        default: \"#161617\"\n    };\n    const backgroundIcons = {\n        Clear: \"/sun.svg\",\n        Rain: \"/rain.svg\",\n        Clouds: \"/cloud.svg\",\n        Snow: \"/snow.svg\",\n        Thunderstorm: \"/thunder.svg\",\n        default: \"/dusty.svg\"\n    };\n    const backgroundUrl = (data === null || data === void 0 ? void 0 : (_data_weather = data.weather) === null || _data_weather === void 0 ? void 0 : (_data_weather_ = _data_weather[0]) === null || _data_weather_ === void 0 ? void 0 : _data_weather_.main) ? backgrounds[data.weather[0].main] ? backgrounds[data.weather[0].main] : backgrounds.default : backgrounds.default;\n    const backgroundIconUrl = (data === null || data === void 0 ? void 0 : (_data_weather1 = data.weather) === null || _data_weather1 === void 0 ? void 0 : (_data_weather_1 = _data_weather1[0]) === null || _data_weather_1 === void 0 ? void 0 : _data_weather_1.main) ? backgroundIcons[data.weather[0].main] ? backgroundIcons[data.weather[0].main] : backgroundIcons.default : backgroundIcons.default;\n    console.log(data === null || data === void 0 ? void 0 : (_data_weather2 = data.weather) === null || _data_weather2 === void 0 ? void 0 : (_data_weather_2 = _data_weather2[0]) === null || _data_weather_2 === void 0 ? void 0 : _data_weather_2.main);\n    if (!data || !data.weather) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Sorry, there was an error loading the weather data.\"\n        }, void 0, false, {\n            fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n            lineNumber: 48,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        style: {\n            backgroundColor: \"\".concat(backgroundUrl !== null && backgroundUrl !== void 0 ? backgroundUrl : \"#161617\")\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GetDate_GetDate__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().nameNIcon),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: backgroundIconUrl !== null && backgroundIconUrl !== void 0 ? backgroundIconUrl : \"/dusty.svg\",\n                            width: 330,\n                            height: 250,\n                            alt: \"cloud icon\",\n                            priority: true,\n                            style: {\n                                top: \"15%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().cityName),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" \",\n                                    data.name,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().infoCont),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().temCont),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().temp),\n                                        children: [\n                                            \" \",\n                                            data.main.temp,\n                                            \" \\xb0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().generalCont),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \" \",\n                                    data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" \",\n                                    \"H: \",\n                                    data.main.temp_max,\n                                    \"\\xb0 L: \",\n                                    data.main.temp_min,\n                                    \"\\xb0\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MoreInfo_MoreInfo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(City, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = City;\n/* harmony default export */ __webpack_exports__[\"default\"] = (City);\nvar _c;\n$RefreshReg$(_c, \"City\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V3pCLDZFQUFXOzs0Q0FBRTs0Q0FBRUssS0FBS2UsSUFBSSxDQUFDc0IsSUFBSTs0Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3ZELDhEQUFDbEI7O2tDQUNDLDhEQUFDQTt3QkFBSUMsV0FBV3pCLG9GQUFrQjs7MENBQ2hDLDhEQUFDeUM7O29DQUNFO29DQUNBcEMsS0FBS2MsT0FBTyxDQUFDLEVBQUUsQ0FBQ3lCLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUdDLFdBQVcsS0FDaER6QyxLQUFLYyxPQUFPLENBQUMsRUFBRSxDQUFDeUIsV0FBVyxDQUFDRyxLQUFLLENBQUM7b0NBQUk7Ozs7Ozs7MENBRTFDLDhEQUFDQzs7b0NBQ0U7b0NBQUk7b0NBQ0QzQyxLQUFLZSxJQUFJLENBQUM2QixRQUFRO29DQUFDO29DQUFNNUMsS0FBS2UsSUFBSSxDQUFDOEIsUUFBUTtvQ0FBQztvQ0FBRTs7Ozs7Ozs7Ozs7OztrQ0FHdEQsOERBQUMvQyxxRUFBUUE7d0JBQUNFLE1BQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEI7R0F4Rk1EOztRQUNXTCxrREFBU0E7OztLQURwQks7QUEwRk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZWNhc3QvW0NpdHldLnRzeD8yMzk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3BhZ2VzL2ZvcmVjYXN0L0NpdHkubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBXZWF0aGVyRGF0YSB9IGZyb20gXCJAL3R5cGVzL1dlYXRoZXJEYXRhXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgR2V0RGF0ZSBmcm9tIFwiQC9jb21wb25lbnRzL0dldERhdGUvR2V0RGF0ZVwiO1xyXG5pbXBvcnQgTW9yZUluZm8gZnJvbSBcIkAvY29tcG9uZW50cy9Nb3JlSW5mby9Nb3JlSW5mb1wiO1xyXG5pbXBvcnQgeyBCYWNrZ3JvdW5kcyB9IGZyb20gXCJAL3R5cGVzL1dlYXRoZXJEYXRhXCI7XHJcblxyXG5jb25zdCBDaXR5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRhdGE6IFdlYXRoZXJEYXRhID0gcm91dGVyLnF1ZXJ5LmRhdGFcclxuICAgID8gSlNPTi5wYXJzZShyb3V0ZXIucXVlcnkuZGF0YSBhcyBzdHJpbmcpXHJcbiAgICA6IG51bGw7XHJcblxyXG4gIGNvbnN0IGJhY2tncm91bmRzOiBCYWNrZ3JvdW5kcyA9IHtcclxuICAgIENsZWFyOiBcIiNGMEE5OTVcIixcclxuICAgIFJhaW46IFwiIzFBMzU1N1wiLFxyXG4gICAgQ2xvdWRzOiBcIiMyNTFENTdcIixcclxuICAgIFNub3c6IFwiIzE0NTM3MFwiLFxyXG4gICAgVGh1bmRlcnN0b3JtOiBcIiMyNTFENTdcIixcclxuICAgIGRlZmF1bHQ6IFwiIzE2MTYxN1wiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJhY2tncm91bmRJY29uczogQmFja2dyb3VuZHMgPSB7XHJcbiAgICBDbGVhcjogXCIvc3VuLnN2Z1wiLFxyXG4gICAgUmFpbjogXCIvcmFpbi5zdmdcIixcclxuICAgIENsb3VkczogXCIvY2xvdWQuc3ZnXCIsXHJcbiAgICBTbm93OiBcIi9zbm93LnN2Z1wiLFxyXG4gICAgVGh1bmRlcnN0b3JtOiBcIi90aHVuZGVyLnN2Z1wiLFxyXG4gICAgZGVmYXVsdDogXCIvZHVzdHkuc3ZnXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYmFja2dyb3VuZFVybCA9IGRhdGE/LndlYXRoZXI/LlswXT8ubWFpblxyXG4gICAgPyBiYWNrZ3JvdW5kc1tkYXRhLndlYXRoZXJbMF0ubWFpbl1cclxuICAgICAgPyBiYWNrZ3JvdW5kc1tkYXRhLndlYXRoZXJbMF0ubWFpbl1cclxuICAgICAgOiBiYWNrZ3JvdW5kcy5kZWZhdWx0XHJcbiAgICA6IGJhY2tncm91bmRzLmRlZmF1bHQ7XHJcblxyXG4gIGNvbnN0IGJhY2tncm91bmRJY29uVXJsID0gZGF0YT8ud2VhdGhlcj8uWzBdPy5tYWluXHJcbiAgICA/IGJhY2tncm91bmRJY29uc1tkYXRhLndlYXRoZXJbMF0ubWFpbl1cclxuICAgICAgPyBiYWNrZ3JvdW5kSWNvbnNbZGF0YS53ZWF0aGVyWzBdLm1haW5dXHJcbiAgICAgIDogYmFja2dyb3VuZEljb25zLmRlZmF1bHRcclxuICAgIDogYmFja2dyb3VuZEljb25zLmRlZmF1bHQ7XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGE/LndlYXRoZXI/LlswXT8ubWFpbik7XHJcblxyXG4gIGlmICghZGF0YSB8fCAhZGF0YS53ZWF0aGVyKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Tb3JyeSwgdGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIHdlYXRoZXIgZGF0YS48L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtiYWNrZ3JvdW5kVXJsID8/IFwiIzE2MTYxN1wifWAsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxHZXREYXRlIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZU5JY29ufT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17YmFja2dyb3VuZEljb25VcmwgPz8gXCIvZHVzdHkuc3ZnXCJ9XHJcbiAgICAgICAgICAgIHdpZHRoPXszMzB9XHJcbiAgICAgICAgICAgIGhlaWdodD17MjUwfVxyXG4gICAgICAgICAgICBhbHQ9XCJjbG91ZCBpY29uXCJcclxuICAgICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB0b3A6IFwiMTUlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2l0eU5hbWV9PlxyXG4gICAgICAgICAgPGgxPiB7ZGF0YS5uYW1lfSA8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvQ29udH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVtQ29udH0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGVtcH0+IHtkYXRhLm1haW4udGVtcH0gwrA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2VuZXJhbENvbnR9PlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAge2RhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXHJcbiAgICAgICAgICAgICAgZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLnNsaWNlKDEpfXtcIiBcIn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIEg6IHtkYXRhLm1haW4udGVtcF9tYXh9wrAgTDoge2RhdGEubWFpbi50ZW1wX21pbn3CsHtcIiBcIn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TW9yZUluZm8gZGF0YT17ZGF0YX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2l0eTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInN0eWxlcyIsIkltYWdlIiwiR2V0RGF0ZSIsIk1vcmVJbmZvIiwiQ2l0eSIsImRhdGEiLCJyb3V0ZXIiLCJxdWVyeSIsIkpTT04iLCJwYXJzZSIsImJhY2tncm91bmRzIiwiQ2xlYXIiLCJSYWluIiwiQ2xvdWRzIiwiU25vdyIsIlRodW5kZXJzdG9ybSIsImRlZmF1bHQiLCJiYWNrZ3JvdW5kSWNvbnMiLCJiYWNrZ3JvdW5kVXJsIiwid2VhdGhlciIsIm1haW4iLCJiYWNrZ3JvdW5kSWNvblVybCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm5hbWVOSWNvbiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicHJpb3JpdHkiLCJ0b3AiLCJjaXR5TmFtZSIsImgxIiwibmFtZSIsImluZm9Db250IiwidGVtQ29udCIsInNwYW4iLCJ0ZW1wIiwiZ2VuZXJhbENvbnQiLCJkZXNjcmlwdGlvbiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJwIiwidGVtcF9tYXgiLCJ0ZW1wX21pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/forecast/[City].tsx\n"));

/***/ })

});