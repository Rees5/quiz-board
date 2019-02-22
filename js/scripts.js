//Business Logic//
$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=1]:checked").val());
    var q2 = parseInt($("input:radio[name=2]:checked").val());
    var q3 = parseInt($("input:radio[name=3]:checked").val());
    var q4 = parseInt($("input:radio[name=4]:checked").val());
    var q5 = parseInt($("input:radio[name=5]:checked").val());
    var q6 = parseInt($("input:radio[name=6]:checked").val());
    var score = (q1+q2+q3+q4+q5+q6);
    var perc = (((score)/6)*100)
    //user interface logic//
    $("#score").text(score +" mks");
    $("#display").text(perc+"  %")
  });
});
