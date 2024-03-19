// Name: Surround with

import "@johnlindquist/kit"



let text = await getSelectedText()
let surround_with = await arg("Surround with:")


let lines = text.split('\n').map(line => surround_with+line.trim()+surround_with)
let result = lines.join('\n')
await setSelectedText(result)