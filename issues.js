let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
let path = require("path");
function getIssuesPageHtml(url, topic, repoName){
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
        // console.log(topic);
        let folderPath = path.join(__dirname, topic);
        dirCreater(folderPath);
        let filePath = path.join(folderPath, repoName + ".json");
        fs.writeFileSync(filePath, JSON.stringify(arr));

    }

}

module.exports = getIssuesPageHtml;
function dirCreater(folderPath){
    if(fs.existsSync(folderPath) == false){
        fs.mkdirSync(folderPath);
    }

}
