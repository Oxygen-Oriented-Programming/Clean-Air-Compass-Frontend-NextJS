import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

var user_credential = [];
let auth_token = null;

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:"319185773405-94lfgudji11fvtbrckkfsj4r7rpuaalv.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
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
            `http://127.0.0.1:8000/accounts/google/`,
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
        // console.log(session.auth_token.alerts[0].id)
        console.log(session)
        return session
      }
    },
  },
});
