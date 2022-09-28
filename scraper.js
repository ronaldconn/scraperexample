const axios = require('axios'); 
const cheerio = require('cheerio'); 

let url = "https://row52.com/Search/?YMMorVin=YMM&Year=1995-1999&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94609&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=50"

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html)

    let uneditedDivList = $('div.list-row')
    let divListTextOnly = $('div.list-row').text()
    let divList = $('div.list-row').text().split(" ").filter(x => x.trim() != '').join("").split("\n")

    //there's alot of data for each of these so try logging one seperately each time you run the program.

    //this one will show you all of the data as objects and you can invetigate the properties and methods of the object to point to what you want. i.e.: uneditedDivList.children, or uneditedDivList.text(), etc.
    console.log(uneditedDivList)

    //just the text property with hella tabs and spaces to get rid of
    console.log(divListTextOnly)

    //parse text data (not perfect) but good enough to see what data I wanted
    console.log(divList)

  }).catch(err => console.error(err))