(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sexo-sexo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sexo/sexo.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sexo/sexo.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"background ion-text-left\">\n    <ion-list>\n      <br>\n      <div class=\"cabecalho\">\n        <img src=\"../../../assets/icon/sexo.png\">\n        <ion-label class=\"titu ion-text-center\"><b> Sexo</b></ion-label>\n      </div>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Existe idade ideal para a menina começar a fazer sexo?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Se sim, qual:</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Antes dos 12 anos</ion-label>\n          <ion-radio slot=\"start\" value=\"12anos\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Entre 12 e 17 anos</ion-label>\n          <ion-radio slot=\"start\" value=\"12-17anos\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Após aos 18 anos</ion-label>\n          <ion-radio slot=\"start\" value=\"18anos\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Qualquer idade</ion-label>\n          <ion-radio slot=\"start\" value=\"qualquer\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Pode usar o mesmo preservativo no sexo vaginal e anal?</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Às vezes</ion-label>\n          <ion-radio slot=\"start\" value=\"as-vezes\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/uso-emergencia\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" href=\"/saude-relacoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n  </div>\n\n  <ion-fab class=\"idade\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab class=\"preservativo\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/sexo/sexo-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/sexo/sexo-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SexoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexoPageRoutingModule", function() { return SexoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sexo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sexo.page */ "./src/app/pages/sexo/sexo.page.ts");




const routes = [
    {
        path: '',
        component: _sexo_page__WEBPACK_IMPORTED_MODULE_3__["SexoPage"]
    }
];
let SexoPageRoutingModule = class SexoPageRoutingModule {
};
SexoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SexoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/sexo/sexo.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/sexo/sexo.module.ts ***!
  \*******************************************/
/*! exports provided: SexoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexoPageModule", function() { return SexoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sexo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sexo-routing.module */ "./src/app/pages/sexo/sexo-routing.module.ts");
/* harmony import */ var _sexo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sexo.page */ "./src/app/pages/sexo/sexo.page.ts");







let SexoPageModule = class SexoPageModule {
};
SexoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sexo_routing_module__WEBPACK_IMPORTED_MODULE_5__["SexoPageRoutingModule"]
        ],
        declarations: [_sexo_page__WEBPACK_IMPORTED_MODULE_6__["SexoPage"]]
    })
], SexoPageModule);



/***/ }),

/***/ "./src/app/pages/sexo/sexo.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/sexo/sexo.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background-image: url('sexo.jpg');\n  background-size: 100% 100%;\n  width: 100%;\n}\n\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 120px;\n  border-radius: 25px;\n}\n\n.cabecalho {\n  text-align: center;\n}\n\nion-radio {\n  --color-checked: #ff6c92;\n}\n\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\n\nimg {\n  height: 25px;\n}\n\nion-list-header {\n  margin-left: 2%;\n}\n\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n\n.idade {\n  position: absolute;\n  top: 37%;\n  margin-left: 75%;\n}\n\n.preservativo {\n  position: absolute;\n  top: 97%;\n  margin-left: 75%;\n}\n\nion-fab-button {\n  width: 85px;\n  height: 85px;\n}\n\n.rodape {\n  margin-top: 5px;\n  margin-bottom: 55px;\n}\n\n.boneca {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zZXhvL3NleG8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXhvL3NleG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUNJLHdCQUFBO0FDR0o7O0FEREE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0FDS0o7O0FERkE7RUFDSSxlQUFBO0FDS0o7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0tKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDS0o7O0FEREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V4by9zZXhvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7IFxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zZXhvLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2I1ZjBmMDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5jYWJlY2FsaG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLXJhZGlve1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmltZ3tcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbmlvbi1saXN0LWhlYWRlcntcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbmlvbi1mYWJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTVweDtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xufVxuLy9ib3TDo28gYm9uZWNhXG5cbi5pZGFkZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNyU7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cbi5wcmVzZXJ2YXRpdm97XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOTclO1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi8vdGFtYW5obyBkbyBib3TDo28gYm9uZWNhXG5pb24tZmFiLWJ1dHRvbntcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6IDg1cHg7XG59XG4ucm9kYXBle1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xufVxuLmJvbmVjYXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweFxufSIsIi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91ZDogI2M4ZmZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zZXhvLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjVmMGYwO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmNhYmVjYWxobyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG5pb24tZmFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDU1cHg7XG4gIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG5cbi5pZGFkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNyU7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5wcmVzZXJ2YXRpdm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTclO1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA4NXB4O1xuICBoZWlnaHQ6IDg1cHg7XG59XG5cbi5yb2RhcGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDU1cHg7XG59XG5cbi5ib25lY2Ege1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/sexo/sexo.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/sexo/sexo.page.ts ***!
  \*****************************************/
/*! exports provided: SexoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexoPage", function() { return SexoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let SexoPage = class SexoPage {
    constructor(AlertController) {
        this.AlertController = AlertController;
    }
    presentAlert1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.AlertController.create({
                header: 'Existe idade ideal para a menina começar a fazer sexo?',
                message: 'A menina deveria esperar até os 16 anos para começar a ter relação sexual. Por que? Ter sexo antes de 16 anos pode levar a arrependimento, depressão e aumento de doenças no útero.',
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
                header: 'Pode usar o mesmo preservativo no sexo vaginal e anal?',
                message: 'Se começar com o sexo anal precisa trocar a camisinha para fazer sexo vaginal',
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
SexoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
SexoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sexo',
        template: __webpack_require__(/*! raw-loader!./sexo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sexo/sexo.page.html"),
        styles: [__webpack_require__(/*! ./sexo.page.scss */ "./src/app/pages/sexo/sexo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], SexoPage);



/***/ })

}]);
//# sourceMappingURL=pages-sexo-sexo-module-es2015.js.map