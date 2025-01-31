const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
// Expected Output:
// Average closing price of MSFT is 193.92

let totalSumOfClosingDatas = 0;
let totalCountOfClosingDatas = 0;

for (let i=0; i < msftData.length; i++) {
totalSumOfClosingDatas += msftData[i][3];
	totalCountOfClosingDatas +=1;
}

let averageOfClosingDatas = totalSumOfClosingDatas / totalCountOfClosingDatas;

console.log ("Average closing price of MSFT is " + averageOfClosingDatas.toFixed(2));


