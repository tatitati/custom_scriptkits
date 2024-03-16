// Name: Backward

// input:   BCNMAD
// output:  MADBCN

import "@johnlindquist/kit"

let text = await getSelectedText()
var from = text.substring(0,3);
var to = text.substring(3,6);

await setSelectedText(to+from)