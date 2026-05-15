import { sumTwoLargest } from "./solution.js";

function test(name, input, expected) {
  const result = sumTwoLargest(input);

  if (result === expected) {
    console.log("PASS:", name);
  } else {
    console.log("FAIL:", name);
    console.log("Input:", input);
    console.log("Expected:", expected);
    console.log("Got:", result);
  }
}

function testError(name, input) {
  try {
    sumTwoLargest(input);
    console.log("FAIL:", name);
  } catch (error) {
    console.log("PASS:", name);
  }
}

test("normal array", [1, 4, 2, 3, 5], 9);
test("only two numbers", [10, 20], 30);
test("with negative numbers", [-1, -4, -2, -3], -3);
test("duplicate largest numbers", [5, 5, 1, 2], 10);
test("mixed numbers", [100, 2, 30, 4], 130);

testError("array has only one number", [5]);
testError("input is not an array", "hello");
