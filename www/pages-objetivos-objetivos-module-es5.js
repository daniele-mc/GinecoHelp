(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-objetivos-objetivos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/objetivos/objetivos.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/objetivos/objetivos.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud\">\n    <div class=\"container top ion-text-center\">\n      <div class=\"ion-padding\">\n        <section>\n          <ul class=\"my-nav list\">\n            <h5 class=\"itens\"><b>Bem-vinda ao GynecoCare</b></h5>\n            <h6 class=\"itens\">\n              <b>Você está na ferramenta digital que lhe dará informações sobre:</b>\n            </h6>\n            <li class=\"itens\">\n              Saúde ginecológica (vaginal e higiene íntima)\n            </li>\n            <li class=\"itens\">\n              Ciclo menstrual\n            </li>\n            <li class=\"itens\">\n              Métodos contraceptivos\n            </li>\n            <li class=\"itens\">\n              Sexo e infecções sexualmente transmissíveis\n            </li>\n            <li class=\"itens\">\n              Serviços de urgência ginecológica\n            </li>\n          </ul>\n        </section>\n      </div>\n      <ion-button\n        fill=\"outline\"\n        (click)=\"registerPage()\"\n        style=\"font-family: Verdana, Geneva, Tahoma, sans-serif;\"\n      >\n      Cadastre-se\n      </ion-button>\n      <ion-button\n        fill=\"outline\"\n        (click)=\"loginPage()\"\n        style=\"font-family: Verdana, Geneva, Tahoma, sans-serif;\"\n      >\n        Login\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/objetivos/objetivos-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/objetivos/objetivos-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ObjetivosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetivosPageRoutingModule", function() { return ObjetivosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _objetivos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objetivos.page */ "./src/app/pages/objetivos/objetivos.page.ts");




var routes = [
    {
        path: '',
        component: _objetivos_page__WEBPACK_IMPORTED_MODULE_3__["ObjetivosPage"]
    }
];
var ObjetivosPageRoutingModule = /** @class */ (function () {
    function ObjetivosPageRoutingModule() {
    }
    ObjetivosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ObjetivosPageRoutingModule);
    return ObjetivosPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/objetivos/objetivos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/objetivos/objetivos.module.ts ***!
  \*****************************************************/
/*! exports provided: ObjetivosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetivosPageModule", function() { return ObjetivosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _objetivos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objetivos-routing.module */ "./src/app/pages/objetivos/objetivos-routing.module.ts");
/* harmony import */ var _objetivos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objetivos.page */ "./src/app/pages/objetivos/objetivos.page.ts");







var ObjetivosPageModule = /** @class */ (function () {
    function ObjetivosPageModule() {
    }
    ObjetivosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _objetivos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ObjetivosPageRoutingModule"]
            ],
            declarations: [_objetivos_page__WEBPACK_IMPORTED_MODULE_6__["ObjetivosPage"]]
        })
    ], ObjetivosPageModule);
    return ObjetivosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/objetivos/objetivos.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/objetivos/objetivos.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 75%;\n  margin: 0 auto;\n  z-index: 2;\n}\n.container.top {\n  top: 16%;\n  border-radius: 10px;\n  background-color: #ff93ab;\n}\n.container.top ion-segment ion-segment-button {\n  color: black;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border: none;\n}\n.container.top ion-segment ion-segment-button ion-label {\n  size: 100px;\n}\n.container.botton {\n  bottom: 15%;\n}\n.container.botton span {\n  color: #ffffff;\n}\n.itens {\n  margin-left: -25px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  color: #050505;\n}\n.rodape {\n  position: absolute;\n  bottom: -20px;\n  width: 100%;\n}\n.backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('back.png');\n  background-repeat: round;\n  background-size: 100%;\n  background-color: #ff6c92;\n}\n.backgroud ul {\n  text-align: left;\n}\n.backgroud .my-nav {\n  list-style-type: disc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9vYmpldGl2b3Mvb2JqZXRpdm9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb2JqZXRpdm9zL29iamV0aXZvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDQ0o7QURBSTtFQUVJLFFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ1I7QURFVztFQUNJLFlBQUE7RUFDQSxnREFBQTtFQUNBLFlBQUE7QUNBZjtBRENlO0VBQ0ksV0FBQTtBQ0NuQjtBREtJO0VBQ0ksV0FBQTtBQ0hSO0FESU87RUFDSSxjQUFBO0FDRlg7QURRQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNMSjtBRFFBO0VBRUksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ05KO0FEUUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNMSjtBRE9JO0VBQ0MsZ0JBQUE7QUNMTDtBRE9JO0VBQ0kscUJBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29iamV0aXZvcy9vYmpldGl2b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHotaW5kZXg6IDI7XG4gICAgJi50b3B7XG4gICAgXG4gICAgICAgIHRvcDoxNiU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjkzYWI7XG4gICAgICAgIGlvbi1zZWdtZW50e1xuICAgXG4gICAgICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICAgICBzaXplOiAxMDBweDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgXG4gICAgJi5ib3R0b257XG4gICAgICAgIGJvdHRvbTogMTUlO1xuICAgICAgIHNwYW4ge1xuICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICB9XG4gICAgfVxuICAgXG4gICB9XG5cbi5pdGVuc3tcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGNvbG9yOiByZ2IoNSwgNSwgNSk7XG59XG5cbi5yb2RhcGV7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5iYWNrZ3JvdWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OnJvdW5kO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YzkyO1xuICAgIFxuICAgIHVse1xuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAubXktbmF2IHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAgIH1cbn1cbiIsIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMjtcbn1cbi5jb250YWluZXIudG9wIHtcbiAgdG9wOiAxNiU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkzYWI7XG59XG4uY29udGFpbmVyLnRvcCBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiBub25lO1xufVxuLmNvbnRhaW5lci50b3AgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIHNpemU6IDEwMHB4O1xufVxuLmNvbnRhaW5lci5ib3R0b24ge1xuICBib3R0b206IDE1JTtcbn1cbi5jb250YWluZXIuYm90dG9uIHNwYW4ge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLml0ZW5zIHtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogIzA1MDUwNTtcbn1cblxuLnJvZGFwZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZjOTI7XG59XG4uYmFja2dyb3VkIHVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5iYWNrZ3JvdWQgLm15LW5hdiB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/objetivos/objetivos.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/objetivos/objetivos.page.ts ***!
  \***************************************************/
/*! exports provided: ObjetivosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetivosPage", function() { return ObjetivosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ObjetivosPage = /** @class */ (function () {
    function ObjetivosPage(router) {
        this.router = router;
    }
    ObjetivosPage.prototype.ngOnInit = function () {
    };
    ObjetivosPage.prototype.registerPage = function () {
        return this.router.navigate(["/cadastro"]);
    };
    ObjetivosPage.prototype.loginPage = function () {
        return this.router.navigate(["/login"]);
    };
    ObjetivosPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ObjetivosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-objetivos',
            template: __webpack_require__(/*! raw-loader!./objetivos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/objetivos/objetivos.page.html"),
            styles: [__webpack_require__(/*! ./objetivos.page.scss */ "./src/app/pages/objetivos/objetivos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ObjetivosPage);
    return ObjetivosPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-objetivos-objetivos-module-es5.js.map