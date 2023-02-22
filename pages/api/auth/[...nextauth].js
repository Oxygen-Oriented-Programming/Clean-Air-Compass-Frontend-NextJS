import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

var user_credential = [];
let auth_token = null;

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "319185773405-94lfgudji11fvtbrckkfsj4r7rpuaalv.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn(user) {
      if (user) {
        console.log("user = true")
        const idToken = user.account.id_token;
        console.log("id token", idToken)
        try {
          const response = await fetch(
            `http://127.0.0.1:8000/accounts/google/`,
            {
              method: "post",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                auth_token: idToken,
              }),
            }
          )
          .then((response) => response.json())
          .then((data) => console.log(data))
          const auth_token = response.data
          console.log(auth_token)
          user.auth_token = auth_token
          return true
        } catch (error) {
            return false;
        }
      }
      return false;
    },
    async jwt(token, user, account, profile, isNewUser) {
      // console.log(token)
      return token;
    },
    async session({ session, user, token }) {
      // console.log(session)
      // return session
    },
  },
});

// // let response = await fetch(`http://127.0.0.1:8000/accounts/google/`, {method: 'post',headers: {'Content-Type': 'application/json',},body: JSON.stringify({ auth_token: token.token.account.id_token })});


// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google"

// var user_credential = []

// export default NextAuth({
//     providers: [
//         GoogleProvider({
//             clientId: '1005718204366-tbjlqqhbjor349kpshags3kedmhomul9.apps.googleusercontent.com',
//             clientSecret: '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',
//         }),
//     ],
//     session: {
//         strategy: "jwt",
//       },
//     callbacks: {
//         async jwt(token, user, account, profile, isNewUser) {
//             return token;
//         },
//         async session({ token }) {
//             if(token){
//                 user_credential = {
//                     "provider": token.token.account.provider,
//                 }
//                 if (token.token.account.access_token) {
//                     user_credential["auth_token"] = token.token.account.access_token
//                 }
//                 if (token.token.account.id_token) {
//                     user_credential["auth_token"] = token.token.account.id_token
//                 }
//                 return user_credential
//             }
//             // return user_credential
//         }
//     },
//     secret: "G98di5p1KYGycZRa9wOhULNe0uwEv9JwPOv1Nw+wWZI=",
//     jwt: {
//         signingKey: {"kty":"oct","kid":"--","alg":"HS256","k":"--"},
//         verificationOptions: {
//           algorithms: ["HS256"]
//         }
//       }
// });