var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLetter)

   // if (lettersGuessed.indexOf(userPick) < 0 && letters.indexOf(userPick) >=0)


    document.onkeyup = function(event) {
    
    var userPick = event.key;
    if (userPick !== randomLetter){
            if (lettersGuessed.indexOf(userPick) < 0){
                guessesLeft --;
            document.getElementById("guesses-left").textContent = guessesLeft;
            lettersGuessed.push(userPick);
            document.getElementById("letters_guessed").textContent = lettersGuessed;

            }
        } 
            else {
                wins ++; 
                document.getElementById("wins").textContent = wins;
                guessesLeft = 10;
                document.getElementById("guesses-left").textContent = guessesLeft;
                lettersGuessed = [];
                document.getElementById("letters_guessed").textContent = lettersGuessed;
                randomLetter = letters[Math.floor(Math.random() * letters.length)];
                console.log(randomLetter);
            }
            if (guessesLeft == 0){
                losses ++;
                randomLetter = letters[Math.floor(Math.random() * letters.length)];
                lettersGuessed = [];
                guessesLeft = 10;
                document.getElementById("losses").textContent = losses;
                document.getElementById("letters_guessed").textContent = lettersGuessed;
                document.getElementById("guesses-left").textContent = guessesLeft;

            }
            
    }

   

    
        

    

