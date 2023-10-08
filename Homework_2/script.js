
/////////////////////////////////////////////////////////

  //1

  const arr = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];


    


    function countSheeps(sheep) {
        let num = 0;
        for (let i = 0; i < arr.length; i++){
            if (sheep[i] === true){
                num+=1
            }
        }
        return num
      }
      
      let result = countSheeps(arr)
       console.log(result)

       /////////////////////////////////////////////////////////////

       //2

       function problem(x){
        if(typeof x === 'number'){
           return x * 50 + 6 
        } else {
            return 'Error'
        }
      }

      console.log(problem())



//////////////////////////////////////////
//3

function shortcut (string) {
    let word = '';
    for(let i = 0; i < string.length; i++){
        if (string[i] !== 'e'&& string[i] !== 'o' && string[i] !== 'a' && string[i] !== 'u' && string[i] !== 'i'){
            word +=string[i]
        }
    }
  return word
  }


  console.log(shortcut('codewars'))

  //////////////////////////////////////////
  //4

  function bmi(weight, height) {
   let bmi = weight / (height/ 100) ** 2;
   if(bmi <= 18.5){
    return "Underweight";
   }  else if  (bmi <= 25.0){
    return "Normal";
   } else if ( bmi <= 30.0){
    return "Overweight"
    
   } else {
    
    return "Obese"
    }
  }
    
  

  console.log(bmi(60,180))

///////////////////////////////////////////
//5

function multiply(a, b){
    return a * b
  }

  ///////////////////////////////////////
//6

function boolToWord( bool ){
    if (bool === true){
      return "Yes"
    } else if (bool === false){
      return "No"
    }
   }
   
   console.log(boolToWord(true ))

   ///////////////////////////////
   //7 

   let summation = function (num) {
    let result = 0;
  for(let i = 0; i <= num ; i++){
    result += i;
  }
  return result

   }

  console.log(summation(5))

  ///////////////////////////////////////////////////
  //8

  function arrayPlusArray(arr1, arr2) {
    let array1 = 0;
    let array2 = 0;
    for(let i = 0; i < arr1.length; i++){
        array1 += arr1[i];
    }

    for(let i = 0; i < arr2.length; i++){
        array2 += arr2[i];
    }

    let result = array1 + array2;

    return result;
   
    
  }

  console.log(arrayPlusArray([1,2,3], [4,5,6]))

  ////////////////////////////////////////////////////
  //10

  function litres(time) {
    return Math.floor(time * 0.5);
  }
  
  console.log(litres(10,8))

  ////////////////////////////////////////////
  //9

  function points(games) {
    let totalPoints = 0;
    
    for (let i = 0; i < games.length; i++) {
      const [ourScore, opponentScore] = games[i].split(':').map(Number);
      
      if (ourScore > opponentScore) {
        totalPoints += 3; // победа
      } else if (ourScore === opponentScore) {
        totalPoints += 1; // ничья
      }
      // если ourScore < opponentScore, команда проиграла и не начисляются очки
    }
    
    return totalPoints;
  }




  



   

