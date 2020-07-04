/* eslint-disable no-undef, no-prototype-builtins  */
/* eslint-env node, mocha */
define(['./index'], function () {

    'use strict';

    let version = '@VERSION',

        nodes = 0,

        /**
         * Is a class constructor
         *
         * @class Arise
         *
         * @return {Function}
         */
        Arise = function (options) {
            if (this instanceof Arise) {
                return this.__init__(options);
            }
        };

    Arise.prototype = Arise.fn = {

        nodes,

        version,

        constructor: Arise,
    };

    /**
     *
     * @param e
     * @return {boolean|boolean}
     */
    Arise.isset = Arise.fn.isset = e => typeof e !== 'undefined' && e !== null;

    /**
     *
     * @param e
     * @return {boolean|boolean}
     */
    Arise.empty = Arise.fn.empty = e => typeof e === 'undefined' && e === null;

    /**
     * Connects two objects into one
     * @param {Class | Object} out The Object
     *
     * @return {Object}
     */
    Arise.extend = Arise.fn.extend = function (out) {
        out = out || {};

        for (let i = 1; i < arguments.length; i++) {
            let obj = arguments[i];

            if (!obj)
                continue;

            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === 'object'){
                        if(obj[key] instanceof Array)
                            out[key] = obj[key].slice(0);
                        else
                            out[key] = Arise.extend(out[key], obj[key]);
                    }
                    else
                        out[key] = obj[key];
                }
            }
        }

        return out;
    };



    return Arise;

});