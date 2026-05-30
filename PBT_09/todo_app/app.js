const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const itemsLeft = document.querySelector("#itemsLeft");
const clearCompleted = document.querySelector("#clearCompleted");
const filterBtns = document.querySelectorAll(".filter-btn");

let todos =
    JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";

renderTodos();

todoForm.addEventListener("submit", function(e){
    e.preventDefault();

    const text = todoInput.value.trim();

    if(text === "") return;

    todos.push({
        id: Date.now(),
        text: text,
        completed: false
    });

    saveTodos();
    renderTodos();

    todoInput.value = "";
});

todoList.addEventListener("click", function(e){

    const li = e.target.closest("li");

    if(!li) return;

    const id = Number(li.dataset.id);

    if(e.target.classList.contains("delete-btn")){

        todos = todos.filter(
            todo => todo.id !== id
        );

        saveTodos();
        renderTodos();
    }

    if(e.target.classList.contains("todo-text")){

        const todo =
            todos.find(todo => todo.id === id);

        todo.completed = !todo.completed;

        saveTodos();
        renderTodos();
    }
});

todoList.addEventListener("dblclick", function(e){

    if(!e.target.classList.contains("todo-text"))
        return;

    const li = e.target.closest("li");
    const id = Number(li.dataset.id);

    const input = document.createElement("input");

    input.type = "text";
    input.value = e.target.textContent;
    input.className = "edit-input";

    e.target.replaceWith(input);

    input.focus();

    input.addEventListener("keydown", function(ev){

        if(ev.key === "Enter"){

            const todo =
                todos.find(todo => todo.id === id);

            const newText =
                input.value.trim();

            if(newText){
                todo.text = newText;
            }

            saveTodos();
            renderTodos();
        }
    });
});

filterBtns.forEach(btn => {

    btn.addEventListener("click", function(){

        currentFilter = btn.dataset.filter;

        filterBtns.forEach(button =>
            button.classList.remove("active")
        );

        btn.classList.add("active");

        renderTodos();
    });

});

clearCompleted.addEventListener("click", function(){

    todos = todos.filter(
        todo => !todo.completed
    );

    saveTodos();
    renderTodos();
});

function renderTodos(){

    todoList.innerHTML = "";

    let filteredTodos = [...todos];

    if(currentFilter === "active"){

        filteredTodos =
            todos.filter(todo => !todo.completed);

    }else if(currentFilter === "completed"){

        filteredTodos =
            todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {

        const li = document.createElement("li");
        li.dataset.id = todo.id;

        if(todo.completed){
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.className = "todo-text";
        span.textContent = todo.text;

        const deleteBtn =
            document.createElement("button");

        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "❌";

        li.appendChild(span);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });

    updateCount();
}

function updateCount(){

    const count =
        todos.filter(todo => !todo.completed).length;

    itemsLeft.textContent =
        `${count} items left`;
}

function saveTodos(){

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}