import React from 'react';
import slide1 from "../images/slide_image1.gif";
import slide2 from "../images/slide_image2.png";
import slide3 from "../images/slide_image3.jpg";
import Slideshow from './SlideShowComponent';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Jumbotron } from 'reactstrap';
import {Link} from 'react-router-dom';

const s = {
    container1: "screenW screenH col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
  };

  const slides = [slide1, slide2, slide3];

  const img = require('../images/top_pic.gif');

function RenderCard({item}) {
    return(
        <React.Fragment>
        <div className="subjectcard1">
            <CardImg width="100" height="250" src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardText>
                <ul>
                    <li>
                    <Link to= {item.path1}> { item.subject1 } </Link></li>
                    <li>
                    <Link to= {item.path2}>{ item.subject2 } </Link></li>
                    <li>
                    <Link to= {item.path3}>{ item.subject3 } </Link></li>
                </ul>
            </CardText>
            </CardBody>
            </div>
       </React.Fragment>
    
    );
}


const Home = (props) => {
    const subject = props.subject.map((sub) => {
      return (
        <div key={sub.id} className="col-12 col-md-4 mb-3 justify-content-center">
          <RenderCard item={sub} />
        </div>
      );
  });

    
    return(
        <>
        <Jumbotron>
      <div className="container">
        <div className="row text-center">
            <div className="col-12">
                <h2>Home Learn</h2>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>Making Learning Fun</h3>
                </div>            
            </div>            
        </div>
      </div>
       </Jumbotron>
        <div className={s.container1}>
            <Slideshow slides={slides} />
        </div>
        <br/>
        <br/>
        
        <div className="container">
            <div className="row">
                <div className="col-12">
                  <h3>Subjects</h3>
                  <hr />
                </div>                
            </div>
            <div className="row">
                {subject}
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                <img class="img2" src={img} alt="img"></img>
                </div>
            </div>
        </div>
        </>

    );
}

export default Home;