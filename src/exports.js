define(['./core'], function (Arise) {

    'use strict';

    if (typeof module === 'object' && module.exports) {
        module.exports = Arise;
        module.exports.arise = Arise;
    }

    return Arise;

});