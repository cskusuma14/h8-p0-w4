function tukarBesarKecil(kalimat) {
    
    var huruf = 'abcdefghijklmnopqrstuvwxyz'
    var hurufCapital = huruf.toUpperCase();
    var selainHuruf = ' -1234567890!@#$%^&*()_+=';

    var result = '';
    
    for (var i=0; i<kalimat.length; i++)
    {
        for (var j=0; j<huruf.length; j++)
        {
            if(kalimat[i] === huruf[j])
            {
                // console.log(kalimat[i].toUpperCase())
                result = result + kalimat[i].toUpperCase()
                break;
            }
            else if(kalimat[i] === hurufCapital[j])
            {
                //console.log(kalimat[i].toLowerCase())
                result = result + kalimat[i].toLowerCase()
                break;
            }    
            else if(kalimat[i] === selainHuruf[j])
            {
                //console.log(kalimat[i].toLowerCase())
                result = result + kalimat[i];
                break;
            }       
        }
    }
     return result;
  }

  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
   console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
