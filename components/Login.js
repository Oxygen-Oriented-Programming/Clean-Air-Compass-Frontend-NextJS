import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";

export default function Login({ providers }) {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      if (session.provider === "github") {
        console.log("session.provider = github")
        var auth_token = session.auth_token;
        backendapi_github(auth_token);
      }
      if (session.provider === "google") {
        console.log("session.provider = google")
        var auth_token = session.auth_token;
        backendapi_google(auth_token);
      }
    }
  }, [session]);
  function backendapi_github(auth_token) {
    console.log("backend_github call")
    fetch(`http://127.0.0.1:8000/accounts/github/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ auth_token: auth_token }),
    })
      .then((data) => data.json())
    //   .then((res) => {
    //     if (res.tokens) {
    //       document.getElementById("email_id").innerText = res.email;
    //       document.getElementById("token").innerText = res.tokens;
    //     }
    //   });
  }
  function backendapi_google(auth_token) {
    console.log("backend_google call")
    fetch(`http://127.0.0.1:8000/accounts/google/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ auth_token: auth_token }),
    })
    .then((data) => data.json())
  }
  if (status === "authenticated") {
    console.log("authenticated")
    console.log(session.auth_token)
    return <p>Signed in</p>
  }

  return <a href="/api/auth/signin">Sign in</a>
}
