const refs = {
    value : document.querySelector('#value'),
    increment: document.querySelector('[data-action=increment]'),
    decrement: document.querySelector('[data-action=decrement]'),
}

const counter = {
    value: 0,
    increment() {
        this.value += 1
    },
    decrement(){
        this.value -= 1
    },
}

refs.increment.addEventListener('click', handleIncrement)
refs.decrement.addEventListener('click', handleDecrement)

function handleIncrement() {
    counter.increment()
    refs.value.textContent = counter.value;
}

function handleDecrement() {
    counter.decrement()
    refs.value.textContent = counter.value;
}