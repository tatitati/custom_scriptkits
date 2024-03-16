// Name: CamelCase to snake_case

import "@johnlindquist/kit"

function camelToUnderscore(key) {
    const string1= key.charAt(0).toLowerCase() + key.slice(1)

    var result = string1.replace( /([A-Z])/g, " $1" );
    return result.split(' ').join('_').toLowerCase();
 }


let text = await getSelectedText()


await setSelectedText(camelToUnderscore(text))