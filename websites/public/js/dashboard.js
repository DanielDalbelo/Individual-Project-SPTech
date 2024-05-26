const buttonIndex = document.querySelector("#button_left");
const buttonQuiz = document.querySelector("#button_quiz");

/*Chart's configuration*/ 

const plays = document.getElementById('plays_chart').getContext('2d');
    const finalization = document.getElementById('finalization_chart').getContext('2d');

    new Chart(plays, {
        type: 'line',
        data: {
            labels: ['datas', 'datas', 'datas', 'datas', 'datas', 'datas'],
            datasets: [{
                label: 'Quantidade de tentativas global',
                data: [30, 29, 28, 25, 22, 23],
                borderWidth: 1,
                backgroundColor: 'rgba(50,255,120,0.2)',
                fill: true,
                borderColor: 'rgb(0, 200, 65)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

    new Chart(finalization, {
        type: 'pie',
        data: {
            labels: ['Concluídos', 'Não Concluídos'],
            datasets: [{
                label: 'Desistiram',
                data: [22, 24],
                borderWidth: 1,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
            }, {
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

/*end*/

function indexPage(){
    window.location.assign("index.html");
}

function quizPage(){
    window.location.assign("quiz.html");
}

buttonQuiz.addEventListener("click", quizPage);
buttonIndex.addEventListener("click", indexPage);