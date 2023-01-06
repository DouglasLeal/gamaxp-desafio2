import EventAPI from "./API/EventApi.js";
import BookingApi from "./API/BookingApi.js";
import LayoutHelper from "./helpers/LayoutHelper.js";
import Booking from "./models/Booking.js";
import LocationHelper from "./helpers/LocationHelper.js";

let divEvents = document.querySelector('.events');
let form = document.querySelector(".modal form");

let idEventClicked = null;

(async function listEvents(){
    let events = await EventAPI.get();

    events.forEach(event => {
        divEvents.innerHTML += LayoutHelper.createCardEvent(event);
    });

    addListenerBookingButton();
})();

function addListenerBookingButton(){
    let buttons = document.querySelectorAll('.events .btn-primary');

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
        LocationHelper.redirect();
    } catch (error) {
        
    }
}