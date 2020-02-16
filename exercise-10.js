function changeMe(arr) {
    var obj = {
       
    };
    
    for(var i=0; i<arr.length;i++)
    {
        var innerArraylength = arr[i].length;
        for (var j=0; j<innerArraylength; j++)
        {
            
           var firstName = arr[i][0];
           var lastName = arr[i][1]; 
           var gender = arr[i][2];
           if( arr[i][3] > 2020 || arr[i][3] == undefined)
           var age = 'Invalid Birth Year'
           else
           var age = 2020 - arr[i][3]
            
           obj = {
            firstName,
            lastName,
            gender,
            age
          };
        }              
        console.log(obj)
    } 
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""
