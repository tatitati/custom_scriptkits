// Name: Upper Case

import "@johnlindquist/kit"

// input:  whatthe fuck
// output: WHATTHE FUCK

let text = await getSelectedText()

await setSelectedText(text.toUpperCase())