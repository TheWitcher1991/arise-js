/* eslint-disable no-undef, no-prototype-builtins  */
/* eslint-env node, mocha */
define(['../core'], function (Arise) {
    
    'use strict';
    
    Arise.extend(Arise, {

        /**
         * 
         * @private
         */
        __exit__: function () {
            let classEl = ['.close-arise', '.arise__bth-exit'];
            
            for (let i of classEl) {
                let ic = document.querySelector(i);
                
                if (!ic) {
                    return;
                }
                
                ic.addEventListener('click', () => {
                    this.__deleteArise__();
                })
            }
        },

        /**
         * 
         * @private
         */
        __deleteArise__: function () {
            document.querySelector('.arise__wrapper').classList.add('arise__exit-wrap');
            setTimeout(() => {
                document.querySelector('.arise__wrapper').remove();
            }, 100);
        },

        /**
         * 
         * @param {RegExp | String} inpRegExp
         * @param {Boolean} confirm
         * @param {String} confirmText
         * @param {String} confirmTitle
         * @param {String} confirmType
         * @return {*}
         * @private
         */
        __inputContinue__: function ({inpRegExp, confirm, confirmText, confirmTitle, confirmType}) {
            let bth = document.querySelector('.arise__quest-continue'),
                ic = document.querySelector('.arise__quest-input'),
                span = document.querySelector('.arise__input-span'),
                icon = document.querySelector('.quest-i'),
                title = document.querySelector('.quest-title'),
                text = document.querySelector('.quest-text'),
                bthRow = document.querySelector('.arise__bth-row');
            
            ic.addEventListener('focusout', () => {
                if (!inpRegExp.test(ic.value)) {
                    span.classList.add('arise__span-active');
                    ic.style.background = '#fff8f8';
                    ic.style.borderColor = '#e23131';
                } else {
                    span.classList.remove('arise__span-active');
                }
            }, false);

            let classRemove = ['.arise__quest-continue', '.arise__input-row', '.quest-text', '.quest-title'];
            
            bth.addEventListener('click', () => {
                if (!inpRegExp.test(ic.value)) {
                    span.classList.add('arise__span-active');
                    ic.style.background = '#fff8f8';
                    ic.style.borderColor = '#e23131';
                } else {
                    if (confirm === true) {
                        for (let i of classRemove) {
                            let ic = document.querySelector(i);
                            ic.innerHTML = '';
                            if (i === '.arise__quest-continue' || i === '.arise__input-row') {
                                ic.remove();
                            }
                        }


                        if (confirmType === 'success' || !confirmType) {
                            icon.classList.remove('fa-question-circle');
                            icon.classList.remove('fa');
                            icon.classList.add('fa-check-circle');
                            icon.classList.add('far');
                            icon.style.color = '#A5DC86';
                        } else if (confirmType === 'info') {
                            icon.classList.remove('far');
                            icon.classList.add('fa');
                            icon.classList.remove('fa-question-circle');
                            icon.classList.add('fa-info-circle');
                            icon.style.color = '#5080b7';
                        } else if (confirmType === 'error') {
                            icon.classList.add('fa-exclamation-circle');
                            icon.classList.remove('fa-question-circle');
                            icon.style.color = '#F27474';
                        }

                        text.innerHTML = confirmText;
                        title.innerHTML = confirmTitle;

                        let newBth = document.createElement('button');
                        newBth.className = 'arise__bth-exit arise__arbth-parent';
                        newBth.innerHTML = 'OK';
                        bthRow.appendChild(newBth);
                        return ic.value;
                    } else {
                        this.__deleteArise__();
                        console.log(ic.value);
                        return ic.value;
                    }
                    
                }
            }, false);
        },

        /**
         * 
         * @param {Boolean} confirm
         * @param {String} confirmText
         * @param {String} confirmTitle
         * @param {String} confirmType
         * @private
         */
        __warningContinue__: function ({confirm, confirmText, confirmTitle, confirmType}) {
            let icon = document.querySelector('.warn-i'),
                title = document.querySelector('.warn-title'),
                text = document.querySelector('.warn-text'),
                bthRow = document.querySelector('.arise__bth-row-war');
            
            let classRemove = ['.arise__warn-continue', '.arise__warn-cancel', '.warn-text', '.warn-title'];
            
            if (confirm === true) {
                document.querySelector('.arise__warn-continue').addEventListener('click', () => {
                    for (let i of classRemove) {
                        let ic = document.querySelector(i);
                        ic.innerHTML = '';
                        if (i === '.arise__warn-cancel' || i === '.arise__warn-continue') {
                            ic.remove();
                        }
                    }

                    bthRow.classList.add('arise__bth-row');
                    bthRow.classList.remove('arise__bth-row-war');
                    
                    if (confirmType === 'success' || !confirmType) {
                        icon.classList.remove('fa-exclamation-circle');
                        icon.classList.remove('fa');
                        icon.classList.add('fa-check-circle');
                        icon.classList.add('far');
                        icon.style.color = '#A5DC86';
                    } else if (confirmType === 'info') {
                        icon.classList.add('fa-info-circle');
                        icon.style.color = '#5080b7';
                    } else if (confirmType === 'error') {
                        icon.style.color = '#F27474';
                    }

                    text.innerHTML = confirmText;
                    title.innerHTML = confirmTitle;

                    let newBth = document.createElement('button');
                    newBth.className = 'arise__bth-exit arise__arbth-parent';
                    newBth.innerHTML = 'OK';
                    bthRow.appendChild(newBth);
                }, false);
            } else {
                this.__deleteArise__();
            }

            
        },

        /**
         *  @type {Object}
         */
        defaultOptions: {
            type: 'info',
            theme: 'light',
            inpPlaceholder: 'Fill in the field',
            inpEmpty: 'Please specify an answer',
            inpType: 'text', 
            inpName: 'arise', 
            parent: 'parent',
            confirm: false,
            cancel: false,
            cancelType: 'error',
            confirmType: 'success',
            continueBthText: 'Continue',
            cancelBthText: 'Cancel'
        },
        
    });
    
    return Arise;
});