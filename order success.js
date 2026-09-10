// ==========================================
// NISH Jewels - Order Success JavaScript
// ==========================================


// ==========================================
// Scroll To Top
// ==========================================

window.addEventListener("load", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================================
// Confetti Effect
// ==========================================

createConfetti();


function createConfetti() {

    const colors = [
        "#AED9F4",
        "#6CA6C1",
        "#FFD700",
        "#F8AFA6",
        "#B5EAD7",
        "#C7CEEA"
    ];


    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];


        document.body.appendChild(confetti);

    }

}