let noClickCount = 0;

function handlenoclick() {
    const noButton = document.querySelector(".nobutton");
    const yesButton = document.querySelector(".yesbutton");

    noClickCount++;

    const messages = [
        "Are you sure?",
        "Really sure?",
        "Think again 🥺",
        "Last chance!!",
        "Pleaseeee 💔",
        "I will hit you",
        "SAY YES AJEEB SYBAU",
        "I hate you",
        "NOOOOO",
        "YEAH I KNOW YOU WANT TO CLICK YES",
        "Click yes or go away sybau"
    ];

    // Change NO button text
    if (noClickCount <= messages.length) {
        noButton.textContent = messages[noClickCount - 1];
    }

    // Grow YES button
    let currentSize = 1 + (noClickCount * 0.5);
    yesButton.style.transform = `scale(${currentSize})`;

    // Move NO button randomly
    moveButtonRandomly(noButton);
}

function moveButtonRandomly(button) {
    const container = document.querySelector(".container");

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

function handleyesclick() {
    window.location.href = "yes.html";
}
