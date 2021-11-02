import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";

import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Home from './pages/Home'
import NewProduct from "./pages/NewProduct";
import NewUser from "./pages/NewUser";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import User from "./pages/User";
import UserList from "./pages/UserList";

const Container = styled.div`
display: flex;
margin-top: 5px;
`


const App = () => {
  return (
    <Router>
      <Topbar/>
      <Container>
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/users">
            <UserList/>
          </Route>

          <Route path="/user/:userId">
            <User/>
          </Route>

          <Route path="/newuser">
            <NewUser/>
          </Route>

          <Route path="/products">
            <ProductList/>
          </Route>

          <Route path="/product/:productId">
            <Product/>
          </Route>

          <Route path="/newproduct">
            <NewProduct/>
          </Route>


        </Switch>
      </Container>
     
    </Router>
  )
}

export default App
