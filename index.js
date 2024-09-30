// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}

let saveBTN = document.getElementById("save-el")

function save() {
    let countStr =  count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

