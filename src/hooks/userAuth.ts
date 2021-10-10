import { useContext } from 'react';

// context
import AuthContext from 'src/context/AuthContext';

const useAuth = () => {
  useContext(AuthContext);
};

export default useAuth;
