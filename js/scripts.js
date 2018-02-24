$(document).ready(function() {
  $('#container form').submit(function(event) {
    event.preventDefault();
    console.log('hi');
    var answersA = 0;
    var answersB = 0;
    var answersC = 0;

    var queston1 = $("input[name='temperature']:checked").val();
    var question2 = $("input[name='activity']:checked").val();
    var question3 = $("input[name='money']:checked").val();
    var question4 = $("input[name='transportation']:checked").val();
    var question5 = $("input[name='wifi']:checked").val();

    if (question1 === "a") {
      answersA += 1;
    } else if (question1 === "b") {
      answersB += 1;
    } else if (question1 === "c") {
      answersC += 1;
    }

    if (question2 === "a") {
      answersA += 1;
    } else if (question2 === "b") {
      answersB += 1;
    } else if (question2 === "c") {
      answersC += 1;
    }

    if (question3 === "a") {
      answersA += 1;
    } else if (question3 === "b") {
      answersB += 1;
    } else if (question3 === "c") {
      answersC += 1;
    }

    if (question4 === "a") {
      answersA += 1;
    } else if (question4 === "b") {
      answersB += 1;
    } else if (question4 === "c") {
      answersC += 1;
    }

    if (question5 === "a") {
      answersA += 1;
    } else if (question5 === "b") {
      answersB += 1;
    } else if (question5 === "c") {
      answersC += 1;
    }

    if(answersA >= 3) {
      $('#iceland').hide();
      $('#milan').hide();
      $('#subcontent').hide();
      $('#mexico').show();
    } else if (answersB >= 3) {
      $('#mexico').hide();
      $('#milan').hide();
      $('#subcontent').hide();
      $('#iceland').show();
    } else if (answersC >= 3) {
      $('#mexico').hide();
      $('#iceland').hide();
      $('#subcontent').hide();
      $('#milan').show();
    } else {
      $('#mexico').hide();
      $('#iceland').hide();
      $('#milan').hide();
      $('#subcontent').show();
    }

  });
});
