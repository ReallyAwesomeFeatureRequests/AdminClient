webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('AuthGuard#canActivate called');
        var isAuthenticated = this.auth.isAuthenticated.getValue();
        if (isAuthenticated) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseListComponent; });
var BaseListComponent = (function () {
    function BaseListComponent() {
        this.page = 1;
        this.limit = 5;
    }
    BaseListComponent.prototype.ngOnInit = function () {
        this.fetchAndSetList();
    };
    BaseListComponent.prototype.fetchAndSetList = function () {
        if (this.page < 1) {
            this.page = 1;
        }
        this.list = this.getList(this.page, this.limit);
    };
    BaseListComponent.prototype.setPage = function (page) {
        this.page = page;
        this.fetchAndSetList();
    };
    BaseListComponent.prototype.setLimit = function (limit) {
        this.limit = limit;
        this.fetchAndSetList();
    };
    return BaseListComponent;
}());

//# sourceMappingURL=base-list-component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });



var BaseService = (function () {
    function BaseService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    BaseService.prototype.getList = function (page, limit) {
        var _this = this;
        var queryParams = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* URLSearchParams */]();
        queryParams.set('page', page.toString());
        queryParams.set('limit', limit.toString());
        return this.http.get(this.getListUrl(), {
            params: queryParams
        })
            .map(function (res) {
            var responseBody = res.json() || [];
            return {
                list: responseBody.map(function (entity) { return _this.createNewInstance(entity); }),
                totalCount: res.headers.get('X-total-count')
            };
        })
            .catch(this.errorHandler);
    };
    BaseService.prototype.getOne = function (id) {
        var _this = this;
        return this.http.get(this.getOneUrl(id))
            .map(function (res) { return _this.createNewInstance(res.json() || {}); })
            .catch(this.errorHandler);
    };
    BaseService.prototype.create = function (entity) {
        var _this = this;
        return this.http.post(this.createUrl(), entity)
            .map(function (res) { return _this.createNewInstance(res.json() || {}); })
            .catch(this.errorHandler);
    };
    BaseService.prototype.update = function (id, _entity) {
        var _this = this;
        var entity = Object.assign({}, _entity);
        delete entity.id;
        return this.http.put(this.updateUrl(id), entity)
            .map(function (res) { return _this.createNewInstance(res.json() || {}); })
            .catch(this.errorHandler);
    };
    BaseService.prototype.destroy = function (id) {
        return this.http.delete(this.destroyUrl(id))
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    BaseService.prototype.errorHandler = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CallbackComponent = (function () {
    function CallbackComponent() {
    }
    return CallbackComponent;
}());
CallbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-callback',
        template: "\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <span i18n>Logging in...</span>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated w-100\" role=\"progressbar\"\n               aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n  "
    })
], CallbackComponent);

//# sourceMappingURL=callback.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_list_component__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientListComponent = (function (_super) {
    __extends(ClientListComponent, _super);
    function ClientListComponent(clientService) {
        var _this = _super.call(this) || this;
        _this.clientService = clientService;
        return _this;
    }
    ClientListComponent.prototype.getList = function (page, limit) {
        return this.clientService.getList(page, limit);
    };
    return ClientListComponent;
}(__WEBPACK_IMPORTED_MODULE_2__base_list_component__["a" /* BaseListComponent */]));
ClientListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-client-list',
        template: "\n    <rafr-overview [title]=\"'Clients'\"\n                   [createNew]=\"true\"\n                   [createNewLink]=\"'/create-client'\"\n                   [createNewText]=\"'Create New Client'\"></rafr-overview>\n\n    <div *ngIf=\"list | async; let clientList; else clientListNotLoaded\">\n      <rafr-client-list-result *ngFor=\"let client of clientList.list\"\n                               [client]=\"client\"></rafr-client-list-result>\n\n      <rafr-paging (changePage)=\"setPage($event)\"\n                   [limit]=\"limit\"\n                   [page]=\"page\"\n                   [totalCount]=\"clientList.totalCount\"></rafr-paging>\n    </div>\n\n    <ng-template #clientListNotLoaded>\n      <rafr-loading [loadingText]=\"'Loading client list'\"></rafr-loading>\n    </ng-template>\n  ",
        styles: ["\n    rafr-client-list-result,\n    rafr-paging {\n      display: block;\n      margin-top: 12px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */]) === "function" && _a || Object])
], ClientListComponent);

var _a;
//# sourceMappingURL=client-list.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = (function () {
    function Client(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    return Client;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientComponent = (function () {
    function ClientComponent(clientService, route, router) {
        this.clientService = clientService;
        this.route = route;
        this.router = router;
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.fetchClient();
    };
    ClientComponent.prototype.enableEditing = function (originalClient) {
        this.editing = true;
    };
    ClientComponent.prototype.cancel = function () {
        this.editing = false;
        this.fetchClient();
    };
    ClientComponent.prototype.save = function (client) {
        this.client = this.clientService.update(client.id, client);
        this.editing = false;
    };
    ClientComponent.prototype.destroy = function (clientId) {
        var _this = this;
        this.clientService.destroy(clientId)
            .subscribe(function (client) { return _this.router.navigate(["/clients"]); });
    };
    ClientComponent.prototype.fetchClient = function () {
        var id = this.route.snapshot.params['id'];
        this.client = this.clientService.getOne(id);
    };
    return ClientComponent;
}());
ClientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-client',
        template: __webpack_require__(277),
        styles: [__webpack_require__(268)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ClientComponent);

var _a, _b, _c;
//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateClientComponent = (function () {
    function CreateClientComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
        this.clientModel = {};
    }
    CreateClientComponent.prototype.createClient = function () {
        var _this = this;
        this.clientService.create(this.clientModel)
            .subscribe(function (client) { return _this.router.navigate(["/clients/" + client.id]); });
    };
    return CreateClientComponent;
}());
CreateClientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-create-client',
        template: __webpack_require__(278)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], CreateClientComponent);

var _a, _b;
//# sourceMappingURL=create-client.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_area_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProductAreaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateProductAreaComponent = (function () {
    function CreateProductAreaComponent(productAreaService, router) {
        this.productAreaService = productAreaService;
        this.router = router;
        this.productAreaModel = {};
    }
    CreateProductAreaComponent.prototype.createProductArea = function () {
        var _this = this;
        this.productAreaService.create(this.productAreaModel)
            .subscribe(function (productArea) { return _this.router.navigate(["/product-areas/" + productArea.id]); });
    };
    return CreateProductAreaComponent;
}());
CreateProductAreaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-create-product-area',
        template: __webpack_require__(279)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__product_area_service__["a" /* ProductAreaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_area_service__["a" /* ProductAreaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], CreateProductAreaComponent);

var _a, _b;
//# sourceMappingURL=create-product-area.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-home',
        template: __webpack_require__(281)
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_area_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_list_component__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAreaListComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductAreaListComponent = (function (_super) {
    __extends(ProductAreaListComponent, _super);
    function ProductAreaListComponent(productAreaService) {
        var _this = _super.call(this) || this;
        _this.productAreaService = productAreaService;
        return _this;
    }
    ProductAreaListComponent.prototype.getList = function (page, limit) {
        return this.productAreaService.getList(page, limit);
    };
    return ProductAreaListComponent;
}(__WEBPACK_IMPORTED_MODULE_2__base_list_component__["a" /* BaseListComponent */]));
ProductAreaListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-product-area-list',
        template: "\n    <rafr-overview [title]=\"'Product Areas'\"\n                   [createNew]=\"true\"\n                   [createNewLink]=\"'/create-product-area'\"\n                   [createNewText]=\"'Create New Product Area'\"></rafr-overview>\n\n    <div *ngIf=\"list | async; let productAreaList; else productAreaListNotLoaded\">\n      <rafr-product-area-list-result *ngFor=\"let productArea of productAreaList.list\"\n                                     [productArea]=\"productArea\"></rafr-product-area-list-result>\n\n      <rafr-paging (changePage)=\"setPage($event)\"\n                   [limit]=\"limit\"\n                   [page]=\"page\"\n                   [totalCount]=\"productAreaList.totalCount\"></rafr-paging>\n    </div>\n\n    <ng-template #productAreaListNotLoaded>\n      <rafr-loading [loadingText]=\"'Loading product area list'\"></rafr-loading>\n    </ng-template>\n  ",
        styles: ["\n    rafr-product-area-list-result,\n    rafr-paging {\n      display: block;\n      margin-top: 12px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_area_service__["a" /* ProductAreaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_area_service__["a" /* ProductAreaService */]) === "function" && _a || Object])
], ProductAreaListComponent);

var _a;
//# sourceMappingURL=product-area-list.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductArea; });
var ProductArea = (function () {
    function ProductArea(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    return ProductArea;
}());

//# sourceMappingURL=product-area.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_area_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAreaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductAreaComponent = (function () {
    function ProductAreaComponent(productAreaService, route, router) {
        this.productAreaService = productAreaService;
        this.route = route;
        this.router = router;
    }
    ProductAreaComponent.prototype.ngOnInit = function () {
        this.fetchProductArea();
    };
    ProductAreaComponent.prototype.enableEditing = function () {
        this.editing = true;
    };
    ProductAreaComponent.prototype.cancel = function () {
        this.editing = false;
        this.fetchProductArea();
    };
    ProductAreaComponent.prototype.save = function (productArea) {
        this.productArea = this.productAreaService.update(productArea.id, productArea);
        this.editing = false;
    };
    ProductAreaComponent.prototype.destroy = function (productAreaId) {
        var _this = this;
        this.productAreaService.destroy(productAreaId)
            .subscribe(function (productArea) { return _this.router.navigate(["/product-areas"]); });
    };
    ProductAreaComponent.prototype.fetchProductArea = function () {
        var id = this.route.snapshot.params['id'];
        this.productArea = this.productAreaService.getOne(id);
    };
    return ProductAreaComponent;
}());
ProductAreaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-product-area',
        template: __webpack_require__(282)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__product_area_service__["a" /* ProductAreaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_area_service__["a" /* ProductAreaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ProductAreaComponent);

var _a, _b, _c;
//# sourceMappingURL=product-area.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 173;


/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(71);





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_list_client_list_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_client_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_client_create_client_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_area_product_area_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_area_list_product_area_list_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_product_area_create_product_area_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__callback_callback_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_guard_service__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'callback',
        component: __WEBPACK_IMPORTED_MODULE_9__callback_callback_component__["a" /* CallbackComponent */]
    },
    {
        path: 'clients',
        component: __WEBPACK_IMPORTED_MODULE_2__client_list_client_list_component__["a" /* ClientListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'clients/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__client_client_component__["a" /* ClientComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'create-client',
        component: __WEBPACK_IMPORTED_MODULE_5__create_client_create_client_component__["a" /* CreateClientComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'product-areas',
        component: __WEBPACK_IMPORTED_MODULE_7__product_area_list_product_area_list_component__["a" /* ProductAreaListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'product-areas/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__product_area_product_area_component__["a" /* ProductAreaComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'create-product-area',
        component: __WEBPACK_IMPORTED_MODULE_8__create_product_area_create_product_area_component__["a" /* CreateProductAreaComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */]]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-root',
        template: "\n    <rafr-header></rafr-header>\n\n    <div class=\"container\" id=\"content\">\n      <router-outlet></router-outlet>\n    </div>\n\n    <!--<rafr-footer></rafr-footer>-->\n  ",
        styles: ["\n    #content {\n      padding-top: 18px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__client_list_client_list_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__client_client_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__client_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__client_list_result_client_list_result_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__create_client_create_client_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__create_product_area_create_product_area_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__product_area_list_result_product_area_list_result_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__product_area_list_product_area_list_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__product_area_product_area_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__product_area_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__callback_callback_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__auth_guard_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__loading_loading_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__paging_paging_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__for_number_pipe__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__overview_overview_component__ = __webpack_require__(188);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__client_list_client_list_component__["a" /* ClientListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__client_client_component__["a" /* ClientComponent */],
            __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__client_list_result_client_list_result_component__["a" /* ClientListResultComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__create_client_create_client_component__["a" /* CreateClientComponent */],
            __WEBPACK_IMPORTED_MODULE_14__create_product_area_create_product_area_component__["a" /* CreateProductAreaComponent */],
            __WEBPACK_IMPORTED_MODULE_15__product_area_list_result_product_area_list_result_component__["a" /* ProductAreaListResultComponent */],
            __WEBPACK_IMPORTED_MODULE_16__product_area_list_product_area_list_component__["a" /* ProductAreaListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__product_area_product_area_component__["a" /* ProductAreaComponent */],
            __WEBPACK_IMPORTED_MODULE_20__callback_callback_component__["a" /* CallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_22__loading_loading_component__["a" /* LoadingComponent */],
            __WEBPACK_IMPORTED_MODULE_23__paging_paging_component__["a" /* PagingComponent */],
            __WEBPACK_IMPORTED_MODULE_24__for_number_pipe__["a" /* ForNumberPipe */],
            __WEBPACK_IMPORTED_MODULE_25__overview_overview_component__["a" /* OverviewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_21__auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_10__client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_18__product_area_service__["a" /* ProductAreaService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientListResultComponent = (function () {
    function ClientListResultComponent() {
    }
    return ClientListResultComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__client__["a" /* Client */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__client__["a" /* Client */]) === "function" && _a || Object)
], ClientListResultComponent.prototype, "client", void 0);
ClientListResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-client-list-result',
        template: "\n    <div class=\"card\" *ngIf=\"client\">\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">{{client.name}}</h4>\n        <p class=\"card-text\">{{client.description}}</p>\n        <a class=\"card-link\" [routerLink]=\"['/clients', client.id]\">See more</a>\n      </div>\n    </div>\n  ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    })
], ClientListResultComponent);

var _a;
//# sourceMappingURL=client-list-result.component.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-footer',
        template: "\n    <footer class=\"footer navbar-fixed-bottom\">\n      <div class=\"container\">\n        <span class=\"text-muted\">Place sticky footer content here.</span>\n      </div>\n    </footer>\n  ",
        styles: ["\n    :host {\n      margin-top: 16px;\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      height: 60px;\n      line-height: 60px;\n      background-color: #f5f5f5;\n    }\n\n  "]
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForNumberPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ForNumberPipe = (function () {
    function ForNumberPipe() {
    }
    ForNumberPipe.prototype.transform = function (value, args) {
        //create an arrya of length value
        return Array(parseInt(value, 10))
            .fill(0)
            .map(function (_, index) { return index; });
    };
    return ForNumberPipe;
}());
ForNumberPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Pipe */])({
        name: 'forNumber'
    })
], ForNumberPipe);

//# sourceMappingURL=for-number.pipe.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-header',
        template: __webpack_require__(280)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    return LoadingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", String)
], LoadingComponent.prototype, "loadingText", void 0);
LoadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-loading',
        template: "\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <span i18n>{{loadingText}}</span>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated w-100\" role=\"progressbar\"\n               aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n  ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    })
], LoadingComponent);

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewComponent = (function () {
    function OverviewComponent() {
    }
    return OverviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", String)
], OverviewComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", String)
], OverviewComponent.prototype, "createNewLink", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Boolean)
], OverviewComponent.prototype, "createNew", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", String)
], OverviewComponent.prototype, "createNewText", void 0);
OverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-overview',
        template: "\n    <div class=\"card card-inverse thread-header overview-card\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">{{title}}</h3>\n        <a type=\"button\" class=\"btn btn-primary btn-lg btn-block create-new-button\" *ngIf=\"createNew\"\n           [routerLink]=\"createNewLink\">\n          {{createNewText}}\n        </a>\n      </div>\n    </div>\n  ",
        styles: ["\n    .overview-card {\n      background-color: #333;\n      border-color: #333;\n    }\n  "],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    })
], OverviewComponent);

//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagingComponent = (function () {
    function PagingComponent() {
        this.changePage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.numberOfPages = 1;
    }
    PagingComponent.prototype.ngDoCheck = function () {
        var numberOfPages = Math.ceil(this.totalCount / this.limit);
        if (numberOfPages < 1) {
            numberOfPages = 1;
        }
        if (this.numberOfPages !== numberOfPages) {
            this.numberOfPages = numberOfPages;
        }
    };
    PagingComponent.prototype.setPage = function (newPage) {
        if (newPage < 1) {
            newPage = 1;
        }
        this.changePage.emit(newPage);
    };
    return PagingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Number)
], PagingComponent.prototype, "totalCount", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Number)
], PagingComponent.prototype, "page", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Number)
], PagingComponent.prototype, "limit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === "function" && _a || Object)
], PagingComponent.prototype, "changePage", void 0);
PagingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-paging',
        template: "\n    <nav aria-label=\"...\">\n      <ul class=\"pagination pagination-lg justify-content-end\">\n        <li class=\"page-item\" [ngClass]=\"{disabled: page === 1}\">\n          <a class=\"page-link\" (click)=\"setPage(page - 1)\">Previous</a>\n        </li>\n        <li class=\"page-item\" *ngFor=\"let pageNumber of numberOfPages | forNumber\"\n            [ngClass]=\"{active: page === pageNumber + 1}\">\n          <span class=\"page-link\" *ngIf=\"page === pageNumber + 1; else showLink\">{{pageNumber + 1}}</span>\n          <ng-template #showLink>\n            <a class=\"page-link\" (click)=\"setPage(pageNumber + 1)\">{{pageNumber + 1}}</a>\n          </ng-template>\n        </li>\n        <li class=\"page-item\" [ngClass]=\"{disabled: page === numberOfPages}\">\n          <a class=\"page-link\" (click)=\"setPage(page + 1)\">Next</a>\n        </li>\n      </ul>\n    </nav>\n  "
    }),
    __metadata("design:paramtypes", [])
], PagingComponent);

var _a;
//# sourceMappingURL=paging.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_area__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAreaListResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductAreaListResultComponent = (function () {
    function ProductAreaListResultComponent() {
    }
    return ProductAreaListResultComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_area__["a" /* ProductArea */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_area__["a" /* ProductArea */]) === "function" && _a || Object)
], ProductAreaListResultComponent.prototype, "productArea", void 0);
ProductAreaListResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'rafr-product-area-list-result',
        template: "\n    <div class=\"card\" *ngIf=\"productArea\">\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">{{productArea.name}}</h4>\n        <p class=\"card-text\">{{productArea.description}}</p>\n        <a class=\"card-link\" [routerLink]=\"['/product-areas', productArea.id]\" i18n>See more</a>\n      </div>\n    </div>\n  ",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    })
], ProductAreaListResultComponent);

var _a;
//# sourceMappingURL=product-area-list-result.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(90)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"client | async; let client; else clientNotLoaded\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header d-flex justify-content-between\">\r\n      <h3>{{client.name}}</h3>\r\n      <div class=\"view-button-group\" *ngIf=\"!editing\">\r\n        <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"enableEditing(client)\">Edit</button>\r\n      </div>\r\n      <div class=\"edit-button-group\" *ngIf=\"editing\">\r\n        <button type=\"button\" class=\"btn btn-danger pull-right\" (click)=\"destroy(client.id)\">Delete</button>\r\n        <button type=\"button\" class=\"btn btn-secondary pull-right\" (click)=\"cancel()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"save(client)\">Save</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-block\" *ngIf=\"editing; else viewModeCardBlock\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"name\" class=\"col-2 col-form-label\">Name</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"client.name\" id=\"name\" name=\"name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"description\" class=\"col-2 col-form-label\">Description</label>\r\n        <div class=\"col-10\">\r\n          <textarea class=\"form-control\" id=\"description\" name=\"description\" aria-describedby=\"descriptionHelp\"\r\n                    placeholder=\"Enter description\" [(ngModel)]=\"client.description\" rows=\"3\"\r\n                    required></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template #viewModeCardBlock>\r\n      <div class=\"card-block\">\r\n        <p class=\"card-text\">Name: {{client.name}}</p>\r\n        <p class=\"card-text\">Description: {{client.description}}</p>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #clientNotLoaded>\r\n  <rafr-loading [loadingText]=\"'Loading client'\"></rafr-loading>\r\n</ng-template>\r\n"

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-block\">\r\n    <form (ngSubmit)=\"createClient()\" #createClientForm=\"ngForm\">\r\n      <h4 class=\"card-title\">Create Client</h4>\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Name</label>\r\n        <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Enter name\" aria-describedby=\"nameHelp\"\r\n               [(ngModel)]=\"clientModel.name\" type=\"text\" required>\r\n        <small id=\"nameHelp\" class=\"form-text text-muted\">The client's name</small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Description</label>\r\n        <textarea class=\"form-control\" id=\"description\" name=\"description\" aria-describedby=\"descriptionHelp\"\r\n                  placeholder=\"Enter description\" [(ngModel)]=\"clientModel.description\" rows=\"3\"\r\n                  required></textarea>\r\n        <small id=\"descriptionHelp\" class=\"form-text text-muted\">A short description of the product</small>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\">Create</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-block\">\r\n    <form (ngSubmit)=\"createProductArea()\" #createProductAreaForm=\"ngForm\">\r\n      <h4 class=\"card-title\">Create Product Area</h4>\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" aria-describedby=\"nameHelp\"\r\n               placeholder=\"Enter name\" [(ngModel)]=\"productAreaModel.name\" required>\r\n        <small id=\"nameHelp\" class=\"form-text text-muted\">The product area's name</small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Description</label>\r\n        <textarea class=\"form-control\" id=\"description\" name=\"description\" aria-describedby=\"descriptionHelp\"\r\n                  placeholder=\"Enter description\" [(ngModel)]=\"productAreaModel.description\" rows=\"3\"\r\n                  required></textarea>\r\n        <small id=\"descriptionHelp\" class=\"form-text text-muted\">A short description of the product</small>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\">Create</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\r\n          data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\r\n          aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" routerLink=\"/\">Really Awesome Feature Requests</a>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\" *ngIf=\"auth.isAuthenticated | async; else notAuthenticatedUl\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/clients\">Clients</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/product-areas\">Product Areas</a>\r\n      </li>\r\n    </ul>\r\n    <ng-template #notAuthenticatedUl>\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Please sign in first\" disabled>Clients</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Please sign in first\" disabled>Product\r\n            Areas</a>\r\n        </li>\r\n      </ul>\r\n    </ng-template>\r\n    <div>\r\n      <button type=\"button\" class=\"btn btn-outline-danger\" *ngIf=\"auth.isAuthenticated | async; else notAuthenticated\"\r\n              (click)=\"auth.logout()\">\r\n        Sign Out\r\n      </button>\r\n      <ng-template #notAuthenticated>\r\n        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"auth.login()\">\r\n          Sign In\r\n        </button>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1 class=\"display-3\" i18n>Welcome to the Really Awesome Feature Requests's admin interface!</h1>\r\n  <p class=\"lead\" i18n>The only place where you can manage clients and product areas</p>\r\n  <hr class=\"my-4\">\r\n  <p i18n>There is no security in place at the moment, so go crazy! Creating, reading (getting), updating, and deleting for clients and product areas are up. Other modules may be added once I start creating the application interface. The next step here is to add login and security.</p>\r\n  <p class=\"lead\">\r\n    <a class=\"btn btn-outline-success btn-lg\" role=\"button\" i18n\r\n       href=\"http://rafr-feature.s3-website-us-east-1.amazonaws.com/\">Go to the app</a>\r\n    <a class=\"btn btn-outline-primary btn-lg\" href=\"https://github.com/nick-freitas/ReallyAwesomeFeatureRequests\"\r\n       role=\"button\" i18n>Go to GitHub</a>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"productArea | async; let productArea; else productAreaNotLoaded\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header d-flex justify-content-between\">\r\n      <h3>{{productArea.name}}</h3>\r\n      <div class=\"view-button-group\" *ngIf=\"!editing\">\r\n        <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"enableEditing(productArea)\">Edit</button>\r\n      </div>\r\n      <div class=\"edit-button-group\" *ngIf=\"editing\">\r\n        <button type=\"button\" class=\"btn btn-danger pull-right\" (click)=\"destroy(productArea.id)\">Delete</button>\r\n        <button type=\"button\" class=\"btn btn-secondary pull-right\" (click)=\"cancel()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"save(productArea)\">Save</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-block\" *ngIf=\"editing; else viewModeCardBlock\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"product-area-name\" class=\"col-2 col-form-label\">Name</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" id=\"product-area-name\" name=\"name\" [(ngModel)]=\"productArea.name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"description\" class=\"col-2 col-form-label\">Description</label>\r\n        <div class=\"col-10\">\r\n          <textarea class=\"form-control\" id=\"description\" name=\"description\" aria-describedby=\"descriptionHelp\"\r\n                    placeholder=\"Enter description\" [(ngModel)]=\"productArea.description\" rows=\"3\"\r\n                    required></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template #viewModeCardBlock>\r\n      <div class=\"card-block\">\r\n        <p class=\"card-text\">Name: {{productArea.name}}</p>\r\n        <p class=\"card-text\">Description: {{productArea.description}}</p>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #productAreaNotLoaded>\r\n  <rafr-loading [loadingText]=\"'Loading product area'\"></rafr-loading>\r\n</ng-template>\r\n"

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js___default.a.WebAuth({
            clientID: 'pcoDzYlo-xknqE6v9S6KMiRKi5Bn7X0f',
            domain: 'rafr-admin.auth0.com',
            responseType: 'token id_token',
            audience: 'https://rafr-admin.auth0.com/userinfo',
            redirectUri: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].loginCallbackUrl,
            scope: 'openid'
        });
        this.isAuthenticated = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](true);
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/']);
            }
            else if (err) {
                _this.router.navigate(['/']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        this.isAuthenticated.next(true);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        this.isAuthenticated.next(false);
        // Go back to the home route
        this.router.navigate(['/']);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientService = (function (_super) {
    __extends(ClientService, _super);
    function ClientService(http) {
        return _super.call(this, http) || this;
    }
    ClientService.prototype.getListUrl = function () {
        return this.baseUrl + "clients";
    };
    ClientService.prototype.getOneUrl = function (id) {
        return this.baseUrl + "clients/" + id;
    };
    ClientService.prototype.updateUrl = function (id) {
        return this.baseUrl + "clients/" + id;
    };
    ClientService.prototype.createUrl = function () {
        return this.baseUrl + "clients";
    };
    ClientService.prototype.destroyUrl = function (id) {
        return this.baseUrl + "clients/" + id;
    };
    /**
     * Creates a new instance of client based on the client object provided to it
     *
     * @param client
     * @returns {Client}
     */
    ClientService.prototype.createNewInstance = function (client) {
        return new __WEBPACK_IMPORTED_MODULE_2__client__["a" /* Client */](client.id, client.name, client.description);
    };
    return ClientService;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));
ClientService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ClientService);

var _a;
//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_area__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAreaService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductAreaService = (function (_super) {
    __extends(ProductAreaService, _super);
    function ProductAreaService(http) {
        return _super.call(this, http) || this;
    }
    ProductAreaService.prototype.getListUrl = function () {
        return this.baseUrl + "product-areas";
    };
    ProductAreaService.prototype.getOneUrl = function (id) {
        return this.baseUrl + "product-areas/" + id;
    };
    ProductAreaService.prototype.updateUrl = function (id) {
        return this.baseUrl + "product-areas/" + id;
    };
    ProductAreaService.prototype.createUrl = function () {
        return this.baseUrl + "product-areas";
    };
    ProductAreaService.prototype.destroyUrl = function (id) {
        return this.baseUrl + "product-areas/" + id;
    };
    /**
     * Creates a new instance of Product Area based on the product area object provided to it
     *
     * @param productArea
     * @returns {Client}
     */
    ProductAreaService.prototype.createNewInstance = function (productArea) {
        return new __WEBPACK_IMPORTED_MODULE_3__product_area__["a" /* ProductArea */](productArea.id, productArea.name, productArea.description);
    };
    return ProductAreaService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));
ProductAreaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductAreaService);

var _a;
//# sourceMappingURL=product-area.service.js.map

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(174);


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    envName: "dev",
    apiUrl: "http://localhost:3000/",
    loginCallbackUrl: "http://localhost:4300/callback"
};
//# sourceMappingURL=environment.js.map

/***/ })

},[555]);
//# sourceMappingURL=main.bundle.js.map