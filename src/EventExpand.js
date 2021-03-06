import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Montserrat-Medium.ttf';
import './EventExpand.css'
import { Card, Button, Tag, Row } from 'react-bootstrap';


const Carousel = (props) =>
{

  const CardInfo = props.CardInfo;

  const image_list = CardInfo.photo.split(", ");
  console.log(image_list);


  return(

  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">

      {/* mapping that for loops through image list to put into slider. marks first item with active tag. */}
      { image_list.map( (image, index) => (
        index == 0 ?
          <div class="carousel-item active">
            <div class="img-placeholder">
              <img class ="img-placeholder" src={image}  alt="image not found"/>
            </div>
          </div>
          :
          <div class="carousel-item">
            <div class="img-placeholder">
              <img class ="img-placeholder" src={image}  alt="image not found"/>
            </div>
          </div>
      ))}

    </div>

    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>

    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>

  </div>

  )
}

const TagOutput = (props) => {
  const tags_list = props.tags_list;
  const listItems = tags_list.map((tags) =>
  <span class="badge badge badge-primary">{tags}</span>
  );

  return (
      <div>{listItems.splice(0,3)}</div>
  );
}


const StarsToDisplay = (props) => {
  var rating = parseInt(props.text_input);
  var ratings = Array(5).fill().map((_, i) => i < rating ? 'fa fa-star checked' : 'fa fa-star');

  //Why does this not allow the rating to be 5?
  if(rating >=0 && rating <=5)
  {
    return(
      <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <span class={ratings[0]}></span>
          <span class={ratings[1]}></span>
          <span class={ratings[2]}></span>
          <span class={ratings[3]}></span>
          <span class={ratings[4]}></span>
      </div>
    )
  }
  return (
    <div>
      Rating Input Error.
    </div>
    )
}


const DescriptionCard = (props) =>
{

  const CardInfo = props.CardInfo;

  return(
    <div className="div-housing">
      <div className="align-text">
        <div className="header-text">Event Name</div>
        <p>{CardInfo.event}</p>
        <div className="header-text">Description</div>
        <p>{CardInfo.description}</p>
        <div className="header-text">Location</div>
        <p>{CardInfo.location}</p>
        <div className="header-text">Date</div>
        <p>{CardInfo.date}</p>
        <div className="header-text">Tags</div>
        <TagOutput tags_list={CardInfo.tags.split(',')} ></TagOutput>
        <div className="header-text">Rating</div>
        <StarsToDisplay text_input={CardInfo.rating}></StarsToDisplay>
      </div>
    </div>

  )
}


class EventExpand extends Component
{

  render() {
    const { CardInfo } = this.props;
    console.log("The properties in EventExpand");
    console.log(CardInfo);

    return(
      <div class="grid-container">

        <div class="Carasoul">
          <Carousel CardInfo={CardInfo}/>
        </div>

        <div class="Description">
          <DescriptionCard CardInfo={CardInfo}/>
        </div>

      </div>
    )
  }

}

export default EventExpand