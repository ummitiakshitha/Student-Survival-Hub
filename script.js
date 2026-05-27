const addGoalBtn =
document.getElementById("add-goal-btn");

const goalInput =
document.getElementById("goal-input");

const goalList =
document.getElementById("goal-list");

let goals =
JSON.parse(localStorage.getItem("goals")) || [];

function renderGoals(){

    if(!goalList) return;

    goalList.innerHTML = "";

    goals.forEach((goal,index)=>{

        const li =
        document.createElement("li");

        li.textContent = goal;

        const deleteBtn =
        document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.style.padding = "8px 14px";

        deleteBtn.style.borderRadius = "10px";

        deleteBtn.style.border = "none";

        deleteBtn.style.background = "#6C63FF";

        deleteBtn.style.color = "white";

        deleteBtn.style.cursor = "pointer";

        deleteBtn.onclick = function(){

            goals.splice(index,1);

            localStorage.setItem(
                "goals",
                JSON.stringify(goals)
            );

            renderGoals();
        };

        li.appendChild(deleteBtn);

        goalList.appendChild(li);
    });
}

if(addGoalBtn){

    addGoalBtn.addEventListener(
        "click",
        function(){

            const goalText =
            goalInput.value.trim();

            if(goalText === "") return;

            goals.push(goalText);

            localStorage.setItem(
                "goals",
                JSON.stringify(goals)
            );

            renderGoals();

            goalInput.value = "";
        }
    );
}

renderGoals();



const quotes = [

    "Success is built through consistency.",

    "Small progress every day matters.",

    "Discipline creates freedom.",

    "Stay focused on your goals.",

    "Your future depends on what you do today."
];

const quoteText =
document.getElementById("dynamic-quote");

const quoteBtn =
document.getElementById("new-quote-btn");

if(quoteBtn){

    quoteBtn.addEventListener(
        "click",
        function(){

            const random =
            Math.floor(Math.random()*quotes.length);

            quoteText.textContent =
            quotes[random];
        }
    );
}



const darkModeBtn =
document.getElementById("dark-mode-toggle");

if(localStorage.getItem("darkMode")
=== "enabled"){

    document.body.classList.add("dark-mode");
}

if(darkModeBtn){

    darkModeBtn.addEventListener(
        "click",
        function(){

            document.body.classList.toggle(
                "dark-mode"
            );

            if(document.body.classList
                .contains("dark-mode")){

                localStorage.setItem(
                    "darkMode",
                    "enabled"
                );

            }else{

                localStorage.setItem(
                    "darkMode",
                    "disabled"
                );
            }
        }
    );
}



function updateClock(){

    const clock =
    document.getElementById("live-clock");

    if(!clock) return;

    const now = new Date();

    clock.textContent =
    now.toLocaleTimeString();
}

setInterval(updateClock,1000);

updateClock();



function updateGreeting(){

    const greeting =
    document.getElementById("greeting");

    if(!greeting) return;

    const hour =
    new Date().getHours();

    if(hour < 12){

        greeting.textContent =
        "Good Morning ☀️";

    }else if(hour < 18){

        greeting.textContent =
        "Good Afternoon 🌤";

    }else{

        greeting.textContent =
        "Good Evening 🌙";
    }
}

updateGreeting();
const searchInput =
document.getElementById("resource-search");

if(searchInput){

    searchInput.addEventListener(
        "keyup",
        function(){

            const value =
            searchInput.value.toLowerCase();

            const cards =
            document.querySelectorAll(".resource-card");

            cards.forEach((card)=>{

                const text =
                card.textContent.toLowerCase();

                if(text.includes(value)){

                    card.style.display = "block";

                }else{

                    card.style.display = "none";
                }
            });
        }
    );
}
const searchInput =
document.getElementById("resource-search");

if(searchInput){

    searchInput.addEventListener(
        "keyup",
        function(){

            const value =
            searchInput.value.toLowerCase();

            const cards =
            document.querySelectorAll(".resource-card");

            cards.forEach((card)=>{

                const text =
                card.textContent.toLowerCase();

                if(text.includes(value)){

                    card.style.display = "block";

                }else{

                    card.style.display = "none";
                }

            });

        }
    );
}



const categoryButtons =
document.querySelectorAll(".category-btn");

const resourceCards =
document.querySelectorAll(".resource-card");

categoryButtons.forEach((button)=>{

    button.addEventListener(
        "click",
        function(){

            const category =
            button.dataset.category;

            resourceCards.forEach((card)=>{

                if(category === "all"){

                    card.style.display = "block";

                }

                else if(
                    card.dataset.category === category
                ){

                    card.style.display = "block";

                }

                else{

                    card.style.display = "none";
                }

            });

        }
    );

});
let timer;
let timeLeft = 1500;

const timerDisplay =
document.getElementById("timer");

const startBtn =
document.getElementById("start-timer");

const pauseBtn =
document.getElementById("pause-timer");

const resetBtn =
document.getElementById("reset-timer");

function updateTimerDisplay(){

    if(!timerDisplay) return;

    const minutes =
    Math.floor(timeLeft / 60);

    const seconds =
    timeLeft % 60;

    timerDisplay.textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

if(startBtn){

    startBtn.addEventListener(
        "click",
        function(){

            clearInterval(timer);

            timer = setInterval(()=>{

                if(timeLeft > 0){

                    timeLeft--;

                    updateTimerDisplay();

                }

            },1000);

        }
    );
}

if(pauseBtn){

    pauseBtn.addEventListener(
        "click",
        function(){

            clearInterval(timer);

        }
    );
}

if(resetBtn){

    resetBtn.addEventListener(
        "click",
        function(){

            clearInterval(timer);

            timeLeft = 1500;

            updateTimerDisplay();

        }
    );
}

updateTimerDisplay();
const placementQuotes = [

    "Your future depends on what you do today.",

    "Consistency is the key to placement success.",

    "Small daily improvements lead to big opportunities.",

    "Practice makes confidence.",

    "Dream companies need disciplined preparation."

];

const placementQuoteText =
document.getElementById("dynamic-quote");

const placementQuoteBtn =
document.getElementById("new-quote-btn");

if(placementQuoteBtn){

    placementQuoteBtn.addEventListener(
        "click",
        function(){

            const random =
            Math.floor(
                Math.random() *
                placementQuotes.length
            );

            placementQuoteText.textContent =
            placementQuotes[random];

        }
    );
}



function updatePlacementClock(){

    const placementClock =
    document.getElementById("live-clock");

    if(!placementClock) return;

    const now = new Date();

    placementClock.textContent =
    now.toLocaleTimeString();

}

setInterval(updatePlacementClock,1000);

updatePlacementClock();



const placementCheckboxes =
document.querySelectorAll(
    ".resume-items input"
);

placementCheckboxes.forEach((checkbox,index)=>{

    const savedValue =
    localStorage.getItem(
        `resume-check-${index}`
    );

    if(savedValue === "true"){

        checkbox.checked = true;
    }

    checkbox.addEventListener(
        "change",
        function(){

            localStorage.setItem(
                `resume-check-${index}`,
                checkbox.checked
            );

        }
    );

});
const moodButtons =
document.querySelectorAll(".mood-btn");

const moodText =
document.getElementById("mood-text");

const moods = {

    "😊":"Happy and motivated ✨",

    "😌":"Relaxed and peaceful 🌸",

    "😴":"Feeling sleepy 😴",

    "😭":"It's okay to rest and recharge 💖"
};

moodButtons.forEach((button)=>{

    button.addEventListener(
        "click",
        function(){

            const mood =
            button.textContent;

            moodText.textContent =
            moods[mood];

            localStorage.setItem(
                "savedMood",
                moods[mood]
            );

        }
    );

});

const savedMood =
localStorage.getItem("savedMood");

if(savedMood && moodText){

    moodText.textContent = savedMood;
}



const stressQuotes = [

    "Take a deep breath. You are stronger than you think.",

    "Rest is productive too.",

    "Your mental health matters.",

    "You don’t need to figure out everything today.",

    "Small breaks improve big journeys."

];

const stressQuoteBtn =
document.getElementById("new-quote-btn");

const stressQuoteText =
document.getElementById("dynamic-quote");

if(stressQuoteBtn){

    stressQuoteBtn.addEventListener(
        "click",
        function(){

            const random =
            Math.floor(
                Math.random() *
                stressQuotes.length
            );

            stressQuoteText.textContent =
            stressQuotes[random];

        }
    );
}
const contactForm =
document.getElementById("contact-form");

const formMessage =
document.getElementById("form-message");

if(contactForm){

    contactForm.addEventListener(
        "submit",
        function(event){

            event.preventDefault();

            const name =
            document.getElementById("name").value;

            const email =
            document.getElementById("email").value;

            const phone =
            document.getElementById("phone").value;

            const message =
            document.getElementById("message").value;

            if(
                name === "" ||
                email === "" ||
                phone === "" ||
                message === ""
            ){

                formMessage.textContent =
                "Please fill all fields.";

                return;
            }

            formMessage.textContent =
            "Feedback submitted successfully 💖";

            contactForm.reset();

        }
    );
}



const contactQuotes = [

    "Every great project starts with a small idea.",

    "Feedback helps us grow better.",

    "Small ideas can create big changes.",

    "Student voices matter the most.",

    "Creativity begins with curiosity."

];

const contactQuoteBtn =
document.getElementById("new-quote-btn");

const contactQuoteText =
document.getElementById("dynamic-quote");

if(contactQuoteBtn){

    contactQuoteBtn.addEventListener(
        "click",
        function(){

            const random =
            Math.floor(
                Math.random() *
                contactQuotes.length
            );

            contactQuoteText.textContent =
            contactQuotes[random];

        }
    );
}