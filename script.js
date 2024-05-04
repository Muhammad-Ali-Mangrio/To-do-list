document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-btn");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
  
    addButton.addEventListener("click", function() {
      const todoText = todoInput.value.trim();
  
      if (todoText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = todoText;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", function() {
          listItem.remove();
        });
  
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        todoInput.value = "";
      }
    });
  });
  