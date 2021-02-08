function HTMLElements(str) { 
    let elements = str.split('>').map(e=> e.replace(/.*</,''));
    elements.pop();
    let arr = [];
    let result;
  
    elements.forEach(el => {
      if(arr.indexOf(el.slice(1)) >= 0) {
        arr.splice(arr.indexOf(el.slice(1)), 1);
      } else {
        arr.push(el);
      }
    });
  
    if(arr.length === 0) {
      result = true;
    } else {
      result = arr[0];
    }
  
    return result;
  }
     
  console.log(HTMLElements(readline()));
  