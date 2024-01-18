let QuestionSound = new Audio ("./Sounds/Question.mp3");
QuestionSound.play();

let ques = ['How many wonders are there in the world?' , 'Where is Nidhivan situated?', 'Who was the son of Bali in Ramayan?', 'Which of these are names of national parks located in Madhya Pradesh?'];
let ans = [['5','7','8','9','7'], ['Vrindavan', 'Agra', 'Kashi', 'Prayagraj', 'Vrindavan'], ['Sugreev', 'Nal', 'Neel', 'Angad', 'Angad'], ['Krishna and Kanhaiya', 'Kanha and Madhav', 'Ghanshyam and Murari', 'Girdhar and Gopal','Kanha and Madhav']];
scorelist= [1000,3000,5000, 10000];

let QNumber = 0; 
let question = document.getElementById("question");
question.textContent = ques[QNumber];
let options = document.querySelectorAll(".options");
options[0].textContent = ans[QNumber][0];
options[1].textContent = ans[QNumber][1];
options[2].textContent = ans[QNumber][2];
options[3].textContent = ans[QNumber][3];

let j=0;

let check = 1;

let optionDesign = document.getElementsByClassName("optionDesign");
  
let selected;
let SelectedBox;
for (let i=0;i<options.length;i++){
    optionDesign[i].addEventListener("click", function(){
        selected = options[i].textContent;
        optionDesign[i].style.backgroundColor ="rgb(255, 152, 67)";
        SelectedBox = i;
        setTimeout(function(){
            optionDesign[i].style.backgroundColor ="rgb(43, 0, 85)";
        }, 2000);
    });
}
let score = document.querySelector("#Score");
let TotalScore = parseInt(score.textContent);
// if someone clicks submit button
let Submit = document.getElementById("Submit");
Submit.addEventListener("click", function(){
    TotalScore=TotalScore+scorelist[QNumber];
    if (selected == ans[QNumber][4]){
        QuestionSound = new Audio ("./Sounds/Correct.mp3");
        QuestionSound.play();
        optionDesign[SelectedBox].style.backgroundColor = "yellowgreen";
        setTimeout(function(){
            score.textContent = TotalScore;
            if(QNumber==ques.length-1){
                QuestionSound = new Audio ("./Sounds/Winner.mp3");
                QuestionSound.play();
                question.textContent = "You Won";
                optionDesign[0].textContent = "You Won";
                optionDesign[1].textContent = "You Won";
                optionDesign[2].textContent = "You Won";
                optionDesign[3].textContent = "You Won";
                let SubmitRemove = document.getElementById("Submit");
                SubmitRemove.remove();
            }else{
                QuestionSound = new Audio ("./Sounds/Question.mp3");
                QuestionSound.play();
                QNumber = QNumber+1;
                question.textContent = ques[QNumber];
                options[0].textContent = ans[QNumber][0];
                options[1].textContent = ans[QNumber][1];
                options[2].textContent = ans[QNumber][2];
                options[3].textContent = ans[QNumber][3];
            }
            optionDesign[i].style.backgroundColor ="rgb(43, 0, 85)";
        }, 1100);

    }
    else{
        optionDesign[SelectedBox].style.backgroundColor = "red";        
        QuestionSound = new Audio ("./Sounds/Wrong.mp3");
        QuestionSound.play();
        setTimeout(function () {
            question.textContent = "Gameover";
            optionDesign[0].textContent = "Gameover";
            optionDesign[1].textContent = "Gameover";
            optionDesign[2].textContent = "Gameover";
            optionDesign[3].textContent = "Gameover";
            let SubmitRemove = document.getElementById("Submit");
            optionDesign[i].style.backgroundColor ="rgb(43, 0, 85)";
            SubmitRemove.remove();
        }, 900);
    }
    });
