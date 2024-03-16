// Name: Env

import "@johnlindquist/kit"

let text = await getSelectedText()
let to_env = await arg("To env:")

let result = text.replace(/dev/g, to_env.toLowerCase());
result = result.replace(/sit/g, to_env.toLowerCase());
result = result.replace(/oat/g, to_env.toLowerCase());
result = result.replace(/prod/g, to_env.toLowerCase());

result = result.replace(/DEV/g, to_env.toUpperCase());
result = result.replace(/SIT/g, to_env.toUpperCase());
result = result.replace(/OAT/g, to_env.toUpperCase());
result = result.replace(/PROD/g, to_env.toUpperCase());


await setSelectedText(result)