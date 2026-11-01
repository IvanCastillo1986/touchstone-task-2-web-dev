const headers = document.querySelectorAll(".accordion-header")
const items = document.querySelectorAll(".accordion-item")

const header1 = headers[0]
const header2 = headers[1]

const item1 = items[0]
const item2 = items[1]

header1.addEventListener("click", function() {
    const isActive = item1.classList.contains("active")

    // close all panels
    item1.classList.remove("active")
    item2.classList.remove("active")

    // Open this panel if it was previously closed
    if (!isActive) {
        item1.classList.add("active")
    }
})

header2.addEventListener("click", function() {
    const isActive = item2.classList.contains("active")

    // close all panels
    item1.classList.remove("active")
    item2.classList.remove("active")

    // Open this panel if it was previously closed
    if (!isActive) {
        item2.classList.add("active")
    }
})