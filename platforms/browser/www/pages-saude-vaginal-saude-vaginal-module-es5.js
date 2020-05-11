(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-saude-vaginal-saude-vaginal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/saude-vaginal/saude-vaginal.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/saude-vaginal/saude-vaginal.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-left\">\n\n    <ion-list class=\"lista\">\n\n      <ion-list-header><b>Sente ou possui os sintomas:</b></ion-list-header>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><img src=\"../../../assets/icon/heart.png\"><b>Ardor</b></ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/nenhum.png\">\n          <ion-label>Nenhum</ion-label>\n          <ion-radio slot=\"start\" value=\"nenhum\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/baixo.png\">\n          <ion-label>Baixo</ion-label>\n          <ion-radio slot=\"start\" value=\"baixo\" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/medio.png\">\n          <ion-label>Médio</ion-label>\n          <ion-radio slot=\"start\" value=\"medio\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <img src=\"../../../assets/icon/intenso.png\">\n          <ion-label>Intenso</ion-label>\n          <ion-radio slot=\"start\" value=\"intenso\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n\n\n      <ion-item>\n        <img src=\"../../../assets/icon/corrimento.png\">\n        <ion-label>Corrimento</ion-label>\n        <ion-select placeholder=\"Selecione\" [(ngModel)]=\"corrimento\" multiple=\"true\">\n          <ion-select-option value=\"transparente\">Transparente</ion-select-option>\n          <ion-select-option value=\"branco\">Branco</ion-select-option>\n          <ion-select-option value=\"amarelo\">Amarelo</ion-select-option>\n          <ion-select-option value=\"a-esverdeado\">Amarelo-esverdeado</ion-select-option>\n          <ion-select-option value=\"marrom\">Marrom</ion-select-option>\n          <ion-select-option value=\"sangue\">Com sangue</ion-select-option>\n          <ion-select-option value=\"rosado\">Rosado</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <img src=\"../../../assets/icon/coceira.png\">\n        <ion-label> Coceira</ion-label>\n        <ion-toggle></ion-toggle>\n      </ion-item>\n\n\n      <ion-list-header>\n        <ion-label>\n          <div>\n            <div style=\"float: left\">\n              <img src=\"../../../assets/icon/dor-relacao.png\">\n            </div>\n            <div class=\"text\">\n              <b>Dor na relação:</b>\n            </div>\n          </div>\n        </ion-label>\n      </ion-list-header>\n\n\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio slot=\"start\" value=\"sim\" checked></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>As vezes</ion-label>\n        <ion-radio slot=\"start\" value=\"asvezes\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n      </ion-item>\n\n\n    </ion-list>\n\n    <div class=\"rodape ion-text-center\">\n      <ion-button class=\"voltar\" href=\"opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>voltar</b>\n      </ion-button>\n      <ion-button class=\"menu\" href=\"opcoes\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\"><b>menu</b>\n      </ion-button>\n      <ion-button class=\"proximo\" href=\"/saude-vaginal-dois\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b>\n      </ion-button>\n    </div>\n\n    <ion-fab>\n      <ion-fab-button href=\"/saude-vaginal-dicas\">\n        <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n      </ion-fab-button>\n    </ion-fab>\n\n  </div>\n</ion-content>"

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

module.exports = ".backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background-image: url('saude.jpeg');\n  background-size: 100% 100%;\n  width: 100%;\n}\n\nion-list {\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 110px;\n  border-radius: 25px;\n}\n\nion-radio {\n  --color-checked: #ff6c92;\n}\n\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\n\nimg {\n  height: 25px;\n}\n\nion-fab {\n  top: 125px;\n  margin-left: 75%;\n}\n\n.text {\n  width: 300px;\n  margin-left: 9%;\n}\n\nion-fab-button {\n  width: 85px;\n  height: 85px;\n}\n\n.boneca {\n  width: 100px;\n  height: 100px;\n}\n\n.rodape {\n  margin-top: 5px;\n  margin-bottom: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsL3NhdWRlLXZhZ2luYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsL3NhdWRlLXZhZ2luYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QURBQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ01KOztBREpBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zYXVkZS12YWdpbmFsL3NhdWRlLXZhZ2luYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYmFja2dyb3VkOiAjYzhmZmZmOyBcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvc2F1ZGUuanBlZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2I1ZjBmMDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBcbn1cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2I1ZjBmMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pbWd7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG5pb24tZmFie1xuICAgIHRvcDogMTI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTsgICAgXG59XG4udGV4dHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDklO1xufVxuaW9uLWZhYi1idXR0b257XG4gICAgd2lkdGg6IDg1cHg7XG4gICAgaGVpZ2h0OiA4NXB4O1xufVxuLmJvbmVjYXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cbi5yb2RhcGV7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XG59XG4iLCIuYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91ZDogI2M4ZmZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zYXVkZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDExMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG5pb24tZmFiIHtcbiAgdG9wOiAxMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuLnRleHQge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA5JTtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogODVweDtcbiAgaGVpZ2h0OiA4NXB4O1xufVxuXG4uYm9uZWNhIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ucm9kYXBlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1NXB4O1xufSJdfQ== */"

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



var SaudeVaginalPage = /** @class */ (function () {
    function SaudeVaginalPage(platform) {
        var _this = this;
        this.platform = platform;
        this.corrimento = [];
        this.ardor = [];
        this.platform.ready().then(function () {
            _this.ardor = [{ id: 1, name: "Nenhum" },
                { id: 2, name: "Baixo" },
                { id: 3, name: "Médio" },
                { id: 4, name: "Intenso" }];
        });
    }
    SaudeVaginalPage.prototype.ngOnInit = function () {
    };
    SaudeVaginalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
    ]; };
    SaudeVaginalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-saude-vaginal',
            template: __webpack_require__(/*! raw-loader!./saude-vaginal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/saude-vaginal/saude-vaginal.page.html"),
            styles: [__webpack_require__(/*! ./saude-vaginal.page.scss */ "./src/app/pages/saude-vaginal/saude-vaginal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]])
    ], SaudeVaginalPage);
    return SaudeVaginalPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-saude-vaginal-saude-vaginal-module-es5.js.map