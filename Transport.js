"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garage = exports.Motorcycle = exports.Automobile = exports.CarClass = exports.CarBodyType = exports.Transport = exports.Person = exports.CustomDocumentType = void 0;
var decorators_js_1 = require("./decorators.js");
var CustomDocumentType;
(function (CustomDocumentType) {
    CustomDocumentType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    CustomDocumentType["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    CustomDocumentType["IDCard"] = "ID-\u043A\u0430\u0440\u0442\u0430";
})(CustomDocumentType || (exports.CustomDocumentType = CustomDocumentType = {}));
var Person = /** @class */ (function () {
    function Person(lastName, firstName, middleName, birthDate, documentType, documentSeries, documentNumber) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.birthDate = birthDate;
        this.documentType = documentType;
        this.documentSeries = documentSeries;
        this.documentNumber = documentNumber;
    }
    Person.prototype.displayInfo = function () {
        console.log("\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446: ".concat(this.lastName, " ").concat(this.firstName, " ").concat(this.middleName, ", \u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(this.birthDate.toDateString(), ", \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442: ").concat(this.documentType, " ").concat(this.documentSeries, " ").concat(this.documentNumber));
    };
    return Person;
}());
exports.Person = Person;
var Transport = /** @class */ (function () {
    function Transport(brand, model, year, vin, registrationNumber, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.owner = owner;
    }
    Transport.prototype.displayVehicleInfo = function () {
        return "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E: ".concat(this.brand, " ").concat(this.model, ", \u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ").concat(this.year, ", VIN: ").concat(this.vin, ", \u0420\u0435\u0433. \u043D\u043E\u043C\u0435\u0440: ").concat(this.registrationNumber);
    };
    return Transport;
}());
exports.Transport = Transport;
var CarBodyType;
(function (CarBodyType) {
    CarBodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    CarBodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    CarBodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
})(CarBodyType || (exports.CarBodyType = CarBodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
    CarClass["Premium"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
})(CarClass || (exports.CarClass = CarClass = {}));
var Automobile = function () {
    var _classDecorators = [decorators_js_1.SealedClass];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Transport;
    var _instanceExtraInitializers = [];
    var _displayVehicleInfo_decorators;
    var Automobile = _classThis = /** @class */ (function (_super) {
        __extends(Automobile_1, _super);
        function Automobile_1(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
            var _this = _super.call(this, brand, model, year, vin, registrationNumber, owner) || this;
            _this.bodyType = (__runInitializers(_this, _instanceExtraInitializers), bodyType);
            _this.carClass = carClass;
            Object.seal(_this);
            return _this;
        }
        Automobile_1.prototype.displayVehicleInfo = function () {
            return "".concat(_super.prototype.displayVehicleInfo.call(this), ", \u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ").concat(this.bodyType, ", \u041A\u043B\u0430\u0441\u0441: ").concat(this.carClass);
        };
        return Automobile_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Automobile");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _displayVehicleInfo_decorators = [(0, decorators_js_1.ToUpperCase)()];
        __esDecorate(_classThis, null, _displayVehicleInfo_decorators, { kind: "method", name: "displayVehicleInfo", static: false, private: false, access: { has: function (obj) { return "displayVehicleInfo" in obj; }, get: function (obj) { return obj.displayVehicleInfo; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Automobile = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Automobile = _classThis;
}();
exports.Automobile = Automobile;
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(brand, model, year, vin, registrationNumber, owner, frameType, isForSport) {
        var _this = _super.call(this, brand, model, year, vin, registrationNumber, owner) || this;
        _this.frameType = frameType;
        _this.isForSport = isForSport;
        return _this;
    }
    Motorcycle.prototype.displayVehicleInfo = function () {
        return "".concat(_super.prototype.displayVehicleInfo.call(this), ", \u0422\u0438\u043F \u0440\u0430\u043C\u044B: ").concat(this.frameType, ", \u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439: ").concat(this.isForSport ? 'Да' : 'Нет');
    };
    return Motorcycle;
}(Transport));
exports.Motorcycle = Motorcycle;
var Garage = /** @class */ (function () {
    function Garage(creationDate) {
        this.creationDate = creationDate;
        this.vehicles = [];
    }
    Garage.prototype.getAllVehicles = function () {
        return this.vehicles;
    };
    Garage.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    return Garage;
}());
exports.Garage = Garage;
