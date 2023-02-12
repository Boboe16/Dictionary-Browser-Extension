<h1>Language Translator & Dictionary</h1>
Tired of having to switch between different websites for translation and dictionary purposes? Say goodbye to that hassle with Language Translator & Dictionary! With just one click, get both translation and definition of any word right in one place.

This is a browser extension that provides functionality to translate and search for definitions of words. It makes use of two APIs:
<ul>
<li>The Dictionary API (dictionaryapi.dev) to search for definitions of words</li>
<li>The MyMemory Translated API (mymemory.translated.net) to translate texts to different languages</li>
</ul>
The extension is written in JavaScript and uses the browser's local storage to save words and their definitions/translations.

<h2>How to Use</h2>
<ol>
<li>Download the code from the repository and unzip it.</li>
<li>Open Google Chrome and go to chrome://extensions/</li>
<li>Enable the developer mode from the top-right corner.</li>
<li>Click on "Load Unpacked" and select the unzipped folder.</li>
<li>The extension will be added to the browser, and you can access it from the browser toolbar.</li>
<li>Shortcut the extension through chrome://extensions/shortcuts</li>
</ol>

<h2>Code Functions</h2>
The code is written in JavaScript and has several functions. Let's discuss each function in detail:
<ul>
<li>translator_nav and dictionary_nav:</li>
These functions add a click event listener to the navigation buttons for the translator and dictionary sections. When the respective button is clicked, the visibility of the corresponding section is changed to visible while the visibility of the other section is changed to hidden.

<li>submit_topic_for_dictionary:</li>
This function adds a submit event listener to the dictionary form. When the form is submitted, the word entered by the user is fetched from the API and its definition is displayed in the output field.

<li>submit_topic_for_translator:</li>:
This function adds a submit event listener to the translator form. When the form is submitted, the text entered by the user is translated from one language to another, as specified by the user, using the API. The translated text is displayed in the output field.
</ul>
<h2>Conclusion</h2>
Language Translator & Dictionary is a browser extension that provides functionality to translate and search for definitions of words. The code is written in JavaScript and makes use of APIs to provide the desired functionality. The code functions are well explained, and you can easily understand how the extension works.
