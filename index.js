let homeCount = 0
let guestCount = 0

let homeText = document.getElementById("home-score")
let guestText = document.getElementById("guest-score")

function homeAdd1() {
    homeCount += 1
    homeText.textContent = homeCount
    checkScore()
}

function homeAdd2() {
    homeCount += 2
    homeText.textContent = homeCount
    checkScore()
}

function homeAdd3() {
    homeCount += 3
    homeText.textContent = homeCount
    checkScore()
}

function guestAdd1() {
    guestCount += 1
    guestText.textContent = guestCount
    checkScore()
}

function guestAdd2() {
    guestCount += 2
    guestText.textContent = guestCount
    checkScore()
}

function guestAdd3() {
    guestCount += 3
    guestText.textContent = guestCount
    checkScore()
}


function checkScore() {
    if (homeCount > guestCount) {
        document.getElementById("home-title").style.color = "green";
        document.getElementById("guest-title").style.color = "white"
    }
    else if (guestCount > homeCount) {
        document.getElementById("guest-title").style.color = "green"
        document.getElementById("home-title").style.color = "white";
    }
    else {
        document.getElementById("home-title").style.color = "white";
        document.getElementById("guest-title").style.color = "white"
    }
}