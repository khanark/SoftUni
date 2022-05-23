class Laptop {
	constructor(info, quality) {
		this.info = info;
		this.quality = quality;
		this.isOn = false;
	}

	turnOn = () => {
		this.isOn = true;
		this.quality -= 1;
	};
	turnOff = () => {
    this.isOn = false
    this.quality -= 1;
  };
	showInfo = () => JSON.stringify(this.info);

	get price() {
    const output = 800 - (this.info.age * 2) + (this.quality * 0.5)
		return output;
	}
}

let info = {producer: "Lenovo", age: 1, brand: "Legion"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()

