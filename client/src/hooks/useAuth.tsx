import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase"; // Import your Firebase configuration
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { User } from "firebase/auth"; // Import the User type for type safety

const provider = new GoogleAuthProvider();


const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleUser = (user: User | null) => {
    if (user) {
      setUser(user);
      setError(null);
    } else {
      setUser(null);
    }

    setIsLoading(false);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {        
        handleUser(user);
      } else {
        handleUser(null);
      }
    });

    // Clean up subscription on unmount
    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      handleUser(result.user);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      handleUser(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return { user, isLoading, error, signInWithGoogle, signOutUser};
};

export default useAuth;