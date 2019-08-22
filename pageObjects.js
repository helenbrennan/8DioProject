module.exports = {
    url: ('https://8dio.com'),
    elements: {
        // BUTTON FULL SELECTORS
        // piano page head - Helen
        pianoPage: ('h1.title'),
        // Instruments drop down
        instrumentsBtn: {
            selector: ('(//ul[contains(@class, "for-desktop")]//a[@href="/instruments"])[1]'),
            locateStrategy: 'xpath'
        },
        // Instrument menu Piano selector - Helen
        instMenuPiano: {
            selector: ('//ul[contains(@class, "for-desktop")]//a[contains(text(), "Piano")]'),
            locateStrategy: 'xpath'
        },
        // Piano page selection - Helen
        pianoSelection: {
            selector: ("//div[@class='product'][contains(., '1971 Estonia Grand Piano for Kontakt VST-AU-AAX Samples')]"),
            locateStrategy: 'xpath'
        },
        // results page play button - Helen
        resultsPagePlay: {
            selector: ("//div[@class='product'][contains(., '1971 Estonia Grand Piano for Kontakt VST-AU-AAX Samples')]//a[contains(@class, 'play-audio')]"),
            locateStrategy: 'xpath'
        },
        // piano page detail information - Helen
        pianoDetail: {
            selector: ("//div[@class='product']//p[contains(text(), '1971 Estonia Grand Piano for Kontakt VST-AU-AAX Samples')]"),
            locateStrategy: 'xpath'
        },
        // coupon code field - Helen
        cartCoupon: {
            selector: ('//*[@class="input-text"]'),
            locateStrategy: 'xpath'
        },
        // apply the coupon - Helen
        applyCoupon: {
            selector: '//input[@class="button not-empty"]',
            locateStrategy: 'xpath'
        },
        // coupon successful message - Helen
        coupSuccess: {
            selector: '//div[@class="woocommerce-message"]',
            locateStrategy: 'xpath'
        },
        // coupon error message - Helen
        coupError: {
            selector: '//ul[@class="woocommerce-error"]',
            locateStrategy: 'xpath'
        },
        searchBtn: {
            selector: '//a[@class="header-icon hide-after-550 "]',
            locateStrategy: 'xpath'
        },
        snapchatLink: {
            selector: '//a/i[@class="icon icon-pr"]',
            locateStrategy: 'xpath'
        },
        instaLink: {
            selector: '//a/i[@class="icon icon-in"]',
            locateStrategy: 'xpath'
        },
        fbLink: {
            selector: '//a/i[@class="icon icon-f"]',
            locateStrategy: 'xpath'
        },
        twLink: {
            selector: '//a/i[@class="icon icon-tw"]',
            locateStrategy: 'xpath'
        },
        scLink: {
            selector: '//a/i[@class="icon icon-sound"]',
            locateStrategy: 'xpath'
        },
        ytLink: {
            selector: '//a/i[@class="icon icon-yt"]',
            locateStrategy: 'xpath'
        },
        defNewsSubBtn: {
            selector: '//button[@class="btn btn--big btn--red"]',
            locateStrategy: 'xpath'
        },
        mainSearchSingleResult: {
            selector: ('//p[@class="product__name"]')[0],
            locateStrategy: 'xpath'
        },
        addToCart: {
            selector: '//a[@class="btn btn--red"]',
            locateStrategy: 'xpath'
        },
        goToCart: {
            selector: '//a[@href="/cart"]',
            locateStrategy: 'xpath'
        },
        removeItem: {
            selector: '//a[@class="remove"]',
            locateStrategy: 'xpath'
        },
        continueShopping: {
            selector: '//a[@class="button wc-backward"]',
            locateStrategy: 'xpath'
        },
        myAccount: {
            selector: ('//a[@class="header-icon"]')[1],
            locateStrategy: 'xpath'
        },
        logout: {
            selector: '//a[@class="account__logout-link light"]',
            locateStrategy: 'xpath'
        },
        popupCloseBtn: {
            selector: '//button[@class="subscribe__close-btn"]',
            locateStrategy: 'xpath'
        },
        popupSubmitBtn: {
            selector: ('//button[@type="submit"]')[2],
            locateStrategy: 'xpath'
        },
        loginSubmitBtn: {
            selector: '//button[@id="submit-login-btn"]',
            locateStrategy: 'xpath'
        },
        // INPUT FULL SELECTORS
        defNewsSubInput: {
            selector: '//p/input[@type="email"]',
            locateStrategy: 'xpath'
        },
        mainSearchInput: {
            selector: '//input[@class="main-search__input"]',
            locateStrategy: 'xpath'
        },
        loginEmailInput: {
            selector: '//input[@id="login-email"]',
            locateStrategy: 'xpath'
        },
        loginPassInput: {
            selector: '//input[@id="login-pass"]',
            locateStrategy: 'xpath'
        },
        popupEmailInput: {
            selector: '//input[@name="user_email"]',
            locateStrategy: 'xpath'
        },
        popUpBox: {
            selector: '//div[@class="subscribe__box"]',
            locateStrategy: 'xpath'
        },
        // OTHER
        subCouponCodeDisplay: {
            selector: '//div[@class="subscribe__coupon-code"]',
            locateStrategy: 'xpath'
        },
        pageLanding: {
            selector: '//body[@class="page-landing  w-reset-t"]',
            locateStrategy: 'xpath'
        }
    }
}