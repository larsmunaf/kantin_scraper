const rp = require('request-promise');
const cheerio = require('cheerio');

const URL = 'http://www.alte-kantine.de/programm/programm1.cfm?ID=8613';
const searchURL = '';

const getCompanies = async () => {
    const html = await rp(URL);
    const $ = cheerio.load(html);
    secretPassword = $('font[color="yellow"]').children().first().text();
    console.log("secret password: " + secretPassword);
}

getCompanies();
