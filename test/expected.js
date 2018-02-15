// Objects:
var math = {
  root:   Math.sqrt,
  square: square,
  cube(x) { return x * square(x); }
};
