"use strict";

var arr = [1, 2, 3];
var brr = [4, 5];
console.log([].concat(arr, brr));

var printTable = function printTable(x) {
  var _console;

  var out = [];

  for (var i = 1; i <= 10; ++i) {
    out.push(i * x);
  }

  (_console = console).log.apply(_console, out);
};

printTable(5);