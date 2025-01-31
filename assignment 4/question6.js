// Modify the code below:
// Expected Output:
// The three lowest prices are 79.82, 87.12, and 88.15

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

let data = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];
data.sort ((a,b) => a-b);

let lowestPrices = data.slice (0,3);

console.log ("The three lowest prices are " + lowestPrices);

