'use strict'

// variables global
const body = document.querySelector('body');
const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.page-header__inner');
const faqItem =  document.querySelectorAll('.faqs__item');
const tabItem = document.querySelectorAll('.tabs__item');
const tabContent = document.querySelectorAll('.tabs__body');
const form = document.querySelector('.cta__form');
const emailAddress = document.getElementById('email');

// mobile-menu activate/deactivate
let mobileActivate = () => {
    menuMobile.classList.toggle('page-header__inner--mobile');   
    body.classList.toggle('stop-scroll');
};

let mobileDeactivate = () => {
    menuMobile.classList.remove('page-header__inner--mobile'); 
    body.classList.remove('stop-scroll');
};

menuBtn.addEventListener('click', mobileActivate);
window.addEventListener('resize', mobileDeactivate);

// faqs
for (let i = 0; i < faqItem.length; i++) {
    faqItem[i].addEventListener('click', function() {
        this.classList.toggle('faqs__item--open');
    });
}

// tabs
let switchTab = (event) => {
    for (let i = 0; i < tabItem.length; i++) {
        tabItem[i].classList.remove('tabs__item--active');

        let target = event.target;
        target.classList.add('tabs__item--active');

        for (let j = 0; j < tabContent.length; j++) {
            tabContent[j].classList.remove('tabs__body--visible');

            if (target.dataset.target === tabContent[j].dataset.target) {
                tabContent[j].classList.add('tabs__body--visible');
            }
        }
    }
}

tabItem.forEach(tab => tab.addEventListener('click', switchTab));

// form
emailAddress.addEventListener('input', (event) => {
    if (emailAddress.validity.valid) {
        form.classList.remove('cta__form--invalid');
    };    
});

form.addEventListener('submit', (event) => {
    if (!email.validity.valid) {
        form.classList.add('cta__form--invalid');
        event.preventDefault();
    };
});