var table = document.getElementsByTagName('table')[0];
var tableData = document.getElementsByTagName('tableData')[0];
var scores;

function scoreBoard(){
  var position = 1;                                   //***
  for (var i = scores.length ; i > -1; i--) {         //***
  // for (var i = scores.length; i < ; i++) {
    var tr = document.createElement('tr');
    var user = document.createElement('td');
    var score = document.createElement('td');
    // var prevRound = document.createElement('td');
    user.innerHTML = scores[i].n;                     //***
    score.innerHTML = scores[i].s;                    //***
    tr.appendChild(user);
    tr.appendChild(score);
    tableData.appendChild(tr);
    position++;                                        //***
  }
}

function scoreLocal() {
  if (localStorage.scores){
    scores = JSON.parse(localStorage.scores);
  }else {
    scores = [{n:'AAA',s: 1000}, {n: 'ABB', s: 1200}, {n: 'BBB', s: 1400}, {n: 'CCC', s: 1600}, {n: 'DDD', s: 1800}];                                             //***
  }
}

checkLocal();  //***
makeTable();   //***
