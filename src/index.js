/**----------------------------------------------
 * @version 1.0.0
 * @license MIT
 * @see {https:\\github.com\TheWitcher1991\arise-js}
 -----------------------------------------------*/

'use strict';

(function (global,factory) {

    'use strict';

    if (typeof module === 'object' && typeof module.exports === 'object') {

        module.exports = global.document ?
            factory(global, true) :
            function(w) {
                if (!w.document) {
                    throw new Error('Arise-js requires a window with a document');
                }
                return factory(w);
            };
    } else {
        factory(global);
    }
})(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {

    'use strict';

    define([
        './core',
        './exports',
        './views/init',
        './views/html',
        './private/private',
        './views/theme',

    ], function (Arise) {

        const $ = options => new Arise(options);

        try {

            window.Arise = $;
            window.a === undefined && (window.a = $);

        } catch (e) {
            console.error(e);
        }

        return Arise;

    });

});