import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Create from './Pages/Create';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <div>
          <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/create'><Create /></Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
