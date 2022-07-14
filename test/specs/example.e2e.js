const CallTreePage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const daftar = require('../../data/daftar.json');

describe('Call Tree Kesehatan', () => {
    for(const value of daftar.data) {
        it(`As a User, I should be able to successfully submit ${value.nama} ${value.group} ${value.lokasi} ${value.kondisi}`, async () => {
            await CallTreePage.open();
            await CallTreePage.mengisiForm(value.nama, value.group, value.lokasi, value.kondisi);
            await expect(SecurePage.flashAlert).toBeExisting();
            await expect(SecurePage.flashAlert).toHaveTextContaining(
                'Salam Sehat Selalu');
        });
    }
});


