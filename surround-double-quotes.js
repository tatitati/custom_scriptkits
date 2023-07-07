// Name: Surround double quotes 

import "@johnlindquist/kit"



let text = await getSelectedText()
let result = text.replace(/(^"|"$)/g, '')
result = result.replace(/(^'|'$)/g, '')

await setSelectedText("\""+result+"\"")