const add = function(x, value) {
	x += value;
  return x;
};

const subtract = function(x, value) {
	x-= value;
  return x;
};

const sum = function(x) {
  if (x.length !== 0) {
    return x.reduce((previous, current) => {
      return previous + current;
    });
  } else {
    return 0
  }
};

const multiply = function(x) {

  return x.reduce((previous, current) => {
    return previous * current;
  });

};

const power = function(x, value) {
	let y = x;
  for (i = 1; i < value; i++) {
    y *= x;
  };
  return y;
};

const factorial = function(value) {
  let y = 1;
  for (i = 1; i < value+1; i++) {
    y *= i;
  };
  return y;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
