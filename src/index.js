module.exports = function check(str, bracketsConfig) {
  // |()|
  let brackets  = str.split('');
  let stack = [];
  let config = arrayToObject(bracketsConfig); 
  for (let i = 0; i < brackets.length; i++) {
    let char = brackets[i];
    if(config[char] && config[char] != char) {
      stack.push(char);
    } else if(config[char] == char && stack.indexOf(char) == -1) {
      stack.push(char)
    } else {
      if (char != config[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length == 0;
}
function arrayToObject(bracketsConfig) {
  let config = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    config[bracketsConfig[i][0]] = bracketsConfig[i][1]
  }
  return config;
}