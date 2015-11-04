module.exports = {

  simpleCall: function(callback){
    // console.log(callback());
    return callback();
  },

  each: function(array, callback) {
    // console.log(array.forEach(callback));
    return array.forEach(callback);
  },

  map: function(array, callback){
    // console.log(array.map(callback));
    return array.map(callback);
  },

  reduce: function(array, num, callback){
    // console.log(array.reduce(callback, num));
    return array.reduce(callback, num);
  },

  find: function(array, callback){
    return array.find(callback);
  },

  any: function(array, callback){
    return array.some(callback);
  },

  all: function(array, callback){
    return array.every(callback);
  },

};
