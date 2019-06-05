var MobileConsole = {
    target: null,
    
    currentPlace : function() {
        var err = new Error();
        var lst = err.stack.split("\n");
        return lst[2];
    },

    log : function() {
        browser.runtime.sendMessage({type: "log", args: Array.from(arguments), context: MobileConsole.currentPlace() });
    },

    info : function() {
        browser.runtime.sendMessage({type: "info", args: Array.from(arguments), context: MobileConsole.currentPlace()});
    },

    warn : function() {
        browser.runtime.sendMessage({type: "warn", args: Array.from(arguments),context: MobileConsole.currentPlace()});
    },

    error : function() {
        browser.runtime.sendMessage({type: "error", args: Array.from(arguments),context: MobileConsole.currentPlace()});
    },

    runtimeException : function(msg, url, line, column,err) {
        browser.runtime.sendMessage({type: "exception", args: { message: msg, url: url, line: line, column: column } });
        return false;
    },
    
    errorException : function() {
        
    }
    
};


exportFunction(MobileConsole.log, window.console, {defineAs : 'log'});
exportFunction(MobileConsole.error, window.console, {defineAs : 'error'});
exportFunction(MobileConsole.warn, window.console, {defineAs: 'warn'});
exportFunction(MobileConsole.info, window.console, {defineAs: 'info'});
exportFunction(MobileConsole.runtimeException, window, {defineAs: 'onerror'});

/*console.error = MobileConsole.error;
console.warn  = MobileConsole.warn;
console.info  = MobileConsole.info;

window.onerror = MobileConsole.runtimeException;

console.log('test');
console.info('all is good');
console.warn('attention');
console.error('gruick');

console.touched = 'JY Didier';


setTimeout(function() {
toto();
}, 200);

undefined;
*/