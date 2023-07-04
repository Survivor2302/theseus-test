function isValidClosure(string) {
  const stack = [];
  const closurePairs = { '{': '}', '[': ']', '(': ')' };

  for (const char of string) {
    closurePairs[char] ? stack.push(char) : closurePairs[stack.pop()] !== char && (stack.length = 1);
  }

  return stack.length === 0;
}


const result1 = isValidClosure("{([{}])}") // true
const result2 = isValidClosure("([)]") // false
const result3 = isValidClosure("{[])") // false
const result4 = isValidClosure("{[{[({()})]}]}") // true
const result5 = isValidClosure("{[{[({()})]}]]") // false

console.log("result1 : ", result1)
console.log("result2 : ", result2)
console.log("result3 : ", result3)
console.log("result4 : ", result4)
console.log("result5 : ", result5)

/******* Is valid closure ******/
// Check if the set of closures is valid.