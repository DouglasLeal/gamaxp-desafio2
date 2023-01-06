class Booking{
    constructor({
        _id = null,
        owner_name = null,
        owner_email = null,
        number_tickets = 1,
        event_id = null,
        event = null
    }){
        this._id = _id;
        this.owner_name = owner_name;
        this.owner_email = owner_email;
        this.number_tickets = number_tickets;
        this.event_id = event_id;
        this.event = event;
    };
}

export default Booking;