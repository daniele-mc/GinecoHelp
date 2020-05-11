(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-opcoes-opcoes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/opcoes/opcoes.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/opcoes/opcoes.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"backgroud\">\n        <div class=\"container ion-button-center\">\n            <ion-button href=\"/saude-vaginal\" expand=\"full\" fill=\"outline\">Saúde ginecológica <br>(vaginal e higiene\n                íntima)</ion-button>\n            <ion-button href=\"/ciclo-menstrual\" expand=\"full\" fill=\"outline\">Ciclo menstrual</ion-button>\n            <ion-button href=\"/metodo-contraceptivo\" expand=\"full\" fill=\"outline\">Métodos contraceptivos</ion-button>\n            <ion-button href=\"/sexo\" expand=\"full\" fill=\"outline\">Sexo e infecções<br>sexualmente transmissíveis\n            </ion-button>\n            <ion-button href=\"/servicos-saude\" expand=\"full\" fill=\"outline\">Serviços de urgência ginecológica\n            </ion-button>\n        </div>\n    </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _opcoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opcoes.page */ "./src/app/pages/opcoes/opcoes.page.ts");




var routes = [
    {
        path: '',
        component: _opcoes_page__WEBPACK_IMPORTED_MODULE_3__["OpcoesPage"]
    }
];
var OpcoesPageRoutingModule = /** @class */ (function () {
    function OpcoesPageRoutingModule() {
    }
    OpcoesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OpcoesPageRoutingModule);
    return OpcoesPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _opcoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./opcoes-routing.module */ "./src/app/pages/opcoes/opcoes-routing.module.ts");
/* harmony import */ var _opcoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./opcoes.page */ "./src/app/pages/opcoes/opcoes.page.ts");







var OpcoesPageModule = /** @class */ (function () {
    function OpcoesPageModule() {
    }
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
    return OpcoesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/opcoes/opcoes.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/opcoes/opcoes.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('opcoes.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-color: #ff6c92;\n}\n\n.container {\n  position: absolute;\n  bottom: 10%;\n  width: 100%;\n}\n\nion-button {\n  color: #6d4b80;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9vcGNvZXMvb3Bjb2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3Bjb2VzL29wY29lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wY29lcy9vcGNvZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9vcGNvZXMuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YzkyO1xufVxuXG4uY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWJ1dHRvbntcbiAgICBjb2xvcjogIzZkNGI4MDtcbn0iLCIuYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9vcGNvZXMuanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YzkyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogIzZkNGI4MDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OpcoesPage = /** @class */ (function () {
    function OpcoesPage() {
    }
    OpcoesPage.prototype.ngOnInit = function () {
    };
    OpcoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opcoes',
            template: __webpack_require__(/*! raw-loader!./opcoes.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/opcoes/opcoes.page.html"),
            styles: [__webpack_require__(/*! ./opcoes.page.scss */ "./src/app/pages/opcoes/opcoes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OpcoesPage);
    return OpcoesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-opcoes-opcoes-module-es5.js.map