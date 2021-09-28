import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Escritorio from './components/Escritorio';
import ListarVentas from './components/ListarVentas';
import ActualizarVenta from './components/ActualizarVenta';
import CrearVenta from './components/CrearVenta';

    function App() {
      return (
        <div>
          <div>
            <h1 class="header"><img src="logo.png" class="img"/></h1>
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
