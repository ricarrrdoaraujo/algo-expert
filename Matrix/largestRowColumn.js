function LargestRowColumn(strArr) { 

    strMatrix = [[]];
  
    for(i = 0; i < strArr.length; i++) {
      strMatrix.push(strArr[i].split(''));
      console.log(strArr[i].split(''))
    }
  
    strMatrix.splice(0, 1)
    console.log({poped: strMatrix})
  
    for(i = 0; i < strMatrix.length; i++) {
      strMatrix[i]
    }
  
    return strArr; 
  
  }
     
  console.log(LargestRowColumn(readline()));