module.exports = {
  sameLength: function(string1, string2) {
    if (string1.length === string2.length){
      return true;
    } else{
      return false;
    }
  },

  firstGreater: function(string1, string2){
    if (string1 > string2) {
      return true;
    } else{
      return false;
    }
  },

  firstGreaterOrEqualTo: function(string1, string2){
    if (string1 > string2) {
      return true;
    } else{
      return false;
    }
  },

  firstLengthGreater: function(string1, string2){
    if (string1.length > string2.length) {
      return true;
    } else{
      return false;
    }
  },

  secondGreater: function(string1, string2){
    if (string1 < string2) {
      return true;
    } else{
      return false;
    }
  },

};
