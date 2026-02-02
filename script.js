//your JS code here. If required.
const form = document.getElementById("voting-form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from submitting normally

  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  // Validation: ensure inputs are not empty
  if (!name || !age) {
    alert("Please enter valid details"); // Removed the period to match Cypress
    return;
  }

  // Promise to check voting eligibility
  const checkEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  });

  // Handle promise
  checkEligibility
    .then(message => alert(message))
    .catch(message => alert(message));
});