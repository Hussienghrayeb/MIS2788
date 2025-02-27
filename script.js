
// Wait for the DOM to fully load before running scripts 
document.addEventListener('DOMContentLoaded', () => { 
    const display = document.getElementById('display'); 
    const buttonsContainer = document.querySelector('.calculator-buttons'); 
   
    // Attach event listener for button clicks 
    buttonsContainer.addEventListener('click', handleButtonClick); 
   
    /** 
     * Handles click events for the calculator buttons. 
     * @param {Event} event - The click event on a button. 
     */ 
    function handleButtonClick(event) { 
      const target = event.target; 
      if (target.tagName.toLowerCase() !== 'button') return; 
   
      // Retrieve the button's value from data attribute 
      const buttonValue = target.getAttribute('data-value'); 
   
      // Process the button input: 
      // - Update the display with the pressed value. 
      // - Build the arithmetic expression. 
      // - Handle special buttons (e.g., clear, equals). 
       if (buttonValue === 'C') { 
         clearDisplay(); 
       } else if (buttonValue === '=') { 
         computeResult(); 
       }else if (buttonValue === 'D') { 
        deleteLastCharacter();
       }else { 
         updateDisplay(buttonValue); 
       }
    } 
   
    /** 
     * Updates the display area with new input. 
     * @param {string} value - The value to add to the display. 
     */ 
    function updateDisplay(value) { 
        if (display.textContent === '0') {
            display.textContent = value;
          } else {
            display.textContent += value;
          } 
    } 
   
    /** 
     * Computes the result of the arithmetic expression. 
     */ 
    function computeResult() { 
      try {
        display.textContent = eval(display.textContent);
      } catch (error) {
        display.textContent = 'Error';
      }
    } 
   
    /** 
     * Clears the display and resets stored values. 
     */ 
    function clearDisplay() { 
      display.textContent = '0';
    } 
    function deleteLastCharacter() { 
        if (display.textContent.length > 1) {
          display.textContent = display.textContent.slice(0, -1);
        } else {
          display.textContent = '0';
        }}

});