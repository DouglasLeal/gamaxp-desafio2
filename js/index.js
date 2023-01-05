import EventAPI from "./API/EventApi.js";
import LayoutHelper from "./helpers/LayoutHelper.js";

let divNextEvents = document.querySelector(".next-events");

async  function listNextEvent(){
    let events = await EventAPI.get();
    let nextEvents = events.slice(0, 3);

    nextEvents.forEach(event => {
        divNextEvents.innerHTML += LayoutHelper.createCardEvent(event);
    });    
}

listNextEvent();