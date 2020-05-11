(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-uso-emergencia-uso-emergencia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/uso-emergencia/uso-emergencia.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/uso-emergencia/uso-emergencia.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"background ion-text-left\">\n    <ion-list>\n      <br>\n      <div class=\"cabecalho\">\n        <ion-label class=\"titu ion-text-center\"><b>Contraceptivo de Emergência: </b></ion-label>\n        <img src=\"../../../assets/icon/dia-seguinte.png\">\n      </div>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Pílula do dia seguinte, já tomou alguma vez?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n        <br>\n      </ion-radio-group>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Pílula do dia seguinte é um método anticoncepcional?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Posso usar regurlamente como método contraceptivo?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Às vezes</ion-label>\n          <ion-radio slot=\"start\" value=\"as-vezes\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n      <br>\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/uso-adolecentes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/sexo\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>próximo</b>\n      </ion-button>\n    </div>\n  </div>\n\n  <ion-fab class=\"pilula-dia-seguinte\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/uso-emergencia/uso-emergencia-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/uso-emergencia/uso-emergencia-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: UsoEmergenciaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsoEmergenciaPageRoutingModule", function() { return UsoEmergenciaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _uso_emergencia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uso-emergencia.page */ "./src/app/pages/uso-emergencia/uso-emergencia.page.ts");




const routes = [
    {
        path: '',
        component: _uso_emergencia_page__WEBPACK_IMPORTED_MODULE_3__["UsoEmergenciaPage"]
    }
];
let UsoEmergenciaPageRoutingModule = class UsoEmergenciaPageRoutingModule {
};
UsoEmergenciaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsoEmergenciaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/uso-emergencia/uso-emergencia.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/uso-emergencia/uso-emergencia.module.ts ***!
  \***************************************************************/
/*! exports provided: UsoEmergenciaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsoEmergenciaPageModule", function() { return UsoEmergenciaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _uso_emergencia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uso-emergencia-routing.module */ "./src/app/pages/uso-emergencia/uso-emergencia-routing.module.ts");
/* harmony import */ var _uso_emergencia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uso-emergencia.page */ "./src/app/pages/uso-emergencia/uso-emergencia.page.ts");







let UsoEmergenciaPageModule = class UsoEmergenciaPageModule {
};
UsoEmergenciaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _uso_emergencia_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsoEmergenciaPageRoutingModule"]
        ],
        declarations: [_uso_emergencia_page__WEBPACK_IMPORTED_MODULE_6__["UsoEmergenciaPage"]]
    })
], UsoEmergenciaPageModule);



/***/ }),

/***/ "./src/app/pages/uso-emergencia/uso-emergencia.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/uso-emergencia/uso-emergencia.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background-image: url('metodo.jpg');\n  background-size: 100% 100%;\n  width: 100%;\n}\n\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 120px;\n  border-radius: 25px;\n}\n\n.cabecalho {\n  text-align: center;\n}\n\nion-radio {\n  --color-checked: #ff6c92;\n}\n\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\n\nimg {\n  height: 25px;\n}\n\nion-list-header {\n  margin-left: 2%;\n}\n\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n\n.pilula-dia-seguinte {\n  position: absolute;\n  top: 60%;\n  margin-left: 75%;\n}\n\nion-fab-button {\n  width: 85px;\n  height: 85px;\n}\n\n.rodape {\n  margin-top: 5px;\n  margin-bottom: 55px;\n}\n\n.boneca {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy91c28tZW1lcmdlbmNpYS91c28tZW1lcmdlbmNpYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Vzby1lbWVyZ2VuY2lhL3Vzby1lbWVyZ2VuY2lhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSx3QkFBQTtBQ0dKOztBRERBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNvLWVtZXJnZW5jaWEvdXNvLWVtZXJnZW5jaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJhY2tncm91ZDogI2M4ZmZmZjsgXG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL21ldG9kby5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiNWYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uY2FiZWNhbGhve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pbWd7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG5cbmlvbi1saXN0LWhlYWRlcntcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbmlvbi1mYWJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTVweDtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xufVxuLy9ib3TDo28gYm9uZWNhXG5cbi5waWx1bGEtZGlhLXNlZ3VpbnRle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwJTtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG4vL3RhbWFuaG8gZG8gYm90w6NvIGJvbmVjYVxuaW9uLWZhYi1idXR0b257XG4gICAgd2lkdGg6IDg1cHg7XG4gICAgaGVpZ2h0OiA4NXB4O1xufVxuLnJvZGFwZXtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTVweDtcbn1cbi5ib25lY2F7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHhcbn1cbiIsIi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91ZDogI2M4ZmZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9tZXRvZG8uanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uY2FiZWNhbGhvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbmlvbi1mYWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTVweDtcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcbn1cblxuLnBpbHVsYS1kaWEtc2VndWludGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA4NXB4O1xuICBoZWlnaHQ6IDg1cHg7XG59XG5cbi5yb2RhcGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDU1cHg7XG59XG5cbi5ib25lY2Ege1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/uso-emergencia/uso-emergencia.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/uso-emergencia/uso-emergencia.page.ts ***!
  \*************************************************************/
/*! exports provided: UsoEmergenciaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsoEmergenciaPage", function() { return UsoEmergenciaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let UsoEmergenciaPage = class UsoEmergenciaPage {
    constructor(AlertController) {
        this.AlertController = AlertController;
    }
    presentAlert1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.AlertController.create({
                header: 'Pílula do dia seguinte é um método anticoncepcional?',
                message: 'Se fez sexo sem proteção pode tomar pílula de emergência imediatamente. Ela pode ser tomada até 72 h depois da relação sexual.',
                buttons: ['Ok']
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    ngOnInit() {
    }
};
UsoEmergenciaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
UsoEmergenciaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uso-emergencia',
        template: __webpack_require__(/*! raw-loader!./uso-emergencia.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/uso-emergencia/uso-emergencia.page.html"),
        styles: [__webpack_require__(/*! ./uso-emergencia.page.scss */ "./src/app/pages/uso-emergencia/uso-emergencia.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], UsoEmergenciaPage);



/***/ })

}]);
//# sourceMappingURL=pages-uso-emergencia-uso-emergencia-module-es2015.js.map