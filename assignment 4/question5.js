const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
// Expected Output:
// Average closing price of Disney is 123.01

let totalSumOfClosingDatas = 0;
let totalCountOfClosingDatas = 0;

for (let value of disneyData){
	for (let data in value){
	totalSumOfClosingDatas += parseFloat(value ["close"]);
	totalCountOfClosingDatas += 1;
}
}

let averageOfClosingDatas = totalSumOfClosingDatas / totalCountOfClosingDatas;

console.log ("Average closing price of Disney is " + averageOfClosingDatas.toFixed(2));



