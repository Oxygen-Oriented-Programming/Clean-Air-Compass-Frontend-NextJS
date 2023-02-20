import next from "next";
import {NextApiRequest, NextApiResponse } from "next"
import { InitOptions } from "next-auth"
import Providers from "next-auth/providers"
import axios from "axios"

import {AuthenticatedUser} from "../../types"
import NextAuth from "next-auth/next";

const settings: InitOptions = {
    providers: [
        Providers.Google({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks: {
        async signIn(user: AuthenticatedUser, account, profile){
            if (account.provider === "google"){
                const {accessToken, idToken} = account;
                try {
                    const response = await axios.post(
                        "http://127.0.0.1:8000/api.social.login/google",
                        {
                            access_token: accessToken,
                            id_token: idToken,
                        },
                    );
                    const {access_token} = response.data;
                    user.accessToken = access_token;
                    return true;
                } catch(error){
                    return false;
                }
            }
        },
        async jwt(token, user: AuthenticatedUser, account, profile, isNewUser){
            if (user){
                const { accessToken } = user;
                token.accessToken = accessToken;
            }
            return token;
        },
        async session(session, user: AuthenticatedUser) {
            session.accessToken = user.accessToken;
            return session;
        },
    },
};

export default(req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, settings);