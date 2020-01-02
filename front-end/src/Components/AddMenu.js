import React, { Component } from "react";
import {
  Button,Modal,ModalHeader,ModalBody,ModalFooter,
  Input
} from "reactstrap";

import "./Css/Style.css"
// import axios from "axios";

class AddMenu extends Component {
  constructor() {
    super();
    this.state = {
      img:"",
      name:"",
      plat:"",
      description:"",
      price:"",
      type:"",
 
    };
  }



  //   const [modal, setModal] = useState(false);

  // toggle = () => this.setState({ modal: !this.state.modal });

  OnChangeName = e => {
    this.setState({
      
   [ e.target.id]: e.target.value ,
      
    });
  
  };
  componentDidMount() {
    this.props.isEdite
      ? this.setState({
        name: this.props.menu.name,
        img: this.props.menu.img,
        plat: this.props.menu.plat,
        description: this.props.menu.description,
        price: this.props.menu.price,
        type: this.props.menu.type,
        _id:this.props.menu._id

        })
      : this.setState({
          name: "",
          img: "",
          description: "",
          price: "",
          type: ""
        });
  }

  render() {
   const{modal,toggle,AddMenu}=this.props;
    return (
      <div>
        <Button className="addButton" color="success" onClick={toggle}>
          Ajouter Menu
        </Button>
        <Modal
          isOpen={modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={toggle}
        >
          <ModalHeader toggle={toggle}>Menu à ajouter</ModalHeader>
          <ModalBody>
            <span>image de Menu</span>
            <Input
              placeholder="enter image menu"
              type="text"
             id="img"
             onChange={this.OnChangeName}
             defaultValue={this.state.img}
            />
            <span>Image Menu</span>
            <Input
              placeholder="entrer le plat"
              type="text"
              id="plat"
              onChange={this.OnChangeName}
              defaultValue={this.state.plat}
            />
            <span> Description de Menu</span>
            <Input
              placeholder="enter your desription"
              type="text"
            id="description"
            onChange={this.OnChangeName}
            defaultValue={this.state.description}
            />
             <span> prix de Menu</span>
            <Input
              placeholder="enter your price"
              type="text"
            id="price"
            onChange={this.OnChangeName}
            defaultValue={this.state.price}
            /> <span> type de Menu</span>
             <Input
              placeholder="enter your type"
              type="text"
            id="type"
            onChange={this.OnChangeName}
            defaultValue={this.state.type}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                AddMenu(this.state);toggle(); }} >
              Save change
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMenu;
