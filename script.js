 //create a quiz class

class Quiz {
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

  // validate the user option using the question index and increase the score by 1 
  //and increase the question index by 1 (move to the next questin)
    guess(answer){
        if(this.getQuestionIndex().isCorrectAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded(){
        return this.questionIndex === this.questions.length
    }
}

//Create a question class

class Question{
    constructor( text, choices , answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    //checking if the user answer is correct
    isCorrectAnswer(choice){
        return this.answer === choice;
    }
}


//Display question

function displayQuestion() {
    if (quiz.isEnded()) {
     showScores();
    }else {
     //display next question
     let questionElement = document.getElementById("question");
     questionElement.innerHTML = quiz.getQuestionIndex().text;

     //show options
     let choices = quiz.getQuestionIndex().choices;
     for( let i = 0 ; i < choices.length; i++){
      let choiceElement = document.getElementById("choice"
      + i);
      choiceElement.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
     }
     showProgress();

    }
};


// Guess function

function guess(id, guess){
 let button = document.getElementById(id);
 button.onclick = function(){
    quiz.guess(guess);
    displayQuestion();
 }
}


//show quiz progress

function showProgress(){
    let currentQuestionNumber =  quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = 
   `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}



//show score

function showScores(){
    let quizEndHTML =
`
    <h1>Quiz Completed</h1>
    <h2 id ="score"> You Scored: ${quiz.score} of ${quiz.
        questions.length}</h2>

        <div class="quiz-repeat">
          <a href="xenz.html">Take Quiz Again</a>
        </div>
`;

let quizElement = document.getElementById("quiz");
quizElement.innerHTML = quizEndHTML;
}

///quiz questions

let questions = [
    //Question 1
     new Question(
      "A woman had two girls who were born on the same hour of the same day of the same year. But there were not twins, how could this be so?",["They were sisters",
    "They were twins", "They were two set of triplet" , "They were siblings"], "They were two set of triplet"
     ),
      //Question 2
     new Question(
        "Vinod had twenty-one hens, all but eleven died, how hens is Vinod left with?",["11",
      "12", "20" , "5"], "11"
       ),
        //Question 3
       new Question(
        "A man builds a house with all 4 sides facing south. A bear walks past the house. What color is the bear?",["black",
      "White", "Orange" , "Pink"], "White"
       ), 
       //Question 4
       new Question(
        "Which word is the odd man out?",["Hate",
      "kidness", "Fondness" , "Attachment"], "Hate"
       ),
       //Question 5
       new Question(
        "There is a room with no doors,and no window. A man was found hung from the ceiling.A puddle of water is on the floor.How did he die?",["He was  killed by an assasin",
      "Suicidal", "Someone hanged him" , "He was standing on a block of ice"], "He was standing on a block of ice"
       ),
       //Question 6
       new Question(
        "A boy and a doctor were fishing. The boy is the doctor's son, but the doctor is not the son father. Who is the doctor?",["Step-father",
      "Step-mother", "Father" , "Mother"], "They were two set of triplet"
       ),
        //Question 7
       new Question(
          "What is the only question you can't answer with a 'yes'? ",["Are you deaf?",
        "Can you see?", "Are you dead" , "Do you know where God lives?"], "Forth"
         ),
          //Question 8
         new Question(
          "Which shopkeeper takes your stuff and charges money for the same?",["Barber",
        "POS vendors", " Resturant Owner" , "Lecturer"], "Barber"
         ),
         //Question 9
         new Question(
          "Re-arrange the following letters to form a new word: NEW DOOR",["Word New",
        "New Door", "One word" , "Word One"], "One Word"
         ),
         //Question 10
         new Question(
          "Arrange the the given words: 1.Police 2.Punishment 3.Crime 4.Judge 5.Judgement ",["12435",
        "31245", "54321" , "31452"], "Python"
         )
];


let quiz = new Quiz(questions);

//display question
displayQuestion();


//Add countdown

let time = 0.3;
let quizTimeInMinutes = time * 60 * 60 ;
quizTime = quizTimeInMinutes / 60;


let counting  = document.getElementById("count-down");

function startCountdown(){
    let quizTimer = setInterval(function(){
        if(quizTime <= 0){
           clearInterval(quizTimer)
           showScores();
        } else {
           quizTime--;
           let sec = Math.floor( quizTime % 60);
           let min = Math.floor(quizTime / 60) % 60;
           counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000)
}



startCountdown();






