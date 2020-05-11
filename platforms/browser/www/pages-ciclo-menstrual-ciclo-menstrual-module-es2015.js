(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ciclo-menstrual-ciclo-menstrual-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <ion-list>\n      <br>\n      <ion-label><b>Calendário menstrual</b></ion-label>\n\n      <ion-radio-group>\n\n        <ion-item>\n          <ion-label><b>Inicio</b></ion-label>\n          <ion-datetime value=\"2020-01-01\" placeholder=\"Select Date\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label><b>Final</b></ion-label>\n          <ion-datetime value=\"2020-01-21\" placeholder=\"Select Date\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <div class=\"duracao\">\n            <div>\n              <ion-label><b>Duração do ciclo</b></ion-label>\n            </div>\n            <div>\n              <ion-datetime displayFormat=\"D\" placeholder=\"Selecione quantos dias\"></ion-datetime>\n            </div>\n          </div>\n        </ion-item>\n\n        <ion-item>\n          <div class=\"lembrete\">\n            <ion-label><b>Lembrete</b></ion-label>\n            <div>\n              <ion-label>Quantos dias antes:</ion-label>\n              <ion-input placeholder=\"Digite quantos dias\"></ion-input>\n            </div>\n            <div>\n              <ion-label>Hora do lembrete:</ion-label>\n              <ion-datetime displayFormat=\"HH:mm\" placeholder=\"Selecione hora\"></ion-datetime>\n            </div>\n          </div>\n        </ion-item>\n\n      </ion-radio-group>\n\n      <br>\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/higiene-tres\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/ciclo-menstrual-dois\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ciclo-menstrual/ciclo-menstrual-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual/ciclo-menstrual-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CicloMenstrualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloMenstrualPageRoutingModule", function() { return CicloMenstrualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ciclo_menstrual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ciclo-menstrual.page */ "./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.ts");




const routes = [
    {
        path: '',
        component: _ciclo_menstrual_page__WEBPACK_IMPORTED_MODULE_3__["CicloMenstrualPage"]
    }
];
let CicloMenstrualPageRoutingModule = class CicloMenstrualPageRoutingModule {
};
CicloMenstrualPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CicloMenstrualPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ciclo-menstrual/ciclo-menstrual.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual/ciclo-menstrual.module.ts ***!
  \*****************************************************************/
/*! exports provided: ClicoMenstrualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClicoMenstrualPageModule", function() { return ClicoMenstrualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ciclo_menstrual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ciclo-menstrual-routing.module */ "./src/app/pages/ciclo-menstrual/ciclo-menstrual-routing.module.ts");
/* harmony import */ var _ciclo_menstrual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ciclo-menstrual.page */ "./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.ts");







let ClicoMenstrualPageModule = class ClicoMenstrualPageModule {
};
ClicoMenstrualPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ciclo_menstrual_routing_module__WEBPACK_IMPORTED_MODULE_5__["CicloMenstrualPageRoutingModule"]
        ],
        declarations: [_ciclo_menstrual_page__WEBPACK_IMPORTED_MODULE_6__["CicloMenstrualPage"]]
    })
], ClicoMenstrualPageModule);



/***/ }),

/***/ "./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('clico.png');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-color: #ff6c92;\n}\n\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 100px;\n  border-radius: 25px;\n}\n\nion-radio {\n  --color-checked: #ff6c92;\n}\n\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n  margin-top: 4px;\n}\n\nion-label {\n  margin-top: 12px;\n}\n\nion-datetime {\n  margin-top: 5px;\n}\n\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n\nion-list-header {\n  margin-left: 2%;\n}\n\n.rodape {\n  margin-top: 5px;\n  margin-bottom: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9jaWNsby1tZW5zdHJ1YWwvY2ljbG8tbWVuc3RydWFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2ljbG8tbWVuc3RydWFsL2NpY2xvLW1lbnN0cnVhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLHdCQUFBO0FDRUo7O0FEQUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7QUNJSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDS0o7O0FERkE7RUFDSSxlQUFBO0FDS0o7O0FERkE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpY2xvLW1lbnN0cnVhbC9jaWNsby1tZW5zdHJ1YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9jbGljby5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZjOTI7XG59XG5cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2I1ZjBmMDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xufVxuaW9uLWxhYmVse1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbmlvbi1kYXRldGltZXtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5pb24tZmFie1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDU1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbn1cblxuaW9uLWxpc3QtaGVhZGVye1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLnJvZGFwZXtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTVweDtcbn1cblxuXG4iLCIuYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9jbGljby5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZjOTI7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZjBmMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuaW9uLWZhYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1NXB4O1xuICBtYXJnaW4tbGVmdDogODAlO1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5yb2RhcGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDU1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.ts ***!
  \***************************************************************/
/*! exports provided: CicloMenstrualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloMenstrualPage", function() { return CicloMenstrualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CicloMenstrualPage = class CicloMenstrualPage {
    constructor() { }
    ngOnInit() {
    }
};
CicloMenstrualPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ciclo-menstrual',
        template: __webpack_require__(/*! raw-loader!./ciclo-menstrual.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.html"),
        styles: [__webpack_require__(/*! ./ciclo-menstrual.page.scss */ "./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CicloMenstrualPage);



/***/ })

}]);
//# sourceMappingURL=pages-ciclo-menstrual-ciclo-menstrual-module-es2015.js.map