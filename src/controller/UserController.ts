
import users from "../data/users";
import userMiddlewares from "../middlewares/userMiddlewares";
import { User } from "../models/User";
 class UserController {
  public cadastrarUsuario(nome: string, email: string, username: string, senha: string) {
    // Verifica se o username já está em uso através de middlewares
    const usuarioExistente = userMiddlewares.validateUser(username);
    if (usuarioExistente) {
      console.log('O username já está em uso. Por favor, escolha outro.');
      return;
    }
     // Criando usuário no data users
    const novoUsuario = new User(nome, email, username, senha);
    users.push(novoUsuario);
    console.log('Usuário cadastrado com sucesso!');
    return novoUsuario;
  }
   getUserById(id: string) {
    const user = users.find(user => user.getDetails().identificador === id);
    if (user) {
      return user.getDetails();
    }
  }
  
  //parte de seguidores
  public seguirUsuario(idSeguidor: string, idUsuario: string) {
    const seguidor = users.find((user) => user.getDetails().identificador === idSeguidor);
    const usuario = users.find((user) => user.getDetails().identificador === idUsuario);
  
    if (!seguidor || !usuario) {
      console.log("Usuário não encontrado.");
      return;
    }
  
    if (seguidor === usuario) {
      console.log("Você não pode seguir a si mesmo.");
      return;
    }
  
    return seguidor.seguir(usuario);
  }
}

 export default new UserController();
