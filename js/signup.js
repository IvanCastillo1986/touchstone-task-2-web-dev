const form = document.querySelector("#signup-form")

function showError(inputId, message) {
    const input = document.querySelector(`#${inputId}`)
    const errorSpan = document.querySelector(`#${inputId}-error`)

    input.classList.add("input-error")
    errorSpan.textContent = message
}

function clearError(inputId) {
    const input = document.querySelector(`#${inputId}`)
    const errorSpan = document.querySelector(`#${inputId}-error`)

    input.classList.remove("input-error")
    errorSpan.textContent = ""
}

form.addEventListener("submit", function(e) {
    e.preventDefault()

    clearError("username")
    clearError("email")
    clearError("password")

    let isValid = true

    const username = document.querySelector("#username").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    if (username.trim() === "") {
        showError("username", "Username must not be empty")
        isValid = false
    }

    if (email.trim() === "") {
        showError("email", "Email must not be empty")
        isValid = false
    } else if (!email.includes("@")) {
        showError("email", "This is not a valid email")
        isValid = false
    }

    if (password.trim() === "") {
        showError("password", "Password must not be empty")
        isValid = false
    } else if (password.length < 8) {
        showError("password", "Password must be at least 8 characters")
        isValid = false
    }

    if (isValid) {
        form.submit()
    }
})

console.log("test")