var numbers = ["10", "9", "8", "7", "6", '5', "4", "3", '2', "1"];


// put numbers on page
$(document).ready(function() {
	for (var i = 0; i < 10; i++) {
	 //set up list of numbers to move
   $('#stack').append('<li class="' + (i) + '">' + numbers[i] + '</li>');
	}

  $('#push').on("click", function() {
    if (i >= 0) {
      i--;
      $('.' + i + '').animate({left: '460px'}, 600); //move numbers into stack
      console.log(i);
    }; 
  })

$('#pop').on("click", function() {
  if (i < 10) { 
    $('.' + i + '').animate({left: '0px'}, 600); // move numbers out of stack
    i++;
    console.log(i);
  };
})

})