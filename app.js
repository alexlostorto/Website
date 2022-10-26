const introElement = document.querySelector('.intro');

const logoElement = document.querySelector('.logo-header');

const logoSpan = document.querySelectorAll('.logo');

const quoteElement = document.querySelector('.quote');



quotes = [

    'Enjoy the little things',

    'Sm;)e',

    'Hello there!',

    'Nice to meet you!',

    'I hope we meet again :)',

    '/ᐠ ̥  ̮  ̥ ᐟ\\ฅ'

]



window.addEventListener('DOMContentLoaded', () => {

    // quote = quotes[Math.floor(Math.random() * quotes.length)];

    // quoteElement.textContent = quote;



    setTimeout(() => {

        logoSpan.forEach((span, index) => {

            setTimeout(() => {

                span.classList.add('active');

            }, (index + 1) * 400)

        });



        setTimeout(() => {

            logoSpan.forEach((span, index) => {

                setTimeout(() => {

                    span.classList.remove('active');

                    span.classList.add('fade');

                }, (index + 1) * 300)

            })

        }, 2000)



        setTimeout(() => {

            introElement.style.top = '-100vh';

        }, 2500)

    })

});
