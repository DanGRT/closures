const { shop, trainStation, increase, double, total, gibberish, mergeSort,calculator, dogHome } = require('../src/index.js');

test('increase', function(){
  const arg = 10;
  const inner = increase();
  const result = inner(arg);

  const expected = 13;

  expect(result).toBe(expected);
});

test('double', () => {
  const doubleFn = double()
  const result = doubleFn()
  expect(result).toBe(20)

} )

test('total', () => {
  const totalFn = total(5);
  const result = totalFn([1,2,3,4]);
  expect(result).toBe(15);
})

test('gibberish', ()=> {
  const gibberishFn = gibberish();
  const result = gibberishFn(['a','b','c','d']);
  expect(result).toBe('a b c d.');
})



test('mergeSort', ()=> {
  const mergeSortFn = mergeSort()
  mergeSortFn(9)
  mergeSortFn(7)
  mergeSortFn(2)
  const result = mergeSortFn(6)
  expect(result).toBe(9)
})


test('calculator', ()=> {
  const calculatorFn = calculator()
  plusResult = calculatorFn(3,3,'+')
  minusResult = calculatorFn(4,2,'-')

  expect(plusResult).toBe(6)
  expect(minusResult).toBe(8)
})

test('dog home', ()=> {
  const {houseDog,getDogsByLocation} = dogHome();
  const myDog = {name: "John", location: "paris"};
  const yourDog = {name: "skippy", breed: "", location: "paris"};
  const hisDog = {name: "fido", breed: "", location: "london"}
  houseDog(myDog);
  houseDog(yourDog);
  houseDog(hisDog);
  expect(getDogsByLocation('paris')).toEqual([myDog,yourDog]);
})

test('train station', ()=> {
  const yetkin = {name: 'yetkin', amount: 28};
  const dan = {name: 'dan', amount: 10};
  const {arrive,getPeople,giveMoney,trainArrives} = trainStation();
  arrive(yetkin);
  arrive(dan);
  expect(getPeople()).toEqual([yetkin,dan]);
  expect(trainArrives()).toEqual([yetkin]);
  expect(getPeople()).toEqual([dan]);
  giveMoney();

  const dansMoney = getPeople()[0].amount;
  expect(dansMoney).toBeGreaterThan(10);
})


test('shop', () => {
  const stockItems = [{ name: "toy", quantity: 10, price: 5} ]

  const orderArray = [{name: 'toy', quantity: 5}]

  const {addStock, showStock, sellStock, getRevenue} = shop()
  addStock(stockItems)
  expect(showStock()).toEqual({toy:{ name: "toy", quantity: 10, price: 5}})
  expect(sellStock(orderArray)).toEqual([{name: 'toy', quantity: 5, price: 5}])

})
