import Api from "./Api.js";

class EventApi extends Api {
    static url_api = `${super.url_api}/events`;

    static async get(){
        let response = await fetch(this.url_api);

        let events = await response.json();

        return events;
    }

    static async getById(id){
        const url = `${this.url_api}/${id}`;

        let response = await fetch(url);

        let event = await response.json();

        return event;
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

        if(response.status !== 201){
            throw new Error();
        }

        let event = await response.json();
        return event;
    }

    static async delete(id){
        const url = `${this.url_api}/${id}`;
        let response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.status !== 204){
            throw new Error();
        }

        return;
    }
}

export default EventApi;