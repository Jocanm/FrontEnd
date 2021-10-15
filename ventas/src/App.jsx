import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Escritorio from './pages/Escritorio';
import ListarVentas from './pages/ListarVentas';
import ListarUsuarios from './pages/ListarUsuarios';
import ListarProductos from './pages/ListarProductos';
import MainLayout from './layout/MainLayout';
// import PublicLayout from './layout/PublicLayout';
// import Login from './pages/Login';
import { Auth0Provider } from "@auth0/auth0-react";


function App() {
    return (
    <Auth0Provider
      domain="mintic-concesionario.us.auth0.com"
      clientId="zrbYaWyFWyQ3DipYMohDBs0dCs40Ngvu"
      redirectUri={window.location.origin}
      audience="api-autenticacion-ventas"
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
    </Auth0Provider>
      );
}

export default App;
