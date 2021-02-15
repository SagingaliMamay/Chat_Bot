var form1 = document.getElementById("chatForm2");

var accessMsg1 = document.getElementById('message2');

var displayMsg1 = document.getElementById('message1');

var mesValue1 = 'You: ' + accessMsg1.value;


var botHello = "Hello";
var botGreetings = "How are you ?";
var yesAnswerVar = "Cool";
var noAnswerVar = "Not cool";
var neitherNoOrYesVar = "I didn't understand, can you please try again"

function helloOnload() {
    displayMsg1.innerHTML = displayMsg1.innerHTML + 'Bot: ' + botHello + "<br>";

}
helloOnload();

function greetings() {
    displayMsg1.innerHTML = displayMsg1.innerHTML + 'Bot: ' + botGreetings + "<br>";
}

setTimeout(function(){ greetings(); }, 2000);

function handleForm(event) {
    event.preventDefault();
}

var attemptsTry = 0;

form1.addEventListener('submit', handleForm);

function sendMessage1() {
    displayMsg1.innerHTML = displayMsg1.innerHTML + 'You: ' + accessMsg1.value + "<br>";
    var userMessage = accessMsg1.value;
    
    scrollToBottom('message1');
    form1.reset();
        if (userMessage == "yes") {
            setTimeout(function(){ displayMsg1.innerHTML = displayMsg1.innerHTML +"Bot: "+yesAnswerVar + "<br>"; }, 1000);
        }
        else if (userMessage == "no") {
            setTimeout(function(){ displayMsg1.innerHTML = displayMsg1.innerHTML +"Bot: "+noAnswerVar + "<br>"; }, 1000);
        }
        else {
            attemptsTry = attemptsTry + 1;
            setTimeout(function(){ displayMsg1.innerHTML = displayMsg1.innerHTML +"Bot: "+neitherNoOrYesVar + "<br>"; }, 1000);
            if(attemptsTry>=3) {
                alert("fuck");
            }
        }
        console.log(attemptsTry);
}

function scrollToBottom(id) {
    var div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight;
}



