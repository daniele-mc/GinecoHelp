(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-objetivos-objetivos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/objetivos/objetivos.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/objetivos/objetivos.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud\">\n    <div class=\"container top ion-text-center\">\n      <div class=\"ion-padding\">\n        <section>\n          <ul class=\"my-nav list\">\n            <h5 class=\"itens\"><b>Bem-vinda ao GynecoCare</b></h5>\n            <h6 class=\"itens\">\n              <b>Você está na ferramenta digital que lhe dará informações sobre:</b>\n            </h6>\n            <li class=\"itens\">\n              Saúde ginecológica (vaginal e higiene íntima)\n            </li>\n            <li class=\"itens\">\n              Ciclo menstrual\n            </li>\n            <li class=\"itens\">\n              Métodos contraceptivos\n            </li>\n            <li class=\"itens\">\n              Sexo e infecções sexualmente transmissíveis\n            </li>\n            <li class=\"itens\">\n              Serviços de urgência ginecológica\n            </li>\n          </ul>\n        </section>\n      </div>\n      <ion-button\n        fill=\"outline\"\n        href=\"/cadastro\"\n        style=\"font-family: Verdana, Geneva, Tahoma, sans-serif;\"\n      >\n      Cadastre-se\n      </ion-button>\n      <ion-button\n        fill=\"outline\"\n        href=\"/login\"\n        style=\"font-family: Verdana, Geneva, Tahoma, sans-serif;\"\n      >\n        Login\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n"

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

module.exports = ".container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 85%;\n  margin: 0 auto;\n  z-index: 2;\n}\n.container.top {\n  top: 16%;\n  border-radius: 10px;\n  background-color: #ff93ab;\n}\n.container.top ion-segment ion-segment-button {\n  color: black;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border: none;\n}\n.container.top ion-segment ion-segment-button ion-label {\n  size: 100px;\n}\n.container.botton {\n  bottom: 15%;\n}\n.container.botton span {\n  color: #ffffff;\n}\n.itens {\n  margin-left: -25px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  color: #050505;\n}\n.rodape {\n  position: absolute;\n  bottom: -20px;\n  width: 100%;\n}\n.backgroud {\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: url('back.png');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center;\n}\n.backgroud ul {\n  text-align: left;\n}\n.backgroud .my-nav {\n  list-style-type: disc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9vYmpldGl2b3Mvb2JqZXRpdm9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb2JqZXRpdm9zL29iamV0aXZvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDQ0o7QURBSTtFQUVJLFFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ1I7QURFVztFQUNJLFlBQUE7RUFDQSxnREFBQTtFQUNBLFlBQUE7QUNBZjtBRENlO0VBQ0ksV0FBQTtBQ0NuQjtBREtJO0VBQ0ksV0FBQTtBQ0hSO0FESU87RUFDSSxjQUFBO0FDRlg7QURRQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNMSjtBRFFBO0VBRUksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ05KO0FEUUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDTEo7QURPSTtFQUNDLGdCQUFBO0FDTEw7QURPSTtFQUNJLHFCQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vYmpldGl2b3Mvb2JqZXRpdm9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB6LWluZGV4OiAyO1xuICAgICYudG9we1xuICAgIFxuICAgICAgICB0b3A6MTYlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5M2FiO1xuICAgICAgICBpb24tc2VnbWVudHtcbiAgIFxuICAgICAgICAgICBpb24tc2VnbWVudC1idXR0b257XG4gICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgICAgc2l6ZTogMTAwcHg7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgIFxuICAgICYuYm90dG9ue1xuICAgICAgICBib3R0b206IDE1JTtcbiAgICAgICBzcGFuIHtcbiAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgfVxuICAgIH1cbiAgIFxuICAgfVxuXG4uaXRlbnN7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBjb2xvcjogcmdiKDUsIDUsIDUpO1xufVxuXG4ucm9kYXBle1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYmFja2dyb3VkIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBcbiAgICB1bHtcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgLm15LW5hdiB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbiAgICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDI7XG59XG4uY29udGFpbmVyLnRvcCB7XG4gIHRvcDogMTYlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5M2FiO1xufVxuLmNvbnRhaW5lci50b3AgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jb250YWluZXIudG9wIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBzaXplOiAxMDBweDtcbn1cbi5jb250YWluZXIuYm90dG9uIHtcbiAgYm90dG9tOiAxNSU7XG59XG4uY29udGFpbmVyLmJvdHRvbiBzcGFuIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pdGVucyB7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6ICMwNTA1MDU7XG59XG5cbi5yb2RhcGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFja2dyb3VkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmJhY2tncm91ZCB1bCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uYmFja2dyb3VkIC5teS1uYXYge1xuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG59Il19 */"

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


var ObjetivosPage = /** @class */ (function () {
    function ObjetivosPage() {
    }
    ObjetivosPage.prototype.ngOnInit = function () {
    };
    ObjetivosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-objetivos',
            template: __webpack_require__(/*! raw-loader!./objetivos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/objetivos/objetivos.page.html"),
            styles: [__webpack_require__(/*! ./objetivos.page.scss */ "./src/app/pages/objetivos/objetivos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ObjetivosPage);
    return ObjetivosPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-objetivos-objetivos-module-es5.js.map