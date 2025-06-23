import { useState, useEffect } from 'react';
import { verifyToken, getCurrentUser } from '../lib/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith(process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME))
          ?.split('=')[1];

        if (token) {
          await verifyToken(token);
          const userData = await getCurrentUser(token);
          setUser(userData);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { user, loading, error };
};

export default useAuth;