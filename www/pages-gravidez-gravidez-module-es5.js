(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gravidez-gravidez-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/gravidez/gravidez.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/gravidez/gravidez.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <ion-list>\n      <br>\n      <div class=\"cabecalho\">\n        <img src=\"../../../assets/icon/gravidez.png\">\n        <ion-label class=\"titu ion-text-center\"><b> Práticas sexuais e gravidez</b>\n        </ion-label>\n      </div>\n      <br>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Pode fazer sexo na gravidez?</b>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <br>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Quanto tempo após o parto pode fazer sexo ?</b>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Logo após o parto</ion-label>\n          <ion-radio slot=\"start\" value=\"pos-parto\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>15 dias após o parto</ion-label>\n          <ion-radio slot=\"start\" value=\"15dias\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>40 dias após o parto</ion-label>\n          <ion-radio slot=\"start\" value=\"40dias\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não sei</ion-label>\n          <ion-radio slot=\"start\" value=\"naosei\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/saude-relacoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b></ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b></ion-button>\n      <ion-button color=\"primary\" href=\"/desejo-sexual\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b></ion-button>\n\n    </div>\n  </div>\n  <ion-fab class=\"gravidez\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab class=\"parto\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/gravidez/gravidez-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/gravidez/gravidez-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: GravidezPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GravidezPageRoutingModule", function() { return GravidezPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gravidez_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gravidez.page */ "./src/app/pages/gravidez/gravidez.page.ts");




var routes = [
    {
        path: '',
        component: _gravidez_page__WEBPACK_IMPORTED_MODULE_3__["GravidezPage"]
    }
];
var GravidezPageRoutingModule = /** @class */ (function () {
    function GravidezPageRoutingModule() {
    }
    GravidezPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GravidezPageRoutingModule);
    return GravidezPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/gravidez/gravidez.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/gravidez/gravidez.module.ts ***!
  \***************************************************/
/*! exports provided: GravidezPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GravidezPageModule", function() { return GravidezPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gravidez_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gravidez-routing.module */ "./src/app/pages/gravidez/gravidez-routing.module.ts");
/* harmony import */ var _gravidez_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gravidez.page */ "./src/app/pages/gravidez/gravidez.page.ts");







var GravidezPageModule = /** @class */ (function () {
    function GravidezPageModule() {
    }
    GravidezPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _gravidez_routing_module__WEBPACK_IMPORTED_MODULE_5__["GravidezPageRoutingModule"]
            ],
            declarations: [_gravidez_page__WEBPACK_IMPORTED_MODULE_6__["GravidezPage"]]
        })
    ], GravidezPageModule);
    return GravidezPageModule;
}());



/***/ }),

/***/ "./src/app/pages/gravidez/gravidez.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/gravidez/gravidez.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('sexo.jpg');\n  background-size: 100% 100%;\n  width: 100%;\n}\n\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 100px;\n  border-radius: 25px;\n}\n\n.cabecalho {\n  margin-right: 20px;\n}\n\nion-radio {\n  --color-checked: #ff6c92;\n}\n\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\n\nimg {\n  height: 33px;\n}\n\nion-list-header {\n  padding: 0px;\n  margin-left: 2%;\n}\n\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n\n.gravidez {\n  position: absolute;\n  top: 36%;\n  margin-left: 75%;\n}\n\n.parto {\n  position: absolute;\n  top: 67%;\n  margin-left: 75%;\n}\n\nion-fab-button {\n  width: 85px;\n  height: 85px;\n}\n\n.rodape {\n  margin-top: 5px;\n  margin-bottom: 55px;\n}\n\n.boneca {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9ncmF2aWRlei9ncmF2aWRlei5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2dyYXZpZGV6L2dyYXZpZGV6LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEQUE7RUFDSSx3QkFBQTtBQ0dKOztBRERBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBREZBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNLSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDS0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ncmF2aWRlei9ncmF2aWRlei5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7IFxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zZXhvLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiNWYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uY2FiZWNhbGhve1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcblxufVxuaW9uLXJhZGlve1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmltZ3tcbiAgICBoZWlnaHQ6IDMzcHg7XG59XG5cbmlvbi1saXN0LWhlYWRlcntcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG5pb24tZmFie1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDU1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbn1cbi8vYm90w6NvIGJvbmVjYVxuXG4uZ3JhdmlkZXp7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzYlO1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG4ucGFydG97XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjclO1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi8vdGFtYW5obyBkbyBib3TDo28gYm9uZWNhXG5pb24tZmFiLWJ1dHRvbntcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6IDg1cHg7XG59XG4ucm9kYXBle1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xufVxuLmJvbmVjYXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweFxufSIsIi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VkOiAjYzhmZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3NleG8uanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uY2FiZWNhbGhvIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuaW9uLWZhYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1NXB4O1xuICBtYXJnaW4tbGVmdDogODAlO1xufVxuXG4uZ3JhdmlkZXoge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzYlO1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG4ucGFydG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjclO1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA4NXB4O1xuICBoZWlnaHQ6IDg1cHg7XG59XG5cbi5yb2RhcGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDU1cHg7XG59XG5cbi5ib25lY2Ege1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/gravidez/gravidez.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/gravidez/gravidez.page.ts ***!
  \*************************************************/
/*! exports provided: GravidezPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GravidezPage", function() { return GravidezPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var GravidezPage = /** @class */ (function () {
    function GravidezPage(AlertController) {
        this.AlertController = AlertController;
    }
    GravidezPage.prototype.presentAlert1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'Pode fazer sexo na gravidez?',
                            message: 'Sim, se a gravidez for normal. fale com seu médico, ele vai dizer se está tudo bem.',
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
    GravidezPage.prototype.presentAlert2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'Quanto tempo após o parto pode fazer sexo?',
                            message: 'O retorno às relações sexuais depende do tipo de parto. se for normal, sem episio é mais breve mas se for cesárea varia em torno de 6 a 8 semanas.',
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
    GravidezPage.prototype.ngOnInit = function () {
    };
    GravidezPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    GravidezPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gravidez',
            template: __webpack_require__(/*! raw-loader!./gravidez.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/gravidez/gravidez.page.html"),
            styles: [__webpack_require__(/*! ./gravidez.page.scss */ "./src/app/pages/gravidez/gravidez.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], GravidezPage);
    return GravidezPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-gravidez-gravidez-module-es5.js.map