

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen=valueInDollar * oneEuroIs.JPY;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound=valueInYen/oneEuroIs.JPY*oneEuroIs.GBP;
    return valueInPound;
}


console.log(fromDollarToYen(200));

console.log(oneEuroIs.GBP);



module.exports={fromDollarToYen , fromEuroToDollar, fromYenToPound};
