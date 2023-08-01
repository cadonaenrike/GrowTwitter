import users from "../data/users";

class UserMiddleware{
    public validateUser(username: string,) {
     const usuarioExistente= users.some(usuario => usuario.username === username);
        return usuarioExistente
    }
}

export default new UserMiddleware();