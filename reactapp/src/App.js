import SignInUp from './Component/SignInUp'
import ProductPage from './Component/ProductPage'
// Mise en place de la navigation
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
      <Router>
        <Switch>
          <Route  path="/"  component={SignInUp} exact/>
          <Route  path="/Product" component={ProductPage} exact />
        </Switch>
      </Router>
  );
}

export default App;
