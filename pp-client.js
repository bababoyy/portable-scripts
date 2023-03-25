const scripts = [
    "https://greasyfork.org/scripts/438620-workertimer/code/WorkerTimer.js?version=1009025",
    "https://greasyfork.org/scripts/438408-cwss/code/CWSS.js?version=1042744",
    "https://greasyfork.org/scripts/444949-ppconf/code/PPConf.js?version=1050254",
    "https://greasyfork.org/scripts/443803-ppml/code/PPML.js?version=1050258",
    "https://greasyfork.org/scripts/443894-ppil/code/PPIL.js?version=1050256",
    "https://greasyfork.org/scripts/443807-ppt/code/PPT.js?version=1050374",
    "https://greasyfork.org/scripts/443844-ppcc/code/PPCC.js?version=1050358",
    "https://greasyfork.org/scripts/443907-pppc/code/PPPC.js?version=1050383",
    "https://greasyfork.org/scripts/452837-pp-client/code/PP-Client.user.js"
];
var a = window.open(location.href);
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
                        if (i === 0) {
                            // Proper anti-block
                            a.s_i = a.WorkerTimer.setInterval;
                            a.WorkerTimer.setInterval = function(f) {
                                if (f.toString().includes('WebSocket')) {
                                    return;
                                }
                                a.s_i.apply(a.s_i, arguments);
                            }
                        }
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
