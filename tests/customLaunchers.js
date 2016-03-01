module.export = {
  // Browsers to run on BrowserStack.
  BS_Chrome: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'chrome',
    browser_version: '47.0'
  },
  BS_Firefox: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'firefox',
    browser_version: '43.0'
  },
  BS_Safari: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'El Capitan',
    browser: 'safari',
    browser_version: '9.0'
  },
  BS_MobileSafari8: {
    base: 'BrowserStack',
    os: 'ios',
    os_version: '8.3',
    browser: 'iphone',
    real_mobile: false
  },
  BS_MobileSafari9: {
    base: 'BrowserStack',
    os: 'ios',
    os_version: '9.1',
    browser: 'iphone',
    real_mobile: false
  },
  BS_InternetExplorer10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '8',
    browser: 'ie',
    browser_version: '10.0'
  },
  BS_InternetExplorer11: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'ie',
    browser_version: '11.0'
  }
};
