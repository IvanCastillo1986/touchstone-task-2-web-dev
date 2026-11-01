const tipBtn = document.querySelector("#reveal")
const tipParagraph = document.querySelector("#tip")

tipBtn.addEventListener("click", function() {
    tipParagraph.classList.toggle("hidden")
})
