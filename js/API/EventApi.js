import Api from "./Api.js";

class EventApi extends Api {
    static url_api = `${super.url_api}/events`;

    static async get(){
        let response = await fetch(this.url_api);

        let events = await response.json();

        return events;
    }
}

export default EventApi;