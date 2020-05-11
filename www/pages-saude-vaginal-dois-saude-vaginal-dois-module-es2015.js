(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-saude-vaginal-dois-saude-vaginal-dois-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-left\">\n\n    <ion-list class=\"lista\">\n\n      <ion-list-header><b>Sente ou possui os sintomas:</b></ion-list-header>\n\n      <ion-radio-group>\n        <ion-list-header>\n\n          <ion-label><img src=\"../../../assets/icon/sangrament.png\"><b>Sangramento</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/sangue.png\" class=\"leve\">\n          <ion-label>Leve</ion-label>\n          <ion-radio slot=\"start\" value=\"leve\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/sangue.png\" class=\"medio\">\n          <ion-label>Médio</ion-label>\n          <ion-radio slot=\"start\" value=\"medio\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/sangue.png\" class=\"intenso\">\n          <ion-label>Intenso</ion-label>\n          <ion-radio slot=\"start\" value=\"intenso\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/escape.png\">\n          <ion-label>De escape</ion-label>\n          <ion-radio slot=\"start\" value=\"escape\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n\n      <ion-radio-group>\n        <ion-list-header>\n\n          <ion-label><img src=\"../../../assets/icon/colica.png\"><b>Cólicas</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/dor.png\" class=\"leve\">\n          <ion-label>Fraca</ion-label>\n          <ion-radio slot=\"start\" value=\"fraca\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/dor.png\" class=\"medio\">\n          <ion-label>Moderada</ion-label>\n          <ion-radio slot=\"start\" value=\"moderada\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/dor.png\" class=\"intenso\">\n          <ion-label>Forte</ion-label>\n          <ion-radio slot=\"start\" value=\"forte\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button href=\"/saude-vaginal\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>voltar</b>\n      </ion-button>\n      <ion-button href=\"/opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button href=\"/higiene\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>próximo</b>\n      </ion-button>\n    </div>\n\n    <ion-fab>\n      <ion-fab-button href=\"/saude-vaginal-dois-dicas\">\n        <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n      </ion-fab-button>\n    </ion-fab>\n\n  </div>\n</ion-content>"

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

module.exports = ".backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('saude.jpeg');\n  background-size: 100% 100%;\n  width: 100%;\n}\n\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 80px;\n  border-radius: 25px;\n}\n\nion-radio {\n  --color-checked: #ff6c92;\n}\n\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\n\nimg {\n  height: 25px;\n}\n\n.leve {\n  height: 15px;\n}\n\n.medio {\n  height: 20px;\n}\n\n.intenso {\n  height: 25px;\n}\n\nion-fab {\n  top: 125px;\n  margin-left: 75%;\n}\n\nion-fab-button {\n  width: 85px;\n  height: 85px;\n}\n\n.boneca {\n  width: 100px;\n  height: 100px;\n}\n\n.rodape {\n  margin-top: 5px;\n  margin-bottom: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsLWRvaXMvc2F1ZGUtdmFnaW5hbC1kb2lzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2F1ZGUtdmFnaW5hbC1kb2lzL3NhdWRlLXZhZ2luYWwtZG9pcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSx3QkFBQTtBQ0dKOztBRERBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBREhBO0VBQ0ksWUFBQTtBQ01KOztBREpBO0VBQ0ksWUFBQTtBQ09KOztBREpBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1FKOztBRE5BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNTSjs7QURQQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2F1ZGUtdmFnaW5hbC1kb2lzL3NhdWRlLXZhZ2luYWwtZG9pcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdWQ6ICNjOGZmZmY7IFxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zYXVkZS5qcGVnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2I1ZjBmMDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuaW9uLXJhZGlve1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmNmM5Mjtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmltZ3tcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5sZXZle1xuICAgIGhlaWdodDogMTVweDtcbn1cbi5tZWRpb3tcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG4uaW50ZW5zb3tcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbmlvbi1mYWJ7XG4gICAgdG9wOiAxMjVweDtcbiAgICBtYXJnaW4tbGVmdDogNzUlOyAgICBcbn1cbmlvbi1mYWItYnV0dG9ue1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIGhlaWdodDogODVweDtcbn1cbi5ib25lY2F7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG59XG4ucm9kYXBle1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xufSIsIi5iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VkOiAjYzhmZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3NhdWRlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZjBmMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDojYjVmMGYwO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmxldmUge1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi5tZWRpbyB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmludGVuc28ge1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbmlvbi1mYWIge1xuICB0b3A6IDEyNXB4O1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA4NXB4O1xuICBoZWlnaHQ6IDg1cHg7XG59XG5cbi5ib25lY2Ege1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5yb2RhcGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDU1cHg7XG59Il19 */"

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


let SaudeVaginalDoisPage = class SaudeVaginalDoisPage {
    constructor() { }
    ngOnInit() {
    }
};
SaudeVaginalDoisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saude-vaginal-dois',
        template: __webpack_require__(/*! raw-loader!./saude-vaginal-dois.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.html"),
        styles: [__webpack_require__(/*! ./saude-vaginal-dois.page.scss */ "./src/app/pages/saude-vaginal-dois/saude-vaginal-dois.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SaudeVaginalDoisPage);



/***/ })

}]);
//# sourceMappingURL=pages-saude-vaginal-dois-saude-vaginal-dois-module-es2015.js.map