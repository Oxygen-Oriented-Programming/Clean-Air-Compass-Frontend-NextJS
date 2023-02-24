import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

let auth_token = null;

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_OAUTH_CLIENT,
      clientSecret: process.env.NEXT_PUBLIC_OAUTH_SECRET,
      callbackUrl: `${process.env.NEXTAUTH_URL}/api/auth/callback/google`,
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({user, account, profile, session}) {
      if (user) {
        const idToken = account.id_token;
        try {
          console.log("api call")
          let data_ = null
          let response_ = null
          await fetch(
            `${process.env.NEXT_PUBLIC_LOGIN_URL}`,
            {
              method: "post",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                auth_token: idToken,
              }),
            }
          )
          .then((response) => response_ = response.json())
          .then((data) => data_ = data )
          if (data_.auth_token){
            console.log(data_.auth_token)
          }
          if (!data_.auth_token){
            user.auth_token = data_
          }
          return true
        } catch (error) {
            return true;
        }
      }
    },
    async jwt({token, user, account, profile, isNewUser}) {
      if(user){
        const {auth_token} = user;
        token.auth_token = auth_token
      }
      return token
    },
 
    async session({ session, user, token }) {
      if(token.auth_token){
        session.auth_token = token.auth_token
        console.log(session)
        return session
      }
    },
  },
});
