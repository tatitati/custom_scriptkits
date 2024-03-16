// Name: DateTime To Timestamp

// intput:  2019-02-04 20:34:12
// output:  1549312452

import "@johnlindquist/kit"

let text_date = await getSelectedText();


let customdate = Date.parse(text_date)
await setSelectedText(customdate.toString())