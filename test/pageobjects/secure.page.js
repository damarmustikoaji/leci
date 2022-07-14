

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('//*[@id="form-container"]/div/div/div[1]/div/div[2]/div[1]/div[2]/span');
    }
}

module.exports = new SecurePage();
