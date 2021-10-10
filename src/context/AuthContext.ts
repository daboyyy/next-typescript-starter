import { createContext } from 'react';

// external services
import { User as FirebaseUser } from 'firebase/auth';

const AuthContext = createContext<{ user: FirebaseUser | null }>({
  user: null,
});

export default AuthContext;
