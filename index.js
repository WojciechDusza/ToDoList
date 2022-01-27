
let listContainer = document.getElementById("task-list");
let list = document.createElement("ul");
let addButton = document.getElementById("addButton");
let input = document.getElementById("add-element");
listContainer.appendChild(list);
addButton.addEventListener("click", function(e){
    e.preventDefault();
    let listItem = document.createElement("li");
    let text = document.createTextNode(input.value);
    listItem.appendChild(text);
    list.appendChild(listItem);
    input.value="";
   listContainer.addEventListener("dblclick", function(){
       text.removeChild(text);
   }) 
})




