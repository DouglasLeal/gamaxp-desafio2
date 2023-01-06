import EventAPI from "./API/EventApi.js";
import LayoutHelper from "./helpers/LayoutHelper.js";
import FlashMessageHelper from "./helpers/FlashMessageHelper.js";

let tbody = document.querySelector("table tbody");
let elMessage = document.querySelector(".message-result");

async function listEvents() {
    let events = await EventAPI.get();

    events.forEach((event, index) => {
        tbody.innerHTML += LayoutHelper.createTrEvent(event, index);
    });

    const flashMessage = FlashMessageHelper.getCookie('flash-message');

    if(flashMessage){
        FlashMessageHelper.toggleMessage({element: elMessage, text: flashMessage, type: "success"});
    }
}

listEvents();