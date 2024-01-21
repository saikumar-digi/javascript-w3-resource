// function test(){
//     let a = 10
//     function text1(){
//         console.log(a);
//     }
//     return text1
// }

// let fun = test()
// // console.log(fun);

// fun()

function greet() {
    let name = "sai";
  
    function displayName() {
      let age = 24;
      console.log("hii " + name);
  
      function displayAge() {
        console.log("my age is " + age + " " + name);
      }
  
      // Return the displayAge function, not its result
      return displayAge;
    }
  
    // Return the displayName function, not its result
    return displayName;
  }
  
  // Call greet to get the displayName function
  let g1 = greet();
  
//   console.log(g1);
  // Call g1 to get the displayAge function
  let g2 = g1();
//   console.log(g2);
  
  // Call g2 to execute the displayAge function
  g2();
  