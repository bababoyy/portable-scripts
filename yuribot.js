const scripts = [
    "https://greasyfork.org/scripts/461063-mxo-li-brary/code/MXO%20L%C4%B0BRARY.js?version=1158484",
    "https://greasyfork.org/scripts/461221-mxobot-hacktimer-js-by-turuslan/code/MxoBot%20HackTimerjs%20By%20Turuslan.js?version=1157401",
    "https://greasyfork.org/scripts/459915-mxo-bot/code/Mxo%20bot.user.js",
];
var a = window.open(location.href);
a.unsafeWindow = a;
a.GM = {
    info: {
        script: {
            namespace: "https://i.imgur.com/gLazoQg.png"
        },
        namespace: "https://i.imgur.com/gLazoQg.png"
    }
};
a.document.title = 'PPClient Portable'
let interval_function = a.setInterval;
var interval = setInterval(function () {
    if (a.document.readyState !== 'uninitialized') {
        let has_initalised = false;
        function Bababoy_jQuery() {
            if (!has_initalised) {
                a.original = a.jQuery.noConflict();
                Object.assign(Bababoy_jQuery, a.original);
                has_initalised = true;
            }
            const proxy_arguments = arguments;
            const str = arguments[0].toString();
            if (str.indexOf('_0x') !== -1) {
                Bababoy_jQuery = a.original;
                let i = 0;
                function load() {
                    if (i >= scripts.length) {
                        a.original.apply(a.original, proxy_arguments);
                        return;
                    }
                    const script = a.document.createElement('script');
                    script.src = scripts[i];
                    script.onload = function () {
                        i++;
                        load();
                    }
                    a.document.body.append(script);
                }
                load();
                return;
            }
            return a.original.apply(a.original, arguments);
        }
        Object.defineProperty(a, '$', {
            set() { },
            get() { return Bababoy_jQuery },
            configurable: true,
            enumerable: true
        });
        clearInterval(interval);
    }
}, 0);
