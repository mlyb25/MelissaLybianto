const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below
const low = bacData[0];
const high = bacData[1];
const open = bacData [2];
const close = bacData [3];
const volume = bacData [4];

// if close > open
// if volume > 100000 → log ‘Strong Bullish’ in your console
// else → log ‘Bullish’ in your console
// close < open
// if volume > 10000 → log ‘Strong Bearish’ in your console
// else → log ‘Bearish’ in your console
// close === open
// log ‘neutral’ in your console

if (close > open) {if(volume >100000) {console .log("Strong Bullish");} else {console.log("Bullish");}}
else if (close < open) {if(volume>10000) {console.log("Strong Bearish");}} else {console.log("Bearish");}
if (close === open) {console.log ("neutral");}
