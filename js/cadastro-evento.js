import EventAPI from "./API/EventApi.js";
import Event from "./models/Event.js";

let form = document.querySelector("form");
let elMessage = document.querySelector(".message-result");

form.onsubmit = async (event) => {
    event.preventDefault();

    let newEvent = new Event({});

    for(const input of form.elements){
        if(input.name !== ""){
            newEvent[input.name] = input.value;
        }
    }

    try {
        await EventAPI.post(newEvent.getAll());
        toggleMessage("Evento criado com sucesso.");
        form.reset();
    } catch (error) {        
        toggleMessage("Não foi possível criar o evento. Tente mais tarde.", false);
    }
}

function toggleMessage(text, success = true){
    elMessage.innerText = text;

    elMessage.classList.remove("d-none");

    if(success){
        elMessage.classList.add("alert-success");
        elMessage.classList.remove("alert-danger");
    }else{
        elMessage.classList.remove("alert-success");
        elMessage.classList.add("alert-danger");
    }
}

