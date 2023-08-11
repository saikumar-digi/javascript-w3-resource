// const a = [2, 4, 3, 5, 6, 7, 4, 2, 3, 4];
// const evenNumbers = [];
// const oddNumbers = [];

// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 === 0) {
//       evenNumbers.push(a[i])
//     } else {
//      oddNumbers.push(a[i])
//     }
// }

// console.log(evenNumbers);
// console.log(oddNumbers);

const today = new Date(2023,11,28);
const daysLeft = new Date (today.getFullYear(),11,25)

if (today.getMonth()==11&&today.getDate()>25) {
    daysLeft.setFullYear(daysLeft.getFullYear()+1);
}
one_day = 1000*60*60*24;

console.log(`${Math.ceil((daysLeft.getTime()-today.getTime())/(one_day))} days left`);