function Calculator(str) { 
    let formattedExp = str.replace(/\)\(/g, ')*(');
    formattedExp = formattedExp.replace(/([0-9])(\()/g, '$1*$2');
    return Function('return (' + formattedExp + ')')();
}