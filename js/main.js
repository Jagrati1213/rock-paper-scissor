let user_choices = document.querySelectorAll('.choice');

let display_user_score = document.getElementById('userScoreVal');
let display_comp_score = document.getElementById('compScoreVal');

let display_user_choice = document.querySelector('#result-user-stat');
let display_comp_choice = document.querySelector('#result-comp-stat');
let display_winner = document.querySelector('#result-final-stat');

let user_score =0;
let comp_score =0;

//Start game
function gameStart(event){
    
    let comp_array = ['rock','paper','scissor'];
    let comp_index = Math.floor(Math.random()*3);

    let user_select = event.target.id; //get user val
    let comp_select =  comp_array[comp_index]; //get comp val

    //call winning()
    winnerCondition(user_select,comp_select);
}

//Logic for winning
function winnerCondition(user,comp){

    //user-winning
    if(user=='paper' && comp =='rock'
    ||user=='scissor'&& comp =='paper'
    ||user =='rock'  && comp =='scissor')
    {
        display_comp_choice.innerHTML = `${comp}`;
        display_user_choice.innerHTML = `${user}`;
        display_winner.innerHTML = `User`;
        display_user_score.innerHTML = ++user_score;
        display_comp_score.innerHTML = comp_score;

    }
    //Comp-winning
    else if(comp=='paper' && user =='rock'
         ||comp=='scissor'&& user =='paper'
         ||comp =='rock'  && user =='scissor')
         {
           display_comp_choice.innerHTML = `${comp}`;
           display_user_choice.innerHTML = `${user}`;
           display_winner.innerHTML = `Computer`;
           display_user_score.innerHTML = user_score;
           display_comp_score.innerHTML = ++comp_score;
    }
    //Tie-match
    else{

        display_comp_choice.innerHTML = `${comp}`;
        display_user_choice.innerHTML = `${user}`;
        display_winner.innerHTML = 'Tie Match';
        display_user_score.innerHTML = user_score;
        display_comp_score.innerHTML = comp_score;
    }
}

//Audio start
function audioStart(){
    let step_audio = new Audio('./sound/step.wav');
    step_audio.play();
}

//call the start() & audio()
user_choices.forEach(user => {user.addEventListener('click',(event)=>{
    gameStart(event);
    audioStart();

    //set animation on click
    user.style.animation = 'swing ease-in-out .2s';
    setTimeout(()=>{
        user.style.animation = 'none';
    },1000)
  })
});