(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud\">\n    <ion-button href=\"/objetivos\" color=\"dark\" class=\"button\">\n      <img src=\"../../../assets/icon/voltar.png\">\n    </ion-button>\n    <ion-slides>\n      <ion-slide>\n        <div class=\"slide-inner ion-padding\">\n          <span>Login</span>\n\n          <ion-item class=\"ion-margin-top\" lines=\"none\">\n            <ion-input type=\"email\" placeholder=\"E-mail\" [(ngModel)]=\"userLogin.email\"></ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin-top\" lines=\"none\">\n            <ion-input type=\"password\" placeholder=\"Senha\" [(ngModel)]=\"userLogin.password\"></ion-input>\n          </ion-item>\n          <a>\n            <p>Esqueceu a senha?</p>\n          </a>\n          <ion-button fill=\"outline\" class=\"ion-margin-top\" (click)=\"login()\" color=\"primary\" expand=\"block\">\n            Continuar\n          </ion-button>\n          <ion-button fill=\"outline\" href=\"/opcoes\" class=\"ion-margin-top\" (click)=\"login()\" color=\"primary\"\n            expand=\"block\">\n            Login com Facebook\n          </ion-button>\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 75%;\n  margin: 0 auto;\n  z-index: 2;\n}\n.container.top {\n  top: 16%;\n  border-radius: 10px;\n  background-color: #ff93ab;\n}\n.container.top ion-segment ion-segment-button {\n  color: black;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border: none;\n}\n.container.top ion-segment ion-segment-button ion-label {\n  size: 100px;\n}\n.container.botton {\n  bottom: 5%;\n}\n.container.botton span {\n  color: #ffffff;\n}\nimg {\n  height: 25px;\n}\n.backgroud {\n  position: static;\n  width: 100%;\n  height: 100%;\n  background: url('back.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\nion-slides {\n  height: 80%;\n}\nion-slides .slide-inner {\n  width: 75%;\n  color: #050505;\n  background-color: #ff93ab;\n  border-radius: 10px;\n}\nion-slides ion-item {\n  --border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNDRDtBREFDO0VBRUksUUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDTDtBREVRO0VBQ0ksWUFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtBQ0FaO0FEQ1k7RUFDSSxXQUFBO0FDQ2hCO0FESUM7RUFDSSxVQUFBO0FDRkw7QURHSTtFQUNJLGNBQUE7QUNEUjtBRE1BO0VBQ0ksWUFBQTtBQ0hKO0FES0E7RUFDQyxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUNGRDtBRElBO0VBQ0ksV0FBQTtBQ0RKO0FER0k7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNEUjtBRElJO0VBQ0kscUJBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gcG9zaXRpb246IGFic29sdXRlO1xuIGxlZnQ6IDA7XG4gcmlnaHQ6IDA7XG4gd2lkdGg6IDc1JTtcbiBtYXJnaW46IDAgYXV0bztcbiB6LWluZGV4OiAyO1xuICYudG9we1xuIFxuICAgICB0b3A6MTYlO1xuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5M2FiO1xuICAgICBpb24tc2VnbWVudHtcblxuICAgICAgICBpb24tc2VnbWVudC1idXR0b257XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgc2l6ZTogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgfVxuIH1cbiAmLmJvdHRvbntcbiAgICAgYm90dG9tOiA1JTtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuIH1cblxufVxuaW1ne1xuICAgIGhlaWdodDogMjVweDtcbn1cbi5iYWNrZ3JvdWQge1xuIHBvc2l0aW9uOiBzdGF0aWM7XG4gd2lkdGg6IDEwMCU7XG4gaGVpZ2h0OiAxMDAlO1xuIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5pb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBcbiAgICAuc2xpZGUtaW5uZXJ7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIGNvbG9yOiByZ2IoNSwgNSwgNSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmOTNhYjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG5cbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbn0iLCIuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDI7XG59XG4uY29udGFpbmVyLnRvcCB7XG4gIHRvcDogMTYlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5M2FiO1xufVxuLmNvbnRhaW5lci50b3AgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jb250YWluZXIudG9wIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBzaXplOiAxMDBweDtcbn1cbi5jb250YWluZXIuYm90dG9uIHtcbiAgYm90dG9tOiA1JTtcbn1cbi5jb250YWluZXIuYm90dG9uIHNwYW4ge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogODAlO1xufVxuaW9uLXNsaWRlcyAuc2xpZGUtaW5uZXIge1xuICB3aWR0aDogNzUlO1xuICBjb2xvcjogIzA1MDUwNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTNhYjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1zbGlkZXMgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let LoginPage = class LoginPage {
    constructor(loadingCtrl, toastCtrl, authService) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.userLogin = {};
        this.userRegister = {};
    }
    ngOnInit() { }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.presentLoading();
            try {
                yield this.authService.login(this.userLogin);
            }
            catch (error) {
                console.error(error);
                let message;
                switch (error.code) {
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
            }
            finally {
                this.loading.dismiss();
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
            return this.loading.present();
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({ message, duration: 2000 });
            toast.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
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
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map