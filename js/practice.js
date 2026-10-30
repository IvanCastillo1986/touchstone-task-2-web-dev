const paragraph = document.getElementById("intro")
paragraph.textContent = "Goodbye, world!"

const allParagraphs = document.querySelectorAll("p")

const cards = document.querySelectorAll(".card"); 
cards[0].style.border = "1px solid black";

const div = document.getElementById("status")
div.textContent = "Loading..."
div.style.backgroundColor = "yellow"
div.style.border = "1px solid black"

const nav = document.getElementById("main-nav")
const firstNavLink = document.querySelector(".nav-link")
const intro = document.querySelectorAll(".intro")
intro[0].textContent = "Hello!"

// nav.innerHTML = "<a>One link</a>"

// const output = document.getElementById('output');

// const userName = 'Alex';
// const userScore = 95;

// output.innerHTML = `
// <div class="profile">
// <h3>${userName}</h3>
// <p>Score: <strong>${userScore}</strong> points</p>
// </div>
// `;

const h2Text = "Latest Updates"

const section = document.getElementById("news")
section.innerHTML = `
    <h2>${h2Text}</h2>
    <p>Check back soon for news</p>
`

// Only use these methods when working with custom attributes or when you need precise control over attribute names:
const image = document.getElementById("photo")
// console.log(image.getAttribute("alt"))
image.setAttribute("alt", "A playful kitten")
// console.log(image.getAttribute("alt"))

// The best way to access properties:
// image.src = 'www.example.com/picture'

// Dataset
const btn = document.getElementById("action-btn")
// console.log(btn.getAttribute("data-action"))
btn.dataset.target = "form2"
// console.log(btn)

const link = document.createElement("a");
link.setAttribute("href", "https://example.com");
link.setAttribute("class", "dynamic-content");
link.textContent = "This paragraph created with JavaScript"

// -----------------------------------------------


const p = document.createElement("p")
p.textContent = "This message was added with JavaScript"
p.className = "notice"

const messages = document.getElementById("messages")
messages.appendChild(p)
// console.log(messages.firstChild)
// console.log(messages)

messages.firstElementChild.remove()
// console.log(messages)

// -----------------------------------------------


const button = document.querySelector(".yellow-button");
button.addEventListener("click", function() {
    button.classList.toggle("highlight");
    console.log(button.classList.contains("highlight"))
});
// console.log(button.textContent)

const dropdownButton = document.querySelector('.dropdown-button');
const menu = document.querySelector('.dropdown-menu');

dropdownButton.addEventListener("click", function() {
    menu.classList.toggle("open");
});
