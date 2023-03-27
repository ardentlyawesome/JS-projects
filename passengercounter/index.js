//initialize the count as 0 
//listen for clicks on the increment button
//increment the count on clicking
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0 


function increment() {
    count += 1
    countEl.textContent = count
}

function save(){
    let preventries = count + " - "
    saveEl.textContent += preventries
    count = 0 
    countEl.textContent = 0
}