// Name: DateTime To Timestamp

// input: 2019-02-04 20:34:12
// output:  1549312452

import "@johnlindquist/kit"

let text = await getSelectedText();

const chars = {'"': "'", "'": '"'};
  

// let result = text.replace('"', "'");
let result = text.replace(/["']/g, m => chars[m]);

await setSelectedText(result)