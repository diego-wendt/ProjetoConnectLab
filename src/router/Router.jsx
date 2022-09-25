import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts";
import {
  Cadastro,
  DevicesDetails,
  Devices,
  Home,
  Login,
  Perfil,
} from "../pages";
import { TextTitle } from "../components/";

export const Router = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line react/prop-types
  const PrivateRoute = ({ children }) => {
    const { authenticated, loading } = useAuthContext();

    if (loading) {
      return <TextTitle id="loading">...CARREGANDO DADOS...</TextTitle>;
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  // eslint-disable-next-line react/prop-types
  const JaLogado = ({ children }) => {
    const { authenticated, loading } = useAuthContext();
    if (loading) {
      return <TextTitle id="loading">...CARREGANDO DADOS...</TextTitle>;
    }
    if (authenticated) {
      return <Navigate to="/home" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <JaLogado>
            <Login />
          </JaLogado>
        }
      />
      <Route path="/cadastro" element={<Cadastro />} />

      <Route
        path="/devicesdetails/:id"
        element={
          <PrivateRoute>
            <DevicesDetails />
          </PrivateRoute>
        }
      />
      <Route
        path="/devices"
        element={
          <PrivateRoute>
            <Devices />
          </PrivateRoute>
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/perfil"
        element={
          <PrivateRoute>
            <Perfil />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={
          <PrivateRoute>
            <Navigate to="/home" replace={true} />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
