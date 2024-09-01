"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const Appbar = () => {
  const session = useSession();
  return (
    <div className="flex justify-between items-center">
      <div>Muzix</div>
      <div className="m-2 p-1 bg-black text-white">
        {session.data?.user && (
          <button onClick={() => signOut()}>Logout</button>
        )}
        {!session.data?.user && (
          <button onClick={() => signIn()}>Signin</button>
        )}
      </div>
    </div>
  );
};

export default Appbar;
