import EventAPI from "./API/EventApi.js";
import LayoutHelper from "./helpers/LayoutHelper.js";

let divEvents = document.querySelector('.events');

async function listEvents(){
    let events = await EventAPI.get();

    events.forEach(event => {
        divEvents.innerHTML += LayoutHelper.createCardEvent(event);
    });
}

listEvents();