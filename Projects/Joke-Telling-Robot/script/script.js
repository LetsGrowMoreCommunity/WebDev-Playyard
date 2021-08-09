const btn = document.querySelector('#btn');
const jokeHeading = document.querySelector('#joke');

function getJokes(){
    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then( res => res.json())
    .then( data =>{
        const joke = data[0];
        // console.log(joke);
        const setup = joke.setup;
        const punchline = joke.punchline;
        const finalJoke = setup + ' ' + punchline;
        jokeHeading.innerHTML = finalJoke;
        setTextMessage(finalJoke);
        speakText();
    })
}

// init speech

const message = new SpeechSynthesisUtterance();

// set text

function setTextMessage(text){
    message.text = text;
}

function speakText(){
    speechSynthesis.speak(message);
}

btn.addEventListener('click', getJokes);
