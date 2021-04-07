import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import MySkillsPage from './Pages/MySkillsPage';
import WorkPage from './Pages/WorkPage';
import ContactPage from './Pages/ContactPage';
import Left_Side_Bar from './Body/Left_Side_Bar';
import WorkDetails from './Pages/work_details/WorkDetails';


function App() {
  return (
    <div className="App">
      <Router>
      <Left_Side_Bar />
        <Switch>
          <Route path="/" exact component={HomePage} ></Route>
          <Route path="/about" exact component={AboutPage} ></Route>
          <Route path="/skills" exact component={MySkillsPage} ></Route>
          <Route path="/work" exact component={WorkPage} ></Route>
          <Route path="/contact" exact component={ContactPage} ></Route>
          <Route path="/work/workdetails" exact component={WorkDetails} ></Route>

        </Switch>
      </Router>
     </div>
  );
}

export default App;
