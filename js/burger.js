document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.burger');
    const menu = document.querySelector('#menu');
    let isOpen = false;

    window.addEventListener('resize', () => {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 800) {
            menu.classList.remove('burger-menu');
        } else if (isOpen === true) {
            menu.classList.add('burger-menu');
        }
    });
    
    button.addEventListener('click', (event) => {
        console.log('Hei, jeg ble trykket');

        if (isOpen === false) {
            menu.classList.add('burger-menu');
            isOpen = true;
        } else {
            menu.classList.remove('burger-menu');
            isOpen = false;
        }
    })

})