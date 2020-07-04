/* eslint-disable no-undef */
'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let bth = document.querySelector('#bth'),
        bth1 = document.querySelector('#bth1'),
        bth2 = document.querySelector('#bth2'),
        bth3 = document.querySelector('#bth3'),
        bth4 = document.querySelector('#bth4'),
        bth5 = document.querySelector('#bth5');
    
    // info
    bth.addEventListener('click', () => {
        Arise({
            type: 'info',
            title: 'This is the title. Info',
            content: 'This is the text cheers...',
            theme: 'dark'
        })
    });

    //error
    bth1.addEventListener('click', () => {
        Arise({
            type: 'error',
            title: 'This is the title. Error',
            content: 'This is the text cheers...',
        })
    });

    //success
    bth2.addEventListener('click', () => {
        Arise({
            type: 'success',
            title: 'This is the title. Success',
            content: 'This is the text cheers...'
        })
    });

    //warning
    bth3.addEventListener('click', () => {
        Arise({
            type: 'warning',
            title: 'Are you sure?',
            confirm: true,
            confirmTitle: 'Delete!',
            confirmText: 'Your imaginary file has been deleted!',
            confirmType: 'success',
            content: 'You will not be able to recover this imaginary file!'
        })
    });

    //question/input
    bth4.addEventListener('click', () => {
        Arise({
            type: 'question/input',
            inpPlaceholder: 'Your name...', 
            inpType: 'text', 
            inpName: 'name', 
            inpEmpty: 'Please fill in the field correctly. Length from 3 to 14 characters using the English language [a-zA-Z0-9.-_ )', 
            inpRegExp: /^([a-zA-Z0-9.-_ ]){3,14}$/, 
            title: 'What is your name?',
            confirm: true,
            confirmTitle: 'Done!',
            confirmText: 'We recorded your name!',
            confirmType: 'success',
            continueBthText: 'Send',
            content: 'This name will be displayed in your messages.'
        })
    });
    
    //form 
    bth5.addEventListener('click', () => {
        Arise({
            type: 'form',
            title: 'Fill the form',
            content: 'Fill out the form to register on the site',   
            input: {
                
            }
        })
    }, false);
    
}, false);