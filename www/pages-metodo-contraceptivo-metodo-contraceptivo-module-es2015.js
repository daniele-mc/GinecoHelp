(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-metodo-contraceptivo-metodo-contraceptivo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"background ion-text-center\">\n    <ion-list>\n      <br>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Usa método contraceptivo?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Se sim, qual tipo usa?</b></ion-label>\n        </ion-list-header>\n        <ion-item>\n          <img src=\"../../../assets/icon/pilula.png\">\n          <ion-label> Anticoncepcional pílula</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <img src=\"../../../assets/icon/injetavel.png\">\n          <ion-label>Anticoncepcional injetável</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <img src=\"../../../assets/icon/adesivo.png\">\n          <ion-label>Adesivo</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <img src=\"../../../assets/icon/tabelinha.png\">\n          <ion-label>Tabelinha</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <img src=\"../../../assets/icon/coito.png\">\n          <ion-label>Coito interrompido</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <img src=\"../../../assets/icon/camisinha.png\">\n          <ion-label>Camisinha - masculina/feminina</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <img src=\"../../../assets/icon/diu.png\">\n          <ion-label>D.I.U </ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <img src=\"../../../assets/icon/laqueadura.png\">\n          <ion-label>Laqueadura</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <img src=\"../../../assets/icon/outros.png\">\n          <ion-label>Outros</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n      </ion-radio-group>\n      <br>\n\n    </ion-list>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/ciclo-menstrual-tres\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/uso-adolecentes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/metodo-contraceptivo/metodo-contraceptivo-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MetodoContraceptivoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoContraceptivoPageRoutingModule", function() { return MetodoContraceptivoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _metodo_contraceptivo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metodo-contraceptivo.page */ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.ts");




const routes = [
    {
        path: '',
        component: _metodo_contraceptivo_page__WEBPACK_IMPORTED_MODULE_3__["MetodoContraceptivoPage"]
    }
];
let MetodoContraceptivoPageRoutingModule = class MetodoContraceptivoPageRoutingModule {
};
MetodoContraceptivoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MetodoContraceptivoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.module.ts ***!
  \***************************************************************************/
/*! exports provided: MetodoContraceptivoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoContraceptivoPageModule", function() { return MetodoContraceptivoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _metodo_contraceptivo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metodo-contraceptivo-routing.module */ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo-routing.module.ts");
/* harmony import */ var _metodo_contraceptivo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metodo-contraceptivo.page */ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.ts");







let MetodoContraceptivoPageModule = class MetodoContraceptivoPageModule {
};
MetodoContraceptivoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _metodo_contraceptivo_routing_module__WEBPACK_IMPORTED_MODULE_5__["MetodoContraceptivoPageRoutingModule"]
        ],
        declarations: [_metodo_contraceptivo_page__WEBPACK_IMPORTED_MODULE_6__["MetodoContraceptivoPage"]]
    })
], MetodoContraceptivoPageModule);



/***/ }),

/***/ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background-image: url('metodo.jpg');\n  background-size: 100% 100%;\n  width: 100%;\n}\n\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 120px;\n  border-radius: 25px;\n}\n\nion-radio {\n  --color-checked: #ff6c92;\n}\n\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\n\nimg {\n  height: 33px;\n}\n\nion-list-header {\n  margin-left: 2%;\n}\n\nion-fab {\n  margin-left: 14%;\n}\n\n.rodape {\n  margin-top: 5px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9tZXRvZG8tY29udHJhY2VwdGl2by9tZXRvZG8tY29udHJhY2VwdGl2by5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21ldG9kby1jb250cmFjZXB0aXZvL21ldG9kby1jb250cmFjZXB0aXZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLHdCQUFBO0FDRUo7O0FEQUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0FDSUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBREFBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZXRvZG8tY29udHJhY2VwdGl2by9tZXRvZG8tY29udHJhY2VwdGl2by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYmFja2dyb3VkOiAjYzhmZmZmOyBcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvbWV0b2RvLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2I1ZjBmMDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pbWd7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuXG5cbmlvbi1saXN0LWhlYWRlcntcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbmlvbi1mYWJ7XG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcbn1cblxuLnJvZGFwZXtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiIsIi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91ZDogI2M4ZmZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9tZXRvZG8uanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbmlvbi1mYWIge1xuICBtYXJnaW4tbGVmdDogMTQlO1xufVxuXG4ucm9kYXBlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.ts ***!
  \*************************************************************************/
/*! exports provided: MetodoContraceptivoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoContraceptivoPage", function() { return MetodoContraceptivoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MetodoContraceptivoPage = class MetodoContraceptivoPage {
    constructor() { }
    ngOnInit() {
    }
};
MetodoContraceptivoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-metodo-contraceptivo',
        template: __webpack_require__(/*! raw-loader!./metodo-contraceptivo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.html"),
        styles: [__webpack_require__(/*! ./metodo-contraceptivo.page.scss */ "./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MetodoContraceptivoPage);



/***/ })

}]);
//# sourceMappingURL=pages-metodo-contraceptivo-metodo-contraceptivo-module-es2015.js.map