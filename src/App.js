import React from 'react';

import './App.css';

import Map from './components/Map'

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import Alert from 'react-bootstrap/Alert';


class App extends React.Component{
constructor (props){

  super(props);
  this.state = {

    latitude:51.1657,
    longitude: 10.4515,
    
  };

this.getLocation = this.getLocation.bind(this)
this.getCordinates= this.getCordinates.bind(this)

}
 
  getLocation() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCordinates, this.handleLocationError);

    } else {

      alert( "Geolocation is not supported by this browser.");

    }

 }

  getCordinates(position) {

   // console.log(position);

   this.setState({

      latitude: position.coords.latitude,
      longitude: position.coords.longitude


    })

  }
  

 handleLocationError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert( "User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert( "Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert( "The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
      
      default:
        alert("An unknown error occurred.")
    }
  }

    render(){

      return (

      <div className="App">

        <h2 style={{margin: "20px", padding: "20px", display: "flex", alignItems: "center",justifyContent: "center",
            flexDirection: "column", color:"green"}}>

         <b> <u>Click on the "Get coordinates" button to get your current location's coordinates </u> </b> 

        </h2>
        <br/>
       
        <Button variant="info"  onClick={this.getLocation}>Get coordinates</Button>
        
        <br/>
        <br/>
        
        <h3><p><b> Current latitude:</b> {this.state.latitude}</p>
        <p> <b> Current longitude: </b> {this.state.longitude}</p></h3>
 
        <Alert key={5} variant={'warning'}>
         To view the map in fullscreen please click the fullscreen button located on the map's right top corner.
        </Alert>
  
        <Map latitude={this.state.latitude} longitude={this.state.longitude} > 
        
        </Map>

      </div>

      );

    }


  }
export default App;
