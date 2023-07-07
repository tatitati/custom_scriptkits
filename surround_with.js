// Name: Surround with

import "@johnlindquist/kit"



let text = await getSelectedText()
let surround_with = await arg("Surround with:")

await setSelectedText(surround_with+text+surround_with)