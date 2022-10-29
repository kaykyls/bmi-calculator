export const modal = {
    wrapper: document.querySelector(".popup"),
    message: document.querySelector(".popup h1"),
    closeBtn: document.querySelector(".close-btn").addEventListener("click", () => {
        modal.close()
    }),
    open() {
        this.wrapper.classList.remove("hidden")
    },
    close() {
        this.wrapper.classList.add("hidden")
        weight.value = ""
        height.value = ""
    }
}

window.addEventListener("keydown", (event) => {
    if(event.key === "Escape"){
        modal.close()
    }
})