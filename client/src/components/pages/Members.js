import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class MyFancyComponent extends React.PureComponent {
  constructor(props) { 
  super(props);
  this.state = {
    members: []
  }

  console.log(this.state);
 }
  componentDidMount() {

   API.getMembers().then(response => {
          this.setState({ 
          members: response.data
        })
          console.log(response.data);
        })
        .catch(err => console.log(err));
  }

  render() {
    return ( 

      <div className="col-lg-9 col-lg-offset-1">
      {this.state.members.length ? (
       <ul className="black">

        {this.state.members.map(member => (
          <div key={member._id} className="blackli" >
            <Link to={"/trips/" + member.local.username} className="blackli">
            <strong>
          {member.local.username}
            </strong>
            </Link>

        </div>
          ))}
        </ul>

        )

      : (

        <h1>There Are No Members Yet!</h1>
        )}
    </div>


    )
  }
}


export default MyFancyComponent