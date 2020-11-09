(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ciclo-menstrual-tres-ciclo-menstrual-tres-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <div class=\"title ion-text-center\">Ciclo menstrual</div>\n    <ion-list>\n      <br>\n      <div class=\"humor\">\n        <ion-radio-group>\n\n          <ion-list-header>\n            <div>\n              <div>\n                <img src=\"../../../assets/icon/humor.png\" style=\"float: left\">\n              </div>\n              <div class=\"text1\">\n                <ion-label><b>Humor</b></ion-label>\n              </div>\n            </div>\n          </ion-list-header>\n\n          <div>\n            <div class=\"coluna1\">\n              <ion-item>\n                <ion-label>Indiferente</ion-label>\n                <ion-checkbox color=\" secondary\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Feliz</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Triste</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Furioso</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Excitado</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n            </div>\n\n            <div class=\"coluna2\"></div>\n            <ion-item>\n              <ion-label>Inspirado</ion-label>\n              <ion-checkbox color=\"secondary\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>Melancólico</ion-label>\n              <ion-checkbox color=\"secondary\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>Imparcial</ion-label>\n              <ion-checkbox color=\"secondary\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>Ansioso</ion-label>\n              <ion-checkbox color=\"secondary\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>Estressado</ion-label>\n              <ion-checkbox color=\"secondary\"></ion-checkbox>\n            </ion-item>\n\n          </div>\n        </ion-radio-group>\n      </div>\n\n      <div class=\"relacao-sexual\">\n        <ion-radio-group>\n\n          <ion-list-header>\n            <div>\n              <div>\n                <img src=\"../../../assets/icon/sexo.png\" style=\"float: left\">\n              </div>\n              <div class=\"text2\">\n                <ion-label><b>Relação sexual hoje:</b></ion-label>\n              </div>\n            </div>\n          </ion-list-header>\n\n          <div>\n            <div class=\"coluna1\">\n              <ion-item>\n                <ion-label>Protegido</ion-label>\n                <ion-checkbox color=\" secondary\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Masturbação</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n            </div>\n\n            <div class=\"coluna2\">\n              <ion-item>\n                <ion-label>Desprotegido</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Orgasmo</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n            </div>\n\n            <div class=\"ultimo-text\">\n              <ion-item>\n                <ion-label>Alto desejo sexual\n                    </ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n            </div>\n\n          </div>\n\n        </ion-radio-group>\n      </div>\n      <br>\n    </ion-list>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"back()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" (click)=\"menu()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" (click)=\"next()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CicloMenstrualTresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloMenstrualTresPageRoutingModule", function() { return CicloMenstrualTresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ciclo_menstrual_tres_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ciclo-menstrual-tres.page */ "./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres.page.ts");




const routes = [
    {
        path: '',
        component: _ciclo_menstrual_tres_page__WEBPACK_IMPORTED_MODULE_3__["CicloMenstrualTresPage"]
    }
];
let CicloMenstrualTresPageRoutingModule = class CicloMenstrualTresPageRoutingModule {
};
CicloMenstrualTresPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CicloMenstrualTresPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres.module.ts ***!
  \***************************************************************************/
/*! exports provided: CicloMenstrualTresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloMenstrualTresPageModule", function() { return CicloMenstrualTresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ciclo_menstrual_tres_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ciclo-menstrual-tres-routing.module */ "./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres-routing.module.ts");
/* harmony import */ var _ciclo_menstrual_tres_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ciclo-menstrual-tres.page */ "./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres.page.ts");







let CicloMenstrualTresPageModule = class CicloMenstrualTresPageModule {
};
CicloMenstrualTresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ciclo_menstrual_tres_routing_module__WEBPACK_IMPORTED_MODULE_5__["CicloMenstrualTresPageRoutingModule"]
        ],
        declarations: [_ciclo_menstrual_tres_page__WEBPACK_IMPORTED_MODULE_6__["CicloMenstrualTresPage"]]
    })
], CicloMenstrualTresPageModule);



/***/ }),

/***/ "./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n  text-align: center;\n  margin-top: 10%;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 2%;\n  border-radius: 25px;\n  height: 500px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n  height: 45px;\n}\nimg {\n  height: 33px;\n}\nion-list-header {\n  margin-left: 2%;\n  padding: 0px;\n}\nion-fab {\n  margin-left: 14%;\n}\n.text1 {\n  width: 100px;\n  margin-left: 10%;\n  margin-top: 2px;\n}\n.text2 {\n  width: 200px;\n  margin-left: 10%;\n  margin-top: 4px;\n}\n.coluna1 {\n  width: 50%;\n  margin-left: 1px;\n  float: left;\n}\n.coluna2 {\n  width: 50%;\n  margin-left: 50%;\n}\n.ultimo-text {\n  position: relative;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9jaWNsby1tZW5zdHJ1YWwtdHJlcy9jaWNsby1tZW5zdHJ1YWwtdHJlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NpY2xvLW1lbnN0cnVhbC10cmVzL2NpY2xvLW1lbnN0cnVhbC10cmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RkFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUo7QURBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0dKO0FEREE7RUFDSSx3QkFBQTtBQ0lKO0FERkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0tKO0FESEE7RUFDSSxZQUFBO0FDTUo7QURKQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDT0o7QURMQTtFQUNJLGdCQUFBO0FDUUo7QUROQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNTSjtBRFBBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1VKO0FEUkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDV0o7QURUQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ1lKO0FEVkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNhSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpY2xvLW1lbnN0cnVhbC10cmVzL2NpY2xvLW1lbnN0cnVhbC10cmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcbi5iYWNrZ3JvdWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJhY2tncm91ZDogI2M4ZmZmZjsgXG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4udGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5pb24tbGlzdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYjVmMGYwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4OyAgXG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuaW1ne1xuICAgIGhlaWdodDogMzNweDtcbn1cbmlvbi1saXN0LWhlYWRlcntcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgcGFkZGluZzogMHB4O1xufVxuaW9uLWZhYntcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xufVxuLnRleHQxe1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cbi50ZXh0MntcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG4uY29sdW5hMXtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uY29sdW5hMntcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7ICAgIFxufVxuLnVsdGltby10ZXh0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VkOiAjYzhmZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LWZhbWlseTogXCJBbWF0aWMgU0NcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICM2ZDRjODA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG5pb24tbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZjBmMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMzNweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1mYWIge1xuICBtYXJnaW4tbGVmdDogMTQlO1xufVxuXG4udGV4dDEge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnRleHQyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5jb2x1bmExIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb2x1bmEyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuLnVsdGltby10ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres.page.ts ***!
  \*************************************************************************/
/*! exports provided: CicloMenstrualTresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloMenstrualTresPage", function() { return CicloMenstrualTresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/health.service */ "./src/app/services/health.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







let CicloMenstrualTresPage = class CicloMenstrualTresPage {
    constructor(healthService, loadingCtrl, toastCtrl, authService, activeRoute, router) {
        this.healthService = healthService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.health = {};
        this.healthID = null;
    }
    ngOnInit() {
        this.formattingDay();
        this.check();
    }
    formattingDay() {
        var format = new Date();
        var day;
        var month;
        var year = format.getFullYear();
        var aux;
        if (format.getDate() < 10) {
            day = "0" + format.getDate();
        }
        else {
            day = format.getDate();
        }
        if (format.getMonth() + 1 < 10) {
            aux = format.getMonth() + 1;
            month = "0" + aux;
        }
        else {
            month = format.getMonth() + 1;
        }
        this.today = day + "-" + month + "-" + year;
    }
    check() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if ((yield this.healthService.checkExists(this.today)) == true) {
                this.loadHealth();
            }
        });
    }
    loadHealth() {
        this.healthSubscription = this.healthService.getHealth(this.today).subscribe(data => {
            this.health = data;
        });
    }
    back() {
        this.saveHealth();
        return this.router.navigate(["/sintomas"]);
    }
    menu() {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    }
    next() {
        this.saveHealth();
        return this.router.navigate(["/metodo-contraceptivo"]);
    }
    saveHealth() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.presentLoading();
            this.health.userID = this.authService.getAuth().currentUser.uid;
            if (this.healthID) {
            }
            else {
                this.health.data = this.today;
                try {
                    yield this.healthService.addHealth(this.health);
                    yield this.loading.dismiss();
                }
                catch (error) {
                    console.log(error);
                    this.presentToast("Erro ao tentar salvar");
                    this.loading.dismiss();
                }
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: "Por favor, aguarde...",
            });
            return this.loading.present();
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({ message, duration: 2000 });
            toast.present();
        });
    }
};
CicloMenstrualTresPage.ctorParameters = () => [
    { type: src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CicloMenstrualTresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ciclo-menstrual-tres',
        template: __webpack_require__(/*! raw-loader!./ciclo-menstrual-tres.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres.page.html"),
        styles: [__webpack_require__(/*! ./ciclo-menstrual-tres.page.scss */ "./src/app/pages/ciclo-menstrual-tres/ciclo-menstrual-tres.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CicloMenstrualTresPage);



/***/ })

}]);
//# sourceMappingURL=pages-ciclo-menstrual-tres-ciclo-menstrual-tres-module-es2015.js.map