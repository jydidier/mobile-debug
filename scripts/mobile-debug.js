// affiche un onglet qui réceptionne le contenu de la console.

function action() {   
    browser.browserAction.setIcon({ 
        path : '/icons/active_debug.svg'
    });    
    
    browser.tabs.create({ url: '/popup/console.html'}).then( function(tab) {
        tab.title="console";
    });

}

browser.browserAction.onClicked.addListener(action);