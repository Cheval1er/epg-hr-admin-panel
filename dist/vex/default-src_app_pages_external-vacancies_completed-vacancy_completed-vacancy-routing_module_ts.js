"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_pages_external-vacancies_completed-vacancy_completed-vacancy-routing_module_ts"],{

/***/ 5467:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/completed-vacancy/completed-vacancy-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletedVacancyRoutingModule": () => (/* binding */ CompletedVacancyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 5676);
/* harmony import */ var _completed_vacancy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completed-vacancy.component */ 7626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: '',
        component: _completed_vacancy_component__WEBPACK_IMPORTED_MODULE_0__.CompletedVacancyComponent
    }
];
class CompletedVacancyRoutingModule {
}
CompletedVacancyRoutingModule.ɵfac = function CompletedVacancyRoutingModule_Factory(t) { return new (t || CompletedVacancyRoutingModule)(); };
CompletedVacancyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CompletedVacancyRoutingModule });
CompletedVacancyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CompletedVacancyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 7626:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/completed-vacancy/completed-vacancy.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletedVacancyComponent": () => (/* binding */ CompletedVacancyComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _edit_vacancy_edit_vacancy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../edit-vacancy/edit-vacancy.component */ 3858);
/* harmony import */ var _vacancy_form_vacancy_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vacancy-form/vacancy-form.component */ 5021);
/* harmony import */ var _view_vacancy_view_vacancy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-vacancy/view-vacancy.component */ 1496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/vacancy.service */ 4301);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-quicklink */ 5676);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);

















const _c0 = ["paginator"];
const _c1 = function () { return { "color": "rgb(132, 139, 238)" }; };
function CompletedVacancyComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompletedVacancyComponent_th_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.openDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " New Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/pages/allVacancies"]; };
const _c3 = function () { return ["/pages/newVacancies"]; };
const _c4 = function () { return ["/pages/activeVacancies"]; };
const _c5 = function () { return ["/pages/cancelledVacancies"]; };
const _c6 = function () { return ["/pages/stoppedVacancies"]; };
function CompletedVacancyComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24)(1, "div", 27)(2, "span")(3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "ALL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span")(6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span")(9, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span")(12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span")(15, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompletedVacancyComponent_th_4_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.getAllCompletedVacancies(0, 80)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span")(18, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Stopped");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span")(21, "mat-form-field", 29)(22, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function CompletedVacancyComponent_th_4_Template_input_keyup_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.filterData($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c6));
} }
function CompletedVacancyComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24)(1, "div", 27)(2, "span")(3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompletedVacancyComponent_th_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.refreshButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Refresh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span")(8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompletedVacancyComponent_th_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.editDialog(ctx_r36.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Edit Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span")(13, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompletedVacancyComponent_th_6_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.viewDialog(ctx_r37.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " View Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span")(18, "button", 32)(19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Active Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span")(23, "button", 32)(24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Cancel Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span")(28, "button", 32)(29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Delete Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span")(33, "button", 32)(34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Duplicate Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} }
function CompletedVacancyComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompletedVacancyComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", vacancy_r38 == null ? null : vacancy_r38.id, " ");
} }
function CompletedVacancyComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompletedVacancyComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r39 == null ? null : vacancy_r39.companyName);
} }
function CompletedVacancyComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Vacancy Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompletedVacancyComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r40 == null ? null : vacancy_r40.vacancyName);
} }
function CompletedVacancyComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompletedVacancyComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r41 == null ? null : vacancy_r41.vacancyAddress);
} }
function CompletedVacancyComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Dead Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompletedVacancyComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r42 == null ? null : vacancy_r42.deadLine);
} }
function CompletedVacancyComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompletedVacancyComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r43 == null ? null : vacancy_r43.categoryName);
} }
function CompletedVacancyComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompletedVacancyComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r44 == null ? null : vacancy_r44.typeName);
} }
function CompletedVacancyComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Probationary Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompletedVacancyComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r45 == null ? null : vacancy_r45.probationaryPeriod);
} }
function CompletedVacancyComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompletedVacancyComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r46 == null ? null : vacancy_r46.schedule);
} }
function CompletedVacancyComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CompletedVacancyComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", vacancy_r48 == null ? null : vacancy_r48.status, " ");
} }
function CompletedVacancyComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 35);
} }
function CompletedVacancyComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 35);
} }
function CompletedVacancyComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 35);
} }
function CompletedVacancyComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 35);
} }
const _c7 = function (a0) { return { "highlighted": a0 }; };
function CompletedVacancyComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompletedVacancyComponent_tr_41_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r51); const vacancy_r49 = restoredCtx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r50.highlight(vacancy_r49)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r49 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c7, ctx_r27.selectedRowIndex == vacancy_r49.id));
} }
const _c8 = function () { return [10, 20, 30, 50]; };
class CompletedVacancyComponent {
    constructor(dialogRef, vacancyService, router) {
        // this.dataSource = active VacancyTableDataSource();
        this.dialogRef = dialogRef;
        this.vacancyService = vacancyService;
        this.router = router;
        this.data = [];
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'company', 'vacancyName', 'vacancyAddress', 'deadLine',
            'category', 'type', 'probationaryPeriod', 'schedule', 'status'];
        this.groupedColumns = ['grouped'];
        this.secondGroupedColumns = ['options'];
        this.thirdGroupedColumns = ['edit'];
        this.selectedRowIndex = -1;
    }
    ngOnInit() {
        this.getAllCompletedVacancies(0, 80);
    }
    // get allCompleted vacancies 
    getAllCompletedVacancies(start, limit) {
        this.vacancyService.getAllCompletedVacancies(start, limit).subscribe(c => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.data = c['list']);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            console.log(this.data);
        }),
            (error) => {
                alert(error.message);
            };
    }
    cancelVacancy(rowData) {
        rowData = this.selectedRow;
        this.vacancyService.cancelVacancy(rowData).subscribe((result) => {
            console.log(result);
        });
        setTimeout(() => {
            window.location.reload();
        }, 2);
    }
    duplicateVacancy(rowData) {
        rowData = this.selectedRow;
        this.vacancyService.duplicateVacancy(rowData).subscribe((result) => {
            console.log(result);
        });
        setTimeout(() => {
            window.location.reload();
        }, 2);
    }
    activeVacancy(rowData) {
        rowData = this.selectedRow;
        this.vacancyService.activeVacancy(rowData).subscribe((result) => {
            console.log(result);
        });
        setTimeout(() => {
            window.location.reload();
        }, 2);
    }
    deleteVacancy(rowData) {
        rowData = this.selectedRow;
        this.vacancyService.deleteVacancy(rowData).subscribe((result) => {
            console.log(result);
        });
        setTimeout(() => {
            window.location.reload();
        }, 2);
    }
    refreshButton() {
        setTimeout(() => {
            window.location.reload();
        }, 50);
    }
    openDialog() {
        this.dialogRef.open(_vacancy_form_vacancy_form_component__WEBPACK_IMPORTED_MODULE_1__.VacancyFormComponent, {
            disableClose: true,
            height: '950px',
            width: '1200px'
        });
    }
    ngAfterViewInit() {
        // this.dataSource.sort = this.sort
        // this.dataSource.paginator = this.paginator;
        // this.table.dataSource = this.dataSource;
    }
    filterData($event) {
        this.dataSource.filter = $event.target.value;
    }
    highlight(vacancy) {
        this.selectedRow = vacancy;
        this.selectedRowIndex = vacancy.id;
        console.log(vacancy);
    }
    editDialog(rowData) {
        rowData = this.selectedRow;
        this.dialogRef.open(_edit_vacancy_edit_vacancy_component__WEBPACK_IMPORTED_MODULE_0__.EditVacancyComponent, {
            // disableClose: true,
            height: '950px',
            width: '1400px',
            data: this.selectedRow
        });
        console.log(rowData);
    }
    viewDialog(rowData) {
        rowData = this.selectedRow;
        this.dialogRef.open(_view_vacancy_view_vacancy_component__WEBPACK_IMPORTED_MODULE_2__.ViewVacancyComponent, {
            // disableClose: true,
            height: '950px',
            width: '1400px',
            data: this.selectedRow
        });
        console.log(rowData);
    }
}
CompletedVacancyComponent.ɵfac = function CompletedVacancyComponent_Factory(t) { return new (t || CompletedVacancyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_3__.VacancyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
CompletedVacancyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CompletedVacancyComponent, selectors: [["vex-completed-vacancy"]], viewQuery: function CompletedVacancyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 44, vars: 12, consts: [["mat-table", "", "matSort", "", "matSort", "", "matSortActive", "id", "matSortDirection", "desc", "cdkDropListGroup", "", 1, "full-width-table", "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "grouped"], ["mat-header-cell", "", "colspan", "10", 4, "matHeaderCellDef"], ["matColumnDef", "options"], ["matColumnDef", "edit"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", "class", "body", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "company"], ["mat-header-cell", "", "class", "body", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "vacancyName"], ["matColumnDef", "vacancyAddress"], ["matColumnDef", "deadLine"], ["matColumnDef", "category"], ["matColumnDef", "type"], ["mat-header-cell", "", "mat-sort-header", "", "class", " body", 4, "matHeaderCellDef"], ["matColumnDef", "probationaryPeriod"], ["matColumnDef", "schedule"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page", 1, "full-width-table", "body", 3, "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", "", "colspan", "10"], ["role", "button", 1, "button-7", 3, "click"], [3, "ngStyle"], [1, "buttonDisplay"], ["role", "button", 1, "button-7", 3, "routerLink"], ["appearance", "outline", 1, "filterClass"], ["matInput", "", "placeholder", "search", "autocomplete", "off", 3, "keyup"], ["role", "button", 1, "button-2", 3, "click"], ["role", "button", 1, "button-2"], ["mat-header-cell", "", "mat-sort-header", "", 1, "body"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"]], template: function CompletedVacancyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CompletedVacancyComponent_th_2_Template, 5, 2, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CompletedVacancyComponent_th_4_Template, 23, 10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CompletedVacancyComponent_th_6_Template, 37, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CompletedVacancyComponent_th_8_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CompletedVacancyComponent_td_9_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CompletedVacancyComponent_th_11_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CompletedVacancyComponent_td_12_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, CompletedVacancyComponent_th_14_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, CompletedVacancyComponent_td_15_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, CompletedVacancyComponent_th_17_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, CompletedVacancyComponent_td_18_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, CompletedVacancyComponent_th_20_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, CompletedVacancyComponent_td_21_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, CompletedVacancyComponent_th_23_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, CompletedVacancyComponent_td_24_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, CompletedVacancyComponent_th_26_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, CompletedVacancyComponent_td_27_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, CompletedVacancyComponent_th_29_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, CompletedVacancyComponent_td_30_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](31, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, CompletedVacancyComponent_th_32_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, CompletedVacancyComponent_td_33_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](34, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, CompletedVacancyComponent_th_35_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, CompletedVacancyComponent_td_36_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, CompletedVacancyComponent_tr_37_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, CompletedVacancyComponent_tr_38_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, CompletedVacancyComponent_tr_39_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, CompletedVacancyComponent_tr_40_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, CompletedVacancyComponent_tr_41_Template, 1, 3, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "mat-paginator", 22, 23);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.groupedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.secondGroupedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.thirdGroupedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c8));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, ngx_quicklink__WEBPACK_IMPORTED_MODULE_10__["ɵɵLinkDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV0ZWQtdmFjYW5jeS5jb21wb25lbnQuc2NzcyJ9 */", "span[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    color: black;\r\n    width: 100px;\r\n    height: 100px;\r\n    padding: 5px;\r\n}\r\n\r\n\r\n.body[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-size: 13px;\r\n\r\n}\r\n\r\n\r\n.mat-column-id[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 5% !important;\r\n    width: 5% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-vacancyName[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 5% !important;\r\n    width: 5% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-title[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 10% !important;\r\n    width: 10% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-vacancyAddress[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 8% !important;\r\n    width: 8% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-deadLine[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 10% !important;\r\n    width: 10% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-category[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 10% !important;\r\n    width: 10% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-description[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 35% !important;\r\n    width: 35% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%] {\r\n    background-color: #1d5175;\r\n    border: 1px solid transparent;\r\n    border-radius: 3px;\r\n    box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: -apple-system, system-ui, \"Segoe UI\", \"Liberation Sans\", sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    line-height: 1.15385;\r\n    margin: 0;\r\n    outline: none;\r\n    padding: 8px .8em;\r\n    position: relative;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    -moz-user-select: none;\r\n         user-select: none;\r\n    -webkit-user-select: none;\r\n    touch-action: manipulation;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%]:hover, .button-7[_ngcontent-%COMP%]:focus {\r\n    background-color: #07c;\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%]:active {\r\n    background-color: #0064bd;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%] {\r\n    background-color: rgba(51, 51, 51, 0.05);\r\n    border-radius: 8px;\r\n    border-width: 0;\r\n    color: #333333;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: \"Haas Grot Text R Web\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 20px;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 10px 12px;\r\n    text-align: justify;\r\n    transition: all 200ms;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n    -moz-user-select: none;\r\n         user-select: none;\r\n    -webkit-user-select: none;\r\n    touch-action: manipulation;\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%]:hover, .button-2[_ngcontent-%COMP%]:focus {\r\n    background-color: rgb(139, 199, 241);\r\n\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 0 4px rgba(133, 194, 238, 0.15);\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%]:active {\r\n    background-color: #678fb6;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n\r\n.filterClass[_ngcontent-%COMP%] {\r\n    margin-left: 60%;\r\n}\r\n\r\n\r\n.highlighted[_ngcontent-%COMP%] {\r\n    background: #c1d9f1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRlZC12YWNhbmN5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osZUFBZTs7QUFFbkI7OztBQUtBOztJQUVJLCtCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQU96QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7O0FBRUE7O0lBRUksK0JBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBS3pCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOzs7QUFFQTs7SUFFSSwrQkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFPekIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7OztBQUVBOztJQUVJLCtCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQU16QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7O0FBRUE7O0lBRUksK0JBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBT3pCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOzs7QUFFQTs7SUFFSSwrQkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFPekIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7OztBQUVBOztJQUVJLCtCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUt6QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7O0FBSUE7SUFDSSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixtREFBbUQ7SUFDbkQsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdGQUFnRjtJQUNoRixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixzQkFBaUI7U0FBakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOzs7QUFLQTtJQUNJLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1GQUFtRjtJQUNuRixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsc0JBQWlCO1NBQWpCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCOzs7QUFFQTs7SUFFSSxvQ0FBb0M7O0FBRXhDOzs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsZUFBZTs7QUFFbkI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJjb21wbGV0ZWQtdmFjYW5jeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5cclxuLmJvZHkge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLm1hdC1jb2x1bW4taWQge1xyXG5cclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDUlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNSUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi12YWNhbmN5TmFtZSB7XHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA1JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHJcblxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi10aXRsZSB7XHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tdmFjYW5jeUFkZHJlc3Mge1xyXG5cclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogOCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG5cclxuXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWRlYWRMaW5lIHtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1jYXRlZ29yeSB7XHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZGVzY3JpcHRpb24ge1xyXG5cclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDM1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHJcblxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi5idXR0b24tNyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ1MTc1O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KSAwIDFweCAwIDAgaW5zZXQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFwiTGliZXJhdGlvbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTUzODU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogOHB4IC44ZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5idXR0b24tNzpob3ZlcixcclxuLmJ1dHRvbi03OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2M7XHJcbn1cclxuXHJcbi5idXR0b24tNzpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSgwLCAxNDksIDI1NSwgLjE1KTtcclxufVxyXG5cclxuLmJ1dHRvbi03OmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NGJkO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmJ1dHRvbi0yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhhYXMgR3JvdCBUZXh0IFIgV2ViXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG59XHJcblxyXG4uYnV0dG9uLTI6aG92ZXIsXHJcbi5idXR0b24tMjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAxOTksIDI0MSk7XHJcblxyXG59XHJcblxyXG4uYnV0dG9uLTI6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMTMzLCAxOTQsIDIzOCwgMC4xNSk7XHJcbn1cclxuXHJcbi5idXR0b24tMjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3OGZiNjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG59XHJcblxyXG4uZmlsdGVyQ2xhc3Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcclxufVxyXG5cclxuLmhpZ2hsaWdodGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNjMWQ5ZjE7XHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_external-vacancies_completed-vacancy_completed-vacancy-routing_module_ts.js.map