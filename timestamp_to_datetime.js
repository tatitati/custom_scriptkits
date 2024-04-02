// Name: Timestamp To DateTime

// input:  1549312452
// output: 2019-02-04 20:34:12


import "@johnlindquist/kit"

let unix_timestamp = await getSelectedText();

var date = new Date(Number(unix_timestamp));

var year = date.getFullYear();
var month = "0" + date.getMonth();
var day = "0" + date.getDay();
var hours = "0" + date.getHours();
var minutes = "0" + date.getMinutes();
var seconds = "0" + date.getSeconds();

var result = year + '-' + month.slice(-2) + '-' + day.slice(-2) + ' ' + hours.slice(-2) + ':' + minutes.slice(-2) + ':' + seconds.slice(-2);


await setSelectedText(result)