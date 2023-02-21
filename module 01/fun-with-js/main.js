var o = {};

function max(a, b) {
    if (a > b) return a;
    return b;
}


function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
    console.log(typeof this);

    Person.prototype.counter++;
}

Person.prototype.log = function() {
    console.log('Person', this.firstName, this.lastName, this);
}
Person.prototype.counter = 0;



String.prototype.toUpperCase = function () {
    return 42;
}

var p1 = new Person('John', 'Smith');
var p2 = new Person('Moshe', 'Cohen');



var a1 = [2, 4, 6];
var a2 = {
    0: 2, 
    1: 4, 
    2: 6
};

p1.log();

var p1closure = Person.prototype.log.bind(p1);

setTimeout(() => p1.log(), 2000);


var f1 = function(a) {
    return a * 4;
}

var f2 = f1;

var f3 = a =>  a * 4;