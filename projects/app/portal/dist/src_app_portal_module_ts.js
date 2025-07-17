"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_app_portal_module_ts"],{

/***/ "./src/app/portal-routing.module.ts":
/*!******************************************!*\
  !*** ./src/app/portal-routing.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PortalRoutingModule: () => (/* binding */ PortalRoutingModule)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"../../../node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ \"../../../node_modules/@angular/core/fesm2022/debug_node.mjs\");\n/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ \"../../../node_modules/@angular/router/fesm2022/router_module.mjs\");\n\n\n\nconst appRoutes = [];\nlet PortalRoutingModule = class PortalRoutingModule {\n};\nPortalRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({\n        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes)],\n        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],\n    })\n], PortalRoutingModule);\n\n\n\n//# sourceURL=webpack:///./src/app/portal-routing.module.ts?\n}");

/***/ }),

/***/ "./src/app/portal.component.ts":
/*!*************************************!*\
  !*** ./src/app/portal.component.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PortalPage: () => (/* binding */ PortalPage)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"../../../node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ \"../../../node_modules/@angular/core/fesm2022/debug_node.mjs\");\n\n\nlet PortalPage = class PortalPage {\n};\nPortalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({\n        selector: 'portal-page',\n        templateUrl: './portal.component.html',\n        styleUrl: './portal.component.scss',\n        standalone: false,\n    })\n], PortalPage);\n\n\n\n//# sourceURL=webpack:///./src/app/portal.component.ts?\n}");

/***/ }),

/***/ "./src/app/portal.module.ts":
/*!**********************************!*\
  !*** ./src/app/portal.module.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PortalModule: () => (/* binding */ PortalModule)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"../../../node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ \"../../../node_modules/@angular/core/fesm2022/debug_node.mjs\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ \"../../../node_modules/@angular/core/fesm2022/core.mjs\");\n/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ \"../../../node_modules/@angular/platform-browser/fesm2022/browser.mjs\");\n/* harmony import */ var _portal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portal.component */ \"./src/app/portal.component.ts\");\n/* harmony import */ var _portal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portal-routing.module */ \"./src/app/portal-routing.module.ts\");\n/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ \"../../../node_modules/@angular/service-worker/fesm2022/service-worker.mjs\");\n\n\n\n\n\n\nlet PortalModule = class PortalModule {\n};\nPortalModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({\n        declarations: [_portal_component__WEBPACK_IMPORTED_MODULE_4__.PortalPage],\n        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _portal_routing_module__WEBPACK_IMPORTED_MODULE_5__.PortalRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__.ServiceWorkerModule.register('ngsw-worker.js', {\n                enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isDevMode)(),\n                // Register the ServiceWorker as soon as the application is stable\n                // or after 30 seconds (whichever comes first).\n                registrationStrategy: 'registerWhenStable:30000'\n            })],\n        bootstrap: [_portal_component__WEBPACK_IMPORTED_MODULE_4__.PortalPage],\n        providers: [],\n    })\n], PortalModule);\n\n\n\n//# sourceURL=webpack:///./src/app/portal.module.ts?\n}");

/***/ })

}]);