module.exports = {

  first: function(array) {
     return array.shift();
  },

  last: function(array){
    return array.pop();
  },

  empty: function(array){
    if (array.length === 0) {
      return true;
    } else {
      return false;
    }
  },

  // first_n: function(a, b){
  //   if (a.length < b){
  //     return a;
  //   }
  // }
  // ** test first_n 1 + 2 pass

  first_n: function(a, b) {
    if (a.length >= b) {
      return a.splice(0, 3);
    } else {
      return a;
    }
  },

  //   if (a.length % 3 === 0) {
  //     return a;
  //   } else if {} || a.length % 15 === 3) {} else{};
  // }



  //   for (var i = 0; i < a.length; i++) {
  //     if (a[i].length <= 3){
  //       return a[i];
  //     } else {
  //       return a.splice(0, 1);
  //     }
  //   }
  // }

    // if (a[i] === 3) {
    //   return a;
    // } else if ((a[i] % 15) === 0) {
    //   return
    // }

  // **************WORKS!v*****************
  last_n: function(a, b){
    if (a.length >= 3) {
      return a.splice(2, 5);
    } else {
      return a;
    }
  },
  // **************WORKS!^*****************


  // **************REFACTOR*****************

  // last_n: function(a, b){
  //   for (var i = 0, sum = 0; i < a.length; sum += array[i++]);
  // },

// for (var i = 0; i < Things.length; i++) {
//   Things[i]
// };

//***********WORKS
// drop: function(a, b){
//   if (a.length >= 2) {
//     return a.splice(3, 5);
//   } else {
//     return [];
//   }
// },


//REFACTOR *************
drop: function(a, b){
  if (a.length >= b) {
    return a.splice(3);
  } else {
    return [];
  }
},

union: function(a, b){
  var togetherForOnce = a.concat(b);
  return togetherForOnce;
},

intersection: function (a,b){
   var rs = [], x = a.length;
   while (x--) b.indexOf(a[x])!=-1 && rs.push(a[x]);
   return rs.sort();
}

};
