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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/forecast/City.module.css */ \"./pages/forecast/City.module.css\");\n/* harmony import */ var _pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_GetDate_GetDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/GetDate/GetDate */ \"./components/GetDate/GetDate.tsx\");\n/* harmony import */ var _components_MoreInfo_MoreInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/MoreInfo/MoreInfo */ \"./components/MoreInfo/MoreInfo.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst City = ()=>{\n    var _data_weather, _data_weather_, _data_weather1, _data_weather_1, _data_weather2, _data_weather_2;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const data = router.query.data ? JSON.parse(router.query.data) : null;\n    const backgrounds = {\n        Clear: \"#F0A995\",\n        Rain: \"#1A3557\",\n        Clouds: \"#251D57\",\n        Snow: \"#145370\",\n        Thunderstorm: \"#251D57\",\n        default: \"#161617\"\n    };\n    const backgroundIcons = {\n        Clear: \"/sun.svg\",\n        Rain: \"/rain.svg\",\n        Clouds: \"/cloud.svg\",\n        Snow: \"/snow.svg\",\n        Thunderstorm: \"/thunder.svg\",\n        default: \"/dusty.svg\"\n    };\n    const backgroundUrl = (data === null || data === void 0 ? void 0 : (_data_weather = data.weather) === null || _data_weather === void 0 ? void 0 : (_data_weather_ = _data_weather[0]) === null || _data_weather_ === void 0 ? void 0 : _data_weather_.main) ? backgrounds[data.weather[0].main] : backgrounds.default;\n    const backgroundIconUrl = (data === null || data === void 0 ? void 0 : (_data_weather1 = data.weather) === null || _data_weather1 === void 0 ? void 0 : (_data_weather_1 = _data_weather1[0]) === null || _data_weather_1 === void 0 ? void 0 : _data_weather_1.main) ? backgroundIcons[data.weather[0].main] ? backgroundIcons[data.weather[0].main] : backgroundIcons[d] : backgroundIcons.default;\n    console.log(data === null || data === void 0 ? void 0 : (_data_weather2 = data.weather) === null || _data_weather2 === void 0 ? void 0 : (_data_weather_2 = _data_weather2[0]) === null || _data_weather_2 === void 0 ? void 0 : _data_weather_2.main);\n    if (!data || !data.weather) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Sorry, there was an error loading the weather data.\"\n        }, void 0, false, {\n            fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n            lineNumber: 46,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        style: {\n            backgroundColor: \"\".concat(backgroundUrl !== null && backgroundUrl !== void 0 ? backgroundUrl : \"#161617\")\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GetDate_GetDate__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().nameNIcon),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: backgroundIconUrl !== null && backgroundIconUrl !== void 0 ? backgroundIconUrl : \"/dusty.svg\",\n                            width: 330,\n                            height: 250,\n                            alt: \"cloud icon\",\n                            priority: true,\n                            style: {\n                                top: \"15%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().cityName),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" \",\n                                    data.name,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().infoCont),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().temCont),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().temp),\n                                        children: [\n                                            \" \",\n                                            data.main.temp,\n                                            \" \\xb0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().generalCont),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \" \",\n                                    data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" \",\n                                    \"H: \",\n                                    data.main.temp_max,\n                                    \"\\xb0 L: \",\n                                    data.main.temp_min,\n                                    \"\\xb0\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MoreInfo_MoreInfo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(City, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = City;\n/* harmony default export */ __webpack_exports__[\"default\"] = (City);\nvar _c;\n$RefreshReg$(_c, \"City\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OzswQkFLdkQsOERBQUNsQjs7a0NBQ0MsOERBQUNBO3dCQUFJQyxXQUFXMUIsb0ZBQWtCOzswQ0FDaEMsOERBQUMwQzs7b0NBQ0U7b0NBQ0FyQyxLQUFLYyxPQUFPLENBQUMsRUFBRSxDQUFDMEIsV0FBVyxDQUFDQyxNQUFNLENBQUMsR0FBR0MsV0FBVyxLQUNoRDFDLEtBQUtjLE9BQU8sQ0FBQyxFQUFFLENBQUMwQixXQUFXLENBQUNHLEtBQUssQ0FBQztvQ0FBSTs7Ozs7OzswQ0FFMUMsOERBQUNDOztvQ0FDRTtvQ0FBSTtvQ0FDRDVDLEtBQUtlLElBQUksQ0FBQzhCLFFBQVE7b0NBQUM7b0NBQU03QyxLQUFLZSxJQUFJLENBQUMrQixRQUFRO29DQUFDO29DQUFFOzs7Ozs7Ozs7Ozs7O2tDQUd0RCw4REFBQ2hELHFFQUFRQTt3QkFBQ0UsTUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QjtHQXRGTUQ7O1FBQ1dMLGtEQUFTQTs7O0tBRHBCSztBQXdGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3JlY2FzdC9bQ2l0eV0udHN4PzIzOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvcGFnZXMvZm9yZWNhc3QvQ2l0eS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IFdlYXRoZXJEYXRhIH0gZnJvbSBcIkAvdHlwZXMvV2VhdGhlckRhdGFcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBHZXREYXRlIGZyb20gXCJAL2NvbXBvbmVudHMvR2V0RGF0ZS9HZXREYXRlXCI7XHJcbmltcG9ydCBNb3JlSW5mbyBmcm9tIFwiQC9jb21wb25lbnRzL01vcmVJbmZvL01vcmVJbmZvXCI7XHJcbmltcG9ydCB7IEJhY2tncm91bmRzIH0gZnJvbSBcIkAvdHlwZXMvV2VhdGhlckRhdGFcIjtcclxuXHJcbmNvbnN0IENpdHkgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGF0YTogV2VhdGhlckRhdGEgPSByb3V0ZXIucXVlcnkuZGF0YVxyXG4gICAgPyBKU09OLnBhcnNlKHJvdXRlci5xdWVyeS5kYXRhIGFzIHN0cmluZylcclxuICAgIDogbnVsbDtcclxuXHJcbiAgY29uc3QgYmFja2dyb3VuZHM6IEJhY2tncm91bmRzID0ge1xyXG4gICAgQ2xlYXI6IFwiI0YwQTk5NVwiLFxyXG4gICAgUmFpbjogXCIjMUEzNTU3XCIsXHJcbiAgICBDbG91ZHM6IFwiIzI1MUQ1N1wiLFxyXG4gICAgU25vdzogXCIjMTQ1MzcwXCIsXHJcbiAgICBUaHVuZGVyc3Rvcm06IFwiIzI1MUQ1N1wiLFxyXG4gICAgZGVmYXVsdDogXCIjMTYxNjE3XCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYmFja2dyb3VuZEljb25zOiBCYWNrZ3JvdW5kcyA9IHtcclxuICAgIENsZWFyOiBcIi9zdW4uc3ZnXCIsXHJcbiAgICBSYWluOiBcIi9yYWluLnN2Z1wiLFxyXG4gICAgQ2xvdWRzOiBcIi9jbG91ZC5zdmdcIixcclxuICAgIFNub3c6IFwiL3Nub3cuc3ZnXCIsXHJcbiAgICBUaHVuZGVyc3Rvcm06IFwiL3RodW5kZXIuc3ZnXCIsXHJcbiAgICBkZWZhdWx0OiBcIi9kdXN0eS5zdmdcIixcclxuICB9O1xyXG5cclxuICBjb25zdCBiYWNrZ3JvdW5kVXJsID0gZGF0YT8ud2VhdGhlcj8uWzBdPy5tYWluXHJcbiAgICA/IGJhY2tncm91bmRzW2RhdGEud2VhdGhlclswXS5tYWluXVxyXG4gICAgOiBiYWNrZ3JvdW5kcy5kZWZhdWx0O1xyXG5cclxuICBjb25zdCBiYWNrZ3JvdW5kSWNvblVybCA9IGRhdGE/LndlYXRoZXI/LlswXT8ubWFpblxyXG4gICAgPyBiYWNrZ3JvdW5kSWNvbnNbZGF0YS53ZWF0aGVyWzBdLm1haW5dXHJcbiAgICAgID8gYmFja2dyb3VuZEljb25zW2RhdGEud2VhdGhlclswXS5tYWluXVxyXG4gICAgICA6IGJhY2tncm91bmRJY29uc1tkXVxyXG4gICAgOiBiYWNrZ3JvdW5kSWNvbnMuZGVmYXVsdDtcclxuXHJcbiAgY29uc29sZS5sb2coZGF0YT8ud2VhdGhlcj8uWzBdPy5tYWluKTtcclxuXHJcbiAgaWYgKCFkYXRhIHx8ICFkYXRhLndlYXRoZXIpIHtcclxuICAgIHJldHVybiA8ZGl2PlNvcnJ5LCB0aGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB0aGUgd2VhdGhlciBkYXRhLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke2JhY2tncm91bmRVcmwgPz8gXCIjMTYxNjE3XCJ9YCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEdldERhdGUgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lTkljb259PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtiYWNrZ3JvdW5kSWNvblVybCA/PyBcIi9kdXN0eS5zdmdcIn1cclxuICAgICAgICAgICAgd2lkdGg9ezMzMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgIGFsdD1cImNsb3VkIGljb25cIlxyXG4gICAgICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRvcDogXCIxNSVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaXR5TmFtZX0+XHJcbiAgICAgICAgICA8aDE+IHtkYXRhLm5hbWV9IDwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9Db250fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZW1Db250fT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50ZW1wfT4ge2RhdGEubWFpbi50ZW1wfSDCsDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZW5lcmFsQ29udH0+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICB7ZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcclxuICAgICAgICAgICAgICBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uc2xpY2UoMSl9e1wiIFwifVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgSDoge2RhdGEubWFpbi50ZW1wX21heH3CsCBMOiB7ZGF0YS5tYWluLnRlbXBfbWlufcKwe1wiIFwifVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNb3JlSW5mbyBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaXR5O1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwic3R5bGVzIiwiSW1hZ2UiLCJHZXREYXRlIiwiTW9yZUluZm8iLCJDaXR5IiwiZGF0YSIsInJvdXRlciIsInF1ZXJ5IiwiSlNPTiIsInBhcnNlIiwiYmFja2dyb3VuZHMiLCJDbGVhciIsIlJhaW4iLCJDbG91ZHMiLCJTbm93IiwiVGh1bmRlcnN0b3JtIiwiZGVmYXVsdCIsImJhY2tncm91bmRJY29ucyIsImJhY2tncm91bmRVcmwiLCJ3ZWF0aGVyIiwibWFpbiIsImJhY2tncm91bmRJY29uVXJsIiwiZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm5hbWVOSWNvbiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicHJpb3JpdHkiLCJ0b3AiLCJjaXR5TmFtZSIsImgxIiwibmFtZSIsImluZm9Db250IiwidGVtQ29udCIsInNwYW4iLCJ0ZW1wIiwiZ2VuZXJhbENvbnQiLCJkZXNjcmlwdGlvbiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJwIiwidGVtcF9tYXgiLCJ0ZW1wX21pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/forecast/[City].tsx\n"));

/***/ })

});