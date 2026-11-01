let itemsList = []

function loadItems() {
    const items = localStorage.getItem("items")
    if (items) {
        itemsList = JSON.parse(items)
    }
    renderList()
    console.log("loading items", itemsList)
}

function saveItems() {
    localStorage.setItem("items", JSON.stringify(itemsList))
}

function renderList() {
    const ul = document.getElementById("item-list")
    ul.innerHTML = ""

    itemsList.forEach(todo => {
        const li = document.createElement("li")
        li.textContent = todo
        ul.appendChild(li)
    })
}

const addBtn = document.getElementById("add-btn")
addBtn.addEventListener("click", function() {
    const input = document.getElementById("item-input")
    itemsList.push(input.value)
    saveItems()
    renderList()
    input.value = ''
})

loadItems()