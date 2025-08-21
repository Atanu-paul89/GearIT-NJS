import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign-in page.
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // This is where you would connect to a database to verify the user.
        // For now, we'll use a mock user.
        const user = {
          id: "1",
          name: "Shatadru Paul",
          email: "kola5689@polo.com",
        };

        // If credentials match, return the user object
        if (
          credentials.email === user.email &&
          credentials.password === "kola5689"
        ) {
          return user;
        } else {
          // If you return null, an error will be displayed to the user
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // This will redirect users to your custom login page
  },
});

export { handler as GET, handler as POST };