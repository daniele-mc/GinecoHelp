(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ciclo-menstrual-dois-ciclo-menstrual-dois-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <div class=\"title ion-text-center\">Ciclo menstrual</div>\n    <div class=\"ion-margin\">\n\n      <ion-row>\n        <!-- Change the displayed calendar mode -->\n        <ion-col >\n          <ion-button class=\"tilteMonth ion-button-center\" expand=\"full\" fill=\"outline\" [color]=\"calendar.mode == 'month' ? 'primary' : 'secondary'\" (click)=\"changeMode('month')\">{{ viewTitle }}</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <calendar\n      [monthviewDisplayEventTemplate]=\"template\"\n      [eventSource]=\"eventSource\"\n      [calendarMode]=\"calendar.mode\"\n      [currentDate]=\"calendar.currentDate\"\n      (onTitleChanged)=\"onViewTitleChanged($event)\"\n      step=\"30\"\n      >\n      </calendar>\n\n    </div>\n    <ion-button color=\"primary\" (click)=\"load()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n      <b>ver</b></ion-button>\n    <ion-button color=\"primary\" (click)=\"back()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n      <b>voltar</b>\n    </ion-button>\n    <ion-button color=\"primary\" (click)=\"menu()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n      <b>menu</b>\n    </ion-button>\n    <ion-button color=\"primary\" (click)=\"next()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n      <b>próximo</b>\n    </ion-button>\n\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ciclo_menstrual_dois_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ciclo-menstrual-dois.page */ "./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.ts");




var routes = [
    {
        path: '',
        component: _ciclo_menstrual_dois_page__WEBPACK_IMPORTED_MODULE_3__["CicloMenstrualDoisPage"]
    }
];
var CicloMenstrualDoisPageRoutingModule = /** @class */ (function () {
    function CicloMenstrualDoisPageRoutingModule() {
    }
    CicloMenstrualDoisPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CicloMenstrualDoisPageRoutingModule);
    return CicloMenstrualDoisPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ciclo_menstrual_dois_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ciclo-menstrual-dois-routing.module */ "./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois-routing.module.ts");
/* harmony import */ var _ciclo_menstrual_dois_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ciclo-menstrual-dois.page */ "./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");









var CicloMenstrualDoisPageModule = /** @class */ (function () {
    function CicloMenstrualDoisPageModule() {
    }
    CicloMenstrualDoisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ciclo_menstrual_dois_routing_module__WEBPACK_IMPORTED_MODULE_5__["CicloMenstrualDoisPageRoutingModule"],
                ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__["NgCalendarModule"],
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]
            ],
            declarations: [_ciclo_menstrual_dois_page__WEBPACK_IMPORTED_MODULE_6__["CicloMenstrualDoisPage"]]
        })
    ], CicloMenstrualDoisPageModule);
    return CicloMenstrualDoisPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('back.png');\n  background-repeat: round;\n  background-size: 100%;\n  background-color: #ff6c92;\n}\n.title {\n  position: relative;\n  top: 7%;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n}\nion-calendar {\n  background-color: #b5f0f0;\n  margin-left: 1px;\n  margin-right: 1px;\n  margin-top: 100px;\n  border-radius: 25px;\n  width: 90%;\n}\n.ion-margin {\n  margin-top: 30%;\n}\n.dayview-selected::after {\n  position: absolute;\n  background-color: red;\n}\n.template {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9jaWNsby1tZW5zdHJ1YWwtZG9pcy9jaWNsby1tZW5zdHJ1YWwtZG9pcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NpY2xvLW1lbnN0cnVhbC1kb2lzL2NpY2xvLW1lbnN0cnVhbC1kb2lzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RkFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURDQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNFSjtBREFBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNHSjtBRERBO0VBQ0ksZUFBQTtBQ0lKO0FERkE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDS0o7QURGQTtFQUNJLHFCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaWNsby1tZW5zdHJ1YWwtZG9pcy9jaWNsby1tZW5zdHJ1YWwtZG9pcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XG4uYmFja2dyb3VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpyb3VuZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmM5Mjtcbn1cbi50aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNyU7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzZkNGM4MDsgXG59XG5pb24tY2FsZW5kYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYjVmMGYwO1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogOTAlO1xufVxuLmlvbi1tYXJnaW57XG4gICAgbWFyZ2luLXRvcDogMzAlO1xufVxuLmRheXZpZXctc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuXG4gICB9XG4udGVtcGxhdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuLmJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmM5Mjtcbn1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDclO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xuICBjb2xvcjogIzZkNGM4MDtcbn1cblxuaW9uLWNhbGVuZGFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZjBmMDtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4uaW9uLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDMwJTtcbn1cblxuLmRheXZpZXctc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi50ZW1wbGF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/health.service */ "./src/app/services/health.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");








var CicloMenstrualDoisPage = /** @class */ (function () {
    //@ViewChild(CalendarComponent) myCal: CalendarComponent;
    function CicloMenstrualDoisPage(healthService, loadingCtrl, toastCtrl, authService, activeRoute, router, modalCtrl, db) {
        this.healthService = healthService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.health = {};
        this.healthID = null;
        this.eventSource = [];
        this.selectedDate = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: ''
        };
    }
    CicloMenstrualDoisPage.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.eventSource = this.createEvents();
                return [2 /*return*/];
            });
        });
    };
    CicloMenstrualDoisPage.prototype.createEvents = function () {
        var events = [];
        var startTime = new Date(this.startY, this.startM, this.startD);
        var endTime = new Date(this.endY, this.endM, this.endD);
        events.push({
            title: 'Menstruação',
            startTime: startTime,
            endTime: endTime,
            allDay: false,
            eventColor: 'red'
        });
        return events;
    };
    CicloMenstrualDoisPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.formattingDay()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.check()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadHealth()];
                    case 3:
                        _a.sent();
                        setTimeout(this.load, 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    CicloMenstrualDoisPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CicloMenstrualDoisPage.prototype.formattingDay = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var format, day, month, year, aux;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                format = new Date();
                year = format.getFullYear();
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
                return [2 /*return*/];
            });
        });
    };
    CicloMenstrualDoisPage.prototype.check = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.healthService.checkExists(this.today)];
                    case 1:
                        if (!((_a.sent()) == true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadHealth()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        console.log("check");
                        return [2 /*return*/];
                }
            });
        });
    };
    CicloMenstrualDoisPage.prototype.loadHealth = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.healthService.getHealth(this.today).subscribe(function (data) {
                                _this.health = data;
                                _this.startD = data.startDay;
                                _this.startM = data.startMonth;
                                _this.startY = data.startYear;
                                _this.endD = data.endDay;
                                _this.endM = data.endMonth;
                                _this.endY = data.endYear;
                                console.log("data: ", _this.startY, _this.startM, _this.startD);
                            })];
                    case 1: return [4 /*yield*/, (_a.healthSubscription = _b.sent())];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CicloMenstrualDoisPage.prototype.back = function () {
        this.saveHealth();
        return this.router.navigate(["/ciclo-menstrual"]);
    };
    CicloMenstrualDoisPage.prototype.menu = function () {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    };
    CicloMenstrualDoisPage.prototype.next = function () {
        this.saveHealth();
        return this.router.navigate(["/sintomas"]);
    };
    CicloMenstrualDoisPage.prototype.saveHealth = function () {
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
    CicloMenstrualDoisPage.prototype.presentLoading = function () {
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
    CicloMenstrualDoisPage.prototype.presentToast = function (message) {
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
    CicloMenstrualDoisPage.ctorParameters = function () { return [
        { type: src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }
    ]; };
    CicloMenstrualDoisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ciclo-menstrual-dois',
            template: __webpack_require__(/*! raw-loader!./ciclo-menstrual-dois.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.html"),
            styles: [__webpack_require__(/*! ./ciclo-menstrual-dois.page.scss */ "./src/app/pages/ciclo-menstrual-dois/ciclo-menstrual-dois.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])
    ], CicloMenstrualDoisPage);
    return CicloMenstrualDoisPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ciclo-menstrual-dois-ciclo-menstrual-dois-module-es5.js.map