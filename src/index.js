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

function trainStation(){
  let people = []

  function arrive(person){
    people.push(person)
  }

  function getPeople(){
    return people
  }

  function giveMoney(){
    const highest = people.length - 1
    let randomPerson;
    if (people.length === 1) {
      randomPerson = 0;
    }
    else if (people.length === 2) {
      randomPerson = Math.round(Math.random());
    }
    else {
      randomPerson = Math.floor(Math.random() * highest + 1);
    }
    const randomAmount = Math.floor(Math.random() * 20)
    people[randomPerson].amount += randomAmount
  }

  function trainArrives(){
    const leavers = people.filter(person => (person.amount >= 20))
    people = people.filter(person => (person.amount < 20))
    return leavers;
  }

  return {arrive, getPeople, giveMoney, trainArrives}
}


function shop(){
  let storage = {}
  // storage = {toy: {name: "toy", quantity: 5, price: 7}}
  let revenue = 0

  function addStock(itemArray){
    itemArray.forEach(item => {
      if (storage.hasOwnProperty(item.name)){
        const oldQuant = storage[item.name].quantity
        const oldPrice = storage[item.name].price
        storage[item.name].quantity += item.quantity
        storage[item.name].price = (oldQuant * oldPrice + item.quantity * item.price) / (oldQuant + item.quantity)
      }else{
        storage[item.name] = item
      }
    })

  }

  function showStock(){
    return storage
  }

  function sellStock(orderArray){
    let filteredOrder = orderArray
    .filter(order => (storage.hasOwnProperty(order.name)))
    .map(order => {
      if (storage[order.name].quantity < order.quantity) {
        return {name: order.name, quantity: storage[order.name].quantity}
      } else {
        return order;
      }
    });
    console.log(filteredOrder);
    filteredOrder.forEach(item => {
      storage[item.name].quantity -= item.quantity
      revenue += storage[item.name].price * item.quantity;
      item.price = storage[item.name].price;
    })
    return filteredOrder;
  }

  function getRevenue(){
    return revenue
  }

  return {addStock, showStock, sellStock, getRevenue}
}

module.exports = {shop, trainStation, increase, double, total, gibberish, mergeSort,calculator, dogHome};
