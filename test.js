const puppeteer = require('puppeteer');
require('regenerator-runtime/runtime');//for async test need to import this line to regenerate-runtime
let page; 
let browser;

test('auto passing test', () => {
  expect(true).toBe(true);
});

 //unit test: don't need to show browser
 //integration test: don't need to show browser


describe('test end-end', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false
    });
    page = await browser.newPage();
    page.waitFor(3000)
  });
  
  //for end-end want to have before each.
  beforeEach(async ()=> {
    await page.goto('http://localhost:3000/');
  })
  //it would close within a second. want to set it close in 2 mins
  afterAll(()=> {
    browser.close();
  });

  //end to end test
  test('end-end: should be titled "FEC - TYCHE"', async () => {
    await expect(page.title()).resolves.toMatch("FEC TYCHE");
  });
});