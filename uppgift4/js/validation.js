/* Login validation */
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
            localStorage.setItem( 'userName', 'Knut Knutson' );
            localStorage.setItem( 'userAge', '56' );
            localStorage.setItem( 'userLocation', 'Malmö' );
            localStorage.setItem( 'userImage', 'img/Man1.png' );
            localStorage.setItem( 'userDescription', 'Jag heter Knut Knutson och kommer från Toarp, Skåne. Under de senaste fyrtio åren jobbade jag som en sjuksköterska på en vårdcentral i Svedala. Ursprungligen kommer jag från Småland där en hel del av min familj fortfarande bor. Jag har 3 barn och 4 barnbarn men tyvärr ingen av de bor kvar i Skåne. Efter att ha blivit pensionerad har jag mycket tid att ägna mig åt aktiviteter jag gillar så som hästar, motorsport eller skogspromenader. Hör av dig om du vill prata mer eller träffas över en god kopp kaffe.' );
            localStorage.setItem( 'userAlias', 'Knutan' );
            localStorage.setItem( 'userDOB', '23 Mars 1948' );
            localStorage.setItem( 'userEmail', 'knutknutson@gmail.com' );
            localStorage.setItem( 'userPhone', '0766123456' );
            break;    
        default:
            localStorage.setItem( 'userName', 'Anonymous' );
            localStorage.setItem( 'userAge', 'Unknown' );
            localStorage.setItem( 'userLocation', 'Unknown' );
            localStorage.setItem( 'userDescription', 'Beskrivning saknas' );
            localStorage.setItem( 'userAlias', 'Unknown' );
            localStorage.setItem( 'userDOB', 'Unknown' );
            localStorage.setItem( 'userEmail', 'Unknown@gmail.com' );
            localStorage.setItem( 'userPhone', 'Unknown' );
            break;
    }
}
/* Triggers a permit camera event for future implementation of facial recognition. Work in progress. */
function facialRecognition() {
var video = document.getElementById('video');
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
 navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
 video.src = window.URL.createObjectURL(stream);
 video.play();
 });
}

}


