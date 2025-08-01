"use client";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

// Custom hook for accessing the auth context
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useAuth;
