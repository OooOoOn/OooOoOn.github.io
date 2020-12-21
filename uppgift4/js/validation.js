var username;

function validation() {
    var vCode = document.getElementById("inputCodeBrowser").value ? document.getElementById("inputCodeBrowser").value : document.getElementById("inputCodeMobile").value;
    var vNumber = document.getElementById("inputNumberBrowser").value ? document.getElementById("inputNumberBrowser").value : document.getElementById("inputNumberMobile").value;
    
    if(vCode.length < 1 && vNumber.length < 1){
        return "";
    }

    alert(vNumber);
    
    switch (vNumber) {
        case "+46766123456":
            if(verifyCode(vCode)) {
                setUsername(vNumber);
                successfulLogin();
            }
            break;    
        default:
            alert('Incorrect number');
            break;
    }
}

function verifyCode(code) {
    switch (code) {
        case "1111":
            return true;
            break;    
        default:
            alert('Incorrect verification code');
            break;
    }
}

function setUsername(vNumber) {
    switch (vNumber) {
        case "+46766123456":
            username = "Jon";
            break;    
        default:
            username = "Anonymous";
            break;
    }
}

function successfulLogin() {

//Redirecting to other page or webste code or you can set your own html page.
window.location('home.html');
}
