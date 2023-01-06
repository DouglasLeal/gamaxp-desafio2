import EventAPI from "./API/EventApi.js";
import Event from "./models/Event.js";
import FlashMessageHelper from "./helpers/FlashMessageHelper.js";

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
        FlashMessageHelper.toggleMessage({element: elMessage, text: "Evento criado com sucesso.", type: "success"}); 
        form.reset();
    } catch (error) {
        FlashMessageHelper.toggleMessage({element: elMessage, text: "Não foi possível criar o evento. Tente mais tarde."});        
    }
}