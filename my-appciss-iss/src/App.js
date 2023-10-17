

import "./App.css";
import Home from "./Component/Home";
import Speakers from "./Component/Speakers";
import Sponcers from "./Component/Sponcers";
import Register from "./Component/Register";
import Team from "./Component/Team";
import faq from "./Component/faq";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
/* The following line can be included in a src/App.scss */


// or less ideally


const App = () => {
  return (
    <Router>
      
        <Navbar />

        <Routes>
          <Route path="/" component={Home} />
          <Route path="/Register" component={Register} />
          <Route path="/Spekers" component={Speakers} />
          <Route path="/Sponcers" component={Sponcers} />
          <Route path="/Team" component={Team} />
          <Route path="/faq" component={faq} />
        </Routes>
       
     
    </Router>
  );
};

export default App;
