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
      geocodeResults: null,
      loading: false
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChanges = this.handleChanges.bind(this)
    this.renderGeocodeFailure = this.renderGeocodeFailure.bind(this)
    this.renderGeocodeSuccess = this.renderGeocodeSuccess.bind(this)
  }

  handleFormSubmit(event) {
  	event.preventDefault()

    geocodeByAddress(this.state.address1)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('Success Yay', { lat, lng })
        this.setState({
          geocodeResults: this.renderGeocodeSuccess(lat, lng),
          loading: false
        })
      })
      .catch((error) => {
        console.log('Oh no!', error)
        this.setState({
          geocodeResults: this.renderGeocodeFailure(error),
          loading: false
        })
      })

     geocodeByAddress(this.state.address2)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('Success Yay', { lat, lng })
        this.setState({
          geocodeResults: this.renderGeocodeSuccess(lat, lng),
          loading: false
        })
      })
      .catch((error) => {
        console.log('Oh no!', error)
        this.setState({
          geocodeResults: this.renderGeocodeFailure(error),
          loading: false
        })
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

  renderGeocodeFailure(err) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Error!</strong> {err}
      </div>
    )
  }

  renderGeocodeSuccess(lat, lng) {
    return (
      <div className="alert alert-success" role="alert">
        <strong>Success!</strong> Geocoder found latitude and longitude: <strong>{lat}, {lng}</strong>
      </div>
    )
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
        <PlacesAutocomplete 
            autocompleteItem={AutocompleteItem}
            inputProps={inputEndProps} />
        <button>Submit</button>
      </form>
      </div>
    )
  }
}

export default Input;