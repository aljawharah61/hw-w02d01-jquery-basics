

$('#stopButton').on('click',turnOnStopLight);
$('#slowButton').on('click',turnOnSlowLight);
$('#goButton').on('click',turnOnGoLight);

function turnOnStopLight() {


$('#stopLight').css('background-color','Red');
$('#slowLight').css('background-color','Black');
$('#goLight').css('background-color','Black');
}

// turn on slow function
function turnOnSlowLight() { 
  $('#stopLight').css('background-color','Black');
  $('#slowLight').css('background-color','yellow');
  $('#goLight').css('background-color','Black');
}
  
// turn on go function
function turnOnGoLight() {
  $('#stopLight').css('background-color','Black');
  $('#slowLight').css('background-color','Black');
  $('#goLight').css('background-color','Green');}

// set stop light click event

// set slow light click event

// set go light click event


