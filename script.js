const wrapper = document.querySelector('.wrapper');
const signupLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

signupLink.addEventListener('click', ()=> {
    wrapper.classList.add('signup-click');
});


loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('signup-click');
});