import BookingApi from "./API/BookingApi.js";
import LocationHelper from "./helpers/LocationHelper.js";
import LayoutHelper from "./helpers/LayoutHelper.js";

let tbody = document.querySelector("table tbody");

let idEvent = LocationHelper.getIdFromUrl();

(async function listBookings(){
    
    let bookings = await BookingApi.getBookingsByEvent(idEvent);

    bookings.forEach((booking, index) => {
        tbody.innerHTML += LayoutHelper.createTrBooking(booking, index);
    });
})();