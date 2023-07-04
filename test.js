function randomPeer(users) {
    const shuffledUsers = users.sort(() => Math.random() - 0.5);
    const pairs = [];
  
    for (let i = 0; i < shuffledUsers.length; i += 2) {
      const pair = shuffledUsers.slice(i, i + 2);
      pairs.push(pair);
    }
  
    return pairs;
  }

function testRandomPeer() {
    const users = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
    ];
  
      const pairs = randomPeer(users);

      if (pairs.length !== Math.ceil(users.length / 2)) {
        console.error("Test failed");
      } else {
        console.log("Test passed");}
  }
  

///////////////////////////////////////////////////////////////////////////////////////////////////
function sumOfTwoDigitsInTheTable(arr, target) {
    const tab = new Set();

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      const soughtNumber  = target - num;
  
      if (tab.has(soughtNumber)) {
        return true;
      }
  
      tab.add(num);
    }
  
    return false;
  }


function testSumOfTwoDigitsInTheTable() {
    const tests = [
      { arr: [1, 8, 3, 6, 9, 2, 5, 12], target: 9, expected: true },
      { arr: [1, 1, 3, 6, 9, 2, 5, 12], target: 14, expected: true },
      { arr: [1, 80, 3, 6, 9, 2, 6, 12], target: 17, expected: false },
      { arr: [1, 90, 9, 6, 32, 2, 5, 12], target: 18, expected: true },
    ];
  
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      const result = sumOfTwoDigitsInTheTable(test.arr, test.target);
  
      if (result === test.expected) {
        console.log(`Test ${i + 1} passed.`);
      } else {
        console.error(`Test ${i + 1} failed. Expected: ${test.expected}, but received: ${result}`);
      }
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  function isValidClosure(string) {
    const stack = [];
    const closurePairs = { '{': '}', '[': ']', '(': ')' };
  
    for (const char of string) {
      closurePairs[char] ? stack.push(char) : closurePairs[stack.pop()] !== char && (stack.length = 1);
    }
  
    return stack.length === 0;
  }

  function testIsValidClosure() {
    const testCases = [
      { input: "{([{}])}", expected: true },
      { input: "([)]", expected: false },
      { input: "{[])", expected: false },
      { input: "{[{[({()})]}]}", expected: true },
      { input: "{[{[({()})]}]]", expected: false }
    ];

    let i=1;

    for (const { input, expected } of testCases) {
      const result = isValidClosure(input);
  
      if (result === expected) {
        console.log(`Test ${i} passed.`);
        i++;
        
      } else {
        console.log(`Test ${i} failed.`);
        i++;
      }
    }
  }


///////////////////////////////////////////////////////////////////////////////////////////////////


  

  
console.log("----randomPeer----\n");
testRandomPeer();

console.log("----SumOfTwoDigitsInTheTable----\n");
testSumOfTwoDigitsInTheTable();

console.log("----syntaxeError----\n");
testIsValidClosure();
