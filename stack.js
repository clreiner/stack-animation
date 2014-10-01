var theStack = []


var showStack = function() {
  $('#stack').empty();                  //clear the list
  for (var i = 0; i < theStack.length; i++) {
    $('#stack').prepend(('<li> '+ theStack[i] + '</li>')); //put list in html in reverse order
  }
}

$('#push').on('click', function () {                      
	theStack.push($("#stack-data").val());     //push number to the array
	$('#stack-data').val("");                  //clear the input box
  showStack();
})

$('#pop').on('click', function () {
	theStack.pop();                            //pop number from array
	showStack();
})

