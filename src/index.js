module.exports = function check(str, bracketsConfig) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (bracketsConfig.includes(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let directKey = stack.at(-1)

      if (bracketsConfig[char] === directKey) {
        stack.pop()
      } else {
        return false
      }
    }
  } return stack.length === 0;
}

