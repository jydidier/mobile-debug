var elt = document.getElementById('');


function handleMessage(event) {
    
}




browser.tabs.executeScript(null, {
    file: '/content_script/mobile-debug.js'
});

// send message in order to start and synchronize data
browser.tabs.query({ active: true, currentWindow: true}).then(
    function(tabs) {
        browser.tabs.sendMessage(tabs[0].id, { start: true });
    }
);

// handle messages
window.addEventListener('message', handleMessage, false);
