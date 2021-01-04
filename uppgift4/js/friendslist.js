/* Fill out dynamic values */
document.getElementById("image").src = localStorage.getItem('userImage');
document.getElementById("image2").src = localStorage.getItem('userImage');
document.getElementById("image3").src = localStorage.getItem('userImage');
document.getElementById("user").innerHTML = localStorage.getItem('userName').split(" ")[0];
document.getElementById("user2").innerHTML = localStorage.getItem('userName').split(" ")[0];

$(function(){
    $("#addClass ,#addClass2, #addClass3, #addClass4, #addClass5, #addClass6").click(function () {
             $('#qnimate').addClass('popup-box-on');
               });
             
               $("#removeClass").click(function () {
             $('#qnimate').removeClass('popup-box-on');
               });
})


/* Get chat user info for dynamic chat */
function chattingWith(user) {
    localStorage.removeItem('chatUser');
    localStorage.removeItem('chatUserImage');
    switch (user) {
        case "user1":
            localStorage.setItem( 'chatUser', 'Kurt' );
            localStorage.setItem( 'chatUserImage', 'img/Man1.jpg' );
            break;   
        case "user2":
            localStorage.setItem( 'chatUser', 'Berit' );
            localStorage.setItem( 'chatUserImage', 'img/Woman3.jpg' );
            break;    
        case "user3":
            localStorage.setItem( 'chatUser', 'Ingeborg' );
            localStorage.setItem( 'chatUserImage', 'img/Woman2.jpg' );
            break;    
        case "user4":
            localStorage.setItem( 'chatUser', 'Märta' );
            localStorage.setItem( 'chatUserImage', 'img/Woman4.jpg' );
            break;    
        case "user5":
            localStorage.setItem( 'chatUser', 'Rolf' );
            localStorage.setItem( 'chatUserImage', 'img/Man2.jpg' );
            break;    
        case "user6":
            localStorage.setItem( 'chatUser', 'Håkan' );
            localStorage.setItem( 'chatUserImage', 'img/Man3.jpg' );
            break;     
        default:
            localStorage.setItem( 'userName', 'Anonymous' );
            break;
    }
    document.getElementById("chatUserReply").innerHTML = getReply();
    document.getElementById("chatUser").innerHTML = localStorage.getItem('chatUser');
    document.getElementById("chatUserImage").src = localStorage.getItem('chatUserImage');
    document.getElementById("chatUserImage2").src = localStorage.getItem('chatUserImage');
    
    /* Update chat messages time stamp with a 10 sec interval (non dynamic solution for now) */
    var today = new Date();
    localStorage.setItem( 'currentTime', getTime(today) );
    document.getElementById("currentTime").innerHTML = localStorage.getItem('currentTime');
    today.setSeconds(today.getSeconds() + 10);
    localStorage.setItem( 'currentTimeDelay', getTime(today) );
    document.getElementById("currentTimeDelay").innerHTML = localStorage.getItem('currentTimeDelay');
}

function getTime(today) {
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
}
/* Random chat replies */
function sendReply() {
    localStorage.setItem( 'userReply', document.getElementById( "status_message" ).value );
    document.getElementById("userReply").innerHTML = localStorage.getItem('userReply');
    document.getElementById("status_message").value = "";
}

function getReply() {
    var userGeneratedReplies = [
        "Jodå det går bra, sj då? Gratulera Jon till hans VG!",
        "Helt ok! Du glömmer väl inte Jons VG?",
        "Jag lever! Hur är det med dig?",
        "*host* VG *harkel*",
        "Vi mår alla bra! Du?"
    ];
    let userReply = userGeneratedReplies[Math.floor(Math.random() * userGeneratedReplies.length)];
    return document.getElementById("chatUserReply").innerHTML = userReply;
}





