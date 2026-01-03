// 1) Occurrence of each character
function charOccurrence(str) {
  const freq = {};
  for (const ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}
console.log(charOccurrence("entertainment"));
// { e: 3, n: 2, t: 3, e... }



// 2) Character repeated max times (ignore spaces, output uppercase)
function maxRepeatedChar(str) {
  const freq = {};
  for (const ch of str.toLowerCase()) {
    if (ch === " ") continue;
    freq[ch] = (freq[ch] || 0) + 1;
  }

  let maxChar = null;
  let maxCount = 0;
  for (const ch in freq) {
    if (freq[ch] > maxCount) {
      maxCount = freq[ch];
      maxChar = ch;
    }
  }
  return maxChar ? maxChar.toUpperCase() : null;
}
console.log(maxRepeatedChar("hello world")); // L



// 3) Swap case for each character
function swapCase(str) {
  let out = "";
  for (const ch of str) {
    if (ch >= "A" && ch <= "Z") out += ch.toLowerCase();
    else if (ch >= "a" && ch <= "z") out += ch.toUpperCase();
    else out += ch;
  }
  return out;
}
console.log(swapCase("Hello World")); // hELLO wORLD



// 4) Abbreviation (R. N. tagore)
function abbreviation(fullName) {
  const parts = fullName.split(" ").filter(Boolean);
  if (parts.length === 0) return "";
  const last = parts[parts.length - 1].toLowerCase();
  const initials = parts.slice(0, -1).map(w => w[0].toUpperCase() + ".");
  return (initials.length ? initials.join(" ") + " " : "") + last;
}
console.log(abbreviation("Rabindra Nath Tagore")); // R. N. tagore



// 5) Shift characters to next (abcxyz → bcdyza)
function shiftNext(str) {
  let out = "";
  for (const ch of str) {
    if (ch >= "a" && ch <= "y") out += String.fromCharCode(ch.charCodeAt(0) + 1);
    else if (ch === "z") out += "a";
    else if (ch >= "A" && ch <= "Y") out += String.fromCharCode(ch.charCodeAt(0) + 1);
    else if (ch === "Z") out += "A";
    else out += ch;
  }
  return out;
}
console.log(shiftNext("abcxyz")); // bcdyza



// 6) Validate parentheses sequence ( () [] {} )
function isValidParentheses(s) {
  const stack = [];
  const map = { ")": "(", "]": "[", "}": "{" };

  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") stack.push(ch);
    else if (ch === ")" || ch === "]" || ch === "}") {
      if (stack.pop() !== map[ch]) return false;
    }
  }
  return stack.length === 0;
}
console.log(isValidParentheses("([{ }])".replace(/\s/g, ""))); // true



// 7) Permutations of 3-letter word (ABC)
function permutations3(word) {
  if (word.length !== 3) return [];
  const a = word[0], b = word[1], c = word[2];
  return [a+b+c, a+c+b, b+a+c, b+c+a, c+a+b, c+b+a];
}
console.log(permutations3("ABC")); // [ 'ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA' ]



// 8) Number to Roman
function intToRoman(num) {
  const map = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
  ];
  let res = "";
  for (const [val, sym] of map) {
    while (num >= val) {
      res += sym;
      num -= val;
    }
  }
  return res;
}
console.log(intToRoman(9));  // IX
console.log(intToRoman(12)); // XII



// 9) Roman to Integer
function romanToInt(s) {
  const val = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = val[s[i]];
    const next = val[s[i + 1]] || 0;
    if (curr < next) total -= curr;
    else total += curr;
  }
  return total;
}
console.log(romanToInt("IX"));   // 9
console.log(romanToInt("XII"));  // 12



// 10) String compression (aaabbc → a3b2c1)
function compressString(str) {
  if (!str) return "";
  let out = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) count++;
    else {
      out += str[i - 1] + count;
      count = 1;
    }
  }
  return out;
}
console.log(compressString("aaabbc")); // a3b2c1
