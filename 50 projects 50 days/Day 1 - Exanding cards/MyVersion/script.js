const panels = document.querySelectorAll(".panel");
const auto = document.querySelector(".auto");
const hero = document.querySelector(".hero");
const panel1 = document.querySelector(".panel1");
const panel1h3 = document.querySelector(".panel1__text");
const panel2 = document.querySelector(".panel2");
const panel2h3 = document.querySelector(".panel2__text");
const panel3 = document.querySelector(".panel3");
const panel3h3 = document.querySelector(".panel3__text");
const panel4 = document.querySelector(".panel4");
const panel4h3 = document.querySelector(".panel4__text");
const panel5 = document.querySelector(".panel5");
const panel5h3 = document.querySelector(".panel5__text");

// Adding the functionallity to click on image to expand
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

// Removes active from all elements
function removeActiveClasses() {
    panels.forEach((panel) => panel.classList.remove("active"));
}

// Clicking on the auto-button starts the secquence to change picture every 3-second
auto.addEventListener("click", () => {
    loopOverpanels();
});

function loopOverpanels() {
    for (let i = 0; i < panels.length; i++) {
        changePicture(i);
    }
}

// add the active class to next picture every 3-second
function changePicture(i) {
    setTimeout(function () {
        removeActiveClasses();
        panels[i].classList.add("active");
    }, i * 3000);
}

// Chaging images and text when click on son/dad button
hero.addEventListener("click", () => {
    panel1.classList.toggle("panel1--hero");
    panel1h3.innerHTML = "The hulk";

    panel2.classList.toggle("panel2--hero");
    panel2h3.innerHTML = "Spiderman";

    panel3.classList.toggle("panel3--hero");
    panel3h3.innerHTML = "Batman";

    panel4.classList.toggle("panel4--hero");
    panel4h3.innerHTML = "Superman";

    panel5.classList.toggle("panel5--hero");
    panel5h3.innerHTML = "GROOT";

    if (hero.innerHTML === "Son") {
        hero.innerHTML = "Dad";
    } else {
        hero.innerHTML = "Son";
        panel1h3.innerHTML = "Explore The World";
        panel2h3.innerHTML = "Wild Forest";
        panel3h3.innerHTML = "Sunny Beach";
        panel4h3.innerHTML = "City on Winter";
        panel5h3.innerHTML = "Mountains - Clouds";
    }
});
