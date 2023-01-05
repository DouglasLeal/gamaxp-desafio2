import EventAPI from "./API/EventApi.js";
import LayoutHelper from "./helpers/LayoutHelper.js";

let tbody = document.querySelector("table tbody");

async function listEvents(){
    let events = await EventAPI.get();

    events.forEach((event, index) => {
        tbody.innerHTML += LayoutHelper.createTrEvent(event, index);
    });
}

listEvents();