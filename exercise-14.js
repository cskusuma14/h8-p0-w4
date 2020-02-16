function naikAngkot(arrPenumpang) {
  var rute = ["A", "B", "C", "D", "E", "F"];

  var hargaRute = 2000;
  var result = [];
  if (arrPenumpang.length) {
    for (i = 0; i < arrPenumpang.length; i++) {
      var harga = 0;
      var obj = {
        penumpang: arrPenumpang[i][0],
        naikDari: arrPenumpang[i][1],
        tujuan: arrPenumpang[i][2]
      };
      for (j = 0; j < rute.length; j++) {
        if (arrPenumpang[i][1] === rute[j]) {
          for (k = j; k < rute.length; k++) {
            if (arrPenumpang[i][2] === rute[k]) {
              harga = (k - j) * hargaRute;
            }
          }
        }
      }

      obj.bayar = harga;
      result.push(obj);
    }
    return result;
  } else {
    return result;
  }
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"]
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
