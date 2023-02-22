import React, { useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import Link from "next/link";
import SetDefaultLocation from './SetDefaultLocation';

export default function Login() {
  const {data: session, status } = useSession();
  if (status === 'authenticated') {
    return (
      <SetDefaultLocation user_id={session.auth_token.user_id} auth_token={session.auth_token.tokens} default_location={session.auth_token.default_location}></SetDefaultLocation>
      // <h1>logged in as {session.user.name} default = {session.auth_token.default_location}</h1>
    );
  }

  return (
     <div className="flex items-center bg-black">
    <Link
      href='/api/auth/signin'
      className='px-4 py-2 m-auto font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'
    >
      Sign in
    </Link>
    </div>
  );
}
