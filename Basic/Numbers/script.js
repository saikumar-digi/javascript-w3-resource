
// Compute the sum of the two given integers

function sumTriple (a, b) {
    if (a == b) {
      return 3 * (a + b);
      } 
     else
     {
      return (a + b);
     }
   }
  console.log(sumTriple(20, 20));
  console.log(sumTriple(15, 10));

  //Get the difference between a given number

  function difference(n)
  {
     if (n <= 13)
         return 13 - n;
     else
         return (n - 13) * 2;
  }
 console.log(difference(32))
 console.log(difference(11))
 

// Compute the absolute difference between a specified number and 19
function diffNum(n) {
    if (n <= 19) {
      return (19 - n);
      }
    else
      {
       return (n - 19) * 3;
      }
  }
  
  console.log(diffNum(19));
  console.log(diffNum(11));
  console.log(diffNum(28));
  
  //Check two given numbers and return true if one of the number is 50 or if their sum is 50
  function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))


//Check whether a given integer is within 20 of 100 or 400
function test1(x) {
    return ((Math.abs(100 - x) <= 20) ||
       (Math.abs(400 - x) <= 20));
  }
  
  console.log(test1(9));
  console.log(test1(54));
  console.log(test1(77));
  console.log(test1(333));
  console.log(test1(400));

  //20 Check two given integers, whether one is positive and another one is negative
  function positiveAndNegative(a, b)
{
  if ((a < 0 && b > 0) || a > 0 && b < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
console.log(positiveAndNegative(2, 2));
console.log(positiveAndNegative(-2, 2));
console.log(positiveAndNegative(2, -2));
console.log(positiveAndNegative(-2, -2));

//Check whether a given positive number is a multiple of 3 or a multiple of 7
function test(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(test(12));
console.log(test(14));
console.log(test(10));
console.log(test(11));

//28Check whether two given integer values are in the range 50..99
function checkNumber(x, y) 
  {
  if ((x >= 50 && x <= 99) || (y >= 10 && y <= 99))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

console.log(checkNumber(12, 101));
console.log(checkNumber(52, 80));
console.log(checkNumber(15, 99));


//Find the largest of three given integers
// Write a JavaScript program to find the largest of three given integers.  
function MaxNumber(x, y, z) 
 {
    max = 0;
    if (x > y)
    {
      max = x;
    } else
    {
      max = y;
    }
    if (z > max) 
    {
      max = z;
    }
    return max;
  }
  
  console.log(MaxNumber(0,-10,-20));
  console.log(MaxNumber(300,410,540));

  // 32 Find a value which is nearest to 100 from two different given integer values
  //32. Write a JavaScript program to find the closest value to 100 from two numerical values.  
  function near100(x, y) {
    if (x != y)
    {
    x1 = Math.abs(x - 100);
    y1 = Math.abs(y - 100);
  
    if (x1 < y1)
    {
      return x;
    }
    if (y1 < x1)
    {
      return y;
    }
    return 0;
    }
    else
      return false;
  }
  
  console.log(near100(19, 84));
  console.log(near100(-45, -65));
  console.log(near100(89, 76));

  //33 Check whether two numbers are in range 40..60 or in the range 70..100 inclusive
  //Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
   function numbersRanges(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) 
        || 
        (x >= 70 && x <= 100 && y >= 70 && y <= 100))
       {
      return true;
       } 
      else 
       {
      return false;
    }
  }
  
  console.log(numbersRanges(44, 56));
  console.log(numbersRanges(70, 95));
  console.log(numbersRanges(50, 89));

  // 34Find the larger number from the two given positive integers
  //Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.  
  function max(x, y){	
    if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
    if(x === y){
    return "same";
    }else if (x > y){
    return x;
    }else{
    return y;
    }
    }else{
    return "No range";
    }
    }
    
    console.log(max(55, 80));
    console.log(max(25, 40));
    console.log(max(75, 40));

    //35  Check a given string contains 2 to 4 numbers of a specified character
    // Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  
    function test5(str, char)
 {
  ctr = 0;
  for (let i = 0; i < str.length; i++)
  {
    if ((str.charAt(i) == char) && (i >= 1 && i <= 3))
    {
        ctr=1;
        break;
    }
   }
   if (ctr==1) return true;
   return false;
}
console.log(test5("Python", "y"));
console.log(test5("JavaScript", "a"));
console.log(test5("Console", "o"));
console.log(test5("Console", "C"));

//36 Check whether the last digit of the three given positive integers is same
// Write a JavaScript program that checks whether the last digit of three positive integers is the same. 
function lastNumber(x, y, z)
{
  if ((x > 0) && y > 0 && z > 0)
    {
    return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z% 10);
   }
  else
    return false;
}

console.log(lastNumber(10, 20, 500));
console.log(lastNumber(-40, 90, 600));

//38 Check the total marks of a student in various examinations
//Write a JavaScript program to check a student's total marks in 
//various examinations. The student will get A+ grade if the total marks 
//are in the range 89..100 inclusive, if the examination is "Final-exam" 
//the student will receive A+ grade and total marks must be greater than 
//or equal to 90. If the student gets an A+ grade, return true, otherwise return false. 
function examMarks(totmarks,is_exam)
  {
  if (is_exam) {
    return totmarks >= 90;
  }
 return (totmarks >= 89 && totmarks <= 100);
 }

console.log(examMarks("72", " "));
console.log(examMarks("84", "true "));
console.log(examMarks("91", "true "));

//39 Compute the sum of the two given integers
//Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.
function sortaSum(x, y) 
 {
  const sumNums = x + y;
  if (sumNums >= 50 && sumNums <= 80) {
    return 65;
  }
  return 80;
}

console.log(sortaSum(30,20));
console.log(sortaSum(90,80));

// 40 Check from two given integers whether one of them is 8 or their sum or difference is 8
function test8(x, y) {
  if (x == 8 || y == 8) {
    return true;
  }

  if (x + y == 8 || Math.abs(x - y) == 8)
  {
    return true;
  }

  return false;
}

console.log(test8(7, 8));
console.log(test8(56, 3));
console.log(test8(54, 82));
console.log(test8(19, 28));


