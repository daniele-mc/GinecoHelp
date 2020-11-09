(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sintomas-sintomas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sintomas/sintomas.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sintomas/sintomas.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <div class=\"title ion-text-center\">Ciclo menstrual</div>\n    <ion-list>\n      <br>\n      <div class=\"sintomas\">\n\n        <ion-list-header>\n          <div>\n            <div>\n              <img src=\"../../../assets/icon/sintomas.png\" style=\"float: left\">\n            </div>\n            <div class=\"text\">\n              <ion-label><b>Sintomas</b></ion-label>\n            </div>\n          </div>\n        </ion-list-header>\n\n        <ion-radio-group > \n\n          <div>\n            <div class=\"coluna1\">\n              <ion-item>\n                <ion-label>Tudo está bem</ion-label>\n                <ion-checkbox color=\" secondary\" value=\"tudo-esta-bem\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item value=\"acne\">\n                <ion-label value=\"acne\">Acne</ion-label>\n                <ion-checkbox color=\"secondary\" value=\"acne\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Dor nas costas</ion-label>\n                <ion-checkbox color=\"secondary\" value=\"dor-nas-costas\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Dor muscular</ion-label>\n                <ion-checkbox color=\"secondary\" value=\"dor-muscular\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Cãibra</ion-label>\n                <ion-checkbox color=\"secondary\" value=\"caibra\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Fadiga</ion-label>\n                <ion-checkbox color=\"secondary\" value=\"fadiga\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Insônia</ion-label>\n                <ion-checkbox color=\"secondary\" value=\"insonia\"></ion-checkbox>\n              </ion-item>\n            </div>\n\n            <div class=\"coluna2\">\n              <ion-item>\n                <ion-label>Seios sensíveis</ion-label>\n                <ion-checkbox color=\"secondary\" value=\"seios-sensiveis\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Inchaço</ion-label>\n                <ion-checkbox color=\"secondary\" value=\"inchaço\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Náusea</ion-label>\n                <ion-checkbox color=\"secondary\" value=\"nausea\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Cólica intestinal</ion-label>\n                <ion-checkbox color=\"secondary\" value=\"colica-intestinal\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Prisão de ventre</ion-label>\n                <ion-checkbox color=\"secondary\" value=\"prisao-de-ventre\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Diarréia</ion-label>\n                <ion-checkbox color=\"secondary\" value=\"diarreia\"></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Calafrios</ion-label>\n                <ion-checkbox color=\"secondary\" value=\"calafrio\"></ion-checkbox>\n              </ion-item>\n            </div>\n\n            <div class=\"ultimo-text\">\n              <ion-item>\n                <ion-label>Aumento de apetite</ion-label>\n                <ion-checkbox color=\"secondary\" value=\"aumento-de-apetite\"></ion-checkbox>\n              </ion-item>\n            </div>\n          </div>\n\n        </ion-radio-group>\n      </div>\n\n      <br>\n    </ion-list>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"back()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b>\n      </ion-button>\n      <ion-button color=\"primary\" (click)=\"menu()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b>\n      </ion-button>\n      <ion-button color=\"primary\" (click)=\"next()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/sintomas/sintomas-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/sintomas/sintomas-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SintomasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SintomasPageRoutingModule", function() { return SintomasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sintomas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sintomas.page */ "./src/app/pages/sintomas/sintomas.page.ts");




const routes = [
    {
        path: '',
        component: _sintomas_page__WEBPACK_IMPORTED_MODULE_3__["SintomasPage"]
    }
];
let SintomasPageRoutingModule = class SintomasPageRoutingModule {
};
SintomasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SintomasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/sintomas/sintomas.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/sintomas/sintomas.module.ts ***!
  \***************************************************/
/*! exports provided: SintomasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SintomasPageModule", function() { return SintomasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sintomas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sintomas-routing.module */ "./src/app/pages/sintomas/sintomas-routing.module.ts");
/* harmony import */ var _sintomas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sintomas.page */ "./src/app/pages/sintomas/sintomas.page.ts");







let SintomasPageModule = class SintomasPageModule {
};
SintomasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sintomas_routing_module__WEBPACK_IMPORTED_MODULE_5__["SintomasPageRoutingModule"]
        ],
        declarations: [_sintomas_page__WEBPACK_IMPORTED_MODULE_6__["SintomasPage"]]
    })
], SintomasPageModule);



/***/ }),

/***/ "./src/app/pages/sintomas/sintomas.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/sintomas/sintomas.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n  text-align: center;\n  margin-top: 10%;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 7px;\n  margin-right: 7px;\n  margin-top: 4%;\n  border-radius: 25px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 33px;\n}\nion-list-header {\n  padding: 0px;\n}\n.text {\n  width: 100px;\n  margin-left: 10%;\n  margin-top: 4px;\n}\n.sintomas {\n  height: 460px;\n}\n.coluna1 {\n  width: 50%;\n  margin-left: 1px;\n  float: left;\n}\n.coluna2 {\n  width: 50%;\n  margin-left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zaW50b21hcy9zaW50b21hcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpbnRvbWFzL3NpbnRvbWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RkFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUo7QURBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDR0o7QUREQTtFQUNJLHdCQUFBO0FDSUo7QURGQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNLSjtBREZBO0VBQ0ksWUFBQTtBQ0tKO0FESEE7RUFDSSxZQUFBO0FDTUo7QURKQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNPSjtBREpBO0VBQ0ksYUFBQTtBQ09KO0FETEE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDUUo7QUROQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2ludG9tYXMvc2ludG9tYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xuLmJhY2tncm91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYmFja2dyb3VkOiAjYzhmZmZmOyBcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi50aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgY29sb3I6ICM2ZDRjODA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cbmlvbi1saXN0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiNWYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4OyAgXG59XG5pb24tcmFkaW97XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIFxufVxuaW1ne1xuICAgIGhlaWdodDogMzNweDtcbn1cbmlvbi1saXN0LWhlYWRlcntcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4udGV4dHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5zaW50b21hc3tcbiAgICBoZWlnaHQ6IDQ2MHB4O1xufVxuLmNvbHVuYTF7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmNvbHVuYTJ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogNTAlOyAgICBcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VkOiAjYzhmZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2sucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LWZhbWlseTogXCJBbWF0aWMgU0NcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICM2ZDRjODA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG5pb24tbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZjBmMDtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi50ZXh0IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5zaW50b21hcyB7XG4gIGhlaWdodDogNDYwcHg7XG59XG5cbi5jb2x1bmExIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb2x1bmEyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/sintomas/sintomas.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sintomas/sintomas.page.ts ***!
  \*************************************************/
/*! exports provided: SintomasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SintomasPage", function() { return SintomasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/health.service */ "./src/app/services/health.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");








let SintomasPage = class SintomasPage {
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
        this.form = [
            { val: 'Tudo está bem', isChecked: false },
            { val: 'Acne', isChecked: false },
            { val: 'Dor nas costas', isChecked: false },
            { val: 'Dor muscular', isChecked: false },
            { val: 'Cãibra', isChecked: false },
            { val: 'Fadiga', isChecked: false },
            { val: 'Insônia', isChecked: false },
            { val: 'Aumento de apetite', isChecked: false },
            { val: 'Seios sensiveis', isChecked: false },
            { val: 'Inchaço', isChecked: false },
            { val: 'Náusea', isChecked: false },
            { val: 'Cólica intestinal', isChecked: false },
            { val: 'Prisão de ventre', isChecked: false },
            { val: 'Diarréia', isChecked: false },
            { val: 'Calafrios', isChecked: false },
        ];
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
        return this.router.navigate(["/ciclo-menstrual-dois"]);
    }
    menu() {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    }
    next() {
        this.saveHealth();
        return this.router.navigate(["/ciclo-menstrual-tres"]);
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
                    console.log("salvo");
                    console.log(this.health.symptoms);
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
SintomasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SintomasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sintomas',
        template: __webpack_require__(/*! raw-loader!./sintomas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sintomas/sintomas.page.html"),
        styles: [__webpack_require__(/*! ./sintomas.page.scss */ "./src/app/pages/sintomas/sintomas.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SintomasPage);



/***/ })

}]);
//# sourceMappingURL=pages-sintomas-sintomas-module-es2015.js.map