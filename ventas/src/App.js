import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Escritorio from './components/Escritorio';
import ListarVentas from './components/ListarVentas';
import ActualizarVenta from './components/ActualizarVenta';
import CrearVenta from './components/CrearVenta';
import ListarUsuarios from './components/ListarUsuarios';
import ActualizarUsuario from './components/ActualizarUsuario';

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