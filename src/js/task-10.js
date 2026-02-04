import randomHexColor from './randomHexColor.js'

const refs = {
    boxes: document.querySelector('#boxes'),
    createBtn: document.querySelector('button[data-create]'),
    destroyBtn: document.querySelector('button[data-destroy]'),
    input: document.querySelector('input')
}

function generateBoxes() {
    if (refs.input.value === '' || refs.input.value > 100 || refs.input.value < 0) {
        return
    }
    destroyBoxes()

    let startDimensions = 30
    const inputValue = refs.input.value
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < inputValue; i++) {
        const box = document.createElement('div')
        box.style.width = `${startDimensions}px`
        box.style.height = `${startDimensions}px`
        box.style.backgroundColor = randomHexColor()
        fragment.append(box)

        startDimensions += 10;
    }
    refs.boxes.append(fragment)
    refs.input.value = ''

}

function destroyBoxes() {
    refs.boxes.innerHTML = ''
}

refs.createBtn.addEventListener('click', generateBoxes)
refs.destroyBtn.addEventListener('click', destroyBoxes)

