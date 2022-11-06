const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = 'http://localhost:5500';

const mochData = {
    firstBook: {
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K.Rowling',
    },
    secondBook: {
        title: 'C# Fundamentals',
        author: 'Svetlin Nakov',
    },
    thirdBook: {
        title: 'Grammy Book',
        author: 'Godumov',
    },
};

let DEBUG = true;
let slowMo = 500;

let browser, page;

describe('e2e tests', async function () {
    //setup
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

    it('load data', async function () {
        const { firstBook, secondBook } = mochData;
        await page.goto(host);

        await page.waitForSelector('#loadBooks');
        await page.click('#loadBooks');

        const books = await page.$$eval('#tbody tr td', td =>
            td.map(s => s.textContent)
        );

        expect(books[0]).to.equal(firstBook.title);
        expect(books[1]).to.equal(firstBook.author);
        expect(books[3]).to.equal(secondBook.title);
        expect(books[4]).to.equal(secondBook.author);
    });

    it.only('testing add button', async () => {
        const { thirdBook } = mochData;
        await page.goto(host);

        await page.waitForSelector('form');
        await page.fill('#form > input[type=text]:nth-child(3)', thirdBook.title);
        await page.fill('#form > input[type=text]:nth-child(5)', thirdBook.author);

        //! Not working here, need to fix the code.

        const [promise] = await Promise.all([
            await page.waitForResponse(
                'http://localhost:3030/jsonstore/collections/books'
            ),
            await page.click('text=Submit'),
        ]);

    });
});
