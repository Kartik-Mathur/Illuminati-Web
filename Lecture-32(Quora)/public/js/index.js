const loginBtn = document.querySelector('.loginBtn');
const signupBtn = document.querySelector('.signupBtn');

const login = document.querySelector('.login');
const signup = document.querySelector('.signup');

signup.classList.add('hide');

loginBtn.addEventListener('click',()=>{
    login.classList.add('show');
    signup.classList.add('hide');
    signup.classList.remove('show');
})

signupBtn.addEventListener('click',()=>{
    login.classList.add('hide');
    signup.classList.add('show');
    login.classList.remove('show');
})
