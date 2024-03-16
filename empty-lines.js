// Name: Empty lines

import "@johnlindquist/kit"

// input: 
//      sdfadsfadsfads
// 
// 
//      asdfadsf_aasdf_aasdf


// output: 
//      sdfadsfadsfads
//      asdfadsf_aasdf_aasdf


let text = await getSelectedText()
let result = text.replace(/(^[ \t]*\n)/gm, "")


await setSelectedText(result)