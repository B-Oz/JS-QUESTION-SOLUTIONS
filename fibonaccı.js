//? FIBONACCI terms: 1, 1, 2, 3, 5, 8, 13, 21, ...
//* Entered n. Calculate the sum of the Fibonacci numbers up to the term and encode the function that prints it out with dongles.

//*Sample outputs.
// fibonacci(4) = 3
// fibonacci(1) = 1
// fibonacci(8) = 21

// f(n) = f(n-1) + f(n-2)

const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let sum = 0;

  for (let i = 2; i < n; i++) {
    sum = fib1 + fib2;
    fib1 = fib2;
    fib2 = sum;
  }

  return fib2;
};

const n = +prompt("Enter a number : ");
if (n <= 0) {
  console.log("Please enter positive number :");
} else {
  console.log(`Fibonacci(${n}) = ${fibo(n)}`);
}
