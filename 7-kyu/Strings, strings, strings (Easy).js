// 1. Recover Boolean.prototype.toString
Boolean.prototype.toString = function() {
  return `${this}`; 
};

// 2. Recover Number.prototype.toString
Number.prototype.toString = function() {
  return `${this}`;
};

// 3. Recover and Improve Array.prototype.toString
Array.prototype.toString = function() {
  // Map over the elements to convert each inner number to a string using the new number method
  const stringifiedElements = this.map(item => item.toString());
  
  // Join the elements with commas and wrap them in square brackets
  return '[' + stringifiedElements.join(',') + ']';
};
