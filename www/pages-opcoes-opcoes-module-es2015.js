(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-opcoes-opcoes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/opcoes/opcoes.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/opcoes/opcoes.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"backgroud\"> \n\n        <div class=\"topo\">\n                 \n            <div class=\"imagemBoneca\">\n                <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n            </div>\n\n            <div class=\"bia ion-text-center\">Olá, sou Bia sua amiga<br> virtual, e estou<br>aqui para te ajudar</div>\n        </div>\n        \n\n        <div class=\"title ion-text-center\">Clique no que você quer saber</div>\n        \n        <div class=\"subtitle ion-text-center\">Eu quero:</div>\n\n        <div class=\"container ion-button-center\">\n            <ion-button (click)=\"saudeVaginal()\" expand=\"full\" fill=\"outline\">Saúde ginecológica <br>(vaginal e higiene\n                íntima)</ion-button>\n            <ion-button (click)=\"cicloMenstrual()\" expand=\"full\" fill=\"outline\">Ciclo menstrual</ion-button>\n            <ion-button (click)=\"metodoContraceptivo()\" expand=\"full\" fill=\"outline\">Métodos contraceptivos</ion-button>\n            <ion-button (click)=\"sexo()\" expand=\"full\" fill=\"outline\">Sexo e infecções<br>sexualmente transmissíveis\n            </ion-button>\n            <ion-button (click)=\"servicosSaude()\" expand=\"full\" fill=\"outline\">Serviços de urgência ginecológica\n            </ion-button>\n        </div>\n\n        <div class=\"rodape ion-text-center\">\n            <ion-button style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\" (click)=\"logout()\">\n                <b>logout</b>\n            </ion-button>\n        </div>    \n\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/opcoes/opcoes-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/opcoes/opcoes-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OpcoesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcoesPageRoutingModule", function() { return OpcoesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _opcoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opcoes.page */ "./src/app/pages/opcoes/opcoes.page.ts");




const routes = [
    {
        path: '',
        component: _opcoes_page__WEBPACK_IMPORTED_MODULE_3__["OpcoesPage"]
    }
];
let OpcoesPageRoutingModule = class OpcoesPageRoutingModule {
};
OpcoesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OpcoesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/opcoes/opcoes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/opcoes/opcoes.module.ts ***!
  \***********************************************/
/*! exports provided: OpcoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcoesPageModule", function() { return OpcoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _opcoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./opcoes-routing.module */ "./src/app/pages/opcoes/opcoes-routing.module.ts");
/* harmony import */ var _opcoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./opcoes.page */ "./src/app/pages/opcoes/opcoes.page.ts");







let OpcoesPageModule = class OpcoesPageModule {
};
OpcoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _opcoes_routing_module__WEBPACK_IMPORTED_MODULE_5__["OpcoesPageRoutingModule"]
        ],
        declarations: [_opcoes_page__WEBPACK_IMPORTED_MODULE_6__["OpcoesPage"]]
    })
], OpcoesPageModule);



/***/ }),

/***/ "./src/app/pages/opcoes/opcoes.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/opcoes/opcoes.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('opcoes.jpg');\n  background-repeat: round;\n  background-size: 100%;\n  background-color: #ff6c92;\n  width: 100%;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.topo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: arrow;\n          flex: arrow;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.imagemBoneca {\n  margin-top: 100px;\n  margin-left: 6%;\n  overflow: hidden;\n}\n.bia {\n  font-size: 25px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n  margin-left: 7%;\n  margin-bottom: 19%;\n}\n.boneca {\n  max-width: 120px;\n  max-width: 150px;\n  width: auto;\n  height: auto;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n}\n.title {\n  top: 15%;\n  font-size: 39px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\n.subtitle {\n  top: 15%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\n.container {\n  width: 100%;\n}\nion-button .container {\n  color: #6d4b80;\n}\n.rodape {\n  width: 100vw;\n  top: 84.5%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9vcGNvZXMvb3Bjb2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3Bjb2VzL29wY29lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsdUZBQUE7QUFDUjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7QURHQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsV0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjtBREdBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdBO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0E7RUFHSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0ZKO0FES0E7RUFDSSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FES0E7RUFFSSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0hKO0FETUE7RUFDSSxXQUFBO0FDSEo7QURPQTtFQUNJLGNBQUE7QUNKSjtBRE9BO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3Bjb2VzL29wY29lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XG4uYmFja2dyb3VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL29wY29lcy5qcGcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OnJvdW5kO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YzkyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgXG59XG5cbi50b3BvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IGFycm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZW1Cb25lY2Ege1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmlhIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwOyBcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTklO1xufVxuXG4uYm9uZWNhe1xuICAgIC8vd2lkdGg6IDEyMHB4O1xuICAgIC8vaGVpZ2h0OiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnRpdGxlIHtcbiAgICB0b3A6IDE1JTtcbiAgICBmb250LXNpemU6IDM5cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwOyBcbn1cblxuLnN1YnRpdGxlIHtcblxuICAgIHRvcDogMTUlO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgY29sb3I6ICM2ZDRjODA7IFxufVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbmlvbi1idXR0b24gLmNvbnRhaW5lcntcbiAgICBjb2xvcjogIzZkNGI4MDtcbn1cblxuLnJvZGFwZXtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgdG9wOiA4NC41JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIFxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuLmJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvb3Bjb2VzLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YzkyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udG9wbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IGFycm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1hZ2VtQm9uZWNhIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA2JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJpYSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNmQ0YzgwO1xuICBtYXJnaW4tbGVmdDogNyU7XG4gIG1hcmdpbi1ib3R0b206IDE5JTtcbn1cblxuLmJvbmVjYSB7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50aXRsZSB7XG4gIHRvcDogMTUlO1xuICBmb250LXNpemU6IDM5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xuICBjb2xvcjogIzZkNGM4MDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgdG9wOiAxNSU7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNmQ0YzgwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1idXR0b24gLmNvbnRhaW5lciB7XG4gIGNvbG9yOiAjNmQ0YjgwO1xufVxuXG4ucm9kYXBlIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICB0b3A6IDg0LjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/opcoes/opcoes.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/opcoes/opcoes.page.ts ***!
  \*********************************************/
/*! exports provided: OpcoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcoesPage", function() { return OpcoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let OpcoesPage = class OpcoesPage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    saudeVaginal() {
        return this.router.navigate(["/saude-vaginal"]);
    }
    cicloMenstrual() {
        return this.router.navigate(["/ciclo-menstrual"]);
    }
    metodoContraceptivo() {
        return this.router.navigate(["/metodo-contraceptivo"]);
    }
    sexo() {
        return this.router.navigate(["/sexo"]);
    }
    servicosSaude() {
        return this.router.navigate(["/servicos-saude"]);
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.authService.logout();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
};
OpcoesPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
OpcoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-opcoes',
        template: __webpack_require__(/*! raw-loader!./opcoes.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/opcoes/opcoes.page.html"),
        styles: [__webpack_require__(/*! ./opcoes.page.scss */ "./src/app/pages/opcoes/opcoes.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], OpcoesPage);



/***/ })

}]);
//# sourceMappingURL=pages-opcoes-opcoes-module-es2015.js.map