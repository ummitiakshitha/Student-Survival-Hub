/* ================= DARK MODE ================= */

const darkModeBtn =
document.getElementById("dark-mode-toggle");

if(localStorage.getItem("darkMode")==="enabled"){

    document.body.classList.add("dark-mode");
}

if(darkModeBtn){

    darkModeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

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
    });
}



/* ================= LIVE CLOCK ================= */

function updateClock(){

    const clock =
    document.getElementById("live-clock");

    if(!clock) return;

    const now = new Date();

    clock.innerHTML =
    now.toLocaleTimeString();
}

setInterval(updateClock,1000);

updateClock();



/* ================= GREETING ================= */

function updateGreeting(){

    const greeting =
    document.getElementById("greeting");

    if(!greeting) return;

    const hour =
    new Date().getHours();

    if(hour < 12){

        greeting.innerHTML =
        "Good Morning ☀️";

    }else if(hour < 17){

        greeting.innerHTML =
        "Good Afternoon 🌤️";

    }else{

        greeting.innerHTML =
        "Good Evening 🌙";
    }
}

updateGreeting();



/* ================= GOALS ================= */

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

        li.innerHTML = `

        ${goal}

        <button onclick="deleteGoal(${index})">

        Delete

        </button>

        `;

        goalList.appendChild(li);
    });
}

function deleteGoal(index){

    goals.splice(index,1);

    localStorage.setItem(
        "goals",
        JSON.stringify(goals)
    );

    renderGoals();
}

if(addGoalBtn){

    addGoalBtn.addEventListener("click",()=>{

        const value =
        goalInput.value.trim();

        if(value==="") return;

        goals.push(value);

        localStorage.setItem(
            "goals",
            JSON.stringify(goals)
        );

        renderGoals();

        goalInput.value="";
    });
}

renderGoals();



/* ================= QUOTES ================= */

const quotes = [

"Success is built through consistency.",

"Dream big. Start small.",

"Stay disciplined and focused.",

"Your future depends on today.",

"Small progress matters daily.",

"Success comes from consistency.",

"Keep learning and growing.",

"Discipline creates success."

];

const quoteBtn =
document.getElementById("new-quote-btn");

const quoteText =
document.getElementById("dynamic-quote");

if(quoteBtn){

    quoteBtn.addEventListener("click",()=>{

        const random =
        Math.floor(Math.random()*quotes.length);

        quoteText.innerHTML =
        quotes[random];
    });
}



/* ================= RESOURCE SEARCH ================= */

const searchInput =
document.getElementById("resource-search");

if(searchInput){

    searchInput.addEventListener("keyup",()=>{

        const value =
        searchInput.value.toLowerCase();

        const cards =
        document.querySelectorAll(".resource-card");

        cards.forEach((card)=>{

            const text =
            card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display="block";

            }else{

                card.style.display="none";
            }
        });
    });
}



/* ================= RESOURCE FILTER ================= */

const categoryButtons =
document.querySelectorAll(".category-btn");

const resourceCards =
document.querySelectorAll(".resource-card");

categoryButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        const category =
        button.dataset.category;

        resourceCards.forEach((card)=>{

            if(
                category==="all" ||
                card.dataset.category===category
            ){

                card.style.display="block";

            }else{

                card.style.display="none";
            }
        });
    });
});



/* ================= POMODORO ================= */

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

function updateTimer(){

    if(!timerDisplay) return;

    const minutes =
    Math.floor(timeLeft/60);

    const seconds =
    timeLeft%60;

    timerDisplay.innerHTML =
    `${minutes}:${seconds<10?"0":""}${seconds}`;
}

if(startBtn){

    startBtn.addEventListener("click",()=>{

        clearInterval(timer);

        timer = setInterval(()=>{

            if(timeLeft>0){

                timeLeft--;

                updateTimer();

            }else{

                clearInterval(timer);
            }

        },1000);
    });
}

if(pauseBtn){

    pauseBtn.addEventListener("click",()=>{

        clearInterval(timer);
    });
}

if(resetBtn){

    resetBtn.addEventListener("click",()=>{

        clearInterval(timer);

        timeLeft = 1500;

        updateTimer();
    });
}

updateTimer();



/* ================= RESUME CHECKLIST ================= */

const checkboxes =
document.querySelectorAll(".resume-items input");

checkboxes.forEach((checkbox,index)=>{

    const saved =
    localStorage.getItem(
        `resume-${index}`
    );

    if(saved==="true"){

        checkbox.checked=true;
    }

    checkbox.addEventListener("change",()=>{

        localStorage.setItem(
            `resume-${index}`,
            checkbox.checked
        );
    });
});



/* ================= MOCK INTERVIEW TRACKER ================= */

const addInterviewBtn =
document.getElementById("add-interview-btn");

const companyInput =
document.getElementById("company-input");

const roundInput =
document.getElementById("round-input");

const statusInput =
document.getElementById("status-input");

const interviewTable =
document.getElementById("interview-table-body");

let interviews =
JSON.parse(localStorage.getItem("interviews")) || [];

function renderInterviews(){

    if(!interviewTable) return;

    interviewTable.innerHTML="";

    interviews.forEach((item,index)=>{

        const row =
        document.createElement("tr");

        row.innerHTML=`

        <td>${item.company}</td>

        <td>${item.round}</td>

        <td contenteditable="true">

        ${item.status}

        </td>

        <td>

        <button onclick="deleteInterview(${index})">

        Delete

        </button>

        </td>

        `;

        interviewTable.appendChild(row);
    });
}

function deleteInterview(index){

    interviews.splice(index,1);

    localStorage.setItem(
        "interviews",
        JSON.stringify(interviews)
    );

    renderInterviews();
}

if(addInterviewBtn){

    addInterviewBtn.addEventListener("click",()=>{

        const company =
        companyInput.value.trim();

        const round =
        roundInput.value.trim();

        const status =
        statusInput.value.trim();

        if(
            company==="" ||
            round==="" ||
            status===""
        ) return;

        interviews.push({
            company,
            round,
            status
        });

        localStorage.setItem(
            "interviews",
            JSON.stringify(interviews)
        );

        renderInterviews();

        companyInput.value="";
        roundInput.value="";
        statusInput.value="";
    });
}

renderInterviews();



/* ================= MOOD ================= */

const moodButtons =
document.querySelectorAll(".mood-btn");

const moodText =
document.getElementById("mood-text");

const moodMessages = {

    "😊":"Happy and productive ✨",

    "😌":"Relaxed and calm 🌸",

    "😴":"Take proper rest 😴",

    "😭":"Everything will be okay 💖"
};

moodButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        const mood =
        button.innerHTML;

        moodText.innerHTML =
        moodMessages[mood];

        localStorage.setItem(
            "savedMood",
            moodMessages[mood]
        );
    });
});

const savedMood =
localStorage.getItem("savedMood");

if(savedMood && moodText){

    moodText.innerHTML =
    savedMood;
}



/* ================= CONTACT FORM ================= */

const contactForm =
document.getElementById("contact-form");

const formMessage =
document.getElementById("form-message");

const feedbackList =
document.getElementById("feedback-list");

let feedbacks =
JSON.parse(localStorage.getItem("feedbacks")) || [];

function renderFeedbacks(){

    if(!feedbackList) return;

    feedbackList.innerHTML="";

    feedbacks.forEach((item)=>{

        const li =
        document.createElement("li");

        li.innerHTML=`

        <strong>${item.name}</strong>

        - ${item.message}

        `;

        feedbackList.appendChild(li);
    });
}

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const name =
        document.getElementById("name").value;

        const email =
        document.getElementById("email").value;

        const phone =
        document.getElementById("phone").value;

        const message =
        document.getElementById("message").value;

        if(
            name==="" ||
            email==="" ||
            phone==="" ||
            message===""
        ){

            formMessage.innerHTML =
            "Please fill all fields.";

            return;
        }

        feedbacks.push({
            name,
            email,
            phone,
            message
        });

        localStorage.setItem(
            "feedbacks",
            JSON.stringify(feedbacks)
        );

        renderFeedbacks();

        formMessage.innerHTML =
        "Feedback submitted successfully 💖";

        contactForm.reset();
    });
}

renderFeedbacks();