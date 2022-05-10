const todoList = document.querySelector('.todo-list');
const todoItem = document.querySelector('.todo-list__item');

// Event listener needs three parts:
// - an element to attach event to (todoItem)
// - a type of event (click)
// - an event function handler, function to call when event happens (handleTodoComplete)
todoItem.addEventListener('click', handleTodoComplete);

function handleTodoComplete(event) {
  // JS will pass an event object as an argument to an event handler function. Event objects will always be passed by JS and they are always contextual. Different event types come with different properties and methods on their event objects
  console.log('Event Object: ', event);

  // A very common event object property is the event.target and event.currentTarget, which always points to the element that triggered the event (known as context) or the element that the event has been attached to
  console.log('Complete Event Context: ', event.target);

  const currentItem = event.currentTarget;
  currentItem.classList.add('todo-list__item--completed');
}


const faveElement = document.querySelector('.fave');

const handleFaving = (event) => {
  // Fave icon is inside the todo list item, and both of them have the click event listener, so to prevent todo item being completed when we click on the heart icon, we can prevent the event bubbling by calling event.stopPropagation()
  event.stopPropagation();

  // event.target is the context of what triggered the event vs
  // event.currentTarget is the context of what element event was attached to 
  console.log('Fave Context: ', event.target);
  const currentFave = event.target;
  currentFave.classList.add('fave--enabled')
}

faveElement.addEventListener('click', handleFaving);


const todoInput = document.querySelector('.todo-form__input');

todoInput.addEventListener('keyup', handleInput);

function handleInput(event) {
  // As an example the keypress events have key pressed as a property on the event object
  console.log('Key Pressed: ', event.key);
}


const todoForm = document.querySelector('.todo-form');

// For event handlers you can pass in a named function, an anonymous function or an arrow function
todoForm.addEventListener('submit', function(event) {
  // Some events have the default behaviour, for example forms will reload the page. We can prevent the default behaviour by calling event.preventDefault()
  event.preventDefault();

  console.log('Form submitted: ', todoInput.value);

  // .value is a way to get a value of an input on the form
  const todoItemValue = todoInput.value;

  // Creating a new Todo list item and appending it to a list
  const newTodoItem = document.createElement('li');
  newTodoItem.classList.add('todo-list__item');
  newTodoItem.innerText = todoItemValue;
  todoList.appendChild(newTodoItem);

  // When we create a new element, the previous events won't automatically get attached to it, so we add it explicitly here 
  newTodoItem.addEventListener('click', handleTodoComplete);

  // Creating a new fave icon and appending it to the todo item
  const newFaveItem = document.createElement('span');
  newFaveItem.classList.add('fave');
  newFaveItem.innerText = '❤️';
  newTodoItem.appendChild(newFaveItem);

  // Same with the fave event listener, we need to add it to the new element
  newFaveItem.addEventListener('click', handleFaving);
});
