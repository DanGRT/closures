const {shop, trainStation, increase, double, total, gibberish, mergeSort,calculator, dogHome} = require('./index.js')


const innerFunction = increase()
const numberPlus4 = innerFunction(4)
console.log(numberPlus4)

const doubleFn = double();
console.log(doubleFn());


const totalFn = total(10);
console.log(totalFn([1,2,3,4]))

const gibberishFn = gibberish();
console.log(gibberishFn(['a','b','c']));


const mergeSortFn = mergeSort()
mergeSortFn(6)
mergeSortFn(20)
mergeSortFn(5)
mergeSortFn(1)
console.log(mergeSortFn(9))


const calculatorFn = calculator();
calculatorFn(2,5,'+');
calculatorFn(10,10,'*');
console.log(calculatorFn(4,2,'/'));

const {houseDog, getDogsByLocation} = dogHome()
houseDog({name: "skippy", breed: "", location: "paris"})
houseDog({name: "John", location: "paris"})
console.log(getDogsByLocation('paris'))

const yetkin = {name: 'yetkin', amount: 18};
const dan = {name: 'dan', amount: 10};
const {arrive,getPeople,giveMoney,trainArrives} = trainStation();
arrive(yetkin);
arrive(dan);
console.log(getPeople())
giveMoney();
console.log(getPeople());

console.log(trainArrives());
console.log(getPeople());


const stockItems = [{ name: "toy", quantity: 10, price: 5},
{name: "brush", quantity: 20, price: 10}
]

const orderArray = [{name: 'toy', quantity: 20}, {name: 'dogs', quantity: 2}]

const {addStock, showStock, sellStock, getRevenue} = shop()
addStock(stockItems)
console.log(showStock())
console.log('what we sold:', sellStock(orderArray))
console.log('remaining:', showStock())
console.log(getRevenue())

console.log('another sell', sellStock(orderArray))
console.log('remaining 2', showStock())
console.log(getRevenue())
