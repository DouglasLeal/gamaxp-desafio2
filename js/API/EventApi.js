import Api from "./Api.js";

class EventApi extends Api {
    static url_api = `${super.url_api}/events`;

    static async get(){
        let response = await fetch(this.url_api);

        let events = await response.json();

        return events;
    }

    static async post(data){
        delete data._id;
        let response = await fetch(this.url_api, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.status !== 200){
            throw new Error();
        }

        let event = await response.json();
        return event;
    }
}

export default EventApi;