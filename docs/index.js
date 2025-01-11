// const SURVEY_ID = 1;

const surveyJson = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "title": "Imaginez attentivement un(e) ami(e) que vous voyez fréquemment (qui\nn’est pas présent(e) en ce moment)",
      "description": "\n",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question1",
          "title": "Le contour exact de son visage, de sa tête, de ses épaules et de son corps",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Pas d'image du tout, je \"sais\" juste que j'y pense"
            },
            {
              "value": "Item 2",
              "text": "Vague et flou"
            },
            {
              "value": "Item 3",
              "text": "Modérément clair et net"
            },
            {
              "value": "Item 4",
              "text": "Clair et raisonnablement net"
            },
            {
              "value": "Item 5",
              "text": "Parfaitement clair et aussi net que si c'était devant moi"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "question2",
          "title": "Les positions de sa tête, les postures de son corps, etc. :",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Pas d'image du tout, je \"sais\" juste que j'y pense"
            },
            {
              "value": "Item 2",
              "text": "Vague et flou"
            },
            {
              "value": "Item 3",
              "text": "Modérément clair et net"
            },
            {
              "value": "Item 4",
              "text": "Clair et raisonnablement net"
            },
            {
              "value": "Item 5",
              "text": "Parfaitement clair et aussi net que si c'était devant moi"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "question3",
          "title": "Sa démarche précise, la longueur de ses pas, etc. lorsqu’il (elle) marche :",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Pas d'image du tout, je \"sais\" juste que j'y pense"
            },
            {
              "value": "Item 2",
              "text": "Vague et flou"
            },
            {
              "value": "Item 3",
              "text": "Modérément clair et net"
            },
            {
              "value": "Item 4",
              "text": "Clair et raisonnablement net"
            },
            {
              "value": "Item 5",
              "text": "Parfaitement clair et aussi net que si c'était devant moi"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "question4",
          "title": "Les différentes couleurs de certains de ses vêtements habituels :",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Pas d'image du tout, je \"sais\" juste que j'y pense"
            },
            {
              "value": "Item 2",
              "text": "Vague et flou"
            },
            {
              "value": "Item 3",
              "text": "Modérément clair et net"
            },
            {
              "value": "Item 4",
              "text": "Clair et raisonnablement net"
            },
            {
              "value": "Item 5",
              "text": "Parfaitement clair et aussi net que si c'était devant moi"
            }
          ]
        }
      ]
    },
    {
      "name": "page2",
      "title": "Imaginez le lever du soleil. Analysez attentivement l’image qui apparaît",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question6",
          "title": "Le soleil se lève à l’horizon dans un ciel brumeux :",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Pas d'image du tout, je \"sais\" juste que j'y pense"
            },
            {
              "value": "Item 2",
              "text": "Vague et flou"
            },
            {
              "value": "Item 3",
              "text": "Modérément clair et net"
            },
            {
              "value": "Item 4",
              "text": "Clair et raisonnablement net"
            },
            {
              "value": "Item 5",
              "text": "Parfaitement clair et aussi net que si c'était devant moi"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "question5",
          "title": "Le ciel s’éclaircit et entoure le soleil de bleu :",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Pas d'image du tout, je \"sais\" juste que j'y pense"
            },
            {
              "value": "Item 2",
              "text": "Vague et flou"
            },
            {
              "value": "Item 3",
              "text": "Modérément clair et net"
            },
            {
              "value": "Item 4",
              "text": "Clair et raisonnablement net"
            },
            {
              "value": "Item 5",
              "text": "Parfaitement clair et aussi net que si c'était devant moi"
            }
          ]
        }
      ]
    }
  ]
};

const survey = new Survey.Model(surveyJson);

function alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //     "https://your-web-service.com/" + SURVEY_ID,
    //     sender.data
    // )
}

survey.onComplete.add(alertResults);

document.addEventListener("DOMContentLoaded", function() {
    survey.render(document.getElementById("surveyContainer"));
});

// function saveSurveyResults(url, json) {
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=UTF-8'
//         },
//         body: JSON.stringify(json)
//     })
//     .then(response => {
//         if (response.ok) {
//             // Handle success
//         } else {
//             // Handle error
//         }
//     })
//     .catch(error => {
//         // Handle error
//     });
// }
