"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_external-vacancies_edit-vacancy_edit-vacancy_module_ts"],{

/***/ 159:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/edit-vacancy/edit-applicant/edit-applicant.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditApplicantModule": () => (/* binding */ EditApplicantModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/vacancy.service */ 4301);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _edit_applicant_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-applicant.component */ 1273);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _completed_vacancy_completed_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../completed-vacancy/completed-vacancy-routing.module */ 5467);
/* harmony import */ var _vacancy_form_vacancy_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vacancy-form/vacancy-form.module */ 9182);






























class EditApplicantModule {
}
EditApplicantModule.ɵfac = function EditApplicantModule_Factory(t) { return new (t || EditApplicantModule)(); };
EditApplicantModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EditApplicantModule });
EditApplicantModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__.LOCALE_ID, useValue: 'en-IN' }, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_0__.VacancyService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _completed_vacancy_completed_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_2__.CompletedVacancyRoutingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginatorModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardModule,
        _vacancy_form_vacancy_form_module__WEBPACK_IMPORTED_MODULE_3__.VacancyFormModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_25__.CdkTableModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__.ScrollingModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__.A11yModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__.MatTabsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EditApplicantModule, { declarations: [_edit_applicant_component__WEBPACK_IMPORTED_MODULE_1__.EditApplicantComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _completed_vacancy_completed_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_2__.CompletedVacancyRoutingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginatorModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardModule,
        _vacancy_form_vacancy_form_module__WEBPACK_IMPORTED_MODULE_3__.VacancyFormModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_25__.CdkTableModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__.ScrollingModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__.A11yModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__.MatTabsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule] }); })();


/***/ }),

/***/ 8233:
/*!******************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/edit-vacancy/edit-vacancy.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditVacancyModule": () => (/* binding */ EditVacancyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/vacancy.service */ 4301);
/* harmony import */ var _edit_vacancy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-vacancy.component */ 3858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _completed_vacancy_completed_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../completed-vacancy/completed-vacancy-routing.module */ 5467);
/* harmony import */ var _vacancy_form_vacancy_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vacancy-form/vacancy-form.module */ 9182);
/* harmony import */ var _new_program_form_new_program_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-program-form/new-program-form.module */ 15);
/* harmony import */ var _new_language_form_new_language_form_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-language-form/new-language-form.module */ 6369);
/* harmony import */ var _new_skill_form_new_skill_form_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-skill-form/new-skill-form.module */ 2029);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _edit_applicant_edit_applicant_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-applicant/edit-applicant.module */ 159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);

































class EditVacancyModule {
}
EditVacancyModule.ɵfac = function EditVacancyModule_Factory(t) { return new (t || EditVacancyModule)(); };
EditVacancyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: EditVacancyModule });
EditVacancyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MAT_DATE_LOCALE, useValue: 'en-GB' }, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_0__.VacancyService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _completed_vacancy_completed_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_2__.CompletedVacancyRoutingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardModule,
        _vacancy_form_vacancy_form_module__WEBPACK_IMPORTED_MODULE_3__.VacancyFormModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSortModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_29__.CdkTableModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__.ScrollingModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__.A11yModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _new_program_form_new_program_form_module__WEBPACK_IMPORTED_MODULE_4__.NewProgramFormModule,
        _new_language_form_new_language_form_module__WEBPACK_IMPORTED_MODULE_5__.NewLanguageFormModule,
        _new_skill_form_new_skill_form_module__WEBPACK_IMPORTED_MODULE_6__.NewSkillFormModule,
        _edit_applicant_edit_applicant_module__WEBPACK_IMPORTED_MODULE_7__.EditApplicantModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](EditVacancyModule, { declarations: [_edit_vacancy_component__WEBPACK_IMPORTED_MODULE_1__.EditVacancyComponent, _edit_vacancy_component__WEBPACK_IMPORTED_MODULE_1__.DeleteProgramFormComponent, _edit_vacancy_component__WEBPACK_IMPORTED_MODULE_1__.DeleteLanguageFormComponent, _edit_vacancy_component__WEBPACK_IMPORTED_MODULE_1__.DeleteSkillFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _completed_vacancy_completed_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_2__.CompletedVacancyRoutingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardModule,
        _vacancy_form_vacancy_form_module__WEBPACK_IMPORTED_MODULE_3__.VacancyFormModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSortModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_29__.CdkTableModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__.ScrollingModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__.A11yModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _new_program_form_new_program_form_module__WEBPACK_IMPORTED_MODULE_4__.NewProgramFormModule,
        _new_language_form_new_language_form_module__WEBPACK_IMPORTED_MODULE_5__.NewLanguageFormModule,
        _new_skill_form_new_skill_form_module__WEBPACK_IMPORTED_MODULE_6__.NewSkillFormModule,
        _edit_applicant_edit_applicant_module__WEBPACK_IMPORTED_MODULE_7__.EditApplicantModule] }); })();


/***/ }),

/***/ 6369:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/edit-vacancy/new-language-form/new-language-form.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewLanguageFormModule": () => (/* binding */ NewLanguageFormModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/vacancy.service */ 4301);
/* harmony import */ var _new_language_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-language-form.component */ 573);
/* harmony import */ var _edit_language_edit_language_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-language/edit-language.component */ 1159);




















class NewLanguageFormModule {
}
NewLanguageFormModule.ɵfac = function NewLanguageFormModule_Factory(t) { return new (t || NewLanguageFormModule)(); };
NewLanguageFormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NewLanguageFormModule });
NewLanguageFormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__.LOCALE_ID, useValue: 'en-IN' }, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_0__.VacancyService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NewLanguageFormModule, { declarations: [_new_language_form_component__WEBPACK_IMPORTED_MODULE_1__.NewLanguageFormComponent, _edit_language_edit_language_component__WEBPACK_IMPORTED_MODULE_2__.EditLanguageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule] }); })();


/***/ }),

/***/ 15:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/edit-vacancy/new-program-form/new-program-form.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewProgramFormModule": () => (/* binding */ NewProgramFormModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/vacancy.service */ 4301);
/* harmony import */ var _new_program_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-program-form.component */ 3092);
/* harmony import */ var _edit_program_edit_program_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-program/edit-program.component */ 2221);




















class NewProgramFormModule {
}
NewProgramFormModule.ɵfac = function NewProgramFormModule_Factory(t) { return new (t || NewProgramFormModule)(); };
NewProgramFormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NewProgramFormModule });
NewProgramFormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__.LOCALE_ID, useValue: 'en-IN' }, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_0__.VacancyService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NewProgramFormModule, { declarations: [_new_program_form_component__WEBPACK_IMPORTED_MODULE_1__.NewProgramFormComponent, _edit_program_edit_program_component__WEBPACK_IMPORTED_MODULE_2__.EditProgramComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule] }); })();


/***/ }),

/***/ 2029:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/edit-vacancy/new-skill-form/new-skill-form.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewSkillFormModule": () => (/* binding */ NewSkillFormModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/vacancy.service */ 4301);
/* harmony import */ var _new_skill_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-skill-form.component */ 5747);
/* harmony import */ var _edit_skill_edit_skill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-skill/edit-skill.component */ 7219);




















class NewSkillFormModule {
}
NewSkillFormModule.ɵfac = function NewSkillFormModule_Factory(t) { return new (t || NewSkillFormModule)(); };
NewSkillFormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NewSkillFormModule });
NewSkillFormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__.LOCALE_ID, useValue: 'en-IN' }, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_0__.VacancyService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NewSkillFormModule, { declarations: [_new_skill_form_component__WEBPACK_IMPORTED_MODULE_1__.NewSkillFormComponent, _edit_skill_edit_skill_component__WEBPACK_IMPORTED_MODULE_2__.EditSkillComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_external-vacancies_edit-vacancy_edit-vacancy_module_ts.js.map