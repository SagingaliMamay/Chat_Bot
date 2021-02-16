var form1 = document.getElementById("chatForm2");

var accessMsg1 = document.getElementById("message2");

var displayMsg1 = document.getElementById("message1");

var mesValue1 = "You: " + accessMsg1.value;

var botHello = ["Hello", "Hey mate", "Good morning user"];
var randomBotHello = botHello[Math.floor(botHello.length * Math.random())];

var botGreetings = "How do you feel today";

var yesAnswerVar = ["Cool", "I am glad to here that", "You lucky user"];
var randomYesAnswerVar =
  yesAnswerVar[Math.floor(yesAnswerVar.length * Math.random())];

var noAnswerVar = [
  "Not cool",
  "I am sad to here that",
  "I hope you enjoy your time here !",
];
var randomNoAnswerVar =
  noAnswerVar[Math.floor(noAnswerVar.length * Math.random())];

var neitherNoOrYesVar = "I didn't understand, can you please try again ?";

var attemptsTry = 0;

var agressiveAnswer = "Dude, are you sure you went to school ? You can't read.";

var byeByeUser = "Good bye it has been fun !";

<<<<<<< HEAD
for (let el of document.querySelectorAll(".logo1")) el.style.display = "none";

for (let el of document.querySelectorAll(".gif")) el.style.display = "none";

=======
>>>>>>> ae4d25621803f2c8258b43efd2389bcf9b92bd2f
function helloOnload() {
  displayMsg1.innerHTML =
    displayMsg1.innerHTML + "Bot: " + randomBotHello + "<br>";
}
helloOnload();

function greetings() {
  displayMsg1.innerHTML =
    displayMsg1.innerHTML + "Bot: " + botGreetings + "<br>";
}

setTimeout(function () {
  greetings();
}, 2000);

function handleForm(event) {
  event.preventDefault();
}

form1.addEventListener("submit", handleForm);

function sendMessage1() {
  displayMsg1.innerHTML =
    displayMsg1.innerHTML + "You: " + accessMsg1.value + "<br>";
  var userMessage = accessMsg1.value;

  const ele = document.getElementById("message2");
  ele.addEventListener("keydown", function (e) {
    const keycode = e.which || e.keyCode;
    if (keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
    }
  });

  scrollToBottom("message1");
  form1.reset();
  if (userMessage.includes("yes") == true) {
    setTimeout(function () {
<<<<<<< HEAD
      for (let el of document.querySelectorAll(".gif")) el.style.display = "";
    });
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + randomYesAnswerVar + "<br>";
      for (let el of document.querySelectorAll(".gif"))
        el.style.display = "none";
    }, 1000);
  } else if (userMessage.includes("no") == true) {
    setTimeout(function () {
      for (let el of document.querySelectorAll(".gif")) el.style.display = "";
    });
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + randomNoAnswerVar + "<br>";
      for (let el of document.querySelectorAll(".gif"))
        el.style.display = "none";
=======
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + randomYesAnswerVar + "<br>";
    }, 1000);
  } else if (userMessage.includes("no") == true) {
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + randomNoAnswerVar + "<br>";
>>>>>>> ae4d25621803f2c8258b43efd2389bcf9b92bd2f
    }, 1000);
  } else {
    attemptsTry = attemptsTry + 1;
    if (attemptsTry < 3) {
      setTimeout(function () {
<<<<<<< HEAD
        for (let el of document.querySelectorAll(".gif")) el.style.display = "";
      });
      setTimeout(function () {
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + neitherNoOrYesVar + "<br>";
        for (let el of document.querySelectorAll(".gif"))
          el.style.display = "none";
=======
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + neitherNoOrYesVar + "<br>";
>>>>>>> ae4d25621803f2c8258b43efd2389bcf9b92bd2f
      }, 1000);
    }
    if (attemptsTry == 3) {
      setTimeout(function () {
<<<<<<< HEAD
        for (let el of document.querySelectorAll(".gif")) el.style.display = "";
      });
      setTimeout(function () {
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + agressiveAnswer + "<br>";
        for (let el of document.querySelectorAll(".logo1"))
          el.style.display = "";
        for (let el of document.querySelectorAll(".logo"))
          el.style.display = "none";
        for (let el of document.querySelectorAll(".gif"))
          el.style.display = "none";
      }, 2000);
      setTimeout(function () {
        for (let el of document.querySelectorAll(".gif")) el.style.display = "";
      });
      setTimeout(function () {
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + byeByeUser + "<br>";
        for (let el of document.querySelectorAll(".gif"))
          el.style.display = "none";
=======
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + agressiveAnswer + "<br>";
      }, 2000);
      setTimeout(function () {
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + byeByeUser + "<br>";
>>>>>>> ae4d25621803f2c8258b43efd2389bcf9b92bd2f
      }, 4000);
      document.getElementById("message2").disabled = true;
    }
  }
}

function scrollToBottom(id) {
  var div = document.getElementById(id);
  div.scrollTop = div.scrollHeight - div.clientHeight;
}
