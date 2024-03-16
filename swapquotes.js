// Name: Swap quotes

// input:  'hola'
// output: "hola"


// input:  "hola"
// output: 'hola'

import "@johnlindquist/kit"

let text = await getSelectedText();

const chars = {'"': "'", "'": '"'};
  

// let result = text.replace('"', "'");
let result = text.replace(/["']/g, m => chars[m]);

await setSelectedText(result)