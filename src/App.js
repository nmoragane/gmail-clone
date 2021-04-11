import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Mail from './Components/Mail';
import EmailList from './Components/EmailList';
import SendMail from './Components/SendMail';
import{selectSendMessageIsOpen} from './features/mailSlice';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Components/Login';

function App() {
  //import from reducer eke error enawa.
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = userSelector(selectUser);


  return (
    <Router>

      {!user? (
        <Login/>
      ): (
        <div className="app">
          <Header/>

          <div className="app__body">
            <Sidebar/>

            <Switch>
              <Route path="/mail">
                <Mail/>
              </Route>

              <Route path="/">
                <EmailList/>
              </Route>
            </Switch>

          </div>

          {sendMessageIsOpen && <SendMail/>}
        </div>
      )}
    </Router>
  );
}

export default App;
