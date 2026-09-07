Boolean.prototype.toString = function() {
  return JSON.stringify(this);
};

Number.prototype.toString = function() {
  return JSON.stringify(this);
};

Array.prototype.toString = function() {
  return JSON.stringify(this);
};