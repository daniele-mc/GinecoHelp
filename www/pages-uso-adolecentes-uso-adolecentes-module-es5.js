(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-uso-adolecentes-uso-adolecentes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/uso-adolecentes/uso-adolecentes.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/uso-adolecentes/uso-adolecentes.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"background ion-text-left\">\n    <div class=\"title ion-text-center\">Métodos contraceptivos</div>\n    <ion-list>\n\n      <div class=\"cabecalho\">\n        <ion-label class=\"titu ion-text-center\"><b>Método contraceptivo: DIU </b></ion-label>\n        <img src=\"../../../assets/icon/diu.png\">\n      </div>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Adolescente pode usar DIU?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>DIU provoca alguma infecção?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Perigoso engravidar na troca de anticoncepcional?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <br>\n    </ion-list>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/metodo-contraceptivo\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/uso-emergencia\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n  </div>\n  <ion-fab class=\"usar\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab class=\"infeccao\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab class=\"troca\">\n    <ion-fab-button (click)=\"presentAlert3()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/uso-adolecentes/uso-adolecentes-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/uso-adolecentes/uso-adolecentes-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: UsoAdolecentesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsoAdolecentesPageRoutingModule", function() { return UsoAdolecentesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _uso_adolecentes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uso-adolecentes.page */ "./src/app/pages/uso-adolecentes/uso-adolecentes.page.ts");




var routes = [
    {
        path: '',
        component: _uso_adolecentes_page__WEBPACK_IMPORTED_MODULE_3__["UsoAdolecentesPage"]
    }
];
var UsoAdolecentesPageRoutingModule = /** @class */ (function () {
    function UsoAdolecentesPageRoutingModule() {
    }
    UsoAdolecentesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UsoAdolecentesPageRoutingModule);
    return UsoAdolecentesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/uso-adolecentes/uso-adolecentes.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/uso-adolecentes/uso-adolecentes.module.ts ***!
  \*****************************************************************/
/*! exports provided: UsoAdolecentesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsoAdolecentesPageModule", function() { return UsoAdolecentesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _uso_adolecentes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uso-adolecentes-routing.module */ "./src/app/pages/uso-adolecentes/uso-adolecentes-routing.module.ts");
/* harmony import */ var _uso_adolecentes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uso-adolecentes.page */ "./src/app/pages/uso-adolecentes/uso-adolecentes.page.ts");







var UsoAdolecentesPageModule = /** @class */ (function () {
    function UsoAdolecentesPageModule() {
    }
    UsoAdolecentesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _uso_adolecentes_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsoAdolecentesPageRoutingModule"]
            ],
            declarations: [_uso_adolecentes_page__WEBPACK_IMPORTED_MODULE_6__["UsoAdolecentesPage"]]
        })
    ], UsoAdolecentesPageModule);
    return UsoAdolecentesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/uso-adolecentes/uso-adolecentes.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/uso-adolecentes/uso-adolecentes.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.background {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background-image: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  top: 1%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 4%;\n  border-radius: 25px;\n}\n.cabecalho {\n  text-align: center;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 25px;\n}\nion-list-header {\n  margin-left: 2%;\n}\nion-fab {\n  top: 10%;\n  margin-left: 70%;\n}\n.usar {\n  top: 23%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\n.infeccao {\n  top: 45%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\n.troca {\n  top: 67%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\nion-fab-button {\n  width: 80px;\n  height: 80px;\n}\n.boneca {\n  width: 70px;\n  height: 85px;\n}\nion-list-header {\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy91c28tYWRvbGVjZW50ZXMvdXNvLWFkb2xlY2VudGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNvLWFkb2xlY2VudGVzL3Vzby1hZG9sZWNlbnRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsdUZBQUE7QUFDUjtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QURDQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNFSjtBREFBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDR0o7QUREQTtFQUNJLGtCQUFBO0FDSUo7QURGQTtFQUNJLHdCQUFBO0FDS0o7QURIQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNNSjtBREpBO0VBQ0ksWUFBQTtBQ09KO0FESEE7RUFDSSxlQUFBO0FDTUo7QURIQTtFQUNJLFFBQUE7RUFDQSxnQkFBQTtBQ01KO0FESkE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ09KO0FETEE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ1FKO0FETkE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ1NKO0FEUEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1VKO0FEUkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1dKO0FEVEE7RUFDSSxlQUFBO0FDWUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c28tYWRvbGVjZW50ZXMvdXNvLWFkb2xlY2VudGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcbi5iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7IFxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxJTtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwOyBcbn1cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2I1ZjBmMDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogNCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5jYWJlY2FsaG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLXJhZGlve1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmltZ3tcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cblxuaW9uLWxpc3QtaGVhZGVye1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuaW9uLWZhYntcbiAgICB0b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlOyAgXG59XG4udXNhcntcbiAgICB0b3A6IDIzJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDglO1xuICAgIGhlaWdodDogODBweDtcbn1cbi5pbmZlY2Nhb3tcbiAgICB0b3A6IDQ1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDglO1xuICAgIGhlaWdodDogODBweDtcbn1cbi50cm9jYXtcbiAgICB0b3A6IDY3JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDglO1xuICAgIGhlaWdodDogODBweDtcbn1cbmlvbi1mYWItYnV0dG9ue1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbn1cbi5ib25lY2F7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA4NXB4O1xufVxuaW9uLWxpc3QtaGVhZGVye1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDElO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xuICBjb2xvcjogIzZkNGM4MDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjVmMGYwO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmNhYmVjYWxobyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG5pb24tZmFiIHtcbiAgdG9wOiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiA3MCU7XG59XG5cbi51c2FyIHtcbiAgdG9wOiAyMyU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDglO1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5pbmZlY2NhbyB7XG4gIHRvcDogNDUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4JTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4udHJvY2Ege1xuICB0b3A6IDY3JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOCU7XG4gIGhlaWdodDogODBweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uYm9uZWNhIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogODVweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/uso-adolecentes/uso-adolecentes.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/uso-adolecentes/uso-adolecentes.page.ts ***!
  \***************************************************************/
/*! exports provided: UsoAdolecentesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsoAdolecentesPage", function() { return UsoAdolecentesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var UsoAdolecentesPage = /** @class */ (function () {
    function UsoAdolecentesPage(AlertController) {
        this.AlertController = AlertController;
    }
    UsoAdolecentesPage.prototype.presentAlert1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'Adolescente pode usar DIU?',
                            message: 'O uso de DIU por adolescentes é um método muito seguro.',
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsoAdolecentesPage.prototype.presentAlert2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'DIU provoca alguma infecção?',
                            message: 'O DIU não provoca infecções. Estas são causados por relações sexuais desprotegidas.',
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsoAdolecentesPage.prototype.presentAlert3 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'Perigoso engravidar na troca de anticoncepcional?',
                            message: '',
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsoAdolecentesPage.prototype.ngOnInit = function () {
    };
    UsoAdolecentesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    UsoAdolecentesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uso-adolecentes',
            template: __webpack_require__(/*! raw-loader!./uso-adolecentes.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/uso-adolecentes/uso-adolecentes.page.html"),
            styles: [__webpack_require__(/*! ./uso-adolecentes.page.scss */ "./src/app/pages/uso-adolecentes/uso-adolecentes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], UsoAdolecentesPage);
    return UsoAdolecentesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-uso-adolecentes-uso-adolecentes-module-es5.js.map