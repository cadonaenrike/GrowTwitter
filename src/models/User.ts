import { v4 as createUuid } from "uuid";
import { Tweet } from "./Tweet";
import allTweets from "../data/twets";

 export class User {
  private identificador: string;
  private nome: string;
  private email: string;
  public username: string;
  private senha: string;
  private seguindo: string[];
   constructor(nome: string, email: string, username: string, senha: string) {
    this.identificador = createUuid();
    this.nome = nome;
    this.email = email;
    this.username = username;
    this.senha = senha;
    this.seguindo = [];
  }
  public addTweet(tweet: Tweet) {
    tweet.setUser(this.identificador);
    allTweets.push(tweet);
  }
   public getName(): string {
    return this.nome;
  }

   public getDetails(){
    return {
      identificador: this.identificador,
      nome: this.nome,
      email: this.email,
      username: this.username,
      senha: this.senha,
      seguindo: this.getFollowing(),
      Tweet: allTweets.map((tweeet) => tweeet.getDetails())
    };
  }
  public seguir(usuario: User) { 
    if (usuario !== this && !this.seguindo.includes(usuario.getFollowing())) { 
      this.seguindo.push(usuario.getDetails().identificador);
      console.log(`${this.nome} começou a seguir ${usuario.getName()}`); 
    } else { 
      console.log("Você não pode seguir a si mesmo ou usuários duplicados."); 
    } 
  }
  public getFollowing(){
    return this.seguindo.join("")
  }
  public getReplys() {
    return allTweets.map((tweet) => tweet.getDetails().conteudo);
  }
}