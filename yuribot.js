const scripts = [
    "https://jsdelivr.net/gh/bababoyy/cdn-files@main/yuribot.user.js",
];
var a = window.open(location.href);
a.unsafeWindow = a;
a.GM = {
    info: {
        script: {
            namespace: "Pinkerton_is_the_best_album"
        },
        namespace: "Pinkerton_is_the_best_album"
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
