"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_external-vacancies_completed-vacancy_completed-vacancy_module_ts"],{

/***/ 3438:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/external-vacancies/completed-vacancy/completed-vacancy.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletedVacancyModule": () => (/* binding */ CompletedVacancyModule)
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
/* harmony import */ var _completed_vacancy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./completed-vacancy.component */ 7626);
/* harmony import */ var _completed_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completed-vacancy-routing.module */ 5467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






























class CompletedVacancyModule {
}
CompletedVacancyModule.ɵfac = function CompletedVacancyModule_Factory(t) { return new (t || CompletedVacancyModule)(); };
CompletedVacancyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CompletedVacancyModule });
CompletedVacancyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_LOCALE, useValue: 'en-GB' }, src_app_services_vacancy_service__WEBPACK_IMPORTED_MODULE_0__.VacancyService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _completed_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_3__.CompletedVacancyRoutingModule,
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CompletedVacancyModule, { declarations: [_completed_vacancy_component__WEBPACK_IMPORTED_MODULE_2__.CompletedVacancyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _completed_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_3__.CompletedVacancyRoutingModule,
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
//# sourceMappingURL=src_app_pages_external-vacancies_completed-vacancy_completed-vacancy_module_ts.js.map