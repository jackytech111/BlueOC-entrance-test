import { mostFrequentLengthStrings } from "./solution.js";

function isEqualArray(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function test(name, input, expected) {
  const result = mostFrequentLengthStrings(input);

  if (isEqualArray(result, expected)) {
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
    mostFrequentLengthStrings(input);

    console.log("FAIL:", name);
  } catch (error) {
    console.log("PASS:", name);
  }
}

test("normal array", ["a", "ab", "abc", "cd", "def", "gh"], ["ab", "cd", "gh"]);

test("single string", ["hello"], ["hello"]);

test("empty array", [], []);

test(
  "length 3 appears most",
  ["cat", "dog", "hi", "ok", "yes"],
  ["cat", "dog", "yes"],
);

test("duplicate strings", ["aa", "bb", "cc", "d"], ["aa", "bb", "cc"]);

testError("input is not an array", "hello");
