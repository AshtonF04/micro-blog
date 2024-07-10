import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Create from './Pages/Create';
import BlogDetails from './Pages/BlogDetails'
import NotFound from './Pages/NotFound';


function App() {
  return (
    <Router>
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <div>
          <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/create'><Create /></Route>
            <Route exact path='/blogs/:id'><BlogDetails /></Route>
            <Route path='*'><NotFound /></Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
