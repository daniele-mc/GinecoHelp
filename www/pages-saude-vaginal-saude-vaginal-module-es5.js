(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-saude-vaginal-saude-vaginal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/saude-vaginal/saude-vaginal.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/saude-vaginal/saude-vaginal.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-left\">\n    <div class=\"title ion-text-center\">Saúde vaginal</div>\n    <ion-list class=\"lista\">\n\n      <ion-fab class=\"tip\">\n        <ion-fab-button (click)=\"tip()\">\n          <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n        </ion-fab-button>\n      </ion-fab>\n      \n      <ion-list-header><b>Sente ou possui os sintomas:</b></ion-list-header>\n\n      <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"health.ardor\">\n        <ion-list-header>\n          <ion-label><img src=\"../../../assets/icon/heart.png\"><b>Ardor</b></ion-label>\n        </ion-list-header>\n        <div class=\"coluna1\">\n          <ion-item>\n            <img src=\"../../../assets/icon/nenhum.png\">\n            <ion-label>Nenhum</ion-label>\n            <ion-radio slot=\"start\" value=\"nenhum\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <img src=\"../../../assets/icon/baixo.png\">\n            <ion-label>Baixo</ion-label>\n            <ion-radio slot=\"start\" value=\"baixo\"></ion-radio>\n          </ion-item>\n        </div>\n        <div class=\"coluna2\">\n          <ion-item>\n            <img src=\"../../../assets/icon/medio.png\">\n            <ion-label>Médio</ion-label>\n            <ion-radio slot=\"start\" value=\"medio\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <img src=\"../../../assets/icon/intenso.png\">\n            <ion-label>Intenso</ion-label>\n            <ion-radio slot=\"start\" value=\"intenso\"></ion-radio>\n          </ion-item>\n        </div>\n      </ion-radio-group>\n\n\n      <ion-item>\n        <img src=\"../../../assets/icon/corrimento.png\">\n        <ion-label>Corrimento</ion-label>\n        <ion-select id=\"corrimento\" placeholder=\"Selecione\" [(ngModel)]=\"health.discharge\" multiple=\"true\">\n          <ion-select-option value=\"transparente\">Transparente </ion-select-option>\n          <ion-select-option value=\"branco\">Branco</ion-select-option>\n          <ion-select-option value=\"amarelo\">Amarelo</ion-select-option>\n          <ion-select-option value=\"amarelo esverdeado\">Amarelo-esverdeado</ion-select-option>\n          <ion-select-option value=\"marrom\">Marrom</ion-select-option>\n          <ion-select-option value=\"sangue\">Com sangue</ion-select-option>\n          <ion-select-option value=\"rosado\">Rosado</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <img src=\"../../../assets/icon/coceira.png\">\n        <ion-label> Coceira</ion-label>\n        <ion-toggle [(ngModel)]=\"health.itch\">\n        </ion-toggle>\n      </ion-item>\n\n      <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"health.painSex\"> \n        <ion-list-header>\n          <ion-label>\n            <div>\n              <div style=\"float: left\">\n                <img src=\"../../../assets/icon/dor-relacao.png\">\n              </div>\n              <div class=\"text\">\n                <b>Dor na relação:</b>\n              </div>\n            </div>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>As vezes</ion-label>\n          <ion-radio slot=\"start\" value=\"as vezes\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n    </ion-list>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button class=\"voltar\" (click)=\"back()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button class=\"menu\" (click)=\"menu()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button class=\"proximo\" (click)=\"next()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/saude-vaginal/saude-vaginal-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/saude-vaginal/saude-vaginal-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SaudeVaginalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeVaginalPageRoutingModule", function() { return SaudeVaginalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _saude_vaginal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saude-vaginal.page */ "./src/app/pages/saude-vaginal/saude-vaginal.page.ts");




var routes = [
    {
        path: '',
        component: _saude_vaginal_page__WEBPACK_IMPORTED_MODULE_3__["SaudeVaginalPage"]
    }
];
var SaudeVaginalPageRoutingModule = /** @class */ (function () {
    function SaudeVaginalPageRoutingModule() {
    }
    SaudeVaginalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SaudeVaginalPageRoutingModule);
    return SaudeVaginalPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/saude-vaginal/saude-vaginal.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/saude-vaginal/saude-vaginal.module.ts ***!
  \*************************************************************/
/*! exports provided: SaudeVaginalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeVaginalPageModule", function() { return SaudeVaginalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _saude_vaginal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saude-vaginal-routing.module */ "./src/app/pages/saude-vaginal/saude-vaginal-routing.module.ts");
/* harmony import */ var _saude_vaginal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saude-vaginal.page */ "./src/app/pages/saude-vaginal/saude-vaginal.page.ts");







var SaudeVaginalPageModule = /** @class */ (function () {
    function SaudeVaginalPageModule() {
    }
    SaudeVaginalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _saude_vaginal_routing_module__WEBPACK_IMPORTED_MODULE_5__["SaudeVaginalPageRoutingModule"]
            ],
            declarations: [_saude_vaginal_page__WEBPACK_IMPORTED_MODULE_6__["SaudeVaginalPage"]]
        })
    ], SaudeVaginalPageModule);
    return SaudeVaginalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/saude-vaginal/saude-vaginal.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/saude-vaginal/saude-vaginal.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background-image: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.title {\n  position: relative;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n  text-align: center;\n  margin-top: 10%;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 5%;\n  border-radius: 25px;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-radio {\n  --color-checked: #ff6c92;\n  margin-left: 0px;\n  margin-right: 5%;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 25px;\n}\nion-fab {\n  margin-top: 10%;\n  margin-left: 70%;\n}\n.coluna1 {\n  width: 50%;\n  margin-left: 1px;\n  float: left;\n}\n.coluna2 {\n  width: 50%;\n  margin-left: 50%;\n}\n.text {\n  width: 300px;\n  margin-left: 9%;\n}\nion-fab-button {\n  width: 80px;\n  height: 80px;\n}\n.boneca {\n  width: 70px;\n  height: 85px;\n}\n.tip {\n  position: absolute;\n  margin-top: 1%;\n  margin-right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsL3NhdWRlLXZhZ2luYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsL3NhdWRlLXZhZ2luYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVGQUFBO0FBQ1I7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7QURDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUdBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjtBRENBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRUo7QURBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNHSjtBRERBO0VBQ0ksWUFBQTtBQ0lKO0FERkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNLSjtBREhBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ01KO0FESkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNPSjtBRExBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNRSjtBRE5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNTSjtBRFBBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNVSjtBRFJBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNXSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NhdWRlLXZhZ2luYWwvc2F1ZGUtdmFnaW5hbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XG4uYmFja2dyb3VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7IFxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5pb24tbGlzdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYjVmMGYwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC8vanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLy9oZWlnaHQ6IDYwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLXJhZGlve1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5MjtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNSU7ICBcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmltZ3tcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5pb24tZmFie1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlOyAgICBcbn1cbi5jb2x1bmExe1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5jb2x1bmEye1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTsgICAgXG59XG4udGV4dHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDklO1xufVxuaW9uLWZhYi1idXR0b257XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuLmJvbmVjYXtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDg1cHg7XG59XG4udGlwe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VkOiAjYzhmZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xuICBjb2xvcjogIzZkNGM4MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbmlvbi1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjVmMGYwO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuaW9uLWZhYiB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDcwJTtcbn1cblxuLmNvbHVuYTEge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNvbHVuYTIge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4udGV4dCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDklO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5ib25lY2Ege1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA4NXB4O1xufVxuXG4udGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/saude-vaginal/saude-vaginal.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/saude-vaginal/saude-vaginal.page.ts ***!
  \***********************************************************/
/*! exports provided: SaudeVaginalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeVaginalPage", function() { return SaudeVaginalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/health.service */ "./src/app/services/health.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







var SaudeVaginalPage = /** @class */ (function () {
    function SaudeVaginalPage(healthService, loadingCtrl, toastCtrl, authService, activeRoute, router) {
        this.healthService = healthService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.health = {};
        this.healthID = null;
    }
    SaudeVaginalPage.prototype.ngOnInit = function () {
        this.formattingDay();
        this.check();
    };
    SaudeVaginalPage.prototype.formattingDay = function () {
        var format = new Date();
        var day;
        var month;
        var year = format.getFullYear();
        var aux;
        if (format.getDate() < 10) {
            day = "0" + format.getDate();
        }
        else {
            day = format.getDate();
        }
        if (format.getMonth() + 1 < 10) {
            aux = format.getMonth() + 1;
            month = "0" + aux;
        }
        else {
            month = format.getMonth() + 1;
        }
        this.today = day + "-" + month + "-" + year;
    };
    SaudeVaginalPage.prototype.check = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.healthService.checkExists(this.today)];
                    case 1:
                        if ((_a.sent()) == true) {
                            this.loadHealth();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SaudeVaginalPage.prototype.loadHealth = function () {
        var _this = this;
        this.healthSubscription = this.healthService.getHealth(this.today).subscribe(function (data) {
            _this.health = data;
        });
    };
    SaudeVaginalPage.prototype.back = function () {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    };
    SaudeVaginalPage.prototype.menu = function () {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    };
    SaudeVaginalPage.prototype.next = function () {
        this.saveHealth();
        return this.router.navigate(["/saude-vaginal-dois"]);
    };
    SaudeVaginalPage.prototype.tip = function () {
        this.saveHealth();
        return this.router.navigate(["/saude-vaginal-dicas"]);
    };
    SaudeVaginalPage.prototype.saveHealth = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        this.health.userID = this.authService.getAuth().currentUser.uid;
                        if (!this.healthID) return [3 /*break*/, 2];
                        return [3 /*break*/, 7];
                    case 2:
                        this.health.data = this.today;
                        if (this.health.ardor == null) {
                            this.health.ardor = "indefinido";
                        }
                        if (this.health.painSex == null) {
                            this.health.painSex = "indefinido";
                        }
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 6, , 7]);
                        return [4 /*yield*/, this.healthService.addHealth(this.health)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.loading.dismiss()];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        console.log(error_1);
                        this.presentToast("Erro ao tentar salvar");
                        this.loading.dismiss();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SaudeVaginalPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Por favor, aguarde...",
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/, this.loading.present()];
                }
            });
        });
    };
    SaudeVaginalPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({ message: message, duration: 2000 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SaudeVaginalPage.ctorParameters = function () { return [
        { type: src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SaudeVaginalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-saude-vaginal",
            template: __webpack_require__(/*! raw-loader!./saude-vaginal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/saude-vaginal/saude-vaginal.page.html"),
            styles: [__webpack_require__(/*! ./saude-vaginal.page.scss */ "./src/app/pages/saude-vaginal/saude-vaginal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SaudeVaginalPage);
    return SaudeVaginalPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-saude-vaginal-saude-vaginal-module-es5.js.map