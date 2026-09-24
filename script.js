const subtitle = document.querySelector("#subtitle");

subtitle.textContent = "i am from niger";

const button = document.createElement("button");
button.textContent = "click me "
const buttonContainer = document.querySelector("#about");
about.appendChild(button)

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const sucessMessage = document.createElement('p');
sucessMessage.style.color = "green";
sucessMessage.style.margin = "20px";
sucessMessage.style.fontSize = "18px";

const contactsection = document.querySelector('#contact')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const formdata = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,

    };
    sucessMessage.textContent = `hello ${formdata.name}, we have recived your message: ${ formdata.message}.
                       A response email will be sent to ${ formdata.email}`
    contactsection.appendChild(sucessMessage);
})

