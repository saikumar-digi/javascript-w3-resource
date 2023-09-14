// Create a new string adding "Py" in front of a given string
function addString(str) {
  if (str === undefined || str === null || str.substring(0,2) == 'Py') {
    return str;
  }
     return "Py"+str;
}

console.log(addString("Python"));
console.log(addString("thon"));

//Remove a character at the specified position of a given string and return the new string
function removeCharacter(str, char) 
 {
  part1 = str.substring(0, char);
  part2 = str.substring(char + 1, str.length);
  return (part1 + part2);
 }

console.log(removeCharacter("saikumar",0));
console.log(removeCharacter("abuhurera",3));
console.log(removeCharacter("viveknanda",5));



//Create a new string from a given string with the first character of the given string added at the front and back

// b.charAt()+s+b.charAt()
// 'SSaikumarS'
function frontBack(str)
{
  first = str.substring(0,1);
  return first + str + first;
}
console.log(frontBack('a'));
console.log(frontBack('ab'));
console.log(frontBack('abc'));

//26 Create a new string from a given string taking the last 3 characters and added at both the front and back
function test3(str)
{
 if (str.length>=3)
  {
  str_len = 3;

 back = str.substring(str.length-3);
  return back + str + back;
}
  else
    return false;
}
console.log(test3("xyz"));
console.log(test3("xy"));
console.log(test3("mnop"));

//or

let a= "saikumar"

let c= a.substring(a.length-3)

let d = c+a+c
// 'marsaikumarmar'


// 27 Check whether a string starts with 'Java' and false otherwise
function test4(str)
{
 if (str.length < 4)
 {
   return false;
 }
 front = str.substring(0, 4);
 if (front == 'Java') 
 {
   return true;
 }
  else 
  {
   return false;
 }
}

console.log(test4("JavaScript"));
console.log(test4("Java"));
console.log(test4("Python"));

//30 Check whether a string "Script" presents at 5th (index 4) position in a given string
//30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.
function checkScript(str)
{
  if (str.length < 6) {
    return str;
  }
  let result_str = str;
    
  if (str.substring(10, 4) == 'Script') 
    {  
    result_str = str.substring(0, 4) + str.substring(10,str.length); 
  }
  return result_str;
}

console.log(checkScript("JavaScript"));
console.log(checkScript("CoffeeScript"));

//or
str = "javaScriptboss"
let final = str;
    
  if (str.substring(10, 4) == 'Script') 
    {
    final = str.substring(0, 4) + str.substring(10,str.length);  
  }
   final;


//37 Create new string with first 3 characters are in lower case
//Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.  
function upperLower(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  }
  front = (str.substring(0, 3)).toLowerCase();
  back = str.substring(3, str.length);  
  return front + back;
}
console.log(upperLower("SaiKUmar"));
console.log(upperLower("ABU"));
console.log(upperLower("VIvekaN"));

//48 Write a JavaScript program to reverse a given string.
function reverseString(str) 
{
    return str.split("").reverse().join("");
}

console.log(reverseString("saikumar"));
console.log(reverseString("aaaa"));
console.log(reverseString("ashishMaity"));

// or
let a1 = "saiumar"
let  b = "";
for (let i = a1.length; i>=0; i--) {
    b = a1[i]
    console.log(b)
}

//50  Write a JavaScript program to capitalize the first letter of each word in a given string.
function capLetter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capLetter("Hii good morning team happy to have you Guys."));

//Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.
function b(str1) 
  {
  if (str1.length <= 1)
  {
    return str1;
  }
  a = str1.substring(1, str1.length - 1);
  return (str1.charAt(str1.length - 1)) + a + str1.charAt(0);
}
console.log(b('a'));

// 52 Write a JavaScript program to convert letters of a given string alphabetically.
function test52(str) { 
  return str.split("").sort().join("");      
}
console.log(test52("saikumar"));
console.log(test52("Vivekanda"));

// 53 Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
function test53(str)
 {
    return (/a...b/).test(str) || (/b...a/).test(str);
 }
console.log(test53("abcgdfhj"));
console.log(test53("panmasla"));
console.log(test53("abcahgfb")); 


//54Write a JavaScript program to count the number of vowels in a given string.
function vowelCount(str){
  let abc = []
  for (let i = 0; i < str.length; i++) {
    if (str[i]=="a" || str[i]=="e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
     abc.push(str[i])
    }
  }
   console.log( abc.length)

}
vowelCount("saikumar")
vowelCount("vivekanda")

//or

function vowelCount(str)
{ 
  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowelCount("saikumar"));
console.log(vowelCount("vivekanda"));