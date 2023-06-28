import { checkForEmptyText } from "../src/client/js/emptyTextChecker"

describe("Testing the checkForEmptyText() function", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Test checkForEmptyText() passing empty string", () => {
        const input = "";
        const output = -1;
        global.alert = jest.fn();
        expect(checkForEmptyText(input)).toEqual(output);
    })
  
    test("Test checkForEmptyText() passing non empty string", () => {
      const input = "hello how are you?";
      const output = 0;
    
      expect(checkForEmptyText(input)).toEqual(output);
  })

  
  
  });
    