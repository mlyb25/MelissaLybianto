const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
// Expected Output:
// AMD 52-week high is 102.21

let maxValue = 0;

for (let price of amdPrices ) {
    if (price > maxValue) {
        maxValue = price;
    }
    
}

console.log ("AMD 52-week high is "+ maxValue);