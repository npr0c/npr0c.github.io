/* loops and shuffles */
    const ack = document.getElementById("syn");
    const tracks = ["h8.mp3", "wow.mp3"];

    function play() {                  
    const rand = tracks[Math.floor(Math.random() * tracks.length)];    
    ack.src = rand;                                                    
    ack.play();
  }
document.body.addEventListener("click", play);
ack.addEventListener("ended", play);

