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
      <Container fluid>
      {this.state.members.length ? (
        <List>
        {this.state.members.map(member => (
          <ListItem key={member._id}>
            <Link to={"/trips/" + member.local.username}>
            <strong>
          {member.local.username}
            </strong>
            </Link>
            </ListItem>

          ))}
        </List>

        )

      : (

        <h1>There Are No Members Yet!</h1>
        )}
    </Container>


    )
  }
}


export default MyFancyComponent