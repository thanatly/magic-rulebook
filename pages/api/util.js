export default async function getRules() {
    const handler = await fetch('https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt'); // Fetch or do something else
    var response = await handler.text();

    response = response.split("Credits\r\n\r\n")[1]
    response = response.split("\r\n\r\nGlossary")[0]
    response = response.split("\r\n\r\n")

    var rules =[]

    for (const item of response) {
        const rule ={
          id : item.substr(0,item.indexOf(' ')).replace(/\.$/, ""),
          text: item.substr(item.indexOf(' ')+1)
        }      
        rules.push(rule) 
    }
    
    return rules;
  }