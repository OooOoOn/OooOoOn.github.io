/* Fill out dynamic values */
document.getElementById("alias").value = localStorage.getItem('userAlias');
document.getElementById("DOB").value = localStorage.getItem('userDOB');
document.getElementById("email").value = localStorage.getItem('userEmail');
document.getElementById("phone").value = localStorage.getItem('userPhone');
document.getElementById("location").value = localStorage.getItem('userLocation');
document.getElementById("image").src = localStorage.getItem('userImage');
document.getElementById("image2").src = localStorage.getItem('userImage');
document.getElementById("profileDescription").innerHTML = localStorage.getItem('userDescription');
document.getElementById("user").value = localStorage.getItem('userName');



