(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-desejo-sexual-desejo-sexual-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/desejo-sexual/desejo-sexual.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/desejo-sexual/desejo-sexual.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <div class=\"title ion-text-center\">Sexo</div>\n    <ion-list>\n      <br>\n      <div class=\"cabecalho\">\n        <img src=\"../../../assets/icon/sexo.png\">\n        <ion-label class=\"titu ion-text-center\"><b> Sexo e desejo sexual</b>\n        </ion-label>\n      </div>\n      <br>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>É normal não sentir desejo sexual nas relações?</b>\n          </ion-label>\n        </ion-list-header>\n        <div class=\"coluna1\">\n          <ion-item>\n            <ion-label>Sim</ion-label>\n            <ion-radio slot=\"start\" value=\"sim\" ></ion-radio>\n          </ion-item>\n        </div>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <br>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Como conseguir ter orgasmo?</b>\n            <ion-input></ion-input>\n          </ion-label>\n        </ion-list-header>\n      </ion-radio-group>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Masturbação é algo natural?</b>\n          </ion-label>\n        </ion-list-header>\n        <div class=\"coluna1\">\n          <ion-item>\n            <ion-label>Sim</ion-label>\n            <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <br>\n      <div class=\"cabecalho\">\n        <img src=\"../../../assets/icon/stop.png\">\n        <ion-label class=\"titu ion-text-center\"><b> Abuso sexual</b>\n        </ion-label>\n      </div>\n      <br>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Quando saber se sofreu um abuso sexual?</b>\n            <ion-input class=\"text\"></ion-input>\n          </ion-label>\n        </ion-list-header>\n      </ion-radio-group>\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" href=\"/saude-relacoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b></ion-button>\n      <ion-button color=\"primary\" href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b></ion-button>\n      <ion-button color=\"primary\" href=\"/gravidez\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b></ion-button>\n\n    </div>\n  </div>\n  <ion-fab class=\"orgasmo\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab class=\"abuso\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/desejo-sexual/desejo-sexual-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/desejo-sexual/desejo-sexual-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DesejoSexualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesejoSexualPageRoutingModule", function() { return DesejoSexualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _desejo_sexual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desejo-sexual.page */ "./src/app/pages/desejo-sexual/desejo-sexual.page.ts");




const routes = [
    {
        path: '',
        component: _desejo_sexual_page__WEBPACK_IMPORTED_MODULE_3__["DesejoSexualPage"]
    }
];
let DesejoSexualPageRoutingModule = class DesejoSexualPageRoutingModule {
};
DesejoSexualPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DesejoSexualPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/desejo-sexual/desejo-sexual.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/desejo-sexual/desejo-sexual.module.ts ***!
  \*************************************************************/
/*! exports provided: DesejoSexualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesejoSexualPageModule", function() { return DesejoSexualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _desejo_sexual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desejo-sexual-routing.module */ "./src/app/pages/desejo-sexual/desejo-sexual-routing.module.ts");
/* harmony import */ var _desejo_sexual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desejo-sexual.page */ "./src/app/pages/desejo-sexual/desejo-sexual.page.ts");







let DesejoSexualPageModule = class DesejoSexualPageModule {
};
DesejoSexualPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _desejo_sexual_routing_module__WEBPACK_IMPORTED_MODULE_5__["DesejoSexualPageRoutingModule"]
        ],
        declarations: [_desejo_sexual_page__WEBPACK_IMPORTED_MODULE_6__["DesejoSexualPage"]]
    })
], DesejoSexualPageModule);



/***/ }),

/***/ "./src/app/pages/desejo-sexual/desejo-sexual.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/desejo-sexual/desejo-sexual.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  top: 1%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 3%;\n  border-radius: 25px;\n}\n.cabecalho {\n  margin-right: 20px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 33px;\n}\nion-list-header {\n  margin-left: 2%;\n}\nion-input {\n  --background: #c8ffff;\n  --color: #4a1c75;\n  text-align: left;\n  border-radius: 25px;\n}\n.text {\n  width: 280px;\n}\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n.orgasmo {\n  top: 37%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\n.abuso {\n  top: 60%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\nion-fab-button {\n  width: 75px;\n  height: 75px;\n}\n.boneca {\n  width: 65px;\n  height: 80px;\n}\n.coluna1 {\n  width: 50%;\n  margin-left: 1px;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9kZXNlam8tc2V4dWFsL2Rlc2Vqby1zZXh1YWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXNlam8tc2V4dWFsL2Rlc2Vqby1zZXh1YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVGQUFBO0FBQ1I7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDRUo7QURBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDR0o7QUREQTtFQUNJLGtCQUFBO0FDSUo7QUREQTtFQUNJLHdCQUFBO0FDSUo7QURGQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNLSjtBREhBO0VBQ0ksWUFBQTtBQ01KO0FESEE7RUFDSSxlQUFBO0FDTUo7QURKQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDT0o7QURMQTtFQUNJLFlBQUE7QUNRSjtBRE5BO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNTSjtBRFBBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNVSjtBRFJBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNXSjtBRFRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNZSjtBRFZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNhSjtBRFhBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ2NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVzZWpvLXNleHVhbC9kZXNlam8tc2V4dWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcbi5iYWNrZ3JvdWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJhY2tncm91ZDogI2M4ZmZmZjsgXG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4udGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDElO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgY29sb3I6ICM2ZDRjODA7IFxufVxuaW9uLWxpc3R7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2I1ZjBmMDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDsgIFxufVxuLmNhYmVjYWxob3tcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pbWd7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuXG5pb24tbGlzdC1oZWFkZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuaW9uLWlucHV0e1xuICAgIC0tYmFja2dyb3VuZDogI2M4ZmZmZjtcbiAgICAtLWNvbG9yOiAjNGExYzc1O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi50ZXh0e1xuICAgIHdpZHRoOiAyODBweDtcbn1cbmlvbi1mYWJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTVweDtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xufVxuLm9yZ2FzbW97XG4gICAgdG9wOiAzNyU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA4JTtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG4uYWJ1c297XG4gICAgdG9wOiA2MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA4JTtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG5pb24tZmFiLWJ1dHRvbntcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG59XG4uYm9uZWNhe1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogODBweDtcbn1cbi5jb2x1bmExe1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuLmJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDElO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xuICBjb2xvcjogIzZkNGM4MDtcbn1cblxuaW9uLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uY2FiZWNhbGhvIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogI2M4ZmZmZjtcbiAgLS1jb2xvcjogIzRhMWM3NTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnRleHQge1xuICB3aWR0aDogMjgwcHg7XG59XG5cbmlvbi1mYWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTVweDtcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcbn1cblxuLm9yZ2FzbW8ge1xuICB0b3A6IDM3JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOCU7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmFidXNvIHtcbiAgdG9wOiA2MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDglO1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cblxuLmJvbmVjYSB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5jb2x1bmExIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgZmxvYXQ6IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/desejo-sexual/desejo-sexual.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/desejo-sexual/desejo-sexual.page.ts ***!
  \***********************************************************/
/*! exports provided: DesejoSexualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesejoSexualPage", function() { return DesejoSexualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let DesejoSexualPage = class DesejoSexualPage {
    constructor(AlertController) {
        this.AlertController = AlertController;
    }
    presentAlert1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.AlertController.create({
                header: 'Como conseguir ter  orgasmo?',
                message: 'O órgão do orgasmo na mulher é o clitóris. Menos de 30% das mulheres tem orgasmo com o movimento do pênis dentro da vagina. 70% dependem de manipulação do clitóris (masturbação).',
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
                header: 'Abuso sexual',
                message: 'Se você sofreu abuso sexual fale com seu ginecologista ou com um psicólogo que eles podem te ajudar.',
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
DesejoSexualPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
DesejoSexualPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-desejo-sexual',
        template: __webpack_require__(/*! raw-loader!./desejo-sexual.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/desejo-sexual/desejo-sexual.page.html"),
        styles: [__webpack_require__(/*! ./desejo-sexual.page.scss */ "./src/app/pages/desejo-sexual/desejo-sexual.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], DesejoSexualPage);



/***/ })

}]);
//# sourceMappingURL=pages-desejo-sexual-desejo-sexual-module-es2015.js.map