(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-saude-vaginal-dois-dicas-saude-vaginal-dois-dicas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud\">\n\n    <div class=\"container ion-button-center\">\n      <ion-button expand=\"full\" fill=\"outline\">O que pode ser um sangramento <br>vaginal fora do período menstrual?\n      </ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">Qual a diferença entre <br>sangramento e menstruação?</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">Quais são os sintomas de hemorragia?</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">Porque sentimos cólica menstrual?</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">Cólica menstrual muito forte<br>pode ser sinal de que?</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">Quais os principais sintomas<br>que acompanham à cólica menstrual?\n      </ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">O que fazer para parar <br>à cólica menstrual?</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">É normal sentir <br>dor na relação sexual?</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">Quanto se tem relação <br>pode sentir dor no útero?</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">O que pode ser sangramento <br>durante a relação sexual?</ion-button>\n    </div>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button href=\"saude-vaginal-dois\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: SaudeVaginalDoisDicasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeVaginalDoisDicasPageRoutingModule", function() { return SaudeVaginalDoisDicasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _saude_vaginal_dois_dicas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saude-vaginal-dois-dicas.page */ "./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas.page.ts");




var routes = [
    {
        path: '',
        component: _saude_vaginal_dois_dicas_page__WEBPACK_IMPORTED_MODULE_3__["SaudeVaginalDoisDicasPage"]
    }
];
var SaudeVaginalDoisDicasPageRoutingModule = /** @class */ (function () {
    function SaudeVaginalDoisDicasPageRoutingModule() {
    }
    SaudeVaginalDoisDicasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SaudeVaginalDoisDicasPageRoutingModule);
    return SaudeVaginalDoisDicasPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SaudeVaginalDoisDicasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeVaginalDoisDicasPageModule", function() { return SaudeVaginalDoisDicasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _saude_vaginal_dois_dicas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saude-vaginal-dois-dicas-routing.module */ "./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas-routing.module.ts");
/* harmony import */ var _saude_vaginal_dois_dicas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saude-vaginal-dois-dicas.page */ "./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas.page.ts");







var SaudeVaginalDoisDicasPageModule = /** @class */ (function () {
    function SaudeVaginalDoisDicasPageModule() {
    }
    SaudeVaginalDoisDicasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _saude_vaginal_dois_dicas_routing_module__WEBPACK_IMPORTED_MODULE_5__["SaudeVaginalDoisDicasPageRoutingModule"]
            ],
            declarations: [_saude_vaginal_dois_dicas_page__WEBPACK_IMPORTED_MODULE_6__["SaudeVaginalDoisDicasPage"]]
        })
    ], SaudeVaginalDoisDicasPageModule);
    return SaudeVaginalDoisDicasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('dicas.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-color: #ff6c92;\n}\n\n.container {\n  position: absolute;\n  top: 20%;\n  bottom: 20%;\n  width: 100%;\n}\n\n.rodape {\n  position: relative;\n  top: 85%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsLWRvaXMtZGljYXMvc2F1ZGUtdmFnaW5hbC1kb2lzLWRpY2FzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2F1ZGUtdmFnaW5hbC1kb2lzLWRpY2FzL3NhdWRlLXZhZ2luYWwtZG9pcy1kaWNhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsLWRvaXMtZGljYXMvc2F1ZGUtdmFnaW5hbC1kb2lzLWRpY2FzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvZGljYXMuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YzkyO1xufVxuLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMCU7XG4gICAgYm90dG9tOiAyMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb2RhcGV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogODUlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBcbn0iLCIuYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9kaWNhcy5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZjOTI7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICBib3R0b206IDIwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb2RhcGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogODUlO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas.page.ts ***!
  \*********************************************************************************/
/*! exports provided: SaudeVaginalDoisDicasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeVaginalDoisDicasPage", function() { return SaudeVaginalDoisDicasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SaudeVaginalDoisDicasPage = /** @class */ (function () {
    function SaudeVaginalDoisDicasPage() {
    }
    SaudeVaginalDoisDicasPage.prototype.ngOnInit = function () {
    };
    SaudeVaginalDoisDicasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-saude-vaginal-dois-dicas',
            template: __webpack_require__(/*! raw-loader!./saude-vaginal-dois-dicas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas.page.html"),
            styles: [__webpack_require__(/*! ./saude-vaginal-dois-dicas.page.scss */ "./src/app/pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SaudeVaginalDoisDicasPage);
    return SaudeVaginalDoisDicasPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-saude-vaginal-dois-dicas-saude-vaginal-dois-dicas-module-es5.js.map