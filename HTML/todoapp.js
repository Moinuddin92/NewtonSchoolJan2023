var todoInput = document.getElementById("todo-input");
var btn = document.getElementById("todo-btn");
var result = document.getElementById("result");

btn.addEventListener("click", () => {

    let todoDiv = document.createElement('div');
    let todoText = document.createElement('span');
    let todoEdit = document.createElement('button');
    let todoDel = document.createElement('button');

    todoText.textContent = todoInput.value;

    todoEdit.setAttribute("id", "todo-edit");

    todoEdit.textContent = "Edit";

    todoDel.setAttribute("id", "todo-del");
    todoDel.textContent = "Delete";
    todoEdit.addEventListener("click", (e) => {

        let editInput = document.createElement("input");
        editInput.setAttribute("id", "edit-input");
        editInput.textContent = todoText.textContent;

    })

    todoDiv.appendChild(todoText);
    todoDiv.appendChild(todoEdit);
    todoDiv.appendChild(todoDel);
    result.appendChild(todoDiv);
})