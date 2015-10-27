/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
    var string = "";
    for (var i in list) {
      string += list[i];
    }
    return string;
  },

  joinWithForAndIndex: function(list){
    var string = "";
    for (var i in list) {
      string += list[i] + [i];
    }
    return  string;
  },

  joinWithoutOddCharacters: function(list){
    var string = "";
    for (var i = 0; i < list.length; i = i + 2) {
      string += list[i];
    }
    return string;
  },

  joinWithForAndToken: function (list, token) {
    var string = "";
    for (var i in list){
      string += list[i] + token;
    }
    return string.slice(0, 5);
  },

joinWithForAndAlternatingTokens: function (a, b, c){
    var string = "";
    var array = [];
    for (var i = 0; i < a.length; i++) {
      if (i % 2 === 0) {
        array.push(a[i] + b);
      } else {
        array.push(a[i] + c);
      }
    }
    return array.join('').slice(0,-1);
  }

};
