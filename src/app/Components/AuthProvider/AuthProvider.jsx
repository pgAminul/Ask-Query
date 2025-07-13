"use client";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";
import PublicUrl from "../URL/PublicUrl";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const [forget, setForget] = useState();
  const axiosPublic = PublicUrl();
  console.log(user);
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign-out error:", error.message);
    }
  };

  const profileUpdate = (updated) => {
    return updateProfile(auth.currentUser, updated);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const updateNewProfile = (updated) => {
    return updateProfile(auth.currentUser, updated)
      .then(() => {
        setUser({ ...auth.currentUser, ...updated });
        setLoading(true);
      })
      .catch((error) => {});
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const forgetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    signUp,
    setUser,
    user,
    loading,
    logOut,
    logIn,
    profileUpdate,
    updateNewProfile,
    forgetPass,
    forget,
    setForget,
    googleLogin,
    setRole,
    role,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
