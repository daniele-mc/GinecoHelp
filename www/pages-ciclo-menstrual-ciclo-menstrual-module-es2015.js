(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ciclo-menstrual-ciclo-menstrual-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <div class=\"title ion-text-center\">Ciclo menstrual</div>\n    <ion-list>\n      <br>\n      <ion-label><b>Calendário menstrual</b></ion-label>\n\n      <ion-radio-group>\n\n        <ion-item>\n          <ion-label><b>Inicio</b></ion-label>\n          <ion-datetime placeholder=\"Selecione data\" [(ngModel)]=\"health.start\" (click)=\"startCycle()\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label><b>Final</b></ion-label>\n          <ion-datetime placeholder=\"Selecione data\" [(ngModel)]=\"health.end\" (click)=\"endCycle()\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <div class=\"duracao\">\n            <div>\n              <ion-label><b>Duração do ciclo</b></ion-label>\n            </div>\n            <div>\n              <ion-datetime displayFormat=\"D\" placeholder=\"Selecione quantos dias\"></ion-datetime>\n            </div>\n          </div>\n        </ion-item>\n\n        <ion-item>\n          <div class=\"lembrete\">\n            <ion-label><b>Lembrete</b></ion-label>\n            <div>\n              <ion-label>Quantos dias antes:</ion-label>\n              <ion-input placeholder=\"Digite quantos dias\"></ion-input>\n            </div>\n            <div>\n              <ion-label>Hora do lembrete:</ion-label>\n              <ion-datetime displayFormat=\"HH:mm\" placeholder=\"Selecione hora\"></ion-datetime>\n            </div>\n          </div>\n        </ion-item>\n\n      </ion-radio-group>\n\n      <br>\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      \n      <ion-button color=\"primary\" (click)=\"back()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" (click)=\"menu()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" (click)=\"next()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ciclo-menstrual/ciclo-menstrual-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual/ciclo-menstrual-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CicloMenstrualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloMenstrualPageRoutingModule", function() { return CicloMenstrualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ciclo_menstrual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ciclo-menstrual.page */ "./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.ts");




const routes = [
    {
        path: '',
        component: _ciclo_menstrual_page__WEBPACK_IMPORTED_MODULE_3__["CicloMenstrualPage"]
    }
];
let CicloMenstrualPageRoutingModule = class CicloMenstrualPageRoutingModule {
};
CicloMenstrualPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CicloMenstrualPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ciclo-menstrual/ciclo-menstrual.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual/ciclo-menstrual.module.ts ***!
  \*****************************************************************/
/*! exports provided: ClicoMenstrualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClicoMenstrualPageModule", function() { return ClicoMenstrualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ciclo_menstrual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ciclo-menstrual-routing.module */ "./src/app/pages/ciclo-menstrual/ciclo-menstrual-routing.module.ts");
/* harmony import */ var _ciclo_menstrual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ciclo-menstrual.page */ "./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.ts");







let ClicoMenstrualPageModule = class ClicoMenstrualPageModule {
};
ClicoMenstrualPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ciclo_menstrual_routing_module__WEBPACK_IMPORTED_MODULE_5__["CicloMenstrualPageRoutingModule"]
        ],
        declarations: [_ciclo_menstrual_page__WEBPACK_IMPORTED_MODULE_6__["CicloMenstrualPage"]]
    })
], ClicoMenstrualPageModule);



/***/ }),

/***/ "./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('back.png');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-color: #ff6c92;\n}\n.title {\n  position: relative;\n  top: 3%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 10%;\n  border-radius: 25px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n  margin-top: 4px;\n}\nion-label {\n  margin-top: 12px;\n}\nion-datetime {\n  margin-top: 5px;\n}\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\nion-list-header {\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9jaWNsby1tZW5zdHJ1YWwvY2ljbG8tbWVuc3RydWFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2ljbG8tbWVuc3RydWFsL2NpY2xvLW1lbnN0cnVhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsdUZBQUE7QUFDUjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEQ0E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDRUo7QURBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDR0o7QUREQTtFQUNJLHdCQUFBO0FDSUo7QURGQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDS0o7QURIQTtFQUNJLGdCQUFBO0FDTUo7QURIQTtFQUNJLGVBQUE7QUNNSjtBREpBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNPSjtBREpBO0VBQ0ksZUFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2ljbG8tbWVuc3RydWFsL2NpY2xvLW1lbnN0cnVhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XG4uYmFja2dyb3VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YzkyO1xufVxuLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzJTtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNmQ0YzgwOyBcbn1cbmlvbi1saXN0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiNWYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4OyAgXG59XG5pb24tcmFkaW97XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDRweDtcbn1cbmlvbi1sYWJlbHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG5pb24tZGF0ZXRpbWV7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuaW9uLWZhYntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG5cbmlvbi1saXN0LWhlYWRlcntcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG5cblxuXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YzkyO1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMyU7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNmQ0YzgwO1xufVxuXG5pb24tbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZjBmMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmlvbi1mYWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTVweDtcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.ts ***!
  \***************************************************************/
/*! exports provided: CicloMenstrualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloMenstrualPage", function() { return CicloMenstrualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/health.service */ "./src/app/services/health.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







let CicloMenstrualPage = class CicloMenstrualPage {
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
    startCycle() {
        this.start = new Date(this.health.start);
        this.health.startDay = this.start.getDate();
        console.log("start day", this.health.startDay);
        this.health.startMonth = this.start.getMonth();
        this.health.startYear = this.start.getFullYear();
    }
    endCycle() {
        this.end = new Date(this.health.end);
        console.log(this.end.getDate());
        this.health.endDay = this.end.getDate();
        this.health.endMonth = this.end.getMonth();
        this.health.endYear = this.end.getFullYear();
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
        return this.router.navigate(["/higiene-tres"]);
    }
    menu() {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    }
    next() {
        this.saveHealth();
        return this.router.navigate(["/ciclo-menstrual-dois"]);
    }
    saveHealth() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.presentLoading();
            this.health.userID = this.authService.getAuth().currentUser.uid;
            if (this.healthID) {
            }
            else {
                this.health.data = this.today;
                try {
                    yield this.startCycle();
                    yield this.endCycle();
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
CicloMenstrualPage.ctorParameters = () => [
    { type: src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CicloMenstrualPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ciclo-menstrual',
        template: __webpack_require__(/*! raw-loader!./ciclo-menstrual.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.html"),
        styles: [__webpack_require__(/*! ./ciclo-menstrual.page.scss */ "./src/app/pages/ciclo-menstrual/ciclo-menstrual.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CicloMenstrualPage);



/***/ })

}]);
//# sourceMappingURL=pages-ciclo-menstrual-ciclo-menstrual-module-es2015.js.map