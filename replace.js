// Name: Replace

import "@johnlindquist/kit"

// input:  FR-BI-SOMETHING-oat-sqs-OAT-SOMETHING
// output: FR-BI-whwatever-oat-sqs-OAT-whwatever

let text = await getSelectedText()
let search = await arg("Search:")
let replace = await arg("Replace:")



let result = text.replaceAll(search, replace)


await setSelectedText(result)