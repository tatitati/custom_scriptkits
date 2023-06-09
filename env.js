// Name: Env

import "@johnlindquist/kit"

let text = await getSelectedText()
let to_env = await arg("To env:")

let result = text.replace("dev", to_env);
result = result.replace("sit", to_env);
result = result.replace("oat", to_env);
result = result.replace("prod", to_env);

result = result.replace("DEV", to_env.toUpperCase());
result = result.replace("SIT", to_env.toUpperCase());
result = result.replace("OAT", to_env.toUpperCase());
result = result.replace("PROD", to_env.toUpperCase());


await setSelectedText(result)