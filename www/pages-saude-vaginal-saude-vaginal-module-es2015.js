(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-saude-vaginal-saude-vaginal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/saude-vaginal/saude-vaginal.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/saude-vaginal/saude-vaginal.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-left\">\n    <div class=\"title ion-text-center\">Saúde vaginal</div>\n    <ion-list class=\"lista\">\n\n      <ion-list-header><b>Sente ou possui os sintomas:</b></ion-list-header>\n\n      <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"health.ardor\">\n        <ion-list-header>\n          <ion-label><img src=\"../../../assets/icon/heart.png\"><b>Ardor</b></ion-label>\n        </ion-list-header>\n        <div class=\"coluna1\">\n          <ion-item>\n            <img src=\"../../../assets/icon/nenhum.png\">\n            <ion-label>Nenhum</ion-label>\n            <ion-radio slot=\"start\" value=\"nenhum\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <img src=\"../../../assets/icon/baixo.png\">\n            <ion-label>Baixo</ion-label>\n            <ion-radio slot=\"start\" value=\"baixo\"></ion-radio>\n          </ion-item>\n        </div>\n        <div class=\"coluna2\">\n          <ion-item>\n            <img src=\"../../../assets/icon/medio.png\">\n            <ion-label>Médio</ion-label>\n            <ion-radio slot=\"start\" value=\"medio\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <img src=\"../../../assets/icon/intenso.png\">\n            <ion-label>Intenso</ion-label>\n            <ion-radio slot=\"start\" value=\"intenso\"></ion-radio>\n          </ion-item>\n        </div>\n      </ion-radio-group>\n\n\n      <ion-item>\n        <img src=\"../../../assets/icon/corrimento.png\">\n        <ion-label>Corrimento</ion-label>\n        <ion-select id=\"corrimento\" placeholder=\"Selecione\" [(ngModel)]=\"health.discharge\" multiple=\"true\">\n          <ion-select-option value=\"transparente\">Transparente </ion-select-option>\n          <ion-select-option value=\"branco\">Branco</ion-select-option>\n          <ion-select-option value=\"amarelo\">Amarelo</ion-select-option>\n          <ion-select-option value=\"amarelo esverdeado\">Amarelo-esverdeado</ion-select-option>\n          <ion-select-option value=\"marrom\">Marrom</ion-select-option>\n          <ion-select-option value=\"sangue\">Com sangue</ion-select-option>\n          <ion-select-option value=\"rosado\">Rosado</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <img src=\"../../../assets/icon/coceira.png\">\n        <ion-label> Coceira</ion-label>\n        <ion-toggle [(ngModel)]=\"health.itch\">\n        </ion-toggle>\n      </ion-item>\n\n      <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"health.painSex\"> \n        <ion-list-header>\n          <ion-label>\n            <div>\n              <div style=\"float: left\">\n                <img src=\"../../../assets/icon/dor-relacao.png\">\n              </div>\n              <div class=\"text\">\n                <b>Dor na relação:</b>\n              </div>\n            </div>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>As vezes</ion-label>\n          <ion-radio slot=\"start\" value=\"as vezes\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n    </ion-list>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button class=\"voltar\" (click)=\"back()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button class=\"menu\" (click)=\"menu()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button class=\"proximo\" (click)=\"next()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n\n    <ion-fab>\n      <ion-fab-button (click)=\"tip()\">\n        <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n      </ion-fab-button>\n    </ion-fab>\n\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _saude_vaginal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saude-vaginal.page */ "./src/app/pages/saude-vaginal/saude-vaginal.page.ts");




const routes = [
    {
        path: '',
        component: _saude_vaginal_page__WEBPACK_IMPORTED_MODULE_3__["SaudeVaginalPage"]
    }
];
let SaudeVaginalPageRoutingModule = class SaudeVaginalPageRoutingModule {
};
SaudeVaginalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SaudeVaginalPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _saude_vaginal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saude-vaginal-routing.module */ "./src/app/pages/saude-vaginal/saude-vaginal-routing.module.ts");
/* harmony import */ var _saude_vaginal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saude-vaginal.page */ "./src/app/pages/saude-vaginal/saude-vaginal.page.ts");







let SaudeVaginalPageModule = class SaudeVaginalPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/saude-vaginal/saude-vaginal.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/saude-vaginal/saude-vaginal.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background-image: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  top: 1%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 4%;\n  border-radius: 25px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n  margin-left: 0px;\n  margin-right: 5%;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 25px;\n}\nion-fab {\n  top: 10%;\n  margin-left: 70%;\n}\n.coluna1 {\n  width: 50%;\n  margin-left: 1px;\n  float: left;\n}\n.coluna2 {\n  width: 50%;\n  margin-left: 50%;\n}\n.text {\n  width: 300px;\n  margin-left: 9%;\n}\nion-fab-button {\n  width: 80px;\n  height: 80px;\n}\n.boneca {\n  width: 70px;\n  height: 85px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsL3NhdWRlLXZhZ2luYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsL3NhdWRlLXZhZ2luYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVGQUFBO0FBQ1I7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDRUo7QURBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDR0o7QUREQTtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0lKO0FERkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FDS0o7QURIQTtFQUNJLFlBQUE7QUNNSjtBREpBO0VBQ0ksUUFBQTtFQUNBLGdCQUFBO0FDT0o7QURMQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNRSjtBRE5BO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDU0o7QURQQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDVUo7QURSQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDV0o7QURUQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDWUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsL3NhdWRlLXZhZ2luYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xuLmJhY2tncm91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYmFja2dyb3VkOiAjYzhmZmZmOyBcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi50aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMSU7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzZkNGM4MDsgXG59XG5pb24tbGlzdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYjVmMGYwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4OyAgXG59XG5pb24tcmFkaW97XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTsgIFxufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW1ne1xuICAgIGhlaWdodDogMjVweDtcbn1cbmlvbi1mYWJ7XG4gICAgdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTsgICAgXG59XG4uY29sdW5hMXtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uY29sdW5hMntcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7ICAgIFxufVxuLnRleHR7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA5JTtcbn1cbmlvbi1mYWItYnV0dG9ue1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbn1cbi5ib25lY2F7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA4NXB4O1xufVxuXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VkOiAjYzhmZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxJTtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LWZhbWlseTogXCJBbWF0aWMgU0NcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICM2ZDRjODA7XG59XG5cbmlvbi1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjVmMGYwO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuaW9uLWZhYiB7XG4gIHRvcDogMTAlO1xuICBtYXJnaW4tbGVmdDogNzAlO1xufVxuXG4uY29sdW5hMSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29sdW5hMiB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbi50ZXh0IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogOSU7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmJvbmVjYSB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDg1cHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/health.service */ "./src/app/services/health.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







let SaudeVaginalPage = class SaudeVaginalPage {
    constructor(healthService, loadingCtrl, toastCtrl, authService, activeRoute, router) {
        this.healthService = healthService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.health = {};
        this.healthID = null;
    }
    ngOnInit() {
        this.formattingDay();
        this.check();
    }
    formattingDay() {
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
    }
    check() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if ((yield this.healthService.checkExists(this.today)) == true) {
                this.loadHealth();
            }
        });
    }
    loadHealth() {
        this.healthSubscription = this.healthService.getHealth(this.today).subscribe(data => {
            this.health = data;
        });
    }
    back() {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    }
    menu() {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    }
    next() {
        this.saveHealth();
        return this.router.navigate(["/saude-vaginal-dois"]);
    }
    tip() {
        this.saveHealth();
        return this.router.navigate(["/saude-vaginal-dicas"]);
    }
    saveHealth() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.presentLoading();
            this.health.userID = this.authService.getAuth().currentUser.uid;
            if (this.healthID) {
            }
            else {
                this.health.data = this.today;
                if (this.health.ardor == null) {
                    this.health.ardor = "indefinido";
                }
                if (this.health.painSex == null) {
                    this.health.painSex = "indefinido";
                }
                try {
                    yield this.healthService.addHealth(this.health);
                    yield this.loading.dismiss();
                }
                catch (error) {
                    console.log(error);
                    this.presentToast("Erro ao tentar salvar");
                    this.loading.dismiss();
                }
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: "Por favor, aguarde...",
            });
            return this.loading.present();
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({ message, duration: 2000 });
            toast.present();
        });
    }
};
SaudeVaginalPage.ctorParameters = () => [
    { type: src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-saude-vaginal-saude-vaginal-module-es2015.js.map