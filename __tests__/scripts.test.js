import { storeState, stateControl, changeState, newState, stateChangeFunction } from "../src/plants";

describe('storeState', () => {
  test("should update current state to new state of 5", () => {
    const blueFood = changeState("soil")(5)
    let currentState = {"soil": 0}
    expect(blueFood(currentState)).toEqual({"soil": 5});
  });
});



// test('should return jupiterAge as 6.913996627318719', () => {
//   let user1 = new Age(82)
//   let jupiterYear = 11.86
//   let jupiterAge = 82 / jupiterYear;
//   expect(user1.jupiterAge()).toEqual(6.913996627318719)
// });