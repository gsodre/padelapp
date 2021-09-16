import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, ReactNode } from "react";
import { api } from "../services/apiClient";

type User = {
  email: string;
  user: string;
  auth: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, "padel.token");
  destroyCookie(undefined, "padel.refreshToken");

  Router.push("/");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "padel.token": token } = parseCookies();

    if (token) {
      api
        .get("Usuario")
        .then((response) => {
          console.log("*** usuario", response);
        })
        .catch(() => signOut());
    }
  });

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const { data } = await api.post("Login", { email, password });

      const { user, auth, refreshToken } = data;

      setCookie(undefined, "padel.token", auth, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      setCookie(undefined, "padel.refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      setUser({ email, user, auth });

      api.defaults.headers["Authorization"] = `Bearer ${auth}`;

      Router.push("/news");
    } catch (err) {
      console.log("*** err", err);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
