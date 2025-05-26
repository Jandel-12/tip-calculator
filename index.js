const input = document.getElementById("input");
const calculate= document.getElementById("calculate");
const display = document.querySelector(".display");
calculate.addEventListener("click", ()=>
{
    let inputValue = parseInt(input.value);
    const optionValue = document.getElementById("tip-option").value;

    let totalTip = parseFloat(inputValue * optionValue);

    display.textContent = totalTip
    
    
})
