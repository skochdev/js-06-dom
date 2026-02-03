const refs = {
    input : document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
}

function handleInput(e) {
    if(refs.input.value === '') {
        refs.output.textContent = 'Anonymous'
    } else {
        refs.output.textContent = e.currentTarget.value.trim()
    }

}

refs.input.addEventListener('input', handleInput )