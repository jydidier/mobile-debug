
function handleMessage(message, sender) {
    var p = document.createElement('p');
    
    p.classList.add(message.type);
    
    if (message.type === "exception") {
        var contents = message.args.msg + ' ' + message.args.url + ':' + message.args.line + ':' + message.args.column;
    } else {
        var contents = '';
        var arg;
        for(arg in message.args) {
            contents += message.args[arg] + ' ' + message.context;
        }
    }
       
    p.innerHTML = contents;
    document.getElementById('events').appendChild(p);
    
}

browser.runtime.onMessage.addListener(handleMessage);
console.log('toto');
