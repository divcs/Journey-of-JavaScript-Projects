// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});


// The toggleClass() method toggles between adding and removing one or more class names from the selected elements.
// This method checks each element for the specified class names. The class names are added if missing, and removed if already set - This creates a toggle effect.
// However, by using the "switch" parameter, you can specify to only remove, or only add a class name.