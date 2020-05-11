(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-servicos-saude-servicos-saude-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/servicos-saude/servicos-saude.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/servicos-saude/servicos-saude.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud\">\n\n    <div class=\"container ion-button-center\">\n      <ion-button expand=\"full\" fill=\"outline\">Onde ir em caso de violência sexual?</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">Violentrômetro <br>(por cores de violência)</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">Denúncia anônima</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">Quais os serviços de <br>urgência ginecológica?</ion-button>\n    </div>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button href=\"opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/servicos-saude/servicos-saude-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/servicos-saude/servicos-saude-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ServicosSaudePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosSaudePageRoutingModule", function() { return ServicosSaudePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicos_saude_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicos-saude.page */ "./src/app/pages/servicos-saude/servicos-saude.page.ts");




var routes = [
    {
        path: '',
        component: _servicos_saude_page__WEBPACK_IMPORTED_MODULE_3__["ServicosSaudePage"]
    }
];
var ServicosSaudePageRoutingModule = /** @class */ (function () {
    function ServicosSaudePageRoutingModule() {
    }
    ServicosSaudePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ServicosSaudePageRoutingModule);
    return ServicosSaudePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/servicos-saude/servicos-saude.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/servicos-saude/servicos-saude.module.ts ***!
  \***************************************************************/
/*! exports provided: ServicosSaudePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosSaudePageModule", function() { return ServicosSaudePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicos_saude_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicos-saude-routing.module */ "./src/app/pages/servicos-saude/servicos-saude-routing.module.ts");
/* harmony import */ var _servicos_saude_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicos-saude.page */ "./src/app/pages/servicos-saude/servicos-saude.page.ts");







var ServicosSaudePageModule = /** @class */ (function () {
    function ServicosSaudePageModule() {
    }
    ServicosSaudePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _servicos_saude_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicosSaudePageRoutingModule"]
            ],
            declarations: [_servicos_saude_page__WEBPACK_IMPORTED_MODULE_6__["ServicosSaudePage"]]
        })
    ], ServicosSaudePageModule);
    return ServicosSaudePageModule;
}());



/***/ }),

/***/ "./src/app/pages/servicos-saude/servicos-saude.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/servicos-saude/servicos-saude.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('servico-saude.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-color: #ff6c92;\n}\n\n.container {\n  position: absolute;\n  top: 30%;\n  bottom: 20%;\n  width: 100%;\n}\n\n.rodape {\n  position: relative;\n  top: 85%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zZXJ2aWNvcy1zYXVkZS9zZXJ2aWNvcy1zYXVkZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlcnZpY29zLXNhdWRlL3NlcnZpY29zLXNhdWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY29zLXNhdWRlL3NlcnZpY29zLXNhdWRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvc2Vydmljby1zYXVkZS5qcGcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZjOTI7XG59XG4uY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwJTtcbiAgICBib3R0b206IDIwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnJvZGFwZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA4NSU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIFxufVxuIiwiLmJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvc2Vydmljby1zYXVkZS5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZjOTI7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBib3R0b206IDIwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb2RhcGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogODUlO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/servicos-saude/servicos-saude.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/servicos-saude/servicos-saude.page.ts ***!
  \*************************************************************/
/*! exports provided: ServicosSaudePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosSaudePage", function() { return ServicosSaudePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicosSaudePage = /** @class */ (function () {
    function ServicosSaudePage() {
    }
    ServicosSaudePage.prototype.ngOnInit = function () {
    };
    ServicosSaudePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicos-saude',
            template: __webpack_require__(/*! raw-loader!./servicos-saude.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/servicos-saude/servicos-saude.page.html"),
            styles: [__webpack_require__(/*! ./servicos-saude.page.scss */ "./src/app/pages/servicos-saude/servicos-saude.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicosSaudePage);
    return ServicosSaudePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-servicos-saude-servicos-saude-module-es5.js.map