const puppeteer = require('puppeteer');
    (async () => {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();  
        await page.goto(/*Enter URL Here*/ '');
        
            const getPlacements = await page.evaluate(() => {
                const jobs = document.querySelectorAll('.resultContent')
                let placementArr = [];
                jobs.forEach((jobTag) =>{
                    const jobInfo = jobTag.querySelectorAll("span");
                    const jobTitle = jobInfo[0];
                    const companyTitle = jobInfo[1];
                   

                    placementArr.push({
                        JobTitle: jobTitle.innerText,
                        CompanyTitle: companyTitle.innerText,
                    });
                });
                return placementArr;
            });

            console.log(getPlacements);
            await browser.close();
        })();
        
        
    
            
       


/*const cheerio = require('cheerio');
    const puppeteer = require('puppeteer');
    let scraped_headlines = []; (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();  
        try{
            await page.goto('https://www.gradcracker.com/search/computing-technology/work-placements-internships?duration=Year-long');
            let bodyHTML = await page.evaluate(() => document.body.innerHTML);
            let $ = cheerio.load(bodyHTML);
            
            let article_headlines = $('.tw-block tw-text-base tw-font-semibold')
            article_headlines.each((index, element) => {
                title = $(element).find('a').text()
                scraped_headlines.push({
                    'title': title
                })
            })
        }
        catch(err){
            console.log(err);
        }
        await browser.close();
        console.log(scraped_headlines)
    })();*/
/*const puppeteer = require ('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="landingImage"]')
    const src = await el.getProperty('src');
    const imgURL = await src.jsonValue();

    const [el2] = await page.$x('//*[@id="productTitle"]')
    const txt = await el2.getProperty('textContent');
    const title = await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="corePrice_feature_div"]/div/div/span/span[2]/span[2]')
    const txt2 = await el3.getProperty('textContent');
    const price = await txt2.jsonValue();

    console.log({imgURL, title, price});

    browser.close();
}

scrapeProduct('https://www.gradcracker.com/search/computing-technology/work-placements-internships?duration=Year-long');*/