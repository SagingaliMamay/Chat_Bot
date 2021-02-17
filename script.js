var form1 = document.getElementById("chatForm2");

var accessMsg1 = document.getElementById("message2");

var displayMsg1 = document.getElementById("message1");

var mesValue1 = "You: " + accessMsg1.value;

var botHello = ["Hello", "Hey mate", "Good morning user"];
var randomBotHello = botHello[Math.floor(botHello.length * Math.random())];

var botGreetings = "Are you good today ?";

var yesAnswerVar = ["Cool", "I am glad to here that", "You lucky user"];
var randomYesAnswerVar = yesAnswerVar[Math.floor(yesAnswerVar.length * Math.random())];

var noAnswerVar = ["Not cool", "I am sad to here that", "I hope you enjoy your time here !"];
var randomNoAnswerVar = noAnswerVar[Math.floor(noAnswerVar.length * Math.random())];

var neitherNoOrYesVar = "I didn't understand, can you please try again ?";

var questionBot = ["Is it cold or hot outside ?", "You are my favourite user"];
var randomQuestionBot = questionBot[Math.floor(questionBot.length * Math.random())];

var botAnswerUserCold = "Don't forget your coat today";
var botAnswerUserHot = "Sunbathing all day today";

var botThanks = ["OK"];
var passwordBot = ["Now enter the password please !"]

var attemptsTry = 0;

var agressiveAnswer = "Dude, are you sure you went to school ? You can't read.";

var byeByeUser = "Good bye it has been fun !";

// for (let el of document.querySelectorAll("#logo1")) el.style.display = "none";

// for (let el of document.querySelectorAll(".gif")) el.style.display = "none";  

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

function scrollToBottom(id) {
  var div = document.getElementById(id);
  div.scrollTop = div.scrollHeight - div.clientHeight;
}


form1.addEventListener("submit", handleForm);

function sendMessage1() {
  displayMsg1.innerHTML =
    displayMsg1.innerHTML + "You: " + accessMsg1.value + "<br>";
  var userMessage = accessMsg1.value;

  scrollToBottom("message1");
  form1.reset();
  
  if (userMessage.includes("yes") == true) {
    setTimeout(function () {
      for (let el of document.querySelectorAll(".gif")) el.style.display = "";
    });
    setTimeout(function () {
      displayMsg1.innerHTML = displayMsg1.innerHTML + "Bot: " + randomYesAnswerVar + "<br>";scrollToBottom("message1");
      for (let el of document.querySelectorAll(".gif")) el.style.display = "none";
    }, 1000);
      
    setTimeout(function () {
      for (let el of document.querySelectorAll(".gif")) el.style.display = "";
    });
      setTimeout(function () {
      displayMsg1.innerHTML = displayMsg1.innerHTML + "Bot: " + randomQuestionBot + "<br>";scrollToBottom("message1");
        for (let el of document.querySelectorAll(".gif")) el.style.display = "none";
    }, 2000);
      
    } 
    else if (userMessage.includes("no") == true) {
     setTimeout(function () {
      for (let el of document.querySelectorAll(".gif")) el.style.display = "";
    });
      setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + randomQuestionBot + "<br>";scrollToBottom("message1")
      for (let el of document.querySelectorAll(".gif")) el.style.display = "none";
    }, 2000);

  }else if (userMessage.includes("thanks") == true) {
    setTimeout(function () {
      for (let el of document.querySelectorAll(".gif")) el.style.display = "";
    });
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + passwordBot + "<br>";scrollToBottom("message1")
    }, 2000);
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + botThanks + "<br>";scrollToBottom("message1")
        for (let el of document.querySelectorAll(".gif")) el.style.display = "none";
    }, 2000);}
    else if (userMessage.includes("thank you") == true) {
       setTimeout(function () {
      for (let el of document.querySelectorAll(".gif")) el.style.display = "";
    });
      setTimeout(function () {
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + passwordBot + "<br>";scrollToBottom("message1")
          for (let el of document.querySelectorAll(".gif")) el.style.display = "none";
      }, 2000);
        setTimeout(function () {
      for (let el of document.querySelectorAll(".gif")) el.style.display = "";
    });
      setTimeout(function () {
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + botThanks + "<br>";scrollToBottom("message1")
          for (let el of document.querySelectorAll(".gif")) el.style.display = "none";
      }, 2000);}
  else if(userMessage.includes("cold") == true){
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + botThanks + "<br>";scrollToBottom("message1")
    }, 2000);
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + botAnswerUserCold + "<br>";scrollToBottom("message1")
    }, 4000);
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + passwordBot + "<br>";scrollToBottom("message1")
    }, 5000);
  } else if(userMessage.includes("hot") == true){
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + botThanks + "<br>";scrollToBottom("message1")
    }, 2000);
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + botAnswerUserHot + "<br>";scrollToBottom("message1")
    }, 4000);
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + passwordBot + "<br>";scrollToBottom("message1")
    }, 5000);
  } else {
    attemptsTry = attemptsTry + 1;
    if (attemptsTry < 3) {
      setTimeout(function () {
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + neitherNoOrYesVar + "<br>";scrollToBottom("message1")
      }, 1000);

    } if (attemptsTry == 3) {
      setTimeout(function () {
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + agressiveAnswer + "<br>";scrollToBottom("message1")
      }, 2000);
      setTimeout(function () {
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + byeByeUser + "<br>";scrollToBottom("message1")
      }, 4000);

      document.getElementById("message2").disabled = true;
    }
  }
}

setTimeout(function () {
  greetings();
}, 2000);

function handleForm(event) {
  event.preventDefault();
}

function scrollToBottom(id) {
  var div = document.getElementById(id);
  div.scrollTop = div.scrollHeight - div.clientHeight;
}


form1.addEventListener("submit", handleForm);

function sendMessage1() {
  displayMsg1.innerHTML =
    displayMsg1.innerHTML + "You: " + accessMsg1.value + "<br>";
  var userMessage = accessMsg1.value;

  

  scrollToBottom("message1");
  form1.reset();
  
  if (userMessage.includes("yes") == true) {
      setTimeout(function () {
      });
    setTimeout(function () {
      displayMsg1.innerHTML = displayMsg1.innerHTML + "Bot: " + randomYesAnswerVar + "<br>";scrollToBottom("message1");}, 1000);
      setTimeout(function () {
      });
    setTimeout(function () {
      displayMsg1.innerHTML = displayMsg1.innerHTML + "Bot: " + randomQuestionBot + "<br>";scrollToBottom("message1")}, 2000);

    } 
    else if (userMessage.includes("no") == true) {
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + randomQuestionBot + "<br>";scrollToBottom("message1")
    }, 2000);

  }else if (userMessage.includes("thanks") == true) {
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + passwordBot + "<br>";scrollToBottom("message1")
    }, 2000);
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + botThanks + "<br>";scrollToBottom("message1")
    }, 2000);}
    else if (userMessage.includes("thank you") == true) {
      setTimeout(function () {
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + passwordBot + "<br>";scrollToBottom("message1")
      }, 2000);
      setTimeout(function () {
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + botThanks + "<br>";scrollToBottom("message1")
      }, 2000);}
  else if(userMessage.includes("cold") == true){
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + botThanks + "<br>";scrollToBottom("message1")
    }, 2000);
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
        displayMsg1.innerHTML + "Bot: " + botAnswerUserCold + "<br>";scrollToBottom("message1")
    }, 4000);
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + passwordBot + "<br>";scrollToBottom("message1")
    }, 5000);
  } else if(userMessage.includes("hot") == true){
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + botThanks + "<br>";scrollToBottom("message1")
    }, 2000);
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + botAnswerUserHot + "<br>";scrollToBottom("message1")
    }, 4000);
    setTimeout(function () {
      displayMsg1.innerHTML =
        displayMsg1.innerHTML + "Bot: " + passwordBot + "<br>";scrollToBottom("message1")
    }, 5000);
        displayMsg1.innerHTML + "Bot: " + randomNoAnswerVar + "<br>";
      for (let el of document.querySelectorAll(".gif"))
        el.style.display = "none";
    }, 1000);
  } else {
    attemptsTry = attemptsTry + 1;
    if (attemptsTry < 3) {
      setTimeout(function () {
        for (let el of document.querySelectorAll(".gif")) el.style.display = "";
      });
      setTimeout(function () {
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + neitherNoOrYesVar + "<br>";scrollToBottom("message1")
          displayMsg1.innerHTML + "Bot: " + neitherNoOrYesVar + "<br>";
        for (let el of document.querySelectorAll(".gif"))
          el.style.display = "none";
      }, 1000);

    } if (attemptsTry == 3) {
      setTimeout(function () {
        for (let el of document.querySelectorAll(".gif")) el.style.display = "";
      });
      setTimeout(function () {
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + agressiveAnswer + "<br>";scrollToBottom("message1")
          displayMsg1.innerHTML + "Bot: " + agressiveAnswer + "<br>";
        for (let el of document.querySelectorAll("#logo1"))
          el.style.display = "";
        for (let el of document.querySelectorAll("#logo"))
          el.style.display = "none";
        for (let el of document.querySelectorAll(".gif"))
          el.style.display = "none";
      }, 2000);
      setTimeout(function () {
        for (let el of document.querySelectorAll(".gif")) el.style.display = "";
      });
      setTimeout(function () {
        displayMsg1.innerHTML =
          displayMsg1.innerHTML + "Bot: " + byeByeUser + "<br>";scrollToBottom("message1")
      }, 4000);

      document.getElementById("message2").disabled = true;
      for (let el of document.querySelectorAll(".gif"))
        el.style.display = "none";
      document.getElementsByName("message2")[0].placeholder =
        "No more typing for you!";
      document.getElementById("message2").style.backgroundColor =
        "rgba(133,133,132,0.8)";
    }
  }
}

function scrollToBottom(id) {
  var div = document.getElementById(id);
  div.scrollTop = div.scrollHeight - div.clientHeight;
}

const ele = document.getElementById('message2');

ele.addEventListener('keydown', function(e) {
    // Get the code of pressed key
    const keyCode = e.which || e.keyCode;

    // 13 represents the Enter key
    if (keyCode === 13 && !e.shiftKey) {
        // Don't generate a new line
        e.preventDefault();

        // Do something else such as send the message to back-end
        // ...
    }
});
