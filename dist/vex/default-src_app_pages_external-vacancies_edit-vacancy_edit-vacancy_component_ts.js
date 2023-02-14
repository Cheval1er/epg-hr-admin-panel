"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_pages_external-vacancies_edit-vacancy_edit-vacancy_component_ts"],{

/***/ 1273:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/edit-vacancy/edit-applicant/edit-applicant.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditApplicantComponent": () => (/* binding */ EditApplicantComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_applicant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/applicant.service */ 173);
/* harmony import */ var src_app_services_download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/download.service */ 8273);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 5892);





















function EditApplicantComponent_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r109 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", gender_r109.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", gender_r109.name, " ");
} }
function EditApplicantComponent_mat_option_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wanted_r110 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", wanted_r110.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", wanted_r110.name, " ");
} }
function EditApplicantComponent_mat_option_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const schedule_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", schedule_r111.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", schedule_r111.name, " ");
} }
function EditApplicantComponent_mat_option_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const connection_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", connection_r112.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", connection_r112.name, " ");
} }
function EditApplicantComponent_th_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const educationData_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", educationData_r113 == null ? null : educationData_r113.id, " ");
} }
function EditApplicantComponent_th_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " University ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const educationData_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", educationData_r114 == null ? null : educationData_r114.universityName, " ");
} }
function EditApplicantComponent_th_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Profession ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const educationData_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", educationData_r115 == null ? null : educationData_r115.proffesion, " ");
} }
function EditApplicantComponent_th_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Sphere ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const educationData_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", educationData_r116 == null ? null : educationData_r116.sphereName, " ");
} }
function EditApplicantComponent_th_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Quality ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const educationData_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", educationData_r117 == null ? null : educationData_r117.qualityName, " ");
} }
function EditApplicantComponent_th_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " From ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const educationData_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", educationData_r118 == null ? null : educationData_r118.learningfrom, " ");
} }
function EditApplicantComponent_th_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const educationData_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", educationData_r119 == null ? null : educationData_r119.learningTo, " ");
} }
function EditApplicantComponent_th_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Other University ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const educationData_r120 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", educationData_r120 == null ? null : educationData_r120.otherUniversity, " ");
} }
function EditApplicantComponent_th_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const educationData_r121 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", educationData_r121 == null ? null : educationData_r121.description, " ");
} }
function EditApplicantComponent_tr_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 85);
} }
function EditApplicantComponent_tr_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 86);
} }
function EditApplicantComponent_th_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trainingData_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", trainingData_r123 == null ? null : trainingData_r123.id, " ");
} }
function EditApplicantComponent_th_185_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Training Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trainingData_r124 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", trainingData_r124 == null ? null : trainingData_r124.traning, " ");
} }
function EditApplicantComponent_th_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Training Place ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trainingData_r125 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", trainingData_r125 == null ? null : trainingData_r125.trainingPlace, " ");
} }
function EditApplicantComponent_th_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Training Company ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trainingData_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", trainingData_r126 == null ? null : trainingData_r126.trainingCompany, " ");
} }
function EditApplicantComponent_th_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " From ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trainingData_r127 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", trainingData_r127 == null ? null : trainingData_r127.trainingPeriodFrom, " ");
} }
function EditApplicantComponent_th_197_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_198_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trainingData_r128 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", trainingData_r128 == null ? null : trainingData_r128.trainingPeriodTo, " ");
} }
function EditApplicantComponent_th_200_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " trainingDesc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_201_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trainingData_r129 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", trainingData_r129 == null ? null : trainingData_r129.description, " ");
} }
function EditApplicantComponent_tr_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 85);
} }
function EditApplicantComponent_tr_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 86);
} }
function EditApplicantComponent_th_215_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_216_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experienceData_r131 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", experienceData_r131 == null ? null : experienceData_r131.id, " ");
} }
function EditApplicantComponent_th_218_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Company ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_219_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experienceData_r132 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", experienceData_r132 == null ? null : experienceData_r132.company, " ");
} }
function EditApplicantComponent_th_221_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_222_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experienceData_r133 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", experienceData_r133 == null ? null : experienceData_r133.position, " ");
} }
function EditApplicantComponent_th_224_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Place ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experienceData_r134 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", experienceData_r134 == null ? null : experienceData_r134.place, " ");
} }
function EditApplicantComponent_th_227_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_228_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experienceData_r135 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", experienceData_r135 == null ? null : experienceData_r135.categoryName, " ");
} }
function EditApplicantComponent_th_230_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_231_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experienceData_r136 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", experienceData_r136 == null ? null : experienceData_r136.levelName, " ");
} }
function EditApplicantComponent_th_233_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " From ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_234_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experienceData_r137 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", experienceData_r137 == null ? null : experienceData_r137.periodFrom, " ");
} }
function EditApplicantComponent_th_236_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_237_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experienceData_r138 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", experienceData_r138 == null ? null : experienceData_r138.periodTo, " ");
} }
function EditApplicantComponent_th_239_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Reason ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_240_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experienceData_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", experienceData_r139 == null ? null : experienceData_r139.reason, " ");
} }
function EditApplicantComponent_th_242_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Salary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_243_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experienceData_r140 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", experienceData_r140 == null ? null : experienceData_r140.salary, " ");
} }
function EditApplicantComponent_th_245_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_246_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experienceData_r141 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", experienceData_r141 == null ? null : experienceData_r141.workDesc, " ");
} }
function EditApplicantComponent_tr_247_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 85);
} }
function EditApplicantComponent_tr_248_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 86);
} }
function EditApplicantComponent_th_260_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_261_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const languageData_r143 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", languageData_r143 == null ? null : languageData_r143.id, " ");
} }
function EditApplicantComponent_th_263_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Language ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const languageData_r144 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", languageData_r144 == null ? null : languageData_r144.languageName, " ");
} }
function EditApplicantComponent_th_266_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_267_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const languageData_r145 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", languageData_r145 == null ? null : languageData_r145.levelName, " ");
} }
function EditApplicantComponent_th_269_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_270_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const languageData_r146 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](languageData_r146 == null ? null : languageData_r146.otherLanguage);
} }
function EditApplicantComponent_tr_271_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 85);
} }
function EditApplicantComponent_tr_272_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 86);
} }
function EditApplicantComponent_th_284_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_285_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const programData_r148 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", programData_r148 == null ? null : programData_r148.id, " ");
} }
function EditApplicantComponent_th_287_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Program ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_288_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const programData_r149 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", programData_r149 == null ? null : programData_r149.programName, " ");
} }
function EditApplicantComponent_th_290_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_291_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const programData_r150 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", programData_r150 == null ? null : programData_r150.levelName, " ");
} }
function EditApplicantComponent_th_293_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_294_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const programData_r151 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", programData_r151 == null ? null : programData_r151.otherProgram, " ");
} }
function EditApplicantComponent_tr_295_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 85);
} }
function EditApplicantComponent_tr_296_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 86);
} }
function EditApplicantComponent_th_308_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_309_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skillData_r153 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", skillData_r153 == null ? null : skillData_r153.id, " ");
} }
function EditApplicantComponent_th_311_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Skill ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_312_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skillData_r154 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", skillData_r154 == null ? null : skillData_r154.skillName, " ");
} }
function EditApplicantComponent_th_314_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_315_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skillData_r155 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", skillData_r155 == null ? null : skillData_r155.levelName, " ");
} }
function EditApplicantComponent_th_317_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_318_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skillData_r156 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", skillData_r156 == null ? null : skillData_r156.otherSkill, " ");
} }
function EditApplicantComponent_tr_319_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 85);
} }
function EditApplicantComponent_tr_320_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 86);
} }
function EditApplicantComponent_th_332_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_333_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const departmentData_r158 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", departmentData_r158 == null ? null : departmentData_r158.id, " ");
} }
function EditApplicantComponent_th_335_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_336_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const departmentData_r159 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", departmentData_r159 == null ? null : departmentData_r159.departmentName, " ");
} }
function EditApplicantComponent_tr_337_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 85);
} }
function EditApplicantComponent_tr_338_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 86);
} }
function EditApplicantComponent_th_350_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_351_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicantData_r161 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", applicantData_r161 == null ? null : applicantData_r161.vacancyId, " ");
} }
function EditApplicantComponent_th_353_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Vacancy Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_354_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fileData_r162 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", fileData_r162 == null ? null : fileData_r162.vacancyName, " ");
} }
function EditApplicantComponent_th_356_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Apply Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditApplicantComponent_td_357_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fileData_r163 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", fileData_r163 == null ? null : fileData_r163.applyDate, " ");
} }
function EditApplicantComponent_tr_358_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 85);
} }
function EditApplicantComponent_tr_359_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 86);
} }
const MIME_TYPES = {
    pdf: 'application/pdf',
    png: 'image/png',
    jpg: 'image/jpeg',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    doc: 'application/msword',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    xls: 'application/vnd.ms-excel'
};
class EditApplicantComponent {
    constructor(formBuilder, router, dialogRef, httpClient, datePipe, applicantService, downloadService, dialog, editDataApplicant) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.dialogRef = dialogRef;
        this.httpClient = httpClient;
        this.datePipe = datePipe;
        this.applicantService = applicantService;
        this.downloadService = downloadService;
        this.dialog = dialog;
        this.editDataApplicant = editDataApplicant;
        this.displayedColumnsEdu = ['id', 'university', 'profession', 'sphere', 'quality',
            'from', 'to', 'otherUniversity', 'description'];
        this.displayedColumnsTrain = ['id', 'trainingName', 'trainingPlace', 'trainingCompany', 'from', 'to', 'trainingDesc'];
        this.displayedColumnsExperience = ['id', 'company', 'position', 'place', 'category', 'level', 'from', 'to', 'reason', 'salary', 'description'];
        this.displayedColumnsLanguage = ['id', 'language', 'level', 'otherLanguage'];
        this.displayedColumnsProgram = ['id', 'program', 'level', 'otherProgram'];
        this.displayedColumnsSkill = ['id', 'skill', 'level', 'otherSkill'];
        this.displayedColumnsDepartment = ['id', 'department'];
        // displayedColumnsFile = ['fileName', 'fileRecord', 'fileFormat', 'download'];
        this.displayedColumnsApplicant = ['id', 'vacancyName', 'createDate'];
        this.dataSourceApplicant = [];
        this.DownloadFiles = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + '/VacancyAdmin/applicant/file/download?id=';
        this.selectedRowIndexAppFile = -1;
    }
    ngOnInit() {
        this.applicantForm = this.formBuilder.group({
            id: this.editDataApplicant.id,
            objectId: this.editDataApplicant.objectId,
            applicantId: this.editDataApplicant.applicantId,
            name: [this.editDataApplicant.fname],
            LName: [this.editDataApplicant.lname],
            customerNumber: [this.editDataApplicant.customerNumber],
            birthDate: [this.editDataApplicant.birthDate],
            gender: [this.editDataApplicant.genderId],
            registrationCountry: [this.editDataApplicant.registrationCountry],
            registrationCity: [this.editDataApplicant.registrationCity],
            registrationAddress: [this.editDataApplicant.registrationAddress],
            country: [this.editDataApplicant.country],
            city: [this.editDataApplicant.city],
            address: [this.editDataApplicant.address],
            mail: [this.editDataApplicant.mail],
            phone: [this.editDataApplicant.phone],
            additionalphone: [this.editDataApplicant.additionalphone],
            cityzen: [this.editDataApplicant.cityzen],
            workStart: [this.editDataApplicant.workStart],
            wontedType: [this.editDataApplicant.wantedTypeId],
            workSchedule: [this.editDataApplicant.workSheduleId],
            wontedPosition: [this.editDataApplicant.wantedPosition],
            workPlace: [this.editDataApplicant.workPlace],
            wontedSalary: [this.editDataApplicant.wantedSalary],
            connectionId: [this.editDataApplicant.connectionId],
            relativityName: [this.editDataApplicant.relativityName],
            relativityPosition: [this.editDataApplicant.relativityPosition],
            relativityPlaceWork: [this.editDataApplicant.relativityPlaceWork],
            relativityMobile: [this.editDataApplicant.relativityMobile],
            createDate: [this.editDataApplicant.createDate],
            createUser: [this.editDataApplicant.createUser]
        });
        if (this.editDataApplicant) {
            this.applicantForm.controls['id'].setValue(this.editDataApplicant.id);
            this.applicantForm.controls['objectId'].setValue(this.editDataApplicant.objectId);
            this.applicantForm.controls['applicantId'].setValue(this.editDataApplicant.applicantId);
            this.applicantForm.controls['name'].setValue(this.editDataApplicant.fname);
            this.applicantForm.controls['LName'].setValue(this.editDataApplicant.lname);
            this.applicantForm.controls['wontedType'].setValue(this.editDataApplicant.wantedTypeId);
        }
        // this.geteditApplicant(1, 0, 25);
        this.getGenders();
        this.getWantedType();
        this.getGraphicType();
        this.getConnection();
        this.getApplicantEdu(1, 0, 25);
        this.getEducation();
        this.getApplicantTrain(1, 0, 25);
        this.getExperience();
        this.getApplicantExperience(1, 0, 25);
        this.getLanguages();
        this.getUniversity();
        this.getApplicantLanguage(1, 0, 25);
        this.getLangLevel();
        this.getApplicantProgram(1, 0, 25);
        this.getProgram();
        this.getProgramLevel();
        this.getSkill();
        this.getApplicantSkill(1, 0, 25);
        this.getApplicantDepartment(1, 0, 25);
        this.getApplicantFile(1, 0, 25);
        this.getApplicantsVacancies(1, 0, 25);
        console.log(this.DownloadFiles);
    }
    download(id) {
        const EXT = this.selectedRowAppFile.fileName.substring(this.selectedRowAppFile.fileName.lastIndexOf('.') + 1);
        this.downloadService.downloadFile({ 'id': id }).subscribe(fileData => file_saver__WEBPACK_IMPORTED_MODULE_0___default()(new Blob([fileData], { type: MIME_TYPES[EXT] }), this.selectedRowAppFile.fileName));
    }
    highlightApp(applicantsFile) {
        this.selectedRowAppFile = applicantsFile;
        this.selectedRowIndexAppFile = applicantsFile.id;
        console.log(applicantsFile);
    }
    ;
    closeForm() {
        this.dialogRef.close();
    }
    // applicants
    geteditApplicant(page, start, limit) {
        this.applicantService.editApplicant(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dataSourceApplicant = x['list']);
            // console.log(x['list'])
            console.log(this.dataSourceApplicant);
        }),
            (error) => {
                alert(error.message);
            };
    }
    getApplicantsVacancies(page, start, limit) {
        this.applicantService.applicantsVacancies(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dataSourceApplicant = x['list']);
            // console.log(x['list'])
            console.log(this.dataSourceApplicant);
        }),
            (error) => {
                alert(error.message);
            };
    }
    //applicant language
    getApplicantLanguage(page, start, limit) {
        this.applicantService.applicantLanguage(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dataSourceApplicantLanguage = x['list']);
            // console.log(x['list'])
            console.log(this.dataSourceApplicantLanguage);
        }),
            (error) => {
                alert(error.message);
            };
    }
    //applicant experience
    getApplicantExperience(page, start, limit) {
        this.applicantService.applicantExperience(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dataSourceApplicantExperience = x['list']);
            console.log(x['list']);
            console.log(this.dataSourceApplicantExperience);
        }),
            (error) => {
                alert(error.message);
            };
    }
    //applicant skill
    getApplicantSkill(page, start, limit) {
        this.applicantService.applicantSkill(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dataSourceApplicantSkill = x['list']);
            // console.log(x['list'])
            console.log(this.dataSourceApplicantSkill);
        }),
            (error) => {
                alert(error.message);
            };
    }
    //applicant department
    getApplicantDepartment(page, start, limit) {
        this.applicantService.applicantDepartment(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dataSourceApplicantDepartment = x['list']);
            // console.log(x['list'])
            console.log(this.dataSourceApplicantDepartment);
        }),
            (error) => {
                alert(error.message);
            };
    }
    //applicant program
    getApplicantProgram(page, start, limit) {
        this.applicantService.applicantProgram(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dataSourceApplicantProgram = x['list']);
            // console.log(x['list'])
            console.log(this.dataSourceApplicantProgram);
        }),
            (error) => {
                alert(error.message);
            };
    }
    //applicant education
    getApplicantEdu(page, start, limit) {
        this.applicantService.applicantEdu(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dataSourceApplicantEdu = x['list']);
            // console.log(x['list'])
            console.log(this.dataSourceApplicantEdu);
        }),
            (error) => {
                alert(error.message);
            };
    }
    //applicant training
    getApplicantTrain(page, start, limit) {
        this.applicantService.applicantTrain(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dataSourceApplicantTrain = x['list']);
            // console.log(x['list'])
            console.log(this.dataSourceApplicantTrain);
        }),
            (error) => {
                alert(error.message);
            };
    }
    //applicant file
    getApplicantFile(page, start, limit) {
        this.applicantService.applicantFile(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dataSourceApplicantFile = x['list']);
            // console.log(x['list'])
            console.log(this.dataSourceApplicantFile);
        }),
            (error) => {
                alert(error.message);
            };
    }
    getEducation() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.educationLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.dataEducation = response['list'];
        });
    }
    getSkill() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.skill&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.dataSkill = response['list'];
        });
    }
    refreshButton() {
        this.ngOnInit();
    }
    getExperience() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.experienceLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25')
            .subscribe(response => {
            console.log(response);
            this.dataExperience = response['list'];
        });
    }
    ;
    getProgramLevel() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.programLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25')
            .subscribe(response => {
            console.log(response);
            this.dataProgram = response['list'];
        });
    }
    saveEditApplicant() {
        // this.applicantService.editApplicant(this.editDataApplicant.applicantId, this.applicantForm.value).subscribe((result) => {
        //   console.log(result);
        // })
    }
    getGenders() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.gender&includeKeys=&excludeKeys=&page=1&start=0&limit=25')
            .subscribe(response => {
            console.log(response);
            this.dataGender = response['list'];
        });
    }
    ;
    getWantedType() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.work&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.wantedType = response['list'];
        });
    }
    ;
    getGraphicType() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.grafic&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.graphicType = response['list'];
        });
    }
    ;
    getConnection() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.relative&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.connection = response['list'];
        });
    }
    getLanguages() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.language&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.dataLanguage = response['list'];
        });
    }
    getProgram() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.program&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.programList = response['list'];
        });
    }
    getUniversity() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.university&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.dataUniversity = response['list'];
        });
    }
    getLangLevel() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.languageLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.dataLangLevel = response['list'];
        });
    }
}
EditApplicantComponent.ɵfac = function EditApplicantComponent_Factory(t) { return new (t || EditApplicantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_applicant_service__WEBPACK_IMPORTED_MODULE_2__.ApplicantService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_download_service__WEBPACK_IMPORTED_MODULE_3__.DownloadService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA)); };
EditApplicantComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EditApplicantComponent, selectors: [["vex-edit-applicant"]], decls: 362, vars: 39, consts: [["mat-dialog-title", ""], ["label", "General Information"], [1, "form-container", 3, "formGroup"], [1, "flex", "flex-col", "sm:flex-row", "sm:gap-8"], ["appearance", "outline", 2, "font-size", "12px", "width", "10%"], ["formControlName", "name", "matInput", ""], ["formControlName", "LName", "matInput", ""], ["formControlName", "customerNumber", "matInput", ""], ["formControlName", "birthDate", "matInput", ""], ["formControlName", "gender"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 2, "font-size", "12px", "width", "15%"], ["formControlName", "registrationCountry", "matInput", ""], ["formControlName", "registrationCity", "matInput", ""], ["formControlName", "registrationAddress", "matInput", ""], ["formControlName", "country", "matInput", ""], ["formControlName", "city", "matInput", ""], ["formControlName", "address", "matInput", ""], ["formControlName", "mail", "matInput", ""], ["formControlName", "phone", "matInput", ""], ["formControlName", "additionalphone", "matInput", ""], ["formControlName", "cityzen", "matInput", ""], ["formControlName", "workStart", "matInput", ""], ["formControlName", "wontedType"], ["formControlName", "workSchedule"], ["formControlName", "wontedPosition", "matInput", ""], ["formControlName", "workPlace", "matInput", ""], ["formControlName", "wontedSalary", "matInput", ""], ["formControlName", "connectionId"], ["formControlName", "relativityName", "matInput", ""], ["formControlName", "relativityPosition", "matInput", ""], ["formControlName", "relativityPlaceWork", "matInput", ""], ["formControlName", "relativityMobile", "matInput", ""], ["formControlName", "createDate", "matInput", ""], ["datepickerRefa", ""], ["formControlName", "createUser", "matInput", ""], ["role", "button", 1, "button-7", "displayEnd", 3, "click"], ["label", " Education"], [1, "buttonDisplay"], ["role", "button", 1, "button-2", 3, "click"], ["mat-table", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "class", "body", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "university"], ["matColumnDef", "profession"], ["matColumnDef", "sphere"], ["matColumnDef", "quality"], ["matColumnDef", "from"], ["matColumnDef", "to"], ["matColumnDef", "otherUniversity"], ["matColumnDef", "description"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", " Training"], ["matColumnDef", "trainingName"], ["matColumnDef", "trainingPlace"], ["matColumnDef", "trainingCompany"], ["matColumnDef", "trainingDesc"], ["label", " Experience"], ["matColumnDef", "company"], ["matColumnDef", "position"], ["matColumnDef", "place"], ["matColumnDef", "category"], ["matColumnDef", "level"], ["matColumnDef", "reason"], ["matColumnDef", "salary"], ["label", " Language"], ["matColumnDef", "language"], ["matColumnDef", "otherLanguage"], ["label", " Program"], ["matColumnDef", "program"], ["matColumnDef", "otherProgram"], ["label", " Skill"], ["matColumnDef", "skill"], ["matColumnDef", "otherSkill"], ["label", " Department"], ["matColumnDef", "department"], ["label", "Vacancies of Applicant"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "vacancyName"], ["matColumnDef", "createDate"], [3, "value"], ["mat-header-cell", "", 1, "body"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function EditApplicantComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-tab-group")(3, "mat-tab", 1)(4, "form", 2)(5, "mat-card")(6, "mat-card-content")(7, "div", 3)(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " LName: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Customer Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Birth Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-form-field", 4)(27, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, EditApplicantComponent_mat_option_28_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 3)(30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Registration Country: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Registration City: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Registration Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 3)(43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " Country: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " City: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 3)(56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, " Mail: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, " Mobile: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, " Additional phone: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, " Citizen: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " Work Start: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 3)(77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Wanted Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "mat-form-field", 4)(80, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](81, EditApplicantComponent_mat_option_81_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Wark Schedule:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "mat-form-field", 11)(85, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, EditApplicantComponent_mat_option_86_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, " Wanted Position: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, " Work Place: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, " Wanted Salary: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](98, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 3)(100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Connection:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "mat-form-field", 4)(103, "mat-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](104, EditApplicantComponent_mat_option_104_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, " Relativity Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](108, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, " Relativity Position: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, " Relativity PlaceWork: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](116, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "div", 3)(118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, " Relativity Mobile: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](121, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, " Create Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](125, "input", 33)(126, "mat-datepicker", null, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, " Create User: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](131, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_132_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "mat-tab", 37)(135, "div", 38)(136, "span")(137, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_137_listener() { return ctx.refreshButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, "cached");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "table", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](142, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](143, EditApplicantComponent_th_143_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](144, EditApplicantComponent_td_144_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](145, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](146, EditApplicantComponent_th_146_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](147, EditApplicantComponent_td_147_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](148, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](149, EditApplicantComponent_th_149_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](150, EditApplicantComponent_td_150_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](151, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](152, EditApplicantComponent_th_152_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](153, EditApplicantComponent_td_153_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](154, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](155, EditApplicantComponent_th_155_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](156, EditApplicantComponent_td_156_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](157, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](158, EditApplicantComponent_th_158_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](159, EditApplicantComponent_td_159_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](160, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](161, EditApplicantComponent_th_161_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](162, EditApplicantComponent_td_162_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](163, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](164, EditApplicantComponent_th_164_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](165, EditApplicantComponent_td_165_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](166, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](167, EditApplicantComponent_th_167_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](168, EditApplicantComponent_td_168_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](169, EditApplicantComponent_tr_169_Template, 1, 0, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](170, EditApplicantComponent_tr_170_Template, 1, 0, "tr", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_171_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "mat-tab", 54)(174, "div", 38)(175, "span")(176, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_176_listener() { return ctx.refreshButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, "cached");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](179, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "table", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](181, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](182, EditApplicantComponent_th_182_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](183, EditApplicantComponent_td_183_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](184, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](185, EditApplicantComponent_th_185_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](186, EditApplicantComponent_td_186_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](187, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](188, EditApplicantComponent_th_188_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](189, EditApplicantComponent_td_189_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](190, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](191, EditApplicantComponent_th_191_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](192, EditApplicantComponent_td_192_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](193, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](194, EditApplicantComponent_th_194_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](195, EditApplicantComponent_td_195_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](196, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](197, EditApplicantComponent_th_197_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](198, EditApplicantComponent_td_198_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](199, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](200, EditApplicantComponent_th_200_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](201, EditApplicantComponent_td_201_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](202, EditApplicantComponent_tr_202_Template, 1, 0, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](203, EditApplicantComponent_tr_203_Template, 1, 0, "tr", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](204, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_204_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](205, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "mat-tab", 59)(207, "div", 38)(208, "span")(209, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_209_listener() { return ctx.refreshButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](210, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](211, "cached");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](213, "table", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](214, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](215, EditApplicantComponent_th_215_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](216, EditApplicantComponent_td_216_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](217, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](218, EditApplicantComponent_th_218_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](219, EditApplicantComponent_td_219_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](220, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](221, EditApplicantComponent_th_221_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](222, EditApplicantComponent_td_222_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](223, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](224, EditApplicantComponent_th_224_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](225, EditApplicantComponent_td_225_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](226, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](227, EditApplicantComponent_th_227_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](228, EditApplicantComponent_td_228_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](229, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](230, EditApplicantComponent_th_230_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](231, EditApplicantComponent_td_231_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](232, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](233, EditApplicantComponent_th_233_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](234, EditApplicantComponent_td_234_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](235, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](236, EditApplicantComponent_th_236_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](237, EditApplicantComponent_td_237_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](238, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](239, EditApplicantComponent_th_239_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](240, EditApplicantComponent_td_240_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](241, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](242, EditApplicantComponent_th_242_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](243, EditApplicantComponent_td_243_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](244, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](245, EditApplicantComponent_th_245_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](246, EditApplicantComponent_td_246_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](247, EditApplicantComponent_tr_247_Template, 1, 0, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](248, EditApplicantComponent_tr_248_Template, 1, 0, "tr", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](249, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_249_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](250, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](251, "mat-tab", 67)(252, "div", 38)(253, "span")(254, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_254_listener() { return ctx.refreshButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](255, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](256, "cached");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](257, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](258, "table", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](259, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](260, EditApplicantComponent_th_260_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](261, EditApplicantComponent_td_261_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](262, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](263, EditApplicantComponent_th_263_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](264, EditApplicantComponent_td_264_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](265, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](266, EditApplicantComponent_th_266_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](267, EditApplicantComponent_td_267_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](268, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](269, EditApplicantComponent_th_269_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](270, EditApplicantComponent_td_270_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](271, EditApplicantComponent_tr_271_Template, 1, 0, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](272, EditApplicantComponent_tr_272_Template, 1, 0, "tr", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_273_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](274, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](275, "mat-tab", 70)(276, "div", 38)(277, "span")(278, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_278_listener() { return ctx.refreshButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](279, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](280, "cached");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](281, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](282, "table", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](283, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](284, EditApplicantComponent_th_284_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](285, EditApplicantComponent_td_285_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](286, 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](287, EditApplicantComponent_th_287_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](288, EditApplicantComponent_td_288_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](289, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](290, EditApplicantComponent_th_290_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](291, EditApplicantComponent_td_291_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](292, 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](293, EditApplicantComponent_th_293_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](294, EditApplicantComponent_td_294_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](295, EditApplicantComponent_tr_295_Template, 1, 0, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](296, EditApplicantComponent_tr_296_Template, 1, 0, "tr", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](297, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_297_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](298, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](299, "mat-tab", 73)(300, "div", 38)(301, "span")(302, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_302_listener() { return ctx.refreshButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](303, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](304, "cached");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](305, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](306, "table", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](307, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](308, EditApplicantComponent_th_308_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](309, EditApplicantComponent_td_309_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](310, 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](311, EditApplicantComponent_th_311_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](312, EditApplicantComponent_td_312_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](313, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](314, EditApplicantComponent_th_314_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](315, EditApplicantComponent_td_315_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](316, 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](317, EditApplicantComponent_th_317_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](318, EditApplicantComponent_td_318_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](319, EditApplicantComponent_tr_319_Template, 1, 0, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](320, EditApplicantComponent_tr_320_Template, 1, 0, "tr", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](321, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_321_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](322, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](323, "mat-tab", 76)(324, "div", 38)(325, "span")(326, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_326_listener() { return ctx.refreshButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](327, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](328, "cached");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](329, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](330, "table", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](331, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](332, EditApplicantComponent_th_332_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](333, EditApplicantComponent_td_333_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](334, 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](335, EditApplicantComponent_th_335_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](336, EditApplicantComponent_td_336_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](337, EditApplicantComponent_tr_337_Template, 1, 0, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](338, EditApplicantComponent_tr_338_Template, 1, 0, "tr", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](339, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_339_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](340, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](341, "mat-tab", 78)(342, "div", 38)(343, "span")(344, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_344_listener() { return ctx.refreshButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](345, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](346, "cached");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](347, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](348, "table", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](349, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](350, EditApplicantComponent_th_350_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](351, EditApplicantComponent_td_351_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](352, 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](353, EditApplicantComponent_th_353_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](354, EditApplicantComponent_td_354_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](355, 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](356, EditApplicantComponent_th_356_Template, 2, 0, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](357, EditApplicantComponent_td_357_Template, 2, 1, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](358, EditApplicantComponent_tr_358_Template, 1, 0, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](359, EditApplicantComponent_tr_359_Template, 1, 0, "tr", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](360, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditApplicantComponent_Template_button_click_360_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](361, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.editDataApplicant.fname, " ", ctx.editDataApplicant.lname, " Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.applicantForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataGender);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.wantedType);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.graphicType);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.connection);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSourceApplicantEdu);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsEdu)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsEdu);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSourceApplicantTrain);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsTrain)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsTrain);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSourceApplicantExperience);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsExperience)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsExperience);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSourceApplicantLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsLanguage)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSourceApplicantProgram);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsProgram)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsProgram);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSourceApplicantSkill);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsSkill)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsSkill);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSourceApplicantDepartment);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsDepartment)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsDepartment);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSourceApplicant);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsApplicant)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsApplicant);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogTitle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTab], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWFwcGxpY2FudC5jb21wb25lbnQuc2NzcyJ9 */", ".body[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-size: 13px;\r\n\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    color: black;\r\n    width: 100px;\r\n    height: 100px;\r\n    padding: 5px;\r\n}\r\n\r\n.full-width-table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-column-id[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 5% !important;\r\n    width: 5% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n.mat-column-description[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 35% !important;\r\n    width: 35% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n.mat-column-otherUniversity[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 5% !important;\r\n    width: 5% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n.button-2[_ngcontent-%COMP%] {\r\n    background-color: rgba(51, 51, 51, 0.05);\r\n    border-radius: 8px;\r\n    border-width: 0;\r\n    color: #333333;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: \"Haas Grot Text R Web\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 20px;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 10px 12px;\r\n    text-align: justify;\r\n    transition: all 200ms;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n    -moz-user-select: none;\r\n         user-select: none;\r\n    -webkit-user-select: none;\r\n    touch-action: manipulation;\r\n}\r\n\r\n.button-2[_ngcontent-%COMP%]:hover, .button-2[_ngcontent-%COMP%]:focus {\r\n    background-color: rgb(139, 199, 241);\r\n\r\n}\r\n\r\n.button-2[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 0 4px rgba(133, 194, 238, 0.15);\r\n}\r\n\r\n.button-2[_ngcontent-%COMP%]:active {\r\n    background-color: #678fb6;\r\n    box-shadow: none;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n.button-7[_ngcontent-%COMP%] {\r\n    background-color: #1d5175;\r\n    border: 1px solid transparent;\r\n    border-radius: 3px;\r\n    box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: -apple-system, system-ui, \"Segoe UI\", \"Liberation Sans\", sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    line-height: 1.15385;\r\n    margin: 0;\r\n    outline: none;\r\n    padding: 8px .8em;\r\n    position: relative;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    -moz-user-select: none;\r\n         user-select: none;\r\n    -webkit-user-select: none;\r\n    touch-action: manipulation;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n}\r\n\r\n.button-7[_ngcontent-%COMP%]:hover, .button-7[_ngcontent-%COMP%]:focus {\r\n    background-color: #07c;\r\n}\r\n\r\n.button-7[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);\r\n}\r\n\r\n.button-7[_ngcontent-%COMP%]:active {\r\n    background-color: #0064bd;\r\n    box-shadow: none;\r\n}\r\n\r\n.displayEnd[_ngcontent-%COMP%] {\r\n    margin-top: 200px;\r\n    margin-left: 1200px;\r\n}\r\n\r\n.button-7[_ngcontent-%COMP%] {\r\n    background-color: #1d5175;\r\n    border: 1px solid transparent;\r\n    border-radius: 3px;\r\n    box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: -apple-system, system-ui, \"Segoe UI\", \"Liberation Sans\", sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    line-height: 1.15385;\r\n    margin: 0;\r\n    outline: none;\r\n    padding: 8px .8em;\r\n    position: relative;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    -moz-user-select: none;\r\n         user-select: none;\r\n    -webkit-user-select: none;\r\n    touch-action: manipulation;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n}\r\n\r\n.button-7[_ngcontent-%COMP%]:hover, .button-7[_ngcontent-%COMP%]:focus {\r\n    background-color: #07c;\r\n}\r\n\r\n.button-7[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);\r\n}\r\n\r\n.button-7[_ngcontent-%COMP%]:active {\r\n    background-color: #0064bd;\r\n    box-shadow: none;\r\n}\r\n\r\n.displayEnd[_ngcontent-%COMP%] {\r\n    margin-top: 500px;\r\n    margin-left: 1200px;\r\n}\r\n\r\n.highlighted[_ngcontent-%COMP%] {\r\n    background: #c1d9f1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYXBwbGljYW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSwrQkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFPekIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksK0JBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBS3pCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLCtCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUt6QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1GQUFtRjtJQUNuRixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsc0JBQWlCO1NBQWpCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLG9DQUFvQzs7QUFFeEM7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixlQUFlOztBQUVuQjs7QUFLQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG1EQUFtRDtJQUNuRCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0ZBQWdGO0lBQ2hGLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHNCQUFpQjtTQUFqQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsbURBQW1EO0lBQ25ELHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnRkFBZ0Y7SUFDaEYsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsU0FBUztJQUNULGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQWlCO1NBQWpCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiZWRpdC1hcHBsaWNhbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgtdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWlkIHtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDUlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZGVzY3JpcHRpb24ge1xyXG5cclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDM1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHJcblxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1vdGhlclVuaXZlcnNpdHkge1xyXG5cclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDUlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNSUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG5cclxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbi0yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhhYXMgR3JvdCBUZXh0IFIgV2ViXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG59XHJcblxyXG4uYnV0dG9uLTI6aG92ZXIsXHJcbi5idXR0b24tMjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAxOTksIDI0MSk7XHJcblxyXG59XHJcblxyXG4uYnV0dG9uLTI6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMTMzLCAxOTQsIDIzOCwgMC4xNSk7XHJcbn1cclxuXHJcbi5idXR0b24tMjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3OGZiNjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4uYnV0dG9uLTcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNTE3NTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNCkgMCAxcHggMCAwIGluc2V0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBcIkxpYmVyYXRpb24gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1Mzg1O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDhweCAuOGVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uYnV0dG9uLTc6aG92ZXIsXHJcbi5idXR0b24tNzpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdjO1xyXG59XHJcblxyXG4uYnV0dG9uLTc6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMCwgMTQ5LCAyNTUsIC4xNSk7XHJcbn1cclxuXHJcbi5idXR0b24tNzphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjRiZDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5kaXNwbGF5RW5kIHtcclxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyMDBweDtcclxufVxyXG5cclxuLmJ1dHRvbi03IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDUxNzU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjQpIDAgMXB4IDAgMCBpbnNldDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgXCJMaWJlcmF0aW9uIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xNTM4NTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA4cHggLjhlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmJ1dHRvbi03OmhvdmVyLFxyXG4uYnV0dG9uLTc6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3YztcclxufVxyXG5cclxuLmJ1dHRvbi03OmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDAsIDE0OSwgMjU1LCAuMTUpO1xyXG59XHJcblxyXG4uYnV0dG9uLTc6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY0YmQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZGlzcGxheUVuZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMjAwcHg7XHJcbn1cclxuXHJcbi5oaWdobGlnaHRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzFkOWYxO1xyXG59Il19 */"] });


/***/ }),

/***/ 3858:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/edit-vacancy/edit-vacancy.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteLanguageFormComponent": () => (/* binding */ DeleteLanguageFormComponent),
/* harmony export */   "DeleteProgramFormComponent": () => (/* binding */ DeleteProgramFormComponent),
/* harmony export */   "DeleteSkillFormComponent": () => (/* binding */ DeleteSkillFormComponent),
/* harmony export */   "EditVacancyComponent": () => (/* binding */ EditVacancyComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _edit_applicant_edit_applicant_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-applicant/edit-applicant.component */ 1273);
/* harmony import */ var _new_language_form_edit_language_edit_language_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-language-form/edit-language/edit-language.component */ 1159);
/* harmony import */ var _new_language_form_new_language_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-language-form/new-language-form.component */ 573);
/* harmony import */ var _new_program_form_edit_program_edit_program_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-program-form/edit-program/edit-program.component */ 2221);
/* harmony import */ var _new_program_form_new_program_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-program-form/new-program-form.component */ 3092);
/* harmony import */ var _new_skill_form_edit_skill_edit_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-skill-form/edit-skill/edit-skill.component */ 7219);
/* harmony import */ var _new_skill_form_new_skill_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-skill-form/new-skill-form.component */ 5747);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/vacancy.service */ 4301);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_services_applicant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/applicant.service */ 173);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/text-field */ 5804);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ 5892);































function EditVacancyComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", company_r72.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", company_r72.name, " ");
} }
function EditVacancyComponent_mat_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", category_r73.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", category_r73.name, " ");
} }
function EditVacancyComponent_mat_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", type_r74.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", type_r74.name, " ");
} }
function EditVacancyComponent_mat_option_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const education_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", education_r75.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", education_r75.name, " ");
} }
function EditVacancyComponent_mat_option_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sphere_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", sphere_r76.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](sphere_r76.name);
} }
function EditVacancyComponent_th_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const languageData_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", languageData_r77 == null ? null : languageData_r77.id, " ");
} }
function EditVacancyComponent_th_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Language ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const languageData_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", languageData_r78 == null ? null : languageData_r78.languageName, " ");
} }
function EditVacancyComponent_th_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const languageData_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", languageData_r79 == null ? null : languageData_r79.otherLanguage, " ");
} }
function EditVacancyComponent_tr_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 60);
} }
const _c0 = function (a0) { return { "highlighted": a0 }; };
function EditVacancyComponent_tr_140_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_tr_140_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r82); const language_r80 = restoredCtx.$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r81.highlightL(language_r80)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r80 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, ctx_r15.selectedRowIndexL == language_r80.id));
} }
function EditVacancyComponent_th_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const programData_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", programData_r83 == null ? null : programData_r83.id, " ");
} }
function EditVacancyComponent_th_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Program ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const programData_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", programData_r84 == null ? null : programData_r84.programName, " ");
} }
function EditVacancyComponent_th_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const programData_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", programData_r85 == null ? null : programData_r85.otherProgram, " ");
} }
function EditVacancyComponent_tr_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 60);
} }
function EditVacancyComponent_tr_176_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_tr_176_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r88); const program_r86 = restoredCtx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r87.highlight(program_r86)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const program_r86 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, ctx_r23.selectedRowIndex == program_r86.id));
} }
function EditVacancyComponent_th_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_204_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skillData_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", skillData_r89 == null ? null : skillData_r89.id, " ");
} }
function EditVacancyComponent_th_206_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Skill ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_207_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skillData_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", skillData_r90 == null ? null : skillData_r90.skillName, " ");
} }
function EditVacancyComponent_th_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skillData_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", skillData_r91 == null ? null : skillData_r91.otherSkill, " ");
} }
function EditVacancyComponent_tr_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 60);
} }
function EditVacancyComponent_tr_212_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_tr_212_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r94); const skill_r92 = restoredCtx.$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r93.highlightS(skill_r92)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r92 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, ctx_r31.selectedRowIndexS == skill_r92.id));
} }
function EditVacancyComponent_th_239_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_240_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r95 == null ? null : applicant_r95.id, " ");
} }
function EditVacancyComponent_th_242_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_243_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r96 == null ? null : applicant_r96.fname, " ");
} }
function EditVacancyComponent_th_245_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_246_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r97 == null ? null : applicant_r97.lname, " ");
} }
function EditVacancyComponent_th_248_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Personal Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_249_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r98 == null ? null : applicant_r98.customerNumber, " ");
} }
function EditVacancyComponent_th_251_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Birth Day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_252_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r99 == null ? null : applicant_r99.birthDate, " ");
} }
function EditVacancyComponent_th_254_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_255_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r100 == null ? null : applicant_r100.mail, " ");
} }
function EditVacancyComponent_th_257_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_258_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r101 == null ? null : applicant_r101.phone, " ");
} }
function EditVacancyComponent_th_260_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Apply Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_261_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r102 == null ? null : applicant_r102.applyDate, " ");
} }
function EditVacancyComponent_th_263_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Applicants Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59)(1, "a", 62)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const applicant_r103 = ctx.$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("href", ctx_r49.ApplikantLink + applicant_r103.randkey, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function EditVacancyComponent_tr_265_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 60);
} }
function EditVacancyComponent_tr_266_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_tr_266_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r106); const applicant_r104 = restoredCtx.$implicit; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r105.highlightApp(applicant_r104)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r104 = ctx.$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, ctx_r51.selectedRowIndexApp == applicant_r104.id));
} }
function EditVacancyComponent_th_283_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_284_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r107 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r107 == null ? null : applicant_r107.id, " ");
} }
function EditVacancyComponent_th_286_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_287_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r108 == null ? null : applicant_r108.fname, " ");
} }
function EditVacancyComponent_th_289_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_290_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r109 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r109 == null ? null : applicant_r109.lname, " ");
} }
function EditVacancyComponent_th_292_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Personal Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_293_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r110 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r110 == null ? null : applicant_r110.customerNumber, " ");
} }
function EditVacancyComponent_th_295_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Birth Day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_296_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r111 == null ? null : applicant_r111.birthDate, " ");
} }
function EditVacancyComponent_th_298_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_299_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r112 == null ? null : applicant_r112.mail, " ");
} }
function EditVacancyComponent_th_301_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_302_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r113 == null ? null : applicant_r113.phone, " ");
} }
function EditVacancyComponent_th_304_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Apply Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_305_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", applicant_r114 == null ? null : applicant_r114.applyDate, " ");
} }
function EditVacancyComponent_th_307_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Applicants Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditVacancyComponent_td_308_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 59)(1, "a", 62)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const applicant_r115 = ctx.$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("href", ctx_r69.ApplikantLink + applicant_r115.randkey, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function EditVacancyComponent_tr_309_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 60);
} }
function EditVacancyComponent_tr_310_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_tr_310_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r118); const applicantS_r116 = restoredCtx.$implicit; const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r117.highlightAppS(applicantS_r116)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicantS_r116 = ctx.$implicit;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, ctx_r71.selectedRowIndexAppS == applicantS_r116.id));
} }
const _c1 = "span[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    color: black;\r\n    width: 100px;\r\n    height: 100px;\r\n    padding: 5px;\r\n}\r\n\r\n\r\n.body[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-size: 13px;\r\n\r\n}\r\n\r\n\r\n.mat-column-id[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 5% !important;\r\n    width: 5% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-vacancyName[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 5% !important;\r\n    width: 5% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-title[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 10% !important;\r\n    width: 10% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-vacancyAddress[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 8% !important;\r\n    width: 8% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-deadLine[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 10% !important;\r\n    width: 10% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-category[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 10% !important;\r\n    width: 10% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-description[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 35% !important;\r\n    width: 35% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%] {\r\n    background-color: #1d5175;\r\n    border: 1px solid transparent;\r\n    border-radius: 3px;\r\n    box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: -apple-system, system-ui, \"Segoe UI\", \"Liberation Sans\", sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    line-height: 1.15385;\r\n    margin: 0;\r\n    outline: none;\r\n    padding: 8px .8em;\r\n    position: relative;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    -moz-user-select: none;\r\n         user-select: none;\r\n    -webkit-user-select: none;\r\n    touch-action: manipulation;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%]:hover, .button-7[_ngcontent-%COMP%]:focus {\r\n    background-color: #07c;\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);\r\n}\r\n\r\n\r\n.button-7[_ngcontent-%COMP%]:active {\r\n    background-color: #0064bd;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%] {\r\n    background-color: rgba(51, 51, 51, 0.05);\r\n    border-radius: 8px;\r\n    border-width: 0;\r\n    color: #333333;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: \"Haas Grot Text R Web\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 20px;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 10px 12px;\r\n    text-align: justify;\r\n    transition: all 200ms;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n    -moz-user-select: none;\r\n         user-select: none;\r\n    -webkit-user-select: none;\r\n    touch-action: manipulation;\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%]:hover, .button-2[_ngcontent-%COMP%]:focus {\r\n    background-color: rgb(139, 199, 241);\r\n\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 0 4px rgba(133, 194, 238, 0.15);\r\n}\r\n\r\n\r\n.button-2[_ngcontent-%COMP%]:active {\r\n    background-color: #678fb6;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n\r\n.filterClass[_ngcontent-%COMP%] {\r\n    margin-left: 60%;\r\n}\r\n\r\n\r\n.highlighted[_ngcontent-%COMP%] {\r\n    background: #c1d9f1;\r\n}\r\n\r\n\r\n.displayEnd[_ngcontent-%COMP%] {\r\n    margin-top: 500px;\r\n    margin-left: 1250px;\r\n}\r\n\r\n\r\n.fitWidth[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n\r\n.mat-column-personalNumber[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 10% !important;\r\n    width: 10% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n\r\n.mat-column-additionalPhone[_ngcontent-%COMP%] {\r\n\r\n    white-space: inherit !important;\r\n    flex: 0 0 10% !important;\r\n    width: 10% !important;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdmFjYW5jeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7O0FBRW5COzs7QUFLQTs7SUFFSSwrQkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFPekIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7OztBQUVBOztJQUVJLCtCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUt6QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7O0FBRUE7O0lBRUksK0JBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBT3pCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOzs7QUFFQTs7SUFFSSwrQkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFNekIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7OztBQUVBOztJQUVJLCtCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQU96QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7O0FBR0E7O0lBRUksK0JBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBT3pCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOzs7QUFFQTs7SUFFSSwrQkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFLekIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7OztBQUlBO0lBQ0kseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsbURBQW1EO0lBQ25ELHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnRkFBZ0Y7SUFDaEYsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsU0FBUztJQUNULGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQWlCO1NBQWpCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7OztBQUVBOztJQUVJLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7O0FBS0E7SUFDSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixtRkFBbUY7SUFDbkYsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHNCQUFpQjtTQUFqQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7O0FBRUE7O0lBRUksb0NBQW9DOztBQUV4Qzs7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGVBQWU7O0FBRW5COzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBOztJQUVJLCtCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQU96QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7O0FBRUE7O0lBRUksK0JBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBT3pCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7R0FjRyIsImZpbGUiOiJlZGl0LXZhY2FuY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuXHJcbi5ib2R5IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5tYXQtY29sdW1uLWlkIHtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDUlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tdmFjYW5jeU5hbWUge1xyXG5cclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDUlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNSUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG5cclxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tdGl0bGUge1xyXG5cclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDEwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXZhY2FuY3lBZGRyZXNzIHtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cclxuXHJcblxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1kZWFkTGluZSB7XHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuXHJcbi5tYXQtY29sdW1uLWNhdGVnb3J5IHtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1kZXNjcmlwdGlvbiB7XHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMzUlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzUlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cclxuXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuLmJ1dHRvbi03IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDUxNzU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjQpIDAgMXB4IDAgMCBpbnNldDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgXCJMaWJlcmF0aW9uIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xNTM4NTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA4cHggLjhlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmJ1dHRvbi03OmhvdmVyLFxyXG4uYnV0dG9uLTc6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3YztcclxufVxyXG5cclxuLmJ1dHRvbi03OmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDAsIDE0OSwgMjU1LCAuMTUpO1xyXG59XHJcblxyXG4uYnV0dG9uLTc6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY0YmQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uYnV0dG9uLTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjA1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGFhcyBHcm90IFRleHQgUiBXZWJcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbn1cclxuXHJcbi5idXR0b24tMjpob3ZlcixcclxuLmJ1dHRvbi0yOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDE5OSwgMjQxKTtcclxuXHJcbn1cclxuXHJcbi5idXR0b24tMjpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSgxMzMsIDE5NCwgMjM4LCAwLjE1KTtcclxufVxyXG5cclxuLmJ1dHRvbi0yOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc4ZmI2O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbn1cclxuXHJcbi5maWx0ZXJDbGFzcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0ZWQge1xyXG4gICAgYmFja2dyb3VuZDogI2MxZDlmMTtcclxufVxyXG5cclxuLmRpc3BsYXlFbmQge1xyXG4gICAgbWFyZ2luLXRvcDogNTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTI1MHB4O1xyXG59XHJcblxyXG4uZml0V2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LWNvbHVtbi1wZXJzb25hbE51bWJlciB7XHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tYWRkaXRpb25hbFBob25lIHtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4vKiAubWF0LWNvbHVtbi1maXJzdE5hbWUge1xyXG5cclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDEwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbn0gKi8iXX0= */";
class EditVacancyComponent {
    constructor(formBuilder, router, dialogRef, vacancyService, datePipe, httpClient, dialog, applicantService, editData, locale) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.dialogRef = dialogRef;
        this.vacancyService = vacancyService;
        this.datePipe = datePipe;
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.applicantService = applicantService;
        this.editData = editData;
        this.locale = locale;
        this.showAlert = false;
        this.data = [];
        this.displayedColumns = ['id', 'languages', 'comment'];
        this.columnToDisplay = ['id', 'programs', 'comment'];
        this.displayedColumnsSkill = ['id', 'skills', 'comment'];
        this.displayedColumnsApplicants = ['id', 'firstName', 'lastName', 'personalNumber',
            'bDay', 'mail', 'mobile', 'applyDate', 'link'];
        this.displayedColumnsShortList = ['id', 'firstName', 'lastName', 'personalNumber',
            'bDay', 'mail', 'mobile', 'applyDate', 'link'];
        this.selectedRowIndex = -1;
        this.selectedRowIndexL = -1;
        this.selectedRowIndexS = -1;
        //highlight
        this.selectedRowIndexApp = -1;
        //highlight
        this.selectedRowIndexAppS = -1;
        this.DownloadLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.apiBaseUrl + '/VacancyAdmin/report/vacancy/applicantsReportLink?objectId=' + this.editData.id;
        this.ApplikantLink = 'http://jobs.energo-pro.ge/onlinejobs/#/Viewer/';
    }
    // deadLineForm = this.editData.deadLine
    ngOnInit() {
        this.vacancyForm = this.formBuilder.group({
            companyId: [''],
            vacancyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            vacancyAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            deadLine: [''],
            schedule: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            categoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            typeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            experience: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            probationaryPeriod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            educationLevelId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            experienceSphereId: [''],
            educationSphereComment: [''],
            salary: [''],
        });
        if (this.editData) {
            this.vacancyForm.controls['companyId'].setValue(this.editData.companyId);
            this.vacancyForm.controls['vacancyName'].setValue(this.editData.vacancyName);
            this.vacancyForm.controls['vacancyAddress'].setValue(this.editData.vacancyAddress);
            this.vacancyForm.controls['deadLine'].setValue(this.vacancyForm.value.deadLine);
            this.vacancyForm.controls['schedule'].setValue(this.editData.schedule);
            this.vacancyForm.controls['categoryId'].setValue(this.editData.categoryId);
            this.vacancyForm.controls['typeId'].setValue(this.editData.typeId);
            this.vacancyForm.controls['description'].setValue(this.editData.description);
            this.vacancyForm.controls['experience'].setValue(this.editData.experience);
            this.vacancyForm.controls['probationaryPeriod'].setValue(this.editData.probationaryPeriod);
            this.vacancyForm.controls['educationLevelId'].setValue(this.editData.educationLevelId);
            this.vacancyForm.controls['experienceSphereId'].setValue(this.editData.experienceSphereId);
            this.vacancyForm.controls['educationSphereComment'].setValue(this.editData.educationSphereComment);
            this.vacancyForm.controls['salary'].setValue(this.editData.salary);
        }
        ;
        console.log(this.editData.value);
        console.log(this.vacancyForm.value);
        this.getAllProgram();
        this.getAllLanguage();
        this.getAllSkill();
        this.getAllApplicants();
        this.getAllShortListApplicants();
        this.getcategory();
        this.getEducation();
        this.getSphere();
        this.getType();
        this.getCompany();
        console.log(this.DownloadLink);
    }
    ;
    updateFormData() {
        console.log('Form data is ', this.vacancyForm.value);
        // this.vacancyForm.value.deadLine = formatDate(this.vacancyForm.value.deadLine, 'EEEE, MMMM d, y, h:mm:ss a zzzz', this.locale, ' en-GB')
        this.vacancyForm.value.deadLine = this.datePipe.transform(this.vacancyForm.value.deadLine, 'dd-MM-yyyy');
        // this.vacancyForm.value.deadLine = formatDate(this.vacancyForm.deadLine, 'dd-MM-yyyy HH:mm:ss.SS', 'en-GB')
        this.vacancyService.updateVacancy(this.vacancyForm.value, this.editData.id).subscribe((result) => {
            console.log(result);
            // setTimeout(() => {
            //   window.location.reload();
            // }, 50);
        });
        this.dialogRef.closeAll();
    }
    closeForm() {
        this.dialogRef.closeAll();
    }
    refreshButton() {
        this.ngOnInit();
    }
    getCompany() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.company&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.companyList = response['list'];
        });
    }
    getEducation() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.educationLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.educationList = response['list'];
        });
    }
    getcategory() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.category&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.dataCategory = response['list'];
        });
    }
    getType() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.type&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.typeList = response['list'];
        });
    }
    getSphere() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.sphere&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.sphereList = response['list'];
        });
    }
    //Programs
    getAllProgram() {
        this.vacancyService.getAllPrograms(this.editData.id, this.page, 0, 25).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.dataSourceProgram = x['list']);
            // console.log(x['list'])
            console.log(this.dataSourceProgram);
        }),
            (error) => {
                alert(error.message);
            };
    }
    highlight(program) {
        this.selectedRow = program;
        this.selectedRowIndex = program.id;
        console.log(program);
    }
    openDialogDeleteProgram(rowData) {
        rowData = this.selectedRow;
        this.dialogRef.open(DeleteProgramFormComponent, {
            data: this.selectedRow
        }).afterClosed().subscribe(EditVacancyComponent => {
            this.getAllProgram();
        });
    }
    openDialog() {
        this.dialogRef.open(_new_program_form_new_program_form_component__WEBPACK_IMPORTED_MODULE_4__.NewProgramFormComponent, {
            disableClose: true,
            data: this.editData
        }).afterClosed().subscribe(EditVacancyComponent => {
            this.getAllProgram();
        });
    }
    openEditProgram() {
        this.dialogRef.open(_new_program_form_edit_program_edit_program_component__WEBPACK_IMPORTED_MODULE_3__.EditProgramComponent, {
            disableClose: true,
            data: this.selectedRow
        }).afterClosed().subscribe(EditVacancyComponent => {
            this.getAllProgram();
        });
    }
    //Language
    getAllLanguage() {
        this.vacancyService.getAllLanguages(this.editData.id, 1, 0, 25).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.dataSourceLanguage = x['list']);
            // console.log(x['list'])
            console.log(this.dataSourceLanguage);
        }),
            (error) => {
                alert(error.message);
            };
    }
    highlightL(language) {
        this.selectedRowL = language;
        this.selectedRowIndexL = language.id;
        console.log(language);
    }
    openDialogDeleteLanguage(rowData) {
        rowData = this.selectedRowL;
        this.dialogRef.open(DeleteLanguageFormComponent, {
            data: this.selectedRowL
        }).afterClosed().subscribe(EditVacancyComponent => {
            this.getAllLanguage();
        });
    }
    openDialogL() {
        this.dialogRef.open(_new_language_form_new_language_form_component__WEBPACK_IMPORTED_MODULE_2__.NewLanguageFormComponent, {
            disableClose: true,
            data: this.editData
        }).afterClosed().subscribe(EditVacancyComponent => {
            this.getAllLanguage();
        });
    }
    openEditLanguage() {
        this.dialogRef.open(_new_language_form_edit_language_edit_language_component__WEBPACK_IMPORTED_MODULE_1__.EditLanguageComponent, {
            disableClose: true,
            data: this.selectedRowL
        }).afterClosed().subscribe(EditVacancyComponent => {
            this.getAllLanguage();
        });
    }
    // skill
    getAllSkill() {
        this.vacancyService.getAllSkills(this.editData.id, this.page, 0, 25).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.dataSourceSkill = x['list']);
            // console.log(x['list'])
            console.log(this.dataSourceSkill);
        }),
            (error) => {
                alert(error.message);
            };
    }
    highlightS(skill) {
        this.selectedRowS = skill;
        this.selectedRowIndexS = skill.id;
        console.log(skill);
    }
    openDialogDeleteSkill(rowData) {
        rowData = this.selectedRowS;
        this.dialogRef.open(DeleteSkillFormComponent, {
            data: this.selectedRowS
        }).afterClosed().subscribe(EditVacancyComponent => {
            this.getAllSkill();
        });
    }
    openDialogS() {
        this.dialogRef.open(_new_skill_form_new_skill_form_component__WEBPACK_IMPORTED_MODULE_6__.NewSkillFormComponent, {
            disableClose: true,
            height: '500px',
            width: '700px',
            data: this.editData
        }).afterClosed().subscribe(EditVacancyComponent => {
            this.getAllSkill();
        });
    }
    openEditSkill() {
        this.dialogRef.open(_new_skill_form_edit_skill_edit_skill_component__WEBPACK_IMPORTED_MODULE_5__.EditSkillComponent, {
            disableClose: true,
            height: '500px',
            width: '700px',
            data: this.selectedRowS
        }).afterClosed().subscribe(EditVacancyComponent => {
            this.getAllSkill();
        });
    }
    //applicants
    getAllApplicants() {
        this.vacancyService.getAllApplicants(this.editData.id, 1, 0, 25).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.dataSourceApplicant = x['list']);
            // console.log(x['list'])
            console.log(this.dataSourceApplicant);
        }),
            (error) => {
                alert(error.message);
            };
    }
    highlightApp(applicant) {
        this.selectedRowApp = applicant;
        this.selectedRowIndexApp = applicant.id;
        console.log(applicant);
    }
    ;
    openEdit() {
        this.dialogRef.open(_edit_applicant_edit_applicant_component__WEBPACK_IMPORTED_MODULE_0__.EditApplicantComponent, {
            // disableClose: true,
            height: '900px',
            width: '1400px',
            data: this.selectedRowApp
        });
    }
    //shortList
    getAllShortListApplicants() {
        this.vacancyService.getAllShortListApplicants(this.editData.id, this.page, 0, 25).subscribe(x => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.dataSourceShortListApplicant = x['list']);
            // console.log(x['list'])
            console.log(this.dataSourceShortListApplicant);
        }),
            (error) => {
                alert(error.message);
            };
    }
    highlightAppS(applicantS) {
        this.selectedRowAppS = applicantS;
        this.selectedRowIndexAppS = applicantS.id;
        console.log(applicantS);
    }
    printApplicant() {
    }
    moveToShortList() {
        this.vacancyService.moveToShortList(this.selectedRowApp).subscribe((result) => {
            console.log(result);
            this.ngOnInit();
        });
    }
    removeFromShortList() {
        this.vacancyService.removeFromShortList(this.selectedRowAppS).subscribe((result) => {
            console.log(result);
            this.ngOnInit();
        });
    }
}
EditVacancyComponent.ɵfac = function EditVacancyComponent_Factory(t) { return new (t || EditVacancyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_8__.VacancyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_applicant_service__WEBPACK_IMPORTED_MODULE_9__.ApplicantService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MAT_DATE_LOCALE)); };
EditVacancyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: EditVacancyComponent, selectors: [["vex-edit-vacancy"]], decls: 313, vars: 36, consts: [["mat-dialog-title", ""], ["label", "Vacancy Information"], [1, "form-container", 3, "formGroup"], [1, "px-6", "py-4", "flex", "flex-col", "sm:flex-row", "sm:gap-2"], ["appearance", "outline", 2, "font-size", "14px"], ["formControlName", "companyId"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "flex-auto", 2, "font-size", "14px"], ["formControlName", "vacancyName", "matInput", "", "required", ""], [1, "flex", "flex-col", "sm:flex-row", "sm:gap-2"], ["formControlName", "vacancyAddress", "matInput", ""], ["appearance", "outline", 1, "smallBoxClass", 2, "font-size", "14px"], ["matInput", "", "formControlName", "deadLine", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["deadLine", ""], ["formControlName", "schedule", "matInput", "", "required", ""], [1, "flex", "flex-col", "sm:flex-row", "sm:gap-4"], ["formControlName", "categoryId"], ["formControlName", "typeId"], ["formControlName", "description", "matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "3", "cdkAutosizeMaxRows", "50"], ["autosize", "cdkTextareaAutosize"], ["formControlName", "experience", "matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "3", "cdkAutosizeMaxRows", "50"], [1, "flex", "flex-col", "sm:flex-row", "sm:gap-5"], ["formControlName", "probationaryPeriod", "matInput", ""], ["formControlName", "educationLevelId"], ["formControlName", "experienceSphereId"], ["formControlName", "educationSphereComment", "matInput", ""], ["formControlName", "salary", "matInput", ""], ["mat-button", "", "role", "button", 1, "button-7", 3, "click"], ["label", "Vacancy Language"], [1, "buttonDisplay"], ["role", "button", 1, "button-2", 3, "click"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "class", "body", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "languages"], ["matColumnDef", "comment"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["role", "button", 1, "button-7", "displayEnd", 3, "click"], ["label", "Vacancy Program"], ["matColumnDef", "programs"], ["label", "Vacancy Skill"], ["matColumnDef", "skills"], ["label", "Vacancy Applicants"], ["mat-button", "", "role", "button", 1, "button-2", 3, "click"], ["mat-button", "", "target", "_blank", "role", "button", 1, "button-2", 3, "href"], ["matColumnDef", "firstName"], ["matColumnDef", "lastName"], ["matColumnDef", "personalNumber"], ["matColumnDef", "bDay"], ["matColumnDef", "mail"], ["matColumnDef", "mobile"], ["matColumnDef", "applyDate"], ["matColumnDef", "link"], ["label", "Short List"], [3, "value"], ["mat-header-cell", "", 1, "body"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"], ["target", "_blank", 3, "href"]], template: function EditVacancyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Vacancy Editor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-tab-group")(3, "mat-tab", 1)(4, "form", 2)(5, "mat-card")(6, "mat-card-content")(7, "div", 3)(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "mat-form-field", 4)(11, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, EditVacancyComponent_mat_option_12_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " Vacancy Title* : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 9)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " Address*: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, " Dead Line*: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "DD/MM/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "mat-datepicker-toggle", 13)(35, "mat-datepicker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, " Schedule *: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 16)(46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "mat-form-field", 7)(49, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, EditVacancyComponent_mat_option_50_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "mat-form-field", 7)(56, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, EditVacancyComponent_mat_option_57_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div")(61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, " Description: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "mat-form-field", 4)(64, "textarea", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div")(68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "Experience: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "mat-form-field", 4)(71, "textarea", 21, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "div", 22)(75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "Probationary Period: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](78, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "Education Level*: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "mat-form-field", 4)(82, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](83, EditVacancyComponent_mat_option_83_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "div", 9)(86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "Education Sphere*: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "mat-form-field", 4)(89, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](90, EditVacancyComponent_mat_option_90_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](92, " Education Sphere Comment: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](94, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](96, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "div")(98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](99, "Salary: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](101, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_102_listener() { return ctx.updateFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "span")(105, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_105_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "mat-tab", 29)(108, "div", 30)(109, "span")(110, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_110_listener() { return ctx.refreshButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112, "cached");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "span")(115, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_115_listener() { return ctx.openDialogL(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, "assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "span")(120, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_120_listener() { return ctx.openEditLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](122, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](123, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "span")(125, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_125_listener() { return ctx.openDialogDeleteLanguage(ctx.editData); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, "delete_forever");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](128, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](129, "table", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](130, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](131, EditVacancyComponent_th_131_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](132, EditVacancyComponent_td_132_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](133, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](134, EditVacancyComponent_th_134_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](135, EditVacancyComponent_td_135_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](136, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](137, EditVacancyComponent_th_137_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](138, EditVacancyComponent_td_138_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](139, EditVacancyComponent_tr_139_Template, 1, 0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](140, EditVacancyComponent_tr_140_Template, 1, 3, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_141_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](142, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "mat-tab", 41)(144, "div", 30)(145, "span")(146, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_146_listener() { return ctx.refreshButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](147, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](148, "cached");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](149, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](150, "span")(151, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_151_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](153, "assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](154, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](155, "span")(156, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_156_listener() { return ctx.openEditProgram(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](157, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](158, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](159, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](160, "span")(161, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_161_listener() { return ctx.openDialogDeleteProgram(ctx.editData); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](162, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](163, "delete_forever");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](164, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](165, "table", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](166, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](167, EditVacancyComponent_th_167_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](168, EditVacancyComponent_td_168_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](169, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](170, EditVacancyComponent_th_170_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](171, EditVacancyComponent_td_171_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](172, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](173, EditVacancyComponent_th_173_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](174, EditVacancyComponent_td_174_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](175, EditVacancyComponent_tr_175_Template, 1, 0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](176, EditVacancyComponent_tr_176_Template, 1, 3, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](177, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_177_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](178, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](179, "mat-tab", 43)(180, "div", 30)(181, "span")(182, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_182_listener() { return ctx.refreshButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](183, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](184, "cached");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](185, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](186, "span")(187, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_187_listener() { return ctx.openDialogS(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](188, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](189, "assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](190, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](191, "span")(192, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_192_listener() { return ctx.openEditSkill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](193, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](194, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](195, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](196, "span")(197, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_197_listener() { return ctx.openDialogDeleteSkill(ctx.editData); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](198, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](199, "delete_forever");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](200, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](201, "table", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](202, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](203, EditVacancyComponent_th_203_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](204, EditVacancyComponent_td_204_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](205, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](206, EditVacancyComponent_th_206_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](207, EditVacancyComponent_td_207_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](208, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](209, EditVacancyComponent_th_209_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](210, EditVacancyComponent_td_210_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](211, EditVacancyComponent_tr_211_Template, 1, 0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](212, EditVacancyComponent_tr_212_Template, 1, 3, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](213, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_213_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](214, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](215, "mat-tab", 45)(216, "div", 30)(217, "span")(218, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_a_click_218_listener() { return ctx.refreshButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](219, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](220, "cached");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](221, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](222, "span")(223, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_a_click_223_listener() { return ctx.openEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](224, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](225, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](226, " Applicant Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](227, "span")(228, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_a_click_228_listener() { return ctx.moveToShortList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](229, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](230, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](231, " Short List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](232, "span")(233, "a", 47)(234, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](235, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](236, " Generate Links ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](237, "table", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](238, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](239, EditVacancyComponent_th_239_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](240, EditVacancyComponent_td_240_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](241, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](242, EditVacancyComponent_th_242_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](243, EditVacancyComponent_td_243_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](244, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](245, EditVacancyComponent_th_245_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](246, EditVacancyComponent_td_246_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](247, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](248, EditVacancyComponent_th_248_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](249, EditVacancyComponent_td_249_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](250, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](251, EditVacancyComponent_th_251_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](252, EditVacancyComponent_td_252_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](253, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](254, EditVacancyComponent_th_254_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](255, EditVacancyComponent_td_255_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](256, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](257, EditVacancyComponent_th_257_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](258, EditVacancyComponent_td_258_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](259, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](260, EditVacancyComponent_th_260_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](261, EditVacancyComponent_td_261_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](262, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](263, EditVacancyComponent_th_263_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](264, EditVacancyComponent_td_264_Template, 5, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](265, EditVacancyComponent_tr_265_Template, 1, 0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](266, EditVacancyComponent_tr_266_Template, 1, 3, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](267, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_267_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](268, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](269, "mat-tab", 56)(270, "div", 30)(271, "span")(272, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_272_listener() { return ctx.refreshButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](273, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](274, "cached");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](275, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](276, "span")(277, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_277_listener() { return ctx.removeFromShortList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](278, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](279, "delete_forever");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](280, " Remove ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](281, "table", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](282, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](283, EditVacancyComponent_th_283_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](284, EditVacancyComponent_td_284_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](285, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](286, EditVacancyComponent_th_286_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](287, EditVacancyComponent_td_287_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](288, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](289, EditVacancyComponent_th_289_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](290, EditVacancyComponent_td_290_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](291, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](292, EditVacancyComponent_th_292_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](293, EditVacancyComponent_td_293_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](294, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](295, EditVacancyComponent_th_295_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](296, EditVacancyComponent_td_296_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](297, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](298, EditVacancyComponent_th_298_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](299, EditVacancyComponent_td_299_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](300, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](301, EditVacancyComponent_th_301_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](302, EditVacancyComponent_td_302_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](303, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](304, EditVacancyComponent_th_304_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](305, EditVacancyComponent_td_305_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](306, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](307, EditVacancyComponent_th_307_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](308, EditVacancyComponent_td_308_Template, 5, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](309, EditVacancyComponent_tr_309_Template, 1, 0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](310, EditVacancyComponent_tr_310_Template, 1, 3, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](311, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditVacancyComponent_Template_button_click_311_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](312, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.vacancyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", 20, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.companyList);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.dataCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.typeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", 90, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", 90, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", 10, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", 40, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.educationList);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.sphereList);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", 10, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSourceLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSourceProgram);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.columnToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.columnToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSourceSkill);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsSkill);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsSkill);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("href", ctx.DownloadLink, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSourceApplicant);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsApplicants);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsApplicants);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSourceShortListApplicant);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsShortList);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsShortList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatAnchor, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogTitle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatSuffix, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_22__.CdkTextareaAutosize, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTab], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXZhY2FuY3kuY29tcG9uZW50LnNjc3MifQ== */", _c1] });
// delete program
class DeleteProgramFormComponent {
    constructor(formBuilder, vacancyService, dialogRef, applicantService, editDataP) {
        this.formBuilder = formBuilder;
        this.vacancyService = vacancyService;
        this.dialogRef = dialogRef;
        this.applicantService = applicantService;
        this.editDataP = editDataP;
    }
    ngOnInit() {
        this.vacancyProgramForm = this.formBuilder.group({
            // id: this.editData.id,
            // programName: [''],
            // comment: [''],
            id: [],
            objectId: [],
            otherProgram: [''],
            vacancyId: [],
            programId: [''],
            programName: [''],
            vacancyName: []
        });
        // if (this.editData2) {
        //   this.vacancyProgramForm.controls['programName'].setValue(this.editData2.programName);
        // }
    }
    closeForm() {
        this.dialogRef.close();
    }
    deleteProgram() {
        this.vacancyService.deleteProgram(this.vacancyProgramForm.value, this.editDataP.id, this.editDataP.vacancyId).subscribe((result) => {
            console.log(result);
        });
        this.dialogRef.close();
    }
}
DeleteProgramFormComponent.ɵfac = function DeleteProgramFormComponent_Factory(t) { return new (t || DeleteProgramFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_8__.VacancyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_applicant_service__WEBPACK_IMPORTED_MODULE_9__.ApplicantService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA)); };
DeleteProgramFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: DeleteProgramFormComponent, selectors: [["vex-new-program-form"]], decls: 11, vars: 0, consts: [[1, "flex", "flex-col", "sm:flex-row", "sm:gap-4", "margin"], ["mat-button", "", "role", "button", 1, "button-7", 3, "click"], ["role", "button", 1, "button-7", 3, "click"]], template: function DeleteProgramFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Vacancy Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-card")(3, "mat-card-content")(4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Do you want to delete program?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-card-actions", 0)(7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DeleteProgramFormComponent_Template_button_click_7_listener() { return ctx.deleteProgram(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DeleteProgramFormComponent_Template_button_click_9_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardActions], styles: [_c1] });
//delete language
class DeleteLanguageFormComponent {
    constructor(formBuilder, vacancyService, dialogRef, editDataL) {
        this.formBuilder = formBuilder;
        this.vacancyService = vacancyService;
        this.dialogRef = dialogRef;
        this.editDataL = editDataL;
    }
    ngOnInit() {
        this.vacancyLanguageForm = this.formBuilder.group({
            // id: this.editData.id,
            // programName: [''],
            id: [],
            objectId: [],
            otherLanguage: [''],
            vacancyId: [],
            languageId: [''],
            languageName: [''],
        });
        // if (this.editData2) {
        //   this.vacancyLanguageForm.controls['LanguageName'].setValue(this.editData2.LanguageName);
        // }
    }
    closeForm() {
        this.dialogRef.close();
    }
    deleteLanguage() {
        this.vacancyService.deleteLanguage(this.vacancyLanguageForm.value, this.editDataL.id, this.editDataL.vacancyId).subscribe((result) => {
            console.log(result);
        });
        this.dialogRef.close();
    }
}
DeleteLanguageFormComponent.ɵfac = function DeleteLanguageFormComponent_Factory(t) { return new (t || DeleteLanguageFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_8__.VacancyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA)); };
DeleteLanguageFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: DeleteLanguageFormComponent, selectors: [["vex-new-language-form"]], decls: 11, vars: 0, consts: [[1, "flex", "flex-col", "sm:flex-row", "sm:gap-4", "margin"], ["mat-button", "", "role", "button", 1, "button-7", 3, "click"], ["role", "button", 1, "button-7", 3, "click"]], template: function DeleteLanguageFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Vacancy Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-card")(3, "mat-card-content")(4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Do you want to delete Language?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-card-actions", 0)(7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DeleteLanguageFormComponent_Template_button_click_7_listener() { return ctx.deleteLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DeleteLanguageFormComponent_Template_button_click_9_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardActions], styles: [_c1] });
//delete skill
class DeleteSkillFormComponent {
    constructor(formBuilder, vacancyService, dialogRef, editDataS) {
        this.formBuilder = formBuilder;
        this.vacancyService = vacancyService;
        this.dialogRef = dialogRef;
        this.editDataS = editDataS;
    }
    ngOnInit() {
        this.vacancySkillForm = this.formBuilder.group({
            // id: this.editData.id,
            // programName: [''],
            id: [],
            objectId: [],
            otherSkill: [''],
            vacancyId: [],
            skillId: [''],
            skillName: [''],
        });
        // if (this.editData2) {
        //   this.vacancySkillForm.controls['SkillName'].setValue(this.editData2.SkillName);
        // }
    }
    closeForm() {
        this.dialogRef.close();
    }
    deleteSkill() {
        this.vacancyService.deleteSkill(this.vacancySkillForm.value, this.editDataS.id, this.editDataS.vacancyId).subscribe((result) => {
            console.log(result);
        });
        this.dialogRef.close();
    }
}
DeleteSkillFormComponent.ɵfac = function DeleteSkillFormComponent_Factory(t) { return new (t || DeleteSkillFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_8__.VacancyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA)); };
DeleteSkillFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: DeleteSkillFormComponent, selectors: [["vex-new-skill-form"]], decls: 11, vars: 0, consts: [[1, "flex", "flex-col", "sm:flex-row", "sm:gap-4", "margin"], ["mat-button", "", "role", "button", 1, "button-7", 3, "click"], ["role", "button", 1, "button-7", 3, "click"]], template: function DeleteSkillFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Vacancy Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-card")(3, "mat-card-content")(4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Do you want to delete Skill?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-card-actions", 0)(7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DeleteSkillFormComponent_Template_button_click_7_listener() { return ctx.deleteSkill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DeleteSkillFormComponent_Template_button_click_9_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardActions], styles: [_c1] });
function moment(deadLine) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ 1159:
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/edit-vacancy/new-language-form/edit-language/edit-language.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditLanguageComponent": () => (/* binding */ EditLanguageComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vacancy.service */ 4301);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);














function EditLanguageComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Language_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", Language_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", Language_r1.name, " ");
} }
class EditLanguageComponent {
    constructor(formBuilder, vacancyService, dialogRef, httpClient, editData) {
        this.formBuilder = formBuilder;
        this.vacancyService = vacancyService;
        this.dialogRef = dialogRef;
        this.httpClient = httpClient;
        this.editData = editData;
    }
    ngOnInit() {
        this.vacancyLanguageForm = this.formBuilder.group({
            // id: this.editData.id,
            // programName: [''],
            id: this.editData.id,
            objectId: this.editData.objectId,
            otherLanguage: [''],
            vacancyId: this.editData.vacancyId,
            languageId: [''],
            languageName: [''],
        });
        if (this.editData) {
            this.vacancyLanguageForm.controls['id'].setValue(this.editData.id);
            this.vacancyLanguageForm.controls['objectId'].setValue(this.editData.objectId);
            this.vacancyLanguageForm.controls['vacancyId'].setValue(this.editData.vacancyId);
            this.vacancyLanguageForm.controls['otherLanguage'].setValue(this.editData.otherLanguage);
            this.vacancyLanguageForm.controls['languageName'].setValue(this.editData.languageName);
            this.vacancyLanguageForm.controls['languageId'].setValue(this.editData.languageId);
        }
        this.getLanguage();
    }
    getLanguage() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.language&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.LanguageList = response['list'];
        });
    }
    saveFormData() {
        console.log(this.vacancyLanguageForm.value);
        this.vacancyService.updateLanguage(this.editData.objectId, this.editData.vacancyId, this.vacancyLanguageForm.value).subscribe((result) => {
            console.log(result);
        });
        this.dialogRef.close();
    }
    closeForm() {
        this.dialogRef.close();
    }
}
EditLanguageComponent.ɵfac = function EditLanguageComponent_Factory(t) { return new (t || EditLanguageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_1__.VacancyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
EditLanguageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditLanguageComponent, selectors: [["vex-edit-language"]], decls: 20, vars: 2, consts: [[1, "form-container", 3, "formGroup"], [1, "px-6", "py-4", "flex", "flex-col"], ["appearance", "outline", 2, "font-size", "12px"], ["formControlName", "languageId"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "otherLanguage", "matInput", ""], [1, "flex", "flex-col", "sm:flex-row", "sm:gap-4", "margin"], ["mat-button", "", "role", "button", 1, "button-7", 3, "click"], [3, "value"]], template: function EditLanguageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vacancy Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 0)(3, "mat-card")(4, "mat-card-content")(5, "div", 1)(6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 2)(9, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EditLanguageComponent_mat_option_10_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Comment : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-card-actions", 6)(16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditLanguageComponent_Template_button_click_16_listener() { return ctx.saveFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditLanguageComponent_Template_button_click_18_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.vacancyLanguageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.LanguageList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWxhbmd1YWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 573:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/edit-vacancy/new-language-form/new-language-form.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewLanguageFormComponent": () => (/* binding */ NewLanguageFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vacancy.service */ 4301);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);














function NewLanguageFormComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Language_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", Language_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", Language_r1.name, " ");
} }
class NewLanguageFormComponent {
    constructor(formBuilder, vacancyService, dialogRef, httpClient, editData) {
        this.formBuilder = formBuilder;
        this.vacancyService = vacancyService;
        this.dialogRef = dialogRef;
        this.httpClient = httpClient;
        this.editData = editData;
    }
    ngOnInit() {
        this.vacancyLanguageForm = this.formBuilder.group({
            // id: this.editData.id,
            // LanguageName: [''],
            // comment: [''],
            id: [],
            objectId: [],
            otherLanguage: [''],
            vacancyId: this.editData.id,
            languageId: [],
            languageName: [],
            vacancyName: this.editData.vacancyName,
        });
        this.getLanguage();
    }
    getLanguage() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.language&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.LanguageList = response['list'];
        });
    }
    saveFormData() {
        console.log(this.vacancyLanguageForm.value);
        this.vacancyService.addNewLanguage(this.editData.id, this.vacancyLanguageForm.value).subscribe((result) => {
            console.log(result);
        });
        this.dialogRef.close();
    }
    closeForm() {
        this.dialogRef.close();
    }
}
NewLanguageFormComponent.ɵfac = function NewLanguageFormComponent_Factory(t) { return new (t || NewLanguageFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_1__.VacancyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
NewLanguageFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NewLanguageFormComponent, selectors: [["vex-new-language-form"]], decls: 20, vars: 2, consts: [[1, "form-container", 3, "formGroup"], [1, "px-6", "py-4", "flex", "flex-col"], ["appearance", "outline", 2, "font-size", "12px"], ["formControlName", "languageId"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "otherLanguage", "matInput", ""], [1, "flex", "flex-col", "sm:flex-row", "sm:gap-4", "margin"], ["mat-button", "", "role", "button", 1, "button-7", 3, "click"], [3, "value"]], template: function NewLanguageFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vacancy Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 0)(3, "mat-card")(4, "mat-card-content")(5, "div", 1)(6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 2)(9, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NewLanguageFormComponent_mat_option_10_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Comment : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-card-actions", 6)(16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewLanguageFormComponent_Template_button_click_16_listener() { return ctx.saveFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewLanguageFormComponent_Template_button_click_18_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.vacancyLanguageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.LanguageList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctbGFuZ3VhZ2UtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2221:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/edit-vacancy/new-program-form/edit-program/edit-program.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProgramComponent": () => (/* binding */ EditProgramComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vacancy.service */ 4301);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);














function EditProgramComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const program_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", program_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", program_r1.name, " ");
} }
class EditProgramComponent {
    constructor(formBuilder, vacancyService, dialogRef, httpClient, editData) {
        this.formBuilder = formBuilder;
        this.vacancyService = vacancyService;
        this.dialogRef = dialogRef;
        this.httpClient = httpClient;
        this.editData = editData;
    }
    ngOnInit() {
        this.vacancyProgramForm = this.formBuilder.group({
            // id: this.editData.id,
            // programName: [''],
            id: this.editData.id,
            objectId: this.editData.objectId,
            otherProgram: [''],
            vacancyId: this.editData.vacancyId,
            programId: [''],
            programName: [''],
        });
        if (this.editData) {
            this.vacancyProgramForm.controls['id'].setValue(this.editData.id);
            this.vacancyProgramForm.controls['objectId'].setValue(this.editData.objectId);
            this.vacancyProgramForm.controls['vacancyId'].setValue(this.editData.vacancyId);
            this.vacancyProgramForm.controls['otherProgram'].setValue(this.editData.otherProgram);
            this.vacancyProgramForm.controls['programName'].setValue(this.editData.programName);
            this.vacancyProgramForm.controls['programId'].setValue(this.editData.programId);
        }
        this.getProgram();
    }
    getProgram() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.program&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.programList = response['list'];
        });
    }
    saveFormData() {
        console.log(this.vacancyProgramForm.value);
        this.vacancyService.updateProgram(this.editData.objectId, this.editData.vacancyId, this.vacancyProgramForm.value).subscribe((result) => {
            console.log(result);
        });
        this.dialogRef.close();
    }
    closeForm() {
        this.dialogRef.close();
    }
}
EditProgramComponent.ɵfac = function EditProgramComponent_Factory(t) { return new (t || EditProgramComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_1__.VacancyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
EditProgramComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditProgramComponent, selectors: [["vex-edit-program"]], decls: 20, vars: 2, consts: [[1, "form-container", 3, "formGroup"], [1, "px-6", "py-4", "flex", "flex-col"], ["appearance", "outline", 2, "font-size", "12px"], ["formControlName", "programId"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "otherProgram", "matInput", ""], [1, "flex", "flex-col", "sm:flex-row", "sm:gap-4", "margin"], ["mat-button", "", "role", "button", 1, "button-7", 3, "click"], [3, "value"]], template: function EditProgramComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vacancy Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 0)(3, "mat-card")(4, "mat-card-content")(5, "div", 1)(6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 2)(9, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EditProgramComponent_mat_option_10_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Comment : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-card-actions", 6)(16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditProgramComponent_Template_button_click_16_listener() { return ctx.saveFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditProgramComponent_Template_button_click_18_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.vacancyProgramForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.programList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb2dyYW0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3092:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/edit-vacancy/new-program-form/new-program-form.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewProgramFormComponent": () => (/* binding */ NewProgramFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vacancy.service */ 4301);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);














function NewProgramFormComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const program_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", program_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", program_r1.name, " ");
} }
class NewProgramFormComponent {
    constructor(formBuilder, vacancyService, dialogRef, httpClient, editData) {
        this.formBuilder = formBuilder;
        this.vacancyService = vacancyService;
        this.dialogRef = dialogRef;
        this.httpClient = httpClient;
        this.editData = editData;
    }
    ngOnInit() {
        this.vacancyProgramForm = this.formBuilder.group({
            // id: this.editData.id,
            // programName: [''],
            // comment: [''],
            id: [],
            objectId: [],
            otherProgram: [''],
            vacancyId: this.editData.id,
            programId: [],
            programName: [],
            vacancyName: this.editData.vacancyName,
        });
        this.getProgram();
    }
    getProgram() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.program&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.programList = response['list'];
        });
    }
    saveFormData() {
        console.log(this.vacancyProgramForm.value);
        this.vacancyService.addNewProgram(this.editData.id, this.vacancyProgramForm.value).subscribe((result) => {
            console.log(result);
        });
        this.dialogRef.close();
    }
    closeForm() {
        this.dialogRef.close();
    }
}
NewProgramFormComponent.ɵfac = function NewProgramFormComponent_Factory(t) { return new (t || NewProgramFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_1__.VacancyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
NewProgramFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NewProgramFormComponent, selectors: [["vex-new-program-form"]], decls: 20, vars: 2, consts: [[1, "form-container", 3, "formGroup"], [1, "px-6", "py-4", "flex", "flex-col"], ["appearance", "outline", 2, "font-size", "12px"], ["formControlName", "programId"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "otherProgram", "matInput", ""], [1, "flex", "flex-col", "sm:flex-row", "sm:gap-4", "margin"], ["mat-button", "", "role", "button", 1, "button-7", 3, "click"], [3, "value"]], template: function NewProgramFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vacancy Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 0)(3, "mat-card")(4, "mat-card-content")(5, "div", 1)(6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 2)(9, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NewProgramFormComponent_mat_option_10_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Comment : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-card-actions", 6)(16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewProgramFormComponent_Template_button_click_16_listener() { return ctx.saveFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewProgramFormComponent_Template_button_click_18_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.vacancyProgramForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.programList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctcHJvZ3JhbS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7219:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/edit-vacancy/new-skill-form/edit-skill/edit-skill.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSkillComponent": () => (/* binding */ EditSkillComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vacancy.service */ 4301);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);














function EditSkillComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", skill_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", skill_r1.name, " ");
} }
class EditSkillComponent {
    constructor(formBuilder, vacancyService, dialogRef, httpClient, editData) {
        this.formBuilder = formBuilder;
        this.vacancyService = vacancyService;
        this.dialogRef = dialogRef;
        this.httpClient = httpClient;
        this.editData = editData;
    }
    ngOnInit() {
        this.vacancySkillForm = this.formBuilder.group({
            // id: this.editData.id,
            // SkillName: [''],
            id: this.editData.id,
            objectId: this.editData.objectId,
            otherSkill: [''],
            vacancyId: this.editData.vacancyId,
            skillId: [''],
            skillName: [''],
        });
        if (this.editData) {
            this.vacancySkillForm.controls['id'].setValue(this.editData.id);
            this.vacancySkillForm.controls['objectId'].setValue(this.editData.objectId);
            this.vacancySkillForm.controls['vacancyId'].setValue(this.editData.vacancyId);
            this.vacancySkillForm.controls['otherSkill'].setValue(this.editData.otherSkill);
            this.vacancySkillForm.controls['skillName'].setValue(this.editData.skillName);
            this.vacancySkillForm.controls['skillId'].setValue(this.editData.skillId);
        }
        this.getSkill();
    }
    getSkill() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.skill&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.skillList = response['list'];
        });
    }
    saveFormData() {
        console.log(this.vacancySkillForm.value);
        this.vacancyService.updateSkill(this.editData.objectId, this.editData.vacancyId, this.vacancySkillForm.value).subscribe((result) => {
            console.log(result);
        });
        this.dialogRef.close();
    }
    closeForm() {
        this.dialogRef.close();
    }
}
EditSkillComponent.ɵfac = function EditSkillComponent_Factory(t) { return new (t || EditSkillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_1__.VacancyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
EditSkillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditSkillComponent, selectors: [["vex-edit-skill"]], decls: 20, vars: 2, consts: [[1, "form-container", 3, "formGroup"], [1, "px-6", "py-4", "flex", "flex-col"], ["appearance", "outline", 2, "font-size", "12px"], ["formControlName", "skillId"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "otherSkill", "matInput", ""], [1, "flex", "flex-col", "sm:flex-row", "sm:gap-4", "margin"], ["mat-button", "", "role", "button", 1, "button-7", 3, "click"], [3, "value"]], template: function EditSkillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vacancy Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 0)(3, "mat-card")(4, "mat-card-content")(5, "div", 1)(6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 2)(9, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EditSkillComponent_mat_option_10_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Comment : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-card-actions", 6)(16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditSkillComponent_Template_button_click_16_listener() { return ctx.saveFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditSkillComponent_Template_button_click_18_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.vacancySkillForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.skillList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNraWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5747:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/edit-vacancy/new-skill-form/new-skill-form.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewSkillFormComponent": () => (/* binding */ NewSkillFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vacancy.service */ 4301);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);














function NewSkillFormComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", skill_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", skill_r1.name, " ");
} }
class NewSkillFormComponent {
    constructor(formBuilder, vacancyService, dialogRef, httpClient, editData) {
        this.formBuilder = formBuilder;
        this.vacancyService = vacancyService;
        this.dialogRef = dialogRef;
        this.httpClient = httpClient;
        this.editData = editData;
    }
    ngOnInit() {
        this.vacancySkillForm = this.formBuilder.group({
            // id: this.editData.id,
            // skillName: [''],
            // comment: [''],
            id: [],
            objectId: [],
            otherSkill: [''],
            vacancyId: this.editData.id,
            skillId: [],
            programName: [],
            vacancyName: this.editData.vacancyName,
            levelId: [],
        });
        this.getSkill();
    }
    getSkill() {
        this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.skill&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(response => {
            console.log(response);
            this.skillList = response['list'];
        });
    }
    saveFormData() {
        console.log(this.vacancySkillForm.value);
        this.vacancyService.addNewSkill(this.editData.id, this.vacancySkillForm.value).subscribe((result) => {
            console.log(result);
        });
        this.dialogRef.close();
    }
    closeForm() {
        this.dialogRef.close();
    }
}
NewSkillFormComponent.ɵfac = function NewSkillFormComponent_Factory(t) { return new (t || NewSkillFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_1__.VacancyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
NewSkillFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NewSkillFormComponent, selectors: [["vex-new-skill-form"]], decls: 20, vars: 2, consts: [[1, "form-container", 3, "formGroup"], [1, "px-6", "py-4", "flex", "flex-col"], ["appearance", "outline", 2, "font-size", "12px"], ["formControlName", "skillId"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "otherSkill", "matInput", ""], [1, "flex", "flex-col", "sm:flex-row", "sm:gap-4", "margin"], ["mat-button", "", "role", "button", 1, "button-7", 3, "click"], [3, "value"]], template: function NewSkillFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vacancy Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 0)(3, "mat-card")(4, "mat-card-content")(5, "div", 1)(6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 2)(9, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NewSkillFormComponent_mat_option_10_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Comment : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-card-actions", 6)(16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewSkillFormComponent_Template_button_click_16_listener() { return ctx.saveFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewSkillFormComponent_Template_button_click_18_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.vacancySkillForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.skillList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctc2tpbGwtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_external-vacancies_edit-vacancy_edit-vacancy_component_ts.js.map