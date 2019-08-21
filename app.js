const navSlide = () => {
        const middlesec = document.querySelector('.middlesec');
        const nav = document.querySelector('.navlinks');

        middlesec.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
        })
    } // 21:40