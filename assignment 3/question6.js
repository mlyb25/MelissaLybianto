const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below
let openFloat = parseFloat(disneyData["open"]);
let highFloat = parseFloat (disneyData["high"]);
let lowFloat = parseFloat (disneyData["low"]);
let closeFloat = parseFloat (disneyData["close"]);
let volumeFloat = parseFloat (disneyData["volume"]);

// if close > open
// if volume > 100000 → log ‘Strong Bullish’ in your console
// else → log ‘Bullish’ in your console
// close < open
// if volume > 10000 → log ‘Strong Bearish’ in your console
// else → log ‘Bearish’ in your console
// close === open
// log ‘neutral’ in your console

if (closeFloat > openFloat) {if (volumeFloat > 100000){ console.log ("Strong Bullish");} else {console.log ("Bullish");}}
else if (closeFloat < openFloat) {if (volumeFloat > 10000) {console.log("Strong Bearish");} else {console.log("Bearish");}}
if (closeFloat === openFloat) {console.log("neutral");}
