// Name: Prefix

import "@johnlindquist/kit"


let text = await getSelectedText()
let prefix = await arg("Prefix:")

let result = text.replace(/^/gm, prefix)


await setSelectedText(result)