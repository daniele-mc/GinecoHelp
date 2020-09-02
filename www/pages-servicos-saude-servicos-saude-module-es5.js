(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-servicos-saude-servicos-saude-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/servicos-saude/servicos-saude.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/servicos-saude/servicos-saude.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud\">\n    <div class=\"title ion-text-center\">Serviços de urgência ginecológica</div>\n\n    <ion-slides>\n      <ion-slide>\n        <div class=\"slide-inner ion-padding\">\n          <span>Quais os serviços de urgência ginecológica?</span>\n          <ion-item class=\"ion-margin-top\">\n            Maternidade Escola Januário Cicco.\n            <br>\n            Av. Nilo Peçanha, 259 - Petrópolis, Natal - RN, 59012-310.\n          </ion-item>\n\n          <ion-item class=\"ion-margin-top\">\n            Maternidade Municipal Dr. Araken Irerê Pinto.\n            <br>\n            Rua Coronel Juventino Cabral, 1735 - Tirol, Natal - RN. CEP: 59015- 330.\n          </ion-item>\n\n          <ion-item class=\"ion-margin-top\">\n            Maternidade Leide Morais.\n            <br>\n            Av. das Fronteiras, 2041 - Nossa Sra. da Apresentação. Natal- RN. CEP: 59114- 275.\n          </ion-item>\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/gravidez\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b></ion-button>\n      <ion-button href=\"opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 75%;\n  margin: 0 auto;\n  z-index: 2;\n}\n.container.top {\n  top: 16%;\n  border-radius: 10px;\n  background-color: #ff93ab;\n}\n.container.top ion-segment ion-segment-button {\n  color: black;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border: none;\n}\n.container.top ion-segment ion-segment-button ion-label {\n  size: 100px;\n}\n.container.botton {\n  bottom: 5%;\n}\n.container.botton span {\n  color: #ffffff;\n}\n.backgroud {\n  position: static;\n  width: 100%;\n  height: 100%;\n  background: url('back.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\nion-slides {\n  height: 80%;\n}\nion-slides .slide-inner {\n  width: 75%;\n  color: #050505;\n  background-color: #ff93ab;\n  border-radius: 10px;\n}\nion-slides ion-item {\n  --border-radius: 10px;\n}\n.title {\n  position: relative;\n  top: 5%;\n  font-size: 36px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\n.rodape {\n  position: relative;\n  bottom: 3%;\n  width: 100%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zZXJ2aWNvcy1zYXVkZS9zZXJ2aWNvcy1zYXVkZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlcnZpY29zLXNhdWRlL3NlcnZpY29zLXNhdWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RkFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0NKO0FEQUk7RUFFSSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NSO0FERVc7RUFDSSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxZQUFBO0FDQWY7QURDZTtFQUNJLFdBQUE7QUNDbkI7QURJSTtFQUNJLFVBQUE7QUNGUjtBREdPO0VBQ0ksY0FBQTtBQ0RYO0FETUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUNISjtBREtBO0VBQ0ksV0FBQTtBQ0ZKO0FESUk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNGUjtBREtJO0VBQ0kscUJBQUE7QUNIUjtBRE1BO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0hKO0FET0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2Vydmljb3Mtc2F1ZGUvc2Vydmljb3Mtc2F1ZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xuLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHotaW5kZXg6IDI7XG4gICAgJi50b3B7XG4gICAgXG4gICAgICAgIHRvcDoxNiU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjkzYWI7XG4gICAgICAgIGlvbi1zZWdtZW50e1xuICAgXG4gICAgICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICAgICBzaXplOiAxMDBweDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICYuYm90dG9ue1xuICAgICAgICBib3R0b206IDUlO1xuICAgICAgIHNwYW4ge1xuICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICB9XG4gICAgfVxuICAgXG4gICB9XG4uYmFja2dyb3VkIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgXG4gICAgLnNsaWRlLWlubmVye1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBjb2xvcjogcmdiKDUsIDUsIDUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZjkzYWI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICAgXG4gICAgaW9uLWl0ZW17XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG59XG4udGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDUlO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgY29sb3I6ICM2ZDRjODA7XG4gIFxufVxuXG4ucm9kYXBlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAzJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogYmxhY2s7XG5cbiAgICBcbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAyO1xufVxuLmNvbnRhaW5lci50b3Age1xuICB0b3A6IDE2JTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTNhYjtcbn1cbi5jb250YWluZXIudG9wIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY29udGFpbmVyLnRvcCBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgc2l6ZTogMTAwcHg7XG59XG4uY29udGFpbmVyLmJvdHRvbiB7XG4gIGJvdHRvbTogNSU7XG59XG4uY29udGFpbmVyLmJvdHRvbiBzcGFuIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA4MCU7XG59XG5pb24tc2xpZGVzIC5zbGlkZS1pbm5lciB7XG4gIHdpZHRoOiA3NSU7XG4gIGNvbG9yOiAjMDUwNTA1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5M2FiO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLXNsaWRlcyBpb24taXRlbSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUlO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xuICBjb2xvcjogIzZkNGM4MDtcbn1cblxuLnJvZGFwZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAzJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"

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