const puppeteer = require('puppeteer');
(async () => {
    const browser = await(puppeteer.launch({
        timeout: 15000,
        ignoreHTTPSErrors: true,
        devtools: false,
        headless: false
    }));
    
    const page = await browser.newPage();
    await page.goto('https://www.facebook.com/instantgames');
    await page.keyboard.press(page.keyboard.down)
    await page.screenshot({
        path: 'img.png',
        type: 'png',
        fullPage: true
    });

    browser.close();

    console.log('over');
})();