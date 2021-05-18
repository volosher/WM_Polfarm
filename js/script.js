
document.addEventListener("DOMContentLoaded", myFunc);

function myFunc() {
    menuToggle();
    langChange();
    flip()
}




function menuToggle() {
    const element = document.querySelector('.menu__body');
    const target = document.querySelector('.menu__icon');

    target.addEventListener('click', toggleClass);

    function toggleClass() {
        element.classList.toggle('active');
        target.classList.toggle('active');

    }

}

function langChange() {

    let languages = document.querySelectorAll('.languages__link');

    for (let i = 0; i<languages.length; i++) {

        languages[i].addEventListener('click', (event) => {
            event.preventDefault();
            if (languages[i].classList.contains('active-lang')) {
                return false
            } else {
                languages.forEach((elem) => {
                    elem.classList.remove('active-lang');
                });
                languages[i].classList.add('active-lang');

            }
        })
    }
}








;


function flip() {
    const targs = document.querySelectorAll('.orders-card__header__img');
    const flipCards = document.querySelectorAll('.flip-card-inner');

    for (let i = 0; i<targs.length; i++) {
        targs[i].addEventListener('click', (event) => {
            event.preventDefault();
            flipCards[i].classList.toggle('active_flip');
        })
    }

}


;




function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }

});




function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }

}

ibg();

