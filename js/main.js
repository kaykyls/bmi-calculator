import { modal } from "./modal.js"
import { imc, classification } from "./utils.js"
//aparentemente é mais comum modularizar objetos e funções

const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()
    const weight = document.querySelector("#weight").value
    const height = document.querySelector("#height").value
    if(height > 0 && weight > 0){
        showResult(imc(weight, height))
    }

}

function showResult(imc) {
    modal.message.innerText = `Seu IMC é de ${imc} (${classification(imc)})`
    modal.open()
}