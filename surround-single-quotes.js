// Name: Surround single quotes 

import "@johnlindquist/kit"



let text = await getSelectedText()


let lines = text.split('\n').map(line => "'"+line+"'")
let result = lines.join('\n')

await setSelectedText(result)