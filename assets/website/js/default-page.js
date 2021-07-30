

const axios = require('axios').default;
let surveySpots = document.querySelectorAll(".survey-results")



for (const spot of surveySpots) {
    let key = spot.getAttribute('data-key')
    let locale = spot.getAttribute('data-locale')
    let max = spot.getAttribute('data-max')
    console.log(key)
    axios.get("/data/survey-results/"+locale+"/"+key+"/"+max+"/plain")
    .then( (response) => {
        spot.innerHTML = response.data

        // renderResults( response.data['data']['survey_data']['questions'], spot );
    });
}



