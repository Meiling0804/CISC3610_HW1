const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const pauseButton = document.getElementById('pauseButton');
//let currentSound = null;

const sound1 = document.getElementById("sound1");
const sound2 = document.getElementById("sound2");
const sound3 = document.getElementById("sound3");
const sound4 = document.getElementById("sound4");
const sound5 = document.getElementById("sound5");

button1.addEventListener("click", () => {
	sound1.currentTime = 0;
	sound1.play();
});

button2.addEventListener("click", () => {
	sound2.currentTime = 0;
	sound2.play();
});

button3.addEventListener("click", () => {
	sound3.currentTime = 0;
	sound3.play();
});

button4.addEventListener("click", () => {
	sound4.currentTime = 0;
	sound4.play();
});

button5.addEventListener("click", () => {
	sound5.currentTime = 0;
	sound5.play();
});
pauseButton.addEventListener("click", () => {
	sound1.pause();
	sound2.pause();
	sound3.pause();
	sound4.pause();
	sound5.pause();
});
 
  
  
  
  
  
