# Task 2: Sum of Top Two Integers

## Objective

Write a function that returns the sum of the two largest integers in an array.

Example:

```js
Input: [1, 4, 2, 3, 5]
Output: 9
```

The two largest numbers are `5` and `4`, so the result is `5 + 4 = 9`.

## Solution

The function first checks if the input is an array and has at least two elements.

After that, it sorts the array in descending order and returns the sum of the first two numbers.

```js
sumTwoLargest([1, 4, 2, 3, 5]); // 9
```

## Complexity

Time complexity: `O(n log n)`, because the array is sorted before taking the two largest numbers.

Space complexity: `O(n)`, because a copy of the array is created before sorting.

## How to Run

Run this command in the project root folder:

```bash
npm run task2
```

Or run directly:

```bash
node test.js
```

## Test Cases

The test file includes these cases:

- Normal array
- Array with only two numbers
- Array with negative numbers
- Array with duplicate largest numbers
- Array with mixed numbers
- Invalid input with only one number
- Invalid input that is not an array
