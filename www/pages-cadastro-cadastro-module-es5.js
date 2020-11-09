(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-cadastro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cadastro/cadastro.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cadastro/cadastro.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud\">\n    \n    <ion-button (click)=\"back()\" color=\"dark\" class=\"button\">\n      <img src=\"../../../assets/icon/back2.svg\">\n    </ion-button>\n    \n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n\n    \n    <ion-slides>\n      <ion-slide>\n        <div class=\"slide-inner ion-padding\">\n          <span>Cadastro</span>\n\n          <ion-item class=\"ion-margin-top\" lines=\"none\">\n            <ion-input type=\"text\" placeholder=\"nome\" [(ngModel)]=\"user.name\"></ion-input>\n          </ion-item>\n         \n\n          <ion-item class=\"ion-margin-top\" lines=\"none\">\n            <ion-input type=\"date\" placeholder=\"data de nascimento\" [(ngModel)]=\"user.birthDate\"></ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin-top\" lines=\"none\">\n            <ion-input type=\"email\" placeholder=\"e-mail\" [(ngModel)]=\"user.email\"></ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin-top\" lines=\"none\">\n            <ion-input type=\"password\" placeholder=\"senha\" [(ngModel)]=\"user.password\"></ion-input>\n          </ion-item>\n\n          <ion-button fill=\"outline\" class=\"ion-margin-top\" (click)=\"register()\" color=\"primary\" expand=\"block\">\n            Criar conta\n          </ion-button><br>\n          <a><span>Termos de uso, politicas de privacidade</span></a>\n        </div>\n\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cadastro/cadastro-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CadastroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageRoutingModule", function() { return CadastroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro.page */ "./src/app/pages/cadastro/cadastro.page.ts");




var routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_3__["CadastroPage"]
    }
];
var CadastroPageRoutingModule = /** @class */ (function () {
    function CadastroPageRoutingModule() {
    }
    CadastroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CadastroPageRoutingModule);
    return CadastroPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/cadastro/cadastro.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.module.ts ***!
  \***************************************************/
/*! exports provided: CadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro-routing.module */ "./src/app/pages/cadastro/cadastro-routing.module.ts");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro.page */ "./src/app/pages/cadastro/cadastro.page.ts");







var CadastroPageModule = /** @class */ (function () {
    function CadastroPageModule() {
    }
    CadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__["CadastroPageRoutingModule"]
            ],
            declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]]
        })
    ], CadastroPageModule);
    return CadastroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cadastro/cadastro.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 75%;\n  height: 70%;\n  margin: 0 auto;\n  z-index: 2;\n}\n.container.top {\n  top: 16%;\n  border-radius: 10px;\n  background-color: #ff93ab;\n}\n.container.top ion-segment ion-segment-button {\n  color: black;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border: none;\n}\n.container.top ion-segment ion-segment-button ion-label {\n  size: 100px;\n}\n.container.botton {\n  bottom: 5%;\n}\n.container.botton span {\n  color: #ffffff;\n}\n.backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('back.png');\n  background-repeat: round;\n  background-size: 100%;\n  background-color: #ff6c92;\n}\nion-slides {\n  height: 80%;\n}\nion-slides .slide-inner {\n  width: 75%;\n  color: #050505;\n  background-color: #ff93ab;\n  border-radius: 10px;\n}\nion-slides ion-item {\n  --border-radius: 10px;\n}\nimg {\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9jYWRhc3Ryby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2NhZGFzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDQ0o7QURBSTtFQUVJLFFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ1I7QURFVztFQUNJLFlBQUE7RUFDQSxnREFBQTtFQUNBLFlBQUE7QUNBZjtBRENlO0VBQ0ksV0FBQTtBQ0NuQjtBRElJO0VBQ0ksVUFBQTtBQ0ZSO0FER087RUFDSSxjQUFBO0FDRFg7QURPQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0pKO0FETUE7RUFDSSxXQUFBO0FDSEo7QURLSTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0hSO0FETUk7RUFDSSxxQkFBQTtBQ0pSO0FEUUE7RUFDRSxZQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9jYWRhc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgei1pbmRleDogMjtcbiAgICAmLnRvcHtcbiAgICBcbiAgICAgICAgdG9wOjE2JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTNhYjtcbiAgICAgICAgaW9uLXNlZ21lbnR7XG4gICBcbiAgICAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgICAgIHNpemU6IDEwMHB4O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5ib3R0b257XG4gICAgICAgIGJvdHRvbTogNSU7XG4gICAgICAgc3BhbiB7XG4gICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgIH1cbiAgICB9XG4gICBcbiAgIH1cbiAgIFxuLmJhY2tncm91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6cm91bmQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZjOTI7XG59XG5pb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICBcbiAgICAuc2xpZGUtaW5uZXJ7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIGNvbG9yOiByZ2IoNSwgNSwgNSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmOTNhYjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICBcbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbn1cblxuaW1ne1xuICBoZWlnaHQ6IDI1cHg7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiA3MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAyO1xufVxuLmNvbnRhaW5lci50b3Age1xuICB0b3A6IDE2JTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTNhYjtcbn1cbi5jb250YWluZXIudG9wIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY29udGFpbmVyLnRvcCBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgc2l6ZTogMTAwcHg7XG59XG4uY29udGFpbmVyLmJvdHRvbiB7XG4gIGJvdHRvbTogNSU7XG59XG4uY29udGFpbmVyLmJvdHRvbiBzcGFuIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZjOTI7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDgwJTtcbn1cbmlvbi1zbGlkZXMgLnNsaWRlLWlubmVyIHtcbiAgd2lkdGg6IDc1JTtcbiAgY29sb3I6ICMwNTA1MDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkzYWI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tc2xpZGVzIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cadastro/cadastro.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.page.ts ***!
  \*************************************************/
/*! exports provided: CadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPage", function() { return CadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CadastroPage = /** @class */ (function () {
    function CadastroPage(loadingCtrl, toastCtrl, authService, afs, router) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.afs = afs;
        this.router = router;
        this.user = {};
    }
    CadastroPage.prototype.ngOnInit = function () { };
    CadastroPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newUser, newUserObject, error_1, message;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 8, 9, 10]);
                        if (!(this.user.name == null)) return [3 /*break*/, 3];
                        console.log("nome: ", this.user.name);
                        return [3 /*break*/, 7];
                    case 3:
                        if (!(this.user.birthDate == null)) return [3 /*break*/, 4];
                        console.log("aniversario:", this.user.birthDate);
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, this.authService.register(this.user)];
                    case 5:
                        newUser = _a.sent();
                        newUserObject = Object.assign({}, this.user);
                        delete newUserObject.password;
                        return [4 /*yield*/, this.afs.collection('Users').doc(newUser.user.uid).set(newUserObject)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        error_1 = _a.sent();
                        console.error(error_1);
                        message = void 0;
                        switch (error_1.code) {
                            case 'auth/email-already-in-use':
                                message = 'E-mail já utilizado!';
                                break;
                            case 'auth/invalid-email':
                                message = 'E-mail inválido!';
                                break;
                            case 'auth/weak-password':
                                message = 'Senha inválida! Por favor, digite uma com mais de 6 caracteres!';
                                break;
                        }
                        this.presentToast(message);
                        return [3 /*break*/, 10];
                    case 9:
                        this.loading.dismiss();
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    CadastroPage.prototype.presentLoading = function () {
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
    CadastroPage.prototype.presentToast = function (message) {
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
    CadastroPage.prototype.back = function () {
        return this.router.navigate(["/objetivos"]);
    };
    CadastroPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    CadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! raw-loader!./cadastro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cadastro/cadastro.page.html"),
            styles: [__webpack_require__(/*! ./cadastro.page.scss */ "./src/app/pages/cadastro/cadastro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CadastroPage);
    return CadastroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-cadastro-module-es5.js.map