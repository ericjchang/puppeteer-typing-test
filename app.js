'use strict';
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--disable-web-security', '--disable-features=site-per-process'],
  });
  const page = await browser.newPage();
  await page.goto('https://typing-speed-test.aoeu.eu');
  await page.waitFor('#input');
  let words = await page.evaluate(() => {
    let word = $('.currentword').text();
    let words = [word];

    $('.nextword').each(function () {
      words.push($(this).text());
    });
    return words;
  });

  for (let i = 0; i < words.length; i++) {
    await page.type('#input', words[i] + ' ');
  }
})();

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--disable-web-security', '--disable-features=site-per-process'],
  });
  const page = await browser.newPage();
  await page.goto('https://10fastfingers.com/typing-test/english');
  await page.waitFor('.highlight');
  while (true) {
    let word = await page.evaluate(() => {
      return $('.highlight').text();
    });

    if (word != '') await page.type('#inputfield', word + ' ');
    else false;
  }
})();
