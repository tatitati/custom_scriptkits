// Name: Sufix

import "@johnlindquist/kit"


let text = await getSelectedText()
let sufix = await arg("Sufix:")

let lines = text.split('\n').map(line => line+sufix)
let result = lines.join('\n')


await setSelectedText(result)