<h1 align="center">React Chat App</h1> <br/><br/>

## React Chat App
<p>Create the frontend for a chat application. You can check out the demo link down below.</p>


# Main Features
<ul>
    <li>Assume it is a dummy logged in user.</li>
    <li>Using a json file to load some dummy data in the project.</li>
    <li>Search : conversations is searchable by contact name.</li>
    <li>Left sidebar:</li>
    <ul>
        <li>Show all the conversations created here, from the API (using the fake json-server) </li>
        <li>Each conversation have the contact name and some text of the last message in the chat</li>
    </ul>
    <li>Create conversation button.</li>
    <ul>
        <li>On clicking the contact start a new conversation (if no conversation was previously started). Or open existing conversation for that contact.</li>
    </ul>
    <li>Right side view.</li>
    <ul>
        <li>Show the current selected conversation messages</li>
        <li>Send a message in the conversation</li>
    </ul>
    <li>Handle errors and success alerts etc.</li>
    <li>Handle errors as well from the API and show appropriate Alert/Notification.</li>
</ul>


# HOW TO INSTALL AND SETUP IN YOUR LOCAL PC/LAPTOP React App and Fake Json Server

<h6>Setp 1 -></h6> <p>First goto <a href="https://nodejs.org/en">Node js official website</a> to download node js in your pc/laptop</p>
</h6><p>if already installed than skip it.</p>

<h6>Setp 2 -></h6><p>Clone or download the zip of our project</p>
<a href="https://github.com/Karimansari4/reactChatApp.git">Git Repo Link</a>

<h6>Setp 3 -></h6><p>Extract the zip and go to root directory of project</p>

<h6>Setp 4 -></h6><p>Open CMD and type <h6>npm i</h6> it will install all the dependencies</p>

<h6>Setp 5 -></h6><p>Than goto chat directory and open cmd</p>

<p>To run fake json server on your local PC</p>
<h6>Setp 6 -></h6><p>Type on cmd json-server db.json --port 4000</p>
<a href="https://www.npmjs.com/package/json-server">Lear more about fake json server</a>

# Note
<p>To perform api request with fake json server you need to change url of axios request url to http://localhost:4000/products</p>

<h6>Setp 7 -></h6><p>Open one more cmd and type npm start to run react app</p>

<p>It will automatically redirect to Browser in localhost:3000</p>

<p>Project is setedup and runinng on localhost:3000/</p>

<h3>Demo Link -> <a href="https://6497de07f4f57452d09b5a21--musical-salmiakki-e66fd5.netlify.app/" target="_blank">Click here</a></h3>