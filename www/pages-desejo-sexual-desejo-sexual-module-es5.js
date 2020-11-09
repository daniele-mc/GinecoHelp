(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-desejo-sexual-desejo-sexual-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/desejo-sexual/desejo-sexual.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/desejo-sexual/desejo-sexual.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backgroud ion-text-center\">\n    <div class=\"title ion-text-center\">Sexo</div>\n    <ion-list>\n      <br>\n      <div class=\"cabecalho\">\n        <img src=\"../../../assets/icon/sexo.png\">\n        <ion-label class=\"titu ion-text-center\"><b> Sexo e desejo sexual</b>\n        </ion-label>\n      </div>\n      <br>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>É normal não sentir desejo sexual nas relações?</b>\n          </ion-label>\n        </ion-list-header>\n        <div class=\"coluna1\">\n          <ion-item>\n            <ion-label>Sim</ion-label>\n            <ion-radio slot=\"start\" value=\"sim\" ></ion-radio>\n          </ion-item>\n        </div>\n\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <br>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Como conseguir ter orgasmo?</b>\n            <ion-input></ion-input>\n          </ion-label>\n        </ion-list-header>\n      </ion-radio-group>\n\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Masturbação é algo natural?</b>\n          </ion-label>\n        </ion-list-header>\n        <div class=\"coluna1\">\n          <ion-item>\n            <ion-label>Sim</ion-label>\n            <ion-radio slot=\"start\" value=\"sim\"></ion-radio>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio slot=\"start\" value=\"nao\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n      <br>\n      <div class=\"cabecalho\">\n        <img src=\"../../../assets/icon/stop.png\">\n        <ion-label class=\"titu ion-text-center\"><b> Abuso sexual</b>\n        </ion-label>\n      </div>\n      <br>\n      <ion-radio-group>\n        <ion-list-header>\n          <ion-label><b>Quando saber se sofreu um abuso sexual?</b>\n            <ion-input class=\"text\"></ion-input>\n          </ion-label>\n        </ion-list-header>\n      </ion-radio-group>\n    </ion-list>\n    <div class=\"rodape ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"back()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>voltar</b></ion-button>\n      <ion-button color=\"primary\" (click)=\"menu()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>menu</b></ion-button>\n      <ion-button color=\"primary\" (click)=\"next()\" style=\"font-family: Verdana, Geneva, Tahoma, sans-serif\">\n        <b>próximo</b></ion-button>\n\n    </div>\n  </div>\n  <ion-fab class=\"desejo\">\n    <ion-fab-button (click)=\"presentAlert3()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab class=\"orgasmo\">\n    <ion-fab-button (click)=\"presentAlert1()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab class=\"abuso\">\n    <ion-fab-button (click)=\"presentAlert2()\">\n      <img src=\"../../../assets/icon/gyneco.png\" class=\"boneca\">\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/desejo-sexual/desejo-sexual-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/desejo-sexual/desejo-sexual-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DesejoSexualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesejoSexualPageRoutingModule", function() { return DesejoSexualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _desejo_sexual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desejo-sexual.page */ "./src/app/pages/desejo-sexual/desejo-sexual.page.ts");




var routes = [
    {
        path: '',
        component: _desejo_sexual_page__WEBPACK_IMPORTED_MODULE_3__["DesejoSexualPage"]
    }
];
var DesejoSexualPageRoutingModule = /** @class */ (function () {
    function DesejoSexualPageRoutingModule() {
    }
    DesejoSexualPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DesejoSexualPageRoutingModule);
    return DesejoSexualPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/desejo-sexual/desejo-sexual.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/desejo-sexual/desejo-sexual.module.ts ***!
  \*************************************************************/
/*! exports provided: DesejoSexualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesejoSexualPageModule", function() { return DesejoSexualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _desejo_sexual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desejo-sexual-routing.module */ "./src/app/pages/desejo-sexual/desejo-sexual-routing.module.ts");
/* harmony import */ var _desejo_sexual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desejo-sexual.page */ "./src/app/pages/desejo-sexual/desejo-sexual.page.ts");







var DesejoSexualPageModule = /** @class */ (function () {
    function DesejoSexualPageModule() {
    }
    DesejoSexualPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _desejo_sexual_routing_module__WEBPACK_IMPORTED_MODULE_5__["DesejoSexualPageRoutingModule"]
            ],
            declarations: [_desejo_sexual_page__WEBPACK_IMPORTED_MODULE_6__["DesejoSexualPage"]]
        })
    ], DesejoSexualPageModule);
    return DesejoSexualPageModule;
}());



/***/ }),

/***/ "./src/app/pages/desejo-sexual/desejo-sexual.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/desejo-sexual/desejo-sexual.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap\");\n.backgroud {\n  position: absolute;\n  --backgroud: #c8ffff;\n  padding: 0px;\n  background: url('back.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  position: relative;\n  font-size: 38px;\n  font-family: \"Amatic SC\", cursive;\n  color: #6d4c80;\n  text-align: center;\n  margin-top: 10%;\n}\nion-list {\n  position: relative;\n  background-color: #b5f0f0;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 3%;\n  border-radius: 25px;\n}\n.cabecalho {\n  margin-right: 20px;\n}\nion-radio {\n  --color-checked: #ff6c92;\n}\nion-item {\n  --background:#b5f0f0;\n  --border-radius: 10px;\n}\nimg {\n  height: 33px;\n}\nion-list-header {\n  margin-left: 2%;\n}\nion-input {\n  --background: #c8ffff;\n  --color: #4a1c75;\n  text-align: left;\n  border-radius: 25px;\n}\n.text {\n  width: 280px;\n}\nion-fab {\n  position: absolute;\n  bottom: 55px;\n  margin-left: 80%;\n}\n.desejo {\n  top: 30%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\n.orgasmo {\n  top: 40%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\n.abuso {\n  top: 50%;\n  position: absolute;\n  right: 8%;\n  height: 80px;\n}\nion-fab-button {\n  width: 75px;\n  height: 75px;\n}\n.boneca {\n  width: 65px;\n  height: 80px;\n}\n.coluna1 {\n  width: 50%;\n  margin-left: 1px;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvRG9jdW1lbnRzL2JvbHNhL2FwL0dpbmVjb0hlbHAvc3JjL2FwcC9wYWdlcy9kZXNlam8tc2V4dWFsL2Rlc2Vqby1zZXh1YWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXNlam8tc2V4dWFsL2Rlc2Vqby1zZXh1YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVGQUFBO0FBQ1I7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNFSjtBREFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNHSjtBRERBO0VBQ0ksa0JBQUE7QUNJSjtBRERBO0VBQ0ksd0JBQUE7QUNJSjtBREZBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ0tKO0FESEE7RUFDSSxZQUFBO0FDTUo7QURIQTtFQUNJLGVBQUE7QUNNSjtBREpBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNPSjtBRExBO0VBQ0ksWUFBQTtBQ1FKO0FETkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1NKO0FEUEE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ1VKO0FEUkE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ1dKO0FEVEE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ1lKO0FEVkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2FKO0FEWEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2NKO0FEWkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDZUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXNlam8tc2V4dWFsL2Rlc2Vqby1zZXh1YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xuLmJhY2tncm91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYmFja2dyb3VkOiAjYzhmZmZmOyBcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi50aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgY29sb3I6ICM2ZDRjODA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cbmlvbi1saXN0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiNWYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7ICBcbn1cbi5jYWJlY2FsaG97XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG59XG5pb24tcmFkaW97XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmY2YzkyO1xufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW1ne1xuICAgIGhlaWdodDogMzNweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVye1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn1cbmlvbi1pbnB1dHtcbiAgICAtLWJhY2tncm91bmQ6ICNjOGZmZmY7XG4gICAgLS1jb2xvcjogIzRhMWM3NTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4udGV4dHtcbiAgICB3aWR0aDogMjgwcHg7XG59XG5pb24tZmFie1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDU1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbn1cbi5kZXNlam97XG4gICAgdG9wOiAzMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA4JTtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG4ub3JnYXNtb3tcbiAgICB0b3A6IDQwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDglO1xuICAgIGhlaWdodDogODBweDtcbn1cbi5hYnVzb3tcbiAgICB0b3A6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDglO1xuICAgIGhlaWdodDogODBweDtcbn1cbmlvbi1mYWItYnV0dG9ue1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogNzVweDtcbn1cbi5ib25lY2F7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuLmNvbHVuYTF7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG4uYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91ZDogI2M4ZmZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNmQ0YzgwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuaW9uLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWYwZjA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uY2FiZWNhbGhvIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmZjZjOTI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiNiNWYwZjA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogI2M4ZmZmZjtcbiAgLS1jb2xvcjogIzRhMWM3NTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnRleHQge1xuICB3aWR0aDogMjgwcHg7XG59XG5cbmlvbi1mYWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTVweDtcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcbn1cblxuLmRlc2VqbyB7XG4gIHRvcDogMzAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4JTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ub3JnYXNtbyB7XG4gIHRvcDogNDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4JTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uYWJ1c28ge1xuICB0b3A6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOCU7XG4gIGhlaWdodDogODBweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuXG4uYm9uZWNhIHtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmNvbHVuYTEge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/desejo-sexual/desejo-sexual.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/desejo-sexual/desejo-sexual.page.ts ***!
  \***********************************************************/
/*! exports provided: DesejoSexualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesejoSexualPage", function() { return DesejoSexualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/health.service */ "./src/app/services/health.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");








var DesejoSexualPage = /** @class */ (function () {
    function DesejoSexualPage(AlertController, healthService, loadingCtrl, toastCtrl, authService, activeRoute, router) {
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
    DesejoSexualPage.prototype.presentAlert3 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'É normal não sentir desejo sexual nas relações sexuais?',
                            message: 'Não é normal. Se isso acontecer é  porque tem algum problema e é preciso perguntar ao ginecologista o que pode ser feito para melhorar o desejo sexual.',
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    DesejoSexualPage.prototype.presentAlert1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'Como conseguir ter  orgasmo?',
                            message: 'O órgão do orgasmo na mulher é o clitóris. Menos de 30% das mulheres tem orgasmo com o movimento do pênis dentro da vagina. 70% dependem de manipulação do clitóris (masturbação).',
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    DesejoSexualPage.prototype.presentAlert2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            header: 'Abuso sexual',
                            message: 'Se você sofreu abuso sexual fale com seu ginecologista ou com um psicólogo que eles podem te ajudar.',
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    DesejoSexualPage.prototype.ngOnInit = function () {
        this.formattingDay();
        this.check();
    };
    DesejoSexualPage.prototype.formattingDay = function () {
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
    DesejoSexualPage.prototype.check = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.healthService.checkExists(this.today)];
                    case 1:
                        if ((_a.sent()) == true) {
                            this.loadHealth();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DesejoSexualPage.prototype.loadHealth = function () {
        var _this = this;
        this.healthSubscription = this.healthService.getHealth(this.today).subscribe(function (data) {
            _this.health = data;
        });
    };
    DesejoSexualPage.prototype.back = function () {
        this.saveHealth();
        return this.router.navigate(["/saude-relacoes"]);
    };
    DesejoSexualPage.prototype.menu = function () {
        this.saveHealth();
        return this.router.navigate(["/opcoes"]);
    };
    DesejoSexualPage.prototype.next = function () {
        this.saveHealth();
        return this.router.navigate(["/gravidez"]);
    };
    DesejoSexualPage.prototype.saveHealth = function () {
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
    DesejoSexualPage.prototype.presentLoading = function () {
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
    DesejoSexualPage.prototype.presentToast = function (message) {
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
    DesejoSexualPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    DesejoSexualPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-desejo-sexual',
            template: __webpack_require__(/*! raw-loader!./desejo-sexual.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/desejo-sexual/desejo-sexual.page.html"),
            styles: [__webpack_require__(/*! ./desejo-sexual.page.scss */ "./src/app/pages/desejo-sexual/desejo-sexual.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_health_service__WEBPACK_IMPORTED_MODULE_4__["HealthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DesejoSexualPage);
    return DesejoSexualPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-desejo-sexual-desejo-sexual-module-es5.js.map