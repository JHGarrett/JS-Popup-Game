/* 
Ask at least five questions

Keep track of the number of questions the user answered correctly

Provide a final message after the quiz letting the user know the number of questions he or she got right.

Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.
*/

var score = 0;
var question1 = prompt('What color is the grass?');
  if (question1.toUpperCase() === "GREEN") {score += 1
      }
      
var question2 = prompt('What color is the ocean?');
  if (question2.toUpperCase() === "BLUE") {score += 1
      }
var question3 = prompt('What color is the Sun?');
  if (question3.toUpperCase() === "YELLOW") {score += 1
      }                                  
var question4 = prompt('What color is the sky?');
  if (question4.toUpperCase() === "BLUE") {score += 1
      }
var question5 = prompt('What color is snow?');
  if (question5.toUpperCase()  === "WHITE") {score += 1
      }

alert("Your score is " + score);

if (score === 5) {
  alert("You get a Gold Crown!!!")
}
  else if (score === 4 || score === 3) {
    alert("You get a Silver Crown!!")
  }
  else if (score === 2 || score === 1) {
    alert("You get a Bronze Crown!")
  }
  else { 
    alert("You get no Crown")

  }
