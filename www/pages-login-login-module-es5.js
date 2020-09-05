(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud\">\n    <ion-button (click)=\"back()\" color=\"dark\" class=\"button\">\n      <img src=\"../../../assets/icon/back2.svg\">\n    </ion-button>\n    <ion-slides>\n      <ion-slide>\n        <div class=\"slide-inner ion-padding\">\n          <span>Login</span>\n\n          <ion-item class=\"ion-margin-top\" lines=\"none\">\n            <ion-input type=\"email\" placeholder=\"E-mail\" [(ngModel)]=\"userLogin.email\"></ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin-top\" lines=\"none\">\n            <ion-input type=\"password\" placeholder=\"Senha\" [(ngModel)]=\"userLogin.password\"></ion-input>\n          </ion-item>\n          <a (click)=\"mudarSenha()\">\n            <p>Esqueceu a senha?</p>\n          </a>\n          <ion-button fill=\"outline\" class=\"ion-margin-top\" (click)=\"login()\" color=\"primary\" expand=\"block\">\n            Continuar\n          </ion-button>\n          <ion-button fill=\"outline\" class=\"ion-margin-top\" (click)=\"loginFacebook()\" color=\"primary\"\n            expand=\"block\">\n            Login com Facebook\n          </ion-button>\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 75%;\n  margin: 0 auto;\n  z-index: 2;\n}\n.container.top {\n  top: 16%;\n  border-radius: 10px;\n  background-color: #ff93ab;\n}\n.container.top ion-segment ion-segment-button {\n  color: black;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border: none;\n}\n.container.top ion-segment ion-segment-button ion-label {\n  size: 100px;\n}\n.container.botton {\n  bottom: 5%;\n}\n.container.botton span {\n  color: #ffffff;\n}\nimg {\n  height: 25px;\n}\n.backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('back.png');\n  background-repeat: round;\n  background-size: 100%;\n  background-color: #ff6c92;\n}\nion-slides {\n  height: 75%;\n}\nion-slides .slide-inner {\n  width: 75%;\n  color: #050505;\n  background-color: #ff93ab;\n  border-radius: 10px;\n}\nion-slides ion-item {\n  --border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNDRDtBREFDO0VBRUksUUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDTDtBREVRO0VBQ0ksWUFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtBQ0FaO0FEQ1k7RUFDSSxXQUFBO0FDQ2hCO0FESUM7RUFDSSxVQUFBO0FDRkw7QURHSTtFQUNJLGNBQUE7QUNEUjtBRE1BO0VBQ0ksWUFBQTtBQ0hKO0FES0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNGSjtBRElBO0VBQ0ksV0FBQTtBQ0RKO0FESUk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNGUjtBREtJO0VBQ0kscUJBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gcG9zaXRpb246IGFic29sdXRlO1xuIGxlZnQ6IDA7XG4gcmlnaHQ6IDA7XG4gd2lkdGg6IDc1JTtcbiBtYXJnaW46IDAgYXV0bztcbiB6LWluZGV4OiAyO1xuICYudG9we1xuIFxuICAgICB0b3A6MTYlO1xuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5M2FiO1xuICAgICBpb24tc2VnbWVudHtcblxuICAgICAgICBpb24tc2VnbWVudC1idXR0b257XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgc2l6ZTogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgfVxuIH1cbiAmLmJvdHRvbntcbiAgICAgYm90dG9tOiA1JTtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuIH1cblxufVxuaW1ne1xuICAgIGhlaWdodDogMjVweDtcbn1cbi5iYWNrZ3JvdWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OnJvdW5kO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YzkyO1xufVxuaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiA3NSU7XG4gXG4gICAgXG4gICAgLnNsaWRlLWlubmVye1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBjb2xvcjogcmdiKDUsIDUsIDUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZjkzYWI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW17XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG59IiwiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAyO1xufVxuLmNvbnRhaW5lci50b3Age1xuICB0b3A6IDE2JTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTNhYjtcbn1cbi5jb250YWluZXIudG9wIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY29udGFpbmVyLnRvcCBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgc2l6ZTogMTAwcHg7XG59XG4uY29udGFpbmVyLmJvdHRvbiB7XG4gIGJvdHRvbTogNSU7XG59XG4uY29udGFpbmVyLmJvdHRvbiBzcGFuIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmM5Mjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogNzUlO1xufVxuaW9uLXNsaWRlcyAuc2xpZGUtaW5uZXIge1xuICB3aWR0aDogNzUlO1xuICBjb2xvcjogIzA1MDUwNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTNhYjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1zbGlkZXMgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(loadingCtrl, toastCtrl, authService, router) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.router = router;
        this.userLogin = {};
        this.userRegister = {};
    }
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1, message;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        return [4 /*yield*/, this.authService.login(this.userLogin)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        message = void 0;
                        switch (error_1.code) {
                            case 'auth/user-not-found':
                                message = 'Não foi encontrado e-mail correspondente!';
                                break;
                            case 'auth/invalid-email':
                                message = 'E-mail inválido!';
                                break;
                            case 'auth/wrong-password':
                                message = 'Senha inválida!';
                                break;
                        }
                        this.presentToast(message);
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading.dismiss();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.loginFacebook = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_2, message;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        return [4 /*yield*/, this.authService.FacebookAuth()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_2 = _a.sent();
                        console.error(error_2);
                        message = void 0;
                        switch (error_2.code) {
                            case 'auth/account-exists-with-different-credential':
                                message = 'Já existe uma conta com o mesmo endereço de e-mail, mas com credenciais de login diferentes. Faça login usando um provedor associado a este endereço de e-mail.';
                                break;
                            case 'auth/invalid-email':
                                message = 'E-mail inválido!';
                                break;
                            case 'auth/wrong-password':
                                message = 'Senha inválida!';
                                break;
                        }
                        this.presentToast(message);
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading.dismiss();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({ message: 'Por favor, aguarde...' })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/, this.loading.present()];
                }
            });
        });
    };
    LoginPage.prototype.presentToast = function (message) {
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
    LoginPage.prototype.back = function () {
        return this.router.navigate(["/objetivos"]);
    };
    LoginPage.prototype.mudarSenha = function () {
        return this.router.navigate(["/redefinir-senha"]);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map