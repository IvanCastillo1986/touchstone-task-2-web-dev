const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

document.addEventListener("click", function(e) {
    console.log(e.target)
    console.log(e.target.tagName)
})



// -----------------------------------------------

const demoButton = document.querySelector("#demo-btn")
demoButton.addEventListener("click", function(evt) {
    console.log(evt)
    console.log('Target element:', evt.target);
    console.log('Mouse X position:', evt.clientX);
})


// -----------------------------------------------
const container = document.querySelector('#card-container');
const status = document.querySelector('#status');

const card1 = document.createElement("div")
const card2 = document.createElement("div")
const card3 = document.createElement("div")

card1.classList.add("card")
card2.classList.add("card")
card3.classList.add("card")

card1.innerHTML = '<h3>Music</h3><p>Click to select</p>';
card2.innerHTML = '<h3>Travel</h3><p>Click to select</p>';
card3.innerHTML = '<h3>Cooking</h3><p>Click to select</p>';

const cardContainer = document.querySelector(".card-container")
cardContainer.appendChild(card1)
cardContainer.appendChild(card2)
cardContainer.appendChild(card3)

// Function to update status
function updateStatus() {
    const count = document.querySelectorAll('.card.selected').length;

    if (count === 0) {
        status.textContent = 'No interests selected.';
    } else {
        status.textContent = count + ' interest(s) selected.';
    }
}

card1.addEventListener("click", function() {
    card1.classList.toggle("selected")
    updateStatus()
})
card2.addEventListener("click", function() {
    card2.classList.toggle("selected")
    updateStatus()
})
card3.addEventListener("click", function() {
    card3.classList.toggle("selected")
    updateStatus()
})