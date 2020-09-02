(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-uso-contracep-uso-contracep-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/uso-contracep/uso-contracep.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/uso-contracep/uso-contracep.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"background ion-text-left\">\n    <ion-list>\n      <br>\n\n      <ion-list-header>\n        <ion-label><b>Contraceptive use</b></ion-label>\n      </ion-list-header>\n      <br><br><br>\n      <ion-item>\n\n\n\n      </ion-item>\n      <ion-list-header>\n        <ion-label><b>Dangerous to get pregnant in exchange for contraceptives?</b></ion-label>\n      </ion-list-header>\n\n      <ion-radio-group>\n\n        <ion-item>\n          <ion-label>Yes</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>No</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n      </ion-radio-group>\n      <br>\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/uso-adolecentes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>next</b></ion-button>\n      <ion-fab>\n        <ion-fab-button>\n          <img src=\"../../../assets/icon/dica.png\">\n        </ion-fab-button>\n      </ion-fab>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/uso-contracep/uso-contracep-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/uso-contracep/uso-contracep-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UsoContracepPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsoContracepPageRoutingModule", function() { return UsoContracepPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _uso_contracep_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uso-contracep.page */ "./src/app/pages/uso-contracep/uso-contracep.page.ts");




var routes = [
    {
        path: '',
        component: _uso_contracep_page__WEBPACK_IMPORTED_MODULE_3__["UsoContracepPage"]
    }
];
var UsoContracepPageRoutingModule = /** @class */ (function () {
    function UsoContracepPageRoutingModule() {
    }
    UsoContracepPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UsoContracepPageRoutingModule);
    return UsoContracepPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/uso-contracep/uso-contracep.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/uso-contracep/uso-contracep.module.ts ***!
  \*************************************************************/
/*! exports provided: UsoContracepPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsoContracepPageModule", function() { return UsoContracepPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _uso_contracep_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uso-contracep-routing.module */ "./src/app/pages/uso-contracep/uso-contracep-routing.module.ts");
/* harmony import */ var _uso_contracep_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uso-contracep.page */ "./src/app/pages/uso-contracep/uso-contracep.page.ts");







var UsoContracepPageModule = /** @class */ (function () {
    function UsoContracepPageModule() {
    }
    UsoContracepPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _uso_contracep_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsoContracepPageRoutingModule"]
            ],
            declarations: [_uso_contracep_page__WEBPACK_IMPORTED_MODULE_6__["UsoContracepPage"]]
        })
    ], UsoContracepPageModule);
    return UsoContracepPageModule;
}());



/***/ }),

/***/ "./src/app/pages/uso-contracep/uso-contracep.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/uso-contracep/uso-contracep.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.background {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background-image: url('metodo.jpg');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 120px;\n  border-radius: 25px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 25px;\n}\nion-list-header {\n  margin-left: 2%;\n}\nion-fab {\n  margin-left: 14%;\n}\n.rodape {\n  position: static;\n  height: 110px;\n  width: 100%;\n}\n.link {\n  color: #4a1c75;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy91c28tY29udHJhY2VwL3Vzby1jb250cmFjZXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c28tY29udHJhY2VwL3Vzby1jb250cmFjZXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVGQUFBO0FBQ1I7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDQTtFQUNJLHdCQUFBO0FDRUo7QURBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNHSjtBRERBO0VBQ0ksWUFBQTtBQ0lKO0FEQUE7RUFDSSxlQUFBO0FDR0o7QURBQTtFQUNJLGdCQUFBO0FDR0o7QURBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNHSjtBREFBO0VBQ0csY0FBQTtBQ0dIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNvLWNvbnRyYWNlcC91c28tY29udHJhY2VwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcbi5iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7IFxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9tZXRvZG8uanBnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2I1ZjBmMDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pbWd7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG5cbmlvbi1saXN0LWhlYWRlcntcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbmlvbi1mYWJ7XG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcbn1cblxuLnJvZGFwZXtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5saW5re1xuICAgY29sb3I6ICM0YTFjNzU7XG4gICBcbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VkOiAjYzhmZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL21ldG9kby5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjVmMGYwO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG5pb24tZmFiIHtcbiAgbWFyZ2luLWxlZnQ6IDE0JTtcbn1cblxuLnJvZGFwZSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGhlaWdodDogMTEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGluayB7XG4gIGNvbG9yOiAjNGExYzc1O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/uso-contracep/uso-contracep.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/uso-contracep/uso-contracep.page.ts ***!
  \***********************************************************/
/*! exports provided: UsoContracepPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsoContracepPage", function() { return UsoContracepPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsoContracepPage = /** @class */ (function () {
    function UsoContracepPage() {
    }
    UsoContracepPage.prototype.ngOnInit = function () {
    };
    UsoContracepPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uso-contracep',
            template: __webpack_require__(/*! raw-loader!./uso-contracep.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/uso-contracep/uso-contracep.page.html"),
            styles: [__webpack_require__(/*! ./uso-contracep.page.scss */ "./src/app/pages/uso-contracep/uso-contracep.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsoContracepPage);
    return UsoContracepPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-uso-contracep-uso-contracep-module-es5.js.map