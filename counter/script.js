
 //1. Create a new variable called 'total' and assign it the div with the id of 'total'
    const total = document.getElementById('total')
    total.textContent = Number(total.textContent)
//2. Create Six Functions (add, subtract, multiplyBy2, divideby2, multiplyBy5, divideBy5)
// Example: 

let add = () => {total.textContent = Number(total.textContent) + 1}
let subtract = () => {total.textContent = Number(total.textContent) - 1}
let mult2 = () => {total.textContent = Number(total.textContent) * 2}
let div2 = () => {total.textContent = Number(total.textContent) / 2}
let mult5 = () => {total.textContent = Number(total.textContent) * 5}
let div5 = () => {total.textContent = Number(total.textContent) / 5}




//update the value of the total variable textContent
// use an alert to alert the user


//3. Attach Functions to Button
    addBtn = document.getElementById('add')
    addBtn.addEventListener('click', add)

    subtractBtn = document.getElementById('subtract')
    subtractBtn.addEventListener('click', subtract)

    mult2Btn = document.getElementById('mult-2')
    mult2Btn.addEventListener('click', mult2)

    div2Btn = document.getElementById('div-2')
    div2Btn.addEventListener('click', div2)

    mult5Btn = document.getElementById('mult-5')
    mult5Btn.addEventListener('click', mult5)

    div5Btn = document.getElementById('div-5')
    div5Btn.addEventListener('click', div5)

   