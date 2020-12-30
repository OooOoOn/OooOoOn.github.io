document.cookie = "username=Jon; expires=Fri, 1 Jan 2021 12:00:00 UTC; path=/;";
let cookie = document.cookie;
console.log("cookie 1 is " + localStorage.getItem('userName'));
console.log("cookie 2 is " + cookie);
document.getElementById("user").innerHTML = localStorage.getItem('userName');
document.getElementById("user2").innerHTML = cookie;
alert("test " + cookie);
