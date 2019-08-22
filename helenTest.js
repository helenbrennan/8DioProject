var pageObjects = {}

module.exports = {
    before: browser => {
        pageObjects = browser.page.pageObjects()
        pageObjects.navigate()
            .maximizeWindow()
    },
    after: browser => {
        browser.end()
    },
    'Close pop-up': browser => {
        pageObjects
            .waitForElementVisible('@popUpBox', 50000)
            .waitForElementVisible('@popupCloseBtn', 1000)
            .click('@popupCloseBtn')
            .verify.visible('@pageLanding')
    },
    'DIO-3 Sample playing in results view': browser => {
        pageObjects
            .click('@instrumentsBtn')
            .waitForElementVisible('@instMenuPiano', 2000)
            .click('@instMenuPiano')
        pageObjects
            .expect.element('@pianoPage').text.to.contain('Piano').before(10000)
        pageObjects
            .waitForElementVisible('@pianoSelection')
            .moveToElement('@pianoSelection', 20, 20)
            .waitForElementVisible('@resultsPagePlay')
            .click('@resultsPagePlay')
            .expect.element('@resultsPagePlay').to.have.attribute("class").contains("_is-playing").before(500)
        pageObjects
            .click('@resultsPagePlay')
            .expect.element('@resultsPagePlay').to.have.attribute("class").not.contains("_is-playing").before(500)
    },
    'DIO-14 Current coupon working': browser => {
        browser.url('https://8dio.com/instrument/1971-estonia-grand-piano-for-kontakt-vst-au-aax/')
        pageObjects
            .expect.element('@pianoPage').text.to.contain('1971 Estonia Grand Piano for Kontakt VST-AU-AAX Samples')
        pageObjects
            .click('@addToCart')
            .click('@goToCart')
            .setValue('@cartCoupon', 'L8VE')
            .click('@applyCoupon')
            .expect.element('@coupSuccess').text.to.contain('Coupon code applied successfully.')
    },
    'DIO-15 Sale overlap': browser => {
        pageObjects
        .setValue('@cartCoupon', 'dfk8kd3zdbb-2664')
        .click('@applyCoupon')
        .expect.element('@coupError').text.to.contain('Sorry, coupon "l8ve" has already been applied and cannot be used in conjunction with other coupons.')

    }

}





