(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sintomas-sintomas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sintomas/sintomas.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sintomas/sintomas.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n\n    <ion-list>\n      <br>\n      <div class=\"sintomas\">\n        <ion-radio-group>\n\n          <ion-list-header>\n            <div>\n              <div>\n                <img src=\"../../../assets/icon/sintomas.png\" style=\"float: left\">\n              </div>\n              <div class=\"text\">\n                <ion-label><b>Sintomas</b></ion-label>\n              </div>\n            </div>\n          </ion-list-header>\n\n          <div>\n            <div class=\"coluna1\">\n              <ion-item>\n                <ion-label>Tudo está bem</ion-label>\n                <ion-checkbox color=\" secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Acne</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Dor nas costas</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Dor muscular</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Cãibra</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Fadiga</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Insônia</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n            </div>\n\n            <div class=\"coluna2\">\n              <ion-item>\n                <ion-label>Seios sensíveis</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Inchaço</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Náusea</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Cólica intestinal</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Prisão de ventre</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Diarréia</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Calafrios</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n            </div>\n\n            <div class=\"ultimo-text\">\n              <ion-item>\n                <ion-label>Aumento de apetite</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n            </div>\n          </div>\n\n        </ion-radio-group>\n      </div>\n\n      <br>\n    </ion-list>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/ciclo-menstrual-dois\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/ciclo-menstrual-tres\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/sintomas/sintomas-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/sintomas/sintomas-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SintomasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SintomasPageRoutingModule", function() { return SintomasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sintomas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sintomas.page */ "./src/app/pages/sintomas/sintomas.page.ts");




const routes = [
    {
        path: '',
        component: _sintomas_page__WEBPACK_IMPORTED_MODULE_3__["SintomasPage"]
    }
];
let SintomasPageRoutingModule = class SintomasPageRoutingModule {
};
SintomasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SintomasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/sintomas/sintomas.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/sintomas/sintomas.module.ts ***!
  \***************************************************/
/*! exports provided: SintomasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SintomasPageModule", function() { return SintomasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sintomas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sintomas-routing.module */ "./src/app/pages/sintomas/sintomas-routing.module.ts");
/* harmony import */ var _sintomas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sintomas.page */ "./src/app/pages/sintomas/sintomas.page.ts");







let SintomasPageModule = class SintomasPageModule {
};
SintomasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sintomas_routing_module__WEBPACK_IMPORTED_MODULE_5__["SintomasPageRoutingModule"]
        ],
        declarations: [_sintomas_page__WEBPACK_IMPORTED_MODULE_6__["SintomasPage"]]
    })
], SintomasPageModule);



/***/ }),

/***/ "./src/app/pages/sintomas/sintomas.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/sintomas/sintomas.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('clico.png');\n  background-size: 100% 100%;\n  width: 100%;\n}\n\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 80px;\n  border-radius: 25px;\n}\n\nion-radio {\n  --color-checked: #ff6c92;\n}\n\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\n\nimg {\n  height: 33px;\n}\n\nion-list-header {\n  margin-left: 2%;\n  padding: 0px;\n}\n\n.text {\n  width: 100px;\n  margin-left: 10%;\n  margin-top: 4px;\n}\n\n.sintomas {\n  height: 460px;\n}\n\n.coluna1 {\n  width: 50%;\n  margin-left: 1px;\n  float: left;\n}\n\n.coluna2 {\n  width: 50%;\n  margin-left: 50%;\n}\n\n.rodape {\n  margin-top: 5px;\n  margin-bottom: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zaW50b21hcy9zaW50b21hcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpbnRvbWFzL3NpbnRvbWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLHdCQUFBO0FDR0o7O0FEREE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ09KOztBREpBO0VBQ0ksYUFBQTtBQ09KOztBRExBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1FKOztBRE5BO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDU0o7O0FEUEE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpbnRvbWFzL3NpbnRvbWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJhY2tncm91ZDogI2M4ZmZmZjsgXG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2NsaWNvLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiNWYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pbWd7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuaW9uLWxpc3QtaGVhZGVye1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4udGV4dHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5zaW50b21hc3tcbiAgICBoZWlnaHQ6IDQ2MHB4O1xufVxuLmNvbHVuYTF7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmNvbHVuYTJ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogNTAlOyAgICBcbn1cbi5yb2RhcGV7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XG59IiwiLmJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvY2xpY28ucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDMzcHg7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udGV4dCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uc2ludG9tYXMge1xuICBoZWlnaHQ6IDQ2MHB4O1xufVxuXG4uY29sdW5hMSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29sdW5hMiB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbi5yb2RhcGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDU1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/sintomas/sintomas.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sintomas/sintomas.page.ts ***!
  \*************************************************/
/*! exports provided: SintomasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SintomasPage", function() { return SintomasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SintomasPage = class SintomasPage {
    constructor() { }
    ngOnInit() {
    }
};
SintomasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sintomas',
        template: __webpack_require__(/*! raw-loader!./sintomas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sintomas/sintomas.page.html"),
        styles: [__webpack_require__(/*! ./sintomas.page.scss */ "./src/app/pages/sintomas/sintomas.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SintomasPage);



/***/ })

}]);
//# sourceMappingURL=pages-sintomas-sintomas-module-es2015.js.map