import './style.css';
import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Montserrat-Medium.ttf';
import './CardBody.css';

import {
  Link
} from "react-router-dom";

const trimString = (text_input, limit) => {
    var text_input2 = text_input.replace(/\n/g, '');
    if(text_input2.length > limit)
    {
      return (text_input2.substring(0,limit) + "...");
    }
    return (text_input2.substring(0,limit) + '\n');
  }

const dayMonthYear = (date) => {
  var splitDate = date.split("-");
  if (splitDate[1][0] === "0"){
    var newDate = splitDate[1].substring(1,) + "/" + splitDate[2] + "/" + splitDate[0];
  }
  else{
    var newDate = splitDate[1] + "/" + splitDate[2] + "/" + splitDate[0];
  }
  
  return newDate
}



const TagOutput = (props) => {
  const tags_list = props.tags_list;
  const listItems = tags_list.map((tags) =>
  <span class="badge badge badge-primary" style={{ padding: '4%', marginRight: '10px', marginTop: '10px'}}>{tags}</span>
  );

  return (
      <div>{listItems.splice(0,3)}</div>
  );
}


const CardBody = props => {
    //const [modalShow, setModalShow] = React.useState(false);
    const rows = props.characterData.map((row, index) => {

    var trimmed_name = trimString(row.event, 40);
    var tags = row.tags.split(",");
    var rating = row.rating;
    var date = row.date;
    var location = row.location;
    var description = trimString(row.description, 25);
    var d = dayMonthYear(row.date);

      return (


        <li className="Cards">
          <div class="grow" style={{cursor: 'pointer',}}>

          <Link to={{
            pathname: "/eventdetails/:" + row._id,
          }}  onClick={() => props.setInfo(row)}>

                <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '300px', height: "400px", borderRadius: '2rem',}}>
                  <Card.Img style={{ height: '30%', objectFit: 'cover', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem'}} src={row.photo} />
                  <div style={{ textAlign: 'center', fontSize: '1.5rem', letterSpacing: '-1px', height: '2.5rem', color: 'white', backgroundColor: 'rgb(17, 134, 242)'}}>{d}</div>
                  <Card.Body>
                        <Card.Title>{trimmed_name}</Card.Title>
                        <TagOutput tags_list={tags} ></TagOutput>
                        <Card.Text style={{position: 'absolute', marginLeft: 'auto', marginRight: 'auto', top: "75%", left: '0', right: '0', textAlign: 'center', fontSize: '1.25rem',}}>{location}</Card.Text>
                  </Card.Body>
                      <div className = 'row'>
                        <i className="glyphicon glyphicon-heart" style={{marginLeft: "7%",marginBottom :"5%", display:'flex', fontSize:'30px', color: "#1186F2"}}></i>
                        <p style={{marginLeft:"3%",marginTop:"1%"}}>{rating} Likes</p>
                      </div>
                </Card>

              </Link>

          </div>
        </li>

      )
    })
  
    return <tbody>{rows}</tbody>
  }

  export default CardBody