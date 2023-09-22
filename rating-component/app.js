const ratingCardMain = document.querySelector('.rating__card.main');
const ratingCardTh = document.querySelector('.rating__card.thank');
const submitBtn = document.querySelector('.submitbtn');
const ratingBtns = document.querySelectorAll('.rt-btn');
const ratedValue = document.querySelector('.result')


submitBtn.addEventListener('click' , ()=> {
    ratingCardMain.classList.add('hidden');
    ratingCardTh.classList.remove('hidden');
});

ratingBtns.forEach(function(ratingBtn,idx){
    ratingBtn.addEventListener('click', ()=> {
        ratedValue.innerText = idx + 1;
    })
})