import React from 'react';
import p2 from '../images/p2.png/.';
import Favatar from '../images/favatar.png/.';
import Mavatar from '../images/mavatar.png/.';
import M1avatar from '../images/m1avatar.png/.';
import "./Course.css";
import Header from './HeaderComponent';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron
  ,Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label  } from 'reactstrap';


class Python extends React.Component {
  constructor() {
    super();
    
    this.state= {
        isNavOpen: false,
        isModalOpen: false,
        isOpen: false
    };
    this.toggleNav=this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  
}

toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
     this.setState({ isOpen: false })
  }

  handleLogin(event) {
      this.toggleModal();
      alert("Username: "+ this.username.value+ "Password: "+ this.password.value
        +"Remember: " + this.remember.checked);
        event.preventDefault();
  }



  render(){
    return (
      <div style={{marginLeft: 20}} className="container-fluid" >
        <br/><br/>
           <img src={p2} alt="Java" className="img1" />  
           <br/>
        <div className="grid-container1">
            <div className="grid-child">
              <br/>
            <h1>PYTHON  <button className="button" onClick={this.toggleModal}>ENROLL NOW</button> </h1>  
        
            <h3>ABOUT THIS COURSE</h3>
           
            <p>It  teaches the fundamentals of programming in Python 3. We will begin at the beginning, with variables, conditionals, and loops, and get to some intermediate material like keyword parameters, list comprehensions, lambda expressions, and class inheritance.

You will have lots of opportunities to practice. You will also learn ways to reason about program execution, so that it is no longer mysterious and you are able to debug programs when they don’t work.

By the end of the specialization, you’ll be writing programs that query Internet APIs for data and extract useful information from them. And you’ll be able to learn to use new modules and APIs on your own by reading the documentation. That will give you a great launch toward being an independent Python programmer. </p>

            <h3>WHAT YOU WILL LEARN</h3>
            <hr />
            
            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>INTRODUCTION TO PYTHON3</span>
            <div className="dropdown-content">
            <p>This course aims to teach everyone the basics of programming computers using Python. We cover the basics of how one constructs a program from a series of simple instructions in Python.  The course has no pre-requisites and avoids all but the simplest mathematics. Anyone with moderate computer experience should be able to master the materials in this course. This course will cover Chapters 1-5 of the textbook “Python for Everybody”.</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=WvhQhj4n6b8" target="_blank">WATCH NOW </a></button>
            </div>
            </div>
            <br/>
            <hr/>
                
            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>PYTHON DATA STRUCTURES</span>
            <div className="dropdown-content">
            <p>This course will introduce the core data structures of the Python programming language. We will move past the basics of procedural programming and explore how we can use the Python built-in data structures such as lists, dictionaries, and tuples to perform increasingly complex data analysis.</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=xOuRE3IuEB8" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr/>
                
            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>ACCESS WEB DATA USING PYTHON</span>
            <div className="dropdown-content">
            <p>This course will show how one can treat the Internet as a source of data. We will scrape, parse, and read web data as well as access data using web APIs. We will work with HTML, XML, and JSON data formats in Python</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=0_VZ7NpVw1Y" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr/>

            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>ACCESS THE DATABASE USING PYTHON</span>
            <div className="dropdown-content">
            <p>This course will introduce students to the basics of the Structured Query Language (SQL) as well as basic database design for storing data as part of a multi-step data gathering, analysis, and processing effort. The course will use SQLite3 as its database. We will also build web crawlers and multi-step data gathering and visualization processes. We will use the D3.js library to do basic data visualization.
            </p>
    
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=g60QghtJmjY " target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr/>

            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>PROJECT SECTION</span>
            <div className="dropdown-content">
            <p>This course will walk you through a hands-on project suitable for a portfolio. You will be introduced to third-party APIs and will be shown how to manipulate images using the Python imaging library (pillow), how to apply optical character recognition to images to recognize text (tesseract and py-tesseract), and how to identify faces in images using the popular opencv library. By the end of the course you will have worked with three different libraries available for Python 3 to create a real-world data-analysis project.</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=mmWjcipSGJI" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr />
          
            </div>
                <div className="grid-child right">
              
                <i className='fa'>&#xf254;</i><span id="heading">LENGTH  : </span><span>     8-Weeks</span><br /><hr />
                <i  className='fa'>&#xf3fd;</i><span id="heading">EFFORT  : </span><span>     6-7 hours per week</span><br /><hr />
                <i  className='fa'>&#xf02b;</i><span id="heading">PRICE  :   </span><span>    Free</span><br /><hr />
                <i className="fa">&#xf19c;</i><span id="heading">INSTITUTION  : </span><span>   Vanderbilt </span><br /><hr />
                <i className="fa">&#xf19d;</i><span id="heading">SUBJECT  : </span><span>       Python</span><br /><hr />
                <i  className='fa'>&#xf0a3;</i><span id="heading">LEVEL  :  </span><span>      Beginner</span><br /><hr />
                <i  className='fa'>&#xf557;</i><span id="heading">LANGUAGE  : </span><span>     English</span><br /><hr />
                <i className='fa'>&#xf5da;</i><span id="heading">COURSE TYPE  :</span><span>   Self-paced</span><br /><hr />
              
                </div>
                </div>
                
                <div class="container-fluid">
                <h3>INSTRUCTORS</h3>
                  
                <div className="card-group2">
                
                <div className="card2">
    <div className="card-body2">
    <img className="card-img-top img1" src={Mavatar} alt="Card image"  />
      <h4 className="card-text2">Larry Hedge</h4></div>
      </div>

      <div className="card2 ">
    <div className="card-body2">
    <img className="card-img-top img1" src={Favatar} alt="Card image"  />
      <h4 className="card-text2">Millie Spoons</h4></div>
      </div>

      <div className="card2">
    
    <div className="card-body2">
    <img className="card-img-top img1" src={M1avatar} alt="Card image"  />
      <h4 className="card-text">John Radolda </h4></div>
      </div>
      </div>
      <br />
      <button className="button" onClick={this.toggleModal}>ENROLL NOW</button>
      <br/>
      </div>
      <br/>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
           <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
           <ModalBody>
               <Form onSubmit={this.handleLogin}>
                   <FormGroup>
                       <Label htmlFor="username">Username</Label>
                       <Input type="text" id="username" name="username" 
                            />
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor="password">Password</Label>
                       <Input type="password" id="password" name="password"
                            />
                   </FormGroup>
                   <FormGroup check>
                       <Label check>
                           <Input type="checkbox" name="remember"
                             /> 
                           Remember me
                       </Label>
                   </FormGroup>
                   <Button type="submit" value="submit" color="bg-primary">Login</Button>

               </Form>
           </ModalBody>
       </Modal>

      
      </div> 
      
    
      
    );
  }
}
  export default Python;
