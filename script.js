const questions = [{
    'que': 'How many CENTURIES does MS Dhoni have in ODIs?',
        'A': 10,
        'B': 12,
        'C': 15,
        'D': 18,
        'answer': 'A'
},
{
    'que': 'Who is the only player to have scored 100 international centuries?',
        'A': 'Sachin Tendulkar',
        'B': 'Ricky Ponting',
        'C': 'Brian Lara',
        'D': 'Virat Kohli',
        'answer': 'A'
},
{
    'que': "Who is the greatest finisher in cricket history?",
        'A': 'MS Dhoni',
        'B': 'Michael Bevan',
        'C': 'AB de Villiers',
        'D': 'Mark Waugh',
        'answer': 'A'
},
{
    'que': 'Which country won the first ICC Cricket World Cup in 1975?',
        'A': 'India',
        'B': 'West Indies',
        'C': 'Australia',
        'D': 'England',
        'answer': 'B'
},
{
    'que': 'Who holds the record for the highest individual score in a One Day International (ODI)?',
        'A': 'Sachin Tendulkar',
        'B': 'Rohit Sharma',
        'C': 'Virat Kohli',
        'D': 'AB de Villiers',
        'answer': 'B'
},
{
    'que': 'Which bowler has taken the most wickets in Test cricket?',
        'A': 'Shane Warne',
        'B': 'Muttiah Muralitharan',
        'C': 'Anil Kumble',
        'D': 'Glenn McGrath',
        'answer': 'B'
},
{
    'que': 'Who is the fastest player to score 8000 runs in ODIs?',
        'A': 'Virat Kohli',
        'B': 'AB de Villiers',
        'C': 'Sachin Tendulkar',
        'D': 'Rohit Sharma',
        'answer': 'A'
}]

let index=0;
let total=questions.length;
let  right=0, wrong=0;

const quesBox=document.getElementById('quesBox')
const optionInputs=document.querySelectorAll('.option')
const loadQuestion = () => {
    if (index===total){
        return endQuiz()
    }
    reset()
    const data=questions[index]
    quesBox.innerText=` ${index+1}) ${data.que}`;
    
    optionInputs[0].nextElementSibling.innerText=data.A;
    optionInputs[1].nextElementSibling.innerText=data.B;
    optionInputs[2].nextElementSibling.innerText=data.C;
    optionInputs[3].nextElementSibling.innerText=data.D;
    
}

const submitQuiz =() => {
    const data=questions[index];
    const ans=getAnswer()
    if (ans == data.answer){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let ans;
    optionInputs.forEach((input) => {
        if (input.checked) {
            ans = input.value;
        }
    });
    return ans;
}
const reset = () => {
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz = () => {
    document.getElementById('box').innerHTML = `
        
        <h2> Your score = ${right} / ${total} are correct</h2>
        <h2> You answered ${wrong} questions incorrectly</h2>
        <h2> Your score percentage = ${(right / total) * 100}%</h2>
        <h2>Click the button below to play again!</h2>
        <button class="btn" onclick="location.reload()">Play Again</button>
        <h3 id="tk">Thank you for playing the quiz!</h3>
    `;

    document.getElementById('btn').style.display = 'none'; 
}

loadQuestion();