
const puppeteer = require('puppeteer');
    (async () => {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();  
        await page.goto('');
        
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
        

       
            