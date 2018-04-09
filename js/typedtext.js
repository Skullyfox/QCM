function createdTyped(strings){
	const options = {
  	 strings: strings,
     typeSpeed: 25,
     fadeOut: true,
     loop: false,
     backSpeed: 30,
  };
  
	return new Typed('#txtheader', options);
}

const texts = [
	["Bonjour !", "Vous êtes actuellement sur une application de QCM, permettant de définir votre profil social !", "Pour commencer, cliquez sur le bouton ci-dessous !"
  ],
  ["Question1 :^300 Quelle est la couleur des bananes (mûre) ? "],
  ["Question2 :^300 "],
  ["Question3 :^300 "],
  ["Question4 :^300 "],
  ["Question5 :^300 "],
  ["Vous avez fini le QCM.^100 Pour voir vos résultats, cliquez sur le bouton ci-dessous."]
];

const answers = [
    [{label : 'Jaunes', value : "a"},{label : 'Bleues', value : "b"},{label : 'Vertes', value : "c"} ],
    [{label : 'fooff', value : "a"},{label : 'bar', value : "b"},{label : 'baz', value : "c"} ],
    [{label : 'foo', value : "a"},{label : 'bar', value : "b"},{label : 'baz', value : "c"} ],
    [{label : 'foo', value : "a"},{label : 'bar', value : "b"},{label : 'baz', value : "c"} ],
    [{label : 'foo', value : "a"},{label : 'bar', value : "b"},{label : 'baz', value : "c"} ],
]



let index = 0,
        typed = createdTyped(texts[index]);
        userAnswers = []; 

$('.button').click(function(){
	index++;
  typed.destroy();
  typed = createdTyped(texts[index]);
});
