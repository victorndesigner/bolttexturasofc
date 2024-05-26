let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
menu.classList.toggle('bx-x');
navlist.classList.toggle('open')
}

window.addEventListener('scroll', () => {
    let currentSection = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === currentSection) {
            item.classList.add('active');
        }
    });
});

document.querySelector('.scroll a').addEventListener('click', function(e) {
    e.preventDefault();
    let currentSection = '';
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    let nextSection = '';
    sections.forEach((section, index) => {
        if (section.getAttribute('id') === currentSection && index < sections.length - 1) {
            nextSection = sections[index + 1].getAttribute('id');
        }
    });

    if (nextSection) {
        const targetSection = document.querySelector(`#${nextSection}`);
        const offsetTop = targetSection.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
});

