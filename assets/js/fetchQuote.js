import { fetchAge } from "/assets/js/age.js";

let quoteText = document.querySelector(".Quote__Text");
let quoteCaption = document.querySelector(".Quote__Caption");
let quotePicture = document.querySelector(".Quote__Picture");
export let quoteFirstName;
export function fetchQuote() {
  fetch("https://thatsthespir.it/api")
    .then((response) => response.json())
    .then((json) => {
      quotePicture.style.backgroundImage = "url(" + json.photo + ")";
      quoteText.innerHTML = '"' + json.quote + '"';
      quoteCaption.innerHTML = "-" + json.author;
      let quoteName = json.author;
      let quoteFirstName = quoteName.split(" ")[0];
      fetchAge(quoteFirstName);
    })
    .catch((error) => {
      alert("There was an error!", error);
    });
}
