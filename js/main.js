let links = document.querySelectorAll('.header-menu__list > li');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
    }
}

// Slide
const slidesDreamTeam = document.querySelectorAll('.certificate__slide'),
      scrollbarsDreamTeam = document.querySelectorAll('.certificate__scrollbar');

let index = 0;

const activeSlide = n => {
    for(dreamTeam__slide of slidesDreamTeam){
        dreamTeam__slide.classList.remove('active');
    }
    slidesDreamTeam[n].classList.add('active');
}

const activeDot = n => {
    for(dreamTeam__scrollbar of scrollbarsDreamTeam) {
        dreamTeam__scrollbar.classList.remove('active');
    }
    scrollbarsDreamTeam[n].classList.add('active');
}

const prepareCurrentSlideDreamTeam = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlideDreamTeam = () => {
    if(index == slidesDreamTeam.length - 1){
        index = 0;
        prepareCurrentSlideDreamTeam(index);
    }else{
        index++;
        prepareCurrentSlideDreamTeam(index);
    }
};
const prevSlideDreamTeam = () => {
    if(index == 0){
        index = slidesDreamTeam.length - 1;
        prepareCurrentSlideDreamTeam(index);
    }else{
        index--;
        prepareCurrentSlideDreamTeam(index);
    }
};

scrollbarsDreamTeam.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlideDreamTeam(index);
        clearInterval(intervalDreamTeam);
    })
});
const intervalDreamTeam = setInterval(nextSlideDreamTeam, 3500);