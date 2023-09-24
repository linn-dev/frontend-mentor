const getSignup = document.querySelector('.signup-state');
const getSuccess= document.querySelector('.success-state');
const getSubBtn = document.querySelector('.sub-btn');
const getDisBtn = document.querySelector('.dis-btn');
const sentEmail = document.querySelector('.sub-email');

document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    
    const getEmail = document.getElementById('email').value;    
    // console.log(getEmail);

    localStorage.setItem('email',getEmail); // key & value 

    getSignup.classList.add('hidden');
    getSuccess.classList.remove('hidden');

    sentEmail.textContent = localStorage.getItem('email');
});

getDisBtn.addEventListener('click', function(e){
    e.preventDefault();

    getSignup.classList.remove('hidden');
    getSuccess.classList.add('hidden');
});