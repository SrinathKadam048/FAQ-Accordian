const questions = document.querySelectorAll(".question")
const actions = document.querySelectorAll(".action-button")
const plusIcon = './assets/images/icon-plus.svg'
const minusIcon = './assets/images/icon-minus.svg'

function toggleAnswer(button) {
    console.log(button)
    const answerDiv = button.parentElement.nextElementSibling;
    console.log(answerDiv.style.display)
    answerDiv.style.display = answerDiv.style.display === "none" ? "block" : "none"
}

actions.forEach(action => {
    action.addEventListener("click", () => {
        if (action.getAttribute("src") === "./assets/images/icon-plus.svg")
            action.setAttribute("src", "./assets/images/icon-minus.svg")
        else
            action.setAttribute("src", "./assets/images/icon-plus.svg")

        toggleAnswer(action)
    })
})