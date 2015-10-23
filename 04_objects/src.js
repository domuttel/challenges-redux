module.exports = {
  person: function() {
   var person = {firstName: 'John',
    lastName: 'Mayer'};
    return person;
  },

  sweetnessProperty: function(obj) {
      return obj.sweetness;
  },

  savorynessProperty: function(obj) {
      return obj['savory-ness'];
  },

  keys: function(obj){
    var keyNames = [];
    for (var i in obj) {
        keyNames.push(i);
    }
    return keyNames;
  },

  sortedKeys: function(obj){
    var keyNames = [];
    for (var i in obj) {
      keyNames.push(i);
    }
    return keyNames.sort();
  },

  reverseSortedKeys: function(obj){
    var keyNames = [];
    for (var i in obj) {
      keyNames.push(i);
    }
    return keyNames.sort().reverse();
  }

};
