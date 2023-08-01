function leapyear(year) {
  return (year %  100 === 0 ? year % 400 === 0 : year % 4 === 0);
  }
  console.log(leapyear(2019));
  console.log(leapyear(2020));
  console.log(leapyear(2023));


