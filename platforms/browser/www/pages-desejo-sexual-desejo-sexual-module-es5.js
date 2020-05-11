(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-desejo-sexual-desejo-sexual-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/desejo-sexual/desejo-sexual.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/desejo-sexual/desejo-sexual.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <ion-list>\n      <br>\n      <div class=\"cabecalho\">\n        <img src=\"../../../assets/icon/sexo.png\">\n        <ion-label class=\"titu ion-text-center\"><b> Sexo e desejo sexual</b>\n        </ion-label>\n      </div>\n      <br>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>É normal não sentir desejo sexual nas relações?</b>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <br>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Como conseguir ter orgasmo?</b>\n            <ion-input></ion-input>\n          </ion-label>\n        </ion-list-header>\n      </ion-radio-group>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Masturbação é algo natural?</b>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <br>\n      <div class=\"cabecalho\">\n        <img src=\"../../../assets/icon/stop.png\">\n        <ion-label class=\"titu ion-text-center\"><b> Abuso sexual</b>\n        </ion-label>\n      </div>\n      <br>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Quando saber se sofreu um abuso sexual?</b>\n            <ion-input></ion-input>\n          </ion-label>\n        </ion-list-header>\n      </ion-radio-group>\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/gravidez\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b></ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b></ion-button>\n\n    </div>\n  </div>\n  <ion-fab class=\"orgasmo\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab class=\"abuso\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/desejo-sexual/desejo-sexual-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/desejo-sexual/desejo-sexual-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DesejoSexualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesejoSexualPageRoutingModule", function() { return DesejoSexualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _desejo_sexual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desejo-sexual.page */ "./src/app/pages/desejo-sexual/desejo-sexual.page.ts");




var routes = [
    {
        path: '',
        component: _desejo_sexual_page__WEBPACK_IMPORTED_MODULE_3__["DesejoSexualPage"]
    }
];
var DesejoSexualPageRoutingModule = /** @class */ (function () {
    function DesejoSexualPageRoutingModule() {
    }
    DesejoSexualPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DesejoSexualPageRoutingModule);
    return DesejoSexualPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/desejo-sexual/desejo-sexual.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/desejo-sexual/desejo-sexual.module.ts ***!
  \*************************************************************/
/*! exports provided: DesejoSexualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesejoSexualPageModule", function() { return DesejoSexualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _desejo_sexual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desejo-sexual-routing.module */ "./src/app/pages/desejo-sexual/desejo-sexual-routing.module.ts");
/* harmony import */ var _desejo_sexual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desejo-sexual.page */ "./src/app/pages/desejo-sexual/desejo-sexual.page.ts");







var DesejoSexualPageModule = /** @class */ (function () {
    function DesejoSexualPageModule() {
    }
    DesejoSexualPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _desejo_sexual_routing_module__WEBPACK_IMPORTED_MODULE_5__["DesejoSexualPageRoutingModule"]
            ],
            declarations: [_desejo_sexual_page__WEBPACK_IMPORTED_MODULE_6__["DesejoSexualPage"]]
        })
    ], DesejoSexualPageModule);
    return DesejoSexualPageModule;
}());



/***/ }),

/***/ "./src/app/pages/desejo-sexual/desejo-sexual.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/desejo-sexual/desejo-sexual.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('sexo.jpg');\n  background-size: 100% 100%;\n  width: 100%;\n}\n\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 100px;\n  border-radius: 25px;\n}\n\n.cabecalho {\n  margin-right: 20px;\n}\n\nion-radio {\n  --color-checked: #ff6c92;\n}\n\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\n\nimg {\n  height: 33px;\n}\n\nion-list-header {\n  margin-left: 2%;\n}\n\nion-input {\n  --background: #c8ffff;\n  --color: #4a1c75;\n  text-align: left;\n  border-radius: 25px;\n}\n\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n\n.orgasmo {\n  position: absolute;\n  top: 50%;\n  margin-left: 75%;\n}\n\n.abuso {\n  position: absolute;\n  top: 80%;\n  margin-left: 75%;\n}\n\nion-fab-button {\n  width: 85px;\n  height: 85px;\n}\n\n.rodape {\n  margin-top: 5px;\n  margin-bottom: 55px;\n}\n\n.boneca {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9kZXNlam8tc2V4dWFsL2Rlc2Vqby1zZXh1YWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXNlam8tc2V4dWFsL2Rlc2Vqby1zZXh1YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7QUNHSjs7QURBQTtFQUNJLHdCQUFBO0FDR0o7O0FEREE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0FDS0o7O0FERkE7RUFDSSxlQUFBO0FDS0o7O0FESEE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ09KOztBREhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ09KOztBRExBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rlc2Vqby1zZXh1YWwvZGVzZWpvLXNleHVhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7IFxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zZXhvLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiNWYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uY2FiZWNhbGhve1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcblxufVxuaW9uLXJhZGlve1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmltZ3tcbiAgICBoZWlnaHQ6IDMzcHg7XG59XG5cbmlvbi1saXN0LWhlYWRlcntcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG5pb24taW5wdXR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzhmZmZmO1xuICAgIC0tY29sb3I6ICM0YTFjNzU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuaW9uLWZhYntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG4vL2JvdMOjbyBib25lY2FcblxuLm9yZ2FzbW97XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG4uYWJ1c297XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi8vdGFtYW5obyBkbyBib3TDo28gYm9uZWNhXG5pb24tZmFiLWJ1dHRvbntcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6IDg1cHg7XG59XG4ucm9kYXBle1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xufVxuLmJvbmVjYXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweFxufSIsIi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VkOiAjYzhmZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3NleG8uanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uY2FiZWNhbGhvIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogI2M4ZmZmZjtcbiAgLS1jb2xvcjogIzRhMWM3NTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuaW9uLWZhYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1NXB4O1xuICBtYXJnaW4tbGVmdDogODAlO1xufVxuXG4ub3JnYXNtbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5hYnVzbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDg1cHg7XG4gIGhlaWdodDogODVweDtcbn1cblxuLnJvZGFwZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTVweDtcbn1cblxuLmJvbmVjYSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/desejo-sexual/desejo-sexual.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/desejo-sexual/desejo-sexual.page.ts ***!
  \***********************************************************/
/*! exports provided: DesejoSexualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesejoSexualPage", function() { return DesejoSexualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var DesejoSexualPage = /** @class */ (function () {
    function DesejoSexualPage(AlertController) {
        this.AlertController = AlertController;
    }
    DesejoSexualPage.prototype.presentAlert1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'Como conseguir ter  orgasmo',
                            message: 'O órgão do orgasmo na mulher é o clitóris. Menos de 30% das mulheres tem orgasmo com o movimento do pênis dentro da vagina. 70% dependem de manipulação do clitóris (masturbação)',
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
    DesejoSexualPage.prototype.presentAlert2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'Abuso sexual',
                            message: 'Se você sofreu abuso sexual fale com seu ginecologista ou com um psicólogo que eles podem te ajudar',
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
    DesejoSexualPage.prototype.ngOnInit = function () {
    };
    DesejoSexualPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    DesejoSexualPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-desejo-sexual',
            template: __webpack_require__(/*! raw-loader!./desejo-sexual.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/desejo-sexual/desejo-sexual.page.html"),
            styles: [__webpack_require__(/*! ./desejo-sexual.page.scss */ "./src/app/pages/desejo-sexual/desejo-sexual.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], DesejoSexualPage);
    return DesejoSexualPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-desejo-sexual-desejo-sexual-module-es5.js.map