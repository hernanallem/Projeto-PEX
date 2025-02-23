import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name?: string;
    email?: string;
    token?: string; // Adicione o token
    expiration?: number; // Adicione o tempo de expiração
  }

  interface Session {
    user: {
      id: string;
      name?: string;
      email?: string;
      token?: string; // Adicione o token
      expiration?: number; // Adicione o tempo de expiração
    };
  }
}
