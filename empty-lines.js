// Name: Empty lines

import "@johnlindquist/kit"

let text = await getSelectedText()
let result = text.replace(/(^[ \t]*\n)/gm, "")


await setSelectedText(result)