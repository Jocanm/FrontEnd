import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Escritorio from './pages/Escritorio';
import ListarVentas from './pages/ListarVentas';
import ListarUsuarios from './pages/ListarUsuarios';
import ListarProductos from './pages/ListarProductos';
import MainLayout from './layout/MainLayout';
import Login from './pages/Login';

function App() {
    return (

      <Router>
        <Switch>

          <Route path={["/ListarVentas","Usuarios","ListarProductos","/","/escritorio"]}>
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
                

                <Route path="/escritorio">
                  <Escritorio></Escritorio>
                </Route>

                <Route path="/">
                  <Login/>
                </Route>
              </Switch>

            </MainLayout>
          </Route>

        </Switch>
      </Router>  
      );
}

export default App;
