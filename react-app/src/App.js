import logo from './logo.svg';
import './App.css';
import Register from './Register.js';
import EditProduct from './EditProduct.js';
import AddProduct from './AddProduct.js';
import Login from './Login.js';
import Protected from './Protected.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {  
  return (
        <Router>
      <div className="App">
            <div>
            <Switch>
            <Route path='/login'>
            <Login />
            </Route>
            <Route path='/register'>
            <Register />
            </Route>
            <Route path='/add'>
            <Protected Cmp={AddProduct}/>
            </Route>
            <Route path='/update'>
            <Protected Cmp={EditProduct}/>
            </Route>
            </Switch>
            </div>  
      </div>
    </Router>
  );
}

export default App;
