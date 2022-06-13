const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const instadp = (callback)=>{

    const url ="https://www.instadp.com/instagram-tools/story-downloader"

request({url:url,json:true},(error,response)=>{

    if(error){
       return console.log(error)
    }

    var x = response.body;
    const $ = cheerio.load(x)
    const htmlData = $.html();
    const inputdata =  $('.search-input');
    const valuePass = inputdata;

    const submitBtn = $('.search-btn');
    console.log(valuePass)
    callback(x)

})

}


module.exports = instadp;