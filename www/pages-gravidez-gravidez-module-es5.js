(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gravidez-gravidez-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/gravidez/gravidez.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/gravidez/gravidez.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <div class=\"title ion-text-center\">Sexo</div>\n    <ion-list>\n      <br>\n      <div class=\"cabecalho\">\n        <img src=\"../../../assets/icon/gravidez.png\">\n        <ion-label class=\"titu ion-text-center\"><b> Práticas sexuais e gravidez</b>\n        </ion-label>\n      </div>\n      <br>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Pode fazer sexo na gravidez?</b>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <br>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Quanto tempo após o parto pode fazer sexo ?</b>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Logo após o parto</ion-label>\n          <ion-radio slot=\"start\" value=\"pos-parto\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>15 dias após o parto</ion-label>\n          <ion-radio slot=\"start\" value=\"15dias\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>40 dias após o parto</ion-label>\n          <ion-radio slot=\"start\" value=\"40dias\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não sei</ion-label>\n          <ion-radio slot=\"start\" value=\"naosei\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/desejo-sexual\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b></ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b></ion-button>\n      <ion-button color=\"primary\" href=\"/servicos-saude\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b></ion-button>\n\n    </div>\n  </div>\n  <ion-fab class=\"gravidez\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab class=\"parto\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  top: 1%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 3%;\n  border-radius: 25px;\n}\n.cabecalho {\n  margin-right: 20px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 33px;\n}\nion-list-header {\n  padding: 0px;\n  margin-left: 2%;\n}\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n.gravidez {\n  top: 29%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\n.parto {\n  top: 52%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\nion-fab-button {\n  width: 75px;\n  height: 75px;\n}\n.boneca {\n  width: 65px;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9ncmF2aWRlei9ncmF2aWRlei5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2dyYXZpZGV6L2dyYXZpZGV6LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RkFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0dKO0FEREE7RUFDSSxrQkFBQTtBQ0lKO0FEREE7RUFDSSx3QkFBQTtBQ0lKO0FERkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FDS0o7QURIQTtFQUNJLFlBQUE7QUNNSjtBREhBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNNSjtBREhBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNNSjtBREpBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNPSjtBRExBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNRSjtBRE5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNTSjtBRFBBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyYXZpZGV6L2dyYXZpZGV6LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcbi5iYWNrZ3JvdWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJhY2tncm91ZDogI2M4ZmZmZjsgXG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4udGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDElO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgY29sb3I6ICM2ZDRjODA7IFxufVxuaW9uLWxpc3R7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2I1ZjBmMDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDsgIFxufVxuLmNhYmVjYWxob3tcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pbWd7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuXG5pb24tbGlzdC1oZWFkZXJ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuaW9uLWZhYntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG4uZ3JhdmlkZXp7XG4gICAgdG9wOiAyOSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA4JTtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG4ucGFydG97XG4gICAgdG9wOiA1MiU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA4JTtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG5pb24tZmFiLWJ1dHRvbntcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG59XG4uYm9uZWNhe1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogODBweDtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VkOiAjYzhmZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxJTtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LWZhbWlseTogXCJBbWF0aWMgU0NcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICM2ZDRjODA7XG59XG5cbmlvbi1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjVmMGYwO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmNhYmVjYWxobyB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMzNweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbmlvbi1mYWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTVweDtcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcbn1cblxuLmdyYXZpZGV6IHtcbiAgdG9wOiAyOSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDglO1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5wYXJ0byB7XG4gIHRvcDogNTIlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4JTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbi5ib25lY2Ege1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA4MHB4O1xufSJdfQ== */"

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