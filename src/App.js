import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserContext from './UserContext';
import Home from './components/pages/Home';
import AddUser from './components/pages/AddUser';
import EditUser from './components/pages/EditUser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Route all the page in one Html page
function App() {

  const [users, setUsers] = useState([]);

  return (
    <Router>

      <Switch>
        <UserContext.Provider value={{ users, setUsers }}>
          {/* call Home component when path "/" used */}
          <Route exact path='/' component={Home}></Route>

          {/* call AddUser component when path "/addUser" used */}
          <Route exact path='/addUser' component={AddUser}></Route>

          {/* call EditUser component when path "//editUser/:id" used */}
          <Route exact path={`/editUser/:id`} component={EditUser}></Route>
        </UserContext.Provider>
      </Switch>

    </Router>
  );
}

export default App;
