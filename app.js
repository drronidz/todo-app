
// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event Listeners
todoButton.addEventListener('click', addTodo)

// Functions

function addTodo(event) {

    // preventing the form from submitting
    event.preventDefault()

    // Creating a list element (to do item)
    const todoElement = document.createElement('div')
    todoElement.classList.add('todo')

    // Create LI
    const newTodoElement = document.createElement('li')
    newTodoElement.innerText = 'hey'
    newTodoElement.classList.add('todo-item')
    todoElement.appendChild(newTodoElement)


    // Adding the CheckMark Button
    const completeButton = document.createElement('button')
    completeButton.innerHTML = '<i class="fas fa-check"></i>'
    completeButton.classList.add('complete-btn')
    todoElement.appendChild(completeButton)

    // Adding the TRASH Button
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add('complete-btn')
    todoElement.appendChild(deleteButton)

    // Appending the list element to the list
    todoList.appendChild(todoElement)
}