import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const publicRoutes = ["/login", "/", "/register"];

  useEffect(() => {
    const currentPath = router.asPath.split("?")[0]; 
    const isPublicRoute = publicRoutes.includes(currentPath);

    if (isAuthenticated === false && !isPublicRoute) {
      console.log("Redirecting to login. Current Path:", currentPath);
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated === false && !publicRoutes.includes(router.asPath.split("?")[0])) {
    return <div>Redirecting to login...</div>;
  }

  return <>{children}</>;
};
