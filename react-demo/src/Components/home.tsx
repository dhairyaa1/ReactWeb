import React,{ Component, Fragment } from "react";
import { NavBar } from "../Directives/nav-bar";
import { Carousel } from "../Directives/Carousel";
import { Footer } from "../Directives/Footer";
import { Blog } from "../Directives/Blog";

export class HomeComponent extends Component{
   constructor(props:any)
   {
    super(props);
   }
    
render()
{
    return (
       <Fragment>
           <NavBar/>
            <Carousel/>
            <Blog/>
            <Footer/>
       </Fragment>
    )
}

}