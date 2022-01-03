import React from "react";
import {GoogleMap,withScriptjs,withGoogleMap} from "react-google-maps"

function Map() {
    return <GoogleMap 
    defaultZoom={14} 
    defaultCenter={{lat:51.10685899391002,lng:17.033597910161696}}
    />;  
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Map(){
    return
    <div style={{width: '100vw', height:'100vw'}}>
        <WrappedMap 
            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBU_X8LRvRvKLFFhPzz8fVHQJNXxC4X_XU'}
            loadingElement={<div style={{height:"100%"}}/>}
            containerElement={<div style={{height:"100%"}}/>}
            mapElement={<div style={{height:"100%"}}/>}
        />
    </div>
}