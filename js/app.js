$(document).ready(function (){

    var button = $('#buttonstart');
    var buttonStartingVal = [
        'Lancer le QCM',
        'Passer à la question n°2',
        'Passer à la question n°3',
        'Passer à la question n°4',
        'Passer à la question n°5',
        'Finir le QCM',
        'Voir les résultat'
    ];

    button.text(buttonStartingVal[index]);

    $('.button').delay(8800).fadeIn(1000);

    $('.button').click(function(){

        if (index > 1 && index < 6){

            let answer = $('input[type="checkbox"]:checked').val();
              userAnswers.push(answer);
              $('input[type="checkbox"]').prop('checked',false);
          console.log(userAnswers);

        }
        
        if (index > 0 && index < 6){

            $('.button').hide()

            $('#qcm').hide().delay(3000).fadeIn(500);

            $('#qcm label').each(function(i, label){
              label.innerHTML = answers[index-1][i]['label'];
            });

            $('#qcm input').each(function(i, input){
              input.setAttribute('value', answers[index-1][i]['value']);
            })
              
        }
        
        if(index == 6){
            let answer = $('input[type="checkbox"]:checked').val();
              userAnswers.push(answer);
              console.log(userAnswers);
            $('#qcm').hide();
        }

        if(index == 7){
            $('.button').hide();
        }
        button.text(buttonStartingVal[index]);
    });

    $('input').click(function(){
        $('.button').fadeIn(500);
    });

});