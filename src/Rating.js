import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Montserrat-Medium.ttf';

class LikeRating extends Component{

    
    render() {
        const {CardInfo, handlePatch} = this.props;
        return(
            <div>
                <Button style={{ top: '5%', left: '80%', borderRadius: '5rem', backgroundColor: "transparent", borderColor:"transparent"}}  
                    onClick={() => handlePatch(CardInfo._id,{'rating':parseInt(CardInfo.rating)+1})}>
                    <i className="glyphicon glyphicon-heart" style={{display:'flex', justifyContent:'center',alignItems:'center',fontSize:'40px', color: "red"}}></i>
                </Button>
            </div>
        )
    }
}

export default LikeRating

