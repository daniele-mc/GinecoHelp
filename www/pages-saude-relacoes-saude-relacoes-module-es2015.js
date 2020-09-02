(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-saude-relacoes-saude-relacoes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/saude-relacoes/saude-relacoes.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/saude-relacoes/saude-relacoes.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <div class=\"title ion-text-center\">Sexo e infecções sexualmente transmissíveis</div>\n    <ion-list>\n\n      <br>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><img src=\"../../../assets/icon/infeccao.png\">\n            <b>Fazer sexo oral e/ou anal sem proteção pode pegar uma infecção sexualmente transmissível?\n            </b>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label><b>Se sim, qual(is):</b>\n            <ion-input></ion-input>\n          </ion-label>\n        </ion-item>\n      </ion-radio-group>\n      <br>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><img src=\"../../../assets/icon/pergunta.png\"><b>Fazer sexo sem camisinha pode levar a ter infecções sexualmente transmissíveis?\n\n            </b>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>As vezes</ion-label>\n          <ion-radio slot=\"start\" value=\"asvezes\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/sexo\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b></ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b></ion-button>\n      <ion-button color=\"primary\" href=\"/desejo-sexual\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b></ion-button>\n\n    </div>\n  </div>\n  <ion-fab class=\"protecao\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab class=\"camisinha\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/saude-relacoes/saude-relacoes-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/saude-relacoes/saude-relacoes-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SaudeRelacoesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeRelacoesPageRoutingModule", function() { return SaudeRelacoesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _saude_relacoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saude-relacoes.page */ "./src/app/pages/saude-relacoes/saude-relacoes.page.ts");




const routes = [
    {
        path: '',
        component: _saude_relacoes_page__WEBPACK_IMPORTED_MODULE_3__["SaudeRelacoesPage"]
    }
];
let SaudeRelacoesPageRoutingModule = class SaudeRelacoesPageRoutingModule {
};
SaudeRelacoesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SaudeRelacoesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/saude-relacoes/saude-relacoes.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/saude-relacoes/saude-relacoes.module.ts ***!
  \***************************************************************/
/*! exports provided: SaudeRelacoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeRelacoesPageModule", function() { return SaudeRelacoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _saude_relacoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saude-relacoes-routing.module */ "./src/app/pages/saude-relacoes/saude-relacoes-routing.module.ts");
/* harmony import */ var _saude_relacoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saude-relacoes.page */ "./src/app/pages/saude-relacoes/saude-relacoes.page.ts");







let SaudeRelacoesPageModule = class SaudeRelacoesPageModule {
};
SaudeRelacoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _saude_relacoes_routing_module__WEBPACK_IMPORTED_MODULE_5__["SaudeRelacoesPageRoutingModule"]
        ],
        declarations: [_saude_relacoes_page__WEBPACK_IMPORTED_MODULE_6__["SaudeRelacoesPage"]]
    })
], SaudeRelacoesPageModule);



/***/ }),

/***/ "./src/app/pages/saude-relacoes/saude-relacoes.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/saude-relacoes/saude-relacoes.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  top: 1%;\n  font-size: 35px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 3%;\n  border-radius: 25px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 25px;\n}\nion-list-header {\n  padding: 0px;\n  text-align: center;\n}\nion-input {\n  --background: #c8ffff;\n  --color: #4a1c75;\n  text-align: left;\n  border-radius: 25px;\n  height: 30px;\n}\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n.protecao {\n  top: 28%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\n.camisinha {\n  top: 66%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\nion-fab-button {\n  width: 80px;\n  height: 80px;\n}\n.boneca {\n  width: 70px;\n  height: 85px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zYXVkZS1yZWxhY29lcy9zYXVkZS1yZWxhY29lcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NhdWRlLXJlbGFjb2VzL3NhdWRlLXJlbGFjb2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RkFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0dKO0FEREE7RUFDSSx3QkFBQTtBQ0lKO0FERkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FDS0o7QURIQTtFQUNJLFlBQUE7QUNNSjtBREhBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDTUo7QURKQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ09KO0FESkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ09KO0FETEE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ1FKO0FETkE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ1NKO0FEUEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1VKO0FEUkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2F1ZGUtcmVsYWNvZXMvc2F1ZGUtcmVsYWNvZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xuLmJhY2tncm91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYmFja2dyb3VkOiAjYzhmZmZmOyBcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi50aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMSU7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzZkNGM4MDsgXG59XG5pb24tbGlzdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYjVmMGYwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4OyAgXG59XG5pb24tcmFkaW97XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW1ne1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVye1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24taW5wdXR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzhmZmZmO1xuICAgIC0tY29sb3I6ICM0YTFjNzU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGhlaWdodDogMzBweDtcblxufVxuaW9uLWZhYntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG4ucHJvdGVjYW97XG4gICAgdG9wOiAyOCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA4JTtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG4uY2FtaXNpbmhhe1xuICAgIHRvcDogNjYlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogOCU7XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuaW9uLWZhYi1idXR0b257XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuLmJvbmVjYXtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDg1cHg7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG4uYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91ZDogI2M4ZmZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMSU7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNmQ0YzgwO1xufVxuXG5pb24tbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZjBmMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taW5wdXQge1xuICAtLWJhY2tncm91bmQ6ICNjOGZmZmY7XG4gIC0tY29sb3I6ICM0YTFjNzU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLWZhYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1NXB4O1xuICBtYXJnaW4tbGVmdDogODAlO1xufVxuXG4ucHJvdGVjYW8ge1xuICB0b3A6IDI4JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOCU7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmNhbWlzaW5oYSB7XG4gIHRvcDogNjYlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4JTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5ib25lY2Ege1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA4NXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/saude-relacoes/saude-relacoes.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/saude-relacoes/saude-relacoes.page.ts ***!
  \*************************************************************/
/*! exports provided: SaudeRelacoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeRelacoesPage", function() { return SaudeRelacoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let SaudeRelacoesPage = class SaudeRelacoesPage {
    constructor(AlertController) {
        this.AlertController = AlertController;
    }
    presentAlert1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.AlertController.create({
                header: 'Fazer sexo oral e/ou anal sem proteção pode pegar uma infecção sexualmente transmissível?',
                message: 'Sim. Pode ser contaminado por HPV, gonorréia, clamídia e outras infecções sexualmente transmissíveis.',
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
                header: 'Fazer sexo sem camisinha pode levar a ter infecções sexualmente transmissíveis?',
                message: 'Fazer sexo sem camisinha pode levar a infecções sexualmente transmissíveis e entupir as trompas impedindo a mulher de engravidar.',
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
SaudeRelacoesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
SaudeRelacoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saude-relacoes',
        template: __webpack_require__(/*! raw-loader!./saude-relacoes.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/saude-relacoes/saude-relacoes.page.html"),
        styles: [__webpack_require__(/*! ./saude-relacoes.page.scss */ "./src/app/pages/saude-relacoes/saude-relacoes.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], SaudeRelacoesPage);



/***/ })

}]);
//# sourceMappingURL=pages-saude-relacoes-saude-relacoes-module-es2015.js.map