var _ = {};

_.once = function(fn) {
  var invoked = false;
  var that = this;
  var result = null;

  return function() {
    if (!invoked) {
      result = fn.apply(that);
      invoked = true;
    }
    return result;
  }
};

_.memoize = function(id_func, ck_func) {
  var cache = {};

  return function(item) {
    var key = ck_func ? ck_func(item) : item;
    if (!cache.hasOwnProperty(key)) { cache[key] = id_func(item); }
    return cache[key];
  }
};

_.bind = function(fn, context) {
  return function() { return fn.apply(context); }
}

module.exports = _;
