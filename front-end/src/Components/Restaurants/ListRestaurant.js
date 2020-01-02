import React, { Component } from "react";
import CardRestaurant from "./CardRestaurant";
import "./CardStyle.css";
import axios from "axios";
class ListRestaurant extends Component {
  state = {
    OurRest: [], 
   
  };
  componentDidMount = () => {
    this.getRestaurant();
  };

  getRestaurant = () => {
    axios.get("/ProjectRest/restaurant/").then(res =>
      this.setState({
        OurRest: res.data
      })
    );
  };
  deleteRestaurant = id => {
    axios.delete(`/ProjectRest/restaurant/${id}`).then(this.getRestaurant);
  };
 
  
  render() {
    return (
      <div className="liste-restaurants">
        {this.state.OurRest.map((el, key) => (
          <CardRestaurant
             key={key}
            restaurant={el}
            getRestaurant={this.getRestaurant}
            deleteRestaurant={this.deleteRestaurant}
          />
        ))}
      </div>
    );
  }
}
export default ListRestaurant;
