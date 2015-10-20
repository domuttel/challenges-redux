module.exports = {


  helloWorld: function(){
    return "Hello World";
  },

  hello: function(string){
    return "Hello " + string;
  },

  shout: function(string){
    var str = string.toUpperCase();
    return "Hello " + str;
  },

  whisper: function(string){
    var str = string.toLowerCase();
    return "Hello " + str;
  },

  separate: function(string){
    return string.split('');
  },

  reverseJoin: function(array){
    array.reverse();
    var string = array.join(',');
    return string;
  },

  reverseJoinCompact: function(array){
    // array.reverse();
    // var string = array.join('');
    // return string;
    return array.reverse().join('');
  },

  backwardsDay: function(string){
    return "Hello " + string.split('').reverse().join('');
  }


};
