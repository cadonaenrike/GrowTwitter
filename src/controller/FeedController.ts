import allTweets from "../data/twets";
import users from "../data/users";
import { Tweet } from "../models/Tweet";
import { User } from "../models/User";
import TwetsController from "./TwetsController";

class FeedController {
  public exibirFeed(idUsuario: string) {
    const usuario = users.find(
      (user) => user.getDetails().identificador === idUsuario
    );
    if (!usuario) {
      console.log("Usuário não encontrado.");
      return;
    }
  
    const tweets = allTweets.filter(
      (tweet) => tweet.getDetails().user === idUsuario || usuario.getFollowing().includes(tweet.getDetails().user)
    );
  
    tweets.forEach((tweet) => {
      const tweetUser = users.find(
        (user) => user.getDetails().identificador === tweet.getDetails().user
      );
      console.log(`@${tweetUser!.getDetails().username}: ${tweet.getDetails().conteudo}`);
      
      if (tweet.getDetails().curtidas.length > 0) {
        
        const PrimeiroName = tweetUser!.getName();
        console.log(`@${PrimeiroName} e mais ${tweet.getDetails().curtidas.length - 1} usuários curtiram`);
        
        
      }
  
      if (tweet.getDetails().replies.length > 0) {
        console.log("replies:");
        tweet.getDetails().replies.forEach((reply) => {
          const replyUser = users.find(
            (user) => user.getDetails().identificador === reply.userId
          );
          console.log(`>@${replyUser?.getDetails().username}: ${reply.conteudo}`);
        });
      }
  
      console.log("---------------------------");
    });
  }
}

export default new FeedController();