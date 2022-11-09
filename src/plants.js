// Business Logic

// This function stores our state.
const storeState = () => {
  let currentState = {};
    return (stateChangeFunction = state => state) => {
      const newState = stateChangeFunction(currentState);
        currentState = {...newState};
          return newState;
    };
};




// This is a function factory. 
// We can easily create more specific functions that 
// alter a plant's soil, water, and light to varying degrees.
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};



module.exports = {storeState, changeState};

// How we got to the code above
// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// }

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// }
// // Refactored
// const changePlantState = (plant, property) => {
//   return {
//     ...plant,
//     [property]: (plant[property] || 0) + 1
//   }
// }

//Refactored 2
// const changeState = (state, prop) => {
//   return {
//     ...state,
//     [prop]: (state[prop] || 0) + 1
//   }
// }

//Refactor 3
// const changeState = (state, prop, value) => ({
//   ...state,
//   [prop]: (state[prop] || 0) + value
// })

// const feed = changeState("soil");
// const hydrate = changeState("water");
// const giveLight = changeState("light");

// const blueFood = changeState("soil")(5)
// const greenFood = changeState("soil")(10)
// const yuckyFood = changeState("soil")(-5)


// // Curry
// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop]: (state[prop] || 0) + value
//     })
//   }
// }

// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }

// const stateControl = storeState();
// const fedPlant = stateControl(blueFood);