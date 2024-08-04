const toggleList = () => {
  var list = document.getElementById("modal");
  if (list.classList.contains("hidden")) {
    list.classList.remove("hidden");
  } else {
    list.classList.add("hidden");
  }
};
