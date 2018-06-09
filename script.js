function Phone(brand, price, color, size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand +", price is: " + this.price + " and the color is: " + this.color + " size: " + this.size + "'" +".");

}

var iPhone6S = new Phone("Apple", 2250, "Grey", 5.7),
 samsungS8  = new Phone("Samsung", 2700, "White", 5.2),
 htc = new Phone("HTC", 2300, "White", 5.2),
 nokia5 = new Phone("Nokia", 1400, "Black", 5.5);

 iPhone6S.printInfo();
 samsungS8.printInfo();
 htc.printInfo();
 nokia5.printInfo();
