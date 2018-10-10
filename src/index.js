// Create a function which stores a number. Return an inner function which accepts a number as an argument, adds it to the number in parent scope and returns the new total

function increase(){

  let number = 3;

  function inner(newNumber){
    number = newNumber + number;
    return number;
  }

  return inner;
}

function double() {
  let number = 10;

  function inner() {
    return number*2;
  }

  return inner;
}

function total(entryNum){
  let tot = entryNum

  function inner(entryArray){
    const arraySum = entryArray.reduce((acc,item) => acc + item)
    tot += arraySum
    return tot
  }
  return inner;
}

function gibberish() {
  let myStr = '';
  function inner(input) {
    if (typeof input === 'string') {
      myStr = myStr + ' ' + input;
    }
    else {
      myStr = myStr + input.join(' ') + '.';
    }
    return myStr;
  }
  return inner;
}

function mergeSort(){
  let array = []
  function inner(input){
    array = array.concat(input)
    array.sort((a,b) => (b - a))
    return array[0]
  }
  return inner
}

function calculator() {
  let total = 0;
  function inner(a,b,op) {
    if (op === '+') {
      total = total + a + b;
    }
    else if (op === '-') {
      total = total + a - b;
    }
    else if (op === '*') {
      total = total + a*b;
    }
    else {
      total = total + a/b;
    }
    return total;
  }
  return inner;
}


function dogHome(){
  let dogHomes = {
    london: [],
    paris: []
  }

  function houseDog(dog){
    const location = dog.location
    dogHomes[location] = dogHomes[location].concat(dog)

  }
  function getDogsByLocation(location){
    return dogHomes[location]

  }
  return {houseDog, getDogsByLocation}
}

module.exports = {increase, double, total, gibberish, mergeSort,calculator, dogHome};
