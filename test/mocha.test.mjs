import puppeteer from "puppeteer";
import assert from "assert";
import { describe } from "mocha";

class Browser {
  constructor() {
    this.browser;
  }

  async init() {
    if (!this.browser) {
      this.browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-dev-shm-usage']
      })
    }
  }

  async navigate() {
    const page = await this.browser.newPage();
    await page.goto('https://example.com');
    return await page.title();
  }

  async close() {
    return await this.browser.close();
  }
}



describe('Init browser', () => {
  let browser = new Browser();
  before(async () => {
    await browser.init();
  });

  after(async () => {
    await browser.close();
  });

  describe('example.com', () => {
    it('gets the title', async () => {
      const title = await browser.navigate();
      assert.strictEqual(title, 'Example Domain');
    })
  })
})

