// 
let count = 0;

// 
const value = document.querySelector('#value');
const buttons = document.querySelectorAll(".btn");

buttons.forEach( (btn)=> {
    btn.addEventListener("click", (e)=> {
        const target = e.currentTarget.classList;
        if (target.contains("decrement")) {
            count--;
        } else if (target.contains("increment")) {
            count++;
        }else{
            count=0;
        }
        value.textContent=count;
    })
})