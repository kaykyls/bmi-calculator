export const modal = {
    wrapper: document.querySelector(".popup"),
    message: document.querySelector(".popup h1"),
    closeBtn: document.querySelector(".close-btn").addEventListener("click", () => {
        modal.close()
    }),
    open() {
        this.wrapper.classList.remove("hide")
    },
    close() {
        this.wrapper.classList.add("hide")
        weight.value = ""
        height.value = ""
    }
}

window.addEventListener("keydown", (event) => {
    console.log(event.key)
    if(event.key === "Escape"){
        modal.close()
    }
})