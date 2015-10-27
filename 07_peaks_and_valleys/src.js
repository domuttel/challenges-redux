/*
  The primary goal of this warm-up is to work on refactoring
  out duplicated code. As you build the peaks and valleys
  methods, some duplication will arise. Get the tests passing
  first and then refactor to remove the duplication.

  Note: The peaks/valleys are fun to console.log out while
  writing these methods.
*/

module.exports = {
  peak: function() {
    return '/\\';
  },

  valley: function() {
    return '___';
  },

  peaks: function(a){
    var str = '';
    while (a) {
      str += '/\\';
      a--;
    }
    return str;
  },

  valleys: function(a){
    var str = '';
    while (a) {
      str += '___';
      a--;
    }
    return str;
  },

  peaksAndValleys: function(a, b){
    var str = '';
    var strb = '';
    while (a) {
      str += '/\\';
      a--;
    }
    while (b) {
      strb += '___';
      b--;
    }
    return str + strb;
  }
};
