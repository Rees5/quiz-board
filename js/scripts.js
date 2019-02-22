$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=1]:checked").val());
    var q2 = parseInt($("input:radio[name=2]:checked").val());
    var q3 = parseInt($("input:radio[name=3]:checked").val());
    var q4 = parseInt($("input:radio[name=4]:checked").val());
    var q5 = parseInt($("input:radio[name=5]:checked").val());
    var q6 = parseInt($("input:radio[name=6]:checked").val());
    $("#score").text(q1+q2+q3+q4+q5+q6);
    $("#display").text(((q1+q2+q3+q4+q5+q6)/6)*100)
  });
});
