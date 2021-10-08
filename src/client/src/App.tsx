// --- State & Modules-----
import { ChoreProvider } from 'context/chore/ChoreContext';
import { UserProvider } from 'context/user/UserContext';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

// --- Components -----
import Navbar from 'containers/Navbar';
import Cards from 'containers/Cards';
import ChoreTable from 'components/ChoreTable';
import Footer from 'containers/Footer';
// import Home from 'components/Home'


// --- CSS -----
// import 'reset.css';
import './style.css';

export default function App() {
  return (
    <ChoreProvider>
      <UserProvider>
        <Router>
            <Navbar />
          <Switch>            
            {/* <Route exact path='/' component={Home} /> */}
            <Route path='/chorelist' component={Cards} />
            <Route exact path='/choretable' component={ChoreTable} />
            <Route path='/' >
              <Redirect to='/chorelist' />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </UserProvider>
    </ChoreProvider>
  );
}

