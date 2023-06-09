// Name: Upper Case

import "@johnlindquist/kit"

let text = await getSelectedText()

await setSelectedText(text.toUpperCase())