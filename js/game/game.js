'use strict';
// ++++++++++++++++++++++++++++++++++++++++++++
// DATA - Global Variable declarations
// ++++++++++++++++++++++++++++++++++++++++++++
var points = 0;

//Math variables for the math question scenario
var x = Math.floor(Math.random() * (15 + 1)) + 2;
var y = Math.floor(Math.random() * (5 + 1)) + 2;
// ++++++++++++++++++++++++++++++++++++++++++++
// Global HTML Element Getters
// ++++++++++++++++++++++++++++++++++++++++++++
var gameWindow = document.getElementById('game_Window');
var gameText = document.createElement('p');
var gameStart = document.getElementById('game_start');
var start_btn = document.getElementById('game_start');
var counter = 0;
// var gameWin = document.createElement();
// var gameLose = document.createElement();
// The array for created objects from the scenario creator to be pushed to.

// ++++++++++++++++++++++++++++++++++++++++++++
// Scenario, Question and Answer Arrays
// ++++++++++++++++++++++++++++++++++++++++++++
var scenario = [];

//ARRAY OF QUESTIONS
var question = ['On the morning of the first day of middle school, you find yourself standing alone at the bus stop. Grade school went okay, but youhave heard from your older brother that middle school is a whole different story. As a result, you\'re nervous about your first day, and think that maybe you\'ll just skip school today. Then again, they always tell you to stay in school... Do you SKIP school, or RIDE THE BUS?',

'As you walk onto the bus, you look around nervously for a place to sit. You spot an empty seat all the way at the back of the bus with the cool kids, and an empty seat in the front row, only a few feet away. Do you sit in the BACK or FRONT?',

'Near you on the bus, Jessica drops the pen that she was fiddling with. You have always been too nervous to talk to Jessica. Do you take this chance to overcome your fear and PICK UP the pen and hand it to her, or ignore the situation and AVOID eye contact?',

'As you arrive to school, you hear the bell for first period ring. You hurry along to class and make it just in time. You once again encounter Jessica sitting at a desk with an open seat next to her, and two of your friends sitting in the back encouraging you to sit with them. Do you sit next to JESSICA or with your FRIENDS?',

'While beginning to nod off in class, Ms Lawrence calls on you! She points at you and says, “What is the product of ' + x + ' and ' + y + '?',

'The bell rings and first period is over. You head out to go to second period. You don\'t have a lot of time between classes, but you really need to use the bathroom. Do you go to the BATHROOM or go straight to CLASS?',

'You head to second period. Chemistry class. A few minutes after you sit down and in the middle of the lecture, you feel an air bubble in your throat. You\'re afraid a burp is coming. Should you let it out or contain it? BELCH or HOLD IT?',

'After Chemistry is over, you start heading to your English class. On your way there, you pass by a vending machine in the hallway. They never had these at elementary! There are bottles of water for sale in one, and you are quite thirsty...Do you FILL UP your own bottle, or BUY ONE from the machine?',

'The bell rings and it is lunch time. You head to the cafeteria. Your choices for lunch are SLOPPY JOES or the MYSTERY MEAT',

'On your way to sit at a table with your friends in the cafeteria, you spot Jessica sitting with her friends at a different table. Do you take the long way and SAY HELLO or do you choose to IGNORE THEM?',

'Someone throws a french fry and it lands on your tray of food. Do you start a FOOD FIGHT in the cafeteria or choose to IGNORE THE FRY?',

'As you\'re leaving the cafeteria during lunch, you get a call from your mother on your cell phone. You\'re in the middle of playing a game on your phone, though, and almost about to beat the final level! Do you ANSWER or DECLINE the phone call?',

'The bell rings and 4th period is about to start. PE. You need to rush to get your gym bag out of your locker. You should have enough time if you walk, though...Do you RUN or WALK to your locker?',

'You\'re nearly to PE class, and you notice a peculiar black pool on the floor beneath a locker. No one else seems to notice it. It\'s a strange, swirling mass covered in what look like...stars. It appears to be getting larger. Do you go over and EXAMINE IT more closely, or HEAD TO PE class?',

'Now in gym class, you see the coach testing players to participate in the annual dodgeball game against the rival skeewl. You know you\'re not great at dodgeball, or that athletic in general, however. Do you DODGE, DIP, DUCK, DIVE, or DODGE? Or ALL OF THE ABOVE?',

'Soon, gym comes to an end. Last class of the day is over! After changing back to normal clothes and on your way out, you suddenly step in a pretty large piece of gum on the ground. Do you stop and PULL IT OFF or KEEP WALKING?',

'After the gum ordeal, you head for the bus. You take a seat near the fornt and begin to daydream. Suddenly, you get hit in the back of the head with a spitball from some kid further back. You get angry. Do you TATTLE on him, or YELL at the other kid?',

'You finally make it home. You embarassingly walk away from Jessica, hopeful you might work up the courage to say more than two full sentences to her next time. As you walk in the front door, your mom asks what you did today. Do you tell her "LEARNED A LOT" or "NOTHING"?'

];

var answer = ['RIDE THE BUS', 'FRONT', 'AVOID', 'FRIENDS', (x * y), 'CLASS', 'BELCH', 'FILL UP', 'SLOPPY JOES', 'SAY HELLO', 'IGNORE THE FRY', 'DECLINE', 'RUN', 'HEAD TO PE', 'ALL OF THE ABOVE', 'PULL IT OFF', 'TATTLE', 'LEARNED A LOT'];

function Scenario(question, answer) {
  this.question = question;
  this.answer = answer;
};

// pushes instantiated scenario objects to scenario array
for (var i = 0; i < question.length; i++) {
  scenario.push(new Scenario(question[i], answer[i]));
};

// start intro text when clicking "Play Game"

// function death() {
//   // add death function here
// }

function startGame() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[0].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[0].answer +'" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 0) {
        gameWindow.innerHTML = content;
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[0].answer) > -1) {
          console.log('Question 1 right');
          gameWindow.innerHTML = '<span>You decide to wait it out for the bus to arrive. It eventually pulls up a few minutes late. The door to the bus flies open with a whirr revealing the driver with a disapproving look on his face. "Hurry up and get on, kid," he tells you. "I ain\'t getting older." You quickly run onto the bus and the door shuts quickly behind you. <br><br> GAIN 100 POINTS <br><br>PRESS ENTER TO CONTINUE</span>';
          points += 100;
          scenario2();
        } else {
          gameWindow.innerHTML = '<span>You decide that you\'re not into this whole education thing today--maybe you\'ll try again tomorrow. You grab your backpack, throw it over one shoulder, and head off toward the park. You figure you can hide out there for an hour or two, and then sneak back home without anyone being the wiser. A voice comes from behind you. "Jimmy! What are you doing?!" Oh no! It\'s your mother! She must\'ve forgotten something at home, come back from work, and spotted you trying to skip. She\'s pulling over and is headed your way. This will not end well. <br><br> LOSE 100 POINTS <br><br>Stay in School, kids.<br><br>PRESS ENTER TO CONTINUE</span>';
          points -= 100;
          // deathFunctions();
          console.log('Question 1 wrong');
        }
      }
    }
  });
}

function scenario2() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[1].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[1].answer +'" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 1) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();
        }, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[1].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>As the bus begins to move, you make your way to the open seat at the front. At the next bus stop, Jessica, your crush from elementary school, walks onto the bus. In what feels like a scene out of a movie, time slows down and Jessica walks in slow motion and sits down in the open seat next to you. You blush excitedly for the rest of the ride, despite not quite having the nerve to talk to her. <br><br> GAIN 100 POINTS <br><br>PRESS ENTER TO CONTINUE</span>';
          points += 100;
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

  // gameWindow.innerHTML = '<span>Great job, press enter to proceed</span>';

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[2].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[2].answer +'" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 2) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[2].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>You realize you\'re not quite ready for this pressure yet, and decide to play it cool for now. Jessica picks up her own pen, and you are glad you saved yourself from a potentially embarassing situation for now. <br><br> GAIN 50 POINTS <br><br>PRESS ENTER TO CONTINUE</span>';
          points += 50;
          scenario4();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario4() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[3].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[3].answer +'" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 3) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[3].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>You decide sitting next to your crush is too much for you and go to sit with your friends. You\'re glad to see some familiar faces and think middle school might not be so bad. <br><br> GAIN 50 POINTS <br><br>PRESS ENTER TO CONTINUE</span>';
          points += 50;
          scenario5();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario5() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[4].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[4].answer + '" value="" required>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 4) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[4].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>"Yes, that\'s right. ' + answer[4] + ' is the correct answer!" She smiles and you grin, hopeful that this is the beginning of a successful middle school education!<br><br> GAIN 100 POINTS. <br><br>PRESS ENTER TO CONTINUE</span>';
          points += 100;
          scenario6();
        } else {
          console.log('wrong');
          gameWindow.innerHTML = '<span>"No, that\'s not it. ' + answer[4] + ' is the correct answer. Perhaps you should pay more attention." You slump in your seat. Hopefully this isn\'t a sign of what\'s to come with the rest of your middle school education.<br><br> LOSE 100 POINTS <br><br>PRESS ENTER TO CONTINUE</span>';
          points -= 100;
          scenario6();
        }
      }
    }
  });
}

function scenario6() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[5].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[5].answer + '" value="">' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 5) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[5].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>Education is important! If you had learned the word "precedent" yet, you\'d say education takes it! You decide to hold it and go after class so you can be sure to be on time. <br><br> GAIN 50 POINTS <br><br>PRESS ENTER TO CONTINUE</span>';
          points += 50;
          scenario7();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario7() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[6].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[6].answer + '" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 6) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[6].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>You let out the belch that had been building up. Several of the other students laugh at this. You\'re not so old yet that burps have stopped being funny. One of the cool kids gives you a thumbs up. <br><br> EARN 50 POINTS <br><br>PRESS ENTER TO CONTINUE  </span>';
          points += 50;
          scenario8();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario8() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[7].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[7].answer + '" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 7) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[7].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>You decide to fill up your own bottle and hurry to class. The drinking fountain water is great, and you realize you have more lunch money left over for that sweet chocolate milk later.<br><br> GAIN 25 POINTS <br><br>PRESS ENTER TO CONTINUE</span>';
          points += 25;
          scenario9();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario9() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[8].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[8].answer + '" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 8) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[8].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>Cafeteria lunch was always so-so at elementary, but this is something else. These Sloppy Joes might be the single greatest things you\'ve ever eaten. YUM!<br><br> GAIN 100 POINTS <br><br>PRESS ENTER TO CONTINUE</span>';
          points += 100;
          scenario10();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario10() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[9].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[9].answer + '" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 9) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[9].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>You decide to take the single biggest risk of your young life and walk by Jessica\'s table. You smile awkwardly and say hello as you pass. She gives a shy wave back as you make your way to the lunch table with your friends. WOW! You finally did it! This is the beginning of the story you\'ll tell your future children about how it all began. <br><br> GAIN 100 POINTS <br><br>PRESS ENTER TO CONTINUE</span>';
          points += 100;
          scenario11();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario11() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[10].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[10].answer + '" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 10) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[10].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>Despite your temptation to emulate all of the wacky, zany food fights from many of your favorite kids movies, you show restraint beyond your years and simply move the fry off of your plate and continue eating. <br><br> GAIN 50 POINTS <br><br>PRESS ENTER TO CONTINUE </span>';
          points += 50;
          scenario12();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario12() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[11].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[11].answer + '" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 11) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[11].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>You decline the call. You can make up an excuse for not answering it later, but you decide to keep playing and in a couple of minutes you beat the game! Priorities. <br><br> GAIN 100 POINTS <br><br>PRESS ENTER TO CONTINUE</span>';
          points += 100;
          scenario13();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario13() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[12].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[12].answer + '" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 12) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[12].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>You sprint to your locker and grab your gym bag out of it. You are on your way to PE, after all. Might as well get warmed up before the education gets physical! <br><br> GAIN 100 POINTS <br><br>PRESS ENTER TO CONTINUE</span>';
          points += 100;
          scenario14();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario14() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[13].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[13].answer + '" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 13) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[13].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>You find this whole thing to be pretty bizarre, but it looks scary and dangerous. As you begin to walk away, the swirling black pool begins to decrease in size and eventually disappears entirely. Hmm. Time for class! <br><br> GAIN 100 POINTS <br><br>PRESS ENTER TO CONTINUE</span>';
          points += 100;
          scenario15();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario15() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[14].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[14].answer + '" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 14) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[14].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>That is correct. All five Ds are necessary to be successful at this game. You prove to the rest of the class that you\'re a hot shot when it comes to dodgeball, and the coach puts you on the team for the showdown with the rival skeewl. <br><br> GAIN 100 POINTS <br><br>PRESS ENTER TO CONTINUE</span>';
          points += 100;
          scenario16();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario16() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[15].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[15].answer + '" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 15) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[15].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>You take a moment to get the gum off of your shoe. Gross. After seveeral seconds of clawing at it, you\'re able to get it completely off and into the nearest trash can <br><br> GAIN 25 POINTS <br><br>PRESS ENTER TO CONTINUE.</span>';
          points += 25;
          scenario17();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario17() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[16].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[16].answer + '" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 16) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[16].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>You politely get the bus driver\'s attention and let him know what happens. Without turning around, he shouts toward the back, "Jimmy Baker! You remember what happened last year, right? We better not have a repeat of that behavior this year!" Jimmy cowers in his seat, his cheeks burning with embarassment. <br><br> GAIN 100 POINTS <br><br>PRESS ENTER TO CONTINUE </span>';
          points += 50;
          scenario18();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

function scenario18() {

  // check for enter key press
  document.addEventListener('keydown', function(e) {
    var content = '<form id="answer_field">' +
                    '<span>' + scenario[17].question + '</span>' +
                    '<input id="answer" type="text" name="' + scenario[17].answer + '" value="" autofocus>' +
                  '</form>';

    if (e.which === 13) {
      if (counter === 17) {
        gameWindow.innerHTML = content;
        setTimeout(function() {
          document.getElementById('answer').focus();}, 250);
        counter++;
      } else {
        e.preventDefault();
        var currentAnswer = document.getElementById('answer').value.toUpperCase();
        if (currentAnswer.indexOf(scenario[17].answer) > -1) {
          console.log('got it');
          gameWindow.innerHTML = '<span>Like most kids, your inclination is to say, "Nothing", but you know your mom won\'t have any of that. You let her know you learned a lot today, and give her a brief synopsis of the day. "Glad you had such a great day, honey!" she says. "Hope tomorow is just as great." You gulp. TOMORROW? <br><br> GAIN 100 POINTS <br><br>PRESS ENTER TO CONTINUE</span>';
          points += 100;
          scenario19();
        } else {
          // call death function here
          console.log('got it wrong');
        }
      }
    }
  });
}

// introText();
// startGame();
startGame();


start_btn.addEventListener('click', function() {
  var intro = document.getElementById('intro_text');
  intro.style.display = 'block';
});
