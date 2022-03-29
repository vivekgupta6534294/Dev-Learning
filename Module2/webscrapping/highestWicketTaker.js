//Web Scrapping 2.0
const request=require('request');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const link="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";
request(link,cb);
function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        // console.log(html);
        const dom=new JSDOM(html);
        const document=dom.window.document;
        let bowlerTable =document.querySelectorAll(".table.bowler");
        // console.log(bowlerName.length);
        let HighestWicket =0 ;
        let NameOfHighestWicketTaker;
        for(let i=0;i<bowlerTable.length;i++){
            let rows=bowlerTable[i].querySelectorAll("tbody tr");
            // console.log(rows.length);
            
            for( let j=0;j<rows.length;j++){
                let tds=rows[j].querySelectorAll("td");
                
                if(tds.length>1){
                    let name=tds[0].textContent;
                    let wicket=tds[4].textContent;
                    
                    if(wicket>HighestWicket){
                        HighestWicket=wicket;
                        NameOfHighestWicketTaker=name;
                    }

                    // console.log("Name of Bolwer --> ", name, "\t Wicket --> ", wicket);
                }
            }
        }
        console.log("Name of Highest Wicket Taker", NameOfHighestWicketTaker);
        console.log("Wicket Taken ", HighestWicket);

        
    }
}