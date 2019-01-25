// CLASS VEHICLE
class vehicle {
    
    // CONSTRUCTOR
    constructor(type, color, model, vin) {
        this.type = type;
        this.color = color;
        this.model = model;
        this.vin = vin;
        
        
    }
   //GETTERS
    getType(){
       return this.type;
    }
    getColor() {
        return this.color;
    }

    getModel() {
        return this.model;
    }

    getVin() {
        return this.vin;
    }

    getBrand() {
        return this.brand;
    }


    // SETTERS
    setType(type) {
        this.type = type;
    }
    setColor(color) {
        this.color = color;
    }

    setModel(model) {
        this.model = model;
    }

    setVin(vin) {
        this.vin = vin;
    }

    setBrand(brand) {
        this.brand = brand;
    }
 
// PARENT CLASS
class vehicle {
    constructor(color, model, vin) {
    this.color =red;
    this.model = 2014;
    this.vin = 239840343;

}

// INHERITANCE
class Car extends Vehicle {
    constructor(color, model, vin) {
        super(color, model, vin); // PARENT CLASS SATISFACTION
        this.type = Car
        this.brand = "Toyota";
        this.noOfTires = 4;
        this.bulletProof = True;

        // INHERITANCE
class Bus extends Vehicle {
    constructor(color, model, vin) {
        super(color, model, vin); // PARENT CLASS SATISFACTION
        this.type = Bus
        this.brand = "Hiace";
        this.noOfTires = 4;
        this.bulletProof = false;

        // INHERITANCE
class Truck extends Vehicle {
    constructor(color, model, vin) {
        super(color, model, vin); // PARENT CLASS SATISFACTION
        this.type = Truck
        this.brand = "Man";
        this.noOfTires = 12;
        this.bulletProof = false;

        aboutThisVehicle() {
            console.log("My ", this.getType(), " vehicle has a color of ", 
                    this.getColor(), " it VIN is: ", this.getVin(),"it is a ", this.brand),
                    "with", this.noOfTires;
        }
    }     

    
    let toyotaCar = new Car("Red", "Venza", 346387463876);
    let HiaceBus = new Bus ("blue","Serena", 77877677867);
    let ManTruck = new Truck ("white, bloom",35432434545);

    console.log("My Toyota", toyotaCar.getModel(), " car has a color of ", 
                toyotaCar.getColor(), " and it VIN is: ", toyotaCar.getVin(), "it is a", toyotaCar.getBrand(), "with", toyotaCar.getNoOfTyres());

    console.log("My Hiace", Hiacebus.getModel(), " bus has a color of ", 
                HiaceBus.getColor(), " and it VIN is: ", HiaceBus.getVin(),"it is a", HiaceBus.getBrand(), "with", HiaceBus.getNoOfTyres());
                

    console.log("My Man", ManTruck.getModel(), " truck has a color of ", 
                ManTruck.getColor(), " and it VIN is: ", ManTruck.getVin(), "it is a", ManTruck.getBrand(), "with", ManTruck.getNoOfTyres());
            




            
            


 

