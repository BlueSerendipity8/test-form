// const SURVEY_ID = 1;

const surveyJson = {
  "title": "Questionnaire sur la vivacité de l’imagerie visuelle, version 2 en français of Visual Imagery VVIQ-2-F)",
  "logoPosition": "right",
  "focusFirstQuestionAutomatic": true,
  "completedHtml": "",
  "pages": [
    {
      "name": "page1",
      "description": "\n",
      "elements": [
        {
          "type": "matrix",
          "name": "question1",
          "title": "Imaginez attentivement un(e) ami(e) que vous voyez fréquemment (qui\nn’est pas présent(e) en ce moment)",
          "isRequired": true,
          "columns": [
            {
              "value": "1",
              "text": "Aucune image n’est visible."
            },
            {
              "value": "2",
              "text": "L’image est vague et imprécise"
            },
            {
              "value": "3",
              "text": "L’image est moyennement nette et vivace."
            },
            {
              "value": "4",
              "text": "L’image est relativement nette, presque aussi précise et vivace qu’une perception."
            },
            {
              "value": "5",
              "text": "L’image est parfaitement nette, aussi précise et vivace qu’une véritable perception."
            }
          ],
          "rows": [
            {
              "value": "Row 1",
              "text": "Le contour exact de son visage, de sa tête, de ses épaules et de son corps"
            },
            {
              "value": "Row 2",
              "text": "Les positions de sa tête, les postures de son corps, etc"
            },
            {
              "value": "Row 3",
              "text": "Sa démarche précise, la longueur de ses pas, etc. lorsqu’il (elle) marche :"
            },
            {
              "value": "Row 4",
              "text": "Les différentes couleurs de certains de ses vêtements habituels :"
            }
          ],
          "isAllRowRequired": true
        },
        {
          "type": "matrix",
          "name": "question2",
          "title": "Imaginez le lever du soleil. Analysez attentivement l’image qui apparaît",
          "isRequired": true,
          "columns": [
            {
              "value": "1",
              "text": "Aucune image n’est visible."
            },
            {
              "value": "2",
              "text": "L’image est vague et imprécise"
            },
            {
              "value": "3",
              "text": "L’image est moyennement nette et vivace."
            },
            {
              "value": "4",
              "text": "L’image est relativement nette, presque aussi précise et vivace qu’une perception."
            },
            {
              "value": "5",
              "text": "L’image est parfaitement nette, aussi précise et vivace qu’une véritable perception."
            }
          ],
          "rows": [
            {
              "value": "Row 1",
              "text": "Le soleil se lève à l’horizon dans un ciel brumeux"
            },
            {
              "value": "Row 2",
              "text": "Le ciel s’éclaircit et entoure le soleil de bleu"
            },
            {
              "value": "Row 3",
              "text": "Nuages. Une tempête éclate avec des éclairs"
            },
            {
              "value": "Row 4",
              "text": "Un arc-en-ciel apparaît"
            }
          ],
          "isAllRowRequired": true
        },
        {
          "type": "matrix",
          "name": "question3",
          "title": "Imaginez un magasin dans lequel vous allez souvent. Analysez en détail\nl’image qui vous vient à l’esprit",
          "isRequired": true,
          "columns": [
            {
              "value": "1",
              "text": "Aucune image n’est visible."
            },
            {
              "value": "2",
              "text": "L’image est vague et imprécise"
            },
            {
              "value": "3",
              "text": "L’image est moyennement nette et vivace."
            },
            {
              "value": "4",
              "text": "L’image est relativement nette, presque aussi précise et vivace qu’une perception."
            },
            {
              "value": "5",
              "text": "L’image est parfaitement nette, aussi précise et vivace qu’une véritable perception."
            }
          ],
          "rows": [
            {
              "value": "Row 1",
              "text": "La devanture du magasin qui se trouve de l’autre côté de la rue"
            },
            {
              "value": "Row 2",
              "text": "Une vitrine avec les couleurs, la forme et les détails des articles en vente"
            },
            {
              "value": "Row 3",
              "text": "Vous êtes proche de l’entrée. La couleur, la forme et les détails de la porte"
            },
            {
              "value": "Row 4",
              "text": "Vous entrez dans le magasin et vous allez vers la caisse. Le commerc¸ant vous sert. Vous lui donnez l’argent qu’il prend"
            }
          ],
          "isAllRowRequired": true
        },
        {
          "type": "matrix",
          "name": "question4",
          "title": "Imaginez une scène de campagne avec des arbres, des montagnes, un\nlac. Analysez, en détail, les images que vous visualisez en esprit",
          "isRequired": true,
          "columns": [
            {
              "value": "1",
              "text": "Aucune image n’est visible."
            },
            {
              "value": "2",
              "text": "L’image est vague et imprécise"
            },
            {
              "value": "3",
              "text": "L’image est moyennement nette et vivace."
            },
            {
              "value": "4",
              "text": "L’image est relativement nette, presque aussi précise et vivace qu’une perception."
            },
            {
              "value": "5",
              "text": "L’image est parfaitement nette, aussi précise et vivace qu’une véritable perception."
            }
          ],
          "rows": [
            {
              "value": "Row 1",
              "text": "Les contours du paysage"
            },
            {
              "value": "Row 2",
              "text": "La couleur et la forme des arbres"
            },
            {
              "value": "Row 3",
              "text": "La couleur et la forme du lac"
            },
            {
              "value": "Row 4",
              "text": "Un vent fort s’abat sur les arbres et sur le lac en produisant des vagues"
            }
          ],
          "isAllRowRequired": true
        }
      ]
    },
    // {
    //   "name": "page2",
    //   "title": "Avec les yeux fermés",
    //   "description": "\n",
    //   "elements": [
    //     {
    //       "type": "matrix",
    //       "name": "question5",
    //       "title": "Imaginez attentivement un(e) ami(e) que vous voyez fréquemment (qui\nn’est pas présent(e) en ce moment)",
    //       "isRequired": true,
    //       "columns": [
    //         {
    //           "value": "1",
    //           "text": "Aucune image n’est visible."
    //         },
    //         {
    //           "value": "2",
    //           "text": "L’image est vague et imprécise"
    //         },
    //         {
    //           "value": "3",
    //           "text": "L’image est moyennement nette et vivace."
    //         },
    //         {
    //           "value": "4",
    //           "text": "L’image est relativement nette, presque aussi précise et vivace qu’une perception."
    //         },
    //         {
    //           "value": "5",
    //           "text": "L’image est parfaitement nette, aussi précise et vivace qu’une véritable perception."
    //         }
    //       ],
    //       "rows": [
    //         {
    //           "value": "Row 1",
    //           "text": "Le contour exact de son visage, de sa tête, de ses épaules et de son corps"
    //         },
    //         {
    //           "value": "Row 2",
    //           "text": "Les positions de sa tête, les postures de son corps, etc"
    //         },
    //         {
    //           "value": "Row 3",
    //           "text": "Sa démarche précise, la longueur de ses pas, etc. lorsqu’il (elle) marche :"
    //         },
    //         {
    //           "value": "Row 4",
    //           "text": "Les différentes couleurs de certains de ses vêtements habituels :"
    //         }
    //       ],
    //       "isAllRowRequired": true
    //     },
    //     {
    //       "type": "matrix",
    //       "name": "question6",
    //       "title": "Imaginez le lever du soleil. Analysez attentivement l’image qui apparaît",
    //       "isRequired": true,
    //       "columns": [
    //         {
    //           "value": "1",
    //           "text": "Aucune image n’est visible."
    //         },
    //         {
    //           "value": "2",
    //           "text": "L’image est vague et imprécise"
    //         },
    //         {
    //           "value": "3",
    //           "text": "L’image est moyennement nette et vivace."
    //         },
    //         {
    //           "value": "4",
    //           "text": "L’image est relativement nette, presque aussi précise et vivace qu’une perception."
    //         },
    //         {
    //           "value": "5",
    //           "text": "L’image est parfaitement nette, aussi précise et vivace qu’une véritable perception."
    //         }
    //       ],
    //       "rows": [
    //         {
    //           "value": "Row 1",
    //           "text": "Le soleil se lève à l’horizon dans un ciel brumeux"
    //         },
    //         {
    //           "value": "Row 2",
    //           "text": "Le ciel s’éclaircit et entoure le soleil de bleu"
    //         },
    //         {
    //           "value": "Row 3",
    //           "text": "Nuages. Une tempête éclate avec des éclairs"
    //         },
    //         {
    //           "value": "Row 4",
    //           "text": "Un arc-en-ciel apparaît"
    //         }
    //       ],
    //       "isAllRowRequired": true
    //     },
    //     {
    //       "type": "matrix",
    //       "name": "question7",
    //       "title": "Imaginez un magasin dans lequel vous allez souvent. Analysez en détail\nl’image qui vous vient à l’esprit",
    //       "isRequired": true,
    //       "columns": [
    //         {
    //           "value": "1",
    //           "text": "Aucune image n’est visible."
    //         },
    //         {
    //           "value": "2",
    //           "text": "L’image est vague et imprécise"
    //         },
    //         {
    //           "value": "3",
    //           "text": "L’image est moyennement nette et vivace."
    //         },
    //         {
    //           "value": "4",
    //           "text": "L’image est relativement nette, presque aussi précise et vivace qu’une perception."
    //         },
    //         {
    //           "value": "5",
    //           "text": "L’image est parfaitement nette, aussi précise et vivace qu’une véritable perception."
    //         }
    //       ],
    //       "rows": [
    //         {
    //           "value": "Row 1",
    //           "text": "La devanture du magasin qui se trouve de l’autre côté de la rue"
    //         },
    //         {
    //           "value": "Row 2",
    //           "text": "Une vitrine avec les couleurs, la forme et les détails des articles en vente"
    //         },
    //         {
    //           "value": "Row 3",
    //           "text": "Vous êtes proche de l’entrée. La couleur, la forme et les détails de la porte"
    //         },
    //         {
    //           "value": "Row 4",
    //           "text": "Vous entrez dans le magasin et vous allez vers la caisse. Le commerc¸ant vous sert. Vous lui donnez l’argent qu’il prend"
    //         }
    //       ],
    //       "isAllRowRequired": true
    //     },
    //     {
    //       "type": "matrix",
    //       "name": "question8",
    //       "title": "Imaginez une scène de campagne avec des arbres, des montagnes, un\nlac. Analysez, en détail, les images que vous visualisez en esprit",
    //       "isRequired": true,
    //       "columns": [
    //         {
    //           "value": "1",
    //           "text": "Aucune image n’est visible."
    //         },
    //         {
    //           "value": "2",
    //           "text": "L’image est vague et imprécise"
    //         },
    //         {
    //           "value": "3",
    //           "text": "L’image est moyennement nette et vivace."
    //         },
    //         {
    //           "value": "4",
    //           "text": "L’image est relativement nette, presque aussi précise et vivace qu’une perception."
    //         },
    //         {
    //           "value": "5",
    //           "text": "L’image est parfaitement nette, aussi précise et vivace qu’une véritable perception."
    //         }
    //       ],
    //       "rows": [
    //         {
    //           "value": "Row 1",
    //           "text": "Les contours du paysage"
    //         },
    //         {
    //           "value": "Row 2",
    //           "text": "La couleur et la forme des arbres"
    //         },
    //         {
    //           "value": "Row 3",
    //           "text": "La couleur et la forme du lac"
    //         },
    //         {
    //           "value": "Row 4",
    //           "text": "Un vent fort s’abat sur les arbres et sur le lac en produisant des vagues"
    //         }
    //       ],
    //       "isAllRowRequired": true
    //     }
    //   ]
    // }
  ],
  "showQuestionNumbers": "off"
};

const survey = new Survey.Model(surveyJson);

function alertResults (sender) {
    console.log(sender.data);
    let totalScore = 0;
    for (const question of Object.values(sender.data)) {
      for (const value of Object.values(question)) {
        totalScore += parseInt(value); // Convert the string value to an integer and add to the total sum
      }
    }
    displayResults(totalScore);
}

function displayResults(score) {
  var resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = `
        <h3>Resultats</h3>
        <p>Score final: ${score} (min : 16, max : 80)</p>
        <p>Certains auteurs considèrent qu’une personne est aphantasique si son score est inférieur ou égal à 32 (Wicken et al., 2021 ; Kay et al., 2022 ; Dance et al., 2021b ; Liu et al., 2023) mais il n’y a pas de consensus. D’autres études considèrent que le score seuil de l’aphantasie est, par exemple, 23 (Monzel et al., 2023 ; Zeman et al., 2020) ou encore 25 (Bainbridge et al., 2021 ; Pounder et al., 2022).</p>
        <p>Une aphantasie extrême est également caractérisée par un score minimal au VVIQ par Zeman et al., 2020. Dans la population générale, le score moyen au VVIQ serait de 59,2 avec un écart-type de 11,07 (McKelvie, 1995).</p>
    `;
}

survey.onComplete.add(alertResults);

document.addEventListener("DOMContentLoaded", function() {
    survey.render(document.getElementById("surveyContainer"));
});
