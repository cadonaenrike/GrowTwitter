import allTweets from "../data/twets";
import users from "../data/users";
import { Reply } from "../models/Replay";
import { Tweet } from "../models/Tweet";
import { User } from "../models/User";
import { Type } from "../types/typesTweet";
import UserController from "./UserController";
 class TweetController {
  public criarTweet(idUser: string, conteudo: string, tipo: Type) {
    const user = users.find((user) => user.getDetails().identificador === idUser);
    if (!user) {
      console.log("Usuário não encontrado");
      return;
    }
     const novoTweet = new Tweet(conteudo, tipo, user.getDetails().identificador);
    user.addTweet(novoTweet);
    return novoTweet;
  }
   public getTweetById(id: string) {
      const tweet = this.getAll().find((tweet) => tweet.getDetails().identificador === id);
      if (!tweet) {
        console.log("Tweet não encontrado");
        return;
      }
     const user = UserController.getUserById(tweet.getDetails().user)!.username;
    const numLikes = tweet.getNumeroCurtidas();
    let likesExhibition = "";
     if (numLikes === 0) {
      likesExhibition = "";
    } else if (numLikes === 1) {
      likesExhibition = `@${user} curtiu`;
    } else {
      const otherUsers = numLikes - 1;
      likesExhibition = `@${user} e mais ${otherUsers} usuários curtiram`;
    }
     console.log(`@${user}: ${tweet.getDetails().conteudo}`);
    console.log(likesExhibition);
    return likesExhibition;
  }
  public getAll() {
    return allTweets;
  }
  public getUser(idUser: string) {
    return this.getAll().find((tweet) => tweet.getDetails().identificador === idUser);
  
  }
  public likeTweet(id: string, userId: string): void {
    const tweet = this.getAll().find((tweet) => tweet.getDetails().identificador === id);
    if (!tweet) {
      console.log("Tweet não encontrado");
      return;
    }
    if(userId === tweet.getDetails().user) {
      console.log("Voce não pode dar like no seu tweet");
      return;
    }
    tweet.curtirTweet(userId);
  }
   public unlikeTweet(id: string, userId: string): void {
    const tweet = this.getAll().find((tweet) => tweet.getDetails().identificador === id);
    if (!tweet) {
      console.log("Tweet não encontrado");
      return;
    }
     tweet.descurtirTweet(userId);
  }
 
   public getTweetInstanceById(id: string): Tweet | undefined {
    return this.getAll().find((tweet) => tweet.getDetails().identificador === id);
  }


  public responderTweet(idUser: string, idTweet: string, conteudo: string) {
    const user = users.find((user) => user.getDetails().identificador === idUser);
    if (!user) {
      console.log("Usuário não encontrado");
      return;
    }
  
    const tweet = this.getTweetInstanceById(idTweet);
    if (!tweet) {
      console.log("Tweet não encontrado");
      return;
    }
  
    const novaReply = new Reply(user.getDetails().identificador, conteudo);
    
    tweet.addReply(novaReply);
    return tweet
  }
}
 export default new TweetController();