var halfInput = document.getElementById("half-input");
var halfButton = document.getElementById("half-button");
var fortuneInput = document.getElementById("fortune-input");
var fortuneButton = document.getElementById("fortune-button");
var fortuneOutput = document.getElementById("fortune-output");

halfButton.addEventListener("click", halfNumber);
fortuneButton.addEventListener("click", fortune);

function halfNumber(){
  alert(halfInput.value/2);
  console.log("Half of", halfInput.value, "is", (halfInput.value/2));
}

function fortune(){
  var fortuneList = ["You are going to achieve your upcoming goal!",
                    "Do not give up! You got this!",
                    "Sleep away your worries.",
                    "Take a walk outside. The weather is nice.",
                    "Take it easy, do not be so harsh on yourself.",
                    "Reward yourself with a nice treat."]
  var randomFortune = fortuneList[Math.floor(Math.random() * fortuneList.length)];
  fortuneOutput.innerHTML = fortuneInput.value + "," + randomFortune;
  restyle();
}

function restyle(){
  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;
  fortuneOutput.style.color = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

  var fontSize = ["1rem", "1.25rem", "1.5rem", "1.75rem", "2em", "2.25em"];
  fortuneOutput.style.fontSize = fontSize[Math.floor(Math.random() * fontSize.length)];

  var fontFamily = ["cursive", "Retro", "Big Shoulders Inline Text", "sans-serif", "Heather", "Jester"]
  fortuneOutput.style.fontFamily = fontFamily[Math.floor(Math.random() * fontFamily.length)];
}
