/* eslint-disable no-undef, no-prototype-builtins  */
/* eslint-env node, mocha */
define(['../core'], function (Arise) {

    'use strict';

    Arise.extend(Arise.fn, {
        /**
         *
         * @type {Object | String} arguments[i]
         *
         * @return {*|{}}
         */
       __init__: function (options) {

            console.log('Options:');
            console.table([typeof options, options]);

            if (!options)
                return;

            if (typeof options === 'object') {
                this.__alertHTML__(options);
            }

       }
    });

    return Arise;

});