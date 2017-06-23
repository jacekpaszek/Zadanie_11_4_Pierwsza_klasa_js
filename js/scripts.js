var iPhone6S = new Phone("Apple", "2250 zl", "silver", "4,7 cala", "16GB", "1715mAh");
var GalaxyS8 = new Phone("Samsung", "3700 zl", "blue", "5,8 cala", "64GB", "3000mAh");
var OnePlus5 = new Phone("OnePlus", "2600 zl", "black", "5,5 cala", "64GB", "3300mAh");
var HuaweiP10 = new Phone("Huawei", "2300 zl", "red", "5,1 cala", "32GB", "3200mAh");

function Phone(brand, price, color, display, memory, battery) {
    this.brand = brand; 
    this.price = price;
    this.color = color;
    this.display = display;
    this.memory = memory;
    this.battery = battery;
}

Phone.prototype.printInfo = function() {
    console.log(
		"The phone brand is " + this.brand + ", color is " + this.color  + ", the display is " + 
		this.display +	", the memory is " + this.memory + ", the battery is " + this.battery + 
		" and "	+ "the price is " + this.price + "."
    );
}

iPhone6S.printInfo();
GalaxyS8.printInfo();
OnePlus5.printInfo();
HuaweiP10.printInfo();