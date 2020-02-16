function digitPerkalianMinimum(angka) {
    
    var temp=[];
    var tempHasilKali=[];
    var result = [];
    for(var i=1; i<=angka; i++)
    {
       if (angka % i === 0)
       {
          temp.push(i);
       }
    }

    for (var i=0; i<temp.length/2; i++)
    {
        tempHasilKali.push(temp[i]+""+temp[temp.length-i-1])
    }
    console.log(tempHasilKali)

    for (var i=0; i<tempHasilKali.length; i++)
    {
        var innerArrayLength = tempHasilKali[i].length;
        result.push(innerArrayLength);
    }

    result.sort()
    return result[0];
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
