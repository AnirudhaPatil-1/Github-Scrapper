const request = require("request");
const cheerio = require("cheerio");
const getIssuesPageHtml = require("./issues");
function getReposPageHtml(url, topic){
    request(url, cb);
    function cb(err, response, html){
        if(err){
            console.log(err);
        }else{
            // console.log(html);
            getReposLink(html);
        }
    }
    function getReposLink(html){
        //cheerio
        let $ = cheerio.load(html);
        let headingArr = $(".f3.color-fg-muted.text-normal.lh-condensed");
        // console.log(headingArr.length); //20
        console.log(`topic name: ${topic}`);
        for(let i = 0; i < 8; i++){
            let anchorArr = $(headingArr[i]).find("a");
            let link = $(anchorArr[1]).attr("href");
            // console.log(link);
            let repo = link.split("/").pop();
            console.log(`repo name: ${repo}`);
            let fullLinkUrl = `https://github.com/${link}`;
            // console.log(fullLinkUrl);
            let fullLink = `${fullLinkUrl}/issues`;
            console.log(`issues url: ${fullLink}`);
            getIssuesPageHtml(fullLink, topic);


        }
        console.log("-----------------------------------")
    }

}

module.exports = getReposPageHtml;