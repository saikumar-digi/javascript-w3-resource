//Display the current date

let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 

const yyyy = today.getFullYear();

today = `${mm}-${dd}-${yyyy}`;
console.log(today);
today = `${mm}/${dd}/${yyyy}`;
console.log(today);
today = `${dd}-${mm}-${yyyy}`;
console.log(today);
today = `${dd}/${mm}/${yyyy}`;
console.log(today);
