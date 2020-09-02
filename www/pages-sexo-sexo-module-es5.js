(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sexo-sexo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sexo/sexo.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sexo/sexo.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"background ion-text-left\">\n    <div class=\"title ion-text-center\">Sexo</div>\n    <ion-list>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label>\n            <img src=\"../../../assets/icon/sexo.png\">\n            <b>Existe idade ideal para a menina começar a fazer sexo?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" ></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label> <img src=\"../../../assets/icon/mulher.png\"><b>Se sim, qual:</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Antes dos 12 anos</ion-label>\n          <ion-radio slot=\"start\" value=\"12anos\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Entre 12 e 17 anos</ion-label>\n          <ion-radio slot=\"start\" value=\"12-17anos\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Após aos 18 anos</ion-label>\n          <ion-radio slot=\"start\" value=\"18anos\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Qualquer idade</ion-label>\n          <ion-radio slot=\"start\" value=\"qualquer\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><img src=\"../../../assets/icon/pergunta.png\">\n            <b>Pode usar o mesmo preservativo no sexo vaginal e anal?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Às vezes</ion-label>\n          <ion-radio slot=\"start\" value=\"as-vezes\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/uso-emergencia\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/saude-relacoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n  </div>\n\n  <ion-fab class=\"idade\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab class=\"preservativo\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/sexo/sexo-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/sexo/sexo-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SexoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexoPageRoutingModule", function() { return SexoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sexo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sexo.page */ "./src/app/pages/sexo/sexo.page.ts");




var routes = [
    {
        path: '',
        component: _sexo_page__WEBPACK_IMPORTED_MODULE_3__["SexoPage"]
    }
];
var SexoPageRoutingModule = /** @class */ (function () {
    function SexoPageRoutingModule() {
    }
    SexoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SexoPageRoutingModule);
    return SexoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/sexo/sexo.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/sexo/sexo.module.ts ***!
  \*******************************************/
/*! exports provided: SexoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexoPageModule", function() { return SexoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sexo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sexo-routing.module */ "./src/app/pages/sexo/sexo-routing.module.ts");
/* harmony import */ var _sexo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sexo.page */ "./src/app/pages/sexo/sexo.page.ts");







var SexoPageModule = /** @class */ (function () {
    function SexoPageModule() {
    }
    SexoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _sexo_routing_module__WEBPACK_IMPORTED_MODULE_5__["SexoPageRoutingModule"]
            ],
            declarations: [_sexo_page__WEBPACK_IMPORTED_MODULE_6__["SexoPage"]]
        })
    ], SexoPageModule);
    return SexoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sexo/sexo.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/sexo/sexo.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.background {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background-image: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  top: 3%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 9%;\n  border-radius: 25px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n  height: 36px;\n}\nimg {\n  height: 25px;\n}\nion-list-header {\n  margin-left: 2%;\n}\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n.idade {\n  top: 22%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\n.preservativo {\n  top: 70%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\nion-fab-button {\n  width: 80px;\n  height: 80px;\n}\n.boneca {\n  width: 70px;\n  height: 85px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zZXhvL3NleG8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXhvL3NleG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVGQUFBO0FBQ1I7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDRUo7QURBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDR0o7QUREQTtFQUNJLHdCQUFBO0FDSUo7QURGQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDS0o7QURIQTtFQUNJLFlBQUE7QUNNSjtBREhBO0VBQ0ksZUFBQTtBQ01KO0FESEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ01KO0FESEE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ01KO0FESkE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ09KO0FETEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1FKO0FETkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V4by9zZXhvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcbi5iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7IFxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzJTtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwOyBcbn1cbmlvbi1saXN0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiNWYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDklO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7ICBcbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xufVxuaW1ne1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVye1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcblxufVxuaW9uLWZhYntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG5cbi5pZGFkZXtcbiAgICB0b3A6IDIyJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDglO1xuICAgIGhlaWdodDogODBweDtcbn1cbi5wcmVzZXJ2YXRpdm97XG4gICAgdG9wOiA3MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA4JTtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG5pb24tZmFiLWJ1dHRvbntcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG4uYm9uZWNhe1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogODVweDtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91ZDogI2M4ZmZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMyU7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNmQ0YzgwO1xufVxuXG5pb24tbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZjBmMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogOSU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG5pb24tZmFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDU1cHg7XG4gIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG5cbi5pZGFkZSB7XG4gIHRvcDogMjIlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4JTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ucHJlc2VydmF0aXZvIHtcbiAgdG9wOiA3MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDglO1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmJvbmVjYSB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDg1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/sexo/sexo.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/sexo/sexo.page.ts ***!
  \*****************************************/
/*! exports provided: SexoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexoPage", function() { return SexoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SexoPage = /** @class */ (function () {
    function SexoPage(AlertController) {
        this.AlertController = AlertController;
    }
    SexoPage.prototype.presentAlert1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'Existe idade ideal para a menina começar a fazer sexo?',
                            message: 'A menina deveria esperar até os 16 anos para começar a ter relação sexual. Por que? Ter sexo antes de 16 anos pode levar a arrependimento, depressão e aumento de doenças no útero.',
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
    SexoPage.prototype.presentAlert2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'Pode usar o mesmo preservativo no sexo vaginal e anal?',
                            message: 'Se começar com o sexo anal precisa trocar a camisinha para fazer sexo vaginal.',
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
    SexoPage.prototype.ngOnInit = function () {
    };
    SexoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    SexoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sexo',
            template: __webpack_require__(/*! raw-loader!./sexo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sexo/sexo.page.html"),
            styles: [__webpack_require__(/*! ./sexo.page.scss */ "./src/app/pages/sexo/sexo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], SexoPage);
    return SexoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sexo-sexo-module-es5.js.map