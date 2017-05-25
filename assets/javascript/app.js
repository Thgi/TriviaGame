// ---first page ---
// totally trivial trivia 
// create the button and show "start" on click 
//hide questions and answers and count = 0


//---second page ---
// make the time remaining 30 seconds
// create the time count down. 
// show to next page when the count down to "0" 
// question and answers
//  mark one time answer


//---third page---
// show correct 
// countCorrect ++ if the users answer correct
// show incorrect answers
// countWrong ++ if the user answer incorrect
// show unanswered 
// coutUnanswered ++ if the user answer incorrect

$(document).ready(function() {
  var correctAnswer = 0;
  var incorrectAnswer = 0;
  var unanswered = 0;
  var count = 15;
  var intervalID;

  $(".answers").hide();
  $(".answerText").hide();
  $( ".question" ).hide();
  $( ".textQuestion" ).hide();
  $( ".counter" ).hide();

  $("#startGame").on("click", function() {

    correctAnswer=0;
    incorrectAnswer = 0;
    unanswered=0;
    count = 15;
    $(".answers").hide();
    $(".answerText").hide();
    $( "#startGame" ).hide();
    $( ".question" ).show();
    $( ".textQuestion" ).show();
    $( ".counter" ).show();
    // $('input[name="choice1"]').attr('checked',false);
    //   	$('input[name="choice2"]').attr('checked',false);
    //   	$('input[name="choice3"]').attr('checked',false);
    //   	$('input[name="choice4"]').attr('checked',false);
    //   	$('input[name="choice5"]').attr('checked',false);
    //   	$('input[name="choice6"]').attr('checked',false);

   		// $('input["choice1"]').prop('checked',false);
     //  	$('input["choice2"]').prop('checked',false);
     //  	$('input["choice3"]').prop('checked',false);
     //  	$('input["choice4"]').prop('checked',false);
     //  	$('input["choice5"]').prop('checked',false);
     //  	$('input["choice6"]').prop('checked',false);
      
    intervalID = setInterval(function() { timer()}, 1000);
      
      	
  });

  $("input:radio[name=choice1]").click(function() {
      var radioValue1 = $(this).val(); 
      if (radioValue1 == "1986"){
        correctAnswer += 1;
      }
      else if ($('input:radio:checked').length > 0){
        incorrectAnswer +=1;
      }
  });

  $("input:radio[name=choice2]").click(function() {
      var radioValue2 = $(this).val();
      if (radioValue2 == "Maldives"){
        correctAnswer += 1;
      }
      else if ($('input:radio:checked').length > 0){
        incorrectAnswer +=1;
      }
  });

  $("input:radio[name=choice3]").click(function() {
      var radioValue3 = $(this).val();
      if (radioValue3 == "7000"){
        correctAnswer += 1;
      }
      else if ($('input:radio:checked').length > 0){
        incorrectAnswer +=1;
      }
  });

  $("input:radio[name=choice4]").click(function() {
      var radioValue4 = $(this).val();
      if (radioValue4 == "Bartholomeu Dias"){
        correctAnswer += 1;
      }
      else if ($('input:radio:checked').length > 0){
        incorrectAnswer +=1;
      }
  });

  $("input:radio[name=choice5]").click(function() {
      var radioValue5 = $(this).val();
      if (radioValue5 == "Irish"){
        correctAnswer += 1;
      }
      else if ($('input:radio:checked').length > 0){
        incorrectAnswer +=1;
      }
  });

  $("input:radio[name=choice6]").click(function() {
      var radioValue6 = $(this).val();
      if (radioValue6 == "Hanoi"){
        correctAnswer += 1;
      }
      else if ($('input:radio:checked').length > 0){
        incorrectAnswer +=1;
      }
  });

  function timer(){
     $("#timer").text(count);
     count--;
     if (count < 0){
       $("#correctAnswers").text(correctAnswer);
       $("#wrongAnswers").text(incorrectAnswer);
       if (! $("input:radio[name=choice1]").is(":checked")){
         unanswered +=1;
       }
       if (! $("input:radio[name=choice2]").is(":checked")){
         unanswered +=1;
       }
       if (! $("input:radio[name=choice3]").is(":checked")){
         unanswered +=1;
       }
       if (! $("input:radio[name=choice4]").is(":checked")){
         unanswered +=1;
       }
       if (! $("input:radio[name=choice5]").is(":checked")){
         unanswered +=1;
       }
       if (! $("input:radio[name=choice6]").is(":checked")){
         unanswered +=1;
       }

       $("#unansweredAnswers").text(unanswered);
       $( ".question" ).hide();
       $( ".textQuestion").hide();
       $( "#startGame").hide();
       $( ".counter").hide();
       $(".answers").show();
       $(".answerText").show();
       clearInterval(intervalID);
     }
   }
   });


