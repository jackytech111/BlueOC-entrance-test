export function sumTwoLargest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error("Input must be an array with at least 2 elements.");
  }

  const sorted = [...arr].sort((a, b) => b - a);
  return sorted[0] + sorted[1];
}
