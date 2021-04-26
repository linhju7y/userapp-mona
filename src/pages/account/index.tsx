import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';

function index(props: any) {
  const [session, loading] = useSession();

  if (loading) {
    return <div>Authenticating...</div>;
  } else {
    // console.log(session);
  }
  const handleSignIn = (event: React.SyntheticEvent<any>) => signIn();
  const handleSignOut = (event: React.SyntheticEvent<any>) => signOut();

  // if(!session?.user){
  //   signIn();
  //   return <div>Redirecting...</div>;
  // }

  return (
    <div>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={handleSignIn}>Sign in</button>
          <Link href={'/account/register'}>Đăng kí</Link>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={handleSignOut}>Sign out</button>
        </>
      )}
    </div>
  );
}

export default index;
