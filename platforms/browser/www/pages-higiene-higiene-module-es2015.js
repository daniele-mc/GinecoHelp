(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-higiene-higiene-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/higiene/higiene.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/higiene/higiene.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <ion-list>\n      <br>\n      <ion-label class=\"titu ion-text-center\"><b>Higiene Íntima</b></ion-label>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><img src=\"../../../assets/icon/ducha.png\"><b> Usa ducha vaginal/higiênica?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <ion-item>\n        <ion-label>Devo usar? </ion-label>\n      </ion-item>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><img src=\"../../../assets/icon/protetor.png\"><b> Usa protetor diário?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <ion-item>\n        <ion-label>Devo usar?</ion-label>\n      </ion-item>\n      <br>\n    </ion-list>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/saude-vaginal-dois\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b></ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b></ion-button>\n      <ion-button color=\"primary\" href=\"/higiene-dois\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b></ion-button>\n    </div>\n  </div>\n\n  <ion-fab class=\"ducha-higienica\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab class=\"protetor-diario\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/higiene/higiene-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/higiene/higiene-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HigienePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigienePageRoutingModule", function() { return HigienePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _higiene_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./higiene.page */ "./src/app/pages/higiene/higiene.page.ts");




const routes = [
    {
        path: '',
        component: _higiene_page__WEBPACK_IMPORTED_MODULE_3__["HigienePage"]
    }
];
let HigienePageRoutingModule = class HigienePageRoutingModule {
};
HigienePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HigienePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/higiene/higiene.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/higiene/higiene.module.ts ***!
  \*************************************************/
/*! exports provided: HigienePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigienePageModule", function() { return HigienePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _higiene_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./higiene-routing.module */ "./src/app/pages/higiene/higiene-routing.module.ts");
/* harmony import */ var _higiene_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./higiene.page */ "./src/app/pages/higiene/higiene.page.ts");







let HigienePageModule = class HigienePageModule {
};
HigienePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _higiene_routing_module__WEBPACK_IMPORTED_MODULE_5__["HigienePageRoutingModule"]
        ],
        declarations: [_higiene_page__WEBPACK_IMPORTED_MODULE_6__["HigienePage"]]
    })
], HigienePageModule);



/***/ }),

/***/ "./src/app/pages/higiene/higiene.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/higiene/higiene.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('saude.jpeg');\n  background-size: 100% 100%;\n  width: 100%;\n}\n\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 100px;\n  border-radius: 25px;\n}\n\nion-radio {\n  --color-checked: #ff6c92;\n}\n\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\n\nimg {\n  height: 33px;\n}\n\n.ducha-higienica {\n  position: absolute;\n  top: 42%;\n  margin-left: 75%;\n}\n\n.protetor-diario {\n  position: absolute;\n  top: 72%;\n  margin-left: 75%;\n}\n\nion-fab-button {\n  width: 85px;\n  height: 85px;\n}\n\nion-list-header {\n  margin-left: 2%;\n}\n\n.rodape {\n  margin-top: 5px;\n  margin-bottom: 55px;\n}\n\n.boneca {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9oaWdpZW5lL2hpZ2llbmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oaWdpZW5lL2hpZ2llbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksd0JBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7QUNJSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7QUNNSjs7QURIQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ01KOztBREpBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpZ2llbmUvaGlnaWVuZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7IFxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zYXVkZS5qcGVnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWxpc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYjVmMGYwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuaW9uLXJhZGlve1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmltZ3tcbiAgICBoZWlnaHQ6IDMzcHg7XG59XG4vL2JvdMOjbyBib25lY2Fcbi5kdWNoYS1oaWdpZW5pY2F7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDIlO1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG4ucHJvdGV0b3ItZGlhcmlve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDcyJTtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xufVxuLy90YW1hbmhvIGRvIGJvdMOjbyBib25lY2Fcbmlvbi1mYWItYnV0dG9ue1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIGhlaWdodDogODVweDtcbn1cbmlvbi1saXN0LWhlYWRlcntcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5yb2RhcGV7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XG59XG4uYm9uZWNhe1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4XG59XG5cbiIsIi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VkOiAjYzhmZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3NhdWRlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZjBmMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDMzcHg7XG59XG5cbi5kdWNoYS1oaWdpZW5pY2Ege1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDIlO1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG4ucHJvdGV0b3ItZGlhcmlvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcyJTtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogODVweDtcbiAgaGVpZ2h0OiA4NXB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5yb2RhcGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDU1cHg7XG59XG5cbi5ib25lY2Ege1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/higiene/higiene.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/higiene/higiene.page.ts ***!
  \***********************************************/
/*! exports provided: HigienePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigienePage", function() { return HigienePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let HigienePage = class HigienePage {
    constructor(AlertController) {
        this.AlertController = AlertController;
    }
    presentAlert1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.AlertController.create({
                header: 'Ducha vaginal/higiênica',
                message: 'Artigos científicos mostram que não se deve usar ducha vaginal diretamente na vagina porque muda a flora vaginal e aumenta o risco de infecções.',
                buttons: ['Ok']
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    presentAlert2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.AlertController.create({
                header: 'Protetor diário',
                message: 'Estudos ginecológicos mostram que usar protetor diário constantemente aquece e altera a pele, predispondo a infecções genitais.',
                buttons: ['Ok']
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    ngOnInit() {
    }
};
HigienePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
HigienePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-higiene',
        template: __webpack_require__(/*! raw-loader!./higiene.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/higiene/higiene.page.html"),
        styles: [__webpack_require__(/*! ./higiene.page.scss */ "./src/app/pages/higiene/higiene.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], HigienePage);



/***/ })

}]);
//# sourceMappingURL=pages-higiene-higiene-module-es2015.js.map