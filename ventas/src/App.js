import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import ListarVentas from './components/ListarVentas';
import ActualizarVenta from './components/ActualizarVenta';

    function App() {
      return (
        <div>
          <div>
            <h1>Aquí va el encabezado</h1>
          </div>

          <div>
            <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={ListarVentas} />
                  <Route path="/ActualizarVenta" component={ActualizarVenta}/>
              </Switch>
            </BrowserRouter>
          </div>
          <div>
            <h1>Aquí va el Pie de Página</h1>
          </div>
        </div>
        
      );
    }
    

export default App;
