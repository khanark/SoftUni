// const { chromium } = require("playwright-chromium");

// (async () => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   await page.goto("https://google.com/");
//   await page.screenshot({ path: "example.png" });
//   await browser.close();
// })();

// testing with mocha and chai
// const { chromium } = require("playwright-chromium");
// const { expect } = require("chai");
// const { beforeEach } = require("mocha");

// let browser, page;

// describe("E2E tests", async function () {
//   this.timeout(5000);

//   before(async () => {
//     browser = await chromium.launch();
//   });
//   after(async () => {
//     await browser.close();
//   });
//   beforeEach(async () => {
//     page = await browser.newPage();
//   });
//   this.afterEach(async () => {
//     await page.close();
//   });

//   it("initial load", async () => {
//     await page.goto("http://localhost:5500"); // goes to the localhost

//     await page.waitForSelector(".accordion"); // awaits the class acordion to load before doing the testing

//     const content = await page.textContent("#main"); // the content of the #main section
//     expect(content).to.contains("Scalable Vector Graphics");
//     expect(content).to.contains("Open standard");
//     expect(content).to.contains("Unix");
//     expect(content).to.contains("ALGOL");
//   });

//   it.only("More button works", async function () {
//     await page.goto("http://localhost:5500"); // goes to the localhost
//     await page.waitForSelector(".accordion"); // awaits the class acordion to load before doing the testing
//     await page.click("text=More");

//     await page.waitForResponse(/articles\/details/i); // awaits the server to respond after the lcik of the button
//     await page.waitForSelector(".accordion p");
//     const visible = await page.visible(".accordion p");

//     expect(visible).to.be.true;
//   });
// });
