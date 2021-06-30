import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './css/reset.css';
// import './css/style.css';
import './js/script.js';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './routes/Main';
import Lounge from './routes/Lounge';
import Sub from './routes/Sub';
import Login from './routes/Login';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact={true} component={Main} />
            <Route path="/cate/:catename" exact={true} component={Lounge} />
            <Route path="/cate/:catename/:username" component={Sub} />
            <Route path="/login" component={Login} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
