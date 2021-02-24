import React, { Component } from 'react'
import './style.css'
import './NavBar.css'
import { Navbar,Nav,NavDropdown,Form,FormControl, Button,Dropdown,DropdownButton,Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Montserrat-Medium.ttf'



const NavBar =() =>{
    return(
    <nav class="navbar navbar-default"style={{padding:'0px',backgroundColor:'transparent',borderColor:'transparent'}}>
        <div class="container-fluid" style = {{padding:'0px'}}>
            <div class="navbar-header">
                <a class="navbar-brand" href="http://localhost:3000/">
                    <img src= "logo_icon.png" style={{display:'flex', justifyContent:'center',alignItems:'center',marginTop:'1px',height:"50px"}}/>
                </a>
            </div>
            <form class="navbar-form navbar-right" action="/action_page.php">
                <div class="form-group">
                    <input type="text" class="form-control" style={{borderRadius:'25px',width:'500px',marginTop:'15px',borderColor:'rgb(40, 92, 233)'}}placeholder="Search" name="search"/>
                </div>
                <button class="btn btn-default" style={{borderRadius:50,height:'40px',width:'40px',marginLeft:'10px',marginTop:'15px'}} type="submit">
                    <i class="glyphicon glyphicon-search" style={{display:'flex', justifyContent:'center',alignItems:'center',fontSize:'17px'}}></i>
                </button>
            </form>
            <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                style={{borderRadius:50,height:'40px',width:'40px',marginTop:'15px'}}>
                    <i class="glyphicon glyphicon-menu-hamburger" style={{display:'flex', justifyContent:'center',alignItems:'center',fontSize:'17px'}}></i>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="/">Home</a>
                        <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/eventform">Form</a>
                        <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/about">About</a>
                </div>
            </div>
        </div>
    </nav>)
}


export default NavBar