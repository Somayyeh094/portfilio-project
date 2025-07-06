function read() {
  if (text.classList.contains("hidden")) {
    text.classList.remove("hidden");
    button.innerHTML = "Less...";
  } else {
    text.classList.add("hidden");
    button.innerHTML = "Read more...";
  }
}
let button = document.getElementById("more");
let text = document.getElementById("readMore");
button.addEventListener("click", read);
