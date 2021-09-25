import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ListarVentas from './components/ListarVentas';


function App() {
  return (
    <Router>
      <Route path="/" exact component={ListarVentas} />
    </Router>
  );
}

export default App;
