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

    static createTrEvent(event, index){
        let scheduled = new Date(event.scheduled).toLocaleString();
    
        let tr = `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${scheduled.substring(0, scheduled.length - 3)}</td>
            <td>${event.name}</td>
            <td>${event.attractions}</td>
            <td>
                <a data-id="${event._id}" data-bs-toggle="modal" data-bs-target="#modalBooking" type="button" class="btn btn-dark">ver reservas</a>
                <a href="editar-evento.html?id=${event._id}" class="btn btn-secondary">editar</a>
                <a href="excluir-evento.html?id=${event._id}" class="btn btn-danger">excluir</a>
            </td>
        </tr>`;

        return tr;
    }
}

export default LayoutHelper;