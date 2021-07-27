import './matterport';

const axios = require('axios').default;

let surveySpots = document.querySelectorAll(".survey-results")


function renderResults(questions, spot) {
    console.log(questions)

    questions.forEach((question)=> {
        console.log(question)
    })
}

for (const spot of surveySpots) {
    let key = spot.getAttribute('data-key')
    console.log(key)
    axios.get("http://127.0.0.1:8000/data/survey-results/"+key)
    .then( (response) => {
        renderResults( response.data['data']['survey_data']['questions'], spot );
    });
}



