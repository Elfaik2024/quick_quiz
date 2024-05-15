const questions =[
    {
        question: 'what is the capital of France?',
        choix: [ 'Paris','Berlin', 'London','Rome'],
        reponse: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        choix : ['Earth' , 'Mars', 'Venus', 'Jupiter'] ,
        reponse: 'Mars'
    },
    {
        question: 'What is the powerhouse of the cell?',
        choix : [ 'Nucleus', 'Ribosome',  'Mitochondrion', 'Endoplasmic reticulum'],
        reponse: 'Mitochondrion'
    },
];

let index = 0 ;

let score = 0;

let qts = document.getElementById('question');

let form=document.getElementById('form');
let bn = document.getElementById('btn');

function BonneRep(){


    var rep = document.getElementsByClassName('input')
    
   
    for (let j = 0; j< rep.length; j++) {
        
        var element = rep[j];
        console.log(score)
        if (element.checked && questions[index-1].reponse === element.value) {
           score++
          
            
        }

    }

    if ( index=== questions.length ) {
        
        cleanFunction()
       bn.classList.toggle('submit-bn');

        return ''
        
    }
    

    
    cleanFunction()
    
    qts.innerHTML = questions[index].question;
    

    for(let i = 0; i<questions[index].choix.length;i++){
        let input = document.createElement('input');
        input.value= questions[index].choix[i];
        input.type = 'radio'
        input.name = 'radio'
        input.className = 'input'
        let label = document.createElement('label');
        label.innerHTML= input.value ;
        let br = document.createElement('br');
       
        form.appendChild(input);
        form.appendChild(label);
        form.appendChild(br);
    }
            index++

}

function cleanFunction() {
    while (form.firstChild) {
        form.removeChild(form.firstChild);
 
}

qts.innerHTML ='votre score est : ' + score + '/' + questions.length

}

function backquiz(){

    bn.classList.toggle('submit-bn');

    index=0
    BonneRep()

}
