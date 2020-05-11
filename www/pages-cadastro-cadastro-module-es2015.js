(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-cadastro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cadastro/cadastro.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cadastro/cadastro.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud\">\n    <ion-button href=\"/objetivos\" color=\"dark\" class=\"button\">\n      <img src=\"../../../assets/icon/voltar.png\">\n    </ion-button>\n    <ion-slides>\n      <ion-slide>\n        <div class=\"slide-inner ion-padding\">\n          <span>Cadastro</span>\n\n          <ion-item class=\"ion-margin-top\" lines=\"none\">\n            <ion-input type=\"text\" placeholder=\"nome\"></ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin-top\" lines=\"none\">\n            <ion-input type=\"date\" placeholder=\"\"></ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin-top\" lines=\"none\">\n            <ion-input type=\"email\" placeholder=\"e-mail\" [(ngModel)]=\"userRegister.email\"></ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin-top\" lines=\"none\">\n            <ion-input type=\"password\" placeholder=\"senha\" [(ngModel)]=\"userRegister.password\"></ion-input>\n          </ion-item>\n\n          <ion-button fill=\"outline\" href=\"/opcoes\" class=\"ion-margin-top\" (click)=\"register()\" color=\"primary\"\n            expand=\"block\">\n            Criar conta\n          </ion-button><br>\n          <a><span>termos de uso, politicas de privacidade</span></a>\n        </div>\n\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro.page */ "./src/app/pages/cadastro/cadastro.page.ts");




const routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_3__["CadastroPage"]
    }
];
let CadastroPageRoutingModule = class CadastroPageRoutingModule {
};
CadastroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CadastroPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro-routing.module */ "./src/app/pages/cadastro/cadastro-routing.module.ts");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro.page */ "./src/app/pages/cadastro/cadastro.page.ts");







let CadastroPageModule = class CadastroPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/cadastro/cadastro.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 75%;\n  margin: 0 auto;\n  z-index: 2;\n}\n.container.top {\n  top: 16%;\n  border-radius: 10px;\n  background-color: #ff93ab;\n}\n.container.top ion-segment ion-segment-button {\n  color: black;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border: none;\n}\n.container.top ion-segment ion-segment-button ion-label {\n  size: 100px;\n}\n.container.botton {\n  bottom: 5%;\n}\n.container.botton span {\n  color: #ffffff;\n}\n.backgroud {\n  position: static;\n  width: 100%;\n  height: 100%;\n  background: url('back.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\nion-slides {\n  height: 80%;\n}\nion-slides .slide-inner {\n  width: 75%;\n  color: #050505;\n  background-color: #ff93ab;\n  border-radius: 10px;\n}\nion-slides ion-item {\n  --border-radius: 10px;\n}\nimg {\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9jYWRhc3Ryby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2NhZGFzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNDSjtBREFJO0VBRUksUUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDUjtBREVXO0VBQ0ksWUFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtBQ0FmO0FEQ2U7RUFDSSxXQUFBO0FDQ25CO0FESUk7RUFDSSxVQUFBO0FDRlI7QURHTztFQUNJLGNBQUE7QUNEWDtBRE9HO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FDSko7QURNRztFQUNJLFdBQUE7QUNIUDtBREtPO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDSFg7QURNTztFQUNJLHFCQUFBO0FDSlg7QURRQTtFQUNFLFlBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2NhZGFzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB6LWluZGV4OiAyO1xuICAgICYudG9we1xuICAgIFxuICAgICAgICB0b3A6MTYlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5M2FiO1xuICAgICAgICBpb24tc2VnbWVudHtcbiAgIFxuICAgICAgICAgICBpb24tc2VnbWVudC1idXR0b257XG4gICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgICAgc2l6ZTogMTAwcHg7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmJvdHRvbntcbiAgICAgICAgYm90dG9tOiA1JTtcbiAgICAgICBzcGFuIHtcbiAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgfVxuICAgIH1cbiAgIFxuICAgfVxuICAgXG4gICAuYmFja2dyb3VkIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgfVxuICAgaW9uLXNsaWRlcyB7XG4gICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgXG4gICAgICAgLnNsaWRlLWlubmVye1xuICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICBjb2xvcjogcmdiKDUsIDUsIDUpO1xuICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZjkzYWI7XG4gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgfVxuICAgXG4gICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICB9XG4gICB9XG5cbmltZ3tcbiAgaGVpZ2h0OiAyNXB4O1xufSIsIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMjtcbn1cbi5jb250YWluZXIudG9wIHtcbiAgdG9wOiAxNiU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkzYWI7XG59XG4uY29udGFpbmVyLnRvcCBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiBub25lO1xufVxuLmNvbnRhaW5lci50b3AgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIHNpemU6IDEwMHB4O1xufVxuLmNvbnRhaW5lci5ib3R0b24ge1xuICBib3R0b206IDUlO1xufVxuLmNvbnRhaW5lci5ib3R0b24gc3BhbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogODAlO1xufVxuaW9uLXNsaWRlcyAuc2xpZGUtaW5uZXIge1xuICB3aWR0aDogNzUlO1xuICBjb2xvcjogIzA1MDUwNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTNhYjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1zbGlkZXMgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjVweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let CadastroPage = class CadastroPage {
    constructor(loadingCtrl, toastCtrl, authService) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.userRegister = {};
    }
    ngOnInit() { }
    register() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.presentLoading();
            try {
                yield this.authService.register(this.userRegister);
            }
            catch (error) {
                console.error(error);
                let message;
                switch (error.code) {
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
CadastroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
CadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cadastro',
        template: __webpack_require__(/*! raw-loader!./cadastro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cadastro/cadastro.page.html"),
        styles: [__webpack_require__(/*! ./cadastro.page.scss */ "./src/app/pages/cadastro/cadastro.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], CadastroPage);



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-cadastro-module-es2015.js.map