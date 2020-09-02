(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-saude-vaginal-dois-saude-vaginal-dois-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-left\">\n    <div class=\"title ion-text-center\">Saúde vaginal</div>\n    <ion-list class=\"lista\">\n\n      <ion-list-header><b>Sente ou possui os sintomas:</b></ion-list-header>\n\n      <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"health.bleeding\"> \n        <ion-list-header>\n          <ion-label>\n            <img src=\"../../../assets/icon/sangrament.png\"><b>Sangramento</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/sangue.png\" class=\"leve\">\n          <ion-label>Leve</ion-label>\n          <ion-radio slot=\"start\" value=\"leve\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/sangue.png\" class=\"medio\">\n          <ion-label>Médio</ion-label>\n          <ion-radio slot=\"start\" value=\"medio\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/sangue.png\" class=\"intenso\">\n          <ion-label>Intenso</ion-label>\n          <ion-radio slot=\"start\" value=\"intenso\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/escape.png\">\n          <ion-label>De escape</ion-label>\n          <ion-radio slot=\"start\" value=\"escape\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n\n      <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"health.colic\">\n        <ion-list-header>\n          <ion-label><img src=\"../../../assets/icon/colica.png\"><b>Cólicas</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/dor.png\" class=\"leve\">\n          <ion-label>Fraca</ion-label>\n          <ion-radio slot=\"start\" value=\"fraca\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/dor.png\" class=\"medio\">\n          <ion-label>Moderada</ion-label>\n          <ion-radio slot=\"start\" value=\"moderada\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/dor.png\" class=\"intenso\">\n          <ion-label>Forte</ion-label>\n          <ion-radio slot=\"start\" value=\"forte\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button (click)=\"back()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>voltar</b>\n      </ion-button>\n      <ion-button (click)=\"menu()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button (click)=\"next()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>próximo</b>\n      </ion-button>\n    </div>\n\n    <ion-fab>\n      <ion-fab-button href=\"/saude-vaginal-dois-dicas\">\n        <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n      </ion-fab-button>\n    </ion-fab>\n\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _saude_vaginal_dois_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saude-vaginal-dois.page */ "./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.ts");




var routes = [
    {
        path: '',
        component: _saude_vaginal_dois_page__WEBPACK_IMPORTED_MODULE_3__["SaudeVaginalDoisPage"]
    }
];
var SaudeVaginalDoisPageRoutingModule = /** @class */ (function () {
    function SaudeVaginalDoisPageRoutingModule() {
    }
    SaudeVaginalDoisPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SaudeVaginalDoisPageRoutingModule);
    return SaudeVaginalDoisPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _saude_vaginal_dois_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saude-vaginal-dois-routing.module */ "./src/app/pages/saude-vaginal-dois/saude-vaginal-dois-routing.module.ts");
/* harmony import */ var _saude_vaginal_dois_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saude-vaginal-dois.page */ "./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.ts");







var SaudeVaginalDoisPageModule = /** @class */ (function () {
    function SaudeVaginalDoisPageModule() {
    }
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
    return SaudeVaginalDoisPageModule;
}());



/***/ }),

/***/ "./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  top: 1%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 4%;\n  border-radius: 25px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 25px;\n}\n.leve {\n  height: 15px;\n}\n.medio {\n  height: 20px;\n}\n.intenso {\n  height: 25px;\n}\nion-fab {\n  top: 10%;\n  margin-left: 70%;\n}\nion-fab-button {\n  width: 80px;\n  height: 80px;\n}\n.boneca {\n  width: 70px;\n  height: 85px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsLWRvaXMvc2F1ZGUtdmFnaW5hbC1kb2lzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2F1ZGUtdmFnaW5hbC1kb2lzL3NhdWRlLXZhZ2luYWwtZG9pcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsdUZBQUE7QUFDUjtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QURDQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNFSjtBREFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNHSjtBRERBO0VBQ0ksd0JBQUE7QUNJSjtBREZBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ0tKO0FESEE7RUFDSSxZQUFBO0FDTUo7QURIQTtFQUNJLFlBQUE7QUNNSjtBREpBO0VBQ0ksWUFBQTtBQ09KO0FETEE7RUFDSSxZQUFBO0FDUUo7QURMQTtFQUNJLFFBQUE7RUFDQSxnQkFBQTtBQ1FKO0FETkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1NKO0FEUEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2F1ZGUtdmFnaW5hbC1kb2lzL3NhdWRlLXZhZ2luYWwtZG9pcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XG4uYmFja2dyb3VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7IFxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxJTtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwOyBcbn1cbmlvbi1saXN0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiNWYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDQlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7ICBcbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pbWd7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubGV2ZXtcbiAgICBoZWlnaHQ6IDE1cHg7XG59XG4ubWVkaW97XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuLmludGVuc297XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG5pb24tZmFie1xuICAgIHRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7ICAgXG59XG5pb24tZmFiLWJ1dHRvbntcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG4uYm9uZWNhe1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogODVweDtcbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuLmJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDElO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xuICBjb2xvcjogIzZkNGM4MDtcbn1cblxuaW9uLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubGV2ZSB7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLm1lZGlvIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uaW50ZW5zbyB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuaW9uLWZhYiB7XG4gIHRvcDogMTAlO1xuICBtYXJnaW4tbGVmdDogNzAlO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5ib25lY2Ege1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA4NXB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/health.service */ "./src/app/services/health.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







var SaudeVaginalDoisPage = /** @class */ (function () {
    function SaudeVaginalDoisPage(healthService, loadingCtrl, toastCtrl, authService, activeRoute, router) {
        this.healthService = healthService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.health = {};
        this.healthID = null;
    }
    SaudeVaginalDoisPage.prototype.ngOnInit = function () {
        this.formattingDay();
        this.check();
    };
    SaudeVaginalDoisPage.prototype.formattingDay = function () {
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
    SaudeVaginalDoisPage.prototype.check = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log((this.today));
                        return [4 /*yield*/, this.healthService.checkExists(this.today)];
                    case 1:
                        if ((_a.sent()) == true) {
                            this.loadHealth();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SaudeVaginalDoisPage.prototype.loadHealth = function () {
        var _this = this;
        this.healthSubscription = this.healthService.getHealth(this.today).subscribe(function (data) {
            _this.health = data;
        });
    };
    SaudeVaginalDoisPage.prototype.back = function () {
        this.saveHealth();
        return this.router.navigate(["/saude-vaginal"]);
    };
    SaudeVaginalDoisPage.prototype.menu = function () {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    };
    SaudeVaginalDoisPage.prototype.next = function () {
        this.saveHealth();
        return this.router.navigate(["/higiene"]);
    };
    SaudeVaginalDoisPage.prototype.tip = function () {
        this.saveHealth();
        return this.router.navigate(["/saude-vaginal-dois-dicas"]);
    };
    SaudeVaginalDoisPage.prototype.saveHealth = function () {
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
                        if (this.health.bleeding == null) {
                            this.health.bleeding = "indefinido";
                        }
                        if (this.health.colic == null) {
                            this.health.colic = "indefinido";
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
    SaudeVaginalDoisPage.prototype.presentLoading = function () {
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
    SaudeVaginalDoisPage.prototype.presentToast = function (message) {
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
    SaudeVaginalDoisPage.ctorParameters = function () { return [
        { type: src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
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
    return SaudeVaginalDoisPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-saude-vaginal-dois-saude-vaginal-dois-module-es5.js.map