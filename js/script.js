import { fetchQuote } from "./fetchQuote.js";

let reset = document.querySelector(".Quote__Reset");
fetchQuote();
reset.addEventListener("click", fetchQuote);
