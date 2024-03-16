// Name: Prefix

import "@johnlindquist/kit"


let text = await getSelectedText()
let prefix = await arg("Prefix:")

let lines = text.split('\n').map(line => prefix+line)
let result = lines.join('\n')


await setSelectedText(result)