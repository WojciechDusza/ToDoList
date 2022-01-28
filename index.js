
let listContainer = document.getElementById("task-list");
let list = document.createElement("ul");
let addButton = document.getElementById("addButton");
let input = document.getElementById("add-element");



listContainer.appendChild(list);
addButton.addEventListener("click", function(e){
    e.preventDefault();
    let listItem = document.createElement("li");
    let text = document.createTextNode(input.value);
    let removeItem = document.createElement("span");
    removeItem.classList.add("remove");
    removeItem.innerHTML = "&cross;";
    let checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    listItem.appendChild(removeItem);
    list.appendChild(listItem);
    input.value="";
    //listItem.addEventListener("dblclick", function(){
    //    list.removeChild(listItem);
   // }) 
});




function removeToDo(removeElement){
    
    removeElement.parentElement.remove();
}

function toggleComplete(inputElement){
    if(inputElement.checked === false){
        inputElement.parentElement.classList.remove("complete");
    }
    else {
        inputElement.parentElement.classList.add("complete");
    }
}

function showEditInput(paragraphElement){

    let editInput = document.getElementsByName("editInput")[0];
    if (editInput) {
        editInput.remove();
    }
    let input = document.createElement("input");
    input.type = "text";
    input.name = "editInput";
    input.value = paragraphElement.textContent;
    input.classList.add("editInput");

    paragraphElement.parentElement.appendChild(input);
    input.focus();
}

list.addEventListener("click", function (event){

    event.stopPropagation();
    
    switch(event.target.tagName){
        case "text":
            showEditInput();
            break;
        case "SPAN":
            removeToDo(event.target);
            break;    
    }
});

list.addEventListener("change", function(event){
    if(event.target.tagName === "INPUT" && event.target.type === "checkbox") {
        toggleComplete(event.target);
    }
});

list.addEventListener("keypress", function(event){
if (event.target.tagName === "INPUT" && event.target.type === "text" && event.key === "Enter") {
    updateToDo();
}
});

document.addEventListener("click", updateToDo);




