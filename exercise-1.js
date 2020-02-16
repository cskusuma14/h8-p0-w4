function angkaPrima(angka) {
    
    var result = false;
    var checkAngka = '1234567890'
    var count = 0;

    for (var i=0; i<checkAngka.length; i++)
    {
        if(angka % Number(checkAngka[i]) === 0 && angka >=1 && Number(checkAngka[i]) !== angka)
        {
           count++;
        }
    }
    
    if(count>=2)
    return result;
    else 
    {
        result = true;
        return result;
    }
}
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
