function setCustomSelects() 
{
    var customSelects, i, j, baseSelect, selectedOption, optionsList, option;
    
    // Get custom selects.
    customSelects = document.getElementsByClassName("selectInput");
    for (i = 0; i < customSelects.length; i++) 
    {
        baseSelect = customSelects[i].getElementsByTagName("select")[0];
        
        // Create a div to use it as the selected option.
        selectedOption = document.createElement("DIV");
        selectedOption.setAttribute("class", "selectInputSelected");
        selectedOption.innerHTML = baseSelect.options[baseSelect.selectedIndex].innerHTML;
        customSelects[i].appendChild(selectedOption);
        
        // Create a div to use it as the options list.
        optionsList = document.createElement("DIV");
        optionsList.setAttribute("class", "selectInputList selectInputHide");
        for (j = 0; j < baseSelect.length; j++) 
        {
            // Create a div to use it as a single option in the list.
            option = document.createElement("DIV");
            option.innerHTML = baseSelect.options[j].innerHTML;
            option.addEventListener("click", function(e) 
            {
                // Update the base and custom selected items on click.
                var i, clickedBaseSelect, clickedCustomSelectedOption;
                clickedBaseSelect = this.parentNode.parentNode.getElementsByTagName("select")[0];
                clickedCustomSelectedOption = this.parentNode.previousSibling;
                for (i = 0; i < clickedBaseSelect.length; i++) 
                {
                    if (clickedBaseSelect.options[i].innerHTML == this.innerHTML) 
                    {
                        clickedBaseSelect.selectedIndex = i;
                        clickedCustomSelectedOption.innerHTML = this.innerHTML;
                        break;
                    }
                }
                clickedCustomSelectedOption.click();
            });
            optionsList.appendChild(option);
        }
        customSelects[i].appendChild(optionsList);
        selectedOption.addEventListener("click", function(e) 
        {
            // Toggle the display of a custom select on click, and hide all other ones.
            e.stopPropagation();
            hideEveryCustomSelectBut(this);
            this.nextSibling.classList.toggle("selectInputHide");
        });
    }
}

function hideEveryCustomSelectBut(customSelect) 
{
    // Hides all custom selects except the specified one.
    var optionsLists, selectedOptions, i, toHide = [];
    optionsLists = document.getElementsByClassName("selectInputList");
    selectedOptions = document.getElementsByClassName("selectInputSelected");
    for (i = 0; i < selectedOptions.length; i++) 
    {
        if (customSelect == selectedOptions[i]) 
        {
            toHide.push(i)
        }         
    }
    for (i = 0; i < optionsLists.length; i++) 
    {
        if (toHide.indexOf(i)) 
        {
            optionsLists[i].classList.add("selectInputHide");
        }
    }
}