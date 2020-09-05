(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-saude-vaginal-dois-saude-vaginal-dois-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-left\">\n    <div class=\"title ion-text-center\">Saúde vaginal</div>\n    <ion-list class=\"lista\">\n\n      <ion-fab class=\"tip\">\n        <ion-fab-button (click)=\"tip()\">\n          <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n        </ion-fab-button>\n      </ion-fab>\n\n      <ion-list-header><b>Sente ou possui os sintomas:</b></ion-list-header>\n\n      <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"health.bleeding\"> \n        <ion-list-header>\n          <ion-label>\n            <img src=\"../../../assets/icon/sangrament.png\"><b>Sangramento</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/sangue.png\" class=\"leve\">\n          <ion-label>Leve</ion-label>\n          <ion-radio slot=\"start\" value=\"leve\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/sangue.png\" class=\"medio\">\n          <ion-label>Médio</ion-label>\n          <ion-radio slot=\"start\" value=\"medio\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/sangue.png\" class=\"intenso\">\n          <ion-label>Intenso</ion-label>\n          <ion-radio slot=\"start\" value=\"intenso\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/escape.png\">\n          <ion-label>De escape</ion-label>\n          <ion-radio slot=\"start\" value=\"escape\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n\n      <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"health.colic\">\n        <ion-list-header>\n          <ion-label><img src=\"../../../assets/icon/colica.png\"><b>Cólicas</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/dor.png\" class=\"leve\">\n          <ion-label>Fraca</ion-label>\n          <ion-radio slot=\"start\" value=\"fraca\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/dor.png\" class=\"medio\">\n          <ion-label>Moderada</ion-label>\n          <ion-radio slot=\"start\" value=\"moderada\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/dor.png\" class=\"intenso\">\n          <ion-label>Forte</ion-label>\n          <ion-radio slot=\"start\" value=\"forte\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button (click)=\"back()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>voltar</b>\n      </ion-button>\n      <ion-button (click)=\"menu()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button (click)=\"next()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>próximo</b>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/saude-vaginal-dois/saude-vaginal-dois-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/saude-vaginal-dois/saude-vaginal-dois-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SaudeVaginalDoisPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeVaginalDoisPageRoutingModule", function() { return SaudeVaginalDoisPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _saude_vaginal_dois_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saude-vaginal-dois.page */ "./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.ts");




const routes = [
    {
        path: '',
        component: _saude_vaginal_dois_page__WEBPACK_IMPORTED_MODULE_3__["SaudeVaginalDoisPage"]
    }
];
let SaudeVaginalDoisPageRoutingModule = class SaudeVaginalDoisPageRoutingModule {
};
SaudeVaginalDoisPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SaudeVaginalDoisPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.module.ts ***!
  \***********************************************************************/
/*! exports provided: SaudeVaginalDoisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeVaginalDoisPageModule", function() { return SaudeVaginalDoisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _saude_vaginal_dois_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saude-vaginal-dois-routing.module */ "./src/app/pages/saude-vaginal-dois/saude-vaginal-dois-routing.module.ts");
/* harmony import */ var _saude_vaginal_dois_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saude-vaginal-dois.page */ "./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.ts");







let SaudeVaginalDoisPageModule = class SaudeVaginalDoisPageModule {
};
SaudeVaginalDoisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _saude_vaginal_dois_routing_module__WEBPACK_IMPORTED_MODULE_5__["SaudeVaginalDoisPageRoutingModule"]
        ],
        declarations: [_saude_vaginal_dois_page__WEBPACK_IMPORTED_MODULE_6__["SaudeVaginalDoisPage"]]
    })
], SaudeVaginalDoisPageModule);



/***/ }),

/***/ "./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.title {\n  position: relative;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n  text-align: center;\n  margin-top: 10%;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 4%;\n  border-radius: 25px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 25px;\n}\n.leve {\n  height: 15px;\n}\n.medio {\n  height: 20px;\n}\n.intenso {\n  height: 25px;\n}\nion-fab {\n  top: 10%;\n  margin-left: 70%;\n}\nion-fab-button {\n  width: 80px;\n  height: 80px;\n}\n.boneca {\n  width: 70px;\n  height: 85px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsLWRvaXMvc2F1ZGUtdmFnaW5hbC1kb2lzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2F1ZGUtdmFnaW5hbC1kb2lzL3NhdWRlLXZhZ2luYWwtZG9pcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsdUZBQUE7QUFDUjtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7RUFFQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURDQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDRUo7QURBQTtFQUNJLHdCQUFBO0FDR0o7QUREQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNJSjtBREZBO0VBQ0ksWUFBQTtBQ0tKO0FERkE7RUFDSSxZQUFBO0FDS0o7QURIQTtFQUNJLFlBQUE7QUNNSjtBREpBO0VBQ0ksWUFBQTtBQ09KO0FESkE7RUFDSSxRQUFBO0VBQ0EsZ0JBQUE7QUNPSjtBRExBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNRSjtBRE5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NhdWRlLXZhZ2luYWwtZG9pcy9zYXVkZS12YWdpbmFsLWRvaXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xuLmJhY2tncm91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYmFja2dyb3VkOiAjYzhmZmZmOyBcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy90b3A6IDElO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgY29sb3I6ICM2ZDRjODA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cbmlvbi1saXN0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiNWYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDQlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7ICBcbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pbWd7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubGV2ZXtcbiAgICBoZWlnaHQ6IDE1cHg7XG59XG4ubWVkaW97XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuLmludGVuc297XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG5pb24tZmFie1xuICAgIHRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7ICAgXG59XG5pb24tZmFiLWJ1dHRvbntcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG4uYm9uZWNhe1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogODVweDtcbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuLmJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNmQ0YzgwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuaW9uLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubGV2ZSB7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLm1lZGlvIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uaW50ZW5zbyB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuaW9uLWZhYiB7XG4gIHRvcDogMTAlO1xuICBtYXJnaW4tbGVmdDogNzAlO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5ib25lY2Ege1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA4NXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.ts ***!
  \*********************************************************************/
/*! exports provided: SaudeVaginalDoisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeVaginalDoisPage", function() { return SaudeVaginalDoisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/health.service */ "./src/app/services/health.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







let SaudeVaginalDoisPage = class SaudeVaginalDoisPage {
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
        return this.router.navigate(["/saude-vaginal"]);
    }
    menu() {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    }
    next() {
        this.saveHealth();
        return this.router.navigate(["/higiene"]);
    }
    tip() {
        this.saveHealth();
        return this.router.navigate(["/saude-vaginal-dois-dicas"]);
    }
    saveHealth() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.presentLoading();
            this.health.userID = this.authService.getAuth().currentUser.uid;
            if (this.healthID) {
            }
            else {
                this.health.data = this.today;
                if (this.health.bleeding == null) {
                    this.health.bleeding = "indefinido";
                }
                if (this.health.colic == null) {
                    this.health.colic = "indefinido";
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
SaudeVaginalDoisPage.ctorParameters = () => [
    { type: src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SaudeVaginalDoisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saude-vaginal-dois',
        template: __webpack_require__(/*! raw-loader!./saude-vaginal-dois.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.html"),
        styles: [__webpack_require__(/*! ./saude-vaginal-dois.page.scss */ "./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SaudeVaginalDoisPage);



/***/ })

}]);
//# sourceMappingURL=pages-saude-vaginal-dois-saude-vaginal-dois-module-es2015.js.map