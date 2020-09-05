(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-higiene-dois-higiene-dois-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/higiene-dois/higiene-dois.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/higiene-dois/higiene-dois.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <div class=\"title ion-text-center\">Saúde vaginal</div>\n    <ion-list>\n      <br>\n      <ion-label class=\"titu ion-text-center\">\n        <b>Higiene Íntima</b></ion-label>\n      <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"health.sleepPanties\"> \n        <ion-list-header>\n          <ion-label>\n            <div>\n              <div>\n                <img src=\"../../../assets/icon/calcinha.png\" style=\"float: left\">\n              </div>\n              <div class=\"text\">\n                <b>Dorme com calcinha?</b>\n              </div>\n            </div>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <ion-item>\n        <ion-label>Devo usar?</ion-label>\n      </ion-item>\n\n      <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"health.absorbentInternal\">\n        <ion-list-header>\n          <ion-label>\n            <div>\n              <div>\n                <img src=\"../../../assets/icon/absorvente.png\" style=\"float: left\">\n              </div>\n              <div class=\"text\">\n                <b>Usa absorvente interno?</b>\n              </div>\n            </div>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <ion-item>\n        <ion-label>Devo usar?</ion-label>\n      </ion-item>\n      <br>\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"back()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b></ion-button>\n      <ion-button color=\"primary\" (click)=\"menu()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b></ion-button>\n      <ion-button color=\"primary\" (click)=\"next()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b></ion-button>\n    </div>\n  </div>\n  <ion-fab class=\"calcinha\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab class=\"absorvente\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/higiene-dois/higiene-dois-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/higiene-dois/higiene-dois-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: HigieneDoisPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigieneDoisPageRoutingModule", function() { return HigieneDoisPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _higiene_dois_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./higiene-dois.page */ "./src/app/pages/higiene-dois/higiene-dois.page.ts");




var routes = [
    {
        path: '',
        component: _higiene_dois_page__WEBPACK_IMPORTED_MODULE_3__["HigieneDoisPage"]
    }
];
var HigieneDoisPageRoutingModule = /** @class */ (function () {
    function HigieneDoisPageRoutingModule() {
    }
    HigieneDoisPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HigieneDoisPageRoutingModule);
    return HigieneDoisPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/higiene-dois/higiene-dois.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/higiene-dois/higiene-dois.module.ts ***!
  \***********************************************************/
/*! exports provided: HigieneDoisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigieneDoisPageModule", function() { return HigieneDoisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _higiene_dois_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./higiene-dois-routing.module */ "./src/app/pages/higiene-dois/higiene-dois-routing.module.ts");
/* harmony import */ var _higiene_dois_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./higiene-dois.page */ "./src/app/pages/higiene-dois/higiene-dois.page.ts");







var HigieneDoisPageModule = /** @class */ (function () {
    function HigieneDoisPageModule() {
    }
    HigieneDoisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _higiene_dois_routing_module__WEBPACK_IMPORTED_MODULE_5__["HigieneDoisPageRoutingModule"]
            ],
            declarations: [_higiene_dois_page__WEBPACK_IMPORTED_MODULE_6__["HigieneDoisPage"]]
        })
    ], HigieneDoisPageModule);
    return HigieneDoisPageModule;
}());



/***/ }),

/***/ "./src/app/pages/higiene-dois/higiene-dois.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/higiene-dois/higiene-dois.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  top: 3%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 10%;\n  border-radius: 25px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 33px;\n  display: inline-block;\n}\n.calcinha {\n  top: 17%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\n.absorvente {\n  top: 37%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\nion-fab-button {\n  width: 80px;\n  height: 80px;\n}\n.boneca {\n  width: 70px;\n  height: 85px;\n}\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n.text {\n  width: 250px;\n  margin-left: 2px;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9oaWdpZW5lLWRvaXMvaGlnaWVuZS1kb2lzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGlnaWVuZS1kb2lzL2hpZ2llbmUtZG9pcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsdUZBQUE7QUFDUjtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QURDQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNFSjtBREFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNHSjtBRERBO0VBQ0ksd0JBQUE7QUNJSjtBREZBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ0tKO0FESEE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUNNSjtBREpBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNPSjtBRExBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNRSjtBRE5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNTSjtBRFBBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNVSjtBRFJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNXSjtBRFRBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlnaWVuZS1kb2lzL2hpZ2llbmUtZG9pcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XG4uYmFja2dyb3VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7IFxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzJTtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwOyBcbn1cbmlvbi1saXN0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiNWYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4OyAgXG59XG5pb24tcmFkaW97XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW1ne1xuICAgIGhlaWdodDogMzNweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY2FsY2luaGF7XG4gICAgdG9wOiAxNyU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA4JTtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG4uYWJzb3J2ZW50ZXtcbiAgICB0b3A6IDM3JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDglO1xuICAgIGhlaWdodDogODBweDtcbn1cbmlvbi1mYWItYnV0dG9ue1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbn1cbi5ib25lY2F7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA4NXB4O1xufVxuaW9uLWZhYntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG4udGV4dHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG59XG5cblxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG4uYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91ZDogI2M4ZmZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMyU7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNmQ0YzgwO1xufVxuXG5pb24tbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZjBmMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAzM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jYWxjaW5oYSB7XG4gIHRvcDogMTclO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4JTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uYWJzb3J2ZW50ZSB7XG4gIHRvcDogMzclO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4JTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5ib25lY2Ege1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA4NXB4O1xufVxuXG5pb24tZmFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDU1cHg7XG4gIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG5cbi50ZXh0IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/higiene-dois/higiene-dois.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/higiene-dois/higiene-dois.page.ts ***!
  \*********************************************************/
/*! exports provided: HigieneDoisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigieneDoisPage", function() { return HigieneDoisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/health.service */ "./src/app/services/health.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");








var HigieneDoisPage = /** @class */ (function () {
    function HigieneDoisPage(AlertController, healthService, loadingCtrl, toastCtrl, authService, activeRoute, router) {
        this.AlertController = AlertController;
        this.healthService = healthService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.health = {};
        this.healthID = null;
    }
    HigieneDoisPage.prototype.ngOnInit = function () {
        this.formattingDay();
        this.check();
    };
    HigieneDoisPage.prototype.presentAlert1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.saveHealth();
                        return [4 /*yield*/, this.AlertController.create({
                                header: 'Dorme com calcinha?',
                                message: 'O principal benefício de dispensar a calcinha na hora de dormir é arejar a região genital minimizando o surgimento de infecções vaginais.',
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
    HigieneDoisPage.prototype.presentAlert2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.saveHealth();
                        return [4 /*yield*/, this.AlertController.create({
                                header: 'Usa absorvente interno?',
                                message: 'Usar absorvente interno geralmente não faz mal à saúde, desde que a mulher troque o absorvente com regularidade (de preferência a cada 4 horas), não durma com ele e lave bem as mãos sempre antes da troca.',
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
    HigieneDoisPage.prototype.formattingDay = function () {
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
    };
    HigieneDoisPage.prototype.check = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log((this.today));
                        return [4 /*yield*/, this.healthService.checkExists(this.today)];
                    case 1:
                        if ((_a.sent()) == true) {
                            this.loadHealth();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HigieneDoisPage.prototype.loadHealth = function () {
        var _this = this;
        this.healthSubscription = this.healthService.getHealth(this.today).subscribe(function (data) {
            _this.health = data;
        });
    };
    HigieneDoisPage.prototype.back = function () {
        this.saveHealth();
        return this.router.navigate(["/higiene"]);
    };
    HigieneDoisPage.prototype.menu = function () {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    };
    HigieneDoisPage.prototype.next = function () {
        this.saveHealth();
        return this.router.navigate(["/higiene-tres"]);
    };
    HigieneDoisPage.prototype.saveHealth = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        this.health.userID = this.authService.getAuth().currentUser.uid;
                        if (!this.healthID) return [3 /*break*/, 2];
                        return [3 /*break*/, 7];
                    case 2:
                        this.health.data = this.today;
                        if (this.health.sleepPanties == null) {
                            this.health.sleepPanties = "indefinido";
                        }
                        if (this.health.absorbentInternal == null) {
                            this.health.absorbentInternal = "indefinido";
                        }
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 6, , 7]);
                        return [4 /*yield*/, this.healthService.addHealth(this.health)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.loading.dismiss()];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        console.log(error_1);
                        this.presentToast("Erro ao tentar salvar");
                        this.loading.dismiss();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    HigieneDoisPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Por favor, aguarde...",
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/, this.loading.present()];
                }
            });
        });
    };
    HigieneDoisPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({ message: message, duration: 2000 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HigieneDoisPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HigieneDoisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-higiene-dois',
            template: __webpack_require__(/*! raw-loader!./higiene-dois.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/higiene-dois/higiene-dois.page.html"),
            styles: [__webpack_require__(/*! ./higiene-dois.page.scss */ "./src/app/pages/higiene-dois/higiene-dois.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HigieneDoisPage);
    return HigieneDoisPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-higiene-dois-higiene-dois-module-es5.js.map