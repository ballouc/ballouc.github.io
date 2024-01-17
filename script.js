const brainstormCard = document.getElementById("brainstorm");
const boltCard = document.getElementById("lightning-bolt");
const ritualCard = document.getElementById("dark-ritual");
const solitudeCard = document.getElementById("solitude");
const pageBody = document.getElementById("page-body");
const pageHeader = document.getElementById("page-header");
const dealMeBtn = document.getElementById("deal-me-button");
const pageContent = document.getElementById("page-content");

let currentScreen = {};

const cardList = document.querySelectorAll(".card");

const screenSelection = [{
    id: "default-page",
    pageHTML: `
        <h1 id="page-header">[ cam ballou ]</h1>
        <button id="deal-me-button" type="button">deal me in</button>`
},{
    id: "about-me-page",
    pageHTML: `
        <h1 id="page-header"> About me! </h1>`
},{
    id: "portfolio-page",
    pageHTML: `
    <h1 id="page-header"> Portfolio and Past Work </h1>`
},{
    id: "upcoming-projects-page",
    pageHTML: `
    <h1 id="page-header"> Upcoming Projects </h1>`
},{
    id: "contact-me-page",
    pageHTML: `
    <h1 id="page-header"> Contact Me </h1>`
}
];

const reset = () => {
    currentScreen = screenSelection[0];
    for(let i = 0; i < cardList.length; i ++){
        cardList[i].classList.add('hidden');
    }
    updateScreen();
};

function changeScreen(thisCard){
    switch(thisCard.id){
        case "brainstorm":
            currentScreen = screenSelection[1];
            break;
        case "lightning-bolt":
            currentScreen = screenSelection[2];
            break;
        case "dark-ritual":
            currentScreen = screenSelection[3];
            break;
        case "solitude":
            currentScreen = screenSelection[4];
            break;
        default:
            reset();
    }
    updateScreen();
}

const updateScreen = () => {
    pageContent.innerHTML = currentScreen.pageHTML;
};

dealMeBtn.addEventListener('click', () => {
    for(let i = 0; i < cardList.length; i ++){
        cardList[i].classList.remove('hidden');
    }
});