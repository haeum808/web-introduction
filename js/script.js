const name1 = document.getElementById("name1");
const button1 = document.getElementById("button1");

const movie1 = document.getElementById("movie1");
const movie2 = document.getElementById("movie2");
const movie3 = document.getElementById("movie3");
const movie4 = document.getElementById("movie4");
const movie5 = document.getElementById("movie5");

button1.addEventListener("click", function() {
  var movie = 0;
  var name2 = name1.value;
  if (movie1.checked) {
    movie = movie + 1
  }
  if (movie2.checked) {
    movie = movie + 1
  }
  if (movie3.checked) {
    movie = movie + 1
  }
  if (movie4.checked) {
    movie = movie + 1
  }
  if (movie5.checked) {
    movie = movie + 1
  }
  alert(name2 + "님, 저와" + movie + "개의 취향이 같으시네요!");
});
