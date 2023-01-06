import Api from "./Api.js";

class BookingApi extends Api {
    static url_api = `${super.url_api}/bookings`;

    static async post(data){
        delete data._id;
        delete data.event;
        let response = await fetch(this.url_api, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.status !== 201){
            throw new Error();
        }

        let event = await response.json();
        return event;
    }

    static async getBookingsByEvent(idEvent){
        const url = `${this.url_api}/event/${idEvent}`
        let response = await fetch(url);

        let bookings = await response.json();

        return bookings;
    }
}

export default BookingApi;