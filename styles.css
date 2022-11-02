const introElement = document.querySelector('.intro');
const logoElement = document.querySelector('.logo-header');
const logoSpan = document.querySelectorAll('.logo');
const categories = document.querySelectorAll('.category');
const quoteElement = document.querySelector('.quote');
const aboutCategory = document.querySelector('.about');
const projectsCategory = document.querySelector('.projects');
const aboutPage = document.querySelector('.about-page');
const projectsPage = document.querySelector('.projects-page');
const cursor = document.querySelector('.cursor');

const quotes = [
    'Enjoy the little things',
    'Sm;)e',
    'Hello there!',
    'Nice to meet you!',
    'I hope we meet again :)',
    '/ᐠ ̥  ̮  ̥ ᐟ\\ฅ'
]

function fadeIntro() {
    setTimeout(() => {
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (index + 1) * 300)
        })
    })

    setTimeout(() => {
        introElement.style.top = '-100vh';
    }, 200)
}

let quote = quotes[Math.floor(Math.random() * quotes.length)];
let i = 0;
let speed = 100;

function typewrite() {

    if (i < quote.length) {
        quoteElement.innerHTML += quote.charAt(i);
        i++;
        setTimeout(typewrite, speed);
    } else {
        setTimeout(() => {
            quoteElement.classList.add('fade');
        }, 1000)
    }
}

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-from-top', (cursor.offsetTop - scrollY));
})

window.addEventListener('scroll', () => {
    const fromTop = parseInt(cursor.getAttribute('data-from-top'));
    cursor.style.top = scrollY + fromTop + 'px';
})

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(typewrite, 2000)

    // Check if mobile or desktop 
    let isDesktop = true;
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
        isDesktop = false;
    }

    let isMobile = window.matchMedia("(any-pointer:coarse)").matches;
    if (!isMobile && isDesktop) {
        console.log("Desktop");
        cursor.style.display = 'block';
    } else {
        console.log("Mobile");
    }

    setTimeout(() => {
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 400)
        });

        categories.forEach((category, index) => {
            setTimeout(() => {
                category.classList.add('active');
            }, (index + 1) * 800)
        });

        aboutCategory.addEventListener('click', function() {
            console.log("clicked");
            cursor.style.background = 'black';
            fadeIntro();
            aboutPage.classList.add('active');
        });

        projectsCategory.addEventListener('click', function() {
            cursor.style.background = 'black';
            fadeIntro();
            projectsPage.classList.add('active');
        });
    })
});
