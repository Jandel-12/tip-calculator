const input = document.getElementById("input");
const calculate= document.getElementById("calculate");
const display = document.querySelector(".display");
const customDisplay = document.getElementById("customInput");
const tipOption = document.getElementById("tip-option");
let totalTip = 0;

tipOption.addEventListener("change", ()=>
{
    if(tipOption.value === "custom")
    {
        customDisplay.style.display = "block";
    }
    else{
        customDisplay.style.display = "none"
    }

    
});

calculate.addEventListener("click", ()=>
{
    if(tipOption.value === "custom")
    {
        totalTip = parseInt(customDisplay.value) + parseInt(input.value);
    }
    else
    {
        let inputValue = parseInt(input.value);
        const optionValue = document.getElementById("tip-option").value;
        totalTip = parseFloat(inputValue * optionValue);
    }
    

    display.textContent = `Bill:$ ${totalTip}`;
});
