import logo from './logo.svg';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import './App.css';
import Layout from './hocs/layout'

import Home from './containers/home'
import Login from './containers/login'
import Signup from './containers/signup'
import Activate from './containers/activate'
import Resetpassword from './containers/resetpassword'
import Resetpasswordconfirm from './containers/resetpasswordconfirm'
import Profile from "./containers/Profile";
import AssignmentList from "./containers/AssignmentList";
import AssignmentDetail from "./containers/AssignmentDetail";
import AssignmentCreate from "./containers/AssignmentCreate";

import {Provider} from 'react-redux'
import store from './store'



function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>

        <Layout>
          <Switch>



            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/reset_password">
              <Resetpassword />

            </Route>
            <Route path="/password/reset/confirm/:uid/:token">
              <Resetpasswordconfirm />
            </Route>
            <Route path="/activate/:uid/:token">
              <Activate />
            </Route>
            <Route  path="/" component={AssignmentList} />
            <Route  path="/create/" component={AssignmentCreate} />
    
            <Route  path="/assignments/:id" component={AssignmentDetail} />
            <Route  path="/profile/:id" component={Profile} />


          </Switch>
        </Layout>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
