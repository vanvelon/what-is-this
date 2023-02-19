var count = 0;
var countElement = document.getElementById("count");

function increment() {
  count++;
  countElement.innerHTML = count;
}

function decrement() {
  count--;
  countElement.innerHTML = count;
}
