(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-metodo-contraceptivo-metodo-contraceptivo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"background ion-text-center\">\n    <div class=\"title ion-text-center\">Métodos contraceptivos</div>\n    <ion-list>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Usa método contraceptivo?</b></ion-label>\n        </ion-list-header>\n\n        <div class=\"coluna1\">\n          <ion-item>\n            <ion-label>Sim</ion-label>\n            <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n          </ion-item>\n        </div>\n\n        <div class=\"coluna2\">\n          <ion-item>\n            <ion-label>Não</ion-label>\n            <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n          </ion-item>\n        </div>\n      </ion-radio-group>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Se sim, qual tipo usa?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/pilula.png\">\n          <ion-label> Anticoncepcional pílula</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/injetavel.png\">\n          <ion-label>Anticoncepcional injetável</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/camisinha.png\">\n          <img src=\"../../../assets/icon/camisinha-feminina.png\">\n          <ion-label> Camisinha - masc/fem</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/coito.png\">\n          <ion-label>Coito interrompido</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/laqueadura.png\">\n          <ion-label>Laqueadura</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n\n        <ion-item>\n          <img src=\"../../../assets/icon/adesivo.png\">\n          <ion-label>Adesivo</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/tabelinha.png\">\n          <ion-label>Tabelinha</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/diu.png\">\n          <ion-label>D.I.U </ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/outros.png\">\n          <ion-label>Outros</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n\n      </ion-radio-group>\n      <br>\n\n    </ion-list>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"back()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" (click)=\"menu()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" (click)=\"next()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/metodo-contraceptivo/metodo-contraceptivo-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MetodoContraceptivoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoContraceptivoPageRoutingModule", function() { return MetodoContraceptivoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _metodo_contraceptivo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metodo-contraceptivo.page */ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.ts");




var routes = [
    {
        path: '',
        component: _metodo_contraceptivo_page__WEBPACK_IMPORTED_MODULE_3__["MetodoContraceptivoPage"]
    }
];
var MetodoContraceptivoPageRoutingModule = /** @class */ (function () {
    function MetodoContraceptivoPageRoutingModule() {
    }
    MetodoContraceptivoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MetodoContraceptivoPageRoutingModule);
    return MetodoContraceptivoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.module.ts ***!
  \***************************************************************************/
/*! exports provided: MetodoContraceptivoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoContraceptivoPageModule", function() { return MetodoContraceptivoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _metodo_contraceptivo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metodo-contraceptivo-routing.module */ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo-routing.module.ts");
/* harmony import */ var _metodo_contraceptivo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metodo-contraceptivo.page */ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.ts");







var MetodoContraceptivoPageModule = /** @class */ (function () {
    function MetodoContraceptivoPageModule() {
    }
    MetodoContraceptivoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _metodo_contraceptivo_routing_module__WEBPACK_IMPORTED_MODULE_5__["MetodoContraceptivoPageRoutingModule"]
            ],
            declarations: [_metodo_contraceptivo_page__WEBPACK_IMPORTED_MODULE_6__["MetodoContraceptivoPage"]]
        })
    ], MetodoContraceptivoPageModule);
    return MetodoContraceptivoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.background {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background-image: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n  text-align: center;\n  margin-top: 10%;\n}\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 2%;\n  border-radius: 25px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n  height: 42px;\n}\nimg {\n  height: 33px;\n}\nion-list-header {\n  margin-left: 2%;\n  min-height: 29px;\n}\nion-fab {\n  margin-left: 14%;\n}\n.coluna1 {\n  width: 50%;\n  margin-left: 1px;\n  float: left;\n}\n.coluna2 {\n  width: 50%;\n  margin-left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9tZXRvZG8tY29udHJhY2VwdGl2by9tZXRvZG8tY29udHJhY2VwdGl2by5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21ldG9kby1jb250cmFjZXB0aXZvL21ldG9kby1jb250cmFjZXB0aXZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RkFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUo7QURBQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0dKO0FEQUE7RUFDSSx3QkFBQTtBQ0dKO0FEREE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0lKO0FERkE7RUFDSSxZQUFBO0FDS0o7QURIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ01KO0FESEE7RUFDSSxnQkFBQTtBQ01KO0FESkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDT0o7QURMQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWV0b2RvLWNvbnRyYWNlcHRpdm8vbWV0b2RvLWNvbnRyYWNlcHRpdm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xuLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJhY2tncm91ZDogI2M4ZmZmZjsgXG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4udGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiNWYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xufVxuaW1ne1xuICAgIGhlaWdodDogMzNweDtcbn1cbmlvbi1saXN0LWhlYWRlcntcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgbWluLWhlaWdodDogMjlweDtcbn1cblxuaW9uLWZhYntcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xufVxuLmNvbHVuYTF7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmNvbHVuYTJ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogNTAlOyAgICBcbn1cblxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xuICBjb2xvcjogIzZkNGM4MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZjBmMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDQycHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMzNweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtaW4taGVpZ2h0OiAyOXB4O1xufVxuXG5pb24tZmFiIHtcbiAgbWFyZ2luLWxlZnQ6IDE0JTtcbn1cblxuLmNvbHVuYTEge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNvbHVuYTIge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.ts ***!
  \*************************************************************************/
/*! exports provided: MetodoContraceptivoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoContraceptivoPage", function() { return MetodoContraceptivoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/health.service */ "./src/app/services/health.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







var MetodoContraceptivoPage = /** @class */ (function () {
    function MetodoContraceptivoPage(healthService, loadingCtrl, toastCtrl, authService, activeRoute, router) {
        this.healthService = healthService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.health = {};
        this.healthID = null;
    }
    MetodoContraceptivoPage.prototype.ngOnInit = function () {
        this.formattingDay();
        this.check();
    };
    MetodoContraceptivoPage.prototype.formattingDay = function () {
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
    MetodoContraceptivoPage.prototype.check = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.healthService.checkExists(this.today)];
                    case 1:
                        if ((_a.sent()) == true) {
                            this.loadHealth();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MetodoContraceptivoPage.prototype.loadHealth = function () {
        var _this = this;
        this.healthSubscription = this.healthService.getHealth(this.today).subscribe(function (data) {
            _this.health = data;
        });
    };
    MetodoContraceptivoPage.prototype.back = function () {
        this.saveHealth();
        return this.router.navigate(["/ciclo-menstrual-tres"]);
    };
    MetodoContraceptivoPage.prototype.menu = function () {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    };
    MetodoContraceptivoPage.prototype.next = function () {
        this.saveHealth();
        return this.router.navigate(["/uso-adolecentes"]);
    };
    MetodoContraceptivoPage.prototype.saveHealth = function () {
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
    MetodoContraceptivoPage.prototype.presentLoading = function () {
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
    MetodoContraceptivoPage.prototype.presentToast = function (message) {
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
    MetodoContraceptivoPage.ctorParameters = function () { return [
        { type: src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    MetodoContraceptivoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-metodo-contraceptivo',
            template: __webpack_require__(/*! raw-loader!./metodo-contraceptivo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.html"),
            styles: [__webpack_require__(/*! ./metodo-contraceptivo.page.scss */ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MetodoContraceptivoPage);
    return MetodoContraceptivoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-metodo-contraceptivo-metodo-contraceptivo-module-es5.js.map