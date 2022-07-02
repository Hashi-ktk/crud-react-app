import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import PageNotFount from "./components/pages/PageNotFound";
import Adduser from "./components/users/Adduser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/user/add" component={Adduser}></Route>
          <Route exact path="/user/edit/:id" component={EditUser}></Route>
          <Route exact path="/user/:id" component={User}></Route>
          <Route exact path="*" component={PageNotFount}></Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
