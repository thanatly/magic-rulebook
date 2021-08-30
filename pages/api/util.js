export default async function getRules() {
    const handler = await fetch('https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt');
    var response = await handler.text();

    /* Extract only rule component from the whole text by specifying the string before and after.
    Not optimal because it's context specific. To fetch rules from any url, allow user input the start and end string?
    */
    response = response.split("Credits\r\n\r\n")[1]
    response = response.split("\r\n\r\nGlossary")[0]
    response = response.split("\r\n\r\n")

    const rules =[]

    //use map instead of for loop
    for (const item of response) {
        const rule ={
          id : item.substr(0,item.indexOf(' ')).replace(/\.$/, ""),
          text: item.substr(item.indexOf(' ')+1)
        }      
        rules.push(rule) 
    }

    /*
    let mapped_rules = response.map( r = {
      return r
    })
    */

    /* Return as rules = [
      {
        id: 1,
        text: 'Game Concepts'
      },
      {
        id: 100,
        text: 'General'
      }, 
      {
        id: 100.1,
        text: 'These Magic rules...'
      }, 
      ...
    ]
    */

    return rules;
  }