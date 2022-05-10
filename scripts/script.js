/**
 * We need 4 things when creating Event Handlers
 * 
 * 1. Element -> document.createElement / querySelector
 * 2. addEventListener
 * 3. type of event -> String
 * 4. function: Event Handler
 */

// document.addEventListener("mousemove", (event) => {
//     console.log(event);
// });


// Add event handler for page title (click event)
const pageTitleEl = document.querySelector(".page__title");
pageTitleEl.addEventListener("click", () => {
    // How can we change the color of the pageTitle text when it is clicked?
    // Bad: No styles in JavaScript, plz.

    // add modified class to the element: pageTitle 

    pageTitleEl.classList.add("page__title--clicked");
});


// Add event handler for To Do items
/* Use querySelectorAll and attached event handler to each todos__item */

const todoItemEl = document.querySelector(".todos__item");
// Listen for events on todoItemEl
todoItemEl.addEventListener("click", () => {
    todoItemEl.classList.toggle("todos__item--completed");
})