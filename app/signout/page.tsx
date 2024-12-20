// app/signout/page.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

const SignOut = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to Auth0 logout page
    window.location.href = "/api/auth/logout";
  }, []);

  return (
    <div className="flex items-center justify-center h-[100vh] w-full">
    
      <CircularProgress />
    </div>
  );
};

export default SignOut;
