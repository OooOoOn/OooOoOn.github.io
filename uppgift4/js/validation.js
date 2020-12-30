function validation() {
    var vCode = document.getElementById("inputCodeBrowser").value ? document.getElementById("inputCodeBrowser").value : document.getElementById("inputCodeMobile").value;
    var vNumber = document.getElementById("inputNumberBrowser").value ? document.getElementById("inputNumberBrowser").value : document.getElementById("inputNumberMobile").value;
    
    if(vCode.length < 1 && vNumber.length < 1) {
        return "";
    }
    
    switch (vNumber) {
        case "+46766123456":
            if(verifyCode(vCode)) {
                setUsername(vNumber);
                return true;
            }
            break;    
        default:
            alert('Incorrect number');
            break;
    }
    return false;
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
            localStorage.setItem({ userName: 'Jon' });
            document.cookie = "username=Jon";
            break;    
        default:
            localStorage.setItem({ userName: 'Anonymous' });
            document.cookie = "username=Anonymous";
            break;
    }
}
let cookie = document.cookie;
console.log("cookie 1 is " + localStorage.getItem('userName'));
console.log("cookie 2 is " + cookie);
document.getElementById("user").innerHTML = localStorage.getItem('userName');
document.getElementById("user2").innerHTML = cookie;
