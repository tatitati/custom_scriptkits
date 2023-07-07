// Name: Swap quotes

import "@johnlindquist/kit"

let text = await getSelectedText();

const chars = {'"': "'", "'": '"'};
  

// let result = text.replace('"', "'");
let result = text.replace(/["']/g, m => chars[m]);

await setSelectedText(result)