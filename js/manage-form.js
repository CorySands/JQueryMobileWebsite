// Save values to local storage
function post() {
  localStorage.setItem("fname", document.getElementById("fname").value); 
  localStorage.setItem("lname", document.getElementById("lname").value); 
  localStorage.setItem("email", document.getElementById("email").value); 
  localStorage.setItem("phone", document.getElementById("phone").value); 
  localStorage.setItem("message", document.getElementById("message").value);
}

// Apply local storage to page
datamembers = ["fname", "lname", "email", "phone", "message"]
datamembers.forEach(element => {
 if (localStorage.getItem(element)) 
  document.getElementById(element).innerHTML = localStorage.getItem(element);
});

