
// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

// Event Listeners
document.addEventListener('DOMContentLoaded', getLocalTODOS)
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteAndCheck)
filterOption.addEventListener('click', filterTODO)

// Functions

// AddTodo function
function addTodo(event) {

    // preventing the form from submitting
    event.preventDefault()

    // Creating a todo div
    const todoElement = document.createElement('div')
    todoElement.classList.add('todo')

    // Creating List
    const newTodoElement = document.createElement('li')
    newTodoElement.innerText = todoInput.value
    // Save to local - do this last
    // Save to local
    saveLocalTODOS(todoInput.value)

    //
    newTodoElement.classList.add('todo-item')
    todoElement.appendChild(newTodoElement)

    // Clear TO DO input value
    todoInput.value = ''

    // Adding the Complete Button
    const completeButton = document.createElement('button')
    completeButton.innerHTML = `<i class="fas fa-check"></i>`
    completeButton.classList.add('complete-btn')
    todoElement.appendChild(completeButton)

    // Adding the Delete Button
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add('delete-btn')
    todoElement.appendChild(deleteButton)

    // Appending the list element to the list
    todoList.appendChild(todoElement)
}

function deleteAndCheck(event) {
    const item = event.target

    // Delete a To do
    if (item.classList[0] === 'delete-btn') {
        const todoElement = item.parentElement
        todoElement.classList.add('fall')

        // Removing the element from storage
        removeLocalTODOS(todoElement)

        // Wait until the falling transition end then remove todoElement
        todoElement.addEventListener('transitionend', function () {
            todoElement.remove()
        })
    }

    // CHECK MARK
    if (item.classList[0] === 'complete-btn') {
        const todoElement = item.parentElement
        todoElement.classList.toggle('completed')
    }
}

function filterTODO(event) {
    const [head, ...todos] = todoList.childNodes;
    console.log('First item :', head)
    console.log('The remaining items :', todos)

    todos.forEach(function (todo) {
        switch (event.target.value) {
            case "all" :
                todo.style.display = 'flex'
                break
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                }
                else {
                    todo.style.display = 'none'
                }
                break
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                }
                else {
                    todo.style.display = 'none'
                }
                break
        }
    })
}

function saveLocalTODOS(todo) {
    // Check if there is a items in store
    let todos
    if(localStorage.getItem('todos') === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getLocalTODOS() {
    // Check if there is a items in store
    let todos
    if(localStorage.getItem('todos') === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function (todo) {
        // Creating a todo div
        const todoElement = document.createElement('div')
        todoElement.classList.add('todo')

        // Creating List
        const newTodoElement = document.createElement('li')
        newTodoElement.innerText = todo
        newTodoElement.classList.add('todo-item')
        todoElement.appendChild(newTodoElement)

        // Clear TO DO input value
        todoInput.value = ''

        // Adding the Complete Button
        const completeButton = document.createElement('button')
        completeButton.innerHTML = `<i class="fas fa-check"></i>`
        completeButton.classList.add('complete-btn')
        todoElement.appendChild(completeButton)

        // Adding the Delete Button
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
        deleteButton.classList.add('delete-btn')
        todoElement.appendChild(deleteButton)

        // Appending the list element to the list
        todoList.appendChild(todoElement)
    })
}

function removeLocalTODOS(todo) {
    // Check if there is a items in store
    let todos
    if(localStorage.getItem('todos') === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    const todoIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem('todos', JSON.stringify(todos))
}