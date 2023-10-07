module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBr = bracketsConfig.map(pair => pair[0]);
  const closeBr = bracketsConfig.map(pair => pair[1]);

  for (let i = 0; i < str.length; i++) {
    const el = str[i];

    if (openBr.includes(el)) {
      stack.push(el);
    } else if (closeBr.includes(el)) {
      const lastOpenedBr = stack.pop();
      const expectedClosedBr = bracketsConfig.find(pair => pair[0] === lastOpenedBr)[1];

      if (el !== expectedClosedBr) {
        return false;
      }
    }
  }
  return stack.length === 0;
};