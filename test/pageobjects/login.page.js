

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CallTreePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputNama () {
        return $('//*[@id="form-container"]/div/div/div[1]/div/div[1]/div[2]/div[2]/div[1]/div/div[3]/div/div/input');
    }

    get dropdownGroup () {
        return $('//*[@id="SelectId_0_placeholder"]');
    }

    get qualityEngineeringGroup () {
        return $('//span[.="Quality Engineering Group"]');
    }

    get coreEngineeringGroup () {
        return $('//span[.="Core Engineering Group"]');
    }

    get inputGroup () {
        return $('//*[@id="SelectId_0_placeholder"]');
    }

    get inputLokasi () {
        return $('//*[@id="form-container"]/div/div/div[1]/div/div[1]/div[2]/div[2]/div[3]/div/div[3]/div/div/input');
    }

    get inputSehat () {
        return $('//*[@id="QuestionChoiceOption1"]/span');
    }

    get inputKurangSehat () {
        return $('//*[@id="QuestionChoiceOption2"]/span');
    }

    get btnSubmit () {
        return $('//*[@id="form-container"]/div/div/div[1]/div/div[1]/div[2]/div[3]/div[1]/button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async mengisiForm (nama, group, lokasi, kondisi) {
        await this.inputNama.setValue(nama);
        await this.dropdownGroup.click();
        if (group == 'Quality Engineering Group') {
            await this.qualityEngineeringGroup.click();
        }
        await this.inputLokasi.setValue(lokasi);
        if (kondisi == 'Sehat') {
            await this.inputSehat.click();
        }
        await browser.saveScreenshot(`./reports/${nama}.png`);
        // await this.btnSubmit.click();
        await browser.saveScreenshot(`./reports/${nama}_submited.png`);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/r/S4HyAmyQHR');
    }
}

module.exports = new CallTreePage();
