const { describe } = require('mocha')
const puppeteer = require('puppeteer')



describe('Discord App', () => {
    it('Launch the Browser', async function () {

        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage()
        await page.goto('https://discord.com/login')
        await page.waitFor(3000)
        //await page.waitForSelector('')
        await page.type('input[name="email"]', 'koolzgg@gmail.com', { delay: 50 })
        await page.type('input[name="password"]', 'tumis_+5858', { delay: 50 })
        await page.click('#app-mount > div.app-1q1i1E > div > div.leftSplit-1qOwnR.nonEmbeddedLeftSplit-3z6mge > div > div > form > div > div > div.mainLoginContainer-1ddwnR > div.block-egJnc0.marginTop20-3TxNs6 > button.marginBottom8-AtZOdT.button-3k0cO7.button-38aScr.lookFilled-1Gx00P.colorBrand-3pXr91.sizeLarge-1vSeWK.fullWidth-1orjjo.grow-q77ONN')
        await page.waitFor(3000)
        const CHANNELS_URL = `https://discord.com/channels/690222921234644994/816099026126503957`

        await page.goto(CHANNELS_URL, {

        });
        await page.waitFor(3000)
        await page.type('span[data-slate-object="text"]', '.work', {
            delay: 100
        });
        await page.keyboard.press('Enter')

        console.debug('Discord typer typed at ' + new Date() )
        await page.waitFor(1000)
        
        await browser.close()
        
            
        
        // let loginButton = await discord.page.$x('//a[contains(., "Login")]');
        // await discord.page.waitFor(5000)
        // /* Click on login url button */
        // await loginButton[1].click();
        // loginButton = await discord.page.$x('//div[contains(text(), "Login")]');
        // await loginButton[0].click();
        
    })


})