(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-saude-relacoes-saude-relacoes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/saude-relacoes/saude-relacoes.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/saude-relacoes/saude-relacoes.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <ion-list>\n      <br>\n      <div class=\"cabecalho\">\n        <img src=\"../../../assets/icon/infeccao.png\">\n        <ion-label class=\"titu ion-text-center\"><b> Prática sexual e Infecções sexualmente transmissíveis</b>\n        </ion-label>\n      </div>\n      <br>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Fazer sexo oral e/ou anal sem proteção pode pegar uma infecção sexualmente transmissível?</b>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label><b>Se sim, qual(is):</b></ion-label>\n        </ion-item>\n      </ion-radio-group>\n      <br>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Fazer sexo sem camisinha pode levar a ter infecções sexualmente transmissíveis?</b>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>As vezes</ion-label>\n          <ion-radio slot=\"start\" value=\"asvezes\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/sexo\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b></ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b></ion-button>\n      <ion-button color=\"primary\" href=\"/gravidez\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b></ion-button>\n\n    </div>\n  </div>\n  <ion-fab class=\"protecao\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab class=\"camisinha\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/saude-relacoes/saude-relacoes-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/saude-relacoes/saude-relacoes-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SaudeRelacoesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeRelacoesPageRoutingModule", function() { return SaudeRelacoesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _saude_relacoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saude-relacoes.page */ "./src/app/pages/saude-relacoes/saude-relacoes.page.ts");




var routes = [
    {
        path: '',
        component: _saude_relacoes_page__WEBPACK_IMPORTED_MODULE_3__["SaudeRelacoesPage"]
    }
];
var SaudeRelacoesPageRoutingModule = /** @class */ (function () {
    function SaudeRelacoesPageRoutingModule() {
    }
    SaudeRelacoesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SaudeRelacoesPageRoutingModule);
    return SaudeRelacoesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/saude-relacoes/saude-relacoes.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/saude-relacoes/saude-relacoes.module.ts ***!
  \***************************************************************/
/*! exports provided: SaudeRelacoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeRelacoesPageModule", function() { return SaudeRelacoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _saude_relacoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saude-relacoes-routing.module */ "./src/app/pages/saude-relacoes/saude-relacoes-routing.module.ts");
/* harmony import */ var _saude_relacoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saude-relacoes.page */ "./src/app/pages/saude-relacoes/saude-relacoes.page.ts");







var SaudeRelacoesPageModule = /** @class */ (function () {
    function SaudeRelacoesPageModule() {
    }
    SaudeRelacoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _saude_relacoes_routing_module__WEBPACK_IMPORTED_MODULE_5__["SaudeRelacoesPageRoutingModule"]
            ],
            declarations: [_saude_relacoes_page__WEBPACK_IMPORTED_MODULE_6__["SaudeRelacoesPage"]]
        })
    ], SaudeRelacoesPageModule);
    return SaudeRelacoesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/saude-relacoes/saude-relacoes.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/saude-relacoes/saude-relacoes.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('sexo.jpg');\n  background-size: 100% 100%;\n  width: 100%;\n}\n\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 100px;\n  border-radius: 25px;\n}\n\n.cabecalho {\n  text-align: center;\n}\n\nion-radio {\n  --color-checked: #ff6c92;\n}\n\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\n\nimg {\n  height: 25px;\n}\n\nion-list-header {\n  padding: 0px;\n  text-align: center;\n}\n\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n\n.protecao {\n  position: absolute;\n  top: 48%;\n  margin-left: 75%;\n}\n\n.camisinha {\n  position: absolute;\n  top: 75%;\n  margin-left: 75%;\n}\n\nion-fab-button {\n  width: 85px;\n  height: 85px;\n}\n\n.rodape {\n  margin-top: 5px;\n  margin-bottom: 55px;\n}\n\n.boneca {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zYXVkZS1yZWxhY29lcy9zYXVkZS1yZWxhY29lcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NhdWRlLXJlbGFjb2VzL3NhdWRlLXJlbGFjb2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEQUE7RUFDSSx3QkFBQTtBQ0dKOztBRERBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBREZBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDS0o7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0tKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDS0o7O0FEREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2F1ZGUtcmVsYWNvZXMvc2F1ZGUtcmVsYWNvZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYmFja2dyb3VkOiAjYzhmZmZmOyBcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvc2V4by5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYjVmMGYwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmNhYmVjYWxob3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBcbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pbWd7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXJ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWZhYntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG4vL2JvdMOjbyBib25lY2FcblxuLnByb3RlY2Fve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ4JTtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xufVxuLmNhbWlzaW5oYXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuLy90YW1hbmhvIGRvIGJvdMOjbyBib25lY2Fcbmlvbi1mYWItYnV0dG9ue1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIGhlaWdodDogODVweDtcbn1cbi5yb2RhcGV7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XG59XG4uYm9uZWNhe1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4XG59IiwiLmJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvc2V4by5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZjBmMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5jYWJlY2FsaG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tZmFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDU1cHg7XG4gIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG5cbi5wcm90ZWNhbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0OCU7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5jYW1pc2luaGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzUlO1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA4NXB4O1xuICBoZWlnaHQ6IDg1cHg7XG59XG5cbi5yb2RhcGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDU1cHg7XG59XG5cbi5ib25lY2Ege1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/saude-relacoes/saude-relacoes.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/saude-relacoes/saude-relacoes.page.ts ***!
  \*************************************************************/
/*! exports provided: SaudeRelacoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeRelacoesPage", function() { return SaudeRelacoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SaudeRelacoesPage = /** @class */ (function () {
    function SaudeRelacoesPage(AlertController) {
        this.AlertController = AlertController;
    }
    SaudeRelacoesPage.prototype.presentAlert1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'Fazer sexo oral e/ou anal posso pegar uma  infecção sexualmente transmissível?',
                            message: 'HPV, gonorreia, clamídia e outras.',
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
    SaudeRelacoesPage.prototype.presentAlert2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'Fazer sexo sem camisinha pode levar a ter infecções sexualmente transmissíveis?',
                            message: 'Fazer sexo sem camisinha pode levar a infecções sexualmente transmissíveis e entupir as trompas impedindo a mulher de engravidar',
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
    SaudeRelacoesPage.prototype.ngOnInit = function () {
    };
    SaudeRelacoesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    SaudeRelacoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-saude-relacoes',
            template: __webpack_require__(/*! raw-loader!./saude-relacoes.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/saude-relacoes/saude-relacoes.page.html"),
            styles: [__webpack_require__(/*! ./saude-relacoes.page.scss */ "./src/app/pages/saude-relacoes/saude-relacoes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], SaudeRelacoesPage);
    return SaudeRelacoesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-saude-relacoes-saude-relacoes-module-es5.js.map