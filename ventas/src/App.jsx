import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Escritorio from './pages/Escritorio';
import ListarVentas from './pages/ListarVentas';
import ActualizarVenta from './pages/ActualizarVenta';
import CrearVenta from './pages/CrearVenta';
import ListarUsuarios from './pages/ListarUsuarios';
import ListarProductos from './pages/ListarProductos';
import MainLayout from './layout/MainLayout';

function App() {
    return (

      <Router>
        <Switch>

          <Route path={["/ListarVentas","/ActualizarVenta","/CrearVenta","Usuarios","ListarProductos","/"]}>
            <MainLayout>
              <Switch>

                <Route path="/ListarVentas">
                  <ListarVentas></ListarVentas>
                </Route>

                <Route path="/ActualizarVenta">
                  <ActualizarVenta></ActualizarVenta>
                </Route>

                <Route path="/CrearVenta">
                  <CrearVenta></CrearVenta>
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
      );
}

export default App;
