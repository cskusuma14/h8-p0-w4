function ubahHuruf(kata) {
    
    var huruf = 'abcdefghijklmnopqrstuvwxyz'

    var result = "";
    
    for (var i=0; i<kata.length; i++)
    {
        for(var j=0; j<huruf.length; j++)
        {
            if(kata[i] == huruf[j])
            {
                result = result + huruf[j+1];
                break;
            }
        }
    }
    return result;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
