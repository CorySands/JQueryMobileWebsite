// Languages to handle
listings = ["CSharp", "C++", "CSS", "HTML", "JS", "Python"]

// Update local storage data for favorites
function update() { 
  listings.forEach(element => {
    localStorage.setItem("fav-" + element, document.getElementById("fav-" + element).value); 
  });
}

// Apply local storage data to page
listings.forEach(element => {
 if (localStorage.getItem("fav-" + element)) 
  document.getElementById("fav-" + element).innerHTML = localStorage.getItem("fav-" + element);
});
