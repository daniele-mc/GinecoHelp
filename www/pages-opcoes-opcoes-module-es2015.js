(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-opcoes-opcoes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/opcoes/opcoes.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/opcoes/opcoes.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"backgroud\"> \n\n        <div class=\"topo\">\n            \n        \n            <div class=\"imagemBoneca\">\n                <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n            </div>\n\n            <div class=\"bia ion-text-center\">Olá, sou Bia sua amiga<br> virtual, e estou<br>aqui para te ajudar</div>\n        </div>\n        \n\n        <div class=\"title ion-text-center\">Clique no que você quer saber</div>\n        \n        <div class=\"subtitle ion-text-center\">Eu quero:</div>\n\n        <div class=\"container ion-button-center\">\n            <ion-button (click)=\"saudeVaginal()\" expand=\"full\" fill=\"outline\">Saúde ginecológica <br>(vaginal e higiene\n                íntima)</ion-button>\n            <ion-button (click)=\"cicloMenstrual()\" expand=\"full\" fill=\"outline\">Ciclo menstrual</ion-button>\n            <ion-button (click)=\"metodoContraceptivo()\" expand=\"full\" fill=\"outline\">Métodos contraceptivos</ion-button>\n            <ion-button (click)=\"sexo()\" expand=\"full\" fill=\"outline\">Sexo e infecções<br>sexualmente transmissíveis\n            </ion-button>\n            <ion-button (click)=\"servicosSaude()\" expand=\"full\" fill=\"outline\">Serviços de urgência ginecológica\n            </ion-button>\n        </div>\n\n        <div class=\"rodape ion-text-center\">\n            <ion-button style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\" (click)=\"logout()\">\n                <b>logout</b>\n            </ion-button>\n        </div>    \n\n    </div>\n\n</ion-content>"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('opcoes.jpg');\n  background-repeat: round;\n  background-size: 100%;\n  background-color: #ff6c92;\n  width: 100%;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.topo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: arrow;\n          flex: arrow;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.imagemBoneca {\n  margin-top: 20%;\n  margin-left: 6%;\n}\n.bia {\n  font-size: 25px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n  margin-left: 10%;\n  margin-bottom: 19%;\n}\n.boneca {\n  width: 120px;\n  height: 150px;\n}\n.title {\n  top: 15%;\n  font-size: 39px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\n.subtitle {\n  top: 15%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\n.container {\n  width: 100%;\n}\nion-button .container {\n  color: #6d4b80;\n}\n.rodape {\n  width: 100vw;\n  top: 84.5%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9vcGNvZXMvb3Bjb2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3Bjb2VzL29wY29lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsdUZBQUE7QUFDUjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7QURHQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsV0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjtBREdBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNBSjtBREdBO0VBSUksZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNISjtBRE1BO0VBSUksWUFBQTtFQUNBLGFBQUE7QUNOSjtBRFNBO0VBRUksUUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNQSjtBRFVBO0VBRUksUUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBR0ksV0FBQTtBQ1ZKO0FEY0E7RUFDSSxjQUFBO0FDWEo7QURjQTtFQUVJLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wY29lcy9vcGNvZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xuLmJhY2tncm91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9vcGNvZXMuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpyb3VuZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmM5MjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIFxufVxuXG4udG9wbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiBhcnJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1hZ2VtQm9uZWNhIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDYlO1xufVxuXG4uYmlhIHtcbiAgICAvL3Bvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvL21hcmdpbi10b3A6IDIlO1xuICAgIC8vdG9wOiA1JTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwOyBcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE5JTtcbn1cblxuLmJvbmVjYXtcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL3RvcDogNSU7XG4gICAgLy9tYXJnaW4tbGVmdDogNiU7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbi50aXRsZSB7XG4gICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNSU7XG4gICAgZm9udC1zaXplOiAzOXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzZkNGM4MDsgXG59XG5cbi5zdWJ0aXRsZSB7XG4gICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNSU7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzZkNGM4MDsgXG59XG5cbi5jb250YWluZXJ7XG4gICAgLy9tYXJnaW4tdG9wOiAzMCU7XG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuaW9uLWJ1dHRvbiAuY29udGFpbmVye1xuICAgIGNvbG9yOiAjNmQ0YjgwO1xufVxuXG4ucm9kYXBle1xuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICB0b3A6IDg0LjUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gICAgXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG4uYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9vcGNvZXMuanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZjOTI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b3BvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogYXJyb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZW1Cb25lY2Ege1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiA2JTtcbn1cblxuLmJpYSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNmQ0YzgwO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAxOSU7XG59XG5cbi5ib25lY2Ege1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi50aXRsZSB7XG4gIHRvcDogMTUlO1xuICBmb250LXNpemU6IDM5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xuICBjb2xvcjogIzZkNGM4MDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgdG9wOiAxNSU7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNmQ0YzgwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1idXR0b24gLmNvbnRhaW5lciB7XG4gIGNvbG9yOiAjNmQ0YjgwO1xufVxuXG4ucm9kYXBlIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICB0b3A6IDg0LjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

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