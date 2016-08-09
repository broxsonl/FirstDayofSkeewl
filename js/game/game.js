'use strict';
// ++++++++++++++++++++++++++++++++++++++++++++
// DATA - Global Variable declarations
// ++++++++++++++++++++++++++++++++++++++++++++
var points = 0;
var lunch = false;
var pencil = false;
var bullyMad = false;

// ++++++++++++++++++++++++++++++++++++++++++++
// Global HTML Element Getters
// ++++++++++++++++++++++++++++++++++++++++++++
var gameWindow = document.getElementById('game_Window');
var gameText = document.createElement('p');

// ++++++++++++++++++++++++++++++++++++++++++++
// Function Declarations
// ++++++++++++++++++++++++++++++++++++++++++++

youLose() {
  - ends the game
  - create html element in center of screen to say 'YOU LOSE' with a form that asks for your initials.
  - kicks you to the scores page and adds the initials and score to the scores page.
  - Ranks the elements on the score page by highest score.
}

render() {
  - Renders the text to our game window
}

scoreGraph() {
  - changes the graph depending on the current score each time a new story point is reached
}

gameOver() {
  - ends the game
  - create html element in center of screen to say 'YOU WIN' with a form that asks for your initials.
  - kicks you to the scores page and adds the initials and score to the scores page. Ranks the elements on the score page by highest score.
}

Introduction: { //probably will go in the html above the game window, or to the side.
  Setup: 'You are Little Jimmy, and today is your first day of middle school. Grade school wasn\'t so tough, but you\'ve heard from older kids that middle school is a whole different story.  '
}

Instructions: {//probably will go in the html above or to the side of the game window.
  You will be presented with choices to make in the game, that will be signified by the action being written in all caps. For example, 'GO TO SCHOOL' will signify that to perform this action, you will want to type that phrase as your choice of action.
}

Scene 1 {

  Setup: 'You find yourself alone at the bus stop awaiting the bus. You\'re nervous about your first day of middle school, and think that it might just be best to skip school today. You also wonder if walking to school might be an ideal alternative to riding the bus. Do you WALK TO SCHOOL, RIDE THE BUS, or SKIP SCHOOL?'

  if (WALK TO SCHOOL) {
    'As another kid in the neighborhood is arriving at the bus stop, you toss your backpack over your shoulder and decide to hoof it to school instead. You imagine you\'re going to be late to class, but you\'ve decided that this is preferable to being packed onto the bus with all of the other kids first thing.'
    //Will put branching path here later that will go down a separate story path of functions.
  }
  else if (RIDE THE BUS) {
    'You decide to wait it out for the bus to arrive. It eventually pulls up, a few minutes late. The door to the bus opens with a whirr, revealing the driver with a disapproving look on his face. "Hurry up and get on, kid," he tells you. You quickly run onto the bus and the door shuts quickly behind you.'
    busChoice();
  }
  else if (SKIP SCHOOL) {
    'You decide that you\'re not into this whole education thing today--maybe you\'ll try again tomorrow. You grab your backpack, throw it over one shoulder, and head off toward the park. You figure you can hide out there for an hour or two, and then sneak back home without anyone being the wiser. A voice comes from behind you. "Jimmy! What are you doing?!" Oh no! It\'s your mom. She must\'ve forgotten something at home, come back from work, and spotted you trying to skip. She\'s pulling over and is headed your way. This will not end well.'
    youLose();
  }
}


//event listener

inputEntryListener() {

}

function gameStart() {
  var gameQuestion = prompt('You find yourself alone at the bus stop awaiting the school bus. You\'re nervous about your first day of middle school, and think that it might just be best to skip school today. You also wonder if walking to school might be an ideal alternative to riding the bus. Do you WALK, BUS, or SKIP?').toLowerCase();
  if (gameQuestion === 'bus'){
      alert('You decide to wait it out for the bus to arrive. It eventually pulls up, a few minutes late. The door to the bus opens with a whirr, revealing the driver with a disapproving look on his face. "Hurry up and get on, kid," he tells you. You quickly run onto the bus and the door shuts quickly behind you. GAIN 10 POINTS.');
      points += 10;
  }
  // else if (gameQuestion === 'walk'{
  //   alert('That\'s right, ' + userName + '! Lee\'s been doing Lindy Hop and other Jazz dances for nine years!');
  //   points += 10;
  // }
  else if (gameQuestion === 'skip') {
    alert('You decide that you\'re not into this whole education thing today--maybe you\'ll try again tomorrow. You grab your backpack, throw it over one shoulder, and head off toward the park. You figure you can hide out there for an hour or two, and then sneak back home without anyone being the wiser. A voice comes from behind you. "Jimmy! What are you doing?!" Oh no! It\'s your mom. She must\'ve forgotten something at home, come back from work, and spotted you trying to skip. She\'s pulling over and is headed your way. This will not end well.')
    youLose();
  }
  else {
    alert('You must make a valid choice.')
    gameStart();
  }
}

function scenarioOne () {
  var gameQuestion = prompt('As you walk onto the bus, you look around nervously for a place to seat. You spot an empty seat all the way in the back with the cool kids, and an empty seat in the front row, only a few feet away. Do you sit in the BACK or FRONT?').toLowerCase();
  if (gameQuestion === 'back') {
    alert('As you make your way to the back seat, you notice your crush from elementary school, Jessica, sitting near the seat you were going to pick. You stare a little too long, and end up tripping and falling. As the kids begin to laugh, you embarrassingly make your way to the seat and sit quietly for the rest of the ride to school. LOSE 5 POINTS');
      points -= 5;
  }
  else if (gameQuestion === 'front') {
    alert('You quickly make your way to the open seat at the front. At the next bus stop, Jessica, your crush from elementary school, makes her way onto the bus and sits down in the open seat next to you. You blush excitedly for the rest of the ride. GAIN 10 POINTS')
    points += 10;
  }
  else {
    alert('You must make a valid choice.')
    scenarioOne();
  }
};

function scenarioTwo () {
  var gameQuestion = prompt('You arrive at school and get off of the bus. As you\'re walking up, your eyes go wide as you realize that you left the size tag on your t-shirt. Very uncool. You\'re sure no one has noticed yet. What do you do? RIP it off, or LEAVE it?').toLowerCase();
  if (gameQuestion === 'rip') {
    alert('You go to rip the tag off of your shirt, and surprise yourself with your own strength. You rip a clean hole through the shirt\'s fabric, creating a very visible hole. Darn! LOSE 5 POINTS');
      points -= 5;
  }
  else if (gameQuestion === 'leave') {
    alert('You decide you don\'t really care and leave the sticker. One of the coolest kids in school walks by, see you, and says, "Hey kid, you left the sticker on your shirt? What a cool trend! I\'m totally gonna start doing that too! You\'re alright." GAIN 10 POINTS')
    points += 10;
  }
  else {
    alert('You must make a valid choice.')
    scenarioTwo();
  }
}

function scenarioThree () {
  var gameQuestion = prompt('You hear the bell for first period ring. You hurry along to class and make it just in time. When you walk in, you realize that this is algebra class. You see Jessica sitting at a desk with an open seat next to her, and two of your friends sitting in the back encouraging you to sit with him. Do you sit with JESSICA or with FRIENDS?').toLowerCase();
  if (gameQuestion === 'jessica') {
    alert('Your friends glower at you as you sit next to Jessica. You beam a smile at them, and then face front as the teacher begins the lesson. You are called on to answer a question, and your voice cracks loudly. Several kids in class, including Jessica- snicker. LOSE 10 POINTS.');
      points -= 10;
  }
  else if (gameQuestion === 'friends') {
    alert('You decide sitting next to your crush is too much for you and go to sit with your friends. You\'re glad to see some familiar faces and think middle school might not be so bad. GAIN 20 POINTS.')
    points += 10;
  }
  else {
    alert('You must make a valid choice.')
    scenarioThree();
  }
}

function scenarioFour () {
  var x = Math.floor(Math.random() * (15 + 1));
  var y = Math.floor(Math.random() * (5 + 1));
  var answer = x * y
  var gameQuestion = prompt('In the middle of her lecture, Ms. Lawrence calls on you! "Jonny, what is ' + x + ' times ' + y + '?"');
  if (gameQuestion === answer) {
    alert('Ms. Lawrence smiles at you and says, "Good job. That\'s the right answer!" GAIN 20 POINTS.');
      points += 20;
  }
  else {
    alert('Ms. Lawrence frowns and shakes her head. "No, that\'s incorrect." LOSE 10 POINTS.')
  }
};

function scenarioFive() {
  var gameQuestion = prompt('The bell rings and first period is over. You head out to go to second period. You don\'t have a lot of time between classes, but you really need to use the bathroom. Do you go to the BATHROOM or go straight to CLASS?').toLowerCase();
  if (gameQuestion === 'bathroom') {
    alert('You rush to bathroom to make it before second period starts. You quickly do your business, and rush to class, making it right as the bell rings. Only then do you realize you\'ve been dragging a very long strip of toilet paper from your shoe the whole way there. LOSE 10 POINTS.');
      points -= 10;
  }
  else if (gameQuestion === 'class') {
    alert('You\'ve really gotta go, but figure it best to be on time to class. While you may have to hold it for the whole class, you make it with plenty of time to spare. GAIN 5 POINTS.')
    points += 5;
  }
  else {
    alert('You must make a valid choice.')
    scenarioFive();
  }
};

function scenarioSix() {
  var gameQuestion = prompt('In the middle of second period, you start daydreaming during a fairly boring lecture about US History. You begin to imagine the you\'re a valiant knight fighting a fearsome dragon! Do you attack with your SWORD, shoot your BOW, or attack with your LANCE?').toLowerCase();
  if (gameQuestion === 'sword') {
    alert('You swing your sword at the dragon...and then come out of your daydream to realize you\'ve been flailing in your seat wildly, causing the entire room to stop and look at you quizically. You sink into your seat, embarassed, while the teacher continues his lecture. LOSE 10 POINTS.');
      points -= 10;
  }
  else if (gameQuestion === 'bow') {
    alert('You come out of your daydream to realize that you just fired a rubberband at the kid in front of you, NOT at a dragon. The teacher, Mr Johnson, sees this occur and shouts in anger as the kid in front of you rubs the back of their head. He immediately sends you to the principal\'s office, where you await your mother to come pick you up after school.');
    youLose();
  }

  else if (gameQuestion === 'lance') {
    alert('You run the dragon through with your lance and slay it! You are victorious! You awake from your daydream with no one the wiser. GAIN 20 POINTS')
    points += 20;
  }

  else {
    alert('You must make a valid choice.')
    scenarioSix();
  };
}

function scenarioSeven() {
  var gameQuestion = prompt('You glance at the clock. Class is nearly over. Thank goodness. Your eyes move down to the floor beneath your desk, and your eyes go wide as you see a swirling black mass forming on the floor. Do you TOUCH it or LEAVE it alone?').toLowerCase();
  if (gameQuestion === 'leave') {
    alert('You think you must be daydreaming again, so you leave it alone. After a few seconds, it disappears completely, as if it were never there.');
  }
  else if (gameQuestion === 'touch') {
    alert('You decide to be brave and touch the swirling mass. You suddenly feel yourself being pulled by a mysterious force. Your classmates and teacher, now becoming aware of what\'s happening, see you being enveloped by this strange mass. Before anyone is able to come to your aid, you are pulled completely inside. Moments later, you find yourself floating in a gigantic void, stars glimmering silently in the background. Your first day of school sure took a strange turn.');
    youLose();
  }
}



////

'use strict';

var points = 0;
var allChoices = [];



// function storyPoint () {
// - create fluff element <p>
// - append element
// - text content
// }

function Choice (ID, Caption, and Event) {
  this.ID = ID;
  this.Caption = Caption;
  this.Event = Event;
}

allChoices.push(this)

//////////Choice Events/////////

// Obstacle 1- Sit in front/back of the bus
var backOfBusEvent = new Event("You chose the front, what next?", backBusChoices, false, false)


var backOfBusEvent = new Event("You chose the back, what next?", backBusChoices, false, false)

var choices = []
choices.push(new Choice("CHOICE_FRONT", "Front", frontOfBusEvent));
choices.push(new Choice("CHOICE_BACK", "Back", backOfBusEvent));
var caption = "You get on the bus and you see your crush.  Where do you want to sit?";
var choseSeatEvent = new Event(caption, choices, false, false);


// Obstacle 2- Jessica drops pen
var choices = []
choices.push(new Choice("CHOICE-PICKUP", "Pick-up", pickUpPenEvent));
choices.push(new Choice("CHOICE-NOPICKUP", "No-pick-up", noPickUpPenEvent));
var caption = "You are now walking towards your seat, and Jessica drops her pen. Do you pick up the pen for her or keep walking because you are too nervous to talk to and approach Jessica?";
var chosePenEvent = new Event(caption, choices, false, false);

// Obstacle 3- Left tag on Shirt

// Obstacle 4- 1st prd: Algebra; sit in FRONT w/ Jessica or BACK of class

// Obstacle 5- Solve algebraic equation

// Obstacle 6- Lunch
var choices = []
choices.push(new Choice("CHOICE-BOXLUNCH", "", ));
choices.push(new Choice("CHOICE-CHKNBURGER", "", ));
var caption = "You are now at lunch. You have a choice of pulling out your Ninja Turtle box lunch that your mom packed. Or, you can choose out of the 3 choices which includes: chicken burger, sloppy joe, or mystery meat corndog. Which do you choose? The lunch your mom packed which you know to be safe? Or, take your chances with one of the school lunch choices?";
var choseLunchEvent = new Event(caption, choices, false, false);

// Obstacle 7- 3rd period
var choices = []
choices.push(new Choice("CHOICE-DESANI", "", ));
choices.push(new Choice("CHOICE-CAMELBACK", "", ));
var caption = "You realize you are thirsty during English class. You can either fill up you CamelBack waterbottle, or, go and buy a chilled Dasani for $3.59. Should you use your left-over lunch money for a Dasani water, or fill your Camelback. Jessica is watching.";
var choseWaterEvent = new Event(caption, choices, false, false);

// Obstacle 8- After School --> Go home
var choices = []
choices.push(new Choice("CHOICE-SHORTROUTE", "", ));
choices.push(new Choice("CHOICE-SCENICROUTE", "", ));
var caption = "You are done with school. You have had a long day with lots of ups and downs, and warnm out from all teh obstacles that you've endured. You zit on you forehead is getting bigger and you just want to go home. Do you take the short route and get home faster? Or take the longer, more scenic route and decompress before mom bombards you with questions about The First Day. Jessica also sometimes takes the short route.";
var choseRouteEvent = new Event(caption, choices, false, false);
