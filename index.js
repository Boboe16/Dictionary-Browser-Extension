const translator_nav = document.getElementById('translator-nav').addEventListener('click', () => {
    document.getElementById('dictionary').style.visibility = 'hidden'
    document.getElementById('translator').style.visibility = 'visible'
})

const dictionary_nav = document.getElementById('dictionary-nav').addEventListener('click', () => {
    document.getElementById('translator').style.visibility = 'hidden'
    document.getElementById('dictionary').style.visibility = 'visible'
})

const submit_topic_for_dictionary = document.getElementById('myForm').addEventListener('submit', (event) => {
event.preventDefault();
const word = document.querySelector('#dictionary-input').value;
fetch('http://localhost:3000/word', {
    method: 'POST',
    body: JSON.stringify({ word }),
    headers: { 'Content-Type': 'application/json' }
})
.then(res => res.json())
.then(res => Object.entries(res))
.then(res => Object.entries(res[2][1]))
.then(res => Object.entries(res[0][1]))
.then(res => Object.entries(res[0][1]))
.then(res => Object.entries(res[3]))
.then(res => Object.entries(res[1]))
.then(res => res[1][1])
.then(data => {
    const cleanText = (data) => {
    return data.replace(/(<([^>]+)>)/ig,"").replace(/\n/g, "");
    };
    document.getElementById('dictionary-output').value = `${cleanText(data)}`
})
.catch(err => console.error(err));
});

const submit_topic_for_translator = document.getElementById('myForm2').addEventListener('submit', (event) => { 
    event.preventDefault()
    text = document.getElementById('translator-input').value
    fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=tl|en`)
    .then(response => response.json())
    .then(data => document.getElementById('translator-output').value = `${data.responseData.translatedText}`)
    .catch(error => console.log(error))
})