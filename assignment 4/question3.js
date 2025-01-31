const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
// Expected Output:
// Number of days AMD was above the 7-day SMA is: 2

let totalSum = 0;
for (let price of amdPrices) {
    totalSum += price;
}

let average = totalSum / amdPrices.length ;

let countAboveAverage = 0;

for (let price of amdPrices) {
    if (price > average) {
        countAboveAverage += 1;
    }
}

console.log ("Number of days AMD was above the 7-day SMA is: " + countAboveAverage);