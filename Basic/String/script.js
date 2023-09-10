// Create a new string adding "Py" in front of a given string
function string(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
  {
    return str1;
  }
  return "Py"+str1;
}

console.log(string("Python"));
console.log(string("thon"));

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
function frontBack(str)
{
  first = str.substring(0,1);
  return first + str + first;
}
console.log(frontBack('a'));
console.log(frontBack('ab'));
console.log(frontBack('abc'));

////26 Create a new string from a given string taking the last 3 characters and added at both the front and back
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