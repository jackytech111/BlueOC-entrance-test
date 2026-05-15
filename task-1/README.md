# Task 1: Most Frequent Length Strings

## Objective

Write a function that returns all strings with the most frequent length in an array.

Example:

```js
Input: ["a", "ab", "abc", "cd", "def", "gh"];
Output: ["ab", "cd", "gh"];
```

The length `2` appears most often, so the result includes all strings with length `2`.

## Solution

The function checks if the input is an array.

Then it loops through the array and stores:

- How many times each string length appears
- Which strings belong to each length

After that, it finds the length with the highest frequency and returns the strings with that length.

```js
mostFrequentLengthStrings(["a", "ab", "abc", "cd", "def", "gh"]);
// ["ab", "cd", "gh"]
```

## Complexity

Time complexity: `O(n)`, because the array is looped through once to count the lengths.

Space complexity: `O(n)`, because the strings are stored in groups by their length.

## How to Run

Run this command in the project root folder:

```bash
npm run task1
```

Or run directly inside the `task-1` folder:

```bash
node test.js
```

## Test Cases

The test file includes these cases:

- Normal array
- Array with one string
- Empty array
- Length 3 appears most
- Duplicate strings
- Invalid input that is not an array
