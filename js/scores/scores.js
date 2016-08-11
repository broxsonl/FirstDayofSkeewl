var table = document.getElementById('table');
var tbody = document.getElementById('tbody');
var scores, rank;

function scoreBoard(){
  var position = 1;
  for (var i = scores.length - 1; i > -1; i--) {
  // for (var i = scores.length; i < ; i++) {
    var tr = document.createElement('tr');
    var rank = document.createElement('td');
    var user = document.createElement('td');
    var score = document.createElement('td');
    // var prevRound = document.createElement('td');
    rank.innerHTML = position;
    console.log(scores[i]);
    user.innerHTML = scores[i].user;
    score.innerHTML = scores[i].score;
    tr.appendChild(rank);
    tr.appendChild(user);
    tr.appendChild(score);
    tbody.appendChild(tr);
    position++;
  }
}

function scoreLocal() {
  if (localStorage.getItem('scores')) {
    scores = JSON.parse(localStorage.scores);
  } else {
    scores = [{user:'Charlie ',score: 500}, {user: 'Caroline ', score: 200}, {user: 'Scotty ', score: 400}, {user: 'Devin ', score: 300}, {user: 'Munir ', score: 500}];
  }
}

scoreLocal();
scoreBoard();
