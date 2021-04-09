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

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)


  return (
    <Router>
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

        <SendMail/>
      </div>
    </Router>
  );
}

export default App;
