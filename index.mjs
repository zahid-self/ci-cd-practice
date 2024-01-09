import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      "--window-size=1920,1080",
      "--window-position=1921,0",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-sandbox",
    ],
    executablePath: '/usr/bin/chromium'
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.title();

  console.log({ title })
  await browser.close();
})();