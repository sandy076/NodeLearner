var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();

var g = new Greeter("Sandeep");

console.log(g.greet());

var Apple = {
	color : "machintosh",
	type : "iPod",
	getInfo : function(){
		return this.color + ' ' + this.type;
	}
}

Apple.color = "Red";
console.log(Apple.getInfo());