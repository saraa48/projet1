import React, { Component } from "react";

import "../Css/Style.css";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import CardMenu from "./CardMenu";
import axios from "axios";
import AddMenu from "../AddMenu";
class ListMenu extends Component {
  state = {
    OurMenu: [],
    modal:false
    //      OurMenu:[{img:"http://www.zakweli.com/wp-content/uploads/2017/12/fruits-de-mer.jpg",
    //         name:"Fruit de mer",
    //         description:"Un mélange de moules du Pacifique (40%) décoquillées cuites (moules de corde) de crevettes nordiques (20%) décortiquées cuites"
    //     ,price:"$15"
    //     },
    //     {img:"https://larecette.net/wp-content/uploads/2019/11/iStock-1079900430-1152x768.jpg",
    //     name:"Filet mignon",
    //     description:"Accompagné de frites, légumes vapeur ou pommes de terre grenailles,filet mignon est généralement une viande de porc"
    // ,price:"$20"},
    // {img:"https://assets.afcdn.com/recipe/20180119/76936_w1024h768c1cx2680cy1786cxt0cyt0cxb5361cyb3573.jpg",
    // name:"Lasagnes",
    // description:" Véritable institution en Italie, les lasagnes sont appréciées pour leur texture et leur mélange de saveurs. Gourmandes et délicieusement gratinées",
    // price:"$25" }]
  };
  componentDidMount = () => {
    this.getMenu();
  };

  getMenu = () => {
    axios.get("/ProjectRest/menu/").then(res =>
      this.setState({
        OurMenu: res.data
      })
    );
  };
  deleteMenu = id => {
    axios.delete(`/ProjectRest/menu/${id}`).then(this.getMenu);
  };

    newMenu = nMenu => {
    axios
      .post("/ProjectRest/menu/", {
        img: nMenu.img,
        plat: nMenu.plat,
        description: nMenu.description,
        price: nMenu.price,
        type: nMenu.type
      })
      .then(this.getMenu);

    console.log("anythinng");
  };
  modifyMenu=modifOneMenu=>axios.put(`/ProjectRest/menu/${modifOneMenu._id}`,{

    img: modifOneMenu.img,
    plat:modifOneMenu.plat,
    description: modifOneMenu.description,
    price: modifOneMenu.price,
    type: modifOneMenu.type
  }).then(this.getMenu())


  toggle = () => this.setState({ ...this.state, modal: !this.state.modal });

  render() {
    return (
      <div className="image-Menu">
        {this.state.OurMenu.map((el, key) => (
          <CardMenu
            key={key}
            menu={el}
            deleteMenu={this.deleteMenu}
            isEdite={true}
              AddMenu={this.modifyMenu}
            toggle={this.toggle}
          />
        ))}
        <Link to="/">
          <FontAwesome className="fas fa-backward angle " />
        </Link>
        <AddMenu AddMenu={this.newMenu} modal={this.state.modal} toggle={this.toggle} isEdite={false}/>
      </div>
    );
  }
}
export default ListMenu;
