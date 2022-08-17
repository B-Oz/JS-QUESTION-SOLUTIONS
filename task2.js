 //? If a grade between 0-100 is requested from the user and the grade entered is different from 0-100, it will warn the user and re-set it between 0-100.
  //? Write the code that forces annotation with a while loop.



let grade = prompt("Please enter a grade between 0-100: ") ;

while (grade <0 || grade >100) {
  console.log("The entered grade must be between 0-100.")
  grade = prompt("Please enter a grade between 0-100: ") 

}

console.log("Entered grade is :" , grade);