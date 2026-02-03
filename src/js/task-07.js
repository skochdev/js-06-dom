const refs = {
    rangeSlider: document.querySelector('#font-size-control'),
    span: document.querySelector('#text')
}

function handleSlider(e) {
   const rangeValue = parseInt(e.currentTarget.value)
    refs.span.style = `font-size:${rangeValue}px`
}

refs.rangeSlider.addEventListener('input', handleSlider)

console.log(refs.rangeSlider.value)