const body = document.querySelector("body");
const button = document.querySelector(".mode-selector");
const h1 = document.querySelector(".actualMode");

function changeMode() {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    h1.innerHTML = "Dark Mode ON";
  } else {
    h1.innerHTML = "Light Mode ON";
  }
}

button.addEventListener("click", changeMode);
