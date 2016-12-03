/*--- variables ---*/
var input, firstNum, op, result;
var displayEl = document.getElementById('display');




/*--- Event Listeners ---*/







/*--- functions ---*/
function initialize() {
  input = '';
  firstNum = op = result = null;
  //op = null;
  //result = null;
  updateDisplay();
}

function updateDisplay(){
  var text = result || input || '0.';
  displayEl.textContent = text;
}

initialize();
