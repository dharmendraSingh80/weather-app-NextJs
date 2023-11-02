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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/forecast/City.module.css */ \"./pages/forecast/City.module.css\");\n/* harmony import */ var _pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_GetDate_GetDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/GetDate/GetDate */ \"./components/GetDate/GetDate.tsx\");\n/* harmony import */ var _components_MoreInfo_MoreInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/MoreInfo/MoreInfo */ \"./components/MoreInfo/MoreInfo.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst City = ()=>{\n    var _data_weather, _data_weather_, _data_weather1, _data_weather_1;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const data = router.query.data ? JSON.parse(router.query.data) : null;\n    const backgrounds = {\n        Clear: \"#F0A995\",\n        Rain: \"#1A3557\",\n        Clouds: \"#251D57\",\n        Snow: \"#145370\",\n        Thunderstorm: \"#251D57\",\n        default: \"#161617\"\n    };\n    const backgroundIcons = {\n        Clear: \"/sun.svg\",\n        Rain: \"/rain.svg\",\n        Clouds: \"/cloud.svg\",\n        Snow: \"/snow.svg\",\n        Thunderstorm: \"/thunder.svg\",\n        default: \"/dusty.svg\"\n    };\n    const backgroundUrl = (data === null || data === void 0 ? void 0 : (_data_weather = data.weather) === null || _data_weather === void 0 ? void 0 : (_data_weather_ = _data_weather[0]) === null || _data_weather_ === void 0 ? void 0 : _data_weather_.main) ? backgrounds[data.weather[0].main] : backgrounds.default;\n    const backgroundIconUrl = (data === null || data === void 0 ? void 0 : (_data_weather1 = data.weather) === null || _data_weather1 === void 0 ? void 0 : (_data_weather_1 = _data_weather1[0]) === null || _data_weather_1 === void 0 ? void 0 : _data_weather_1.main) ? backgroundIcons[data.weather[0].main] : backgroundIcons.default;\n    console.log(backgroundIconUrl);\n    if (!data || !data.weather) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Sorry, there was an error loading the weather data.\"\n        }, void 0, false, {\n            fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n            lineNumber: 42,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        style: {\n            backgroundColor: \"\".concat(backgroundUrl !== null && backgroundUrl !== void 0 ? backgroundUrl : \"#161617\")\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GetDate_GetDate__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().nameNIcon),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: backgroundIconUrl !== null && backgroundIconUrl !== void 0 ? backgroundIconUrl : \"/dusty.svg\",\n                            width: 330,\n                            height: 250,\n                            alt: \"cloud icon\",\n                            priority: true,\n                            style: {\n                                top: \"15%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().cityName),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" \",\n                                    data.name,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().infoCont),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().temCont),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().temp),\n                                        children: [\n                                            \" \",\n                                            data.main.temp,\n                                            \" \\xb0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_pages_forecast_City_module_css__WEBPACK_IMPORTED_MODULE_5___default().generalCont),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \" \",\n                                    data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" H: \",\n                                    data.main.temp_max,\n                                    \"\\xb0   L: \",\n                                    data.main.temp_min,\n                                    \"\\xb0 \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MoreInfo_MoreInfo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\code\\\\HTML\\\\avi-softwares\\\\NextJs\\\\weather-app\\\\pages\\\\forecast\\\\[City].tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(City, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = City;\n/* harmony default export */ __webpack_exports__[\"default\"] = (City);\nvar _c;\n$RefreshReg$(_c, \"City\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzswQ0FDdkcsOERBQUNDOztvQ0FBRTtvQ0FBSzNDLEtBQUtlLElBQUksQ0FBQzZCLFFBQVE7b0NBQUM7b0NBQVE1QyxLQUFLZSxJQUFJLENBQUM4QixRQUFRO29DQUFDOzs7Ozs7Ozs7Ozs7O2tDQUU1RCw4REFBQy9DLHFFQUFRQTt3QkFBQ0UsTUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QjtHQS9ETUQ7O1FBQ1dMLGtEQUFTQTs7O0tBRHBCSztBQWlFTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3JlY2FzdC9bQ2l0eV0udHN4PzIzOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3BhZ2VzL2ZvcmVjYXN0L0NpdHkubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IFdlYXRoZXJEYXRhIH0gZnJvbSAnQC90eXBlcy9XZWF0aGVyRGF0YSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCBHZXREYXRlIGZyb20gJ0AvY29tcG9uZW50cy9HZXREYXRlL0dldERhdGUnO1xyXG5pbXBvcnQgTW9yZUluZm8gZnJvbSAnQC9jb21wb25lbnRzL01vcmVJbmZvL01vcmVJbmZvJztcclxuaW1wb3J0IHsgQmFja2dyb3VuZHMgfSBmcm9tICdAL3R5cGVzL1dlYXRoZXJEYXRhJztcclxuXHJcblxyXG5cclxuY29uc3QgQ2l0eSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkYXRhOiBXZWF0aGVyRGF0YSA9IHJvdXRlci5xdWVyeS5kYXRhID8gSlNPTi5wYXJzZShyb3V0ZXIucXVlcnkuZGF0YSBhcyBzdHJpbmcpIDogbnVsbDtcclxuXHJcbiAgY29uc3QgYmFja2dyb3VuZHM6IEJhY2tncm91bmRzID0geyBcclxuICAgIENsZWFyOiAnI0YwQTk5NScsXHJcbiAgICBSYWluOiAnIzFBMzU1NycsXHJcbiAgICBDbG91ZHM6ICcjMjUxRDU3JyxcclxuICAgIFNub3c6ICcjMTQ1MzcwJyxcclxuICAgIFRodW5kZXJzdG9ybTogJyMyNTFENTcnLFxyXG4gICAgZGVmYXVsdDogJyMxNjE2MTcnLFxyXG4gIH1cclxuXHJcbiAgY29uc3QgYmFja2dyb3VuZEljb25zOiBCYWNrZ3JvdW5kcyA9IHsgXHJcbiAgICBDbGVhcjogJy9zdW4uc3ZnJyxcclxuICAgIFJhaW46ICcvcmFpbi5zdmcnLFxyXG4gICAgQ2xvdWRzOiAnL2Nsb3VkLnN2ZycsXHJcbiAgICBTbm93OiAnL3Nub3cuc3ZnJyxcclxuICAgIFRodW5kZXJzdG9ybTogJy90aHVuZGVyLnN2ZycsXHJcbiAgICBkZWZhdWx0OiAnL2R1c3R5LnN2ZycsXHJcbiAgfVxyXG5cclxuICBjb25zdCBiYWNrZ3JvdW5kVXJsID0gZGF0YT8ud2VhdGhlcj8uWzBdPy5tYWluID8gYmFja2dyb3VuZHNbZGF0YS53ZWF0aGVyWzBdLm1haW5dIDogYmFja2dyb3VuZHMuZGVmYXVsdDtcclxuXHJcbiAgY29uc3QgYmFja2dyb3VuZEljb25VcmwgPSBkYXRhPy53ZWF0aGVyPy5bMF0/Lm1haW4gPyBiYWNrZ3JvdW5kSWNvbnNbZGF0YS53ZWF0aGVyWzBdLm1haW5dIDogYmFja2dyb3VuZEljb25zLmRlZmF1bHQ7XHJcblxyXG4gIGNvbnNvbGUubG9nKGJhY2tncm91bmRJY29uVXJsKVxyXG5cclxuICBcclxuXHJcbiAgaWYgKCFkYXRhIHx8ICFkYXRhLndlYXRoZXIpIHtcclxuICAgIHJldHVybiA8ZGl2PlNvcnJ5LCB0aGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB0aGUgd2VhdGhlciBkYXRhLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gc3R5bGU9e3tcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtiYWNrZ3JvdW5kVXJsID8/ICcjMTYxNjE3J31gXHJcbiAgICAgIH19PlxyXG4gICAgICA8R2V0RGF0ZSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVOSWNvbn0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2JhY2tncm91bmRJY29uVXJsID8/ICcvZHVzdHkuc3ZnJ30gd2lkdGg9ezMzMH0gaGVpZ2h0PXsyNTB9ICBhbHQ9XCJjbG91ZCBpY29uXCIgcHJpb3JpdHkgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB0b3A6XCIxNSVcIixcclxuICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNpdHlOYW1lfT5cclxuICAgICAgICAgIDxoMT4ge2RhdGEubmFtZX0gPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb0NvbnR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbUNvbnR9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRlbXB9PiB7ZGF0YS5tYWluLnRlbXB9IMKwPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdlbmVyYWxDb250fT5cclxuICAgICAgICAgICAgICA8c3Bhbj4geyhkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgKGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbikuc2xpY2UoMSl9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8cD4gSDoge2RhdGEubWFpbi50ZW1wX21heH3CsCAgIEw6IHtkYXRhLm1haW4udGVtcF9taW59wrAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNb3JlSW5mbyBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2l0eSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJJbWFnZSIsIkdldERhdGUiLCJNb3JlSW5mbyIsIkNpdHkiLCJkYXRhIiwicm91dGVyIiwicXVlcnkiLCJKU09OIiwicGFyc2UiLCJiYWNrZ3JvdW5kcyIsIkNsZWFyIiwiUmFpbiIsIkNsb3VkcyIsIlNub3ciLCJUaHVuZGVyc3Rvcm0iLCJkZWZhdWx0IiwiYmFja2dyb3VuZEljb25zIiwiYmFja2dyb3VuZFVybCIsIndlYXRoZXIiLCJtYWluIiwiYmFja2dyb3VuZEljb25VcmwiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJuYW1lTkljb24iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInByaW9yaXR5IiwidG9wIiwiY2l0eU5hbWUiLCJoMSIsIm5hbWUiLCJpbmZvQ29udCIsInRlbUNvbnQiLCJzcGFuIiwidGVtcCIsImdlbmVyYWxDb250IiwiZGVzY3JpcHRpb24iLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicCIsInRlbXBfbWF4IiwidGVtcF9taW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/forecast/[City].tsx\n"));

/***/ })

});