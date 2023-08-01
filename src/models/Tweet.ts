
import { v4 as createUuid } from "uuid";
import { Type } from "../types/typesTweet";
import users from "../data/users";
import { Reply } from "./Replay";

export class Tweet {
  private identificador: string;
  private conteudo: string;
  private tipo: Type;
  private user: string;
  private curtidas: string[];
  private replies: Reply[];

  constructor(conteudo: string, tipo: Type, userId: string) {
    this.user = this.setUser(userId);
    this.identificador = createUuid();
    this.conteudo = conteudo;
    this.tipo = tipo;
    this.curtidas = [];
    this.replies = [];
    this.setUser(userId);
  }

  public getDetails() {
    return {
      identificador: this.identificador,
      conteudo: this.conteudo,
      tipo: this.tipo,
      user: this.user,
      curtidas: this.curtidas,
      replies: this.replies,
    };
  }

  public addReply(reply: Reply) {
    this.replies.push(reply);
    return reply;
  }

  public curtirTweet(userId: string): void {
    if (!this.curtidas.includes(userId)) {
      this.curtidas.push(userId);
    }
  }

  public descurtirTweet(userId: string): void {
    const index = this.curtidas.indexOf(userId);
    if (index !== -1) {
      this.curtidas.splice(index, 1);
    }
  }

  public getNumeroCurtidas(): number {
    return this.curtidas.length;
  }

  public setUser(userId: string){
    const user = users.find((user) => user.getDetails().identificador === userId);
    if (user) {
      return this.user = user.getDetails().identificador;
    } else {
      throw new Error("Usuário não encontrado");
    }
  }
}