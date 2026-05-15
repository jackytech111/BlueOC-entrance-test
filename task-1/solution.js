export function mostFrequentLengthStrings(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }

  if (arr.length === 0) {
    return [];
  }

  const freq = {};
  const groups = {};

  for (const str of arr) {
    const len = str.length;

    freq[len] = (freq[len] || 0) + 1;

    if (!groups[len]) {
      groups[len] = [];
    }

    groups[len].push(str);
  }

  let maxFreq = 0;
  let targetLength = null;

  for (const len in freq) {
    if (freq[len] > maxFreq) {
      maxFreq = freq[len];
      targetLength = len;
    }
  }

  return groups[targetLength];
}
