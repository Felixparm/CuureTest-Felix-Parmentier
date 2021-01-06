
import {Navbar, Row} from 'reactstrap'
import SignInUp from './Component/SignInUp'
import HomePage from './Component/HomePage'
import SellScreen from './Component/SellScreen'
import FilterScreen from './Component/FilterScreen'
import ArticlesSell from './Component/ArticlesSell'
import ArticlesBought from './Component/ArticlesBought'
import informationUser from './Component/informationUser'
import result from './Component/Resultsearch'
import Product from './Component/productSelected'
import Basket from './Component/Basket'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import token from './reducers/token'
import subcat from './reducers/filtre'
import product from'./reducers/product'

const store = createStore(combineReducers({token,subcat,product}))


function App() {
  return (
   <Provider store={store}>
    
      <Router>
        <Switch>
        
        <Route  path="/"  component={SignInUp} exact/>
        <Route  path="/Accueil" component={HomePage} exact />
        <Route  path="/Vente" component={SellScreen} exact />
        <Route  path='/Recherche' component={FilterScreen} />
        <Route  path='/Vendu' component={ArticlesSell} />
        <Route  path='/Achete' component={ArticlesBought} />
        <Route  path='/information' component={informationUser} />
        <Route  path='/resultat' component={result} />
        <Route  path='/produit' component={Product} />
        <Route  path='/basket' component={Basket} />
        {/* <NavigationBar/> */}
        
       </Switch>
      </Router>

  </Provider>
  );
}

export default App;
