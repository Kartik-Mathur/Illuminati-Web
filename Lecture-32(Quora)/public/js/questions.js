const addQuestion = document.querySelector('#addQuestion');
const q = document.querySelector('#question');
const questionList = document.querySelector('.questionList');
const userId = document.querySelector('#userId').getAttribute('userId');

function questionToDom(question){
    const li = document.createElement('li');
    li.innerText = question.question;
    questionList.appendChild(li);
}

async function loadInitialQuestions(){
    try{
        let questions = await axios.get(`/getquestions?userId=${userId}`);
        console.log(questions);
        questions.data.forEach(element => {
            questionToDom(element);
        });
    }catch(err){
        throw new Error("Initially Questions load krte time sab fatt gaya");
    }
}
loadInitialQuestions();

addQuestion.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log(q.value);
    let userId =e.target.previousElementSibling.getAttribute('userId');
    console.log(userId);
    try {
        let data = await axios.post('/addquestion',
        {
            question: q.value,
            userId: userId
        });
        console.log(data);
        let question = data.data;
        console.log(question);
        questionToDom(question);
    }
    catch(err){
        console.log(err);
        alert(`Question couldn't be added ${err.message}`);
    }
})