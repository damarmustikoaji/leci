

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('//*[@id="form-main-content"]/div/div[2]/div[1]/div[2]');
    }
}

module.exports = new SecurePage();
