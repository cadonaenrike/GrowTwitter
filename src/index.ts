/*Requisitos
Para o desenvolvimento deste projeto será necessário:

1. Criar um projeto Node.js com o Typescript configurado;
2. Criar classes para representar as entidades necessárias;
a. Cada classe deve estar em um arquivo separado.
3. Usar todos os pilares da POO pelo menos uma vez;
4. Estabelecer relacionamentos do tipo composição entre as classes;
5. Armazenar os dados em um banco de dados em memória (listas).
6. Para testes, criar pelo menos 3 usuários, 3 tweets, 3 likes e 3 replies.

*/

import FeedController from "./controller/FeedController";
import TwetsController from "./controller/TwetsController";
import UserController from "./controller/UserController";
import allTweets from "./data/twets";
import users from "./data/users";
import { Tweet } from "./models/Tweet";
import { User } from "./models/User";

///////////////////////////////////////////////////criando usuarios///////////////////////////////////////

 const usuario = UserController.cadastrarUsuario("everton","everton@teste.com","Everton97","teste");
 const usuario2 = UserController.cadastrarUsuario("joao","joao@teste.com","João95","teste");
 const usuario3 = UserController.cadastrarUsuario("bruno","bruno@teste.com","Bruno90","teste");

//////////////////////////////////////////////// salvando os id dos usuarios//////////////////////////////

 const idUser= usuario!.getDetails().identificador;
 const idUser2= usuario2!.getDetails().identificador;
 const idUser3= usuario3!.getDetails().identificador;

/////////////////////////////////////////////// Criando twitter///////////////////////////////////////////

 TwetsController.criarTweet(idUser,"ola mundo!","normal")
 TwetsController.criarTweet(idUser,"Hoje esta frio","normal")
 TwetsController.criarTweet(idUser,"Hoje esta frio e chovendo","normal")

 TwetsController.criarTweet(idUser2,"i am user2","normal")
 TwetsController.criarTweet(idUser2,"i liked car","normal")
 TwetsController.criarTweet(idUser2,"realy?","normal")

 TwetsController.criarTweet(idUser3,"meu nome e bruno","normal")
 TwetsController.criarTweet(idUser3,"i disliked car","normal")
 TwetsController.criarTweet(idUser3,"maneiro","normal")

 //////////////////////////////////////////// Salvado o id dos twitter////////////////////////////////////

 const idTwiterUser = usuario!.getDetails().Tweet[0].identificador
 const idTwiterUser2 = usuario2!.getDetails().Tweet[0].identificador
 const idTwiterUser3 = usuario3!.getDetails().Tweet[0].identificador

 //////////////////////////////////////////// apresentando twitter atraves do id do twitter////////////////////////////
    
//TwetsController.getTweetById(idTwiterUser)

 //////////////////////////////////////////// Usuarios seguindo o outro atraves dos Id/////////////////////////////////
    
UserController.seguirUsuario(idUser,idUser2)
UserController.seguirUsuario(idUser,idUser3)

UserController.seguirUsuario(idUser3,idUser)
UserController.seguirUsuario(idUser3,idUser2)

UserController.seguirUsuario(idUser2,idUser)
UserController.seguirUsuario(idUser2,idUser3)


////////////////////////////////////////// dando like no Twitter por ID do twitter////////////////////////////////////

TwetsController.likeTweet(idTwiterUser,idUser);// teste para validar que nao pode dar like no seu propio twitter
TwetsController.likeTweet(idTwiterUser,idUser2);
TwetsController.likeTweet(idTwiterUser,idUser3);


////////////////////////////////////////// Mostrando a quantidade de like no Twitter por ID do twitter////////////////

//TwetsController.getTweetById(idTwiterUser);

////////////////////////////////////////// dando deslike no Twitter por ID do twitter/////////////////////////////////


TwetsController.unlikeTweet(idTwiterUser,idUser3);

////////////////////////////////////////// Respondendo um twitter e fazendo ele ser do tipo reply////////////////

TwetsController.responderTweet(idUser2,idTwiterUser,"isso e a vida")

TwetsController.responderTweet(idUser2,idTwiterUser2,"uau")

TwetsController.responderTweet(idUser,idTwiterUser3,"legal")

////////////////////////////////////////exibindo o feed de twitters de um usuario

FeedController.exibirFeed(idUser)




  