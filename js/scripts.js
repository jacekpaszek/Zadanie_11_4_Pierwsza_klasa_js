var iPhone6S = new Phone("Apple", "2250 zl", "silver");
var GalaxyS8 = new Phone("Samsung", "3700 zl", "blue");

function Phone(brand, price, color) {
	this.brand = brand; 
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and "
		+ "the price is " + this.price + ".");
}

iPhone6S.printInfo();
GalaxyS8.printInfo();