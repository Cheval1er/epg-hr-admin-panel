"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_external-vacancies_stopped-vacancy_stopped-vacancy_module_ts"],{

/***/ 3509:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/stopped-vacancy/stopped-vacancy-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoppedVacancyRoutingModule": () => (/* binding */ StoppedVacancyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 5676);
/* harmony import */ var _stopped_vacancy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stopped-vacancy.component */ 3193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: '',
        component: _stopped_vacancy_component__WEBPACK_IMPORTED_MODULE_0__.StoppedVacancyComponent
    }
];
class StoppedVacancyRoutingModule {
}
StoppedVacancyRoutingModule.ɵfac = function StoppedVacancyRoutingModule_Factory(t) { return new (t || StoppedVacancyRoutingModule)(); };
StoppedVacancyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StoppedVacancyRoutingModule });
StoppedVacancyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StoppedVacancyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 3193:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/stopped-vacancy/stopped-vacancy.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoppedVacancyComponent": () => (/* binding */ StoppedVacancyComponent)
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
function StoppedVacancyComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StoppedVacancyComponent_th_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.openDialog()); });
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
const _c6 = function () { return ["/pages/completedVacancies"]; };
function StoppedVacancyComponent_th_4_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span")(15, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span")(18, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StoppedVacancyComponent_th_4_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.getAllStoppedVacancies()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Stopped");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span")(21, "mat-form-field", 29)(22, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function StoppedVacancyComponent_th_4_Template_input_keyup_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.filterData($event)); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c6));
} }
function StoppedVacancyComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24)(1, "div", 27)(2, "span")(3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StoppedVacancyComponent_th_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.refreshButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Refresh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span")(8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StoppedVacancyComponent_th_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.editDialog(ctx_r36.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Edit Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span")(13, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StoppedVacancyComponent_th_6_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.viewDialog(ctx_r37.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " View Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span")(18, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StoppedVacancyComponent_th_6_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r38.activeVacancy(ctx_r38.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Active Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span")(23, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StoppedVacancyComponent_th_6_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r39.cancelVacancy(ctx_r39.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Cancel Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span")(28, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StoppedVacancyComponent_th_6_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.deleteVacancy(ctx_r40.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Delete Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span")(33, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StoppedVacancyComponent_th_6_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r41.duplicateVacancy(ctx_r41.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Duplicate Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} }
function StoppedVacancyComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StoppedVacancyComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", vacancy_r42 == null ? null : vacancy_r42.id, " ");
} }
function StoppedVacancyComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StoppedVacancyComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r43 == null ? null : vacancy_r43.companyName);
} }
function StoppedVacancyComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Vacancy Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StoppedVacancyComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r44 == null ? null : vacancy_r44.vacancyName);
} }
function StoppedVacancyComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StoppedVacancyComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r45 == null ? null : vacancy_r45.vacancyAddress);
} }
function StoppedVacancyComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Dead Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StoppedVacancyComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r46 == null ? null : vacancy_r46.deadLine);
} }
function StoppedVacancyComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StoppedVacancyComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r47 == null ? null : vacancy_r47.categoryName);
} }
function StoppedVacancyComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StoppedVacancyComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r48 == null ? null : vacancy_r48.typeName);
} }
function StoppedVacancyComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Probationary Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StoppedVacancyComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r49 == null ? null : vacancy_r49.probationaryPeriod);
} }
function StoppedVacancyComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StoppedVacancyComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r50 == null ? null : vacancy_r50.schedule);
} }
function StoppedVacancyComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function StoppedVacancyComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", vacancy_r52 == null ? null : vacancy_r52.status, " ");
} }
function StoppedVacancyComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 34);
} }
function StoppedVacancyComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 34);
} }
function StoppedVacancyComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 34);
} }
function StoppedVacancyComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 34);
} }
const _c7 = function (a0) { return { "highlighted": a0 }; };
function StoppedVacancyComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StoppedVacancyComponent_tr_41_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55); const vacancy_r53 = restoredCtx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r54.highlight(vacancy_r53)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r53 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c7, ctx_r27.selectedRowIndex == vacancy_r53.id));
} }
const _c8 = function () { return [10, 20, 30, 50]; };
class StoppedVacancyComponent {
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
        this.getAllStoppedVacancies();
    }
    // get allstopped vacancies 
    getAllStoppedVacancies() {
        this.vacancyService.getAllStoppedVacancies(0, 25).subscribe(c => {
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
StoppedVacancyComponent.ɵfac = function StoppedVacancyComponent_Factory(t) { return new (t || StoppedVacancyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_3__.VacancyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
StoppedVacancyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StoppedVacancyComponent, selectors: [["vex-stopped-vacancy"]], viewQuery: function StoppedVacancyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 44, vars: 12, consts: [["mat-table", "", "matSort", "", "matSort", "", "matSortActive", "id", "matSortDirection", "desc", "cdkDropListGroup", "", 1, "full-width-table", "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "grouped"], ["mat-header-cell", "", "colspan", "10", 4, "matHeaderCellDef"], ["matColumnDef", "options"], ["matColumnDef", "edit"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", "class", "body", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "company"], ["mat-header-cell", "", "class", "body", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "vacancyName"], ["matColumnDef", "vacancyAddress"], ["matColumnDef", "deadLine"], ["matColumnDef", "category"], ["matColumnDef", "type"], ["mat-header-cell", "", "mat-sort-header", "", "class", " body", 4, "matHeaderCellDef"], ["matColumnDef", "probationaryPeriod"], ["matColumnDef", "schedule"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page", 1, "full-width-table", "body", 3, "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", "", "colspan", "10"], ["role", "button", 1, "button-7", 3, "click"], [3, "ngStyle"], [1, "buttonDisplay"], ["role", "button", 1, "button-7", 3, "routerLink"], ["appearance", "outline", 1, "filterClass"], ["matInput", "", "placeholder", "search", "autocomplete", "off", 3, "keyup"], ["role", "button", 1, "button-2", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "body"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"]], template: function StoppedVacancyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, StoppedVacancyComponent_th_2_Template, 5, 2, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, StoppedVacancyComponent_th_4_Template, 23, 10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, StoppedVacancyComponent_th_6_Template, 37, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, StoppedVacancyComponent_th_8_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, StoppedVacancyComponent_td_9_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, StoppedVacancyComponent_th_11_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, StoppedVacancyComponent_td_12_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, StoppedVacancyComponent_th_14_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, StoppedVacancyComponent_td_15_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, StoppedVacancyComponent_th_17_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, StoppedVacancyComponent_td_18_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, StoppedVacancyComponent_th_20_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, StoppedVacancyComponent_td_21_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, StoppedVacancyComponent_th_23_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, StoppedVacancyComponent_td_24_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, StoppedVacancyComponent_th_26_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, StoppedVacancyComponent_td_27_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, StoppedVacancyComponent_th_29_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, StoppedVacancyComponent_td_30_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](31, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, StoppedVacancyComponent_th_32_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, StoppedVacancyComponent_td_33_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](34, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, StoppedVacancyComponent_th_35_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, StoppedVacancyComponent_td_36_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, StoppedVacancyComponent_tr_37_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, StoppedVacancyComponent_tr_38_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, StoppedVacancyComponent_tr_39_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, StoppedVacancyComponent_tr_40_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, StoppedVacancyComponent_tr_41_Template, 1, 3, "tr", 21);
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, ngx_quicklink__WEBPACK_IMPORTED_MODULE_10__["ɵɵLinkDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9wcGVkLXZhY2FuY3kuY29tcG9uZW50LnNjc3MifQ== */", "span[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    color: black;\r\n    width: 100px;\r\n    height: 100px;\r\n    padding: 5px;\r\n}\r\n\r\n\r\n.body[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-size: 13px;\r\n\r\n}\r\n\r\n\r\n.mat-column-id[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 5% !important;\r\n    width: 5% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-vacancyName[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 5% !important;\r\n    width: 5% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-vacancyAddress[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 5% !important;\r\n    width: 5% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-category[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 10% !important;\r\n    width: 10% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-description[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 35% !important;\r\n    width: 35% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%] {\r\n    background-color: #1d5175;\r\n    border: 1px solid transparent;\r\n    border-radius: 3px;\r\n    box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: -apple-system, system-ui, \"Segoe UI\", \"Liberation Sans\", sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    line-height: 1.15385;\r\n    margin: 0;\r\n    outline: none;\r\n    padding: 8px .8em;\r\n    position: relative;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    -moz-user-select: none;\r\n         user-select: none;\r\n    -webkit-user-select: none;\r\n    touch-action: manipulation;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%]:hover, .button-7[_ngcontent-%COMP%]:focus {\r\n    background-color: #07c;\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%]:active {\r\n    background-color: #0064bd;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%] {\r\n    background-color: rgba(51, 51, 51, 0.05);\r\n    border-radius: 8px;\r\n    border-width: 0;\r\n    color: #333333;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: \"Haas Grot Text R Web\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 20px;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 10px 12px;\r\n    text-align: justify;\r\n    transition: all 200ms;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n    -moz-user-select: none;\r\n         user-select: none;\r\n    -webkit-user-select: none;\r\n    touch-action: manipulation;\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%]:hover, .button-2[_ngcontent-%COMP%]:focus {\r\n    background-color: rgb(139, 199, 241);\r\n\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 0 4px rgba(133, 194, 238, 0.15);\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%]:active {\r\n    background-color: #678fb6;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n\r\n.filterClass[_ngcontent-%COMP%] {\r\n    margin-left: 60%;\r\n}\r\n\r\n\r\n.highlighted[_ngcontent-%COMP%] {\r\n    background: #c1d9f1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3BwZWQtdmFjYW5jeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7O0FBRW5COzs7QUFJQTs7SUFFSSwrQkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFPekIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7OztBQUVBOztJQUVJLCtCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUt6QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7O0FBSUE7O0lBRUksK0JBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBTXpCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOzs7QUFHQTs7SUFFSSwrQkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFPekIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7OztBQUVBOztJQUVJLCtCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUt6QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7O0FBSUE7SUFDSSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixtREFBbUQ7SUFDbkQsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdGQUFnRjtJQUNoRixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixzQkFBaUI7U0FBakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOzs7QUFLQTtJQUNJLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1GQUFtRjtJQUNuRixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsc0JBQWlCO1NBQWpCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCOzs7QUFFQTs7SUFFSSxvQ0FBb0M7O0FBRXhDOzs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsZUFBZTs7QUFFbkI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzdG9wcGVkLXZhY2FuY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuXHJcbi5ib2R5IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLm1hdC1jb2x1bW4taWQge1xyXG5cclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDUlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNSUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi12YWNhbmN5TmFtZSB7XHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA1JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHJcblxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi5tYXQtY29sdW1uLXZhY2FuY3lBZGRyZXNzIHtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDUlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cclxuXHJcblxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG5cclxuLm1hdC1jb2x1bW4tY2F0ZWdvcnkge1xyXG5cclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDEwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWRlc2NyaXB0aW9uIHtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAzNSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzNSUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG5cclxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuXHJcblxyXG4uYnV0dG9uLTcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNTE3NTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNCkgMCAxcHggMCAwIGluc2V0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBcIkxpYmVyYXRpb24gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1Mzg1O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDhweCAuOGVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uYnV0dG9uLTc6aG92ZXIsXHJcbi5idXR0b24tNzpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdjO1xyXG59XHJcblxyXG4uYnV0dG9uLTc6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMCwgMTQ5LCAyNTUsIC4xNSk7XHJcbn1cclxuXHJcbi5idXR0b24tNzphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjRiZDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5idXR0b24tMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuMDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJIYWFzIEdyb3QgVGV4dCBSIFdlYlwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxufVxyXG5cclxuLmJ1dHRvbi0yOmhvdmVyLFxyXG4uYnV0dG9uLTI6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMTk5LCAyNDEpO1xyXG5cclxufVxyXG5cclxuLmJ1dHRvbi0yOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDEzMywgMTk0LCAyMzgsIDAuMTUpO1xyXG59XHJcblxyXG4uYnV0dG9uLTI6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzhmYjY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLmZpbHRlckNsYXNzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XHJcbn1cclxuXHJcbi5oaWdobGlnaHRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzFkOWYxO1xyXG59Il19 */"] });


/***/ }),

/***/ 8011:
/*!************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/stopped-vacancy/stopped-vacancy.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoppedVacancyModule": () => (/* binding */ StoppedVacancyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/vacancy.service */ 4301);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-resizable-element */ 4454);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _vacancy_form_vacancy_form_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vacancy-form/vacancy-form.module */ 9182);
/* harmony import */ var _stopped_vacancy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stopped-vacancy.component */ 3193);
/* harmony import */ var _stopped_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stopped-vacancy-routing.module */ 3509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






























class StoppedVacancyModule {
}
StoppedVacancyModule.ɵfac = function StoppedVacancyModule_Factory(t) { return new (t || StoppedVacancyModule)(); };
StoppedVacancyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: StoppedVacancyModule });
StoppedVacancyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_LOCALE, useValue: 'en-GB' }, src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_0__.VacancyService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _stopped_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_3__.StoppedVacancyRoutingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatNativeDateModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule,
        _vacancy_form_vacancy_form_module__WEBPACK_IMPORTED_MODULE_1__.VacancyFormModule,
        angular_resizable_element__WEBPACK_IMPORTED_MODULE_25__.ResizableModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_26__.CdkTableModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__.ScrollingModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__.A11yModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](StoppedVacancyModule, { declarations: [_stopped_vacancy_component__WEBPACK_IMPORTED_MODULE_2__.StoppedVacancyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _stopped_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_3__.StoppedVacancyRoutingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatNativeDateModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule,
        _vacancy_form_vacancy_form_module__WEBPACK_IMPORTED_MODULE_1__.VacancyFormModule,
        angular_resizable_element__WEBPACK_IMPORTED_MODULE_25__.ResizableModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_26__.CdkTableModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__.ScrollingModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__.A11yModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_external-vacancies_stopped-vacancy_stopped-vacancy_module_ts.js.map