import api from '../services/apiAuth';
import cookies from '../services/cookies';

export default {
    async registrar(formulario) {
        await cookies.getCookie();

        return api.post("/register", formulario);
    },

    
}