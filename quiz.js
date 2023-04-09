const form = document.querySelector('form');
const result = document.querySelector('#result');
const container = document.getElementById("container");
const button = document.createElement("button");

// Define an object to store the user's answers
const answers = {
  depression: 0,
  anxiety: 0
};

// Add an event listener to the form submit button
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Loop through the checkboxes and update the answers object
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      if (checkbox.value === "depression") {
        answers.depression++;
      } else if (checkbox.value === "anxiety") {
        answers.anxiety++;
      }
    }
  });

  // Determine the result based on the user's answers and display it
  if (answers.depression > answers.anxiety && answers.depression>=3) {
    result.textContent = "You may be experiencing symptoms of depression.Hence,proceed further to depression Test"
    ;
   
  } 
  else if (answers.anxiety > answers.depression && answers.anxiety>=3) {
    result.textContent = "You may be experiencing symptoms of anxiety.Hence,proceed further to Anxiety Test"
    ;
   
  }
  else if (answers.anxiety <3 && answers.depression <3) {
    result.textContent = "You may be facing temporary stress";
   
    
  }
  
   else {
    result.textContent = "You may be experiencing symptoms of both depression and anxiety.";
   
  }
});