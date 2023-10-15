let character = {
    name : "john",
    sanity : 10,
}

let musique = ["sk8ter boi - Avril Lavigne", "Angels - Robbie Williams", "Always you - Louis Tomlinson", "Anissa - Wejdene", "Don't Look Back In Anger - Oasis" ]

let trajet = {
    feuxrouge : 30,
    changements : 0,
}

function operation(max){
    return Math.floor(Math.random() * max) ;
}
 
 for ( let i = 1 ; i < trajet.feuxrouge ; i++) {
    let playlist= operation(5)
    console.log (musique [playlist] )
    console.log (trajet.feuxrouge - i)
    if (musique [playlist] == 'Anissa - Wejdene') {
       character.sanity --
       console.log ( "Aie, coup dur pour John ! Sa sante mentale tombe a " + character.sanity )
       trajet.changements ++
    }
    if (character.sanity <= 0) {
       console.log ("explosion")
       break
    }
    if ( i == 29) {
       console.log ('John est finalement arrive a destination ! ')
       console.log ('Pour rappel, il a quand meme du changer ' + trajet.changements + ' fois de taxi ! ')
       console.log ('Apres, sa sante mentale est que a ' + character.sanity  + ' donc pas une journee incroyable non plus. Mais bon dans le lot il y avait des musiques bien donc ca compense ' )
 }
 }

 