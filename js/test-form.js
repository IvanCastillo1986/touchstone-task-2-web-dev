const form = document.querySelector("#features-form")
console.log(form)

form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log('preventing default')
    console.log(form.elements)
})