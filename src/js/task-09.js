function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}


const refs = {
    button: document.querySelector('.change-color'),
    colorSpan: document.querySelector('.color'),
}

// 1 - REFS
// 2 - Create a function that will add an inline style to the <body>
// 3 - What's gonna happen the old style after repeated function call? Cleanup all styles before applying new one
// 4 - Add event listener on click
// 5 - Add current color code to the <span>

function handleColorChangeOnClick() {
    const newBGcolor = getRandomHexColor()
    document.body.style = `background-color:${newBGcolor}`

    refs.colorSpan.textContent = newBGcolor
}

refs.button.addEventListener('click', handleColorChangeOnClick)