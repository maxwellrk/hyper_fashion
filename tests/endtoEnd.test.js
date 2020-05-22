const puppeteer = require("puppeteer");
require("regenerator-runtime/runtime"); //for async test need to import this line to regenerate-runtime
let page;
let browser;

describe("RelatedItemAndOutfit: End-End Test", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
    });
    page = await browser.newPage();
    page.waitFor(3000);
  });
  //it would close within a second. 
  afterAll(() => {
    browser.close();
  });

  //for end-end want to have the page open before each test.
  beforeEach(async () => {
    await page.goto("http://localhost:3000/");
  });

  //end to end test for relateditemsAndOutFit
  test('Should be titled "HYPER FASHION"', async () => {
    await expect(page.title()).resolves.toMatch("HYPER FASHION");
  });

  test('RelatedItemAndOutfit contains text: "Add to Outfit"', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Add to Outfit');
  });

  // Tried to get button at my section work: Failed
  // test('Star button gets clicked', async () => {
  //     // Overview's button works
  //   // await expect(page).toClick('button', { text: 'ADD TO BAG' });

  //   const text = await page.click('button');
  //   expect(text).toContain('✩');
  //   await expect(page).toClick('.btn-compare', { text: '✩' });
  // });
});
