class LayoutHelper {
    static createCardEvent(event) {
        let scheduled = new Date(event.scheduled).toLocaleDateString();

        let card = `
        <article class="evento card p-5 m-3">
            <h2>${event.name} - ${scheduled}</h2>
            <h4>${event.attractions}</h4>
            <p>${event.description}</p>
            <a data-id="${event._id}" data-bs-toggle="modal" data-bs-target="#modalBooking" type="button" class="btn btn-primary">reservar ingresso</a>
        </article>`;

        return card;
    }
}

export default LayoutHelper;