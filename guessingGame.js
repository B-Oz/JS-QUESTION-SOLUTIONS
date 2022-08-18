//? Write a program that asks the user if you want to play again when the game is finished



do {
    let life = 6;
    let guess = 0;
    let randomNum = Math.round(Math.random() * 100);
    again = true;

   while (guess < life) {
        let guessNum = +prompt("Enter a number 1-100: ");
        // console.log(randomNum);
       
    
        if (guessNum == randomNum) {
          console.log(
            `Congrulation , ${guess+1} try you win ! , Your Guess : ${guessNum}`
          );
          againGaming();
          break;
          
        } else if (guessNum > randomNum) {
          console.log(`You should reduce the number , Your Guess : ${guessNum}`);
          guess++;
        } else if (guessNum < randomNum) {
          console.log(`You should increase the number , Your Guess : ${guessNum}`);
          guess++;
        }
    
        if (guess == life) {
          console.log(`Sorry, you lose , Right guess number : ${randomNum}`);
          againGaming();
          break;
    
        }
    
        
      }

} while (again);


    function againGaming() {
       

        while (again) {
            againGame = prompt("Do you want to play the game AGAİN? (Y/N)")
            
    
        if (againGame == "Y".toLowerCase()){
            console.log("GOOD LUCK!!")
            life = 6
            again = true;
            break;
           
            

        }else if(againGame == "N".toLowerCase() ){
            console.log("See you next time ..");
            again = false;
            
        }else{
            console.log("Please, login valid :")
        }
            
        }
        
    }
  



