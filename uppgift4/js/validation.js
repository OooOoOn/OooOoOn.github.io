//let cookie = document.cookie;

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
            window.localStorage.setItem({ userName: 'Jon' });
            console.log(window.localStorage.getItem('userName'));
            // document.cookie = "username=Jon; path=/home";
            break;    
        default:
            // document.cookie = "username=Anonymous";
            window.localStorage.setItem({ userName: 'Anonymous' });
            break;
    }
}

document.getElementById("user").innerHTML = window.localStorage.getItem('userName');
