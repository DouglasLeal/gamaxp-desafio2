import BookingApi from "./API/BookingApi.js";
import EventAPI from "./API/EventApi.js";
import LayoutHelper from "./helpers/LayoutHelper.js";
import Booking from "./models/Booking.js";
import LocationHelper from "./helpers/LocationHelper.js";
import FlashMessageHelper from "./helpers/FlashMessageHelper.js";

let divNextEvents = document.querySelector(".next-events");
let form = document.querySelector(".modal form");
let elMessage = document.querySelector(".message-result");

let idEventClicked = null;

(async function listNextEvent(){
    let events = await EventAPI.get();
    let nextEvents = events.slice(0, 3);

    nextEvents.forEach(event => {
        divNextEvents.innerHTML += LayoutHelper.createCardEvent(event);
    });
    
    addListenerBookingButton();

    const flashMessage = FlashMessageHelper.getCookie('flash-message');

    if(flashMessage){
        FlashMessageHelper.toggleMessage({element: elMessage, text: flashMessage, type: "success"});
    }
})();

function addListenerBookingButton(){
    let buttons = document.querySelectorAll('.next-events .btn-primary');

    buttons.forEach(b => {
        b.onclick = (ev) => {
            idEventClicked = ev.target.dataset.id;
            changeModalTitle();
        }
    });
}

async function changeModalTitle(){
    let event = await EventAPI.getById(idEventClicked);
    let modalTitle = document.querySelector("#modalBookingLabel");
    modalTitle.innerText = "";
    modalTitle.innerText = event.name;
}

form.onsubmit = async (ev) => {
    ev.preventDefault();

    let newBooking = new Booking({
        owner_name: form.elements["owner_name"].value,
        owner_email: form.elements["owner_email"].value,
        event_id: idEventClicked
    });

    try {
        await BookingApi.post(newBooking);
        FlashMessageHelper.setCookie("flash-message", "Reserva realizada com sucesso.");
        LocationHelper.redirect();
    } catch (error) {
        
    }
}