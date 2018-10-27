var questions = [{
    "question": "Thủ đô việt nam là ?",
    "option1": "Hà Nội",
    "option2": "TP.HCM",
    "option3": "Đà Nẵng",
    "option4": "Hải Phòng",
    "answer": "1"
}, {
    "question": "Việt Nam có bao nhiêu tỉnh thành",
    "option1": "50",
    "option2": "60",
    "option3": "70",
    "option4": "63",
    "answer": "4"
}, {
    "question": "Việt Nam có bao nhiêu dân tộc?",
    "option1": "24",
    "option2": "54",
    "option3": "63",
    "option4": "62",
    "answer": "2"
}, {
    "question": "Quốc khánh của Việt Nam là ngày bao nhiêu?",
    "option1": "2/9/1945",
    "option2": "3/9/1946",
    "option3": "7/5/1954",
    "option4": "30/9/1975",
    "answer": "1"
}];

var otp1 = document.getElementById("otp1");
var otp2 = document.getElementById("otp2");
var otp3 = document.getElementById("otp3");
var otp4 = document.getElementById("otp4");

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var next_btn = document.getElementById("nextButton");
var contentResult = document.getElementById("result");

var currentQues = 0;
var totalQues = questions.length;
function LoadQuestion(questionIndex) {
    var ques = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1)+ '. '  +ques.question;
    otp1.textContent = ques.option1;
    otp2.textContent = ques.option2;
    otp3.textContent = ques.option3;
    otp4.textContent = ques.option4;

}

function LoadNextQuestion() {
    var answer;
    console.log(questions[currentQues].answer);
    // var selectOption = document.querySelector("input[radio]:checked");
     var selectOption = document.getElementsByClassName("1");
    for (var i = 0; i < selectOption.length; i++) {
        if (selectOption[i].checked){
          answer = selectOption[i].value;
        }
    }
    if (questions[currentQues].answer == answer){
        currentQues ++;
    }else {
        alert("Sai rồi");
        return;
    }

    if (currentQues == totalQues - 1){
        next_btn.textContent = "Kết thúc";
    }
    if (currentQues == totalQues){
        container.style.display = "none";
        contentResult.style.display = "block";
        contentResult.innerHTML ="<img width='500px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png' />"
        return;

    }
    LoadQuestion(currentQues)
}
LoadQuestion(currentQues);