(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-higiene-dois-higiene-dois-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/higiene-dois/higiene-dois.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/higiene-dois/higiene-dois.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <ion-list>\n      <br>\n      <ion-label class=\"titu ion-text-center\"><b>Higiene Íntima</b></ion-label>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label>\n            <div>\n              <div>\n                <img src=\"../../../assets/icon/calcinha.png\" style=\"float: left\">\n              </div>\n              <div class=\"text\">\n                <b>Dorme com calcinha?</b>\n              </div>\n            </div>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <ion-item>\n        <ion-label>Devo usar?</ion-label>\n      </ion-item>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label>\n            <div>\n              <div>\n                <img src=\"../../../assets/icon/absorvente.png\" style=\"float: left\">\n              </div>\n              <div class=\"text\">\n                <b>Usa absorvente interno?</b>\n              </div>\n            </div>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <ion-item>\n        <ion-label>Devo usar?</ion-label>\n      </ion-item>\n      <br>\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/higiene\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b></ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b></ion-button>\n      <ion-button color=\"primary\" href=\"/higiene-tres\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b></ion-button>\n    </div>\n  </div>\n  <ion-fab class=\"calcinha\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab class=\"absorvente\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/higiene-dois/higiene-dois-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/higiene-dois/higiene-dois-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: HigieneDoisPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigieneDoisPageRoutingModule", function() { return HigieneDoisPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _higiene_dois_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./higiene-dois.page */ "./src/app/pages/higiene-dois/higiene-dois.page.ts");




const routes = [
    {
        path: '',
        component: _higiene_dois_page__WEBPACK_IMPORTED_MODULE_3__["HigieneDoisPage"]
    }
];
let HigieneDoisPageRoutingModule = class HigieneDoisPageRoutingModule {
};
HigieneDoisPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HigieneDoisPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/higiene-dois/higiene-dois.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/higiene-dois/higiene-dois.module.ts ***!
  \***********************************************************/
/*! exports provided: HigieneDoisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigieneDoisPageModule", function() { return HigieneDoisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _higiene_dois_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./higiene-dois-routing.module */ "./src/app/pages/higiene-dois/higiene-dois-routing.module.ts");
/* harmony import */ var _higiene_dois_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./higiene-dois.page */ "./src/app/pages/higiene-dois/higiene-dois.page.ts");







let HigieneDoisPageModule = class HigieneDoisPageModule {
};
HigieneDoisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _higiene_dois_routing_module__WEBPACK_IMPORTED_MODULE_5__["HigieneDoisPageRoutingModule"]
        ],
        declarations: [_higiene_dois_page__WEBPACK_IMPORTED_MODULE_6__["HigieneDoisPage"]]
    })
], HigieneDoisPageModule);



/***/ }),

/***/ "./src/app/pages/higiene-dois/higiene-dois.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/higiene-dois/higiene-dois.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('saude.jpeg');\n  background-size: 100% 100%;\n  width: 100%;\n}\n\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 100px;\n  border-radius: 25px;\n}\n\nion-radio {\n  --color-checked: #ff6c92;\n}\n\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\n\nimg {\n  height: 33px;\n  display: inline-block;\n}\n\n.calcinha {\n  position: absolute;\n  top: 42%;\n  margin-left: 75%;\n}\n\n.absorvente {\n  position: absolute;\n  top: 72%;\n  margin-left: 75%;\n}\n\nion-fab-button {\n  width: 85px;\n  height: 85px;\n}\n\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n\n.text {\n  width: 200px;\n  margin-left: 2px;\n  margin-top: 2px;\n}\n\nion-list-header {\n  margin-left: 2%;\n}\n\n.rodape {\n  margin-top: 5px;\n  margin-bottom: 55px;\n}\n\n.boneca {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9oaWdpZW5lLWRvaXMvaGlnaWVuZS1kb2lzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGlnaWVuZS1kb2lzL2hpZ2llbmUtZG9pcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSx3QkFBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FDSUo7O0FEREE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtBQ1FKOztBRExBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDUUo7O0FETkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlnaWVuZS1kb2lzL2hpZ2llbmUtZG9pcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7IFxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zYXVkZS5qcGVnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWxpc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYjVmMGYwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuaW9uLXJhZGlve1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmltZ3tcbiAgICBoZWlnaHQ6IDMzcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLy9ib3TDo28gYm9uZWNhXG4uY2FsY2luaGF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDIlO1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG4uYWJzb3J2ZW50ZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3MiU7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cbi8vdGFtYW5obyBkbyBib3TDo28gYm9uZWNhXG5pb24tZmFiLWJ1dHRvbntcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6IDg1cHg7XG59XG5pb24tZmFie1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDU1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbn1cbi50ZXh0e1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cbmlvbi1saXN0LWhlYWRlcntcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5yb2RhcGV7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XG59XG4uYm9uZWNhe1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4XG59XG4iLCIuYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91ZDogI2M4ZmZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zYXVkZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAzM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jYWxjaW5oYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MiU7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5hYnNvcnZlbnRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcyJTtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogODVweDtcbiAgaGVpZ2h0OiA4NXB4O1xufVxuXG5pb24tZmFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDU1cHg7XG4gIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG5cbi50ZXh0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLnJvZGFwZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTVweDtcbn1cblxuLmJvbmVjYSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/higiene-dois/higiene-dois.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/higiene-dois/higiene-dois.page.ts ***!
  \*********************************************************/
/*! exports provided: HigieneDoisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigieneDoisPage", function() { return HigieneDoisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let HigieneDoisPage = class HigieneDoisPage {
    constructor(AlertController) {
        this.AlertController = AlertController;
    }
    presentAlert1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.AlertController.create({
                header: 'Calcinha',
                message: 'O principal benefício de dispensar a calcinha na hora de dormir é arejar a região genital minimizando o surgimento de infecções vaginais.',
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
                header: 'Absorvente interno',
                message: 'Usar absorvente interno geralmente não faz mal à saúde, desde que a mulher troque o absorvente com regularidade (de preferência a cada 4 horas), não durma com ele e lave bem as mãos sempre antes da troca.',
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
HigieneDoisPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
HigieneDoisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-higiene-dois',
        template: __webpack_require__(/*! raw-loader!./higiene-dois.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/higiene-dois/higiene-dois.page.html"),
        styles: [__webpack_require__(/*! ./higiene-dois.page.scss */ "./src/app/pages/higiene-dois/higiene-dois.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], HigieneDoisPage);



/***/ })

}]);
//# sourceMappingURL=pages-higiene-dois-higiene-dois-module-es2015.js.map