const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 10;

const generatePalette = () => {
    container.innerHTML = ""; 
    for (let i = 0; i < maxPaletteBoxes; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex};"></div>
                            <span class="hex-value">${randomHex}</span>`;
        container.appendChild(color);
    }
};

refreshBtn.addEventListener("click", generatePalette);