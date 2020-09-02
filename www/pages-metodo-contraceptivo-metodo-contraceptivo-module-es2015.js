(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-metodo-contraceptivo-metodo-contraceptivo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/metodo-contraceptivo/metodo-contraceptivo.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"background ion-text-center\">\n    <div class=\"title ion-text-center\">Métodos contraceptivos</div>\n    <ion-list>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Usa método contraceptivo?</b></ion-label>\n        </ion-list-header>\n\n        <div class=\"coluna1\">\n          <ion-item>\n            <ion-label>Sim</ion-label>\n            <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n          </ion-item>\n        </div>\n\n        <div class=\"coluna2\">\n          <ion-item>\n            <ion-label>Não</ion-label>\n            <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n          </ion-item>\n        </div>\n      </ion-radio-group>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Se sim, qual tipo usa?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/pilula.png\">\n          <ion-label> Anticoncepcional pílula</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/injetavel.png\">\n          <ion-label>Anticoncepcional injetável</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/camisinha.png\">\n          <img src=\"../../../assets/icon/camisinha-feminina.png\">\n          <ion-label> Camisinha - masc/fem</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/coito.png\">\n          <ion-label>Coito interrompido</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/laqueadura.png\">\n          <ion-label>Laqueadura</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n\n        <ion-item>\n          <img src=\"../../../assets/icon/adesivo.png\">\n          <ion-label>Adesivo</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/tabelinha.png\">\n          <ion-label>Tabelinha</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/diu.png\">\n          <ion-label>D.I.U </ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/outros.png\">\n          <ion-label>Outros</ion-label>\n          <ion-checkbox color=\"secondary\"></ion-checkbox>\n        </ion-item>\n\n\n      </ion-radio-group>\n      <br>\n\n    </ion-list>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/ciclo-menstrual-tres\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/uso-adolecentes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.background {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background-image: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  top: 1%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 2%;\n  border-radius: 25px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n  height: 42px;\n}\nimg {\n  height: 33px;\n}\nion-list-header {\n  margin-left: 2%;\n  min-height: 29px;\n}\nion-fab {\n  margin-left: 14%;\n}\n.coluna1 {\n  width: 50%;\n  margin-left: 1px;\n  float: left;\n}\n.coluna2 {\n  width: 50%;\n  margin-left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9tZXRvZG8tY29udHJhY2VwdGl2by9tZXRvZG8tY29udHJhY2VwdGl2by5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21ldG9kby1jb250cmFjZXB0aXZvL21ldG9kby1jb250cmFjZXB0aXZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RkFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNHSjtBREFBO0VBQ0ksd0JBQUE7QUNHSjtBRERBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNJSjtBREZBO0VBQ0ksWUFBQTtBQ0tKO0FESEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNNSjtBREhBO0VBQ0ksZ0JBQUE7QUNNSjtBREpBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ09KO0FETEE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21ldG9kby1jb250cmFjZXB0aXZvL21ldG9kby1jb250cmFjZXB0aXZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcbi5iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7IFxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxJTtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwOyBcbn1cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2I1ZjBmMDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcblxufVxuaW9uLXJhZGlve1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDQycHg7XG59XG5pbWd7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuaW9uLWxpc3QtaGVhZGVye1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBtaW4taGVpZ2h0OiAyOXB4O1xufVxuXG5pb24tZmFie1xuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XG59XG4uY29sdW5hMXtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uY29sdW5hMntcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7ICAgIFxufVxuXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91ZDogI2M4ZmZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMSU7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNmQ0YzgwO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiA0MnB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDMzcHg7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWluLWhlaWdodDogMjlweDtcbn1cblxuaW9uLWZhYiB7XG4gIG1hcmdpbi1sZWZ0OiAxNCU7XG59XG5cbi5jb2x1bmExIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb2x1bmEyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn0iXX0= */"

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