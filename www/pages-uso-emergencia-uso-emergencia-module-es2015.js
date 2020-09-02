(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-uso-emergencia-uso-emergencia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/uso-emergencia/uso-emergencia.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/uso-emergencia/uso-emergencia.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"background ion-text-left\">\n    <div class=\"title ion-text-center\">Métodos contraceptivos</div>\n    <ion-list>\n\n      <div class=\"cabecalho\">\n        <ion-label class=\"titu ion-text-center\"><b>Contraceptivo de Emergência: </b></ion-label>\n        <img src=\"../../../assets/icon/dia-seguinte.png\">\n      </div>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Pílula do dia seguinte, já tomou alguma vez?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Pílula do dia seguinte é um método anticoncepcional?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Posso usar regurlamente como método contraceptivo?</b></ion-label>\n        </ion-list-header>\n\n        <div class=\"coluna1\">\n          <ion-item>\n            <ion-label>Sim</ion-label>\n            <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n          </ion-item>\n        </div>\n\n        <div class=\"coluna2\">\n          <ion-item>\n            <ion-label>Não</ion-label>\n            <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n          </ion-item>\n        </div>\n\n        <ion-item>\n          <ion-label>Às vezes</ion-label>\n          <ion-radio slot=\"start\" value=\"as-vezes\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/uso-adolecentes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>back</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/sexo\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>next</b>\n      </ion-button>\n    </div>\n  </div>\n\n  <ion-fab class=\"pilula-dia-seguinte\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.background {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background-image: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  top: 3%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 10%;\n  border-radius: 25px;\n}\n.cabecalho {\n  text-align: center;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 25px;\n}\nion-list-header {\n  margin-left: 2%;\n}\nion-fab {\n  top: 10%;\n  margin-left: 70%;\n}\n.coluna1 {\n  width: 50%;\n  margin-left: 1px;\n  float: left;\n}\n.coluna2 {\n  width: 50%;\n  margin-left: 50%;\n}\n.pilula-dia-seguinte {\n  top: 48%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\nion-fab-button {\n  width: 80px;\n  height: 80px;\n}\n.boneca {\n  width: 70px;\n  height: 85px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy91c28tZW1lcmdlbmNpYS91c28tZW1lcmdlbmNpYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Vzby1lbWVyZ2VuY2lhL3Vzby1lbWVyZ2VuY2lhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RkFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0dKO0FEREE7RUFDSSxrQkFBQTtBQ0lKO0FERkE7RUFDSSx3QkFBQTtBQ0tKO0FESEE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FDTUo7QURKQTtFQUNJLFlBQUE7QUNPSjtBRExBO0VBQ0ksZUFBQTtBQ1FKO0FETkE7RUFDSSxRQUFBO0VBQ0EsZ0JBQUE7QUNTSjtBRFBBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1VKO0FEUkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNXSjtBRFRBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNZSjtBRFZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNhSjtBRFhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNjSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Vzby1lbWVyZ2VuY2lhL3Vzby1lbWVyZ2VuY2lhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcbi5iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7IFxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzJTtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwOyBcbn1cbmlvbi1saXN0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiNWYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4OyAgXG59XG4uY2FiZWNhbGhve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pbWd7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuaW9uLWxpc3QtaGVhZGVye1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn1cbmlvbi1mYWJ7XG4gICAgdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTsgICBcbn1cbi5jb2x1bmExe1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5jb2x1bmEye1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTsgICAgXG59XG4ucGlsdWxhLWRpYS1zZWd1aW50ZXtcbiAgICB0b3A6IDQ4JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDglO1xuICAgIGhlaWdodDogODBweDtcbn1cbmlvbi1mYWItYnV0dG9ue1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbn1cbi5ib25lY2F7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA4NXB4O1xufVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMlO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xuICBjb2xvcjogIzZkNGM4MDtcbn1cblxuaW9uLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmNhYmVjYWxobyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG5pb24tZmFiIHtcbiAgdG9wOiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiA3MCU7XG59XG5cbi5jb2x1bmExIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb2x1bmEyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuLnBpbHVsYS1kaWEtc2VndWludGUge1xuICB0b3A6IDQ4JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOCU7XG4gIGhlaWdodDogODBweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uYm9uZWNhIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogODVweDtcbn0iXX0= */"

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