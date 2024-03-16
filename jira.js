// Name: Jira

// input:  BI-23423
// output: open jira ticket

import "@johnlindquist/kit"

let ticket = await getSelectedText()

open("https://ryanair.atlassian.net/browse/" + ticket);