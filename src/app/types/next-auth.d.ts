// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface User {
    id: string; // Adiciona a propriedade 'id' ao tipo User
  }

  interface Session {
    user: User & {
      id: string; // Adiciona a propriedade 'id' ao tipo Session['user']
    };
  }
}
