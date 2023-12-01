class Achievement {
    constructor(name, description, value, icon, altText) {
        this.name = name;
        this.description = description;
        this.value = value;
        this.icon = "achievementImages/" + icon;
        this.altText = altText
    }
}

function queryAchievements() {
    return [  // Temp stand-in for database values
        new Achievement(
            "Bookworm",
            "Finish reading five books within a month.",
            50,
            "bookworm.jpg",
            "Master Chef Trophy"
        ),
        new Achievement(
            "Circus Freak",
            "Learn how to juggle three or more objects simultaneously.",
            100,
            "circusFreak.jpg",
            "Circus Freak Trophy"
        ),
    ]
}

function loadAchievements() {
    const achievements = queryAchievements();
    
    const achievementListElement = document.querySelector("#achievement-list");
    for (const achievement of achievements) {
        const achievementElement = document.createElement("label");
        achievementElement.setAttribute("class", "achievement-card d-flex gap-3");
        achievementListElement.appendChild(achievementElement);
        
        const iconElement = document.createElement("achievement-icon");
        iconElement.setAttribute("class", "achievement-icon");
        iconElement.setAttribute("width", "100");
        iconElement.setAttribute("height", "100");
        iconElement.setAttribute("src", achievement.icon);
        iconElement.setAttribute("alt", achievement.altText);
        achievementElement.appendChild(iconElement);
        
        // const playerElement = document.createElement("a");
        // playerElement.setAttribute("class", "list-group-item list-group-item-action d-flex gap-3 py-3");
        // playerElement.setAttribute("aria-current", "true");
        // playerElement.addEventListener("click", goToPlayer);
        // resultsElement.appendChild(playerElement);
        
        // const contentElement = document.createElement("div");
        // contentElement.setAttribute("class", "d-flex w-100 justify-content-between");
        // playerElement.appendChild(contentElement);
        
        // const usernameElement = document.createElement("p");
        // usernameElement.setAttribute("id", "other-player-username");
        // usernameElement.textContent = player.username;
        // contentElement.appendChild(usernameElement);
        
        // const achievementCountElement = document.createElement("p");
        // achievementCountElement.setAttribute("id", "other-player-achievement-count")
        // achievementCountElement.textContent = player.achievementCount + " " + String.fromCodePoint(0x1F3C6);
        // contentElement.appendChild(achievementCountElement);
        
        // const scoreElement = document.createElement("i");
        // scoreElement.setAttribute("id", "other-player-score");
        // scoreElement.setAttribute("class", "text-nowrap");
        // scoreElement.textContent = player.score + " pts";
        // playerElement.appendChild(scoreElement);
    }
}

function loadProfile() {
    loadAchievements();
    // updateUsername();
    // updateScore();
}

loadProfile();