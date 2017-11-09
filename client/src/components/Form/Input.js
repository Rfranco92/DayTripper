import "./Input.css";
import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import DropDown from "../DropDown";
import axios from "axios"
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


export class Input extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      address1: '',
      address2: '',
      start: '',
      end: '',
      geocodeResults1: '',
      geocodeResults2: '',
      loading: false
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChanges = this.handleChanges.bind(this)
  }

  handleFormSubmit(event) {
  	event.preventDefault()

    geocodeByAddress(this.state.address1)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('Success Yay', { lat, lng })
        this.setState({
          geocodeResults1: {lat, lng},
          loading: false
        })
      })
      .catch((error) => {
        console.log('Oh no!', error)
      })

     geocodeByAddress(this.state.address2)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('Success Yay', { lat, lng })
        this.setState({
          geocodeResults2: {lat, lng},
          loading: false
        })
      })
      .catch((error) => {
        console.log('Oh no!', error)
      })


      axios
      .post('/api/createtrip', {
        address: this.state.geocodeResults1,
        end: this.state.geocodeResults2,
        startDate: this.state.start,
        endDate: this.state.end
      })
      .then(response => {
        console.log(response)
        if (!response.data.error) {
          this.setState({
            redirectTo: '/currenttrips'
          })
        } else {
          alert(response.data.error)
        }
      })
     }  

    handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    };


  handleChange(address1) {
    this.setState({
      address1,
      geocodeResults1: null
    })
  }

  handleChanges(address2) {
    this.setState({
      address2,
      geocodeResults2: null
    })
  }
  

  render() {

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div className="Demo__suggestion-item">
        <i className='fa fa-map-marker Demo__suggestion-icon'/>
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small className="text-muted">{formattedSuggestion.secondaryText}</small>
      </div>)

    const inputStartProps = {
      type: "text",
      value: this.state.address1,
      onChange: this.handleChange,
      onBlur: () => { console.log('Blur event!'); },
      onFocus: () => { console.log('Focused!'); },
      autoFocus: true,
      placeholder: "Starting Address"
    }

    const inputEndProps = {
      type: "text",
      value: this.state.address2,
      onChange: this.handleChanges,
      onBlur: () => { console.log('Blur event!'); },
      onFocus: () => { console.log('Focused!'); },
      autoFocus: true,
      placeholder: "Ending Address"
    }

    return (
    	<div className="col-lg-10">
  	      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete 
            autocompleteItem={AutocompleteItem}
            inputProps={inputStartProps} />
            <br/>

          <input
            value={this.state.start}
            name="start"
            onChange={this.handleInputChange}
            type="date"
            placeholder="Starting Date"
            />
        <PlacesAutocomplete 
            autocompleteItem={AutocompleteItem}
            inputProps={inputEndProps} />


          <input
            value={this.state.end}
            name="end"
            onChange={this.handleInputChange}
            type="date"
            placeholder="Ending Date"
            />
        <button>Submit</button>
      </form>
      </div>
    )
  }
}

export default Input;