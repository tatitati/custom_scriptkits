// Name: Sufix

import "@johnlindquist/kit"

// input:  hola
// output: somethinghola


let text = await getSelectedText()
let sufix = await arg("Sufix:")

let lines = text.split('\n').map(line => line.trim()+sufix)
let result = lines.join('\n')


await setSelectedText(result)