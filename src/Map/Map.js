
import React from "react";
import { useState } from "react";
import {GoogleMap,withScriptjs,withGoogleMap,Marker,InfoWindow} from "react-google-maps"
import * as shopsData from "./shops.json";

function Map() {

    const[selectedShop,setSelectedShop] = useState(null)
    
    return (<GoogleMap 
    defaultZoom={14} 
    defaultCenter={{lat:51.10685899391002,lng:17.033597910161696}}
    >;
         {shopsData.features.map((shop)=>(
            <Marker 
                key={shop.properties.SHOP_ID}
                position={{
                    lat:shop.geometry.coordinates[0],
                    lng:shop.geometry.coordinates[1]
                }}

                onClick={()=>{
                    setSelectedShop(shop);
                }}
            />
        ))}

        {selectedShop &&(
            <InfoWindow
                position={{
                    lat:selectedShop.geometry.coordinates[0],
                    lng:selectedShop.geometry.coordinates[1]   
                }}
                onCloseClick={()=>{
                    setSelectedShop(null);
                }}
            >
                <div>
                    
                    <h2>{selectedShop.properties.NAME}</h2>
                    <p><a href={selectedShop.properties.PAGE}>Shop Page</a></p>
                    
                    <p><a href={selectedShop.properties.LINK}>Open shop web</a></p></div>
            </InfoWindow>
        )}
    </GoogleMap> 
    );  
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Maps(){
return(
    <div style={{width: '100vw', height:'100vw'}}>
        <WrappedMap 
            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC07-IeUM0Hwq5d3Qlzp5v-ygzKb5RQMS4'}
            loadingElement={<div style={{height:"100%"}}/>}
            containerElement={<div style={{height:"100%"}}/>}
            mapElement={<div style={{height:"100%"}}/>}
        />
    </div>
)}
