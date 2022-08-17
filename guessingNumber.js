//? GUESSING  THE NUMBER


let life = 6
let guess = 0
let randomNum =  Math.round(Math.random()*100)


while ( guess<life ){
  
  let guessNum = +prompt("Enter a number : ");
  // console.log(randomNum);

  if(guessNum == randomNum){
    console.log(`Congrulation , ${guess} try you win ! , Your Guess : ${guessNum}`);
    break;
  }else if(guessNum > randomNum){
    console.log(`You should reduce the number , Your Guess : ${guessNum}`)
    guess++;
  }else if(guessNum < randomNum){
    console.log(`You should increase the number , Your Guess : ${guessNum}`)
    guess++;
  }

  if(guess==life){
    console.log(`Sorry, you lose , Right guess number : ${randomNum}`);
    break;
  }
}
