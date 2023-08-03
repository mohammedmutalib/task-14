function lookAndSay(start, n) {
    const sequence = [start.toString()];
  
    for (let i = 1; i < n; i++) {
      const currentTerm = sequence[i - 1];
      let nextTerm = '';
      let count = 1;
  
      for (let j = 1; j < currentTerm.length; j++) {
        if (currentTerm[j] === currentTerm[j - 1]) {
          count++;
        } else {
          nextTerm += count.toString() + currentTerm[j - 1];
          count = 1;
        }
      }
  
      nextTerm += count.toString() + currentTerm[currentTerm.length - 1];
      sequence.push(nextTerm);
    }
  
    return sequence.map(Number);
  }
  
  // Test cases
  console.log(lookAndSay(1, 7)); // Output: [1, 11, 21, 1211, 111221, 312211, 13112221]
  console.log(lookAndSay(123, 4)); // Output: [123, 111213, 31121113, 1321123113]
  console.log(lookAndSay(70, 5)); // Output: [70, 1710, 11171110, 31173110, 132117132110]
  