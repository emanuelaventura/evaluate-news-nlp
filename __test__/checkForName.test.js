import { checkForName } from "../src/client/js/nameChecker"

describe("Testing the checkForName() function", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Test checkForName() passing empty string", () => {
        const input = "";
        const output = -1;
      
          expect(checkForName(input)).toEqual(output);
    })
  
    test("Test checkForName() passing non empty string", () => {
      const input = "hello how are you?";
      const output = 0;
    
        expect(checkForName(input)).toEqual(output);
  })

  
  
  });
    