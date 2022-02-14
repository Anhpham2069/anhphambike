import React,{useEffect} from 'react'
import mapboxgl from 'mapbox-gl'
import styled from 'styled-components'

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5ocDIwNjkiLCJhIjoiY2t6a3hkYWhmMjgwMzJ1b2JzcnZvd2hzMiJ9.2YULJL_yTw3TG2uLEcf_wg'

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
         container: "map",
         style: 'mapbox://styles/mapbox/streets-v11',
         center: [-99.29011, 39.39172],
         zoom: 3
        })
      })
    return (
    <Wrapper id="map"></Wrapper>
  )
}

export default Map

const Wrapper = styled.div`
    flex: 1;
`