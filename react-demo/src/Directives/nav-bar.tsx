import React,{ Component } from "react";

export class NavBar extends Component{
constructor(props:any)
{
    super(props);
}

render(){

    return(
        <nav className='navbar-theme row' style={{position:'relative'}}>
            <div className='navbar-header'>
                <a className='navbar-brand' href="#">React Demo</a>
            </div>
            <ul className='navbar-nav nav'>
            <li>
                <a href="#"  > Website </a>
            </li>
            
            <li>
                <a href="#" >Web Application</a>
            </li>
            
            <li>
                <a href="#" >Logo Design</a>
            </li>
            
            <li>
                <a href="#" >About Us</a>
            </li>
            <li style={{marginLeft:'60%',position:'absolute'}}>
                <a href="#" >Login/Register</a>
            </li>
            </ul>
        </nav>
    )
}


}