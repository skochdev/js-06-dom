const refs = {
    input: document.querySelector('#validation-input'),
}

refs.input.value = ''

function handleBlur(e) {
    const inputLength = e.currentTarget.value.trim().length
    const targetLength = parseInt(refs.input.dataset.length)

    if(inputLength < targetLength) {
        refs.input.classList.remove('valid')
        refs.input.classList.add('invalid')
    } else {
        refs.input.classList.remove('invalid')
        refs.input.classList.add('valid')
    }
}

refs.input.addEventListener('blur', handleBlur)
