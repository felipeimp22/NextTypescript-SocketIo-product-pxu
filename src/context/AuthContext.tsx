import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as jwt_decode from "jwt-decode";
import { session } from "@/services/session";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await session(email, password);

      if (!response.token) {
        toast.error("Invalid credentials", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }

      localStorage.setItem("token", response.token);

      const decodedToken = jwt_decode.jwtDecode(response.token) as {
        userId: string;
      };
      const userId = decodedToken?.userId;
      localStorage.setItem("userId", userId);

      setIsAuthenticated(true);

      setTimeout(() => {
        window.location.reload();
      }, 100);

      router.push("/home");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("An unexpected error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
    router.push("/login");
  };

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
      <ToastContainer />
    </>
  );
};
