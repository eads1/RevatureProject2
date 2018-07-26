(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    padding-top: 75px;\r\n    height: 100vh;\r\n}\r\nrouter-outlet {\r\n    height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"wrapper\">\r\n  <router-outlet></router-outlet>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(user) {
        this.user = user;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_virtual_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-virtual-scroll */ "./node_modules/angular2-virtual-scroll/dist/virtual-scroll.js");
/* harmony import */ var angular2_virtual_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_virtual_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./password/password.component */ "./src/app/password/password.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/logged-in.guard */ "./src/app/guards/logged-in.guard.ts");
/* harmony import */ var _shared_commentList_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/commentList.service */ "./src/app/shared/commentList.service.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _shared_comment_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/comment.service */ "./src/app/shared/comment.service.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _otherprofile_otherprofile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./otherprofile/otherprofile.component */ "./src/app/otherprofile/otherprofile.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var routes = [
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"], canActivate: [_guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_17__["LoggedInGuard"]] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"] },
    { path: 'reset', component: _password_password_component__WEBPACK_IMPORTED_MODULE_9__["PasswordComponent"] },
    { path: 'other/:userId', component: _otherprofile_otherprofile_component__WEBPACK_IMPORTED_MODULE_23__["OtherprofileComponent"] },
    { path: 'search/:searchText', component: _search_search_component__WEBPACK_IMPORTED_MODULE_24__["SearchComponent"] },
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_22__["LandingComponent"] },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__["NotfoundComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
                _password_password_component__WEBPACK_IMPORTED_MODULE_9__["PasswordComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__["NotfoundComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_22__["LandingComponent"],
                _otherprofile_otherprofile_component__WEBPACK_IMPORTED_MODULE_23__["OtherprofileComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_24__["SearchComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), angular2_virtual_scroll__WEBPACK_IMPORTED_MODULE_4__["VirtualScrollModule"],
            ],
            providers: [
                _shared_post_service__WEBPACK_IMPORTED_MODULE_20__["PostService"],
                _shared_commentList_service__WEBPACK_IMPORTED_MODULE_18__["CommentList"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__["NotfoundComponent"],
                _shared_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
                _shared_comment_service__WEBPACK_IMPORTED_MODULE_21__["CommentService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.user.isLoggedIn;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/logged-in.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/logged-in.guard.ts ***!
  \*******************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function (next, state) {
        return !this.user.isLoggedIn;
    };
    LoggedInGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    max-width: 45rem;\r\n    height: 90vh;\r\n    margin-bottom: 10px;\r\n}\r\n#post {\r\n    resize: none;\r\n}\r\n#form-signin {\r\n    margin-bottom: 10px;\r\n}\r\nvirtual-scroll {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\napp-post {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n.total-padding {\r\n    height: 1000px;\r\n}\r\n::-webkit-scrollbar { \r\n    display: none; \r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card border-light mb-3\">\r\n  <div class='card-header'>\r\n  <form id=\"form-signin\" class=\"form-signin\" (ngSubmit)=\"submit()\">\r\n      <div class=\"form-label-group\">\r\n          <textarea id=\"post\" class=\"form-control\" required [(ngModel)]=\"post\"\r\n            name=\"post\" placeholder=\"create post\"></textarea>\r\n      </div><br/>\r\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Submit</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <virtual-scroll [items]=\"userPosts\" [bufferAmount]=\"5\" [childHeight]=\"85\"\r\n        (update)=\"viewPortItems = $event\">\r\n      <app-post *ngFor=\"let userPost of viewPortItems\" [userPost]=\"userPost\">\r\n      </app-post>\r\n    </virtual-scroll>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(postService, router, cookies) {
        this.postService = postService;
        this.router = router;
        this.cookies = cookies;
        this.email = this.cookies.get('email');
        this.uid = this.cookies.get('userId');
        this.userPosts = new Array();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.post = '';
        this.postService.getAllPostInfo().subscribe(function (response) {
            _this.userPosts = response;
            _this.viewPortItems = response;
            console.log(_this.userPosts);
        });
    };
    HomeComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.email);
        this.postService.submitPost(this.email, this.post).subscribe(function (response) {
            if (response['success']) {
                _this.ngOnInit();
            }
            else {
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.isLoggedIn; else login\">\r\n  <app-home></app-home>\r\n</div>\r\n\r\n<ng-template #login>\r\n  <app-login></app-login>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent(user) {
        this.user = user;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .card{\r\n    width: 400px;\r\n    margin: auto;\r\n  }\r\n  \r\n    .form-signin {\r\n      width: 100%;\r\n      padding: 15px;\r\n      height: 100%;\r\n      max-height:210px;\r\n    }\r\n  \r\n    .form-label-group {\r\n      position: relative;\r\n      margin-bottom: 1rem;\r\n    }\r\n  \r\n    .form-label-group > input,\r\n    .form-label-group > label {\r\n      padding: var(--input-padding-y) var(--input-padding-x);\r\n    }\r\n  \r\n    .form-label-group > label {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      display: block;\r\n      width: 100%;\r\n      margin-bottom: 0; /* Override default `<label>` margin */\r\n      line-height: 1.5;\r\n      color: #495057;\r\n      border: 1px solid transparent;\r\n      border-radius: .25rem;\r\n      transition: all .1s ease-in-out;\r\n    }\r\n  \r\n    .form-label-group input::-webkit-input-placeholder {\r\n      color: transparent;\r\n    }\r\n  \r\n    .form-label-group input:-ms-input-placeholder {\r\n      color: transparent;\r\n    }\r\n  \r\n    .form-label-group input::-ms-input-placeholder {\r\n      color: transparent;\r\n    }\r\n  \r\n    .form-label-group input::placeholder {\r\n      color: transparent;\r\n    }\r\n  \r\n    .form-label-group input:not(:placeholder-shown) {\r\n      padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n      padding-bottom: calc(var(--input-padding-y) / 3);\r\n    }\r\n  \r\n    .form-label-group input:not(:placeholder-shown) ~ label {\r\n      padding-top: calc(var(--input-padding-y) / 3);\r\n      padding-bottom: calc(var(--input-padding-y) / 3);\r\n      font-size: 12px;\r\n      color: #777;\r\n    }\r\n  "

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header text-white bg-primary\" style=\"padding-bottom: 0px\">\r\n    <h5>\r\n      <b>Login</b>\r\n    </h5>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form class=\"form-signin\" (ngSubmit)=\"submit()\">\r\n      <div class=\"form-label-group\">\r\n        <input type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email address\" required autofocus [(ngModel)]=\"email\" name=\"email\"\r\n          [ngClass]=\"{'is-invalid': failed}\" (change)=\"changed()\">\r\n        <label [ngStyle]=\"labelStyles\" for=\"email\">Email address</label>\r\n      </div>\r\n\r\n      <div class=\"form-label-group\">\r\n        <input type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"password\" name=\"password\"\r\n          [ngClass]=\"{'is-invalid': failed}\" (change)=\"changed()\">\r\n        <label [ngStyle]=\"labelStyles\" for=\"password\">Password</label>\r\n      </div>\r\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\r\n    </form>\r\n    <div class=\"text-center\">\r\n      Don't have an account?\r\n      <a routerLink=\"/register\">Register</a>\r\n    </div>\r\n    <div class='text-center'>\r\n      Forgot your password? \r\n      <a routerLink='/reset'>Reset Password</a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(user, router, cookies) {
        this.user = user;
        this.router = router;
        this.cookies = cookies;
        this.failed = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.user.login(this.email, this.password).subscribe(function (response) {
            console.log('login response');
            console.log(response);
            if (response) {
                // console.log(response);
                var user = {
                    userId: response['userId'],
                    firstName: response['fname'],
                    lastName: response['lname'],
                    email: response['email'],
                    picUrl: response['imageid'],
                };
                _this.user.setLoggedIn(user);
            }
            else {
                _this.failed = true;
                _this.labelStyles = { 'color': 'red' };
            }
        });
    };
    LoginComponent.prototype.changed = function () {
        this.failed = false;
        this.labelStyles = { 'color': 'grey' };
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/commentdata.class.ts":
/*!*********************************************!*\
  !*** ./src/app/models/commentdata.class.ts ***!
  \*********************************************/
/*! exports provided: CommentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentData", function() { return CommentData; });
var CommentData = /** @class */ (function () {
    function CommentData(commentId, post, user, text) {
        this.commentId = commentId;
        this.post = post;
        this.user = user;
        this.text = text;
    }
    return CommentData;
}());



/***/ }),

/***/ "./src/app/models/imagedata.class.ts":
/*!*******************************************!*\
  !*** ./src/app/models/imagedata.class.ts ***!
  \*******************************************/
/*! exports provided: ImageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageData", function() { return ImageData; });
var ImageData = /** @class */ (function () {
    function ImageData(imageId, url, user) {
        this.imageId = imageId;
        this.url = url;
        this.user = user;
    }
    return ImageData;
}());



/***/ }),

/***/ "./src/app/models/postdata.class.ts":
/*!******************************************!*\
  !*** ./src/app/models/postdata.class.ts ***!
  \******************************************/
/*! exports provided: PostData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostData", function() { return PostData; });
/* harmony import */ var _userdata_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userdata.class */ "./src/app/models/userdata.class.ts");
/* harmony import */ var _commentdata_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentdata.class */ "./src/app/models/commentdata.class.ts");
/* harmony import */ var _imagedata_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagedata.class */ "./src/app/models/imagedata.class.ts");



/*
    This class exists solely to persist data after the observable moves on.
*/
var PostData = /** @class */ (function () {
    function PostData(data) {
        this.comments = new Array();
        this.images = new Array();
        this.postId = data.postId;
        this.content = data.content;
        this.postedDate = data.postedDate;
        this.user = new _userdata_class__WEBPACK_IMPORTED_MODULE_0__["UserData"](data.userId.userId, data.userId.fname, data.userId.lname, data.userId.password, data.userId.imageid, data.userId.email);
        // the this.user should update to the real owner in the future
        // pulls comment data out of json response
        for (var i = 0; i < data.comments.length; i++) {
            this.comments.push(new _commentdata_class__WEBPACK_IMPORTED_MODULE_1__["CommentData"](data.comments[i].commentId, 0, this.user, data.comments[i].content));
        }
        // pulls image links out of json
        for (var i = 0; i < data.imageList.length; i++) {
            this.images.push(new _imagedata_class__WEBPACK_IMPORTED_MODULE_2__["ImageData"](data.imageList[0].image_id, data.imageList[i].link, this.user));
        }
    }
    return PostData;
}());



/***/ }),

/***/ "./src/app/models/userdata.class.ts":
/*!******************************************!*\
  !*** ./src/app/models/userdata.class.ts ***!
  \******************************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
var UserData = /** @class */ (function () {
    function UserData(userId, fname, lname, password, imageUrl, email) {
        this.userId = userId;
        this.fname = fname;
        this.lname = lname;
        this.password = password;
        this.imageUrl = imageUrl;
        this.email = email;
    }
    UserData.prototype.getFname = function () {
        return this.fname;
    };
    return UserData;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-rounded {\r\n    border-radius: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-sm navbar-dark bg-primary\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"\">GaoChain</a>\r\n\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" *ngIf=\"user.isLoggedIn\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse justify-content-stretch\" id=\"navbarNavDropdown\" *ngIf=\"user.isLoggedIn\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/other',userId]\">Profile</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav col-sm-5\">\r\n        <li class=\"nav-item w-100\">\r\n          <input maxlength=\"40\" #searchText type=\"text\" class=\"form-control-sm form-rounded w-100 ml-3\"\r\n            placeholder='Search' (keyup.enter)=\"search(searchText.value)\"/>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n            aria-expanded=\"false\">\r\n            {{user.email}}\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" routerLink=\"profile\">Edit profile</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" routerLink=\"\" (click)=\"logout()\">Logout</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _node_modules_ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_routeServ, user, cookies) {
        this._routeServ = _routeServ;
        this.user = user;
        this.cookies = cookies;
    }
    NavbarComponent.prototype.logout = function () {
        this.user.logout();
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.userId = parseInt(this.cookies.get('userId'), 10);
    };
    NavbarComponent.prototype.search = function (searchText) {
        console.log(searchText);
        this._routeServ.navigate(['search/' + searchText]);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _node_modules_ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  notfound works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/otherprofile/otherprofile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/otherprofile/otherprofile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    --input-padding-x: .75rem;\r\n    --input-padding-y: .75rem;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.form-group {\r\n    width: 100%;\r\n    max-width: 420px;\r\n    padding: 15px;\r\n    margin: auto;\r\n}\r\n\r\n.form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group > input, .form-label-group > label {\r\n    padding: var(--input-padding-y) var(--input-padding-x);\r\n}\r\n\r\n.form-label-group > label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0; /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n    color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n    color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n    color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n    color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n    padding-top: calc(var(--input-padding-y) / 3);\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n    font-size: 12px;\r\n    color: #777;\r\n}\r\n\r\n.borderStyle {\r\n    border: 4px solid black;\r\n}\r\n\r\n.card {\r\n    max-width: 45rem;\r\n    height: 60vh;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#post {\r\n    resize: none;\r\n}\r\n\r\n#form-signin {\r\n    margin-bottom: 10px;\r\n}\r\n\r\nvirtual-scroll {\r\n    display: block;\r\n    width: 100%;\r\n    /* height: 100%; */\r\n}\r\n\r\napp-post {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.total-padding {\r\n    height: 10px;\r\n}\r\n\r\n::-webkit-scrollbar { \r\n    display: none; \r\n}\r\n\r\n.round-img-container{\r\n\r\n    /* Makes a circle */\r\n    border-radius:50%; \r\n    border: 2px solid black;\r\n    width: 200px;\r\n    height: 200px;\r\n\r\n    /* Centers circle */\r\n    margin: auto;\r\n\r\n    /* Centers contents of the circle */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    /* Cuts off overflow */\r\n    overflow: hidden;\r\n  }\r\n\r\n.round-contained-img{\r\n    max-height:100%;\r\n    min-width:100%;\r\n\r\n    /* Maintain aspect ratio */\r\n    flex-shrink: 0;\r\n  }"

/***/ }),

/***/ "./src/app/otherprofile/otherprofile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/otherprofile/otherprofile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class='card-group'>\r\n  <div class='card border-light'>\r\n    <div class='card-body'>\r\n      <div class='form-group' id='profileTable' style='background-color: cadetblue'>\r\n        <div class='text-center round-img-container'>\r\n          <img src={{profile_pic}} class=\"round-contained-img\" style='border: 2px solid black'/>\r\n        </div>\r\n        <br/>\r\n        <h6 class='text-left mb-3 font-weight-bold'>First Name: {{fname}}</h6>\r\n        <h6 class='text-left mb-3 font-weight-bold'>Last Name: {{lname}}</h6>\r\n        <h6 class='text-left mb-3 font-weight-bold'>Email: {{email}}</h6>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class='card border-light'>\r\n    <div class=\"card-body\">\r\n      <virtual-scroll [items]=\"userPosts\" [bufferAmount]=\"5\" [childHeight]=\"85\" (update)=\"viewPortItems = $event\"\r\n      style='height:550px'>\r\n        <app-post *ngFor=\"let userPost of viewPortItems\" [userPost]=\"userPost\">\r\n        </app-post>\r\n      </virtual-scroll>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- <div class='container'>\r\n  <div class='row justify-content-start'>\r\n    <div class='col'>\r\n      <div class='form-group' id='profileTable' style='background-color: cadetblue'>\r\n        <div class='text-center'>\r\n            <img src={{profile_pic}} class='rounded-circle' style='border: 2px solid black' width=\"205\" height=\"200\" />\r\n        </div>\r\n        <br/>\r\n        <h6 class='text-left mb-3 font-weight-bold'>First Name: {{fname}}</h6>\r\n        <h6 class='text-left mb-3 font-weight-bold'>Last Name: {{lname}}</h6>\r\n        <h6 class='text-left mb-3 font-weight-bold'>Email: {{email}}</h6>\r\n      </div>        \r\n    </div>\r\n    <div class='col'>\r\n      <div class='card border-light mb-3'>\r\n        <div class=\"card-body\">\r\n          <virtual-scroll [items]=\"userPosts\" [bufferAmount]=\"5\" [childHeight]=\"85\"\r\n              (update)=\"viewPortItems = $event\">\r\n            <app-post *ngFor=\"let userPost of viewPortItems\" [userPost]=\"userPost\">\r\n            </app-post>\r\n          </virtual-scroll>\r\n        </div>  \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n -->\r\n"

/***/ }),

/***/ "./src/app/otherprofile/otherprofile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/otherprofile/otherprofile.component.ts ***!
  \********************************************************/
/*! exports provided: OtherprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherprofileComponent", function() { return OtherprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/post.service */ "./src/app/shared/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OtherprofileComponent = /** @class */ (function () {
    function OtherprofileComponent(user, postService, route, router, cookies) {
        this.user = user;
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.cookies = cookies;
        //  profile_pic: any;
        // default profile_pic if none is provided
        this.profile_pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    }
    /*
      The ngOnInit() gets the values from the Post page or anywhere else that routes to this profile page.
      Below are the parameters that will be grabbed and assigned to the values above to be displayed
      on the html side.
  
      If possible, we might want to send only the userId and then do a HttpClient request here to get
      the user info. If not, then we'll have to do this manually like this.
    */
    OtherprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.otherId = this.route.snapshot.paramMap.get('userId');
        // getUserInfo
        this.user.getUserInfo(this.otherId).subscribe(function (response) {
            _this.fname = response['fname'];
            _this.lname = response['lname'];
            _this.email = response['email'];
            _this.profile_pic = response['imageid'] ? response['imageid'] : _this.profile_pic;
        });
        this.postService.getUserPostInfo(parseInt(this.otherId, 10)).subscribe(function (response) {
            _this.userPosts = response;
            _this.viewPortItems = response;
        });
    };
    OtherprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-otherprofile',
            template: __webpack_require__(/*! ./otherprofile.component.html */ "./src/app/otherprofile/otherprofile.component.html"),
            styles: [__webpack_require__(/*! ./otherprofile.component.css */ "./src/app/otherprofile/otherprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _node_modules_ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], OtherprofileComponent);
    return OtherprofileComponent;
}());



/***/ }),

/***/ "./src/app/password/password.component.css":
/*!*************************************************!*\
  !*** ./src/app/password/password.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  width: 400px;\r\n  margin: auto;\r\n}\r\n\r\n\r\n\r\n:root {\r\n    --input-padding-x: .75rem;\r\n    --input-padding-y: .75rem;\r\n}\r\n\r\n\r\n\r\n.card {\r\n  max-width: 60rem;\r\n  height: auto;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.card-header {\r\n  background-color: #0094ff;\r\n  padding-top: 10px;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.btn:hover {\r\n    background-color: #21007F;\r\n}\r\n\r\n\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\n\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n\r\n\r\n.form-group {\r\n  width: 100%;\r\n  max-width: 420px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n}\r\n\r\n\r\n\r\n.form-label-group > label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0; /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n\r\n\r\n.borderStyle {\r\n  border: 4px solid black;\r\n}"

/***/ }),

/***/ "./src/app/password/password.component.html":
/*!**************************************************!*\
  !*** ./src/app/password/password.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header text-white bg-primary\" style=\"padding-bottom: 0px\">\r\n    <h5>\r\n      <b>Reset Password</b>\r\n    </h5>\r\n  </div>\r\n  <div class=\"text-center\" *ngIf='displayMessage'>\r\n    <p id='alertBox' style='color: red'>Reset Password Unsucessful! You probably don't have a valid account here.</p>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div #resetForm class='form-group' id='resetForm'>\r\n      <div class='form-label-group text-center'>\r\n        <input type='email' id='email' name='email' class='form-control' placeholder='email'\r\n          required autofocus [(ngModel)]='inputEmail'/>\r\n        <label for='email'>Enter Email</label>\r\n      </div>\r\n      <div class='form-label-group'>\r\n        <button class='btn btn-lg btn-primary btn-block' id='resetButton' (click)='resetPassword()'>Reset</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/password/password.component.ts":
/*!************************************************!*\
  !*** ./src/app/password/password.component.ts ***!
  \************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordComponent = /** @class */ (function () {
    function PasswordComponent(userServ, router) {
        this.userServ = userServ;
        this.router = router;
        // to display success message
        this.displayMessage = false;
    }
    PasswordComponent.prototype.ngOnInit = function () {
    };
    /*
      This function will trigger when the resetButton is clicked. This function will
      grab the inputted value and use that to send an email over to the user. At the
      moment, this function hasn't been properly tested yet.
    */
    PasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        this.displayMessage = false;
        this.userServ.resetPassword(this.inputEmail).subscribe(function (response) {
            console.log(response);
            if (response['success'] === true) {
                _this.router.navigateByUrl('/');
            }
            else {
                _this.displayMessage = true;
            }
        });
    };
    PasswordComponent.prototype.displayAlertFunc = function () {
        if (this.displayMessage === true) {
            this.displayMessage = false;
        }
    };
    PasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! ./password.component.html */ "./src/app/password/password.component.html"),
            styles: [__webpack_require__(/*! ./password.component.css */ "./src/app/password/password.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "./src/app/post/like.service.ts":
/*!**************************************!*\
  !*** ./src/app/post/like.service.ts ***!
  \**************************************/
/*! exports provided: LikeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeService", function() { return LikeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LikeService = /** @class */ (function () {
    function LikeService(client) {
        this.client = client;
    }
    LikeService.prototype.getPostLikes = function (postId) {
        var params = '?postId=' + postId;
        var url = 'http://localhost:12345/Project2/getPostLikesById.do' + params;
        return this.client.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) { return resp; }));
    };
    LikeService.prototype.hasUserLiked = function (postId, userId) {
        var params = '?postId=' + postId + '&userId=' + userId;
        var url = 'http://localhost:12345/Project2/hasUserLiked.do' + params;
        return this.client.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) { return resp; }));
    };
    LikeService.prototype.incrementPostLikes = function (postId, userId) {
        var params = '?postId=' + postId + '&userId=' + userId;
        var url = 'http://localhost:12345/Project2/incrementLikesById.do' + params;
        return this.client.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) { return resp; }));
    };
    LikeService.prototype.decrementPostLikes = function (postId, userId) {
        var params = '?postId=' + postId + '&userId=' + userId;
        var url = 'http://localhost:12345/Project2/decrementLikesById.do' + params;
        return this.client.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) { return resp; }));
    };
    LikeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LikeService);
    return LikeService;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    max-width: 45rem;\r\n    height: auto;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.btn {\r\n    width:48%;\r\n    margin:0.5%;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: #a8a8a8;\r\n}\r\n\r\nimg {\r\n    height: 300px;\r\n    width: auto;\r\n    border: 1px black;\r\n}\r\n\r\n.centerPost {\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: #cfcfcf;\r\n}\r\n\r\n.sr-only {\r\n    height: 100px !important;\r\n}\r\n\r\n.date {\r\n    float: right;\r\n}\r\n\r\n.name {\r\n    cursor: pointer !important;\r\n    font-weight: 700;\r\n    float: left;\r\n}\r\n\r\n.postHeader {\r\n    clear: both;\r\n}\r\n\r\n.class {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--this is the post portion-->\r\n<div class=\"card\">\r\n\r\n  <div class=\"card-body\">\r\n    <div class=\"postHeader\">\r\n      <span class=\"name\"><a [routerLink]=\"['/other',ownerId]\" skipLocationChange=true>\r\n        {{firstname + \" \" + lastname}}</a></span>\r\n    <span class=\"date\">Posted: {{postedDate}}</span>\r\n  </div><br>\r\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-interval=\"false\" data-ride=\"carousel\">\r\n      <div class=\"carousel-inner\" >\r\n        <div *ngFor=\"let image of image_urls; let k = index\" [ngClass]=\"k == 0 ? 'carousel-item active' : 'carousel-item'\">\r\n          <div class=\"centerPost\" >\r\n            <img class=\"postImage\" src={{image.url}} alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n      <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"false\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </div>\r\n\r\n    <p class=\"card-text\">{{text}}</p>\r\n    <span>Likes: {{likes}}</span> <br/>\r\n    <button (click)=\"toggleLike()\" class=\"btn btn-secondary\">{{likeButtonText}}</button>\r\n    <!-- <button (click)=\"toggleComments()\" class=\"btn btn-info\">Comments</button> -->\r\n    <button (click)=\"displayComment()\" class=\"btn btn-info\">Comments</button>\r\n  </div>\r\n\r\n  <!--This is the comment portion-->\r\n  <div id='comment1' class='card-body border-top border-dark' style='background-color: bisque' *ngIf='showComment'>\r\n    <h6 class='card-subtitle mb-2 text-muted'>Enter Comment</h6>\r\n    <textarea class=\"form-control\" rows='3' maxlength=\"255\" [(ngModel)]=\"commentText\" placeholder=\"Max 255 characters\"></textarea>\r\n\r\n    <input style='display: none' type='file' #findFile\r\n      class='form-control-file'(change)='onFileChanged($event)'/>\r\n    <button class='btn btn-info' id='uploadButton' (click)='findFile.click()'>upload</button>\r\n\r\n    <button class='btn btn-success' id='postButton' (click)='addComment()'>Post</button>\r\n\r\n    <div class='card-body border-bottom border-dark'></div>\r\n\r\n    <div class='' *ngFor = 'let temp of comments; let i = index'>\r\n      <div *ngIf='i < limit'>\r\n          <span class='card-title'>Owner: {{temp.user.fname + \" \" + temp.user.lname}}</span>\r\n          <div *ngIf=\"isCurrentUser(temp.user.email)\" >\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"deleteComment(temp)\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n\r\n          <br/>\r\n          <div class='card-body' style='background-color: aliceblue'>\r\n            {{temp.text}}\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class='card-body border-top border-dark'>\r\n      <button class='btn btn-secondary offset-3' id='loadMoreButton' (click)='incrementLimit()'>Load More</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _models_postdata_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/postdata.class */ "./src/app/models/postdata.class.ts");
/* harmony import */ var _like_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./like.service */ "./src/app/post/like.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _models_commentdata_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/commentdata.class */ "./src/app/models/commentdata.class.ts");
/* harmony import */ var _shared_comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/comment.service */ "./src/app/shared/comment.service.ts");
/* harmony import */ var _models_userdata_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/userdata.class */ "./src/app/models/userdata.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PostComponent = /** @class */ (function () {
    function PostComponent(postService, likeService, cookies, commentService) {
        this.postService = postService;
        this.likeService = likeService;
        this.cookies = cookies;
        this.commentService = commentService;
        // html specific fields
        this.likeButtonText = 'Like';
        // current user details
        this.userId = parseInt(this.cookies.get('userId'), 10);
        this.fname = this.cookies.get('firstName');
        this.lname = this.cookies.get('lastName');
        this.email = this.cookies.get('email');
        this.postedDate = 'Yesterday';
        this.text = 'Here is a test String to visualize text in a post.';
        this.image_urls = new Array();
        // for comments
        this.showComment = false;
        // to display more or not
        this.limit = 2;
    }
    Object.defineProperty(PostComponent.prototype, "userPost", {
        get: function () {
            return this._userPost;
        },
        set: function (userPost) {
            this._userPost = userPost;
        },
        enumerable: true,
        configurable: true
    });
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        // automatically set cookie of ownerId to -1 upon loading
        this.cookies.set('ownerId', '-1');
        var post = new _models_postdata_class__WEBPACK_IMPORTED_MODULE_2__["PostData"](this._userPost);
        this.populatePost(post);
        this.likeService.getPostLikes(post.postId).subscribe(function (data) { return _this.likes = data; });
        this.comments = post.comments;
        // checks if the user has already liked the post and updates the button accordingly
        this.likeService.hasUserLiked(post.postId, this.userId).subscribe(function (data) {
            if (data === 1) {
                _this.likeButtonText = 'Unlike';
            }
            else {
                _this.likeButtonText = 'Like';
            }
        });
    };
    PostComponent.prototype.populatePost = function (data) {
        this.ownerId = data.user.userId;
        this.postId = data.postId;
        this.firstname = data.user.fname;
        this.lastname = data.user.lname;
        this.ownerEmail = data.user.email;
        this.text = data.content;
        this.image_urls = data.images;
        var d = new Date(data.postedDate);
        this.postedDate = d.toLocaleDateString();
    };
    /*
      toggleLike() is triggered when ever the like button is clicked. It toggles the text and updates the counter.
    */
    PostComponent.prototype.toggleLike = function () {
        if (this.likeButtonText === 'Like') {
            this.likes++;
            this.likeButtonText = 'Unlike';
            this.likeService.incrementPostLikes(this.postId, this.userId).subscribe();
        }
        else {
            this.likes--;
            this.likeButtonText = 'Like';
            this.likeService.decrementPostLikes(this.postId, this.userId).subscribe();
        }
    };
    /*
      Here we could open the comments section or close it if already open.
      The details need to be discussed.
    */
    /*   toggleComments() {
        console.log('comments clicked');
      }*/
    /*
      This function is triggered when the "Comment" button is clicked. This will change
      the value of 'showComment' from true to false, false to true, in order to display
      the comment section underneath the post.
    */
    PostComponent.prototype.displayComment = function () {
        if (this.showComment === true) {
            this.showComment = false;
        }
        else if (this.showComment === false) {
            this.showComment = true;
        }
    };
    /*
      This function is triggered when the 'loadMoreButton' is clicked, which will multiply
      the 'limit' variable by 2.
      It now only changes when more comments are available.
    */
    PostComponent.prototype.incrementLimit = function () {
        if (this.limit <= this.comments.length) {
            this.limit *= 2;
        }
    };
    /*
      This function will be triggered when the uploadButton is pressed, which will trigger the
      hidden input tag, which will grab the file that the user chooses.
    */
    PostComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
    };
    /*
      This function will be triggered when the postButton is pressed, which will commit an
      HTTPClient request to the register service to be added to the database.
  
      Currently, it is unimplemented.
    */
    PostComponent.prototype.isCurrentUser = function (email) {
        return this.email === email;
    };
    // adds comment to the existing array and sets it up in the database
    PostComponent.prototype.addComment = function () {
        if (!this.commentText) {
            return;
        }
        var user = new _models_userdata_class__WEBPACK_IMPORTED_MODULE_7__["UserData"](this.userId, this.fname, this.lname, '', '', this.email);
        var comment = new _models_commentdata_class__WEBPACK_IMPORTED_MODULE_5__["CommentData"](0, this.postId, user, this.commentText);
        // this line updates the id of the new comment to match its persistent copy
        // this allows a brand new comment to be deleted
        this.commentService.newComment(comment).subscribe(function (data) { return comment.commentId = data; });
        this.comments.push(comment);
        this.commentText = '';
    };
    PostComponent.prototype.deleteComment = function (comment) {
        if (comment.commentId === 0) {
        }
        this.commentService.deleteComment(comment).subscribe();
        var index = this.comments.indexOf(comment);
        if (index !== -1) {
            this.comments.splice(index, 1);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], PostComponent.prototype, "userPost", null);
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _like_service__WEBPACK_IMPORTED_MODULE_3__["LikeService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _shared_comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    --input-padding-x: .75rem;\r\n    --input-padding-y: .75rem;\r\n  }\r\n  \r\n  html,\r\n  body {\r\n    height: 100%;\r\n  }\r\n  \r\n  body {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #f5f5f5;\r\n  }\r\n  \r\n  .form-group {\r\n    width: 100%;\r\n    max-width: 420px;\r\n    padding: 15px;\r\n    margin: auto;\r\n  }\r\n  \r\n  .form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .form-label-group > input,\r\n  .form-label-group > label {\r\n    padding: var(--input-padding-y) var(--input-padding-x);\r\n  }\r\n  \r\n  .form-label-group > label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0; /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n  }\r\n  \r\n  .form-label-group input::-webkit-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input:-ms-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown) {\r\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown) ~ label {\r\n    padding-top: calc(var(--input-padding-y) / 3);\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n    font-size: 12px;\r\n    color: #777;\r\n  }\r\n  \r\n  .borderStyle {\r\n    border: 4px solid black;\r\n  }\r\n  \r\n  .round-img-container{\r\n\r\n    /* Makes a circle */\r\n    border-radius:50%; \r\n    border: 2px solid black;\r\n    width: 200px;\r\n    height: 200px;\r\n\r\n    /* Centers circle */\r\n    margin: auto;\r\n\r\n    /* Centers contents of the circle */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    /* Cuts off overflow */\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .round-contained-img{\r\n    max-height:100%;\r\n    min-width:100%;\r\n\r\n    /* Maintain aspect ratio */\r\n    flex-shrink: 0;\r\n  }"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='form-group' id='profileTable' style='background-color: cadetblue'>\r\n\r\n  <div class='text-center round-img-container'>\r\n    <img src={{profile_pic}} class=\"round-contained-img\" />\r\n  </div>\r\n\r\n  <br/>\r\n  <h6 class='text-left mb-3 font-weight-bold'>First Name: {{fname}}</h6>\r\n  <div class='form-label-group'>\r\n    <input type='text' id='fname' class='form-control' placeholder='first name' required\r\n      autofocus [(ngModel)]='_inputFname' />\r\n    <label for='fname'>new first name</label>\r\n  </div>\r\n  <h6 class='text-left mb-3 font-weight-bold'>Last Name: {{lname}}</h6>\r\n  <div class='form-label-group'>\r\n    <input type='text' id='lname' class='form-control' placeholder='first name' required\r\n      autofocus [(ngModel)]='_inputLname' />\r\n    <label for='lname'>new last name</label>\r\n  </div>\r\n  <h6 class='text-left mb-3 font-weight-bold'>Email: {{email}}</h6>\r\n  <div class='form-label-group'>\r\n    <input type='email' id='email' class='form-control' placeholder='email' required\r\n      autofocus [(ngModel)]='_inputEmail' />\r\n    <label for='email'>new email</label>\r\n  </div>\r\n  <h6 class='text-left mb-3 font-weight-bold'>To Change Password, Enter New Password:</h6>\r\n  <div class='form-label-group'>\r\n    <input type='password' id='password' class='form-control' placeholder='password'\r\n      required autofocus [(ngModel)]='_inputPassword' />\r\n    <label for='password'>new password</label>\r\n  </div>\r\n  <div class='form-label-group'>\r\n    <input style='display: none' type='file' #findFile class='form-control-file' (change)='onFileChanged($event)'\r\n    />\r\n    <span class='col-sm-1'>\r\n      <span class='font-weight-bold'>Upload Profile Pic:</span>&nbsp;\r\n      <button class='btn btn-primary' id='findButton' (click)='findFile.click()'>Find File</button>\r\n    </span>\r\n  </div>\r\n\r\n  <div *ngIf=\"!!picDataUrl\" class=\"round-img-container\" style=\"margin-bottom: 20px;\">\r\n    <img class=\"round-contained-img\" [src]=\"picDataUrl\">\r\n  </div>\r\n  <h6 class='text-left mb-3 font-weight-bold'>To Confirm Changes, Enter Current Password:</h6>\r\n  <div class=\"form-label-group\">\r\n    <input type=\"password\" id=\"currentPassword\" class=\"form-control\" placeholder=\"Current password\"\r\n      required [(ngModel)]=\"currentPassword\" />\r\n    <label for=\"currentPassword\">current password</label>\r\n  </div>\r\n\r\n  <div *ngIf=\"!loading\" class='form-label-group'>\r\n    <button class='btn btn-lg btn-success btn-block' id='updateButton' (click)='updateAccount()'>Update</button>\r\n  </div>\r\n\r\n  <div *ngIf=\"loading\" class=\"loader\" ></div>\r\n\r\n  <div class=\"alert alert-success alert-dismissible\" *ngIf='displaySuccess'>\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)='displayAlertFunc()'>&times;</button>\r\n    <strong>Success!</strong> Profile Update Successful!\r\n  </div>\r\n  <div class=\"alert alert-danger alert-dismissible\" *ngIf='displayError'>\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)='displayAlertFunc()'>&times;</button>\r\n    <strong>Failure!</strong> Profile Update failed.\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(user, route, router, cookies) {
        this.user = user;
        this.route = route;
        this.router = router;
        this.cookies = cookies;
        this.uploadedPic = false;
        this.loading = false;
        // to display success message
        this.displaySuccess = false;
        this.displayError = false;
        this._inputFname = '';
        this._inputLname = '';
        this._inputEmail = '';
        this._inputPassword = '';
        // default profile_pic if none is provided
        this.profile_pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    }
    /*
      The ngOnInit() gets the values from the Post page or anywhere else that routes to this profile page.
      Below are the parameters that will be grabbed and assigned to the values above to be displayed
      on the html side.
  
      If possible, we might want to send only the userId and then do a HttpClient request here to get
      the user info. If not, then we'll have to do this manually like this.
    */
    ProfileComponent.prototype.ngOnInit = function () {
        this.userId = this.user.userId;
        this.fname = this.user.firstName;
        this.lname = this.user.lastName;
        this.email = this.user.email;
        // this.profile_pic = this.user.picUrl;
        this.profile_pic = this.user.picUrl ? this.user.picUrl : this.profile_pic;
    };
    /*
      Same function as in RegisterComponent and PostComponent. This just takes the file selected by
      the user and assign it to the 'selectedFile' variable to be passed.
    */
    ProfileComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        var reader = new FileReader();
        reader.onload = function () {
            _this.picDataUrl = reader.result;
        };
        reader.readAsDataURL(this.selectedFile);
        this.uploadedPic = true;
    };
    /*
      This function will be triggered when the updateButton is clicked. WHen it is triggered, it
      will grab all of the input values from the html side and check for each value.
      Once the checks are done, then these value will be sent to the middle-end to be send and
      update the database of the respective user
    */
    ProfileComponent.prototype.updateAccount = function () {
        var _this = this;
        var userObj = {
            userId: this.userId,
            fname: this._inputFname ? this._inputFname : null,
            lname: this._inputLname ? this._inputLname : null,
            email: this._inputEmail ? this._inputEmail : null,
            password: this._inputPassword ? this._inputPassword : null,
            imageid: this.picDataUrl ? this.picDataUrl : null
        };
        this.loading = true;
        this.user.updateAccount(userObj, this.currentPassword).subscribe(function (response) {
            console.log(response);
            if (response && (response['email'] != null)) {
                var user = {
                    userId: response['userId'] ? response['userId'] : _this.userId,
                    firstName: response['fname'] ? response['fname'] : _this.fname,
                    lastName: response['lname'] ? response['lname'] : _this.lname,
                    email: response['email'] ? response['email'] : _this.email,
                    picUrl: response['imageid'] ? response['imageid'] : _this.profile_pic,
                };
                _this._inputFname = '';
                _this._inputLname = '';
                _this._inputEmail = '';
                _this._inputPassword = '';
                _this.profile_pic = response['imageid'] ? response['imageid'] : _this.profile_pic;
                _this.picDataUrl = undefined;
                _this.user.setLoggedIn(user);
                _this.displaySuccess = true;
            }
            else {
                _this.displayError = true;
            }
            _this.loading = false;
        });
    };
    ProfileComponent.prototype.displayAlertFunc = function () {
        if (this.displaySuccess === true) {
            this.displaySuccess = false;
        }
        if (this.displayError === true) {
            this.displayError = false;
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  width: 400px;\r\n  margin: auto;\r\n}\r\n\r\n\r\n:root {\r\n  --input-padding-x: .75rem;\r\n  --input-padding-y: .75rem;\r\n}\r\n\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n\r\n.form-group {\r\n  width: 100%;\r\n  max-width: 420px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n}\r\n\r\n\r\n.form-label-group > label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0; /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n\r\n.borderStyle {\r\n  border: 4px solid black;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div *ngIf=\"!success\" class=\"alert alert-danger\">\r\n    Error. Please try again.\r\n  </div>\r\n  <div class=\"card-header text-white bg-primary\" style=\"padding-bottom: 0px\">\r\n    <h5>\r\n      <b>Register</b>\r\n    </h5>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form class='form-group' name='registerForm' id='registerForm'>\r\n      <div class='form-label-group'>\r\n        <input type='text' name='firstname' id='fname' class='form-control' [(ngModel)]='firstname'\r\n          placeholder='first name' required #fname='ngModel' autofocus/>\r\n        <label for='fname'>First Name</label>\r\n        <div *ngIf='fname.invalid && (fname.dirty || fname.touched)' class='alert alert-danger'>\r\n          <div *ngIf='fname.errors.required'>\r\n            First name is required.\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class='form-label-group'>\r\n        <input type='text' name='lastname' id='lname' class='form-control' [(ngModel)]='lastname'\r\n          placeholder='first name' required #lname='ngModel' />\r\n        <label for='lname'>Last Name</label>\r\n        <div *ngIf='lname.invalid && (lname.dirty || lname.touched)' class='alert alert-danger'>\r\n          <div *ngIf='lname.errors.required'>\r\n            Last name is required.\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class='form-label-group'>\r\n        <input type='email' name='email' id='email' class='form-control' [(ngModel)]='email'\r\n          placeholder='email' required #userEmail='ngModel' />\r\n        <label for='email'>Email</label>\r\n        <div *ngIf='userEmail.invalid && (userEmail.dirty || userEmail.touched)' class='alert alert-danger'>\r\n          <div *ngIf='userEmail.errors.required'>\r\n            Email is required.\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class='form-label-group'>\r\n        <input type='password' name='password' id='password' class='form-control' [(ngModel)]='password'\r\n          placeholder='password' required #userPassword='ngModel' />\r\n        <label for='password'>Password</label>\r\n        <div *ngIf='userPassword.invalid && (userPassword.dirty || userPassword.touched)'\r\n          class='alert alert-danger'>\r\n          <div *ngIf='userPassword.errors.required'>\r\n            Password is required.\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class='form-label-group'>\r\n        <input style='display: none' type='file' #findFile class='form-control-file' (change)='onFileChanged($event)'\r\n          accept=\"image/*\" />\r\n        <span class='col-sm-1'>\r\n          <span class='font-weight-bold'>Upload Profile Pic:</span>&nbsp;\r\n          <button class='btn btn-primary' id='findButton' (click)='findFile.click()'>Find File</button>\r\n        </span>\r\n        <img class=\"img-fluid\" *ngIf=\"!!picDataUrl\" [src]=\"picDataUrl\" style=\"padding-top: 10px;\"\r\n        />\r\n      </div>\r\n\r\n      <button *ngIf=\"!loading\" class='btn btn-lg btn-primary btn-block' id='registerButton'\r\n        (click)='createAccount()'>Register</button>\r\n\r\n      <div *ngIf=\"loading\" class=\"loader\"></div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.success = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            _this.picDataUrl = reader.result;
        };
        reader.readAsDataURL(this.selectedFile);
    };
    RegisterComponent.prototype.createAccount = function () {
        var _this = this;
        var newUser = {
            fname: this.firstname,
            lname: this.lastname,
            email: this.email,
            password: this.password,
            imageid: this.picDataUrl,
        };
        this.loading = true;
        this.userService.registerAccount(newUser).subscribe(function (response) {
            if (response['success']) {
                _this.success = true;
                _this.router.navigate(['/']);
            }
            else {
                _this.success = false;
            }
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    max-width: 45rem;\r\n    height: auto;\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"card\" *ngFor=\"let user of users\">\r\n      <div class=\"card-body\">\r\n        <div><a href='other/{{user.userId}}'> {{user.fname}} {{user.lname}}</a></div>\r\n        <div>{{user.email}}</div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!hasResults\">No results</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.hasResults = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.service.searchUser(params['searchText']).subscribe(function (response) {
                _this.users = response;
                if (_this.users.length !== 0) {
                    _this.hasResults = true;
                }
            });
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/comment.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/comment.service.ts ***!
  \*******************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentService = /** @class */ (function () {
    function CommentService(client) {
        this.client = client;
    }
    CommentService.prototype.newComment = function (comment) {
        var userId = '' + comment.user.userId;
        var postId = '' + comment.post;
        var text = comment.text;
        var url = 'http://localhost:12345/Project2/newComment.do';
        return this.client.post(url, null, {
            params: {
                userId: userId,
                postId: postId,
                text: text
            }
        }).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) { return resp; }));
    };
    CommentService.prototype.deleteComment = function (comment) {
        var commentId = comment.commentId + '';
        var url = 'http://localhost:12345/Project2/deleteComment.do?commentId=' + commentId;
        return this.client.get(url);
    };
    CommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/shared/commentList.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/commentList.service.ts ***!
  \***********************************************/
/*! exports provided: CommentList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentList", function() { return CommentList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommentList = /** @class */ (function () {
    function CommentList() {
        this.listComments = [
            { 'id': 1,
                'post_id': 10,
                'owner_id': 20,
                'content': 'This is SERIOUSLY ONE strange BIRDIE!',
                'date_post': 'Today, DUH!' },
            { 'id': 2,
                'post_id': 11,
                'owner_id': 21,
                'content': 'This is ONE F**KED UP...pond!',
                'date_post': 'Tomorrow, Jeez!'
            },
            { 'id': 3,
                'post_id': 12,
                'owner_id': 22,
                'content': 'Seriously, change the picture!',
                'date_post': 'Right Now!'
            },
            { 'id': 4,
                'post_id': 13,
                'owner_id': 23,
                'content': 'LOL! Birdie became REAL!',
                'date_post': 'Yesterday at 11:59T0091919 PM - New York Best Boi Time'
            },
            { 'id': 5,
                'post_id': 14,
                'owner_id': 24,
                'content': 'It\' the ugly duckling! Shoo!',
                'date_post': 'Tuesday of Next Week!'
            },
        ];
    }
    CommentList.prototype.getListComments = function () {
        return this.listComments;
    };
    CommentList.prototype.addComment = function (oneComment) {
        this.listComments.push(oneComment);
    };
    CommentList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CommentList);
    return CommentList;
}());



/***/ }),

/***/ "./src/app/shared/post.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/post.service.ts ***!
  \****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function () {
    function PostService(client) {
        this.client = client;
        this.apiURL = 'http://localhost:12345/Project2/';
    }
    PostService.prototype.getAllPostInfo = function () {
        var url = this.apiURL + 'getAllPosts.do';
        return this.client.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) { return resp; }));
    };
    PostService.prototype.getUserPostInfo = function (uid) {
        var url = this.apiURL + 'getUserPostsByUid.do?uid=' + uid;
        return this.client.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) { return resp; }));
    };
    PostService.prototype.getPostInfo = function (id) {
        var url = this.apiURL + 'getPostById.do?id=' + id;
        return this.client.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) { return resp; }));
    };
    PostService.prototype.submitPost = function (email, post) {
        var url = this.apiURL + 'submitPost.do';
        return this.client.post(url, null, {
            params: {
                email: email,
                post: post
            },
        });
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, cookies) {
        this.http = http;
        this.cookies = cookies;
        this.userId = parseInt(this.cookies.get('userId'), 10);
        this._email = this.cookies.get('email');
        this.firstName = this.cookies.get('firstName');
        this.lastName = this.cookies.get('lastName');
        this.picUrl = this.cookies.get('picUrl');
        this.isLoggedIn = this.cookies.check('isLoggedIn');
        this.apiUrl = 'http://localhost:12345/Project2/';
    }
    Object.defineProperty(UserService.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.login = function (email, password) {
        return this.http.post(this.apiUrl + 'login.do', null, {
            params: {
                email: email,
                password: password,
            },
        });
    };
    /**
     * Sets the logged in user to be the user described by the parameter.
     *
     * @param user The user that should be logged in.
     */
    UserService.prototype.setLoggedIn = function (user) {
        this.userId = user.userId;
        this.email = user.email;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.picUrl = user.picUrl;
        this.isLoggedIn = true;
        this.cookies.set('userId', user.userId);
        this.cookies.set('email', user.email);
        this.cookies.set('firstName', user.firstName);
        this.cookies.set('lastName', user.lastName);
        this.cookies.set('picUrl', user.picUrl);
        this.cookies.set('isLoggedIn', 'true');
    };
    UserService.prototype.logout = function () {
        this.cookies.delete('userId');
        this.cookies.delete('firstName');
        this.cookies.delete('lastName');
        this.cookies.delete('email');
        this.cookies.delete('picUrl');
        this.cookies.delete('isLoggedIn');
        this.userId = undefined;
        this.firstName = undefined;
        this.lastName = undefined;
        this._email = undefined;
        this.picUrl = undefined;
        this.isLoggedIn = false;
    };
    UserService.prototype.registerAccount = function (param) {
        return this.http.post(this.apiUrl + 'register.do', param);
    };
    // this function will update the user profile in User Table
    UserService.prototype.updateAccount = function (userObj, password) {
        return this.http.post(this.apiUrl + 'updateAccount.do', userObj, {
            params: { password: password },
        });
    };
    UserService.prototype.updateAccountWithPassword2 = function (param) {
        var userID = param['userId'];
        var fname = param['fname'];
        var lname = param['lname'];
        var email = param['email'];
        var password = param['password'];
        var somePic = param['somePic'];
        return this.http.post(this.apiUrl + 'updateAccount4.do', null, {
            params: {
                userID: userID,
                fname: fname,
                lname: lname,
                email: email,
                password: password,
                somePic: somePic
            },
        });
    };
    UserService.prototype.searchUser = function (searchText) {
        var url = this.apiUrl + 'search.do?search-text=' + searchText;
        return this.http.get(url).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    UserService.prototype.resetPassword = function (inputEmail) {
        return this.http.post(this.apiUrl + 'reset.do', null, {
            params: {
                inputEmail: inputEmail
            }
        });
    };
    UserService.prototype.getUserInfo = function (someID) {
        return this.http.post(this.apiUrl + 'getUser.do', null, {
            params: {
                someID: someID
            }
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], UserService);
    return UserService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Desktop\Git\RevatureProject2\Project2\src\main\webapp\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map