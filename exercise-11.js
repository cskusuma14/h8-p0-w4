function shoppingTime(memberId, money) {
  var list = [
    ["Sepatu Stacattu", 1500000],
    ["Baju Zoro", 500000],
    ["Baju H&N", 250000],
    ["Sweater Uniklooh", 175000],
    ["Casing Handphone", 50000]
  ];

  var obj = {};
  obj.memberId = memberId;
  obj.money = money;
  obj.listPurchased = [];
  obj.changeMoney = 0;

  var sisaUang = money;
  var count = 0;
  if (obj.memberId != undefined) {
    if (obj.memberId.length <= 0) {
      return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else {
      for (var i = 0; i < list.length; i++) {
        if (obj.money < 50000) return "Mohon maaf, uang tidak cukup";
        else if (sisaUang >= list[i][1]) {
          sisaUang = sisaUang - list[i][1];
          obj.listPurchased.push(list[i][0]);
        }
      }
      obj.changeMoney = sisaUang;
    }
    return obj;
  } else return "Mohon maaf, toko X hanya berlaku untuk member saja";
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
