// Name: Replace

import "@johnlindquist/kit"


let text = await getSelectedText()
let search = await arg("Search:")
let replace = await arg("Replace:")



let result = text.replaceAll(search, replace)


await setSelectedText(result)