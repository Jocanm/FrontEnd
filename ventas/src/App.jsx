import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Escritorio from './pages/Escritorio';
import ListarVentas from './pages/ListarVentas';
import ActualizarVenta from './pages/ActualizarVenta';
import CrearVenta from './pages/CrearVenta';
import ListarUsuarios from './pages/ListarUsuarios';
import ActualizarUsuario from './pages/ActualizarUsuario';
import CrearProducto from './pages/CrearProducto';
import ListarProductos from './pages/ListarProductos';
import ActualizarProducto from './pages/ActualizarProducto';

    function App() {
            return (
        <div>
          <div>
            <h1 class="header"><img src="logo.png" class="img" alt="Logo"/></h1>
            <br></br><br></br><br></br><br></br>
          </div>

          <body>
            <div>
            <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Escritorio}/>
                  <Route path="/ListarVentas" component={ListarVentas} />
                  <Route path="/ActualizarVenta" component={ActualizarVenta}/>
                  <Route path="/CrearVenta" component={CrearVenta}/>
                  <Route path="/ListaUsuarios" component={ListarUsuarios}></Route>
                  <Route path="/ActualizarUsuario" component={ActualizarUsuario}></Route>
                  <Route path="/CrearProducto" component={CrearProducto}/>
                  <Route path="/ActualizarProducto" component={ActualizarProducto}/>
                  <Route path='/ListarProductos' component={ListarProductos}></Route>
              </Switch>
            </BrowserRouter>
            </div>
          </body>
          <footer>
              <div>
                <br></br><br></br><br></br><br></br>
                <h7 class="footer"> 
                  <p>©2021 Derechos reservados</p>
                  <p>info@innovasoft.com</p>
                </h7>
              </div>
          </footer>
        </div>   
      );
    }
    

export default App;
