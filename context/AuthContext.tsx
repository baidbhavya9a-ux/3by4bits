"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut, 
  User 
} from "firebase/auth";
import { auth, googleProvider, githubProvider, isFirebaseConfigured } from "@/lib/firebase";

interface AuthContextType {
  user: any | null; // Use any to allow for our mock user object
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithGithub: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isFirebaseConfigured && auth) {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, []);

  const loginWithGoogle = async () => {
    if (isFirebaseConfigured && auth) {
      try {
        await signInWithPopup(auth, googleProvider);
      } catch (error) {
        console.error("Authentication Error:", error);
        alert(`Authentication Error: ${error instanceof Error ? error.message : "Unknown Error"}`);
      }
    } else {
      alert("Firebase Configuration Missing! Please add your API keys to the .env.local file to enable ACTUAL Google Sign-In.");
    }
  };

  const loginWithGithub = async () => {
    if (isFirebaseConfigured && auth) {
      try {
        await signInWithPopup(auth, githubProvider);
      } catch (error) {
        console.error("GitHub Auth Error:", error);
        alert(`GitHub Auth Error: ${error instanceof Error ? error.message : "Unknown Error"}`);
      }
    } else {
      alert("Firebase Configuration Missing! Please add your API keys to enable GitHub Sign-In.");
    }
  };

  const logout = async () => {
    if (isFirebaseConfigured && auth) {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Logout Error:", error);
      }
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, loginWithGithub, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
