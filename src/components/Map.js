import React, { useState } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'

import Button from 'react-bootstrap/Button';


  const Map = (props) => {
  const [ myMap, setMyMap ] = useState(null);
  const [ center, setCenter ] = useState({ lat: props.latitude, lng: props.longitude});
  
  const [ open, setOpen ] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });

  const [name, setName] = useState('');
  const [coordinates, setCoordinates] = useState('');

  const renderMap = () => (

        <GoogleMap

          mapContainerStyle={{
            height: "100vh",
            width: "100vw",
            margin: "30px",
          }}
          zoom={3}
          center={center}
          onLoad={map => setMyMap(map)}
        >

        <Marker position={{lat: props.latitude, lng: props.longitude }} onClick={() => 
            
                  setOpen(true)
                  }></Marker>

                  {open &&(

                <InfoWindow position={{lat: props.latitude, lng: props.longitude }} onCloseClick={ () =>{

                  setOpen(false);

                  }} >

                    <div> 

                        <input id="coordinates" style={{ margin:"9px", padding:"9px"}} placeholder="Enter coordinates" onChange={event => 
                            setCoordinates(event.target.value)}> 

                        </input>

                        <input id="name"  style={{ margin:"9px", padding:"9px"}} placeholder="Enter your name"  onChange={event => 
                            setName(event.target.value)}>

                        </input>

                        <Button variant="success" type="submit"  onClick={()=>{console.log("Your current coordinates: "+ coordinates +'\n'+"Your Name: "+name)}} > Submit

                        </Button>
                        

                    </div>
                    

                </InfoWindow>
                

                  )}


       </GoogleMap>
        
  )

  return isLoaded ? renderMap() : null;
}

export default Map