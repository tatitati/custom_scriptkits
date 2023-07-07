// Name: Suffix comma

import "@johnlindquist/kit"

let text = await getSelectedText()
let result = text.replace(/(\n)/g,",\n") + ",";


await setSelectedText(result)