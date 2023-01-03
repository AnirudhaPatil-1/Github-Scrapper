const url = "https://github.com/topics";
const request = require("request");
const cheerio = require("cheerio");
const getReposPageHtml = require("./reposPage");
request(url, cb);

function cb(err, response, html){
    if(err){
        console.log(err);
    }else if(response.statusCode == 404){
        console.log("page not found");
    }else{
        // console.log(html);
        getTopicLinks(html);
    }
}

function getTopicLinks(html){
    let $ = cheerio.load(html);
    let linkElementArr = $(".no-underline.d-flex.flex-column.flex-justify-center"); //length = 3
    // console.log(linkElementArr);
    // console.log(linkElementArr.length);
    for(let i =0; i < linkElementArr.length; i++ ){
        let href = $(linkElementArr[i]).attr("href");
        // console.log(href);
        let topic = href.split("/").pop();
        // console.log(topic);
        fullLink = `https://github.com${href}`;
        // console.log(fullHref);
        getReposPageHtml(fullLink, topic);
    }

}