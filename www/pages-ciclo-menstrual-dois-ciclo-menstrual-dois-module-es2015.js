(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ciclo-menstrual-dois-ciclo-menstrual-dois-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <div class=\"title ion-text-center\">Ciclo menstrual</div>\n\n    <ion-calendar [(ngModel)]=\"dateRange\" [options]=\"optionsRange\" [type]=\"type\" [format]=\"'YYYY-MM-DD'\" [readonly]=\"false\">\n    </ion-calendar>\n\n    <ion-button color=\"primary\" (click)=\"back()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n      <b>voltar</b>\n    </ion-button>\n    <ion-button color=\"primary\" (click)=\"menu()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n      <b>menu</b>\n    </ion-button>\n    <ion-button color=\"primary\" (click)=\"next()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n      <b>próximo</b>\n    </ion-button>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CicloMenstrualDoisPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloMenstrualDoisPageRoutingModule", function() { return CicloMenstrualDoisPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ciclo_menstrual_dois_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ciclo-menstrual-dois.page */ "./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.ts");




const routes = [
    {
        path: '',
        component: _ciclo_menstrual_dois_page__WEBPACK_IMPORTED_MODULE_3__["CicloMenstrualDoisPage"]
    }
];
let CicloMenstrualDoisPageRoutingModule = class CicloMenstrualDoisPageRoutingModule {
};
CicloMenstrualDoisPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CicloMenstrualDoisPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.module.ts ***!
  \***************************************************************************/
/*! exports provided: CicloMenstrualDoisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloMenstrualDoisPageModule", function() { return CicloMenstrualDoisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ciclo_menstrual_dois_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ciclo-menstrual-dois-routing.module */ "./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois-routing.module.ts");
/* harmony import */ var _ciclo_menstrual_dois_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ciclo-menstrual-dois.page */ "./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);








let CicloMenstrualDoisPageModule = class CicloMenstrualDoisPageModule {
};
CicloMenstrualDoisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ciclo_menstrual_dois_routing_module__WEBPACK_IMPORTED_MODULE_5__["CicloMenstrualDoisPageRoutingModule"],
            ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
        ],
        declarations: [_ciclo_menstrual_dois_page__WEBPACK_IMPORTED_MODULE_6__["CicloMenstrualDoisPage"]]
    })
], CicloMenstrualDoisPageModule);



/***/ }),

/***/ "./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('back.png');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-color: #ff6c92;\n}\n.title {\n  position: relative;\n  top: 7%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-calendar {\n  background-color: #b5f0f0;\n  margin-left: 1px;\n  margin-right: 1px;\n  margin-top: 100px;\n  border-radius: 25px;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9jaWNsby1tZW5zdHJ1YWwtZG9pcy9jaWNsby1tZW5zdHJ1YWwtZG9pcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NpY2xvLW1lbnN0cnVhbC1kb2lzL2NpY2xvLW1lbnN0cnVhbC1kb2lzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RkFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURDQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNFSjtBREFBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpY2xvLW1lbnN0cnVhbC1kb2lzL2NpY2xvLW1lbnN0cnVhbC1kb2lzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcbi5iYWNrZ3JvdWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZjOTI7XG59XG4udGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDclO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgY29sb3I6ICM2ZDRjODA7IFxufVxuaW9uLWNhbGVuZGFye1xuICAgIGJhY2tncm91bmQtY29sb3I6I2I1ZjBmMDtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDkwJTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YzkyO1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNyU7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNmQ0YzgwO1xufVxuXG5pb24tY2FsZW5kYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjVmMGYwO1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiA5MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.ts ***!
  \*************************************************************************/
/*! exports provided: CicloMenstrualDoisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloMenstrualDoisPage", function() { return CicloMenstrualDoisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_health_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/health.service */ "./src/app/services/health.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");








let CicloMenstrualDoisPage = class CicloMenstrualDoisPage {
    constructor(healthService, loadingCtrl, toastCtrl, authService, activeRoute, router, modalCtrl) {
        this.healthService = healthService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.health = {};
        this.healthID = null;
        this.dateRange = {
            from: new Date(2020, 7, 6),
            to: new Date(2020, 7, 12)
        };
        this.optionsRange = {
            pickMode: 'range',
            from: new Date(1),
            color: 'danger',
        };
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.formattingDay();
                //await this.check();
                this.healthSubscription = this.healthService.getHealth(this.today).subscribe(data => {
                    this.health = data;
                    this.startD = data.startDay;
                    this.startM = data.startMonth;
                    this.startY = data.startYear;
                    this.endD = data.endDay;
                    this.endM = data.endMonth;
                    this.endY = data.endYear;
                    console.log("data: ", this.startY, this.startM, this.startD);
                    this.dateRange.from = new Date(this.startY, this.startM, this.startD);
                    this.dateRange.to = new Date(this.endY, this.endM, this.endY);
                    console.log("quiiiii", this.startY, this.startM, this.startD);
                });
            }
            finally {
            }
            //this.dateRange.from = new Date(this.startY, this.startM, this.startD);
            //console.log("quiiiii",(this.startY, this.startM, this.startD));
            //this.dateRange.from = new Date(this.startY, this.startM, this.startD);
            //this.dateRange.to = new Date(this.endY, this.endM, this.endY);
        });
    }
    openCalendar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
                pickMode: 'range',
                title: 'RANGE'
            };
            const myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModal"],
                componentProps: { options }
            });
            myCalendar.present();
            const event = yield myCalendar.onDidDismiss();
            const date = event.data;
            const from = date.from;
            const to = date.to;
            console.log(date, from, to);
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
        console.log("set data hoje");
    }
    /*
      async check() {
        if ((await this.healthService.checkExists(this.today)) == true) {
          await this.loadHealth();
          
        }
        console.log("chech");
      }*/
    /*
      async loadHealth() {
        this.healthSubscription = this.healthService.getHealth(this.today).subscribe(data => {
          this.health = data;
          this.startD = data.startDay;
          this.startM = data.startMonth;
          this.startY = data.startYear;
          this.endD = data.endDay;
          this.endM = data.endMonth;
          this.endY = data.endYear;
          
          console.log("data: ",this.startY, this.startM, this.startD);
    
        });
    
      }*/
    back() {
        this.saveHealth();
        return this.router.navigate(["/ciclo-menstrual"]);
    }
    menu() {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    }
    next() {
        this.saveHealth();
        return this.router.navigate(["/sintomas"]);
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
CicloMenstrualDoisPage.ctorParameters = () => [
    { type: src_app_services_health_service__WEBPACK_IMPORTED_MODULE_5__["HealthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
CicloMenstrualDoisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ciclo-menstrual-dois',
        template: __webpack_require__(/*! raw-loader!./ciclo-menstrual-dois.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.html"),
        styles: [__webpack_require__(/*! ./ciclo-menstrual-dois.page.scss */ "./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_health_service__WEBPACK_IMPORTED_MODULE_5__["HealthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], CicloMenstrualDoisPage);



/***/ })

}]);
//# sourceMappingURL=pages-ciclo-menstrual-dois-ciclo-menstrual-dois-module-es2015.js.map