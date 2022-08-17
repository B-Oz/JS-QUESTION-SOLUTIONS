
//? Write a program that takes a number from the user and checks if that number is prime.



let num = +prompt("Enter a positive number:");
let prime = true;

if (num < 1) {
  alert("Please , Enter a valid number");
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  const answer = prime ===true ? "is prime number" :"is not prime number";
  console.log(`${num} ${answer}`);
}