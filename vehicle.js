// CLASS DEFINITION
class Car {
    
    // CONSTRUCTOR
    constructor(color, model, vin) {
        this.color = color;
        this.model = model;
        this.vin = vin;
        this.year = new Date().getFullYear(); // ENCAPSULATION
        this.brand = "Generic Car";
        this.mileage = 0;
    }

    // GETTERS
    getColor() {
        return this.color;
    }

    getModel() {
        return this.model;
    }

    getVin() {
        return this.vin;
    }

    getYear() {
        return this.year;
    }

    getBrand() {
        return this.brand;
    }

    // SETTERS
    setColor(color) {
        this.color = color;
    }

    setModel(model) {
        this.model = model;
    }

    setVin(vin) {
        this.vin = vin;
    }

    setYear(year) {
        this.year = year;
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

// INHERITANCE
class ToyotaCar extends Car {
    constructor(color, model, vin) {
        super(color, model, vin); // PARENT CLASS SATISFACTION
        this.brand = "Toyota";
        this.noOfTires = 6;
        this.bulletProof = false;
    }

    aboutThisCar() {
        console.log("My ", this.getBrand(), " car has a color of ", 
                this.getColor(), " and it VIN is: ", this.getVin());
    }
}

// INITIALIZING THE CAR OBJECT
let toyotaCar = new Car("Red", "Venza", 346387463876);

// INTERACTING WITH THE TOYOTA CAR
console.log("My Toyota", toyotaCar.getModel(), " car has a color of ", 
                toyotaCar.getColor(), " and it VIN is: ", toyotaCar.getVin());

// INTERACTED WITH THE BABY CLASS
let babyToyotaCar = new ToyotaCar("Yellow", "Corolla", 39874893479837);
babyToyotaCar.aboutThisCar();

// DESTROY OBJECTS
delete toyotaCar, babyToyotaCar;
console.log(babyToyotaCar.aboutThisCar());