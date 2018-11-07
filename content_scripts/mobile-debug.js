var MobileConsole = {
    target: null,

    start : function(event) {
        if (event.data.start === true) {
            target = event.source;
        }
    },

    log : function() {
        if (target != null) {
            target.postMessage( JSON.stringify({
                log: arguments, context: new Error()
            }),'*');
        }
    },

    info : function() {
        if (target != null) {
            target.postMessage( JSON.stringify({
                info: arguments, context: new Error()
            }),'*');
        }
    },

    warn : function() {
        if (target != null) {
            target.postMessage( JSON.stringify({
                warn: arguments, context: new Error()
            }),'*');
        }
    },

    error : function() {
        if (target != null) {
            target.postMessage( JSON.stringify({
                error: arguments, context: new Error()
            }),'*');
        }
    },

    exception : function(msg, url, line, column, err) {
        if (target != null) {
            target.postMessage( JSON.stringify({
                exception: { message: msg, url: url, line: line }
            }),'*'); 
        }
    }
};

console.log   = MobileConsole.log;
console.error = MobileConsole.error;
console.warn  = MobileConsole.warn;
console.info  = MobileConsole.info;

window.onerror = MobileConsole.exception;

window.addEventListener('message',MobileConsole.start,false);
