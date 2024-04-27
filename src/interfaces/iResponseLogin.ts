  export interface iResponseLogin {
    refresh: string;
    access: string;
    usuario: Usuario[];
  }
  export interface Usuario {
    nomecompleto: string;
    foto: string;
    email: string;
    tipo: number;
    conta: string;
  }