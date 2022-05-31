import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { CLIENT_ID, REDIRECT_URI } from 'react-native-dotenv';
import * as AppleAuthentication from 'expo-apple-authentication';
import * as AuthSession from 'expo-auth-session';
import { storage } from '../storage';

interface IAuthProviderProps {
  children: ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface IContextData {
  user: IUser;
  isLoading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface IAuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as IContextData);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState({} as IUser);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await storage.user.get();
      if (res) {
        setUser(res);
      }
      setIsLoading(false);
    })();
  }, []);

  const signInWithGoogle = async () => {
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email');

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    try {
      const { params, type } = (await AuthSession.startAsync({
        authUrl,
      })) as IAuthorizationResponse;

      if (type === 'success') {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );

        const userInfo = await response.json();

        const userLogged = {
          email: userInfo.email,
          id: String(userInfo.id),
          name: userInfo.name,
          avatar: userInfo.picture,
        };
        setUser(userLogged);
        await storage.user.save(userLogged);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const signInWithApple = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (credential) {
        const userLogged = {
          email: credential.email!,
          id: String(credential.user),
          name: credential.fullName!.givenName!,
          avatar: `https://ui-avatars.com/api/?name=${credential.fullName?.givenName}&lenght=1`,
        };

        setUser(userLogged);
        await storage.user.save(userLogged);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const signOut = async () => {
    try {
      setUser({} as IUser);
      await storage.user.remove();
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, signInWithGoogle, signInWithApple, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};
export { AuthProvider, useAuth };
