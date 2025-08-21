import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({

      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        const user = {
          id: "1",
          name: "Shatadru Paul",
          email: "kola5689@polo.com",
        };


        if (
          credentials.email === user.email &&
          credentials.password === "kola5689"
        ) {
          return user;
        } else {

          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", 
  },
});

export { handler as GET, handler as POST };