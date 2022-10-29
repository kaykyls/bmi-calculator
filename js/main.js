import { modal } from "./modal.js"
import { calculateBmi, calculateClassification } from "./utils.js"

const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()
    const weight = document.querySelector("#weight").value
    const height = document.querySelector("#height").value
    if(height > 0 && weight > 0){
        showResult(calculateBmi(weight, height))
    }

}

function showResult(imc) {
    modal.message.innerText = `Seu IMC é de ${imc} (${calculateClassification(imc)})`
    modal.open()
}