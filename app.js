const date = document.querySelector("#date")
const btn = document.querySelector("#btn")
const ans = document.querySelector("#ans")

// function Palindrome(str) {
//     return str.split('').reverse().join('')
// }

// btn.addEventListener("click", () => {
//     console.log("hi")
//     let str = date.value
//     return str === Palindrome(str)
// })

// console.log(ans.value);
function handler() {
    console.log(ans.value);
}
btn.addEventListener("click", handler)