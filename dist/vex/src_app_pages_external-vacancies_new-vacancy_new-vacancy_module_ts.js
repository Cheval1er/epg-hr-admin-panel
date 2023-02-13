"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_external-vacancies_new-vacancy_new-vacancy_module_ts"],{

/***/ 6569:
/*!************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/new-vacancy/new-vacancy-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewVacancyRoutingModule": () => (/* binding */ NewVacancyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 5676);
/* harmony import */ var _new_vacancy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-vacancy.component */ 3194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: '',
        component: _new_vacancy_component__WEBPACK_IMPORTED_MODULE_0__.NewVacancyComponent
    }
];
class NewVacancyRoutingModule {
}
NewVacancyRoutingModule.ɵfac = function NewVacancyRoutingModule_Factory(t) { return new (t || NewVacancyRoutingModule)(); };
NewVacancyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NewVacancyRoutingModule });
NewVacancyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewVacancyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 3194:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/new-vacancy/new-vacancy.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewVacancyComponent": () => (/* binding */ NewVacancyComponent)
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
function NewVacancyComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewVacancyComponent_th_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.openDialog()); });
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
const _c7 = function () { return ["/pages/stoppedVacancies"]; };
function NewVacancyComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24)(1, "div", 27)(2, "span")(3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "ALL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span")(6, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewVacancyComponent_th_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.getAllNewVacancies(0, 80)); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span")(18, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Stopped");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span")(21, "mat-form-field", 30)(22, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function NewVacancyComponent_th_5_Template_input_keyup_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.filterData($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c7));
} }
function NewVacancyComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24)(1, "div", 27)(2, "span")(3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewVacancyComponent_th_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.refreshButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Refresh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span")(8, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewVacancyComponent_th_7_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.editDialog(ctx_r36.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Edit Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span")(13, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewVacancyComponent_th_7_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.viewDialog(ctx_r37.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " View Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span")(18, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewVacancyComponent_th_7_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r38.activeVacancy(ctx_r38.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Active Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span")(23, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewVacancyComponent_th_7_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r39.cancelVacancy(ctx_r39.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Cancel Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span")(28, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewVacancyComponent_th_7_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.deleteVacancy(ctx_r40.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Delete Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span")(33, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewVacancyComponent_th_7_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r41.duplicateVacancy(ctx_r41.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Duplicate Vacancy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} }
function NewVacancyComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NewVacancyComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", vacancy_r42 == null ? null : vacancy_r42.id, " ");
} }
function NewVacancyComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NewVacancyComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r43 == null ? null : vacancy_r43.companyName);
} }
function NewVacancyComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Vacancy Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NewVacancyComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r44 == null ? null : vacancy_r44.vacancyName);
} }
function NewVacancyComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NewVacancyComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r45 == null ? null : vacancy_r45.vacancyAddress);
} }
function NewVacancyComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Dead Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NewVacancyComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r46 == null ? null : vacancy_r46.deadLine);
} }
function NewVacancyComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NewVacancyComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r47 == null ? null : vacancy_r47.categoryName);
} }
function NewVacancyComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NewVacancyComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r48 == null ? null : vacancy_r48.typeName);
} }
function NewVacancyComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Probationary Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NewVacancyComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r49 == null ? null : vacancy_r49.probationaryPeriod);
} }
function NewVacancyComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NewVacancyComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vacancy_r50 == null ? null : vacancy_r50.schedule);
} }
function NewVacancyComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NewVacancyComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", vacancy_r51 == null ? null : vacancy_r51.status, " ");
} }
function NewVacancyComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 35);
} }
function NewVacancyComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 35);
} }
function NewVacancyComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 35);
} }
function NewVacancyComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 35);
} }
const _c8 = function (a0) { return { "highlighted": a0 }; };
function NewVacancyComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewVacancyComponent_tr_42_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54); const vacancy_r52 = restoredCtx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r53.highlight(vacancy_r52)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r52 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c8, ctx_r27.selectedRowIndex == vacancy_r52.id));
} }
const _c9 = function () { return [10, 20, 30, 50]; };
class NewVacancyComponent {
    constructor(dialogRef, vacancyService, router) {
        // this.dataSource = new VacancyTableDataSource();
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
        this.getAllNewVacancies(0, 80);
    }
    //get all new vacancies
    getAllNewVacancies(start, limit) {
        this.vacancyService.getAllNewVacancies(start, limit).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.data = x['list']);
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
NewVacancyComponent.ɵfac = function NewVacancyComponent_Factory(t) { return new (t || NewVacancyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_3__.VacancyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
NewVacancyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NewVacancyComponent, selectors: [["vex-new-vacancy"]], viewQuery: function NewVacancyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 45, vars: 12, consts: [["mat-table", "", "matSort", "", "matSort", "", "matSortActive", "id", "matSortDirection", "desc", "cdkDropListGroup", "", 1, "full-width-table", "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "grouped"], ["mat-header-cell", "", "colspan", "10", 4, "matHeaderCellDef"], ["matColumnDef", "options"], ["matColumnDef", "edit"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", "class", "body", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "company"], ["mat-header-cell", "", "class", "body", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "vacancyName"], ["matColumnDef", "vacancyAddress"], ["matColumnDef", "deadLine"], ["matColumnDef", "category"], ["matColumnDef", "type"], ["mat-header-cell", "", "mat-sort-header", "", "class", " body", 4, "matHeaderCellDef"], ["matColumnDef", "probationaryPeriod"], ["matColumnDef", "schedule"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page", 1, "full-width-table", "body", 3, "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", "", "colspan", "10"], ["role", "button", 1, "button-7", 3, "click"], [3, "ngStyle"], [1, "buttonDisplay"], ["role", "button", 1, "button-7", 3, "routerLink"], ["role", "button", 1, "button-7", 3, "routerLink", "click"], ["appearance", "outline", 1, "filterClass"], ["matInput", "", "placeholder", "search", "autocomplete", "off", 3, "keyup"], ["role", "button", 1, "button-2", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "body"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"]], template: function NewVacancyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NewVacancyComponent_th_3_Template, 5, 2, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NewVacancyComponent_th_5_Template, 23, 12, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, NewVacancyComponent_th_7_Template, 37, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, NewVacancyComponent_th_9_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, NewVacancyComponent_td_10_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, NewVacancyComponent_th_12_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, NewVacancyComponent_td_13_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, NewVacancyComponent_th_15_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, NewVacancyComponent_td_16_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, NewVacancyComponent_th_18_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, NewVacancyComponent_td_19_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, NewVacancyComponent_th_21_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, NewVacancyComponent_td_22_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](23, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, NewVacancyComponent_th_24_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, NewVacancyComponent_td_25_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](26, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, NewVacancyComponent_th_27_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, NewVacancyComponent_td_28_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](29, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, NewVacancyComponent_th_30_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, NewVacancyComponent_td_31_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](32, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, NewVacancyComponent_th_33_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, NewVacancyComponent_td_34_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](35, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, NewVacancyComponent_th_36_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, NewVacancyComponent_td_37_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, NewVacancyComponent_tr_38_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, NewVacancyComponent_tr_39_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, NewVacancyComponent_tr_40_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, NewVacancyComponent_tr_41_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, NewVacancyComponent_tr_42_Template, 1, 3, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "mat-paginator", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c9));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, ngx_quicklink__WEBPACK_IMPORTED_MODULE_10__["ɵɵLinkDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctdmFjYW5jeS5jb21wb25lbnQuc2NzcyJ9 */", "span[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    color: black;\r\n    width: 100px;\r\n    height: 100px;\r\n    padding: 5px;\r\n}\r\n\r\n\r\n.body[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-size: 13px;\r\n\r\n}\r\n\r\n\r\n.mat-column-id[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 5% !important;\r\n    width: 5% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-vacancyName[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 5% !important;\r\n    width: 5% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-title[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 10% !important;\r\n    width: 10% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-vacancyAddress[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 8% !important;\r\n    width: 8% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.mat-column-category[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 10% !important;\r\n    width: 10% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-description[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 35% !important;\r\n    width: 35% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%] {\r\n    background-color: #1d5175;\r\n    border: 1px solid transparent;\r\n    border-radius: 3px;\r\n    box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: -apple-system, system-ui, \"Segoe UI\", \"Liberation Sans\", sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    line-height: 1.15385;\r\n    margin: 0;\r\n    outline: none;\r\n    padding: 8px .8em;\r\n    position: relative;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    -moz-user-select: none;\r\n         user-select: none;\r\n    -webkit-user-select: none;\r\n    touch-action: manipulation;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%]:hover, .button-7[_ngcontent-%COMP%]:focus {\r\n    background-color: #07c;\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%]:active {\r\n    background-color: #0064bd;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%] {\r\n    background-color: rgba(51, 51, 51, 0.05);\r\n    border-radius: 8px;\r\n    border-width: 0;\r\n    color: #333333;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: \"Haas Grot Text R Web\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 20px;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 10px 12px;\r\n    text-align: justify;\r\n    transition: all 200ms;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n    -moz-user-select: none;\r\n         user-select: none;\r\n    -webkit-user-select: none;\r\n    touch-action: manipulation;\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%]:hover, .button-2[_ngcontent-%COMP%]:focus {\r\n    background-color: rgb(139, 199, 241);\r\n\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 0 4px rgba(133, 194, 238, 0.15);\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%]:active {\r\n    background-color: #678fb6;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n\r\n.filterClass[_ngcontent-%COMP%] {\r\n    margin-left: 60%;\r\n}\r\n\r\n\r\n.highlighted[_ngcontent-%COMP%] {\r\n    background: #c1d9f1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy12YWNhbmN5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osZUFBZTs7QUFFbkI7OztBQUtBOztJQUVJLCtCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQU96QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7O0FBRUE7O0lBRUksK0JBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBS3pCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOzs7QUFFQTs7SUFFSSwrQkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFPekIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7OztBQUVBOztJQUVJLCtCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQU16QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7OztBQUVIOztJQUVJLCtCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQU96QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7O0FBRUE7O0lBRUksK0JBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBS3pCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG1EQUFtRDtJQUNuRCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0ZBQWdGO0lBQ2hGLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHNCQUFpQjtTQUFqQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTs7SUFFSSxzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7OztBQUtBO0lBQ0ksd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsbUZBQW1GO0lBQ25GLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixzQkFBaUI7U0FBakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7OztBQUVBOztJQUVJLG9DQUFvQzs7QUFFeEM7OztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixlQUFlOztBQUVuQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6Im5ldy12YWNhbmN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcblxyXG4uYm9keSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubWF0LWNvbHVtbi1pZCB7XHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA1JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXZhY2FuY3lOYW1lIHtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDUlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cclxuXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXRpdGxlIHtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi12YWNhbmN5QWRkcmVzcyB7XHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHJcblxyXG5cclxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLyogLm1hdC1jb2x1bW4tZGVhZExpbmUge1xyXG5cclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDEwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbn0gKi9cclxuXHJcbi5tYXQtY29sdW1uLWNhdGVnb3J5IHtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1kZXNjcmlwdGlvbiB7XHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMzUlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzUlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cclxuXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcblxyXG4uYnV0dG9uLTcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNTE3NTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNCkgMCAxcHggMCAwIGluc2V0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBcIkxpYmVyYXRpb24gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1Mzg1O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDhweCAuOGVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uYnV0dG9uLTc6aG92ZXIsXHJcbi5idXR0b24tNzpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdjO1xyXG59XHJcblxyXG4uYnV0dG9uLTc6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMCwgMTQ5LCAyNTUsIC4xNSk7XHJcbn1cclxuXHJcbi5idXR0b24tNzphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjRiZDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5idXR0b24tMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuMDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJIYWFzIEdyb3QgVGV4dCBSIFdlYlwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxufVxyXG5cclxuLmJ1dHRvbi0yOmhvdmVyLFxyXG4uYnV0dG9uLTI6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMTk5LCAyNDEpO1xyXG5cclxufVxyXG5cclxuLmJ1dHRvbi0yOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDEzMywgMTk0LCAyMzgsIDAuMTUpO1xyXG59XHJcblxyXG4uYnV0dG9uLTI6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzhmYjY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLmZpbHRlckNsYXNzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XHJcbn1cclxuXHJcbi5oaWdobGlnaHRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzFkOWYxO1xyXG59Il19 */"] });


/***/ }),

/***/ 8626:
/*!****************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/new-vacancy/new-vacancy.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewVacancyModule": () => (/* binding */ NewVacancyModule)
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
/* harmony import */ var _new_vacancy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-vacancy.component */ 3194);
/* harmony import */ var _vacancy_form_vacancy_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vacancy-form/vacancy-form.module */ 9182);
/* harmony import */ var _new_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-vacancy-routing.module */ 6569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






























class NewVacancyModule {
}
NewVacancyModule.ɵfac = function NewVacancyModule_Factory(t) { return new (t || NewVacancyModule)(); };
NewVacancyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NewVacancyModule });
NewVacancyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_LOCALE, useValue: 'en-GB' }, src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_0__.VacancyService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _new_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_3__.NewVacancyRoutingModule,
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
        _vacancy_form_vacancy_form_module__WEBPACK_IMPORTED_MODULE_2__.VacancyFormModule,
        angular_resizable_element__WEBPACK_IMPORTED_MODULE_25__.ResizableModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_26__.CdkTableModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__.ScrollingModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__.A11yModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NewVacancyModule, { declarations: [_new_vacancy_component__WEBPACK_IMPORTED_MODULE_1__.NewVacancyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _new_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_3__.NewVacancyRoutingModule,
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
        _vacancy_form_vacancy_form_module__WEBPACK_IMPORTED_MODULE_2__.VacancyFormModule,
        angular_resizable_element__WEBPACK_IMPORTED_MODULE_25__.ResizableModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_26__.CdkTableModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__.ScrollingModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__.A11yModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_external-vacancies_new-vacancy_new-vacancy_module_ts.js.map