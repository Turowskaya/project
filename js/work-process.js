var overlay = document.getElementById('button');
var vid = document.getElementById('video');

if(overlay.addEventListener){
    overlay.addEventListener("click", play, false);
}else if(overlay.addEventListener){
    overlay.addEventListener("onclick", play);
}

function play() {
    if (vid.paused){
        vid.play();
        overlay.className = "played";
    }else {
        vid.pause();
        overlay.className = " ";
    }
}

