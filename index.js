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

fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
.then(response => response.json())
.then(data => data[0].meanings[0].definitions[0].definition)
.then(data => document.getElementById('dictionary-output').value = `${data}`)
.catch(err => console.error(err));
});

const submit_topic_for_translator = document.getElementById('myForm2').addEventListener('submit', (event) => { 
    event.preventDefault()

    text = document.getElementById('translator-input').value

    const fetch_translator = (text, to_translate, translate_in) => {
        fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${to_translate}|${translate_in}`)
        .then(response => response.json())
        .then(data => document.getElementById('translator-output').value = `${data.responseData.translatedText}`)
        .catch(error => console.log(error))
    }

    const to_translate = document.getElementById('to-translate')
    const translate_in = document.getElementById('translate-in')

    let languange_to_translate;
    let translate_to_languange;

    switch(to_translate.value) {
        case 'English':
            languange_to_translate = 'en'
            break
        case 'Tagalog':
            languange_to_translate = 'tl'
            break
        case 'Spanish':
            languange_to_translate = 'es'
            break
        case 'Mandarin':
            languange_to_translate = 'zh'
            break
        case 'Russian':
            languange_to_translate = 'ru'
            break
        case 'Japanese':
            languange_to_translate = 'ja'
            break
    }

    switch(translate_in.value) {
        case 'English':
            translate_to_languange = 'en'
            break
        case 'Tagalog':
            translate_to_languange = 'tl'
            break
        case 'Spanish':
            translate_to_languange = 'es'
            break
        case 'Mandarin':
            translate_to_languange = 'zh'
            break
        case 'Russian':
            translate_to_languange = 'ru'
            break
        case 'Japanese':
            translate_to_languange = 'ja'
            break
    }

    fetch_translator(text, languange_to_translate, translate_to_languange)
})