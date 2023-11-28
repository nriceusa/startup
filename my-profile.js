function updateUsername() {
    const username = localStorage.getItem("username");
    const usernameElement = document.querySelector("#username");
    if (username) {
        usernameElement.textContent = username;
    } else {
        usernameElement.textContent = "######";
    }
}

function updateAchievements() {
    const achievementElements = document.querySelectorAll(".achievement-card");
    let totalAchievements = 0;
    let totalScore = 0;

    for (const element of achievementElements) {
        toggleElement = element.querySelector(".achievement-toggle");
        valueElement = element.querySelector(".achievement-value");
        
        console.log(valueElement.value);
        if (toggleElement.value === "on") {
            totalAchievements++;
            totalScore += valueElement.value;
        }
    }

    const scoreElement = document.querySelector("#score");
    const achievementCountElement = document.querySelector("#achievement-count");
    scoreElement.textContent = totalScore;
    achievementCountElement.textContent = "Achievements: " + totalAchievements;
}

function loadProfile() {
    updateUsername();
    updateAchievements();
}

loadProfile();

const achievementElements = document.querySelectorAll(".achievement-card");
for (element of achievementElements) {
    element.addEventListener("click", updateAchievements);
}