
'use strict';
// ++++++++++++++++++++++++++++++++++++++++++++
// DATA - Global Variable declarations
// ++++++++++++++++++++++++++++++++++++++++++++
var points = 0;

// ++++++++++++++++++++++++++++++++++++++++++++
// Global HTML Element Getters
// ++++++++++++++++++++++++++++++++++++++++++++
var gameWindow = document.getElementById('game_Window');
var gameText = document.createElement('p');

var x = Math.floor(Math.random() * (15 + 1));
var y = Math.floor(Math.random() * (5 + 1));

//The array for created objects from the scenario creator to be pushed to.
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

for (var i = 0; i < question.length; i++) {
  scenario.push(new Scenario(question[i], answer[i]));
};


// //creating a class of gamemanager; declaring gamemanager
// function GameManager () {
//   this.events = [];
//   this.currentEvent = ""; // currently empty string to give value. will override later.
// }
//
// GameManager.prototype.showEvent = function(eventId) {
//   for (var i = 0; i < this.events.length; i++) {
//     if (this.events[i].id === eventId) {
//       //getting dialogue element from html >> setting its text
//       var dialogueElement = document.getElementById("dialogue");
//       dialogueElement.innerHTML = this.events[i].dialogue;
//       //getting choices element from html >> creating buttons for choice selection
//       var choicesElement = document.getElementById("choice_Container")
//       // clear out pre-existing buttons from prev event choices
//       choicesElement.innerHTML = "";
//       // for loop to display choices in each event
//       for (var j = 0; j < this.events[i].choices.length; j++) {
//         var button = document.createElement("button");
//         //created button that has caption we want
//         button.innerHTML = this.events[i].choices[j].caption;
//
//         // Store the event ID of the next event in the button value
//         button.value = this.events[i].choices[j].eventId;
//
//         //add button to container choice element
//         button.onclick = function() {
//           //tells it to shows the eventId of the choice user made
//           //onlick shows the next event depending on choice made
//           gameManager.showEvent(this.value);
//         };
//
//         choicesElement.appendChild(button);
//
//       }
//       // this.showEvent(this.events[i].choices[0].eventId);
//     }
//   }
// }
//
// //creating new instance of gamemanager
// var gameManager = new GameManager ();
//
// // Constructor function for setting the properties
// function Choice (id, caption, eventId) {
//   this.id = id;
//   this.caption = caption;
//   this.eventId = eventId;
// }
//
// //////////CHOICE EVENTS/////////
// function Event(id, dialogue) {
//   this.id = id;
//   this.dialogue = dialogue;
//   this.choices = [];
//   this.points = 0;
//   // this.coolPoints = 0;
//   // this.nerdPoints = 0;
//   this.winGame = false;
//   this.loseGame = false;
//   gameManager.events.push(this);
// }
//
// // GAME MANAGER
//
// // Obstacle 1- Sit in front/back of the bus
// var busEvent = new Event("BusEvent", "You get on the bus and you see your crush.  Where do you want to sit?");
//
// busEvent.choices.push(new Choice("ChoiceFront", "front", "FrontBus"));
// busEvent.choices.push(new Choice("ChoiceBack", "back", "BackBus"));
//
// var frontBus = new Event("FrontBus", "You quickly make your way to the open seat at the front. At the next bus stop, Jessica, your crush from elementary school, makes her way onto the bus and sits down in the open seat next to you. You blush excitedly for the rest of the ride. GAIN 10 POINTS");
//
//
// var backBus = new Event("BackBus", "As you make your way to the back seat, you notice your crush from elementary school, Jessica, sitting near the seat you were going to pick. You stare a little too long, and end up tripping over yourself. Not so smooth. As the kids begin to laugh, you embarrassingly make your way to the seat and sit quietly for the rest of the ride to school. LOSE 5 POINTS");
//
//
// // Obstacle 2- Jessica drops pen
//
// // Obstacle 3- Left tag on Shirt
//
// // Obstacle 4- 1st prd: Algebra; sit in FRONT w/ Jessica or BACK of class
//
// // Obstacle 5- Solve algebraic equation
//
// // Obstacle 6- Lunch
// var caption = "You are now at lunch. You have a choice of pulling out your Ninja Turtle box lunch that your mom packed. Or, you can choose out of the 3 choices which includes: chicken burger, slppy joe, or mystery meat corndog. Which do you choose? The lunch your mom packed which you know to be safe? Or, take your chances with one of the school lunch choices?";
// var choseLunchEvent = new Event
//
// // Obstacle 7- 3rd period
// var caption = "You realize you are thirsty during English class. You can either fill up you CamelBack waterbottle, or, go and buy a chilled Dasani for $3.59. Should you use your left-over lunch money for a Dasani water, or fill your Camelback. Jessica is watching.";
// var choseWaterEvent = new Event
//
// // Obstacle 8- After School --> Go home
// var caption = "You are done with school. You have had a long day with lots of ups and downs, and warnm out from all the obstacles that you've endured. You zit on you forehead is getting bigger and you just want to go home. Do you take the short route and get home faster? Or take the longer, more scenic route and decompress before mom bombards you with questions about The First Day. Jessica also sometimes takes the short route.";
// var choseRouteEvent = new Event
//
// gameManager.showEvent("BusEvent");
