$(document).ready(function() {
  $('#container form').submit(function(event) {

    var answersA = 0;
    var answersB = 0;
    var answersC = 0;

    var queston1 = ('input:radio[name=temperature]:checked]').val();
    var question2 = ('input:radio[name=activity]:checked').val();
    var question3 = ('input:radio[name=money]:checked').val();
    var question4 = ('input:radio[name=transportation]:checked').val();
    var question5 = ('input:radio[name=wifi]:checked').val();

    if (question1 === 'a') {
      answersA += 1;
    } else if (question1 === 'b') {
      answersB += 1;
    } else if (question1 === 'c') {
      answersC += 1;
    }

    if (question2 === 'a') {
      answersA += 1;
    } else if (question2 === 'b') {
      answersB += 1;
    } else if (question2 === 'c') {
      answersC += 1;
    }

    if (question3 === 'a') {
      answersA += 1;
    } else if (question3 === 'b') {
      answersB += 1;
    } else if (question3 === 'c') {
      answersC += 1;
    }

    if (question4 === 'a') {
      answersA += 1;
    } else if (question4 === 'b') {
      answersB += 1;
    } else if (question4 === 'c') {
      answersC += 1;
    }

    if (question5 === 'a') {
      answersA += 1;
    } else if (question5 === 'b') {
      answersB += 1;
    } else if (question5 === 'c') {
      answersC += 1;
    }

    if(answersA > 2) {
      $('#mexico').show();
    } else if (answersB > 2) {
      $('#iceland').show();
    } else if (answersC > 2) {
      $('#milan').show();
    } else {
      $('#unsure').show();
    }
    event.preventDefault
  });
});
