import React,{ Component, Fragment } from "react";

export class Carousel extends Component{
constructor(props:any)
{
    super(props);
}

render()
{
    return(
        <Fragment>
<div >
  <div id="myCarousel" className="carousel slide" data-ride="carousel">

    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner">
      <div className="item active">
        <img src="Assets\Images\img1.jpg" width="100" height="100" alt="Los Angeles"/>
      </div>

      <div className="item">
        <img src="Assets\Images\img2.jpg" alt="Chicago" />
      </div>
    
      <div className="item">
        <img src="Assets\Images\img3.jpg" alt="New york"/>
      </div>
    </div>

  
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  </div>
         </Fragment>
    )
}


}