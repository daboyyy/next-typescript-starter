import { useEffect, useState } from 'react';

// external services
import { firebaseAuth } from 'src/services/firebase/firebaseClient';
import { User as FirebaseUser, onIdTokenChanged } from 'firebase/auth';
import nookies from 'nookies';

// context
import AuthContext from 'src/context/AuthContext';

function AuthProvider({ children }: any) {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const tokenListener = onIdTokenChanged(
      firebaseAuth,
      async (userData: FirebaseUser | null) => {
        if (!user) {
          setUser(null);
          nookies.set(undefined, 'token', '', { path: '/' });
        } else {
          const token = await user.getIdToken();
          setUser(userData);
          nookies.set(undefined, 'token', token, { path: '/' });
        }
      }
    );

    return () => {
      tokenListener();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
