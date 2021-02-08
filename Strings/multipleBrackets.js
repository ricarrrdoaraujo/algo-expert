function MultipleBrackets(str) { 

    bracketOne = 0;
    bracketTwo = 0;
    bracketThree = 0;
    bracketFour = 0;
    result = 0;
  
    for(i = 0; i < str.length; i++) {
      if(str[i] === '(') {
        bracketOne += 1;
      } else if (str[i] === ')') {
        bracketTwo += 1;
      } else if (str[i] === '[') {
        bracketThree += 1;
      } else if (str[i] === ']') {
        bracketFour += 1;
      } else {
        continue;
      }
    }
  
    if (bracketOne === 0 && bracketTwo === 0 && bracketThree === 0 && bracketFour === 0) {
      console.log({bracketOne, bracketTwo, bracketThree, bracketFour})
      result = 1;
    } else if ( bracketOne === bracketTwo && bracketThree === bracketFour) {
      result = `1 ${bracketOne + bracketThree}`
    }
    
    return result; 
  
  }
  
  console.log(MultipleBrackets(readline()));
  