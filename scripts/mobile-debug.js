function action() {   
        
    browser.tabs.create({ url: '/popup/console.html'}).then( function(tab) {
        tab.title="console";
        browser.tabs.executeScript(null, {
            file: '/content_scripts/mobile-debug.js'
        });
        console.log('myself');
    });

}


browser.browserAction.onClicked.addListener(action);