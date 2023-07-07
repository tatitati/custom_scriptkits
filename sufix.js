// Name: Sufix

import "@johnlindquist/kit"


let text = await getSelectedText()
let sufix = await arg("Sufix:")

let result = text.replace(/$/gm, sufix);


await setSelectedText(result)