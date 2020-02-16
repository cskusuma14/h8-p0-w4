function checkAB(num) {
  var selisih = 4;
  var indeksA = [];
  var indeksB = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] == "a") indeksA.push(i);
    else if (num[i] == "b") indeksB.push(i);
  }

  for (var j = 0; j < indeksA.length; j++) {
    for (var k = 0; k < indeksB.length; k++) {
      if (indeksA[j] != undefined || indeksB[k] != undefined) {
        var temp = Math.abs(indeksA[j] - indeksB[k]);
        if (temp == selisih) {
          return true;
        }
      }
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
