const request = require("request");
const cheerio = require("cheerio");
function getReposPageHtml(url){
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
        for(let i = 0; i < 8; i++){
            let anchorArr = $(headingArr[i]).find("a");
            let link = $(anchorArr[1]).attr("href");
            let fullLink = `https://github.com/${link}`;
            console.log(fullLink);

        }
    }

}

module.exports = getReposPageHtml;