const iUser = {
    nome: null,
    sobrenome: null,
    id: null,
    login: null,
    cpf: null,
    is_admin: false,
    telefone: null
};

const initialState = {
    user: iUser,
    welcomeAlert: false,
    takeProtocol: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case "LOGOUT": {
            return {
                ...state,
                user: iUser,
                welcomeAlert: false
            };
        }
        case "SET_PROTOCOL": {
            return {
                ...state,
                takeProtocol: action.protocol
            };
        }
        case "FETCH_USER": {
            return {
                ...state,
                user: action.user
            };
        }
        case "FETCH_WELCOME_ALERT": {
            return {
                ...state,
                welcomeAlert: action.status
            };
        }
        default:
            return state;
    }
}
