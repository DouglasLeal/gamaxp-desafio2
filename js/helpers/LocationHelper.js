class LocationHelper{
    static getIdFromUrl(){
        let urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("id");
    }

    static redirect(destination){
        let path = location.pathname.split("/");
        path = path.filter((el) => el);
        path = path[0].includes("html") ? "" : path[0];
        let origin = path != "" ? `${location.origin}/${path}` : location.origin;
        window.location.href = `${origin}/${destination}`;
    }
}

export default LocationHelper;