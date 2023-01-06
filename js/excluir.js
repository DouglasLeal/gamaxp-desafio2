import EventApi from "./API/EventApi.js";
import LocationHelper from "./helpers/LocationHelper.js";
import FlashMessageHelper from "./helpers/FlashMessageHelper.js";

let form = document.querySelector("form");
let elMessage = document.querySelector(".message-result");

let idEvent = null;

form.onsubmit = async (ev) => {
    ev.preventDefault();

    try {
        await EventApi.delete(idEvent);
        FlashMessageHelper.setCookie("flash-message", "Evento excluído com sucesso.", 1)
        LocationHelper.redirect("admin.html");
    } catch (error) {
        FlashMessageHelper.toggleMessage({element: elMessage, text: "Não foi possível excluir o evento. Tente mais tarde."});
    }
}

async function fillForm() {
    idEvent = LocationHelper.getIdFromUrl();
    let event = await EventApi.getById(idEvent);

    for (const input of form.elements) {
        if (input.name != "") {
            input.value = event[input.name];
        }
    }

    form.elements['scheduled'].value = new Date(event.scheduled).toLocaleString('pt-BR', { timeZone: "America/Sao_Paulo", dateStyle: "short", timeStyle: "short" });
};

fillForm();