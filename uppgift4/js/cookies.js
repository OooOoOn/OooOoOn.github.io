document.getElementById("user").innerHTML = localStorage.getItem('userName');
document.getElementById("age").innerHTML = localStorage.getItem('userAge');
document.getElementById("location").innerHTML = localStorage.getItem('userLocation');
var userImage = localStorage.getItem('userImage');
document.getElementById("image").src = userImage;

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
    document.getElementById("chatUser").innerHTML = localStorage.getItem('chatUser');
    document.getElementById("chatUserImage").src = localStorage.getItem('chatUserImage');
    
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


