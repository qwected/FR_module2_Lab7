import { SealedClass, ToUpperCase } from './decorators.js';

export enum CustomDocumentType {
  Passport = 'Паспорт',
  DriverLicense = 'Водительское удостоверение',
  IDCard = 'ID-карта',
}

export class Person {
  constructor(
    public lastName: string,
    public firstName: string,
    public middleName: string,
    public birthDate: Date,
    public documentType: CustomDocumentType,
    public documentSeries: string,
    public documentNumber: string
  ) {}

  displayInfo(): void {
    console.log(
      `Владелец: ${this.lastName} ${this.firstName} ${this.middleName}, Дата рождения: ${this.birthDate.toDateString()}, Документ: ${this.documentType} ${this.documentSeries} ${this.documentNumber}`
    );
  }
}

export interface Vehicle {
  brand: string;
  model: string;
  year: number;
  vin: string;
  registrationNumber: string;
  owner: Person;
  displayVehicleInfo(): string;
}

export class Transport implements Vehicle {
  constructor(
    public brand: string,
    public model: string,
    public year: number,
    public vin: string,
    public registrationNumber: string,
    public owner: Person
  ) {}

  displayVehicleInfo(): string {
    return `Транспортное средство: ${this.brand} ${this.model}, Год выпуска: ${this.year}, VIN: ${this.vin}, Рег. номер: ${this.registrationNumber}`;
  }
}

export enum CarBodyType {
  Sedan = 'Седан',
  SUV = 'Внедорожник',
  Coupe = 'Купе',
}

export enum CarClass {
  Economy = 'Эконом',
  Business = 'Бизнес',
  Premium = 'Премиум',
}

@SealedClass
export class Automobile extends Transport {
  constructor(
    brand: string,
    model: string,
    year: number,
    vin: string,
    registrationNumber: string,
    owner: Person,
    public bodyType: CarBodyType,
    public carClass: CarClass
  ) {
    super(brand, model, year, vin, registrationNumber, owner);
    Object.seal(this);
  }

  @ToUpperCase()
  displayVehicleInfo(): string {
    return `${super.displayVehicleInfo()}, Тип кузова: ${this.bodyType}, Класс: ${this.carClass}`;
}

}


export class Motorcycle extends Transport {
  constructor(
    brand: string,
    model: string,
    year: number,
    vin: string,
    registrationNumber: string,
    owner: Person,
    public frameType: string,
    public isForSport: boolean
  ) {
    super(brand, model, year, vin, registrationNumber, owner);
  }

  displayVehicleInfo(): string {
    return `${super.displayVehicleInfo()}, Тип рамы: ${this.frameType}, Спортивный: ${this.isForSport ? 'Да' : 'Нет'}`;
  }
}

export class Garage<T extends Vehicle> {
  private vehicles: T[] = [];

  constructor(public creationDate: Date) {}

  getAllVehicles(): T[] {
    return this.vehicles;
  }

  addVehicle(vehicle: T): void {
    this.vehicles.push(vehicle);
  }
}

