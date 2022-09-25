import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Authenticate } from "../../service/auth.service";
import { toast } from "react-toastify";

export const AuthContext = React.createContext(null);

const ContextProvider = AuthContext.Provider;

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const recoveredUser = sessionStorage.getItem("token");
    if (recoveredUser) {
      setEmail(recoveredUser);
    }
    setLoading(false);
  }, []);

  const acessarLoginPage = () => {
    navigate("/login");
  };

  const login = async ({ email, password }) => {
    try {
      const loggedUserEmail = await Authenticate({ email, password });
      setEmail(loggedUserEmail);
      navigate("/home");
      toast.success("Login realizado com sucesso.");
    } catch (error) {
      console.log(Error)
      toast.error("Erro ao realizar tentativa de login.");
    }
  };

  const logout = () => {
    setEmail(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("logged_user_id");
    sessionStorage.removeItem("cidade");
    sessionStorage.removeItem("estado");
  };

  return (
    <ContextProvider
      value={{
        authenticated: !!email,
        email,
        login,
        logout,
        loading,
        acessarLoginPage,
      }}
    >
      {children}
    </ContextProvider>
  );
};

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  return context;
};
