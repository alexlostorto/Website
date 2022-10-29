const introElement = document.querySelector('.intro');
const logoElement = document.querySelector('.logo-header');
const logoSpan = document.querySelectorAll('.logo');
const categories = document.querySelectorAll('.category');
const quoteElement = document.querySelector('.quote');
const aboutCategory = document.querySelector('.about');
const projectsCategory = document.querySelector('.projects');
const aboutPage = document.querySelector('.about-page');
const projectsPage = document.querySelector('.projects-page');

quotes = [
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

window.addEventListener('DOMContentLoaded', () => {
    // quote = quotes[Math.floor(Math.random() * quotes.length)];
    // quoteElement.textContent = quote;

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
            console.log("clicked")
            fadeIntro();
            aboutPage.classList.add('active');
        });

        projectsCategory.addEventListener('click', function() {
            fadeIntro();
            projectsPage.classList.add('active');
        });
    })
});
