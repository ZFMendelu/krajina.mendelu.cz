import './matterport';

const axios = require('axios').default;

let surveySpots = document.querySelectorAll(".survey-results")

import Siema from 'siema';


function onSlideChange() {
    const slide = this.currentSlide
    console.log(slide)
    const dots = document.querySelectorAll('.siema-dot');
    dots.forEach((sdot, n)=> {
        sdot.classList.remove('selected')
        if (n === slide) {
            sdot.classList.add('selected')
        }
    })
}


for (const spot of surveySpots) {
    let key = spot.getAttribute('data-key')
    let locale = spot.getAttribute('data-locale')
    console.log(key)
    axios.get("/data/survey-results/"+locale+"/"+key)
    .then( (response) => {
        spot.innerHTML = response.data

        const surveySiema = new Siema({
            selector: '.survey-slider',
            duration: 200,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: true,
            rtl: false,
            onInit: onSlideChange,
            onChange: onSlideChange,
        });

        const prev = document.querySelector('.siema-prev');
        const next = document.querySelector('.siema-next');
        const dots = document.querySelectorAll('.siema-dot');
        prev.addEventListener('click', () => surveySiema.prev());
        next.addEventListener('click', () => surveySiema.next());
        dots.forEach((dot, n)=>{
            dot.addEventListener('click', () => surveySiema.goTo(n))
        })



        // renderResults( response.data['data']['survey_data']['questions'], spot );
    });
}



