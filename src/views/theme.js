/* eslint-disable no-undef, no-prototype-builtins  */
/* eslint-env node, mocha */
define(['../core'], function (Arise) {

    'use strict';
    
    Arise.extend(Arise, {

        /**
         * 
         * @param {String} type
         * @private
         */
        __theme__: function (type) {
            let themeClass = ['.arise__wrapper', '.arise__cnt-exit', '.arise__cnt-text', '.arise__input-row', '.arise__container', '.arise__cnt-row'];
            
            for (let i of themeClass) {
                
                let el = document.querySelector(i);
                
                if (!el) {
                    continue;
                }
                
                if (type === 'dark') {
                    el.classList.remove('light');
                    el.classList.add('dark');
                }

                if (type === 'light') {
                    if (new RegExp('(^| )' + 'light' + '( |$)', 'gi').test('light')) {
                        return;
                    } else {
                        el.classList.remove('dark');
                        el.classList.add('light');
                    }
                } 
            }
        }
        
    });

    return Arise;

});