import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import './index.css';
import App from './components/App'
import Goodbye from "./components/Goodbye";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Router>
        <header>
            <nav>
              <li> <Link to="/todo"> Home </Link></li>
              <li><Link to="/goodbye"> Done for the day? </Link> </li>
            </nav>
        </header>
          <Switch>
            <Route path="/todo">
                <App/>
            </Route> 
            <Route path="/goodbye">
                <Goodbye/>
            </Route>
          </Switch>
            
  
      </Router>
    </div> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
