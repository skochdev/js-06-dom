import randomHexColor from './randomHexColor.js'

const refs = {
    boxes: document.querySelector('#boxes'),
    createBtn: document.querySelector('button[data-create]'),
    destroyBtn: document.querySelector('button[data-destroy]'),
    input: document.querySelector('input')
}

function onCreateClick() {
    const amount = Number(refs.input.value)
    if (Number.isNaN(amount) || amount < 1 || amount > 100) {
        alert('Please enter a number between 1 and 100');
    }
    createBoxes(amount)
    refs.input.value = ''
}

function createBoxes(amount) {
    destroyBoxes()
    let startDimensions = 30

    const fragment = document.createDocumentFragment()

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div')
        box.classList.add('box');
        box.style.width = `${startDimensions}px`
        box.style.height = `${startDimensions}px`
        box.style.backgroundColor = randomHexColor()
        fragment.append(box)

        startDimensions += 10;
    }
    refs.boxes.append(fragment)
}

function destroyBoxes() {
    refs.boxes.replaceChildren()
    refs.input.value = ''
}

refs.createBtn.addEventListener('click', onCreateClick)
refs.destroyBtn.addEventListener('click', destroyBoxes)

