import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import CrearProducto from './components/CrearProducto';
import ListarProductos from './components/ListarProductos';
import ActualizarProducto from './components/ActualizarProducto';

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
                  <Route exact path="/" component={ListarProductos} />
                  <Route path="/CrearProducto" component={CrearProducto}/>
                  <Route path="/ActualizarProducto" component={ActualizarProducto}/>
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
