import fetch from "isomorphic-fetch";
import PropTypes from "prop-types";

//const api = "http://localhost:3003/";
const api =
    window.location.port === "3000"
        ? "http://localhost:3003/"
        : "https://www.beijaflore-atacado.com.br:29999/";
//const api = "https://www.beijaflore-atacado.com.br:29999/";
const headers = {
    "Content-Type": "application/json",
    Accepts: "application/json"
};

class Remote {
    post = (url, dado, call) => {
        fetch(api + url, {
            method: "POST",
            headers: headers,
            credentials: "include",
            body: JSON.stringify(dado)
        })
            .then(resp => resp.json())
            .then(function(data) {
                if (call) return call(data);
                else return data;
            })
            .catch(e => {
                console.log(e);
                if (call) return call(false);
                else return false;
            });
    };

    get = (url, dado, call) => {
        fetch(api + url, {
            method: "GET",
            headers: headers,
            credentials: "include",
            header: JSON.stringify(dado)
        })
            .then(resp => resp.json())
            .then(function(data) {
                if (call) return call(data);
                else return data;
            })
            .catch(error => {
                if (call) return call(false);
                else return false;
            });
    };

    delete = (url, dado, call) => {
        fetch(api + url, {
            method: "DELETE",
            headers: headers,
            credentials: "include",
            body: JSON.stringify(dado)
        })
            .then(resp => resp.json())
            .then(function(data) {
                if (call) {
                    return call(data);
                } else {
                    return data;
                }
            })
            .catch(() => {
                if (call) return call(false);
                else return false;
            });
    };
}

Remote.propTypes = {
    url: PropTypes.string,
    data: PropTypes.object,
    call: PropTypes.func
};

export default new Remote();
