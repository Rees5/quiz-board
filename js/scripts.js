//User Interface Logic
$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=1]:checked").val());
    var q2 = parseInt($("input:radio[name=2]:checked").val());
    var q3 = parseInt($("input:radio[name=3]:checked").val());
    var q4 = parseInt($("input:radio[name=4]:checked").val());
    var q5 = parseInt($("input:radio[name=5]:checked").val());
    var q6 = parseInt($("input:radio[name=6]:checked").val());
    var q7 = parseInt($("input:radio[name=7]:checked").val());
    var q8 = parseInt($("input:radio[name=8]:checked").val());
    var q9 = parseInt($("input:radio[name=9]:checked").val());
    var q10 = parseInt($("input:radio[name=10]:checked").val());
    var score = (q1+q2+q3+q4+q5+q6+q7+q8+q9+q10);
    var perc = (((score)/15)*100);

    $("#score").text(score +" mks");
    $("#display").text(perc+"  %");
//Business Logic
    if(perc>=81) {
      alert("Excellent")
    } else if(perc>=50) {
      alert("Fair")
    } else if(perc>=0) {
      alert("poor work, redo the quiz")
    }
    else {
      alert("You have not answered all the questions!")
    };
  });
});
