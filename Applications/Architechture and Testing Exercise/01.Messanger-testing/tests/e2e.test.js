const { expect } = require("chai");
const { chromium } = require("playwright-chromium");

const host = "http://localhost:5500";

const mochData = {
  user1: {
    username: "Boris",
    message: "Hello Boris",
  },
};

let DEBUG = true;
let slowMo = 500;

let browser, page;

describe("e2e tests", function () {
  //setup the testing environment
  this.timeout(5000);

  before(async () => {
    browser = await chromium.launch(
      DEBUG ? { headless: false, slowMo } : undefined
    );
  });
  after(async () => {
    await browser.close();
  });
  this.beforeEach(async () => {
    page = await browser.newPage();
  });
  this.afterEach(async () => {
    await page.close();
  });

  // testing
  it("load data", async function () {
    await page.goto(host);
    await page.click("text=Refresh");
    await page.waitForSelector("#refresh");
    const content = await page.textContent("textarea");
    expect(content).to.includes("Spami: Hello, are you there?");
    expect(content).to.includes("Garry: Yep, whats up :?");
    expect(content).to.includes("George: Hello, guys! :))");
    expect(content).to.includes("Spami: Hello, George nice to see you! :)))");
  });

  it("post data", async () => {
    const user = mochData.user1;
    await page.goto(host);
    await page.fill("#controls > input[type=text]:nth-child(2)", user.username);
    await page.fill("#controls > input[type=text]:nth-child(5)", user.message);
    const [response] = await Promise.all([
      page.waitForResponse("http://localhost:3030/jsonstore/messenger"),
      await page.click("#submit")
    ])
    const data = JSON.parse(response.request().postData());
    expect(data.author).to.equal(user.username);
    expect(data.content).to.equal(user.message);
  });
});
