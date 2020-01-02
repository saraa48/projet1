import React from 'react';
import './App.css';

import {BrowserRouter,Route,Switch} from "react-router-dom";

import ListRestaurant from './Components/Restaurants/ListRestaurant';
import ListMenu from './Components/OurMenu/ListMenu';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListRestaurant}/>
        <Route exact path="/menu" >
         <ListMenu/>
        
          </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
