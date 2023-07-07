// Name: Surround single quotes 

import "@johnlindquist/kit"



let text = await getSelectedText()
let result = text.replace(/(^"|"$)/g, '')
result = result.replace(/(^'|'$)/g, '')

await setSelectedText("\'"+result+"\'")