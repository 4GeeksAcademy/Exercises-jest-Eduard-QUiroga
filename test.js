    const { fromEuroToDollar , fromDollarToYen , fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
     expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("Hola",function(){
    const { fromDollarToYen } = require('./app.js');
    const Yen = fromDollarToYen(1);
    const expectedYen = 1 * 156.5;
    expect(fromDollarToYen(1)).toBe(156.5); 
})


test("Hola",function(){
    const { fromYenToPound } = require('./app.js');
    const Pound = fromYenToPound(156.5);
    const expectedPound=0.87;
    expect(fromYenToPound(156.5)).toBe(0.87);
})