let quoteAge = document.querySelector(".Quote__Age");

export function fetchAge(quoteFirstName) {
  fetch("https://api.agify.io/?name=" + quoteFirstName)
    .then((response) => response.json())
    .then((json) => {
      quoteAge.textContent = "That person's estimated age is: " + json.age;
    })
    .catch((error) => {
      alert("There was an error!", error);
    });
}
