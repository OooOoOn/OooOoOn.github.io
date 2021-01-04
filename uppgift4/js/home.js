/* Fill out dynamic values */
document.getElementById("user").innerHTML = localStorage.getItem('userName');
document.getElementById("age").innerHTML = localStorage.getItem('userAge');
document.getElementById("location").innerHTML = localStorage.getItem('userLocation');
document.getElementById("image").src = localStorage.getItem('userImage');
