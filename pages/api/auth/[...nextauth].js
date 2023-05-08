import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_OAUTH_CLIENT,
      clientSecret: process.env.NEXT_PUBLIC_OAUTH_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    maxAge: 24 * 60 * 60,
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (user) {
        const idToken = account.id_token;
        try {
          await fetch(`${process.env.NEXT_PUBLIC_LOGIN_URL}`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              auth_token: idToken,
            }),
          })
            .then((response) => response.json())
            .then((data) => (user.auth_token = data));
          return true;
        } catch (error) {
          return false;
        }
      }
    },
    async jwt({ token, user }) {
      if (user) {
        const { auth_token } = user;
        token.auth_token = auth_token;
      }
      return token;
    },

    async session({ session, token }) {
      if (token.auth_token) {
        session.auth_token = token.auth_token;
        return session;
      }
    },
  },
});
