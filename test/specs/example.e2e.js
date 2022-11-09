const CallTreePage = require('../pageobjects/call_tree_page');
const SecurePage = require('../pageobjects/secure.page');
const daftar = require('../../data/daftar.json');

const  moment = require('moment');
let today = moment().format('YYYY-MM-DD_H_mm');

describe('Call Tree Kesehatan', () => {
    for(const value of daftar.data) {
        it(`As a User, I should be able to successfully submit ${value.nama} ${value.group} ${value.lokasi} ${value.kondisi}`, async () => {
            await CallTreePage.open();
            await CallTreePage.mengisiForm(value.nama, value.group, value.lokasi, value.kondisi);
            await expect(SecurePage.flashAlert).toBeExisting();
            await expect(SecurePage.flashAlert).toHaveTextContaining('Salam Sehat Selalu');
            await browser.saveScreenshot(`./reports/${value.nama}_submited_${today}.png`);
        });
    }
});


