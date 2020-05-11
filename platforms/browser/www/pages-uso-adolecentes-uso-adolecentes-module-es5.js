(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-uso-adolecentes-uso-adolecentes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/uso-adolecentes/uso-adolecentes.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/uso-adolecentes/uso-adolecentes.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"background ion-text-left\">\n    <ion-list>\n      <br>\n      <div class=\"cabecalho\">\n        <ion-label class=\"titu ion-text-center\"><b>Método contraceptivo: </b></ion-label>\n        <img src=\"../../../assets/icon/diu.png\">\n      </div>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Adolescente pode usar DIU?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>DIU provoca alguma infecção?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Perigoso engravidar na troca de anticoncepcional?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <br>\n    </ion-list>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/metodo-contraceptivo\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/uso-emergencia\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n  </div>\n  <ion-fab class=\"usar\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab class=\"infeccao\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab class=\"troca\">\n    <ion-fab-button (click)=\"presentAlert3()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/uso-adolecentes/uso-adolecentes-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/uso-adolecentes/uso-adolecentes-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: UsoAdolecentesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsoAdolecentesPageRoutingModule", function() { return UsoAdolecentesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _uso_adolecentes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uso-adolecentes.page */ "./src/app/pages/uso-adolecentes/uso-adolecentes.page.ts");




var routes = [
    {
        path: '',
        component: _uso_adolecentes_page__WEBPACK_IMPORTED_MODULE_3__["UsoAdolecentesPage"]
    }
];
var UsoAdolecentesPageRoutingModule = /** @class */ (function () {
    function UsoAdolecentesPageRoutingModule() {
    }
    UsoAdolecentesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UsoAdolecentesPageRoutingModule);
    return UsoAdolecentesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/uso-adolecentes/uso-adolecentes.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/uso-adolecentes/uso-adolecentes.module.ts ***!
  \*****************************************************************/
/*! exports provided: UsoAdolecentesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsoAdolecentesPageModule", function() { return UsoAdolecentesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _uso_adolecentes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uso-adolecentes-routing.module */ "./src/app/pages/uso-adolecentes/uso-adolecentes-routing.module.ts");
/* harmony import */ var _uso_adolecentes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uso-adolecentes.page */ "./src/app/pages/uso-adolecentes/uso-adolecentes.page.ts");







var UsoAdolecentesPageModule = /** @class */ (function () {
    function UsoAdolecentesPageModule() {
    }
    UsoAdolecentesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _uso_adolecentes_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsoAdolecentesPageRoutingModule"]
            ],
            declarations: [_uso_adolecentes_page__WEBPACK_IMPORTED_MODULE_6__["UsoAdolecentesPage"]]
        })
    ], UsoAdolecentesPageModule);
    return UsoAdolecentesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/uso-adolecentes/uso-adolecentes.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/uso-adolecentes/uso-adolecentes.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background-image: url('metodo.jpg');\n  background-size: 100% 100%;\n  width: 100%;\n}\n\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 120px;\n  border-radius: 25px;\n}\n\n.cabecalho {\n  text-align: center;\n}\n\nion-radio {\n  --color-checked: #ff6c92;\n}\n\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\n\nimg {\n  height: 25px;\n}\n\nion-list-header {\n  margin-left: 2%;\n}\n\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n\n.usar {\n  position: absolute;\n  top: 35%;\n  margin-left: 75%;\n}\n\n.infeccao {\n  position: absolute;\n  top: 57%;\n  margin-left: 75%;\n}\n\n.troca {\n  position: absolute;\n  top: 79%;\n  margin-left: 75%;\n}\n\nion-fab-button {\n  width: 85px;\n  height: 85px;\n}\n\nion-list-header {\n  margin-left: 2%;\n}\n\n.rodape {\n  margin-top: 5px;\n  margin-bottom: 55px;\n}\n\n.boneca {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy91c28tYWRvbGVjZW50ZXMvdXNvLWFkb2xlY2VudGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNvLWFkb2xlY2VudGVzL3Vzby1hZG9sZWNlbnRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksd0JBQUE7QUNHSjs7QUREQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7QUNLSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSUo7O0FEREE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpBO0VBQ0ksZUFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDUUo7O0FETkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNvLWFkb2xlY2VudGVzL3Vzby1hZG9sZWNlbnRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYmFja2dyb3VkOiAjYzhmZmZmOyBcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvbWV0b2RvLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2I1ZjBmMDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5jYWJlY2FsaG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLXJhZGlve1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmltZ3tcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cblxuaW9uLWxpc3QtaGVhZGVye1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuaW9uLWZhYntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG4vL2JvdMOjbyBib25lY2Fcbi51c2Fye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM1JTtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xufVxuLmluZmVjY2Fve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU3JTtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xufVxuLnRyb2Nhe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDc5JTtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xufVxuLy90YW1hbmhvIGRvIGJvdMOjbyBib25lY2Fcbmlvbi1mYWItYnV0dG9ue1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIGhlaWdodDogODVweDtcbn1cbmlvbi1saXN0LWhlYWRlcntcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG4ucm9kYXBle1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xufVxuLmJvbmVjYXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweFxufVxuIiwiLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VkOiAjYzhmZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL21ldG9kby5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZjBmMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5jYWJlY2FsaG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuaW9uLWZhYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1NXB4O1xuICBtYXJnaW4tbGVmdDogODAlO1xufVxuXG4udXNhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5pbmZlY2NhbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NyU7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi50cm9jYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3OSU7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDg1cHg7XG4gIGhlaWdodDogODVweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4ucm9kYXBlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1NXB4O1xufVxuXG4uYm9uZWNhIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/uso-adolecentes/uso-adolecentes.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/uso-adolecentes/uso-adolecentes.page.ts ***!
  \***************************************************************/
/*! exports provided: UsoAdolecentesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsoAdolecentesPage", function() { return UsoAdolecentesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var UsoAdolecentesPage = /** @class */ (function () {
    function UsoAdolecentesPage(AlertController) {
        this.AlertController = AlertController;
    }
    UsoAdolecentesPage.prototype.presentAlert1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'Adolescente pode usar DIU?',
                            message: 'O uso de DIU por adolescentes é um método muito seguro.',
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsoAdolecentesPage.prototype.presentAlert2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'DIU provoca alguma infecção?',
                            message: 'O DIU não provoca infecções. Estas são causados por relações sexuais desprotegidas.',
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsoAdolecentesPage.prototype.presentAlert3 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'Perigoso engravidar na troca de anticoncepcional?',
                            message: '',
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsoAdolecentesPage.prototype.ngOnInit = function () {
    };
    UsoAdolecentesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    UsoAdolecentesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uso-adolecentes',
            template: __webpack_require__(/*! raw-loader!./uso-adolecentes.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/uso-adolecentes/uso-adolecentes.page.html"),
            styles: [__webpack_require__(/*! ./uso-adolecentes.page.scss */ "./src/app/pages/uso-adolecentes/uso-adolecentes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], UsoAdolecentesPage);
    return UsoAdolecentesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-uso-adolecentes-uso-adolecentes-module-es5.js.map