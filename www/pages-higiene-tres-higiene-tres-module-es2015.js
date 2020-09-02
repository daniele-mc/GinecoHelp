(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-higiene-tres-higiene-tres-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/higiene-tres/higiene-tres.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/higiene-tres/higiene-tres.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <div class=\"title ion-text-center\">Saúde vaginal</div>\n    <ion-list>\n      <br>\n      <ion-label class=\"titu ion-text-center\"><b>Higiene Íntima</b></ion-label>\n      <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"health.tightClothes\">\n        <ion-list-header>\n          <ion-label>\n            <div>\n              <div>\n                <img src=\"../../../assets/icon/calca.png\" style=\"float: left\">\n              </div>\n              <div class=\"text\">\n                <b>Usa roupas quentes e apertadas?</b>\n              </div>\n            </div>\n          </ion-label>\n\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <ion-item>\n        <ion-label>Devo usar?</ion-label>\n      </ion-item>\n\n      <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"health.soap\">\n        <ion-list-header>\n          <ion-label>\n            <div>\n              <div>\n                <img src=\"../../../assets/icon/sabonete.png\" style=\"float: left\">\n              </div>\n              <div class=\"text\">\n                <b>Usa sabonete para lavar a vagina?</b>\n              </div>\n            </div>\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <ion-item>\n        <ion-label>Devo usar?</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"back()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" (click)=\"menu()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" (click)=\"next()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n  </div>\n\n  <ion-fab class=\"roupa\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab class=\"sabonete\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/higiene-tres/higiene-tres-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/higiene-tres/higiene-tres-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: HigieneTresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigieneTresPageRoutingModule", function() { return HigieneTresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _higiene_tres_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./higiene-tres.page */ "./src/app/pages/higiene-tres/higiene-tres.page.ts");




const routes = [
    {
        path: '',
        component: _higiene_tres_page__WEBPACK_IMPORTED_MODULE_3__["HigieneTresPage"]
    }
];
let HigieneTresPageRoutingModule = class HigieneTresPageRoutingModule {
};
HigieneTresPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HigieneTresPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/higiene-tres/higiene-tres.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/higiene-tres/higiene-tres.module.ts ***!
  \***********************************************************/
/*! exports provided: HigieneTresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigieneTresPageModule", function() { return HigieneTresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _higiene_tres_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./higiene-tres-routing.module */ "./src/app/pages/higiene-tres/higiene-tres-routing.module.ts");
/* harmony import */ var _higiene_tres_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./higiene-tres.page */ "./src/app/pages/higiene-tres/higiene-tres.page.ts");







let HigieneTresPageModule = class HigieneTresPageModule {
};
HigieneTresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _higiene_tres_routing_module__WEBPACK_IMPORTED_MODULE_5__["HigieneTresPageRoutingModule"]
        ],
        declarations: [_higiene_tres_page__WEBPACK_IMPORTED_MODULE_6__["HigieneTresPage"]]
    })
], HigieneTresPageModule);



/***/ }),

/***/ "./src/app/pages/higiene-tres/higiene-tres.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/higiene-tres/higiene-tres.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  top: 3%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 10%;\n  border-radius: 25px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 25px;\n}\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n.roupa {\n  top: 37%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\n.sabonete {\n  top: 67%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\nion-fab-button {\n  width: 80px;\n  height: 80px;\n}\n.boneca {\n  width: 70px;\n  height: 85px;\n}\n.text {\n  width: 300px;\n  margin-left: 2px;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9oaWdpZW5lLXRyZXMvaGlnaWVuZS10cmVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGlnaWVuZS10cmVzL2hpZ2llbmUtdHJlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsdUZBQUE7QUFDUjtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QURDQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNFSjtBREFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNHSjtBRERBO0VBQ0ksd0JBQUE7QUNJSjtBREZBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ0tKO0FESEE7RUFDSSxZQUFBO0FDTUo7QURKQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDT0o7QURMQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDUUo7QUROQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDU0o7QURQQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDVUo7QURSQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDV0o7QURUQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNZSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpZ2llbmUtdHJlcy9oaWdpZW5lLXRyZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xuLmJhY2tncm91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYmFja2dyb3VkOiAjYzhmZmZmOyBcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi50aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMyU7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzZkNGM4MDsgXG59XG5pb24tbGlzdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYjVmMGYwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDsgIFxufVxuaW9uLXJhZGlve1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmltZ3tcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5pb24tZmFie1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDU1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbn1cbi5yb3VwYXtcbiAgICB0b3A6IDM3JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDglO1xuICAgIGhlaWdodDogODBweDtcbn1cbi5zYWJvbmV0ZXtcbiAgICB0b3A6IDY3JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDglO1xuICAgIGhlaWdodDogODBweDtcbn1cbmlvbi1mYWItYnV0dG9ue1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbn1cbi5ib25lY2F7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA4NXB4O1xufVxuLnRleHR7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG5cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuLmJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMlO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xuICBjb2xvcjogIzZkNGM4MDtcbn1cblxuaW9uLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuaW9uLWZhYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1NXB4O1xuICBtYXJnaW4tbGVmdDogODAlO1xufVxuXG4ucm91cGEge1xuICB0b3A6IDM3JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOCU7XG4gIGhlaWdodDogODBweDtcbn1cblxuLnNhYm9uZXRlIHtcbiAgdG9wOiA2NyU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDglO1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmJvbmVjYSB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDg1cHg7XG59XG5cbi50ZXh0IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/higiene-tres/higiene-tres.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/higiene-tres/higiene-tres.page.ts ***!
  \*********************************************************/
/*! exports provided: HigieneTresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigieneTresPage", function() { return HigieneTresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/health.service */ "./src/app/services/health.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");








let HigieneTresPage = class HigieneTresPage {
    constructor(AlertController, healthService, loadingCtrl, toastCtrl, authService, activeRoute, router) {
        this.AlertController = AlertController;
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
    presentAlert1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.saveHealth();
            const alert = yield this.AlertController.create({
                header: 'Usa roupas quentes e apertadas?',
                message: 'O uso de roupas apertadas, quentes e com tecidos sintéticos,  que dificultam a transpiração favorecem a proliferação inadequada de microorganismos e podem favorecer o surgimento de infecções nos genitais.',
                buttons: ['Ok']
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    presentAlert2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.saveHealth();
            const alert = yield this.AlertController.create({
                header: 'Usa sabonete para lavar a vagina?',
                message: 'De acordo com as ginecologistas, o melhor sabonete é aquele com ph neutro, sem cor e sem cheiro que não altera a autorregulação das bactérias presentes no canal vaginal e na vulva.',
                buttons: ['Ok']
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
            console.log(result);
        });
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
            console.log((this.today));
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
        return this.router.navigate(["/higiene-dois"]);
    }
    menu() {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    }
    next() {
        this.saveHealth();
        return this.router.navigate(["/ciclo-menstrual"]);
    }
    saveHealth() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.presentLoading();
            console.log("salvo");
            this.health.userID = this.authService.getAuth().currentUser.uid;
            if (this.healthID) {
            }
            else {
                this.health.data = this.today;
                if (this.health.tightClothes == null) {
                    this.health.tightClothes = "indefinido";
                }
                if (this.health.soap == null) {
                    this.health.soap = "indefinido";
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
HigieneTresPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HigieneTresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-higiene-tres',
        template: __webpack_require__(/*! raw-loader!./higiene-tres.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/higiene-tres/higiene-tres.page.html"),
        styles: [__webpack_require__(/*! ./higiene-tres.page.scss */ "./src/app/pages/higiene-tres/higiene-tres.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HigieneTresPage);



/***/ })

}]);
//# sourceMappingURL=pages-higiene-tres-higiene-tres-module-es2015.js.map