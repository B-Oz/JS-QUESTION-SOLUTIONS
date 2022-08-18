let numList = 0;
let counter = 0;

while (true) {
    input = prompt("Enter a number or press q/Q to exit : ");
  
  if (input == "Q".toLowerCase()) {
    break;
  }else{
    numList += +(input);
    counter++;
  }
}
let average = numList/counter ;
console.log(
  "The average of all the numbers you entered : ", average 
  
);
