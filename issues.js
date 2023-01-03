let request = require("request");
let cheerio = require("cheerio");

function getIssuesPageHtml(url, topic){
    request(url, cb);
    function cb(err, response, html){
        if(err){
            console.log(err);
        }else if(response.statusCode == 404){
            console.log("page not found");
        }else{
            // console.log(`ISSUES PAGE IS LINKED CORRECTLY`);
            // console.log(html);
            getIssues(html);

        }
    }
    function getIssues(html){
        let $ = cheerio.load(html);
        let issuesElemArr = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        // console.log(issuesElemArr.length);
        let arr = [];
        for(let i = 0; i < issuesElemArr.length; i++){
            let link = $(issuesElemArr[i]).attr("href");
            let fullLink = `https://github.com${link}`;
            arr.push(fullLink);
            console.log(fullLink);
        }

    }


}


module.exports = getIssuesPageHtml;