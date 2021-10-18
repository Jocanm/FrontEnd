import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Escritorio from './pages/Escritorio';
import ListarVentas from './pages/ListarVentas';
import ListarUsuarios from './pages/ListarUsuarios';
import ListarProductos from './pages/ListarProductos';
import MainLayout from './layout/MainLayout';
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from './context/userContext';

function App() {

  const [userData,setUserData] = useState({})
  
    return (
      <Auth0Provider
      domain="mintic-concesionario.us.auth0.com"
      clientId="zrbYaWyFWyQ3DipYMohDBs0dCs40Ngvu"
      redirectUri={window.location.origin}
      audience="api-autenticacion-ventas"
      >
        <UserContext.Provider
        value={{userData,setUserData}}
        >
          <Router>
          <Switch>

            <Route path={["/ListarVentas","/Usuarios","/ListarProductos","/"]}>
              <MainLayout>
                <Switch>

                  <Route path="/ListarVentas">
                    <ListarVentas></ListarVentas>
                  </Route>
                  
                  <Route path="/Usuarios">
                    <ListarUsuarios></ListarUsuarios>
                  </Route>

                  <Route path="/ListarProductos">
                    <ListarProductos></ListarProductos>
                  </Route>
                  

                  <Route path="/">
                    <Escritorio></Escritorio>
                  </Route>

                  
                </Switch>

              </MainLayout>
            </Route>
            
          </Switch>
        </Router> 
        </UserContext.Provider>

    </Auth0Provider>
      );
}

export default App;
