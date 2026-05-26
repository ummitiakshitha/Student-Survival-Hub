const addGoalBtn = document.getElementById("add-goal-btn");
const goalInput = document.getElementById("goal-input");
const goalList = document.getElementById("goal-list");

let goals = JSON.parse(localStorage.getItem("goals")) || [];

function renderGoals(){

    if(!goalList) return;

    goalList.innerHTML = "";

    goals.forEach((goal,index)=>{

        const li = document.createElement("li");

        li.textContent = goal;

        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.classList.add("delete-btn");

        deleteBtn.onclick = function(){

            goals.splice(index,1);

            localStorage.setItem("goals",JSON.stringify(goals));

            renderGoals();
        };

        li.appendChild(deleteBtn);

        goalList.appendChild(li);
    });
}

if(addGoalBtn){

    addGoalBtn.addEventListener("click",function(){

        const goalText = goalInput.value.trim();

        if(goalText==="") return;

        goals.push(goalText);

        localStorage.setItem("goals",JSON.stringify(goals));

        renderGoals();

        goalInput.value = "";
    });
}

renderGoals();



const searchInput = document.getElementById("resource-search");

if(searchInput){

    searchInput.addEventListener("keyup",function(){

        const value = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".resource-card");

        cards.forEach(card=>{

            card.style.display =
            card.textContent.toLowerCase().includes(value)
            ? "block"
            : "none";
        });
    });
}



const quotes = [

    "Success is built through consistency.",

    "Small progress is still progress.",

    "Your future depends on what you do today.",

    "Discipline creates freedom.",

    "Focus on becoming better every day."
];

const quoteText = document.getElementById("dynamic-quote");

const quoteBtn = document.getElementById("new-quote-btn");

if(quoteBtn){

    quoteBtn.addEventListener("click",function(){

        const random =
        Math.floor(Math.random()*quotes.length);

        quoteText.textContent = quotes[random];
    });
}



const darkModeBtn =
document.getElementById("dark-mode-toggle");

if(localStorage.getItem("darkMode")==="enabled"){

    document.body.classList.add("dark-mode");
}

if(darkModeBtn){

    darkModeBtn.addEventListener("click",function(){

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem("darkMode","enabled");

        }else{

            localStorage.setItem("darkMode","disabled");
        }
    });
}



const timerDisplay = document.getElementById("timer");

const startTimerBtn =
document.getElementById("start-timer");

let time = 1500;

let timerRunning = false;

if(startTimerBtn){

    startTimerBtn.addEventListener("click",function(){

        if(timerRunning) return;

        timerRunning = true;

        const interval = setInterval(function(){

            let minutes = Math.floor(time/60);

            let seconds = time%60;

            seconds = seconds < 10
            ? "0"+seconds
            : seconds;

            timerDisplay.textContent =
            `${minutes}:${seconds}`;

            time--;

            if(time < 0){

                clearInterval(interval);

                timerDisplay.textContent =
                "Session Complete 🎉";

                timerRunning = false;

                time = 1500;
            }

        },1000);

    });
}