import  React  from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import ErrorPage from './component/Error';
import UserHome from './component/UserHome';
import LandingPage from './component/LandingPage';
import LoadingSpinner from './component/LoadingSpinner'
import { createBrowserHistory } from 'history';
import './App.css';




const App: React.FC = () => {
  const history = createBrowserHistory();
  return (
    <React.Fragment>
      <Header></Header>
      <Router history={history}>
       
          <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/login" component={UserHome} />
              <Route component={ErrorPage} />
          </Switch>
       
      </Router>
</React.Fragment>
  )
}

export default App;
