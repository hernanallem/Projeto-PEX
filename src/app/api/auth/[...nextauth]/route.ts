import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Email e senha são obrigatórios");
        }

        try {
          const response = await axios.post(
            "https://petx-v4.onrender.com/api/auth/login",
            {
              email: credentials.email,
              password: credentials.password,
            },
          );

          const { token, expiration } = response.data;

          if (!token) {
            throw new Error("Token não recebido");
          }

          // Retorne o objeto user com as propriedades personalizadas
          return {
            id: "user-id", // Substitua por um ID real se disponível
            name: "Usuário", // Substitua por um nome real se disponível
            email: credentials.email,
            token, // Token JWT
            expiration, // Tempo de expiração
          };
        } catch (error) {
          console.error("Erro ao autenticar:", error);
          throw new Error("Falha na autenticação. Verifique suas credenciais.");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Adicione as propriedades personalizadas ao token JWT
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          token: user.token, // Token JWT
          expiration: user.expiration, // Tempo de expiração
        };
      }
      return token;
    },
    async session({ session, token }) {
      // Adicione as propriedades personalizadas à sessão
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          token: token.token, // Token JWT
          expiration: token.expiration, // Tempo de expiração
        },
      };
    },
  },
};

// Exportando os métodos GET e POST corretamente para o App Router
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
