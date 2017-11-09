import "./Input.css";
import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import DropDown from "../DropDown";
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

  }

  handleChange(address1) {
    this.setState({
      address1,
      geocodeResults: null
    })
  }

  handleChanges(address2) {
    this.setState({
      address2,
      geocodeResults: null
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
    	<div className="col-lg-6">
  		<div className="form-group">
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete 
            autocompleteItem={AutocompleteItem}
            inputProps={inputStartProps} />
        <PlacesAutocomplete 
            autocompleteItem={AutocompleteItem}
            inputProps={inputEndProps} />
        <button>Submit</button>
      </form>
      </div>
      </div>
    )
  }
}

export default Input;