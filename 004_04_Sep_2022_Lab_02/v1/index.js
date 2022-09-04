function Question(questionText){

  this.questionText = questionText;
}

let q1 = new Question("Javascript Supports");
let q2 = new Question("Which language is used for styling web pages");
let q3 = new Question("Which is not a JS framework");
let q4 = new Question("Which is used for Connect To Database?");
let q5 = new Question("JavaScript is a");

function Answer(answerText){
  this.answerText = answerText;
}

let a1 = new Answer("Functions");
let a2 = new Answer("CSS");
let a3 = new Answer("Django");
let a4 = new Answer("PHP");
let a5 = new Answer("Programming Language");

function QuestionAnswerPair(question, correctAnswer, answerChoices){

  this.question = question;
  this.correctAnswer = correctAnswer;
  this.answerChoices = answerChoices;

  this.isACorrectAnswer = function(userAnswer){

    if (this.correctAnswer.answerText === userAnswer){

      console.log("Correct answer...")
      return true;
    }else{
      console.log("Wrong answer...")
      return false;
    }
  }

}

let qaPair1 = new QuestionAnswerPair(q1, a1, [
a1, new Answer("XHTML"), new Answer("CSS"), new Answer("HTML")
]);

let qaPair2 = new QuestionAnswerPair(q2, a2, [
  new Answer("HTML"), new Answer("JQuery"), a2,
  new Answer("XML")
]);
  
let qaPair3 = new QuestionAnswerPair(q3, a3, [
  new Answer("Python Script"), new Answer("JQuery"), a3, new Answer("NodeJS")
]);

let qaPair4 = new QuestionAnswerPair(q4, a4, [
  a4, new Answer("HTML"), new Answer("JS"),new Answer("All")
]);

let qaPair5 = new QuestionAnswerPair(q5, a5, [
  new Answer("Language"), a5, new Answer("Development"),new Answer("All")
]);

function Quiz(qaPairArray){

  this.pageIndex = 0;
  this.score = 0;
  this.qaPairArray = qaPairArray;

  this.load = function(){

    this.attachListeners();
    this.displayQuizPage();
  } 

  this.attachListeners = function(){

    let currentQuizObject = this;

    console.log("THIS ->" + this);
    console.log("Page index [1]-> " +  this.pageIndex);

    for (let i = 1; i <= 4; i++){

      let buttonID = "divButton" + i;

      let answerChoiceButtonElement = document.getElementById(buttonID);
      answerChoiceButtonElement.onclick = function(event){

        console.log("THIS ->" + this);

        let eventTarget = event.currentTarget;
        let userProvidedAnswer = eventTarget.innerHTML;

        let qaPairObject = currentQuizObject.qaPairArray[currentQuizObject.pageIndex];
        
        let outcome = qaPairObject.isACorrectAnswer(userProvidedAnswer);
        if (outcome){
          currentQuizObject.incrementScore();
        }

        console.log("User provided answer ->" + userProvidedAnswer);
        
        currentQuizObject.next();
      }  
    }
  }

  this.incrementScore = function(){
    
    this.score ++;
  }

  this.next = function(){

    if (this.isLastQAPair()){

      console.log("Last QA Pair -> Final Score Page")
      this.displayFinalScorePage();
    }else{

      this.pageIndex ++;
      console.log("Next QA Pair Page...")
      this.displayNextQAPairPage();
    }
  }

  this.isLastQAPair = function(){

    if (this.pageIndex === (this.qaPairArray.length - 1)){
      console.log("Last QA Pair Page")
      return true;
    }else{
      console.log("NOT in the LAST QA Pair Page..")
      return false;
    }
  }

  this.displayFinalScorePage = function(){

    let scores = this.score;
    let percentage = (scores / this.qaPairArray.length) * 100;

    let resultHtmlFragment = 
    `<h1>Result</h1>
    <p id='question'>Your scores ${scores}. Mark Percentage is ${percentage}%';
    `;

    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = resultHtmlFragment;
  }

  this.displayNextQAPairPage = function(){

    this.attachListeners();
    this.displayQuizPage();
  }

  this.displayQuizPage = function(){

    this.displayQuizSection();
    this.displayProgressSection();
  }

  this.displayQuizSection = function(){

    let qaPair = this.qaPairArray[this.pageIndex];
    
    // Update the Question section
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = qaPair.question.questionText;

    // Update the Answer choices section
    for (var i=0; i < qaPair.answerChoices.length; i++){

      let answerChoiceObj = qaPair.answerChoices[i];      
      let answerChoiceValue = answerChoiceObj.answerText;

      let buttonID = "divButton" + (i + 1);
      let answerChoiceButtonElement = document.getElementById(buttonID);
      answerChoiceButtonElement.innerHTML = answerChoiceValue;
    }
  }

  this.displayProgressSection = function(){

    let progressElement = document.getElementById("progress");

    let currentQuestionIndex = (this.pageIndex + 1);
    let totalNoOfQuestions = this.qaPairArray.length;
    let progressText = `Question ${currentQuestionIndex} of ${totalNoOfQuestions}`;

    progressElement.innerHTML = progressText;
  }
}


let quiz = new Quiz([qaPair1, qaPair2, qaPair3, qaPair4, qaPair5]);
quiz.load();