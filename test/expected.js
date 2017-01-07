// Assignment:
var number   = 42;
var opposite = true;

// Conditions:
if (opposite) { number = -42; }

// Functions:
var square = function(x) { return x * x; };

// Arrays:
var list = [1, 2, 3, 4, 5];

// Objects:
var math = {
  root:   Math.sqrt,
  square: square,
  cube(x) { return x * square(x); }
};

// Splats:
var race = function(winner, ...runners) {
  return print(winner, runners);
};

// Existence:
if (typeof elvis !== 'undefined' && elvis !== null) { alert("I knew it!"); }

// Array comprehensions:
var cubes = (Array.from(list).map((num) => math.cube(num)));
