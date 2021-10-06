// add pageTitle
const pageTitle = "My Shopping List";
// add groceries

const groceries = [
  "milk", "cake", "biscuits", "candy", "eggs",
  "soda", "beer", "yogurt", "ice cream", "fish"
];

/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
function setPageTitle() {
  const header = document.getElementById("title");
  header.innerText = pageTitle;
  
}

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
function displayGroceries() {
  const list = document.getElementById("groceries");

  for(let i = 0; i < groceries.length; i++) {
    const myList = document.createElement('li');
    myList.innerText = groceries[i];
    list.appendChild(myList);

  }
  
}

/**
 * This function will be called when the button is clicked. You will need to get a reference
 * to every list item and add the class completed to each one
 */
function markCompleted() {
  let lists = document.getElementById("groceries").children;
  for(let i = 0; i < lists.length; i++) {
    lists[i].classList.add("completed");
  }
 
 
}

setPageTitle();

displayGroceries();

// Don't worry too much about what is going on here, we will cover this when we discuss events.
document.addEventListener('DOMContentLoaded', () => {
  // When the DOM Content has loaded attach a click listener to the button
  const button = document.querySelector('.btn');
  button.addEventListener('click', markCompleted);
});
