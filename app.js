const burger = document.querySelector('.burger');
const navSelect = document.querySelector('.nav-select');

burger.addEventListener('click', () => {
    navSelect.classList.toggle('active');
    burger.classList.toggle('toggle');
});
