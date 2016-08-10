
'use strict';
// ++++++++++++++++++++++++++++++++++++++++++++
// DATA - Global Variable declarations
// ++++++++++++++++++++++++++++++++++++++++++++
var points = 0;
//Math variables for the math question scenario
var x = Math.floor(Math.random() * (15 + 1));
var y = Math.floor(Math.random() * (5 + 1));
// ++++++++++++++++++++++++++++++++++++++++++++
// Global HTML Element Getters
// ++++++++++++++++++++++++++++++++++++++++++++
var gameWindow = document.getElementById('game_Window');
var gameText = document.createElement('p');
var gameStart = document.getElementById('game_start');
var counter = 0;
// var gameWin = document.createElement();
// var gameLose = document.createElement();
//The array for created objects from the scenario creator to be pushed to.

// ++++++++++++++++++++++++++++++++++++++++++++
// Scenario, Question and Answer Arrays
// ++++++++++++++++++++++++++++++++++++++++++++
var scenario = [];

//ARRAY OF QUESTIONS
var question = ['It\'s the first day of middle school.  You\'re standing alone at the bus stop. You\'re nervous about your first day, and think that it might just be best to skip school today. Then again, they always tell you to stay in school... Do you SKIP school, or ride the BUS?',

'As you walk onto the bus, you look around nervously for a place to sit. You spot an empty seat all the way in the back of the bus with the cool kids, and an empty seat in the front row, only a few feet away. Do you sit in the BACK or FRONT?',

'Near you on the bus, your elementary school crush, Jessica, drops her pen. You have always been too nervous to talk to Jessica. Do you choose to overcome your fear and PICK UP the pen and hand it to her, or avoid eye contact and WALK away?',

'As you arrive to school, you hear the bell for first period ring. You hurry along to class and make it just in time. You see your elementary school crush, Jessica, sitting at a desk with an open seat next to her, and two of your friends sitting in the back encouraging you to sit with them. Do you sit with JESSICA or with FRIENDS?',

'While beginning to nod off, Ms Lawrence calls on you! She points at you and says, “What is the product of”' + x + ' and ' + y + '?',

'The bell rings and first period is over. You head out to go to second period. You don\'t have a lot of time between classes, but you really need to use the bathroom. Do you go to the BATHROOM or go straight to CLASS?',

'You head to second period. Chemistry class. A few minutes after you sit down and in the middle of the lecture, you feel an air bubble in your throat. You\'re afraid a burp is coming. Should you let it out or contain it? BELCH or HOLD IT?',

'After Chemistry is over, you make it to the next period. In your English class, you realize that you are thirsty. Do you use your extra lunch money to go and buy a DASANI water bottle, or fill up your CAMELBACK bottle?',

'The bell rings and it is lunch time. You head to the cafeteria. Your choices for lunch are SLOPPY JOES or the MYSTERY MEAT',

'Your crush, Jessica, is sitting with her friends. Do you want to take the long way to your friends table to SAY HELLO or do you choose to IGNORE THEM?',

'Someone throws a french fry and it lands on your tray of food. Do you start a FOOD FIGHT in the cafeteria or choose to IGNORE the fry?',

'You get a call from your mother on your cell. Do you choose to ANSWER or DECLINE the phone call?',

'The bell rings and 4th period is about to start. You need to rush to get your gym bag out of your locker. Do you RUN or WALK to your locker?',

'4th period is about to start. You are now headed to Gym class. On your way, you decide you may not want to go to gym, and start thinking about ways to get out. You can either fake ILLNESS, or PARTICIPATE anyway.',

'Now in gym class, you see the coach testing players to participate in the annual dodgeball game against the rival skeewl. You know you\'re not great at dodgeball, or that athletic in general, however. Do you PLAY or SHY AWAY?',

'Soon, gym comes to an end. As it was the last period of the day, you see Jessica heading toward the same bus you need to get on. Do you continue walking with FRIENDS, or walk JESSICA to the bus?',

'Now on the bus, you end up sitting in the same seat with Jessica. Suddenly, you get hit by a spitball from someone at the back of the bus! Do you REACT or TATTLE to the bus driver?',

'You finally make it home. You embarassingly walk away from Jessica, hopeful you might work up the courage to say more than two full sentences to her next time. As you walk in the front door, your mom asks what you did today. Do you tell her "LEARNED A LOT" or "NOTHING"?'

];

var answer = ['BUS', 'FRONT', 'WALK', 'FRIENDS', (x * y), 'CLASS', 'BELCH', 'CAMELBACK', 'SLOPPY JOES', 'SAY HELLO', 'IGNORE', 'DECLINE', 'RUN', 'PARTICIPATE', 'PLAY', 'JESSICA', 'TATTLE', 'LEARNED A LOT'];

function Scenario(question, answer) {
  this.question = question;
  this.answer = answer;
};

// pushes instantiated scenario objects to scenario array
for (var i = 0; i < question.length; i++) {
  scenario.push(new Scenario(question[i], answer[i]));
};

// start intro text when clicking "Play Game"
function introText() {
  var start_btn = document.getElementById('game_start');

  // show intro text
  start_btn.addEventListener('click', function() {
    var intro = document.getElementById('intro_text');
    intro.style.display = 'block';
  });
};

function dead() {
  // add death function here
}

function startGame() {
  var answerField = document.getElementById('answer_field');

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[0].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[0].answer +'" value="">' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 0) {
        gameWindow.innerHTML = content;
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[0].answer) > -1) {
          console.log('got it');
          // add got it right text
          // alert('you got it right, press enter to proceed');
          // track score
          scenario2();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario2() {
  var answerField = document.getElementById('answer_field');

  gameWindow.innerHTML = '<span>Great job, press enter to proceed</span>';

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[1].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[1].answer +'" value="">' +
                  '</form>';

    if (e.which === 13) {
      console.log('counter', counter);
      if (counter === 1) {
        gameWindow.innerHTML = content;
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[1].answer) > -1) {
          console.log('got it');
          // add got it right text
          // track score
          scenario3();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario3() {
  var answerField = document.getElementById('answer_field');

  // gameWindow.removeChild(answerField);
  gameWindow.innerHTML = '<span>Great job, press enter to proceed</span>';

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[2].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[2].answer +'" value="">' +
                  '</form>';

    if (e.which === 13) {
      console.log('counter', counter);
      if (counter === 2) {
        gameWindow.innerHTML = content;
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[2].answer) > -1) {
          console.log('got it');
          // add got it right text
          // track score
          // scenario2();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}


function questions() {
  var inputVal = document.getElementById('answer').value;

  if (answer[0].indexOf(inputVal) > -1) {
    console.log(answer[0]);
  } else {
    alert('you suck');
  }
}

introText();
startGame();

console.log('scenarios', scenario);
