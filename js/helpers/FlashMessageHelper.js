class FlashMessageHelper {
    static setCookie(name, value, days) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
    }

    static getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            let message = decodeURIComponent(parts.pop().split(';').shift());
            document.cookie = `${name}=; expires=${new Date(0).toUTCString()}; path=/`;
            return message;
        }
    }

    static toggleMessage({element = "", text = "", type = "danger", hide = false}){
        element.innerText = text;

        element.classList.remove('alert-danger');
        element.classList.remove('alert-success');
        element.classList.remove('alert-info');

        element.classList.add(`alert-${type}`);

        if(hide){
            element.classList.add("d-none")
        }else{
            element.classList.remove("d-none")
        }
    }
}

export default FlashMessageHelper;