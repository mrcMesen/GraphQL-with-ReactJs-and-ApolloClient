import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SummaryHome } from './components/SummaryHome';
import { PersonDetail } from './components/PersonDetail';
import { Layout } from './components/Layout';

import './styles/App.css';

/** Main App Routing */
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <SummaryHome />
          </Route>
          <Route path='/person-details/:id'>
            <PersonDetail />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
