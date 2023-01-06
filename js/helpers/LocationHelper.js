class LocationHelper{
    static getIdFromUrl(){
        let urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("id");
    }

    static redirect(destination = null){
        if(destination == null){
            location.reload();
            return;
        }
        
        console.log("redirtect")
        let path = location.pathname.split("/");
        path = path.filter((el) => el);
        path = path[0].includes("html") ? "" : path[0];
        let origin = path != "" ? `${location.origin}/${path}` : location.origin;
        window.location.assign(`${origin}/${destination}`); 
    }
}

export default LocationHelper;