/**
 * We need 4 things when creating Event Handlers
 *
 * 1. Element -> document.createElement / querySelector
 * 2. addEventListener
 * 3. type of event -> String
 * 4. function: Event Handler
 */

document.addEventListener("mousemove", (event) => {
  console.log(event);
});

/**
 * Change color of the page__title element when clicked
 * Also, prevent propagation of click events!
 */
const pageTitleEl = document.querySelector(".page__title");
pageTitleEl.addEventListener("click", (event) => {
  // Adding styles to JavaScript breaks Separation of Concerns policy
  // Do NOT do this:
  // pageTitleEl.style.color = "red";

  // add modified class to the element
  pageTitleEl.classList.add("page__title--clicked");

  // prevent event bubbling
  event.stopPropagation();
});

/** Add a click event to the entire page that updates the background color */
const pageEl = document.querySelector(".page");
pageEl.addEventListener("click", () => {
  pageEl.classList.add("page--red");
});

/**
 * When clicking on a to do item, add a --completed modifier
 * that adds different styles in scss. Use querySelectorAll()
 * to grab all elements as a NodeList, add a loop going from 0 to
 * the length of the to do items. Then grab individual element in each
 * iteration and add a modifier class!
 */
const todoItemEls = document.querySelectorAll(".todos__item");
for (let i = 0; i < todoItemEls.length; i++) {
  const todoItemEl = todoItemEls[i];
  todoItemEl.addEventListener("click", () => {
    todoItemEl.classList.toggle("todos__item--completed");
  });
}

/**
 * If the user enters the Konami code on their keyboard, alert
 * a message to the user */
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

/**
 * When a user enters a key, check if the inputted key is the next key 
 * in the Konami Code sequence. If so, add it to the inputKeys array, 
 * otherwise, reset the sequence by emptying the inputKeys array.
 * Once the input keys matches up with the Konami Code, show Game Over
 * screen.
 */
let inputKeys = [];
window.addEventListener("keyup", (event) => {
  // if the event.key is the right one in sequence of konamiCode, add it to inputKeys
  if (konamiCode[inputKeys.length] === event.key) {
    inputKeys.push(event.key);
  } else {
    inputKeys = [];
  }

  if (inputKeys.length === konamiCode.length) {
      // when the konami code is complete, run the code in 
      // showGameOverScreen function
      showGameOverScreen();
  }
});

/**
 * Hide page element and show the game over element!
 */
function showGameOverScreen() {
    document.querySelector(".page").classList.add("page--hidden");
    document.querySelector(".game-over").classList.add('game-over--show');
}