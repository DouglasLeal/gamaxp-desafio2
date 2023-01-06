import EventApi from "./API/EventApi.js";
import LocationHelper from "./helpers/LocationHelper.js";
import FlashMessageHelper from "./helpers/FlashMessageHelper.js";
import Event from "./models/Event.js";

let form = document.querySelector("form");
let elMessage = document.querySelector(".message-result");

let idEvent = null;

form.onsubmit = async (ev) => {
    ev.preventDefault();

    let event = new Event({});

    for(const input of form.elements){
        if(input.name !== ""){
            event[input.name] = input.value;
        }
    }

    try {
        await EventApi.put(idEvent, event.getAll());
        FlashMessageHelper.setCookie("flash-message", "Evento editado com sucesso.", 1)
        LocationHelper.redirect("admin.html");
    } catch (error) {
        FlashMessageHelper.toggleMessage({element: elMessage, text: "Não foi possível editar o evento."});
    }
}

(async function fillForm() {
    idEvent = LocationHelper.getIdFromUrl();
    let event = await EventApi.getById(idEvent);

    for (const input of form.elements) {
        if (input.name != "") {
            input.value = event[input.name];
        }
    }

    form.elements['scheduled'].value = new Date(event.scheduled).toLocaleString('pt-BR', { timeZone: "America/Sao_Paulo", dateStyle: "short", timeStyle: "short" });
})();