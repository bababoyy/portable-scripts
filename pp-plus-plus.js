const scripts = [
    "https://greasyfork.org/scripts/438620-workertimer/code/WorkerTimer.js?version=1009025",
    "https://cdn.jsdelivr.net/gh/bababoyy/pixelplace-plus-plus/raw.js",
];
const callbacks = [
    function () {
        Object.defineProperty(a, 'setInterval', { configurable: false, enumerable: true, writable: false, value: a.WorkerTimer.setInterval });
        Object.defineProperty(a, 'clearInterval', { configurable: false, enumerable: true, writable: false, value: a.WorkerTimer.clearInterval });
        Object.defineProperty(a, 'setTimeout', { configurable: false, enumerable: true, writable: false, value: a.WorkerTimer.setTimeout });
        Object.defineProperty(a, 'clearTimeout', { configurable: false, enumerable: true, writable: false, value: a.WorkerTimer.clearTimeout });
        Object.defineProperty(a, 'console', { configurable: false, enumerable: true, writable: false, value: a.console });
        let flag = a.document.querySelector('img[src="/img/flags/GB.svg"]');
        flag.src = "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
        flag.width = 30;
        a.Pixelplace.createSetting('Multibot', 'Allows you to divide the image into sections for your bots');
        a.Pixelplace.createSetting('Change drawing style', 'Click this setting to change your drawing style in Premium BOT', function () {
            const styles = [
                ["horizontal", (a, b) => a.x + a.y * 0xfffff - b.x - b.y * 0xfffff],
                ["vertical", (a, b) => a.x * 0xfffff + a.y - b.x * 0xfffff - b.y],
                ["random", () => 1 - Math.random() * 2]
            ];
            const answer = prompt(`Change your drawing style (Default is Circular):
            Your options are:
            ${styles.map(a => a[0]).join('\n')}
            To change your drawing style, type in the style you want.
            If you leave this empty, your drawing style will be reverted to circular`).toLowerCase();
            const style = styles.find(a => a[0] === answer);
            a.Pixelplace.drawing = style?.[1];
        });
    },
    undefined
]
var a = window.open(location.href);
a.proxy = a;
a.Pixelplace = {
    Settings: {},
    createSetting: function (name, description, callback) {
        a.addEventListener('load', () => {
            const form = document.getElementById('form-tools');
            form.insertAdjacentHTML('beforeend', `<a href="#" class="input-checkbox" data-name="tools-${name.toLowerCase()}">
                        <div>
                            <div class="input">
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <div class="header">${name}</div>
                            <div class="content">${description}</div>
                        </div>
                    </a>`)
        })
        a.Pixelplace.Settings['tools-' + name.toLowerCase()] = {
            name: name,
            callback: function () {
                a.Pixelplace.Settings['tools-' + name.toLowerCase()].active ^= 1;
                callback?.();
            },
            active: false
        }
    },
    /**
    @type {Function|undefined}
    **/
    drawing: undefined
}
var interval = setInterval(function () {
    if (a.document.readyState !== 'uninitialized') {
        let has_initalised = false;
        function Bababoy_jQuery() {
            if (!has_initalised) {
                a.original = a.jQuery.noConflict();
                Object.assign(Bababoy_jQuery, a.original);
                has_initalised = true;
            }
            const str = arguments[0].toString();
            const proxy_arguments = arguments;
            if (str.indexOf('_0x') !== -1) {
                Bababoy_jQuery = a.original;
                let i = 0;
                function load() {
                    if (i >= scripts.length) {
                        return;
                    }
                    const script = a.document.createElement('script');
                    script.src = scripts[i];
                    script.onload = function () {
                        callbacks[i]?.();
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
