(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sintomas-sintomas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sintomas/sintomas.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sintomas/sintomas.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <div class=\"title ion-text-center\">Ciclo menstrual</div>\n    <ion-list>\n      <br>\n      <div class=\"sintomas\">\n        <ion-radio-group>\n\n          <ion-list-header>\n            <div>\n              <div>\n                <img src=\"../../../assets/icon/sintomas.png\" style=\"float: left\">\n              </div>\n              <div class=\"text\">\n                <ion-label><b>Sintomas</b></ion-label>\n              </div>\n            </div>\n          </ion-list-header>\n\n          <div>\n            <div class=\"coluna1\">\n              <ion-item>\n                <ion-label>Tudo está bem</ion-label>\n                <ion-checkbox color=\" secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Acne</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Dor nas costas</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Dor muscular</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Cãibra</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Fadiga</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Insônia</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n            </div>\n\n            <div class=\"coluna2\">\n              <ion-item>\n                <ion-label>Seios sensíveis</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Inchaço</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Náusea</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Cólica intestinal</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Prisão de ventre</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Diarréia</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Calafrios</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n            </div>\n\n            <div class=\"ultimo-text\">\n              <ion-item>\n                <ion-label>Aumento de apetite</ion-label>\n                <ion-checkbox color=\"secondary\"></ion-checkbox>\n              </ion-item>\n            </div>\n          </div>\n\n        </ion-radio-group>\n      </div>\n\n      <br>\n    </ion-list>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/ciclo-menstrual-dois\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/ciclo-menstrual-tres\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sintomas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sintomas.page */ "./src/app/pages/sintomas/sintomas.page.ts");




var routes = [
    {
        path: '',
        component: _sintomas_page__WEBPACK_IMPORTED_MODULE_3__["SintomasPage"]
    }
];
var SintomasPageRoutingModule = /** @class */ (function () {
    function SintomasPageRoutingModule() {
    }
    SintomasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SintomasPageRoutingModule);
    return SintomasPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sintomas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sintomas-routing.module */ "./src/app/pages/sintomas/sintomas-routing.module.ts");
/* harmony import */ var _sintomas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sintomas.page */ "./src/app/pages/sintomas/sintomas.page.ts");







var SintomasPageModule = /** @class */ (function () {
    function SintomasPageModule() {
    }
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
    return SintomasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sintomas/sintomas.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/sintomas/sintomas.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  top: 1%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 7px;\n  margin-right: 7px;\n  margin-top: 4%;\n  border-radius: 25px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 33px;\n}\nion-list-header {\n  padding: 0px;\n}\n.text {\n  width: 100px;\n  margin-left: 10%;\n  margin-top: 4px;\n}\n.sintomas {\n  height: 460px;\n}\n.coluna1 {\n  width: 50%;\n  margin-left: 1px;\n  float: left;\n}\n.coluna2 {\n  width: 50%;\n  margin-left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zaW50b21hcy9zaW50b21hcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpbnRvbWFzL3NpbnRvbWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RkFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0dKO0FEREE7RUFDSSx3QkFBQTtBQ0lKO0FERkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FDS0o7QURGQTtFQUNJLFlBQUE7QUNLSjtBREhBO0VBQ0ksWUFBQTtBQ01KO0FESkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDT0o7QURKQTtFQUNJLGFBQUE7QUNPSjtBRExBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1FKO0FETkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpbnRvbWFzL3NpbnRvbWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcbi5iYWNrZ3JvdWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJhY2tncm91ZDogI2M4ZmZmZjsgXG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4udGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDElO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgY29sb3I6ICM2ZDRjODA7IFxufVxuaW9uLWxpc3R7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2I1ZjBmMDtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIG1hcmdpbi10b3A6IDQlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7ICBcbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgXG59XG5pbWd7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuaW9uLWxpc3QtaGVhZGVye1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi50ZXh0e1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnNpbnRvbWFze1xuICAgIGhlaWdodDogNDYwcHg7XG59XG4uY29sdW5hMXtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uY29sdW5hMntcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7ICAgIFxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuLmJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDElO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xuICBjb2xvcjogIzZkNGM4MDtcbn1cblxuaW9uLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMzNweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udGV4dCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uc2ludG9tYXMge1xuICBoZWlnaHQ6IDQ2MHB4O1xufVxuXG4uY29sdW5hMSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29sdW5hMiB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SintomasPage = /** @class */ (function () {
    function SintomasPage() {
    }
    SintomasPage.prototype.ngOnInit = function () {
    };
    SintomasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sintomas',
            template: __webpack_require__(/*! raw-loader!./sintomas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sintomas/sintomas.page.html"),
            styles: [__webpack_require__(/*! ./sintomas.page.scss */ "./src/app/pages/sintomas/sintomas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SintomasPage);
    return SintomasPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sintomas-sintomas-module-es5.js.map