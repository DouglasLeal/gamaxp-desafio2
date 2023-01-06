class Event{
    constructor({
        _id = null,
        name = null,
        attractions = null,
        description = null,
        scheduled = null,
        poster = "Link Imagem",
        number_tickets = null
    }){
        this._id = _id;
        this._name = name;
        this._attractions = attractions;
        this._description = description;
        this._scheduled = scheduled
        this._poster = poster;
        this._number_tickets = number_tickets;
    }

    set name(value) {
        this._name = value;
      }
      
      set attractions(value) {
        this._attractions = value.split(',');
      }
      
      set description(value) {
        this._description = value;
      }

    set scheduled(value){
        this._scheduled = new Date(value);
    }

    set number_tickets(value) {
        this._number_tickets = value;
      }

    getAll(){
        return {
            _id : this._id,
            name: this._name,
            attractions: this._attractions,
            description: this._description,
            scheduled: this._scheduled,
            poster: this._poster,
            number_tickets: this._number_tickets
        };
    }
}

export default Event;