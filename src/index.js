import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import {storeState, changeState} from './plants.js';

// UI Logic

window.onload = function() {
// We create four functions using our function factory. 
// We could easily create many more.
// Variables could remain in Business logic and be exported

// not using variables currently
// const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const giveWater = changeState("water")(5);

// const hydrate = changeState("water")(1);
// const superWater = changeState("water")(5);

const stateControl = storeState();
  // This function has side effects because we are manipulating the DOM.
  // Manipulating the DOM will always be a side effect. 
  // Note that we only use one of our functions to alter soil. 
  // You can easily add more.
  document.getElementById('feed').onclick = function() {
    const newState = stateControl(blueFood);
    const newState = stateControl(giveWater);
    
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };
  
  // This function doesn't actually do anything useful in this application 
  // — it just demonstrates how we can "look" at the current state 
  // (which the DOM is holding anyway). 
  // However, students often do need the ability to see the current state 
  // without changing it so it's included here for reference.
  document.getElementById('show-state').onclick = function() {
    // We just need to call stateControl() without arguments 
    // to see our current state.
    const currentState = stateControl();
    document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
  };
  };