// Name: Timestamp To DateTime

// input:  1549312452
// output: 2019-02-04 20:34:12


import "@johnlindquist/kit"

let unix_timestamp = await getSelectedText();


// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds
var date = new Date(Number(unix_timestamp) * 1000);

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();

// Hours part from the timestamp
var hours = date.getHours();

// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();

// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var result = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


await setSelectedText(result)