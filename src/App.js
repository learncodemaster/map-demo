import logo from './logo.svg';
import './App.css';
import {Home} from "./components/home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Car from "./pages/Car";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout"
import Truck from "./pages/Truck";
import Pickup from "./pages/Pickup"


function App() {
  return (
    <BrowserRouter>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/main" exact component={Main}/>
                        <Route path="/car" component={Car}/>
                         <Route path="/truck" component={Truck}/>
                        <Route path="/pickup" component={Pickup}/> 
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            )}/>
        </BrowserRouter>
  );
}

export default App;
