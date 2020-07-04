/* eslint-disable no-undef, no-prototype-builtins  */
/* eslint-env node, mocha */
define(['../core'], function (Arise) {

    'use strict';

    Arise.extend(Arise.fn, {

        /**
         * 
         * @param {Object} options
         * @private
         */
        __alertHTML__: function (options) {
            
            let inc = ['type', 'inpPlaceholder', 'inpType', 'inpName', 'inpEmpty', 
                        'parent', 'theme', 'continueBthText', 'cancelBthText'];
            
            for (let i of inc) {
                if (!options[i]) {
                    options[i] = Arise.defaultOptions[i];
                }
            }

            let baseBlock = document.createElement('div');
            baseBlock.id = 'arise-parent';
            baseBlock.className = 'arise__wrapper light';
            document.body.appendChild(baseBlock);

            let wrapper = document.querySelector(`#arise-parent`);

            if (typeof options === 'object') {
                if (options.type === 'error') {
                    wrapper.innerHTML += this.__alertErrorHTML__(options);
                    Arise.__exit__();
                    if (options.theme) {
                        Arise.__theme__(options.theme);
                    }
                } else if (options.type === 'success') {
                    wrapper.innerHTML += this.__alertSuccessHTML__(options);
                    Arise.__exit__();
                    if (options.theme) {
                        Arise.__theme__(options.theme);
                    }
                } else if (options.type === 'info') {
                    wrapper.innerHTML += this.__alertInfoHTML__(options);
                    Arise.__exit__();
                    if (options.theme) {
                        Arise.__theme__(options.theme);
                    }
                } else if (options.type === 'warning') {
                    wrapper.innerHTML += this.__alertWarningHTML__(options);
                    if (options.confirm === true) {
                        Arise.__warningContinue__(options);
                    }
                    Arise.__exit__();
                    if (options.theme) {
                        Arise.__theme__(options.theme);
                    }
                } else if (options.type === 'question/input') {
                    wrapper.innerHTML += this.__alertQuestionHTML__(options);
                    Arise.__exit__();
                    Arise.__inputContinue__(options);
                    if (options.theme) {
                        Arise.__theme__(options.theme);
                    }
                } else {
                    wrapper.innerHTML += this.__alertInfoHTML__(options);
                    Arise.__exit__();
                    if (options.theme) {
                        Arise.__theme__(options.theme);
                    }
                }
            }
        },

        /**
         * 
         * @param {Object} options
         * @return {string}
         * @private
         */
        __alertErrorHTML__: function (options) {
            return `<div class="arise__container light arise__container-error aerror">
                <div class="arise__cnt-row light error">
                    <div class="arise__cnt-exit light">
                        <span><i class="fa fa-times close-arise close__arise-${options.parent}" aria-hidden="true"></i></span>
                    </div>
                    <div class="arise__cnt-top">
                        <div class="arise-icon">
                            <span><i class="fa error fa-exclamation-circle" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <div class="arise__cnt-text light">
                        <h1>${options.title}</h1>
                        <p>${options.content}</p>
                        <div class="arise__bth-row">
                            <button class="arise__bth-exit arise__arbth-${options.parent}">OK</button>
                        </div>
                    </div>
                </div>
            </div>`
        },

        /**
         * 
         * @param {Object} options
         * @return {string}
         * @private
         */
        __alertInfoHTML__: function (options) {
            return `<div class="arise__container light arise__container-info ainfo">
                <div class="arise__cnt-row light info">
                    <div class="arise__cnt-exit light">
                        <span><i class="fa fa-times close-arise close__arise-${options.parent}" aria-hidden="true"></i></span>
                    </div>
                    <div class="arise__cnt-top">
                        <div class="arise-icon">
                            <span><i class="fa info fa-info-circle" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <div class="arise__cnt-text light">
                        <h1>${options.title}</h1>
                        <p>${options.content}</p>
                        <div class="arise__bth-row">
                            <button class="arise__bth-exit arise__arbth-${options.parent}">OK</button>
                        </div>
                    </div>
                </div>
            </div>`
        },

        /**
         * 
         * @param {Object} options
         * @return {string}
         * @private
         */
        __alertSuccessHTML__: function (options) {
            return `<div class="arise__container light arise__container-success asuccess">
                <div class="arise__cnt-row light success">
                    <div class="arise__cnt-exit light">
                        <span><i class="fa fa-times close-arise close__arise-${options.parent}" aria-hidden="true"></i></span>
                    </div>
                    <div class="arise__cnt-top">
                        <div class="arise-icon">
                            <span><i class="far success fa-check-circle" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <div class="arise__cnt-text light">
                        <h1>${options.title}</h1>
                        <p>${options.content}</p>
                        <div class="arise__bth-row">
                            <button class="arise__bth-exit arise__arbth-${options.parent}">OK</button>
                        </div>
                    </div>
                </div>
            </div>`
        },

        /**
         * 
         * @param {Object} options
         * @return {string}
         * @private
         */
        __alertWarningHTML__: function (options) {
            return `<div class="arise__container light arise__container-warn awarn">
                <div class="arise__cnt-row light warn">
                    <div class="arise__cnt-exit light">
                        <span><i class="fa fa-times close-arise close__arise-${options.parent}" aria-hidden="true"></i></span>
                    </div>
                    <div class="arise__cnt-top">
                        <div class="arise-icon">
                            <span><i class="fa warn warn-i fa-exclamation-circle" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <div class="arise__cnt-text light">
                        <h1 class="warn-title">${options.title}</h1>
                        <p class="warn-text">${options.content}</p>
                        <div class="arise__bth-row-war">
                            <button class="arise__warn-cancel arise__bth-exit arise__arbth-${options.parent}">${options.cancelBthText}</button>
                            <button class="arise__warn-continue arise__arbth-${options.parent}">${options.continueBthText}</button>
                        </div>
                    </div>
                </div>
            </div>`
        },

        /**
         * 
         * @param {Object} options
         * @return {string}
         * @private
         */
        __alertQuestionHTML__: function (options) {
            return `<div class="arise__container light arise__container-quest aquest">
                <div class="arise__cnt-row light quest">
                    <div class="arise__cnt-exit light">
                        <span><i class="fa fa-times close-arise close__arise-${options.parent}" aria-hidden="true"></i></span>
                    </div>
                    <div class="arise__cnt-top">
                        <div class="arise-icon">
                            <i class="far quest-i quest fa-question-circle"></i>
                        </div>
                    </div>
                    <div class="arise__cnt-text light">
                        <h1 class="quest-title">${options.title}</h1>
                        <p class="quest-text">${options.content}</p>
                        <div class="arise__input-row light">
                            <label for="arise__inp">
                                <input placeholder="${options.inpPlaceholder}" class="arise__quest-input" type="${options.inpType}" name="${options.inpName}" id="arise__inp">
                                <span class="arise__input-span">${options.inpEmpty}</span>
                            </label>
                        </div>
                        <div class="arise__bth-row">
                            <button class="arise__quest-continue arise__arbth-${options.parent}">${options.continueBthText}</button>
                        </div>
                    </div>
                </div>
            </div>`
        },

        /**
         * 
         * @param {Object} options
         * @return {string}
         * @private
         */
        __errorUserTypeNotHTML__: function (options) {
            return `<div class="arise__container light arise__container-error aerror">
                <div class="arise__cnt-row light error">
                    <div class="arise__cnt-exit light">
                        <span><i class="fa fa-times close-arise close__arise-${options.parent}" aria-hidden="true"></i></span>
                    </div>
                    <div class="arise__cnt-top">
                        <div class="arise-icon">
                            <span><i class="fa error fa-exclamation-circle" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <div class="arise__cnt-text light">
                        <h1>Developer error!</h1>
                        <p>Developer, you did not specify a window type: <br />     info/success/error/warning/question
                        <pre style="margin-top: 20px">
<code style="background: #f5f5f5;padding: 10px;border-radius: 3px;"><span style="color:#e36209">Arise</span>({ <span style="color:#4078f2">type</span>: <span style="color: #50a14f">"..."</span> });</code>
                        </pre>
                        </p>
                        <div class="arise__bth-row">
                            <button class="arise__bth-exit arise__arbth-${options.parent}">OK</button>
                        </div>
                    </div>
                </div>
            </div>`
        }
    });

    return Arise;

});