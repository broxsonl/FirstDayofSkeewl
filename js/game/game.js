'use strict';

var points = 0;

//creating a class of gamemanager; declaring gamemanager
function GameManager () {
  this.events = [];
  this.currentEvent = ""; // currently empty string to give value. will override later.
}

GameManager.prototype.showEvent = function(eventId) {
  for (var i = 0; i < this.events.length; i++) {
    if (this.events[i].id === eventId) {
      //getting dialogue element from html >> setting its text
      var dialogueElement = document.getElementById("dialogue");
      dialogueElement.innerHTML = this.events[i].dialogue;
      //getting choices element from html >> creating buttons for choice selection
      var choicesElement = document.getElementById("choice_Container")
      // clear out pre-existing buttons from prev event choices
      choicesElement.innerHTML = "";
      // for loop to display choices in each event
      for (var j = 0; j < this.events[i].choices.length; j++) {
        var button = document.createElement("button");
        //created button that has caption we want
        button.innerHTML = this.events[i].choices[j].caption;

        // Store the event ID of the next event in the button value
        button.value = this.events[i].choices[j].eventId;

        //add button to container choice element
        button.onclick = function() {
          //tells it to shows the eventId of the choice user made
          //onlick shows the next event depending on choice made
          gameManager.showEvent(this.value);
        };

        choicesElement.appendChild(button);

      }
      // this.showEvent(this.events[i].choices[0].eventId);
    }
  }
}

//creating new instance of gamemanager
var gameManager = new GameManager ();

// Constructor function for setting the properties
function Choice (id, caption, eventId) {
  this.id = id;
  this.caption = caption;
  this.eventId = eventId;
}

//////////CHOICE EVENTS/////////
function Event(id, dialogue) {
  this.id = id;
  this.dialogue = dialogue;
  this.choices = [];
  this.points = 0;
  // this.coolPoints = 0;
  // this.nerdPoints = 0;
  this.winGame = false;
  this.loseGame = false;
  gameManager.events.push(this);
}

// GAME MANAGER

// Obstacle 1- Sit in front/back of the bus
var busEvent = new Event("BusEvent", "You get on the bus and you see your crush.  Where do you want to sit?");

busEvent.choices.push(new Choice("ChoiceFront", "front", "FrontBus"));
busEvent.choices.push(new Choice("ChoiceBack", "back", "BackBus"));

var frontBus = new Event("FrontBus", "You quickly make your way to the open seat at the front. At the next bus stop, Jessica, your crush from elementary school, makes her way onto the bus and sits down in the open seat next to you. You blush excitedly for the rest of the ride. GAIN 10 POINTS");


var backBus = new Event("BackBus", "As you make your way to the back seat, you notice your crush from elementary school, Jessica, sitting near the seat you were going to pick. You stare a little too long, and end up tripping over yourself. Not so smooth. As the kids begin to laugh, you embarrassingly make your way to the seat and sit quietly for the rest of the ride to school. LOSE 5 POINTS");


// Obstacle 2- Jessica drops pen

// Obstacle 3- Left tag on Shirt

// Obstacle 4- 1st prd: Algebra; sit in FRONT w/ Jessica or BACK of class

// Obstacle 5- Solve algebraic equation

// Obstacle 6- Lunch
var caption = "You are now at lunch. You have a choice of pulling out your Ninja Turtle box lunch that your mom packed. Or, you can choose out of the 3 choices which includes: chicken burger, sloppy joe, or mystery meat corndog. Which do you choose? The lunch your mom packed which you know to be safe? Or, take your chances with one of the school lunch choices?";
var choseLunchEvent = new Event

// Obstacle 7- 3rd period
var caption = "You realize you are thirsty during English class. You can either fill up you CamelBack waterbottle, or, go and buy a chilled Dasani for $3.59. Should you use your left-over lunch money for a Dasani water, or fill your Camelback. Jessica is watching.";
var choseWaterEvent = new Event

// Obstacle 8- After School --> Go home
var caption = "You are done with school. You have had a long day with lots of ups and downs, and warnm out from all the obstacles that you've endured. You zit on you forehead is getting bigger and you just want to go home. Do you take the short route and get home faster? Or take the longer, more scenic route and decompress before mom bombards you with questions about The First Day. Jessica also sometimes takes the short route.";
var choseRouteEvent = new Event

gameManager.showEvent("BusEvent");
