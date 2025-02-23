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

          const user = response.data;

          if (!user) {
            throw new Error("Usuário não encontrado ou senha inválida");
          }

          return {
            id: String(user.id),
            name: user.name,
            email: user.email,
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
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
        },
      };
    },
  },
};

// 🔥 Exportando os métodos GET e POST corretamente para o App Router
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
