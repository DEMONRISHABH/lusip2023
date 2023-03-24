import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import {Link} from
"react";

class Navbar extends Component{
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked : !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItmes">
                <img className="navbar-logo" src="https://lusip.lnmiit.ac.in/images/q.gif"  height="50px" class="logo"></img>
                <div className="menu-icons" onClick={
                    this.handleClick
                }>
                  <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? 
                "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                            <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                        )
                    })}
               <button>Login</button>
                </ul>
            </nav>
        );
    }
}

export default Navbar;