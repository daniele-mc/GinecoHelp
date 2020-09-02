(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-opcoes-opcoes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/opcoes/opcoes.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/opcoes/opcoes.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"backgroud\">\n        <div class=\"bia ion-text-center\">Olá, sou Bia sua amiga<br> virtual, e estou<br>aqui para te ajudar</div>\n        <div class=\"title ion-text-center\">Clique no que você quer saber</div>\n        <div class=\"subtitle ion-text-center\">Eu quero:</div>\n\n        <div class=\"container ion-button-center\">\n            <ion-button href=\"/saude-vaginal\" expand=\"full\" fill=\"outline\">Saúde ginecológica <br>(vaginal e higiene\n                íntima)</ion-button>\n            <ion-button href=\"/ciclo-menstrual\" expand=\"full\" fill=\"outline\">Ciclo menstrual</ion-button>\n            <ion-button href=\"/metodo-contraceptivo\" expand=\"full\" fill=\"outline\">Métodos contraceptivos</ion-button>\n            <ion-button href=\"/sexo\" expand=\"full\" fill=\"outline\">Sexo e infecções<br>sexualmente transmissíveis\n            </ion-button>\n            <ion-button href=\"/servicos-saude\" expand=\"full\" fill=\"outline\">Serviços de urgência ginecológica\n            </ion-button>\n        </div>\n        <div class=\"rodape ion-text-center\">\n            <ion-button style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\" (click)=\"logout()\">\n                <b>logout</b>\n            </ion-button>\n        </div>\n        <div>\n            <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n        </div>\n    </div>\n\n</ion-content>"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('opcoes.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-color: #ff6c92;\n  width: 100%;\n  height: 100%;\n}\n.container {\n  position: absolute;\n  bottom: 15%;\n  width: 100%;\n}\n.bia {\n  position: relative;\n  top: 5%;\n  font-size: 25px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n  margin-left: 38%;\n}\n.title {\n  position: relative;\n  top: 15%;\n  font-size: 39px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\n.subtitle {\n  position: relative;\n  top: 15%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\n.boneca {\n  position: absolute;\n  top: 5%;\n  margin-left: 6%;\n  width: 120px;\n  height: 150px;\n}\nion-button .container {\n  color: #6d4b80;\n}\n.rodape {\n  position: absolute;\n  width: 100vw;\n  top: 84.5%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9vcGNvZXMvb3Bjb2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3Bjb2VzL29wY29lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsdUZBQUE7QUFDUjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDSjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNDSjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0NKO0FERUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDSjtBREVBO0VBQ0ksY0FBQTtBQ0NKO0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wY29lcy9vcGNvZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xuLmJhY2tncm91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9vcGNvZXMuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YzkyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxNSU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5iaWEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDUlO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgY29sb3I6ICM2ZDRjODA7IFxuICAgIG1hcmdpbi1sZWZ0OiAzOCU7XG59XG5cbi50aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTUlO1xuICAgIGZvbnQtc2l6ZTogMzlweDtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgY29sb3I6ICM2ZDRjODA7IFxufVxuXG4uc3VidGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE1JTtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwOyBcbn1cblxuLmJvbmVjYXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1JTtcbiAgICBtYXJnaW4tbGVmdDogNiU7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbmlvbi1idXR0b24gLmNvbnRhaW5lcntcbiAgICBjb2xvcjogIzZkNGI4MDtcbn1cblxuLnJvZGFwZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHRvcDogODQuNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgICBcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL29wY29lcy5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZjOTI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJpYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1JTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LWZhbWlseTogXCJBbWF0aWMgU0NcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICM2ZDRjODA7XG4gIG1hcmdpbi1sZWZ0OiAzOCU7XG59XG5cbi50aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNSU7XG4gIGZvbnQtc2l6ZTogMzlweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNmQ0YzgwO1xufVxuXG4uc3VidGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTUlO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xuICBjb2xvcjogIzZkNGM4MDtcbn1cblxuLmJvbmVjYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDYlO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbmlvbi1idXR0b24gLmNvbnRhaW5lciB7XG4gIGNvbG9yOiAjNmQ0YjgwO1xufVxuXG4ucm9kYXBlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIHRvcDogODQuNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

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



let OpcoesPage = class OpcoesPage {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
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
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
OpcoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-opcoes',
        template: __webpack_require__(/*! raw-loader!./opcoes.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/opcoes/opcoes.page.html"),
        styles: [__webpack_require__(/*! ./opcoes.page.scss */ "./src/app/pages/opcoes/opcoes.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], OpcoesPage);



/***/ })

}]);
//# sourceMappingURL=pages-opcoes-opcoes-module-es2015.js.map