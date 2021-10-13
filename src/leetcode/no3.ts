function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let sub = "";
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    const index = sub.indexOf(char);
    if (index > -1) {
      max = Math.max(max, sub.length);
      sub = sub.slice(index + 1);
    }
    sub += char;
  }

  return Math.max(max, sub.length);
}

function lengthOfLongestSubstringII(s: string): number {
  let max = 0;
  let i = 0;
  let j = 0;
  while (i <= j && j < s.length) {
    const char = s[j];
    const index = s.indexOf(char, i);
    if (index === -1 || index >= j) {
      max = Math.max(max, j + 1 - i);
      j += 1;
    } else {
      i += 1;
    }
  }
  return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstringII("abcabcbb"));
