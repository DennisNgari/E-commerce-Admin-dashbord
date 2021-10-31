import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";

import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Home from './pages/Home'
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

        </Switch>
      </Container>
     
    </Router>
  )
}

export default App
