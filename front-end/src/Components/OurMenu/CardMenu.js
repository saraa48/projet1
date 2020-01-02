import React, { Component } from 'react';
import "../Css/Style.css";
import AddMenu from '../AddMenu';
 class CardMenu extends Component {
    state={
       modal:false
    };




   //  toggle=()=>this.setState({modal:!this.state.modal});
   render() {
      const {menu,deleteMenu, AddMenu,toggle,isEdite}=this.props
      return (
         <div>
                    <div className=" our-Menu">
           <img src={menu.img} className="nos-plats"  alt="..."/> 
    <h1> {menu.plat}</h1>
 <p>{menu.description}</p>
    <h2 className="price">{menu.price}</h2>
 <h2>Type:{menu.type}</h2>
 <button type="button" class="btn btn-outline-danger"  onClick={() => deleteMenu(menu._id)}>
          Delete
        </button>
        <button type="button" class="btn btn-outline-warning modifier" onClick={toggle}>
         Modifier
         {this.state.modal?(<AddMenu modal={this.state.modal} toggle={this.toggle} menu={menu} isEdite={isEdite}  AddMenu={ AddMenu}/>):null}
       </button>
       <div>
       
       </div>

        </div>

         </div>
      )
   }
}

export default CardMenu;