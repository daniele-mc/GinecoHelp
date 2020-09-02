(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-saude-vaginal-dicas-saude-vaginal-dicas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud\">\n    <div class=\"title ion-text-center\">Dicas</div>\n    <div class=\"container ion-button-center\">\n      <ion-button expand=\"full\" fill=\"outline\">O que pode estar acontecendo<br>se a vagina está ardendo ?</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">O que fazer quando<br>a vagina está ardendo?</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">Quando o corrimento (muco vaginal)<br>é normal?</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">Corrimento pode ter<br>mau cheiro? </ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">Quando corrimento tem mau cheiro<br>é sinal de quê?</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">O que pode estar acontecendo<br>se a vagina está coçando?</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\">O que fazer quando<br>a vagina está coçando?</ion-button>\n    </div>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button href=\"/saude-vaginal\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SaudeVaginalDicasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeVaginalDicasPageRoutingModule", function() { return SaudeVaginalDicasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _saude_vaginal_dicas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saude-vaginal-dicas.page */ "./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas.page.ts");




const routes = [
    {
        path: '',
        component: _saude_vaginal_dicas_page__WEBPACK_IMPORTED_MODULE_3__["SaudeVaginalDicasPage"]
    }
];
let SaudeVaginalDicasPageRoutingModule = class SaudeVaginalDicasPageRoutingModule {
};
SaudeVaginalDicasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SaudeVaginalDicasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas.module.ts ***!
  \*************************************************************************/
/*! exports provided: SaudeVaginalDicasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeVaginalDicasPageModule", function() { return SaudeVaginalDicasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _saude_vaginal_dicas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saude-vaginal-dicas-routing.module */ "./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas-routing.module.ts");
/* harmony import */ var _saude_vaginal_dicas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saude-vaginal-dicas.page */ "./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas.page.ts");







let SaudeVaginalDicasPageModule = class SaudeVaginalDicasPageModule {
};
SaudeVaginalDicasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _saude_vaginal_dicas_routing_module__WEBPACK_IMPORTED_MODULE_5__["SaudeVaginalDicasPageRoutingModule"]
        ],
        declarations: [_saude_vaginal_dicas_page__WEBPACK_IMPORTED_MODULE_6__["SaudeVaginalDicasPage"]]
    })
], SaudeVaginalDicasPageModule);



/***/ }),

/***/ "./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('back.png');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-color: #ff6c92;\n}\n.title {\n  position: relative;\n  top: 7%;\n  font-size: 55px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\n.container {\n  position: absolute;\n  top: 25%;\n  bottom: 20%;\n  width: 100%;\n}\n.rodape {\n  position: relative;\n  top: 74%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsLWRpY2FzL3NhdWRlLXZhZ2luYWwtZGljYXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsLWRpY2FzL3NhdWRlLXZhZ2luYWwtZGljYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVGQUFBO0FBQ1I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNDSjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0NKO0FERUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NKO0FERUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsLWRpY2FzL3NhdWRlLXZhZ2luYWwtZGljYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xuLmJhY2tncm91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmM5Mjtcbn1cblxuLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA3JTtcbiAgICBmb250LXNpemU6IDU1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwOyBcbn1cblxuLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNSU7XG4gICAgYm90dG9tOiAyMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb2RhcGV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNzQlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YzkyO1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNyU7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNmQ0YzgwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1JTtcbiAgYm90dG9tOiAyMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucm9kYXBlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDc0JTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas.page.ts ***!
  \***********************************************************************/
/*! exports provided: SaudeVaginalDicasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeVaginalDicasPage", function() { return SaudeVaginalDicasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SaudeVaginalDicasPage = class SaudeVaginalDicasPage {
    constructor() { }
    ngOnInit() {
    }
};
SaudeVaginalDicasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saude-vaginal-dicas',
        template: __webpack_require__(/*! raw-loader!./saude-vaginal-dicas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas.page.html"),
        styles: [__webpack_require__(/*! ./saude-vaginal-dicas.page.scss */ "./src/app/pages/saude-vaginal-dicas/saude-vaginal-dicas.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SaudeVaginalDicasPage);



/***/ })

}]);
//# sourceMappingURL=pages-saude-vaginal-dicas-saude-vaginal-dicas-module-es2015.js.map