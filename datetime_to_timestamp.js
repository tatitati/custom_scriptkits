// Name: DateTime To Timestamp

// intput:  2019-02-04 20:34:12
// output:  1549312452

import "@johnlindquist/kit"

let text_date = await getSelectedText();


// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds
let result = Date.parse(text_date);


await setSelectedText(result.getTime())