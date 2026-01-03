// 1) Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("sachin")); // nihcas



// 2) Reverse words in a sentence
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}
console.log(reverseWords("This is javascript class")); // class javascript is This

// 3) First non-repeated character
function firstNonRepeatedChar(str) {
  const freq = {};
  for (const ch of str) freq[ch] = (freq[ch] || 0) + 1;
  for (const ch of str) if (freq[ch] === 1) return ch;
  return null;
}
console.log(firstNonRepeatedChar("entertainment")); // r

// 4) Title case
function toTitleCase(sentence) {
  return sentence
    .split(" ")
    .filter(w => w.length > 0)
    .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}
console.log(toTitleCase("this is javascript class")); // This Is Javascript Class

// 5) Longest word in a sentence
function longestWord(sentence) {
  const words = sentence.split(" ").filter(Boolean);
  let ans = "";
  for (const w of words) {
    if (w.length > ans.length) ans = w;
  }
  return ans;
}
console.log(longestWord("this is javascript class")); // javascript

// 6) Mask account number (12*******87 style)
function maskAccountNumber(acc) {
  if (acc.length < 4) return acc; // edge case
  return acc.slice(0, 2) + "*".repeat(acc.length - 4) + acc.slice(-2);
}
console.log(maskAccountNumber("12345678987")); // 12*******87

// 7) Credit-card formatting (1111-2222-3333-4444)
function formatCreditCard(cc) {
  return cc.replace(/\D/g, "").match(/.{1,4}/g)?.join("-") || "";
}
console.log(formatCreditCard("1111222233334444")); // 1111-2222-3333-4444

// 8) Check anagram
function isAnagram(a, b) {
  const clean = s => s.toLowerCase().replace(/\s+/g, "");
  a = clean(a); b = clean(b);
  if (a.length !== b.length) return false;

  const freq = {};
  for (const ch of a) freq[ch] = (freq[ch] || 0) + 1;
  for (const ch of b) {
    if (!freq[ch]) return false;
    freq[ch]--;
  }
  return true;
}
console.log(isAnagram("listen", "silent")); // true

// 9) Remove special characters (keep only letters)
function removeSpecialChars(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}
console.log(removeSpecialChars("hello@#hi&")); // hellohi

// 10) Move special characters to the end
function moveSpecialToEnd(str) {
  let normal = "";
  let special = "";
  for (const ch of str) {
    if (/[a-zA-Z0-9]/.test(ch)) normal += ch;
    else special += ch;
  }
  return normal + special;
}
console.log(moveSpecialToEnd("hello@#hi&")); // hellohi@#&