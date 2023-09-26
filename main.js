const wrapper = document.querySelector('.wrapper');
const signuplink = document.querySelector('.signup-link');
const signinlink = document.querySelector('.signin-link');

signuplink.addEventListener('click', function(){
  wrapper.classList.add('animate-signin');
  wrapper.classList.remove('animate-signup');
})

signinlink.addEventListener('click', function(){
  wrapper.classList.add('animate-signup');
  wrapper.classList.remove('animate-signin');
})