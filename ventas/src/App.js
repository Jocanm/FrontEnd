import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import ListarVentas from './components/ListarVentas';
import ActualizarVenta from './components/ActualizarVenta';
import CrearVenta from './components/CrearVenta';
import ListarUsuarios from './components/ListarUsuarios';

    function App() {
      return (
        <div>
          <div>
            <h1 class="header"><img src="logo.png" class="img"/></h1>
            <br></br><br></br><br></br><br></br>
          </div>

          <div>
            <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={ListarVentas} />
                  <Route path="/ActualizarVenta" component={ActualizarVenta}/>
                  <Route path="/CrearVenta" component={CrearVenta}/>
                  <Route path="/ListaUsuarios" component={ListarUsuarios}></Route>
              </Switch>
            </BrowserRouter>
          </div>
          <div>
            <br></br><br></br><br></br><br></br>
            <h7 class="footer"> 
              <p>©2021 Derechos reservados</p>
              <p>info@innovasoft.com</p>
            </h7>
          </div>
        </div>
        
      );
    }
    

export default App;
