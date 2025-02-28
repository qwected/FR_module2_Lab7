"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transport_js_1 = require("./Transport.js");
function getCurrentDate() {
    console.log(new Date().toLocaleTimeString());
}
function startClock() {
    var intervalId = setInterval(function () {
        getCurrentDate();
    }, 5000);
    setTimeout(function () {
        console.log("1 минута прошла. Таймер остановлен.");
        clearInterval(intervalId);
    }, 60000);
}
var owner = new Transport_js_1.Person('Иванов', 'Иван', 'Иванович', new Date(1985, 6, 15), Transport_js_1.CustomDocumentType.Passport, '1234', '567890');
var car = new Transport_js_1.Automobile('Toyota', 'Camry', 2022, 'JTDBE32K502109123', 'А123ВС77', owner, Transport_js_1.CarBodyType.Sedan, Transport_js_1.CarClass.Business);
var bike = new Transport_js_1.Motorcycle('Yamaha', 'YZF-R1', 2021, 'JYARN23E5DA004321', 'Б456СД78', owner, 'Спортивная', true);
var garage = new Transport_js_1.Garage(new Date());
garage.addVehicle(car);
garage.addVehicle(bike);
console.log('--- Владелец ---');
owner.displayInfo();
console.log('--- Автомобиль ---');
console.log(car.displayVehicleInfo());
console.log('--- Мотоцикл ---');
console.log(bike.displayVehicleInfo());
console.log('--- Список ТС в гараже ---');
garage.getAllVehicles().forEach(function (vehicle) { return console.log(vehicle.displayVehicleInfo()); });
try {
    car.newProperty = 'Test';
}
catch (e) {
    console.log('Изменение прототипа заблокировано:', e.message);
}
startClock();
