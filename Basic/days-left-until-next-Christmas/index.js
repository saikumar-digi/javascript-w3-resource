today=new Date();
const daysLeft=new Date(today.getFullYear(), 11, 25);

if (today.getMonth()==11 && today.getDate()>25) 
{
daysLeft.setFullYear(daysLeft.getFullYear()+1); 
}  
const one_day=1000*60*60*24;
console.log(`${Math.ceil((daysLeft.getTime()-today.getTime())/(one_day))} days left until Christmas!`);
