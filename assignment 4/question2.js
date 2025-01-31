const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
// Expected Output:
// The 7-day SMA of AMD is 90.97

let totalSum = 0;

for (let price of amdPrices) {
    totalSum += price;
}

let average = totalSum/amdPrices.length;

console.log ("The 7-day SMA of AMD is " + average.toFixed(2));
