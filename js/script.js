function myFunction() {
  var x = document.getElementById("sidebar");
  var icon = document.getElementById("menu-btn");
  if (x.style.display == "block") {
    x.style.display = "none";
    icon.className = "fas fa-bars";
    icon.style.fontSize = "20px";
    icon.style.color = "white";
  } else {
    x.style.display = "block";
    icon.className = "fas fa-times";
    icon.style.fontSize = "20px";
    icon.style.color = "white";
    icon.innerHTML = "";
  }
}
