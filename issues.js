let request = require("request");
let cheerio = require("cheerio");

function getIssuesPageHtml(url, topic){
    request(url, cb);
    function cb(err, response, html){
        if(err){
            console.log(err);
        }else{
            // console.log(`ISSUES PAGE IS LINKED CORRECTLY`);
            // console.log(html);
            getIssues(html);

        }
    }
    function getIssues(html){
        let $ = cheerio.load(html);
    }


}


module.exports = getIssuesPageHtml;