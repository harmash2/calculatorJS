// * CALCULATOR PROGRAM

const display = document.getElementById('displayValue');
const btnContainer = document.querySelector('.actions');

let isMemory = false;
let memoryValue = 0;

function appendToDisplay(input){
  display.textContent += input;
};

function clearDisplay(){
  display.textContent = "";
};

function memory() {
  if(!isMemory) {
    memoryValue = parseFloat(display.textContent) || 0;
    isMemory = true;
    alert("Value stored in memory: " + memoryValue)
  } else {
    appendToDisplay(memoryValue);
    alert('Recall memory value: ' + memoryValue)
  };
};


btnContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.btn');
  if(!clicked) return;

  if (clicked.id === 'clear') {
    clearDisplay();
    // isMemory = false;
    // memoryValue = 0;
    return;
  };

  if(clicked.id === 'equil') {
    try {
      display.textContent = eval(display.textContent);
    } catch (error) {
      display.textContent = "Error"
    }
    return;
  };

  if(clicked.id === 'memory') {
    memory();
    return;
  }

  appendToDisplay(clicked.textContent);
});




