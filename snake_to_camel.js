// Name: snake_case to CamelCase

import "@johnlindquist/kit"

// input:   asdfadsf_aasdf_aasdf
// output:  asdfadsfAasdfAasdf

function snakeToCamel(key) {
    const string1= key.charAt(0).toLowerCase() + key.slice(1)
    return string1.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
 }


let text = await getSelectedText()


await setSelectedText(snakeToCamel(text))