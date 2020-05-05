// youtube video on click
const donkeyLink = document.querySelector('.donkey-link');
const donkeyVideo = document.getElementById('donkey');
const donkeyOverlay = document.getElementById('donkey-overlay');


donkeyLink.addEventListener('click', showVideo)


function showVideo(){   
    donkeyOverlay.style.display = "block"
    donkeyOverlay.addEventListener('click', closeVideo)
}

function closeVideo(){
    donkeyVideo.src="";
    donkeyOverlay.style.display = 'none';
    donkeyVideo.src="https://www.youtube.com/embed/yvHddCNCfzw?start=0";
}