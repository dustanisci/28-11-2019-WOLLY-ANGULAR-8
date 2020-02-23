(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_mocky_mocky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/mocky/mocky */ "./src/app/shared/mocky/mocky.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_pipe_phone_phone_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipe/phone/phone.pipe */ "./src/app/shared/pipe/phone/phone.pipe.ts");
/* harmony import */ var _shared_interface_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/interface/contact */ "./src/app/shared/interface/contact.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/banner/banner.component */ "./src/app/shared/components/banner/banner.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/alert/alert.component */ "./src/app/shared/components/alert/alert.component.ts");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/card/card.component */ "./src/app/shared/components/card/card.component.ts");
/* harmony import */ var _shared_components_label_description_label_description_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/label-description/label-description.component */ "./src/app/shared/components/label-description/label-description.component.ts");













function AppComponent_app_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 16);
} if (rf & 2) {
    const card_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", card_r2.title)("description", card_r2.description)("img", card_r2.img)("link", card_r2.link);
} }
function AppComponent_app_label_description_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-label-description", 17);
} if (rf & 2) {
    const contact_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", contact_r3.label)("description", contact_r3.description);
} }
const _c0 = function (a0) { return { disabled: a0 }; };
const _c1 = function (a0) { return { opacity: a0 }; };
class AppComponent {
    constructor(fb, appService) {
        this.fb = fb;
        this.appService = appService;
        this.navbar = _shared_mocky_mocky__WEBPACK_IMPORTED_MODULE_1__["navbar"];
        this.cards = _shared_mocky_mocky__WEBPACK_IMPORTED_MODULE_1__["cards"];
        this.contacts = _shared_mocky_mocky__WEBPACK_IMPORTED_MODULE_1__["contact"];
        this.phone = new _shared_pipe_phone_phone_pipe__WEBPACK_IMPORTED_MODULE_3__["PhonePipe"]();
        this.contact = new _shared_interface_contact__WEBPACK_IMPORTED_MODULE_4__["Contact"]();
        this.contactForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(14), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
            msg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    hideMsg() {
        setTimeout(() => {
            this.alertType = null;
        }, 1500);
    }
    sendContact() {
        this.contact.name = this.contactForm.get('name').value;
        this.contact.mail = this.contactForm.get('mail').value;
        this.contact.msg = this.contactForm.get('msg').value;
        this.contact.phone = this.contactForm.get('phone').value;
        this.appService.send(this.contact).subscribe((result) => {
            this.alertType = 1;
            this.hideMsg();
            this.contactForm.reset();
        }, () => {
            this.alertType = 2;
            this.hideMsg();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 15, consts: [[1, "container"], [3, "navbar", "url", "description"], [1, "row"], [1, "retreat"], [3, "title", "description", "img", "link", 4, "ngFor", "ngForOf"], [1, "grid"], [3, "label", "description", 4, "ngFor", "ngForOf"], ["ngNativeValidate", "", 1, "grid", 3, "formGroup", "ngSubmit"], [1, "retreat-padding"], ["formControlName", "name", "type", "text", "placeholder", "Seu Nome"], ["formControlName", "mail", "type", "email", "placeholder", "Seu E-mail"], ["formControlName", "phone", "maxlength", "15", "type", "text", "placeholder", "Seu Telefone", 3, "keyup"], ["formControlName", "msg", "placeholder", "Sua Mensagem"], [1, "container-btn"], ["type", "submit", 3, "disabled", "ngClass"], [3, "ngStyle", "msg", "type"], [3, "title", "description", "img", "link"], [3, "label", "description"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_card_5_Template, 1, 4, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_app_label_description_10_Template, 1, 2, "app-label-description", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_11_listener($event) { return ctx.sendContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AppComponent_Template_input_keyup_15_listener($event) { return ctx.contactForm.get("phone").setValue(ctx.phone.transform(ctx.contactForm.get("phone").value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-alert", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navbar", ctx.navbar)("url", "./assets/img/banner.jpg")("description", "N\u00F3s somos especialistas no que fazemos pois somos conectados com o mundo, conectados com o seu mundo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.contactForm.invalid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.contactForm.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.alertType ? "1" : "0"))("msg", ctx.alertType === 1 ? "Sua mensagem foi enviada com sucesso!!" : "Falha na sua mensagem, tente novamente!!")("type", ctx.alertType);
    } }, directives: [_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"], _shared_components_label_description_label_description_component__WEBPACK_IMPORTED_MODULE_10__["LabelDescriptionComponent"]], styles: [".container[_ngcontent-%COMP%]:nth-of-type(3)   .row[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]:nth-of-type(2)   .row[_ngcontent-%COMP%] {\n  padding: 50px 0;\n  background: #FFF;\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(2), .container[_ngcontent-%COMP%]:nth-of-type(3) {\n  margin-top: 25px;\n  display: block;\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(2)   .row[_ngcontent-%COMP%] {\n  min-height: 400px;\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(2)   .row[_ngcontent-%COMP%]   .retreat[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n}\n\n@media only screen and (max-width: 850px) {\n  .container[_ngcontent-%COMP%]:nth-of-type(2)   .row[_ngcontent-%COMP%]   .retreat[_ngcontent-%COMP%] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(2)   .row[_ngcontent-%COMP%]   .retreat[_ngcontent-%COMP%]   app-card[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 50px;\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(2)   .row[_ngcontent-%COMP%]   .retreat[_ngcontent-%COMP%]   app-card[_ngcontent-%COMP%]:first-child {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(2)   .row[_ngcontent-%COMP%]   .retreat[_ngcontent-%COMP%]   app-card[_ngcontent-%COMP%]:nth-of-type(2) {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(2)   .row[_ngcontent-%COMP%]   .retreat[_ngcontent-%COMP%]   app-card[_ngcontent-%COMP%]:last-child {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(3) {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 30px;\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(3)   .retreat[_ngcontent-%COMP%] {\n  align-content: stretch;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n}\n\n@media only screen and (max-width: 850px) {\n  .container[_ngcontent-%COMP%]:nth-of-type(3)   .retreat[_ngcontent-%COMP%] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(3)   .retreat[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  position: relative;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(3)   .retreat[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .retreat-padding[_ngcontent-%COMP%] {\n  padding: 0 45px 0 0;\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(3)   .retreat[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   app-label-description[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n  display: block;\n}\n\n@media only screen and (max-width: 850px) {\n  .container[_ngcontent-%COMP%]:nth-of-type(3)   .retreat[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   app-label-description[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(3)   .retreat[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]:nth-of-type(3)   .retreat[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid grey;\n  padding: 20px;\n  display: block;\n  width: 100%;\n  margin-bottom: 20px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(3)   .retreat[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  height: 80px;\n  display: block;\n  flex-basis: auto;\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(3)   .retreat[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .container-btn[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n@media only screen and (max-width: 850px) {\n  .container[_ngcontent-%COMP%]:nth-of-type(3)   .retreat[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .container-btn[_ngcontent-%COMP%] {\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(3)   .retreat[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .container-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #581111;\n  color: #FFFFFF;\n  border: none;\n  border-radius: 5px;\n  -webkit-transition: 0.4s all;\n  transition: 0.4s all;\n  font-size: 12pt;\n  width: 140px;\n  padding: 20px;\n  cursor: pointer;\n  margin-top: 10px;\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(3)   .retreat[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .container-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: rgba(88, 17, 17, 0.9);\n}\n\n.container[_ngcontent-%COMP%]:nth-of-type(3)   .retreat[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .container-btn[_ngcontent-%COMP%]   button.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHJlcG9zaXRvcmlvc1xcY29udGFjdC1wYWdlLWFuZ3VsYXI5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTs7RUFFRSxnQkFBQTtFQUNBLGNBQUE7QUNERjs7QURLRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBRElJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0ZOOztBRElNO0VBTEY7SUFNSSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNETjtBQUNGOztBREdNO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURJTTtFQUNFLHVCQUFBO1VBQUEsMkJBQUE7QUNGUjs7QURLTTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNIUjs7QURNTTtFQUNFLHFCQUFBO1VBQUEseUJBQUE7QUNKUjs7QURVQTtFQUNFLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO0FDUEY7O0FEU0U7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ1BKOztBRFNJO0VBTEY7SUFNSSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNOSjtBQUNGOztBRFFJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDTk47O0FEUU07RUFDRSxtQkFBQTtBQ05SOztBRFNNO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDUFI7O0FEU1E7RUFKRjtJQUtJLGtCQUFBO0VDTlI7QUFDRjs7QURTTTs7RUFFRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDUFI7O0FEVU07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1JSOztBRFdNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ1RSOztBRFdRO0VBSkY7SUFLSSx3QkFBQTtZQUFBLHVCQUFBO0VDUlI7QUFDRjs7QURVUTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNSVjs7QURVVTtFQUNFLGlDQUFBO0FDUlo7O0FEV1U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNUWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJwYWxldHRlL3BhbGV0dGVcIjtcclxuXHJcbi5jb250YWluZXI6bnRoLW9mLXR5cGUoMykgLnJvdyxcclxuLmNvbnRhaW5lcjpudGgtb2YtdHlwZSgyKSAucm93IHtcclxuICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgYmFja2dyb3VuZDogI0ZGRjtcclxufVxyXG5cclxuLmNvbnRhaW5lcjpudGgtb2YtdHlwZSgyKSxcclxuLmNvbnRhaW5lcjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNvbnRhaW5lcjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgLnJvdyB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5yZXRyZWF0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcHAtY2FyZCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFwcC1jYXJkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFwcC1jYXJkOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXBwLWNhcmQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lcjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206MzBweDtcclxuXHJcbiAgLnJldHJlYXQge1xyXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgLnJldHJlYXQtcGFkZGluZ3tcclxuICAgICAgICBwYWRkaW5nOiAwIDQ1cHggMCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcHAtbGFiZWwtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgZmxleC1iYXNpczogYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRhaW5lci1idG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigndGhlbWUnLCAxKTtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC40cyBhbGw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigndGhlbWUtb3BhY2l0eScsIDkwKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmRpc2FibGVke1xyXG4gICAgICAgICAgICBjdXJzb3I6bm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lcjpudGgtb2YtdHlwZSgzKSAucm93LFxuLmNvbnRhaW5lcjpudGgtb2YtdHlwZSgyKSAucm93IHtcbiAgcGFkZGluZzogNTBweCAwO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xufVxuXG4uY29udGFpbmVyOm50aC1vZi10eXBlKDIpLFxuLmNvbnRhaW5lcjpudGgtb2YtdHlwZSgzKSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udGFpbmVyOm50aC1vZi10eXBlKDIpIC5yb3cge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyOm50aC1vZi10eXBlKDIpIC5yb3cgLnJldHJlYXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICAuY29udGFpbmVyOm50aC1vZi10eXBlKDIpIC5yb3cgLnJldHJlYXQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5jb250YWluZXI6bnRoLW9mLXR5cGUoMikgLnJvdyAucmV0cmVhdCBhcHAtY2FyZCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uY29udGFpbmVyOm50aC1vZi10eXBlKDIpIC5yb3cgLnJldHJlYXQgYXBwLWNhcmQ6Zmlyc3QtY2hpbGQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uY29udGFpbmVyOm50aC1vZi10eXBlKDIpIC5yb3cgLnJldHJlYXQgYXBwLWNhcmQ6bnRoLW9mLXR5cGUoMikge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXI6bnRoLW9mLXR5cGUoMikgLnJvdyAucmV0cmVhdCBhcHAtY2FyZDpsYXN0LWNoaWxkIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNvbnRhaW5lcjpudGgtb2YtdHlwZSgzKSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uY29udGFpbmVyOm50aC1vZi10eXBlKDMpIC5yZXRyZWF0IHtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmNvbnRhaW5lcjpudGgtb2YtdHlwZSgzKSAucmV0cmVhdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmNvbnRhaW5lcjpudGgtb2YtdHlwZSgzKSAucmV0cmVhdCAuZ3JpZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufVxuLmNvbnRhaW5lcjpudGgtb2YtdHlwZSgzKSAucmV0cmVhdCAuZ3JpZCAucmV0cmVhdC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCA0NXB4IDAgMDtcbn1cbi5jb250YWluZXI6bnRoLW9mLXR5cGUoMykgLnJldHJlYXQgLmdyaWQgYXBwLWxhYmVsLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5jb250YWluZXI6bnRoLW9mLXR5cGUoMykgLnJldHJlYXQgLmdyaWQgYXBwLWxhYmVsLWRlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5jb250YWluZXI6bnRoLW9mLXR5cGUoMykgLnJldHJlYXQgLmdyaWQgaW5wdXQsXG4uY29udGFpbmVyOm50aC1vZi10eXBlKDMpIC5yZXRyZWF0IC5ncmlkIHRleHRhcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWluZXI6bnRoLW9mLXR5cGUoMykgLnJldHJlYXQgLmdyaWQgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtYmFzaXM6IGF1dG87XG59XG4uY29udGFpbmVyOm50aC1vZi10eXBlKDMpIC5yZXRyZWF0IC5ncmlkIC5jb250YWluZXItYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmNvbnRhaW5lcjpudGgtb2YtdHlwZSgzKSAucmV0cmVhdCAuZ3JpZCAuY29udGFpbmVyLWJ0biB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5jb250YWluZXI6bnRoLW9mLXR5cGUoMykgLnJldHJlYXQgLmdyaWQgLmNvbnRhaW5lci1idG4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzU4MTExMTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAwLjRzIGFsbDtcbiAgZm9udC1zaXplOiAxMnB0O1xuICB3aWR0aDogMTQwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jb250YWluZXI6bnRoLW9mLXR5cGUoMykgLnJldHJlYXQgLmdyaWQgLmNvbnRhaW5lci1idG4gYnV0dG9uOmhvdmVyOm5vdCguZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogcmdiYSg4OCwgMTcsIDE3LCAwLjkpO1xufVxuLmNvbnRhaW5lcjpudGgtb2YtdHlwZSgzKSAucmV0cmVhdCAuZ3JpZCAuY29udGFpbmVyLWJ0biBidXR0b24uZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/banner/banner.component */ "./src/app/shared/components/banner/banner.component.ts");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/card/card.component */ "./src/app/shared/components/card/card.component.ts");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _shared_components_label_description_label_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/label-description/label-description.component */ "./src/app/shared/components/label-description/label-description.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_pipe_phone_phone_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/pipe/phone/phone.pipe */ "./src/app/shared/pipe/phone/phone.pipe.ts");
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/alert/alert.component */ "./src/app/shared/components/alert/alert.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"],
        _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
        _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _shared_components_label_description_label_description_component__WEBPACK_IMPORTED_MODULE_6__["LabelDescriptionComponent"],
        _shared_pipe_phone_phone_pipe__WEBPACK_IMPORTED_MODULE_8__["PhonePipe"],
        _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"],
                    _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
                    _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _shared_components_label_description_label_description_component__WEBPACK_IMPORTED_MODULE_6__["LabelDescriptionComponent"],
                    _shared_pipe_phone_phone_pipe__WEBPACK_IMPORTED_MODULE_8__["PhonePipe"],
                    _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
                ],
                providers: [
                    _app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/api/api.service */ "./src/app/shared/api/api.service.ts");




class AppService {
    constructor(apiservice) {
        this.apiservice = apiservice;
    }
    send(contact) {
        return this.apiservice.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].contact}`, contact);
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/api/api.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/api/api.service.ts ***!
  \*******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ApiService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json');
        this.request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
    }
    setHeaders(request) {
        if (request) {
            this.request = {};
            Object.keys(request).map(key => {
                this.request.append(key, request[key]);
            });
        }
    }
    get(url, request) {
        this.setHeaders(request);
        return this.http.get(url, { headers: this.headers, params: this.request });
    }
    post(url, value, request) {
        this.setHeaders(request);
        return this.http.post(url, value, { headers: this.headers, params: this.request });
    }
    put(url, id, value, request) {
        this.setHeaders(request);
        return this.http.put(`${url}/${id}`, value, { headers: this.headers, params: this.request });
    }
    delete(url, id, request) {
        this.setHeaders(request);
        return this.http.delete(`${url}/${id}`, { headers: this.headers, params: this.request });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function AlertComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.msg);
} }
const _c0 = function (a0, a1) { return { "error": a0, "success": a1 }; };
class AlertComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], inputs: { type: "type", msg: "msg" }, decls: 2, vars: 5, consts: [[3, "ngClass"], [4, "ngIf"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlertComponent_label_1_Template, 2, 1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.type === 2, ctx.type === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["div[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 300px;\n  height: 50px;\n  z-index: 1;\n  color: #FFF;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  opacity: 0;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\ndiv.success[_ngcontent-%COMP%] {\n  opacity: 1;\n  background: green;\n}\ndiv.error[_ngcontent-%COMP%] {\n  background: red;\n  opacity: 1;\n}\ndiv[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQvQzpcXHJlcG9zaXRvcmlvc1xcY29udGFjdC1wYWdlLWFuZ3VsYXI5L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGFsZXJ0XFxhbGVydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNDSjtBRENJO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDQ047QURFSTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FDQU47QURHSTtFQUNFLGtCQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgZGl2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3BhY2l0eTowO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIFxyXG4gICAgJi5zdWNjZXNzIHtcclxuICAgICAgb3BhY2l0eToxO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgIH1cclxuXHJcbiAgICAmLmVycm9yIHtcclxuICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfSIsImRpdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjRkZGO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5kaXYuc3VjY2VzcyB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xufVxuZGl2LmVycm9yIHtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBvcGFjaXR5OiAxO1xufVxuZGl2IGxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.scss']
            }]
    }], function () { return []; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], msg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/banner/banner.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/banner/banner.component.ts ***!
  \**************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");




function BannerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.description);
} }
class BannerComponent {
    constructor() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], inputs: { url: "url", description: "description", navbar: "navbar" }, decls: 3, vars: 4, consts: [[1, "banner"], ["class", "description container", 4, "ngIf"], [3, "items"], [1, "description", "container"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.url + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navbar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], styles: [".banner[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: top;\n  height: 400px;\n  position: relative;\n  text-align: center;\n}\n.banner[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  width: 700px;\n}\n@media only screen and (max-width: 850px) {\n  .banner[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n.banner[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  display: block;\n  background: rgba(255, 255, 255, 0.6);\n  margin-top: 50px;\n  font-family: \"advent-pro\";\n  font-size: 25pt;\n  padding: 5% 10%;\n  color: #581111;\n}\n@media only screen and (max-width: 850px) {\n  .banner[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 20pt;\n  }\n}\n.banner[_ngcontent-%COMP%]   app-navbar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmFubmVyL0M6XFxyZXBvc2l0b3Jpb3NcXGNvbnRhY3QtcGFnZS1hbmd1bGFyOS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxiYW5uZXJcXGJhbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNERjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDREo7QURHSTtFQVJGO0lBU0ksV0FBQTtFQ0FKO0FBQ0Y7QURFSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FOO0FERU07RUFWRjtJQVdJLGVBQUE7RUNDTjtBQUNGO0FER0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJwYWxldHRlL3BhbGV0dGVcIjtcclxuXHJcbi5iYW5uZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IHRvcDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA3MDBweDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ2FkdmVudC1wcm8nO1xyXG4gICAgICBmb250LXNpemU6IDI1cHQ7XHJcbiAgICAgIHBhZGRpbmc6IDUlIDEwJTtcclxuICAgICAgY29sb3I6IHBhbGV0dGUtY29sb3IoJ3RoZW1lJywgMSk7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHAtbmF2YmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbn0iLCIuYmFubmVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogdG9wO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5iYW5uZXIgLmRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDcwMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICAuYmFubmVyIC5kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbi5iYW5uZXIgLmRlc2NyaXB0aW9uIGxhYmVsIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LWZhbWlseTogXCJhZHZlbnQtcHJvXCI7XG4gIGZvbnQtc2l6ZTogMjVwdDtcbiAgcGFkZGluZzogNSUgMTAlO1xuICBjb2xvcjogIzU4MTExMTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmJhbm5lciAuZGVzY3JpcHRpb24gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgfVxufVxuLmJhbm5lciBhcHAtbmF2YmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss']
            }]
    }], function () { return []; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], navbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/card/card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardComponent {
    constructor() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { title: "title", description: "description", img: "img", link: "link" }, decls: 8, vars: 3, consts: [[3, "src"], ["href", "link"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Conferir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, styles: ["div[_ngcontent-%COMP%], div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 300px;\n}\n@media only screen and (max-width: 1130px) {\n  div[_ngcontent-%COMP%], div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\ndiv[_ngcontent-%COMP%] {\n  border: 1px dotted #581111;\n  min-height: 100px;\n  position: relative;\n  display: inline-block;\n}\ndiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: #000;\n  font-size: 20pt;\n  margin: 10px 0 20px 0;\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #581111;\n  font-size: 14pt;\n  text-align: center;\n  display: block;\n  margin: 0 auto 20px auto;\n  padding: 0 10px;\n}\ndiv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #FFF;\n  background: #581111;\n  border-radius: 4px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 90%;\n  margin: 0 auto 10px auto;\n  padding: 20px 0 20px 0;\n  font-size: 14pt;\n  font-weight: 500;\n  cursor: pointer;\n}\ndiv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(88, 17, 17, 0.9);\n  -webkit-transition: 0.4s all;\n  transition: 0.4s all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9DOlxccmVwb3NpdG9yaW9zXFxjb250YWN0LXBhZ2UtYW5ndWxhcjkvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcY2FyZFxcY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBQTtBQ0ZGO0FER0U7RUFGRjtJQUdJLFlBQUE7RUNBRjtBQUNGO0FER0E7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0FGO0FERUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FESUU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNGSjtBRElJO0VBQ0UsaUNBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwicGFsZXR0ZS9wYWxldHRlXCI7XHJcblxyXG5cclxuZGl2LCBkaXYgPiBpbWd7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEzMHB4KSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5kaXYge1xyXG4gIGJvcmRlcjogMXB4IGRvdHRlZCBwYWxldHRlLWNvbG9yKCd0aGVtZScsIDEpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGNvbG9yOiBwYWxldHRlLWNvbG9yKCd0aGVtZScsIDEpO1xyXG4gICAgZm9udC1zaXplOiAxNHB0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigndGhlbWUnLCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigndGhlbWUtb3BhY2l0eScsIDkwKTtcclxuICAgICAgdHJhbnNpdGlvbjogMC40cyBhbGw7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiZGl2LCBkaXYgPiBpbWcge1xuICB3aWR0aDogMzAwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMzBweCkge1xuICBkaXYsIGRpdiA+IGltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG59XG5cbmRpdiB7XG4gIGJvcmRlcjogMXB4IGRvdHRlZCAjNTgxMTExO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5kaXYgaDIge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyMHB0O1xuICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdiBsYWJlbCB7XG4gIGNvbG9yOiAjNTgxMTExO1xuICBmb250LXNpemU6IDE0cHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvIDIwcHggYXV0bztcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuZGl2IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kOiAjNTgxMTExO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZGl2IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDg4LCAxNywgMTcsIDAuOSk7XG4gIHRyYW5zaXRpb246IDAuNHMgYWxsO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], img: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/label-description/label-description.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/label-description/label-description.component.ts ***!
  \************************************************************************************/
/*! exports provided: LabelDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelDescriptionComponent", function() { return LabelDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LabelDescriptionComponent {
    constructor() {
    }
}
LabelDescriptionComponent.ɵfac = function LabelDescriptionComponent_Factory(t) { return new (t || LabelDescriptionComponent)(); };
LabelDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabelDescriptionComponent, selectors: [["app-label-description"]], inputs: { label: "label", description: "description" }, decls: 4, vars: 2, template: function LabelDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label + ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, styles: ["label[_ngcontent-%COMP%]:first-child {\n  color: #581111;\n  font-size: 16pt;\n  display: block;\n  font-weight: bold;\n}\n\nlabel[_ngcontent-%COMP%]:last-child {\n  color: #000;\n  font-size: 12pt;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGFiZWwtZGVzY3JpcHRpb24vQzpcXHJlcG9zaXRvcmlvc1xcY29udGFjdC1wYWdlLWFuZ3VsYXI5L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGxhYmVsLWRlc2NyaXB0aW9uXFxsYWJlbC1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGFiZWwtZGVzY3JpcHRpb24vbGFiZWwtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGFiZWwtZGVzY3JpcHRpb24vbGFiZWwtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwicGFsZXR0ZS9wYWxldHRlXCI7XHJcblxyXG5sYWJlbDpmaXJzdC1jaGlsZCB7XHJcbiAgY29sb3I6IHBhbGV0dGUtY29sb3IoJ3RoZW1lJywgMSk7XHJcbiAgZm9udC1zaXplOiAxNnB0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5sYWJlbDpsYXN0LWNoaWxkIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCJsYWJlbDpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiAjNTgxMTExO1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxubGFiZWw6bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabelDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-label-description',
                templateUrl: './label-description.component.html',
                styleUrls: ['./label-description.component.scss']
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function NavbarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_5_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.menuMobile = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.label);
} }
const _c0 = function (a0) { return { "opened": a0 }; };
class NavbarComponent {
    constructor() {
        this.menuMobile = false;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { items: "items" }, decls: 8, vars: 5, consts: [[1, "container-navbar"], [1, "hamburguer", 3, "click"], ["class", "close-hamburguer", 3, "click", 4, "ngIf"], [3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "close-hamburguer", 3, "click"], ["href", "item.url"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ".comdeveloper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_4_listener($event) { return ctx.menuMobile = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_div_5_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_li_7_Template, 3, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuMobile === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.menuMobile === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".container-navbar[_ngcontent-%COMP%] {\n  text-align: start;\n  color: #FFF;\n  padding: 20px;\n  background: rgba(88, 17, 17, 0.8);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n}\n.container-navbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .container-navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%], .container-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .container-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: inline;\n}\n.container-navbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: normal;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n@media only screen and (max-width: 850px) {\n  .container-navbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n.container-navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n@media only screen and (max-width: 850px) {\n  .container-navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    display: unset;\n  }\n}\n.container-navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: block;\n}\n@media only screen and (max-width: 850px) {\n  .container-navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: 0;\n    -webkit-transition: all 0.4s;\n    transition: all 0.4s;\n  }\n  .container-navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .container-navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.opened[_ngcontent-%COMP%] {\n    display: block;\n    height: 100%;\n    position: fixed;\n    background: #000;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 1;\n  }\n  .container-navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.opened[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    margin-top: 150px;\n    display: block;\n  }\n  .container-navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.opened[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n    font-size: 30pt;\n    margin: 0 0 50px 0;\n  }\n}\n.container-navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #FFF;\n  margin-left: 40px;\n  font-size: 16pt;\n}\n.container-navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d6d3d3;\n  -webkit-transition: 0.4s all;\n  transition: 0.4s all;\n}\n@media only screen and (max-width: 850px) {\n  .hamburguer[_ngcontent-%COMP%], .hamburguer[_ngcontent-%COMP%]:after, .hamburguer[_ngcontent-%COMP%]:before {\n    width: 35px;\n    height: 5px;\n    background-color: #FFF;\n    margin: 6px 0;\n    content: \" \";\n    display: block;\n    position: absolute;\n  }\n\n  .hamburguer[_ngcontent-%COMP%] {\n    right: 30px;\n    top: 15px;\n  }\n\n  .hamburguer[_ngcontent-%COMP%]:before {\n    top: 5px;\n    position: relative;\n  }\n\n  .close-hamburguer[_ngcontent-%COMP%] {\n    position: fixed;\n    right: 32px;\n    top: 32px;\n    width: 32px;\n    height: 32px;\n    z-index: 2;\n  }\n\n  .close-hamburguer[_ngcontent-%COMP%]:hover {\n    opacity: 1;\n  }\n\n  .close-hamburguer[_ngcontent-%COMP%]:before, .close-hamburguer[_ngcontent-%COMP%]:after {\n    position: absolute;\n    left: 15px;\n    content: \" \";\n    height: 33px;\n    width: 4px;\n    background-color: #FFF;\n  }\n\n  .close-hamburguer[_ngcontent-%COMP%]:before {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n\n  .close-hamburguer[_ngcontent-%COMP%]:after {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL0M6XFxyZXBvc2l0b3Jpb3NcXGNvbnRhY3QtcGFnZS1hbmd1bGFyOS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNERjtBREdFOzs7O0VBSUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDREo7QURJRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNGSjtBRElJO0VBTEY7SUFNSSxxQkFBQTtFQ0RKO0FBQ0Y7QURJRTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNGSjtBRElJO0VBTEY7SUFNSSxjQUFBO0VDREo7QUFDRjtBREdJO0VBQ0UsY0FBQTtBQ0ROO0FER007RUFIRjtJQUlJLFNBQUE7SUFDQSw0QkFBQTtJQUFBLG9CQUFBO0VDQU47RURFTTtJQUNFLGFBQUE7RUNBUjtFREdNO0lBQ0UsY0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VDRFI7RURHUTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtFQ0RWO0VESVE7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUNGVjtBQUNGO0FETU07RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNKUjtBRE1RO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNKVjtBRFdBO0VBRUU7OztJQUdFLFdBQUE7SUFDQSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQ1RGOztFRFlBO0lBQ0UsV0FBQTtJQUNBLFNBQUE7RUNURjs7RURZQTtJQUNFLFFBQUE7SUFDQSxrQkFBQTtFQ1RGOztFRFlBO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VDVEY7O0VEWUE7SUFDRSxVQUFBO0VDVEY7O0VEWUE7O0lBRUUsa0JBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0Esc0JBQUE7RUNURjs7RURZQTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNURjs7RURZQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNURjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJwYWxldHRlL3BhbGV0dGVcIjtcclxuXHJcbi5jb250YWluZXItbmF2YmFyIHtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBjb2xvcjogI0ZGRjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3RoZW1lLW9wYWNpdHknLCA4MCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcblxyXG4gIGgxLFxyXG4gIG5hdixcclxuICB1bCxcclxuICB1bCBsaSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmbGV4OiAxO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLm9wZW5lZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICAgIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDUwcHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHQ7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHJnYigyMTQsIDIxMSwgMjExKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNHMgYWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG5cclxuICAuaGFtYnVyZ3VlcixcclxuICAuaGFtYnVyZ3VlcjphZnRlcixcclxuICAuaGFtYnVyZ3VlcjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBtYXJnaW46IDZweCAwO1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG5cclxuICAuaGFtYnVyZ3VlciB7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHRvcDogMTVweDtcclxuICB9XHJcblxyXG4gIC5oYW1idXJndWVyOmJlZm9yZSB7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5jbG9zZS1oYW1idXJndWVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAzMnB4O1xyXG4gICAgdG9wOiAzMnB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlLWhhbWJ1cmd1ZXI6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIC5jbG9zZS1oYW1idXJndWVyOmJlZm9yZSxcclxuICAuY2xvc2UtaGFtYnVyZ3VlcjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgfVxyXG5cclxuICAuY2xvc2UtaGFtYnVyZ3VlcjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlLWhhbWJ1cmd1ZXI6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICB9XHJcblxyXG59XHJcbiIsIi5jb250YWluZXItbmF2YmFyIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDg4LCAxNywgMTcsIDAuOCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG59XG4uY29udGFpbmVyLW5hdmJhciBoMSxcbi5jb250YWluZXItbmF2YmFyIG5hdixcbi5jb250YWluZXItbmF2YmFyIHVsLFxuLmNvbnRhaW5lci1uYXZiYXIgdWwgbGkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5jb250YWluZXItbmF2YmFyIGgxIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZmxleDogMTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmNvbnRhaW5lci1uYXZiYXIgaDEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufVxuLmNvbnRhaW5lci1uYXZiYXIgbmF2IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmNvbnRhaW5lci1uYXZiYXIgbmF2IHtcbiAgICBkaXNwbGF5OiB1bnNldDtcbiAgfVxufVxuLmNvbnRhaW5lci1uYXZiYXIgbmF2IHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5jb250YWluZXItbmF2YmFyIG5hdiB1bCB7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB9XG4gIC5jb250YWluZXItbmF2YmFyIG5hdiB1bCBhIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jb250YWluZXItbmF2YmFyIG5hdiB1bC5vcGVuZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIC5jb250YWluZXItbmF2YmFyIG5hdiB1bC5vcGVuZWQgbGk6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5jb250YWluZXItbmF2YmFyIG5hdiB1bC5vcGVuZWQgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBwdDtcbiAgICBtYXJnaW46IDAgMCA1MHB4IDA7XG4gIH1cbn1cbi5jb250YWluZXItbmF2YmFyIG5hdiB1bCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0ZGRjtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbn1cbi5jb250YWluZXItbmF2YmFyIG5hdiB1bCBhOmhvdmVyIHtcbiAgY29sb3I6ICNkNmQzZDM7XG4gIHRyYW5zaXRpb246IDAuNHMgYWxsO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5oYW1idXJndWVyLFxuLmhhbWJ1cmd1ZXI6YWZ0ZXIsXG4uaGFtYnVyZ3VlcjpiZWZvcmUge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgbWFyZ2luOiA2cHggMDtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAuaGFtYnVyZ3VlciB7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgdG9wOiAxNXB4O1xuICB9XG5cbiAgLmhhbWJ1cmd1ZXI6YmVmb3JlIHtcbiAgICB0b3A6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY2xvc2UtaGFtYnVyZ3VlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAzMnB4O1xuICAgIHRvcDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIC5jbG9zZS1oYW1idXJndWVyOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLmNsb3NlLWhhbWJ1cmd1ZXI6YmVmb3JlLFxuLmNsb3NlLWhhbWJ1cmd1ZXI6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGhlaWdodDogMzNweDtcbiAgICB3aWR0aDogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIH1cblxuICAuY2xvc2UtaGFtYnVyZ3VlcjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuXG4gIC5jbG9zZS1oYW1idXJndWVyOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/interface/contact.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/interface/contact.ts ***!
  \*********************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
class Contact {
}


/***/ }),

/***/ "./src/app/shared/mocky/mocky.ts":
/*!***************************************!*\
  !*** ./src/app/shared/mocky/mocky.ts ***!
  \***************************************/
/*! exports provided: navbar, cards, contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbar", function() { return navbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contact", function() { return contact; });
const navbar = [
    { label: 'Empresa', url: '' },
    { label: 'Clientes', url: '' },
    { label: 'Serviços', url: '' },
    { label: 'Contato', url: '' },
];
const cards = [
    { title: 'Front-End', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: 'assets/img/frontend.jpg', link: '' },
    { title: 'Mobile', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: 'assets/img/mobile.jpg', link: '' },
    { title: 'Back-End', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: 'assets/img/backend.jpg', link: '' },
];
const contact = [
    { label: 'Endereço', description: 'Av. Paulista, 302' },
    { label: 'Site', description: 'www.developer.com.br' },
    { label: 'E-mail', description: 'developer@dev.com.br' },
    { label: 'Telefone', description: '(11) 2727-3030' },
];


/***/ }),

/***/ "./src/app/shared/pipe/phone/phone.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipe/phone/phone.pipe.ts ***!
  \*************************************************/
/*! exports provided: PhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipe", function() { return PhonePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PhonePipe {
    transform(value) {
        value = value.replace(/\D/g, '');
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        return value;
    }
}
PhonePipe.ɵfac = function PhonePipe_Factory(t) { return new (t || PhonePipe)(); };
PhonePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "phone", type: PhonePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhonePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'phone'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    contact: 'https://5dcaaa8d34d54a0014314849.mockapi.io/api/v1/users'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\repositorios\contact-page-angular9\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map