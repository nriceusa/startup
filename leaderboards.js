class Player {
    constructor(username, score, achievementCount) {
        this.username = username;
        this.score = score;
        this.achievementCount = achievementCount;
    }
}

function searchDatabase(query) {
    return [  // Temp stand-in for data from database
        new Player("Joe Schmo", 670, 14),
        new Player("Plaine Jane", 485, 19),
    ]
}

function goToPlayer(event) {
    const element = event.srcElement;

    const usernameElement = element.querySelector("#other-player-username");
    localStorage.setItem("other-player-username", usernameElement.textContent);
    window.location.href = "profile.html";
}

function search() {
    const searchBoxElement = document.querySelector("#search-box");
    const searchQuery = searchBoxElement.value;
    if (searchQuery) {
        leadersElement = document.querySelector("#leaders");
        while (leadersElement.firstChild) {
            leadersElement.removeChild(leadersElement.lastChild);
        }

        const resultsElement = document.querySelector("#results");
        const results = searchDatabase(searchQuery);

        for (const player of results) {
            const playerElement = document.createElement("a");
            playerElement.setAttribute("class", "list-group-item list-group-item-action d-flex gap-3 py-3");
            playerElement.setAttribute("aria-current", "true");
            playerElement.addEventListener("click", goToPlayer);
            resultsElement.appendChild(playerElement);

            const contentElement = document.createElement("div");
            contentElement.setAttribute("class", "d-flex w-100 justify-content-between");
            playerElement.appendChild(contentElement);

            const usernameElement = document.createElement("p");
            usernameElement.setAttribute("id", "other-player-username");
            usernameElement.textContent = player.username;
            contentElement.appendChild(usernameElement);
            
            const achievementCountElement = document.createElement("p");
            achievementCountElement.setAttribute("id", "other-player-achievement-count")
            achievementCountElement.textContent = player.achievementCount + " " + String.fromCodePoint(0x1F3C6);
            contentElement.appendChild(achievementCountElement);

            const scoreElement = document.createElement("i");
            scoreElement.setAttribute("id", "other-player-score");
            scoreElement.setAttribute("class", "text-nowrap");
            scoreElement.textContent = player.score + " pts";
            playerElement.appendChild(scoreElement);
        }
    }
}

function loadLeaders() {
    const players = [  // Temp stand-in for data from database
        new Player("Joe Schmo", 670, 14),
        new Player("Plaine Jane", 485, 19),
        new Player("Common Bloke", 410, 11),
        new Player("Elly Everywoman", 430, 11),
        new Player("Fred Lunchbucket", 355, 8),
    ]

    leadersElement = document.querySelector("#leaders");
    for (let i = 0; i < 5; i++) {
        const playerElement = document.createElement("a");
        playerElement.setAttribute("class", "list-group-item list-group-item-action d-flex gap-3 py-3");
        playerElement.setAttribute("aria-current", "true");
        playerElement.addEventListener("click", goToPlayer);
        leadersElement.appendChild(playerElement);

        const numberElement = document.createElement("strong");
        numberElement.textContent = String(i + 1);
        playerElement.appendChild(numberElement);

        const contentElement = document.createElement("div");
        contentElement.setAttribute("class", "d-flex w-100 justify-content-between");
        playerElement.appendChild(contentElement);

        const usernameElement = document.createElement("p");
        usernameElement.setAttribute("id", "other-player-username");
        usernameElement.textContent = players[i].username;
        contentElement.appendChild(usernameElement);
        
        const achievementCountElement = document.createElement("p");
        achievementCountElement.setAttribute("id", "other-player-achievement-count")
        achievementCountElement.textContent = players[i].achievementCount + " " + String.fromCodePoint(0x1F3C6);
        contentElement.appendChild(achievementCountElement);

        const scoreElement = document.createElement("i");
        scoreElement.setAttribute("id", "other-player-score");
        scoreElement.setAttribute("class", "text-nowrap");
        scoreElement.textContent = players[i].score + " pts";
        playerElement.appendChild(scoreElement);
    }
}

loadLeaders();
const searchButtonElement = document.querySelector("#search-button");
searchButtonElement.addEventListener("click", search);
