const actions = document.querySelectorAll('#counter button')
const totalResult = document.querySelector('#value')

const counter = {
    counterValue: 0,
    decrement() {
        this.counterValue -= 1;
    },
    increment() {
        this.counterValue += 1;
    },
}

actions[0].addEventListener('click', function () {
    counter.decrement()
    totalResult.textContent = counter.counterValue
})
actions[1].addEventListener('click', function () {
    counter.increment()
    totalResult.textContent = counter.counterValue
})