(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-servicos-saude-servicos-saude-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/servicos-saude/servicos-saude.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/servicos-saude/servicos-saude.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud\">\n    <div class=\"title ion-text-center\">Serviços de urgência ginecológica</div>\n\n    <ion-slides>\n      <ion-slide>\n        <div class=\"slide-inner ion-padding\">\n          <span>Quais os serviços de urgência ginecológica?</span>\n          <ion-item class=\"ion-margin-top\">\n            Maternidade Escola Januário Cicco.\n            <br>\n            Av. Nilo Peçanha, 259 - Petrópolis, Natal - RN, 59012-310.\n          </ion-item>\n\n          <ion-item class=\"ion-margin-top\">\n            Maternidade Municipal Dr. Araken Irerê Pinto.\n            <br>\n            Rua Coronel Juventino Cabral, 1735 - Tirol, Natal - RN. CEP: 59015- 330.\n          </ion-item>\n\n          <ion-item class=\"ion-margin-top\">\n            Maternidade Leide Morais.\n            <br>\n            Av. das Fronteiras, 2041 - Nossa Sra. da Apresentação. Natal- RN. CEP: 59114- 275.\n          </ion-item>\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"back()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b></ion-button>\n      <ion-button color=\"primary\" (click)=\"menu()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 75%;\n  margin: 0 auto;\n  z-index: 2;\n}\n.container.top {\n  top: 16%;\n  border-radius: 10px;\n  background-color: #ff93ab;\n}\n.container.top ion-segment ion-segment-button {\n  color: black;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border: none;\n}\n.container.top ion-segment ion-segment-button ion-label {\n  size: 100px;\n}\n.container.botton {\n  bottom: 5%;\n}\n.container.botton span {\n  color: #ffffff;\n}\n.backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('back.png');\n  background-repeat: round;\n  background-size: 100%;\n}\nion-slides {\n  margin-top: 30%;\n}\nion-slides .slide-inner {\n  height: 100%;\n  width: 80%;\n  color: #050505;\n  background-color: #ff93ab;\n  border-radius: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  flex-direction: column;\n}\nion-slides ion-item {\n  --border-radius: 10px;\n}\n.title {\n  position: relative;\n  top: 5%;\n  font-size: 36px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\n.rodape {\n  position: relative;\n  margin-top: 2%;\n  width: 100%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zZXJ2aWNvcy1zYXVkZS9zZXJ2aWNvcy1zYXVkZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlcnZpY29zLXNhdWRlL3NlcnZpY29zLXNhdWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RkFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0NKO0FEQUk7RUFFSSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NSO0FERVc7RUFDSSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxZQUFBO0FDQWY7QURDZTtFQUNJLFdBQUE7QUNDbkI7QURJSTtFQUNJLFVBQUE7QUNGUjtBREdPO0VBQ0ksY0FBQTtBQ0RYO0FETUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDSEo7QURLQTtFQUVJLGVBQUE7QUNISjtBREtJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsaUJBQUE7RUFDQSxzQkFBQTtBQ0hSO0FETUk7RUFDSSxxQkFBQTtBQ0pSO0FET0E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDSko7QURRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXJ2aWNvcy1zYXVkZS9zZXJ2aWNvcy1zYXVkZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XG4uY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgei1pbmRleDogMjtcbiAgICAmLnRvcHtcbiAgICBcbiAgICAgICAgdG9wOjE2JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTNhYjtcbiAgICAgICAgaW9uLXNlZ21lbnR7XG4gICBcbiAgICAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgICAgIHNpemU6IDEwMHB4O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5ib3R0b257XG4gICAgICAgIGJvdHRvbTogNSU7XG4gICAgICAgc3BhbiB7XG4gICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgIH1cbiAgICB9XG4gICBcbiAgIH1cbi5iYWNrZ3JvdWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG5pb24tc2xpZGVzIHtcbiAgICAvL2hlaWdodDogODAlO1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICAgICBcbiAgICAuc2xpZGUtaW5uZXJ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgY29sb3I6IHJnYig1LCA1LCA1KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmY5M2FiO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICBcbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbn1cbi50aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNSU7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzZkNGM4MDtcbiAgXG59XG5cbi5yb2RhcGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAvL2JvdHRvbTogMyU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IGJsYWNrO1xuXG4gICAgXG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMjtcbn1cbi5jb250YWluZXIudG9wIHtcbiAgdG9wOiAxNiU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkzYWI7XG59XG4uY29udGFpbmVyLnRvcCBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiBub25lO1xufVxuLmNvbnRhaW5lci50b3AgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIHNpemU6IDEwMHB4O1xufVxuLmNvbnRhaW5lci5ib3R0b24ge1xuICBib3R0b206IDUlO1xufVxuLmNvbnRhaW5lci5ib3R0b24gc3BhbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgbWFyZ2luLXRvcDogMzAlO1xufVxuaW9uLXNsaWRlcyAuc2xpZGUtaW5uZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA4MCU7XG4gIGNvbG9yOiAjMDUwNTA1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5M2FiO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmlvbi1zbGlkZXMgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1JTtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LWZhbWlseTogXCJBbWF0aWMgU0NcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICM2ZDRjODA7XG59XG5cbi5yb2RhcGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ServicosSaudePage = /** @class */ (function () {
    function ServicosSaudePage(router) {
        this.router = router;
    }
    ServicosSaudePage.prototype.ngOnInit = function () {
    };
    ServicosSaudePage.prototype.back = function () {
        return this.router.navigate(["/gravidez"]);
    };
    ServicosSaudePage.prototype.menu = function () {
        return this.router.navigate(["/opcoes"]);
    };
    ServicosSaudePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ServicosSaudePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicos-saude',
            template: __webpack_require__(/*! raw-loader!./servicos-saude.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/servicos-saude/servicos-saude.page.html"),
            styles: [__webpack_require__(/*! ./servicos-saude.page.scss */ "./src/app/pages/servicos-saude/servicos-saude.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ServicosSaudePage);
    return ServicosSaudePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-servicos-saude-servicos-saude-module-es5.js.map