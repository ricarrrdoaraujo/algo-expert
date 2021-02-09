function Calculator(str) { 

    var op = {
      addition: '+',
      subtraction: '-',
      multiplication: '*',
      division: '/',
    };
  
    precedence = [
      [
        [op.division],
        [op.multiplication],
      ],
      [
        [op.addition],
        [op.subtraction],
      ]
    ];
  
    cleaned = str.replace(/\)\(/g, ')*(')
      .replace(/[^0-9*\/\-+]/g, '');
  
    var result;
  
    const calculateOperation = (firstNum, operator, secondNum) => {
      firstNum = firstNum * 1;
      secondNum = secondNum * 1;
      switch(operator) {
        case op.multiplication:
          return firstNum * secondNum;
          break;
        case op.division:
          return firstNum / secondNum;
          break;
        case op.addition:
          return firstNum + secondNum;
          break;
        case op.subtraction:
          return firstNum - secondNum;
          break;
        
        default:
          null;
      }
    }
  
    for(i = 0; i < precedence.length; i++) {
      let exp = new RegExp('(\\d+\\.?\\d*)([\\' + precedence[i].join('\\') + '])(\\d+\\.?\\d*)');
      exp.lastIndex = 0;
      while(exp.test(cleaned)) {
        result = calculateOperation(RegExp.$1, RegExp.$2, RegExp.$3);
        if(isNaN(result) || !isFinite(result)) 
          return parseInt(result);
        cleaned = cleaned.replace(exp, result);
      }
    }
  
    return parseInt(result);
  
  }
